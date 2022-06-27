import React from "react";
import "../Styles/paginate.css";
type paginationProps = {
    postPerPage: number;
    totalPosts: number;
    paginate: (idx: number) => void;
    paginateActive: number;
};

function Pagination({
    postPerPage,
    totalPosts,
    paginate,
    paginateActive,
}: paginationProps) {
    const pageNumbers: Array<number> = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="flex flex-row justify-center">
                {pageNumbers.map((e, index) => (
                    <li
                        role={"button"}
                        key={index}
                        className={
                            paginateActive === e
                                ? "active-paginate"
                                : "paginate"
                        }
                        onClick={() => paginate(e)}
                    >
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;
