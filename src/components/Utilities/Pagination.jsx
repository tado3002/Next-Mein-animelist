import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };
  const setPageHandle = (number) => {
    if (number < 0 && hasPrevPage) {
      scrollToTop();
      setPage(page - 1);
    } else if (number > 0 && hasNextPage) {
      scrollToTop();
      setPage(page + 1);
    }
  };
  const [hasNextPage, hasPrevPage] = [
    page - lastPage !== 0 ? true : false,
    page - 1 !== 0 ? true : false,
  ];
  return (
    <div className="flex justify-between p-8 text-sm font-bold items-center">
      <button
        className={`${
          hasPrevPage ? "hover:text-color-primary hover:bg-color-accent opacity-100" : "cursor-not-allowed opacity-60"
        } bg-color-secondary shadow-lg w-20 p-2 `}
        onClick={() => setPageHandle(-1)}
      >
        Previous
      </button>
      <span>
        {page} / {lastPage}
      </span>
      <button
        className={`${
          hasNextPage ? "hover:text-color-primary hover:bg-color-accent opacity-100" : "cursor-not-allowed opacity-60"
        } bg-color-secondary shadow-lg w-20 p-2 `}
        onClick={() => setPageHandle(+1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
