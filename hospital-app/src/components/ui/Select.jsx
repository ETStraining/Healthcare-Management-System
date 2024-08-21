import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";


const SelectContext = createContext(undefined);

const Select = ({children, label, className, onChange, required, name}) => {
    const [activeOption, setActiveOption] = useState(null);
    const handleChange = (e) => {
        onChange?.(e); // Call onChange if it's provided
    };
    return(
        <SelectContext.Provider value={{activeOption, setActiveOption}}>
            <label>
                <span className="text-dark font-medium">{label}</span>
                {required && <span className="ms-1 text-red-400 font-medium">*</span>}
                <select
                    onChange={handleChange}
                    required={required}
                    name={name}
                    className={`mt-1 py-[0.375rem] px-3 w-full capitalize outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] font-medium transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30 ${className}`}
                >
                    {children}
                </select>
            </label>
        </SelectContext.Provider>
    )
}

const Option = ({value, children}) => {
    const {activeOption, setActiveOption} = useSelectContext();
    return (
        <option
            value={value}
            onChange={() => setActiveOption(value)}
        >
            {children}
        </option>
    )
}

Select.Option = Option;

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if(!context) {
        throw new Error("useSelect context should be used within the Select scope")
    }
    return context;
}

Select.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    required: PropTypes.bool
}

Option.propTypes = {
    children: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}


export default Select;