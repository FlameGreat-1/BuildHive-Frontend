/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/CustomSelect.tsx

import React from 'react'
import Select from 'react-select'
import CustomDropdownIndicator from './CustomDropdownIndicator'

type Option = {
  value: string
  label: string
}

type Props = {
  options: Option[]
  value: Option[]
  onChange: (value: Option[]) => void
}

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: '#F8FAFC',
    borderColor: /*state.isFocused ? '#6B46C1' : */'#6B46C1',
    boxShadow: state.isFocused ? '0 0 4px 2px #6B46C1' : '0 0 2px 1px #6B46C1',
    '&:hover': {
      borderColor: '#6B46C1'
    },
    borderRadius: '20px',
    padding: '2px 6px',
    minHeight: '48px',
    fontSize: '1rem',
    fontWeight: 500,
  }),

  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? 'rgba(107, 70, 193,1)'
      : state.isFocused
      ? 'rgba(107, 70, 193,0.5)'
      : '#fff',
    color: state.isSelected ? '#F3EAEA' : 'black',
    
    padding: '5px 5px',
    margin: '5px 0',
    cursor: 'pointer',
    borderRadius: '20px',
    fontSize: '0.95rem',
  }),

  multiValue: (base: any) => ({
    ...base,
    backgroundColor: '#A855F7',
    borderRadius: '1rem',
    padding: '2px 6px',
    
  }),
  dropdownIndicator:(base:any, state:any)=>({
    ...base,

    transform:state.selectProps.menuIsOpen?'rotate(180deg)':undefined,
    transition:'transform 0.2s ease'
  }),

  multiValueLabel: (base: any) => ({
    ...base,
    color:'black',
    fontWeight: 500,
  }),

  multiValueRemove: (base: any) => ({
    ...base,
    // display:'none',
    color: '#000',
    ':hover': {
      backgroundColor: '#black',
      color: '#000',
    },
  }),

  menu: (base: any) => ({
    ...base,
    padding:'0 10px',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
  }),
}

const CustomSelect: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <Select
      isMulti
      components={{
        DropdownIndicator:CustomDropdownIndicator,
        IndicatorSeparator:()=>null,
      }}
      options={options}
      styles={customStyles}
      placeholder="Select"
      value={value}
      onChange={(val) => onChange(val as Option[])}
    />
  )
}

export default CustomSelect