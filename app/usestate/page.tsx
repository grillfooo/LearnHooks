"use client" // for Next.js App Router (app/ directory)
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]" >
      <h1>Welcome to the Ghostland!!! {count}</h1>
      <button onClick={()=> setCount( count + 1 )}> Increment</button>
    </div>
  );
}