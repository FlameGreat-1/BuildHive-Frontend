import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  File as FileIcon,
  FileText,
  FileImage,
  FileCheck,
  FileX,
  Trash2,
  UploadCloud,
} from 'lucide-react'
import axios from 'axios'

export type UploadFile = {
  file: File
  progress: number
  uploaded: boolean
  error?: string
}

interface FileUploaderProps {
  files: UploadFile[]
  setFiles: React.Dispatch<React.SetStateAction<UploadFile[]>>
  uploadUrl?: string
  showProgress?: boolean // NEW
}

const FileUploader: React.FC<FileUploaderProps> = ({
  files,
  setFiles,
  uploadUrl = '',
  showProgress = true,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles: UploadFile[] = acceptedFiles.map((file) => ({
        file,
        progress: 0,
        uploaded: !showProgress, // assume uploaded if no progress
      }))

      setFiles((prev) => {
        const all = [...prev, ...newFiles]

        if (showProgress && uploadUrl) {
          newFiles.forEach((file, idx) => {
            uploadFile(file, all.length - newFiles.length + idx)
          })
        }

        return all
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setFiles, showProgress, uploadUrl]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true })

  const uploadFile = async (uploadFile: UploadFile, index: number) => {
    const formData = new FormData()
    formData.append('file', uploadFile.file)

    try {
      await axios.post(uploadUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          if (event.total) {
            const percent = Math.round((event.loaded * 100) / event.total)
            setFiles((prev) => {
              const updated = [...prev]
              updated[index].progress = percent
              return updated
            })
          }
        },
      })

      setFiles((prev) => {
        const updated = [...prev]
        updated[index].uploaded = true
        return updated
      })
    } catch {
      setFiles((prev) => {
        const updated = [...prev]
        updated[index].error = 'Upload failed'
        return updated
      })
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 rounded-md text-center cursor-pointer transition-colors ${isDragActive ? 'bg-purple-100 border-purple-400' : 'bg-purple-50 border-purple-300'
          }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-2">
          <UploadCloud className="h-10 w-10 text-purple-500" />
          <p className="text-purple-700 font-semibold">Drag and drop files here</p>
          <p className="text-sm text-gray-500">OR</p>
          <span className="bg-purple-600 text-white text-sm px-4 py-2 rounded hover:bg-purple-700">
            Browse files
          </span>
        </div>
      </div>

      {files.length > 0 && (
        <>
          <p className='w-full border-gray-400 border-b-2'>Uploaded Files</p>
          <div className="space-y-3">
            {files.map((f, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 p-2 border rounded-md shadow-sm bg-white"
              >
                <LucideFileIcon filename={f.file.name} />

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-800 truncate max-w-[200px]">
                      {f.file.name}
                    </span>

                    <div className="flex items-center space-x-2">
                      {f.uploaded ? (
                        <FileCheck className="text-green-600 w-5 h-5" />
                      ) : f.error ? (
                        <FileX className="text-red-500 w-5 h-5" />
                      ) : (
                        <button
                          type='button'
                          onClick={() => removeFile(idx)}
                          className="text-red-400 hover:text-red-600"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {showProgress && !f.uploaded && !f.error && (
                    <div className="bg-gray-200 h-2 rounded overflow-hidden">
                      <div
                        className="bg-purple-500 h-full transition-all duration-300"
                        style={{ width: `${f.progress}%` }} />
                    </div>
                  )}

                  {f.uploaded && (
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round(f.file.size / 1024)} KB
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div></>
      )}
    </div>
  )
}

const LucideFileIcon: React.FC<{ filename: string }> = ({ filename }) => {
  const ext = filename.split('.').pop()?.toLowerCase()
  if (['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) return <FileImage className="text-green-600 w-6 h-6" />
  if (['txt', 'doc', 'docx'].includes(ext || '')) return <FileText className="text-yellow-600 w-6 h-6" />
  if (ext === 'pdf') return <FileIcon className="text-red-600 w-6 h-6" />
  return <FileIcon className="text-gray-500 w-6 h-6" />
}

export default FileUploader