import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { components,type DropdownIndicatorProps,type GroupBase } from "react-select"


const CustomDropdownIndicator = <Option, isMulti extends boolean=false>(props:DropdownIndicatorProps<Option, isMulti,GroupBase<Option>>) => {
  return (
    <components.DropdownIndicator {...props}>
        <FontAwesomeIcon 
        className="text-primary-purple text-lg "
        icon={faCaretDown}/>
    </components.DropdownIndicator>
  )
}

export default CustomDropdownIndicator