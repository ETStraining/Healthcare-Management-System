import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import {cn} from "../../utils/utils.js";

const SelectContext = createContext(undefined);

const Select = React.forwardRef(({ label, className, onChange, required, name, ...props }, ref) => {
    const [activeOption, setActiveOption] = useState(null);

    const handleChange = (e) => {
        onChange?.(e);
    };

    return (
        <SelectContext.Provider value={{ activeOption, setActiveOption }}>
            <label>
                <span className="text-dark font-medium">{label}</span>
                {required && <span className="ms-1 text-red-400 font-medium">*</span>}
                <select
                    ref={ref}
                    name={name}
                    onChange={handleChange}
                    required={required}
                    {...props}
                    className={cn('mt-1 py-[0.375rem] px-3 w-full outline-none border border-light-gray rounded-[0.375rem] text-dark text-[0.9375rem] font-medium transition-all focus:border-dc-blue focus:ring-4 focus:ring-dc-blue/30', className)}
                />
            </label>
        </SelectContext.Provider>
    );
});

Select.displayName = "CompoundSelect"

const Option = ({ value, children }) => {
    useSelectContext();
    return (
        <option value={value}>
            {children}
        </option>
    );
};

Select.Option = Option;

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error("useSelect context should be used within the Select scope");
    }
    return context;
};

Select.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired
};

Option.propTypes = {
    children: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Select;
