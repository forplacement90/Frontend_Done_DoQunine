import React, { useState } from "react";

export function ResizablePanelGroup({ children, direction = "horizontal" }) {
  return (
    <div className={`flex ${direction === "horizontal" ? "flex-row" : "flex-col"} h-full w-full`}>
      {children}
    </div>
  );
}

export function ResizablePanel({ children, defaultSize = 50 }) {
  const [size, setSize] = useState(defaultSize);

  return (
    <div className="flex-1" style={{ flex: `${size}%` }}>
      {children}
    </div>
  );
}
