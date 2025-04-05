import { useState, useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  initialPage?: number;
  itemsPerPage?: number;
  siblingsCount?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
  paginatedItems: <T>(items: T[]) => T[];
  pageNumbers: number[];
  canGoPrevious: boolean;
  canGoNext: boolean;
  goToFirstPage: () => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
}

function usePagination({
  totalItems,
  initialPage = 1,
  itemsPerPage = 10,
  siblingsCount = 1
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(itemsPerPage);

  // Calculate total pages
  const totalPages = useMemo(() => Math.max(1, Math.ceil(totalItems / pageSize)), [totalItems, pageSize]);

  // Ensure current page is within valid range
  useMemo(() => {
    if (currentPage < 1) {
      setCurrentPage(1);
    } else if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Generate array of page numbers to display
  const pageNumbers = useMemo(() => {
    const totalPageNumbers = siblingsCount * 2 + 3; // siblings + current + first + last
    
    // If total pages is less than total page numbers, show all pages
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Calculate left and right siblings
    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPages);
    
    // Determine whether to show dots
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    
    // Define default indices
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    
    // No left dots, but right dots
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingsCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      
      return [...leftRange, -1, lastPageIndex];
    }
    
    // No right dots, but left dots
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingsCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      
      return [firstPageIndex, -1, ...rightRange];
    }
    
    // Both left and right dots
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      
      return [firstPageIndex, -1, ...middleRange, -1, lastPageIndex];
    }
    
    return [];
  }, [totalPages, currentPage, siblingsCount]);

  // Function to paginate items
  const paginatedItems = <T>(items: T[]): T[] => {
    const startIndex = (currentPage - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  // Navigation helpers
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  
  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => canGoPrevious && setCurrentPage(currentPage - 1);
  const goToNextPage = () => canGoNext && setCurrentPage(currentPage + 1);
  const goToLastPage = () => setCurrentPage(totalPages);

  return {
    currentPage,
    totalPages,
    pageSize,
    setCurrentPage,
    setPageSize,
    paginatedItems,
    pageNumbers,
    canGoPrevious,
    canGoNext,
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage
  };
}

export default usePagination; 