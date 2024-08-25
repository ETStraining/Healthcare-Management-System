export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.3,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0 },
};