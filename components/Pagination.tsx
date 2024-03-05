import React from "react";
import styles from "../styles/Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={currentPage === 1 ? "disabled" : ""}
      >
        Previous
      </button>
      <p>{currentPage}</p>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
