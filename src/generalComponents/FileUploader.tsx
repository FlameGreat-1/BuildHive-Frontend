// components/FileUploader.tsx
import React, { useCallback, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export type UploadFile = {
  file: File
  progress: number
  uploaded: boolean
  canceled: boolean
  xhr?: XMLHttpRequest
}

export type FileUploaderProps = {
  uploadUrl: string
  onFilesChange?: (files: UploadFile[]) => void
  multiple?: boolean
  className?: string
}

const FileUploader: React.FC<FileUploaderProps> = ({
  uploadUrl,
  onFilesChange,
  multiple = true,
  className = ''
}) => {
  const [files, setFiles] = useState<UploadFile[]>([])
  const xhrRefs = useRef<Record<number, XMLHttpRequest>>({})

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadList = acceptedFiles.map(file => ({
        file,
        progress: 0,
        uploaded: false,
        canceled: false,
        xhr: undefined
      }))

      setFiles(prev => {
        const updated = [...prev, ...uploadList]
        onFilesChange?.(updated)
        return updated
      })

      uploadList.forEach((item, i) => {
        const index = files.length + i
        uploadFile(item.file, index)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [uploadUrl, files.length, onFilesChange]
  )

  const uploadFile = (file: File, index: number) => {
    const formData = new FormData()
    formData.append('file', file)

    const xhr = new XMLHttpRequest()
    xhrRefs.current[index] = xhr

    xhr.upload.addEventListener('progress', e => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded * 100) / e.total)
        setFiles(prev => {
          const updated = [...prev]
          if (!updated[index].canceled) {
            updated[index].progress = percent
          }
          onFilesChange?.(updated)
          return updated
        })
      }
    })

    xhr.addEventListener('load', () => {
      setFiles(prev => {
        const updated = [...prev]
        if (!updated[index].canceled) {
          updated[index].uploaded = true
        }
        onFilesChange?.(updated)
        return updated
      })
    })

    xhr.addEventListener('abort', () => {
      setFiles(prev => {
        const updated = [...prev]
        updated[index].canceled = true
        onFilesChange?.(updated)
        return updated
      })
    })

    xhr.send(formData)
    setFiles(prev => {
      const updated = [...prev]
      updated[index].xhr = xhr
      return updated
    })
  }

  const cancelUpload = (index: number) => {
    const xhr = xhrRefs.current[index]
    if (xhr) {
      xhr.abort()
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple })

  return (
    <div className={`w-full max-w-xl p-4 border-2 border-dashed rounded-xl ${className}`}>
      <div
        {...getRootProps()}
        className={`cursor-pointer p-8 text-center rounded-lg transition-all ${
          isDragActive ? 'bg-blue-100' : 'bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag & drop files here or click to select</p>
      </div>

      <div className="mt-4 space-y-2">
        {files.map((f, i) => (
          <div key={i} className="bg-white p-2 rounded shadow">
            <div className="flex justify-between items-center">
              <p className="text-sm truncate">{f.file.name}</p>
              {!f.uploaded && !f.canceled && (
                <button
                  onClick={() => cancelUpload(i)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Cancel
                </button>
              )}
              {f.canceled && <span className="text-xs text-gray-400">Canceled</span>}
            </div>
            <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mt-1">
              <div
                className={`h-full transition-all ${
                  f.canceled ? 'bg-red-300' : 'bg-blue-500'
                }`}
                style={{ width: `${f.progress}%` }}
              />
            </div>
            <p className="text-xs text-right text-gray-500">{f.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FileUploader