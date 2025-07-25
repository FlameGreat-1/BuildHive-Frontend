// Checkbox.tsx import React from 'react'

interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
    return (<label htmlFor={id} className="flex items-center space-x-2 cursor-pointer"> <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
    /> <div className="w-5 h-5 rounded border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-transparent flex items-center justify-center"> <svg
        className="w-3 h-3 text-white hidden peer-checked:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    > <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /> </svg> </div> <span className="text-gray-700">{label}</span> </label>)
}


// Radio.tsx import React from 'react'

interface RadioProps {
    name: string;
    id: string;
    value: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, labelClass?: string;
}

const Radio: React.FC<RadioProps> = ({ name, id, value, label, checked, onChange, labelClass }) => {
    return (
        <label htmlFor={id} className={` flex items-center font-semibold space-x-2 cursor-pointer`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="peer hidden"
            />
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-dark-black peer-checked:bg-primary-purple bg-[#F3EAEA]">
                <div className="min-w-2.5 minh-2.5 bg-primary-purple rounded-full peer-checked:block hidden">
                </div>
            </div>
            <span className={`${labelClass ? labelClass : ''} text-black`}>{label}</span>
        </label>)
}

export { Checkbox, Radio }
