"use client";

import * as React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      {children}
    </button>
  );
}
