import PropTypes from 'prop-types';
import React, { useMemo, useEffect } from "react";

function ProductFilterSidebar({ enable = false, handleFilterSidebar }) {
    const getClasses = () => {
        return `w-full max-w-96 fixed top-0 bottom-0 left-0 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 z-10 border-r border-r-gray-300 transition-all duration-500 ${enable ? 'translate-x-0' : '-translate-x-96'}`;
    }

    const handleSidebarClose = () => {
        handleFilterSidebar(false);
    };

    const memoizedClasses = useMemo(() => getClasses(), [enable]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleSidebarClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array ensures this effect runs once on mount and cleanup on unmount

    return (
        <div className={memoizedClasses}>
            <button
                className="absolute right-6 p-2 border px-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor text-lg font-bold text-zinc-700 transition-all"
                onClick={handleSidebarClose}
            >
                Esc
            </button>
        </div>
    );
}

ProductFilterSidebar.propTypes = {
    enable: PropTypes.bool,
    handleFilterSidebar: PropTypes.func
};

export default ProductFilterSidebar;