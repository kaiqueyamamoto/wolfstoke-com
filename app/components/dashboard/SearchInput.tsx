"use client";

import React, { useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  defaultValue?: string;
  className?: string;
}

export default function SearchInput({
  placeholder = "Buscar...",
  onSearch,
  defaultValue = "",
  className = "",
}: SearchInputProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Icon */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[--color-muted]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 bg-[--color-background] border border-[--color-border-subtle]
                 rounded-lg text-sm text-[--color-foreground] placeholder:text-[--color-muted]
                 focus:outline-none focus:border-[--color-accent-blue] focus:ring-2
                 focus:ring-[--color-accent-blue]/20 transition-all"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[--color-muted]
                   hover:text-[--color-foreground] transition-colors"
          aria-label="Limpar busca"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
