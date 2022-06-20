import React from 'react';
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="numberPage">
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page pageCurrent' : 'page'}
                >
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;