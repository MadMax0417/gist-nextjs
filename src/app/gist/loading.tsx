"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Render 9 skeleton tiles just like your real BentoGrid */}
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 
                     bg-neutral-100 dark:bg-neutral-900 h-52 animate-pulse"
        >
          <div className="h-2/3 w-full rounded-t-xl bg-neutral-200 dark:bg-neutral-800" />
          <div className="p-4 space-y-2">
            <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded" />
            <div className="h-3 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
