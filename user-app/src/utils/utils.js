import {twMerge} from "tailwind-merge";
import clsx from "clsx";

// Merges tailwind classes and resolves conflicts in them
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}