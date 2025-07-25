// import React, { useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFilePdf,
//     faFileImage,
//     faFileAlt,
//     faCheckCircle,
//     faTimesCircle,
// } from "@fortawesome/free-solid-svg-icons";

// type UploadFile = {
//     file: File;
//     progress: number;
//     status: "uploading" | "done" | "error";
// };

// const getFileIcon = (file: File) => {
//     const ext = file.name.split(".").pop()?.toLowerCase();
//     if (ext === "pdf")
//         return <FontAwesomeIcon icon={faFilePdf} className="text-red-500 text-2xl" />;
//     if (["jpg", "jpeg", "png", "gif"].includes(ext || ""))
//         return <FontAwesomeIcon icon={faFileImage} className="text-teal-400 text-2xl" />;
//     if (ext === "txt")
//         return <FontAwesomeIcon icon={faFileAlt} className="text-yellow-400 text-2xl" />;
//     return <FontAwesomeIcon icon={faFileAlt} className="text-gray-400 text-2xl" />;
// };

// const formatSize = (size: number) => {
//     if (size > 1024 * 1024) return (size / (1024 * 1024)).toFixed(2) + "mb";
//     if (size > 1024) return (size / 1024).toFixed(2) + "kb";
//     return size + "b";
// };

const FileUpload: React.FC = () => {
    // const [files, setFiles] = useState<UploadFile[]>([]);
    // const inputRef = useRef<HTMLInputElement>(null);

    // // Simulate upload progress
    // const uploadFile = (uploadFile: UploadFile, idx: number) => {
    //     let progress = 0;
    //     setFiles((prev) =>
    //         prev.map((f, i) =>
    //             i === idx ? { ...f, status: "uploading", progress: 0 } : f
    //         )
    //     );
    //     const interval = setInterval(() => {
    //         progress += Math.random() * 25 + 10;
    //         if (progress >= 100) {
    //             clearInterval(interval);
    //             setFiles((prev) =>
    //                 prev.map((f, i) =>
    //                     i === idx ? { ...f, progress: 100, status: "done" } : f
    //                 )
    //             );
    //         } else {
    //             setFiles((prev) =>
    //                 prev.map((f, i) =>
    //                     i === idx ? { ...f, progress: Math.floor(progress) } : f
    //                 )
    //             );
    //         }
    //     }, 300);
    // };

    // const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (!event.target.files) return;
    //     const selectedFiles = Array.from(event.target.files).map((file) => ({
    //         file,
    //         progress: 0,
    //         status: "uploading" as const,
    //     }));
    //     setFiles((prev) => [...prev, ...selectedFiles]);
    //     selectedFiles.forEach((f, idx) => uploadFile(f, files.length + idx));
    // };

    // const removeFile = (idx: number) => {
    //     setFiles((prev) => prev.filter((_, i) => i !== idx));
    // };

    return (
        <div className="w-full">
            {/* <div className="mb-2 font-semibold text-gray-700">Upload Files</div>
            <div className="mb-2 text-gray-500 text-sm">
                Upload Certifications you would like to share
            </div>
            <div
                className="rounded-xl border-2 border-dashed border-primary-purple bg-gradient-to-b from-[#f7f3ff] to-[#e6e6fa] flex flex-col items-center justify-center py-8 mb-4"
                onClick={() => inputRef.current?.click()}
                style={{ cursor: "pointer" }}
            >
                <svg width="48" height="48" fill="none" className="mb-2">
                    <path
                        d="M24 6v24M24 6l-7 7M24 6l7 7"
                        stroke="#A855F7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="8"
                        y="32"
                        width="32"
                        height="10"
                        rx="5"
                        fill="#A855F7"
                        fillOpacity="0.1"
                    />
                </svg>
                <div className="text-gray-500 mb-2">Drag and drop files here</div>
                <div className="text-gray-500 mb-2">OR</div>
                <button
                    type="button"
                    className="bg-primary-purple text-white px-6 py-2 rounded-full font-semibold shadow"
                >
                    Browse files
                </button>
                <input
                    title="pll"
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFiles}
                />
            </div>
            <div className="mb-2 font-semibold text-gray-700">Uploaded files</div>
            <hr className="mb-2" />
            <div className="space-y-4">
                {files.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        {getFileIcon(f.file)}
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-sm">{f.file.name}</span>
                                <span className="text-xs text-gray-400">{formatSize(f.file.size)}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded h-1.5 mt-1">
                                <div
                                    className={`h-1.5 rounded transition-all duration-300 ${f.status === "done"
                                            ? "bg-green-500"
                                            : f.status === "error"
                                                ? "bg-error-red"
                                                : "bg-primary-purple"
                                        }`}
                                    style={{ width: `${f.progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="ml-2">
                            {f.status === "done" ? (
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="focus:outline-none"
                                    aria-label="Remove file"
                                >
                                    <FontAwesomeIcon icon={faTimesCircle} className="text-purple-200 hover:text-error-red text-lg" />
                                </button>
                            )}
                        </div>
                        <span className="ml-2 text-xs text-gray-500 w-8 text-right">
                            {f.status !== "done" && `${f.progress}%`}
                        </span>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default FileUpload;