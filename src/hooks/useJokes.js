import { useState, useEffect, useCallback } from "react";

const API_URL = "https://api.freeapi.app/api/v1/public/randomjokes";

export function useJokes() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJokes = useCallback(async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${API_URL}?page=${pageNum}&limit=10`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success && data.data) {
        setJokes(data.data.data || []);
        setTotalPages(data.data.totalPages || 1);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch jokes. Please try again.");
      setJokes([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJokes(page);
  }, [page, fetchJokes]);

  const goToPage = useCallback((pageNum) => {
    setPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const nextPage = useCallback(() => {
    if (page < totalPages) goToPage(page + 1);
  }, [page, totalPages, goToPage]);

  const prevPage = useCallback(() => {
    if (page > 1) goToPage(page - 1);
  }, [page, goToPage]);

  const retry = useCallback(() => {
    fetchJokes(page);
  }, [page, fetchJokes]);

  return {
    jokes,
    loading,
    error,
    page,
    totalPages,
    setPage: goToPage,
    nextPage,
    prevPage,
    retry,
  };
}
