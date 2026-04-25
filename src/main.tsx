import React from 'react';
import ReactDOM from 'react-dom/client';
import '../app/globals.css';
import Controls from "@/components/cover/Controls";
import Canvas from "@/components/cover/Canvas";

function App() {
  return (
    <main className="flex flex-col-reverse md:flex-row h-screen w-full bg-background overflow-hidden">
      <Controls />
      <Canvas />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);