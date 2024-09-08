
const Pagination = ({ className, page, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (page > 1) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) onPageChange(page + 1);
    };

    return (
        <div className={`flex justify-center items-center space-x-4 mt-8 ${className}`}>
            <button
                className={`px-4 py-2 bg-gray-200 text-gray-700 rounded-md ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                onClick={handlePrevious}
                disabled={page === 1}
            >
                Previous
            </button>

            <span className="text-md md:text-lg font-semibold text-dark">
                Page {page} of {totalPages}
            </span>

            <button
                className={`px-4 py-2 bg-gray-200 text-gray-700 rounded-md ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                onClick={handleNext}
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
