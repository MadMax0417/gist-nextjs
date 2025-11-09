"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="relative w-full max-w-3xl mx-auto p-2 sm:p-4 rounded-lg overflow-hidden">
      {/* Copy button placeholder */}
      <div
        className="
          absolute 
          top-2 
          right-2 
          sm:top-3 
          sm:right-3 
          z-10 
          h-8 w-20 
          rounded-md 
          bg-neutral-200 
          dark:bg-neutral-800 
          animate-pulse
        "
      />

      {/* CodeBlock skeleton */}
      <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
        <Skeleton className="h-6 w-1/3 m-4 rounded-md" /> {/* filename placeholder */}
        <div className="p-4 space-y-2">
          {[...Array(12)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-4 w-full rounded-md bg-neutral-200 dark:bg-neutral-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
