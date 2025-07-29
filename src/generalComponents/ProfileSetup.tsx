import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import ImageUploadCropper from './ImageUploadCropper.tsx';
import PurpleBtn from './purpleBtn.tsx';

interface ProfileProps {
  about: string;
  setAbout: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  croppedImageUrl?: string | null;
  setCroppedImageUrl: Dispatch<SetStateAction<string | null>>;
  next:()=>void;
  skipSteps:()=>void
}

export default function ProfileSetup({ about, setAbout, setCroppedImageUrl,next,skipSteps }: ProfileProps) {
  const [error, setError] = useState('')
  useEffect(() => {
    if (about.length > 199) { setError('Maximum 200 characters!') } else { setError('') }
  }, [about])
  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-2">Profile Setup</h2>
      <p className="text-center text-sm text-gray-500 mb-6">Add a bit more about you</p>

      <ImageUploadCropper onImageCropped={setCroppedImageUrl} />
      {/* {croppedImageUrl && (
        <div className="mt-4 hidden">
          <img
            src={croppedImageUrl}
            alt="Final cropped avatar"
            className="w-24 h-24 rounded-full object-cover border-2 border-purple-500"
          />
        </div>
      )} */}
      <div className="mt-6">
        <label htmlFor="about" className="block text-sm font-medium mb-1">About Yourself</label>
        <textarea
          id="about"
          className={`${error !== '' && 'ring-red-500'} w-full border rounded-lg p-3 text-sm outline-none focus:ring focus:ring-purple-300 bg-light-white`}
          rows={4}
          maxLength={200}
          value={about}
          onChange={setAbout}
        ></textarea>
        {error && <p className="justify-self-center text-red-500">{error}</p>}
        <div className="text-right text-xs text-gray-400 mt-1">{about.length} / 200</div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <PurpleBtn 
        click={next}
        upperCase='false'
        classes='w-full max-w-[300px]'
        text='Continue'/>
        <p
          onClick={skipSteps}
          className="text-gray-600">Skip for now.</p> 
      </div>
    </div>

  );
}