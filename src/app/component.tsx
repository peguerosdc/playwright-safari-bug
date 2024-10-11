"use client";

import { useState } from "react";

export default function DynamicComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setCount(count + 150)}>Add elements</button>
      <div>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i}>Element {i}</div>
        ))}
      </div>
    </div>
  );
}
