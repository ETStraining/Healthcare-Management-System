import PropTypes from "prop-types";
import {cn} from "../../utils/utils.js";
import {cva} from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
    "inline-block px-5 py-2 text-white rounded-md cursor-pointer transition-all",
    {
        variants: {
            variant: {
                primary: "bg-dc-blue/80 hover:bg-dc-blue",
                destructive: "bg-red-200 text-red-700 hover:bg-red-300"
            },
            disabled: {
                true: "cursor-not-allowed bg-dc-blue/70",
                false: ""
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
)

const Button = React.forwardRef(({className, variant, disabled, ...props}, ref) => (
    <button
        ref={ref}
        className={cn(buttonVariants({variant, disabled: !!disabled}), className)}
        {...props}
    />
))

Button.displayName = "Button"

Button.propTypes = {
    variant: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button;