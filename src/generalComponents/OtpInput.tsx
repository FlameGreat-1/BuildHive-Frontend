import React, { useRef } from "react";

interface OtpInputProps {
  length?: number;
  error?:boolean;
  value: string[];
  onChange: (val: string[]) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, value, onChange, error }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d?$/.test(digit)) return; // Allow only digits

    const newValue = [...value];
    newValue[index] = digit;
    onChange(newValue);

    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex space-x-2 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          title="OTP"
          key={index}
          ref={(el) => {inputsRef.current[index] = el}}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={`${error ? 'border-red-500' : 'border-gray-600 '}  w-12 h-12 text-center text-xl border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-purple`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
