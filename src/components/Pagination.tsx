import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  onPageChange: (page: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  goToFirstPage: () => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
  showFirstLastButtons?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageNumbers,
  onPageChange,
  canGoPrevious,
  canGoNext,
  goToFirstPage,
  goToPreviousPage,
  goToNextPage,
  goToLastPage,
  showFirstLastButtons = true,
  size = 'md',
  className = ''
}) => {
  if (totalPages <= 1) return null;

  // Size classes
  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10',
    lg: 'h-12 w-12 text-lg'
  };

  const buttonClass = `flex items-center justify-center ${sizeClasses[size]} rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed`;
  const activeButtonClass = 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700';

  return (
    <nav className={`flex items-center justify-center space-x-1 ${className}`} aria-label="Pagination">
      {/* First page button */}
      {showFirstLastButtons && (
        <button
          onClick={goToFirstPage}
          disabled={!canGoPrevious}
          className={buttonClass}
          aria-label="Go to first page"
        >
          <ChevronsLeft className="h-5 w-5" />
        </button>
      )}

      {/* Previous page button */}
      <button
        onClick={goToPreviousPage}
        disabled={!canGoPrevious}
        className={buttonClass}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((pageNumber, index) =>
        pageNumber === -1 ? (
          // Ellipsis
          <span
            key={`ellipsis-${index}`}
            className="flex items-center justify-center h-10 w-10 text-gray-500"
          >
            &hellip;
          </span>
        ) : (
          // Page button
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`${buttonClass} ${pageNumber === currentPage ? activeButtonClass : ''}`}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
            aria-label={`Page ${pageNumber}`}
          >
            {pageNumber}
          </button>
        )
      )}

      {/* Next page button */}
      <button
        onClick={goToNextPage}
        disabled={!canGoNext}
        className={buttonClass}
        aria-label="Go to next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Last page button */}
      {showFirstLastButtons && (
        <button
          onClick={goToLastPage}
          disabled={!canGoNext}
          className={buttonClass}
          aria-label="Go to last page"
        >
          <ChevronsRight className="h-5 w-5" />
        </button>
      )}
    </nav>
  );
};

export default Pagination; 