"use client";
import { Pagination } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

export function GlobalPagination(props: PaginationProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (value: number) => {
    props.onPageChange(value);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", `${value}`);
    navigate(`?${searchParams}`);
  };

  return (
    <Pagination
    className="mb-5"
      currentPage={props.currentPage}
      totalPages={props.totalPages}
      onPageChange={handleChange}
    />
  );
}
