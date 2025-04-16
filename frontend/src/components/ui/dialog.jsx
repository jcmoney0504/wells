import * as React from "react";
import { cn } from "@/lib/utils";

export function Dialog({ open, onClose, children }) {
  return (
    <div
      className={cn(
        "fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300",
        open ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      onClick={onClose} // Clicking outside closes the dialog
    >
      {/* Modal Box */}
      <div
        className={cn(
          "relative bg-red-100 border-l-8 border-red-600 p-8 rounded-lg shadow-xl w-full max-w-lg",
          "transition-transform duration-300 transform",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center top-3 right-3 text-gray-700 hover:text-red-800 p-2 rounded-full transition-all w-8 h-8 hover:bg-red-200 hover:cursor-pointer"
        >
          &times;
        </button>

        {/* Warning Icon */}
        <div className="flex items-center justify-center">
          <span className="text-red-600 text-4xl font-bold">⚠️</span>
        </div>

        {/* Content */}
        <div className="text-center">
          
          <p className="text-red-800 mt-2" style={{padding: "1rem"}}>{children}</p>
        </div>
      </div>
    </div>
  );
}
