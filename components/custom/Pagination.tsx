// Pagination.tsx
import React from 'react';
import { Button } from '../ui/button';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded-lg ${
            currentPage === index + 1
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
