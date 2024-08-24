import PropTypes from "prop-types";
import { IoClose as Close } from "react-icons/io5";
import Input from "./Input.jsx";
import {useState} from "react";

const TagsInput = ({ tags, setTags, label, placeholder = "Enter a tag and press Enter" }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            if (!tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()]);
                setInputValue("");
            }
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-1 px-2.5 py-1 hover:bg-dc-blue/40 transition-colors bg-dc-blue/20 rounded-xl">
                        <span>{tag}</span>
                        <span
                            className="cursor-pointer"
                            onClick={() => removeTag(index)}
                        >
                            <Close size={16} />
                        </span>
                    </div>
                ))}
            </div>
            <Input
                value={inputValue}
                label={label}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="mt-2"
            />
        </div>
    );
};

TagsInput.propTypes = {
    tags: PropTypes.array.isRequired,
    setTags: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default TagsInput;
