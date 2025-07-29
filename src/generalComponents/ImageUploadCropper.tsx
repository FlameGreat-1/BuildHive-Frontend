/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { getCroppedImg } from "@/utils/CropImage"

interface ImageUploadCropperProps {
  onImageCropped: (croppedUrl: string) => void;
}

const ImageUploadCropper: React.FC<ImageUploadCropperProps> = ({ onImageCropped }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [showCropper, setShowCropper] = useState(false);

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setShowCropper(true);
    };
  };

  const handleCrop = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      // const croppedUrl = URL.createObjectURL(croppedImage);
      onImageCropped(croppedImage);
      setShowCropper(false);
    } catch (err) {
      console.error("Crop failed", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 rounded-full bg-gray-100 ">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Preview"
            className="w-full h-full object-cover overflow-hidden rounded-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <FontAwesomeIcon icon={faPen} />
          </div>
        )}
        <label
          className="absolute bottom-0 right-0 bg-white rounded-[50%] shadow cursor-pointer text-black ">
          <FontAwesomeIcon icon={faPen} className=" text-primary-purple relative z-10 p-2" />
          <input
            title="Input Image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {showCropper && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-xs h-80 bg-white rounded-xl overflow-hidden relative">
            <Cropper
              image={imageSrc!}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleCrop}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setShowCropper(false)}
              className="text-white underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadCropper;