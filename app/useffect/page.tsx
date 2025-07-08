"use client";
import { useEffect, useState } from 'react';


export default function Timers(){
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setSeconds(s => s+1),1000);
        return () => clearInterval(timer);
    }, []);

    return <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]"><h1 className="text-5xl font-extrabold size-96">Timer: {seconds}s</h1></div>

}
