import React from "react";

export function Textarea({ value, onChange, className, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-96 p-2 rounded-md bg-gray-900 text-white border border-gray-700 ${className}`}
    />
  );
}
