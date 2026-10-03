"use client";
import { useState } from "react";

export default function Page() {
  const [users] = useState("9,217");
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <div className="border-b border-cyan-500/20 p-6 flex justify-between max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          NEXORA - 10 BADSHAH BRAINS
        </h1>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
            10 ACTIVE
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
            {users} Users
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-8">
        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          100 BRAINS <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            GOD MODE
          </span>
        </h2>
        <p className="text-gray-400 text-xl mb-8 max-w-xl">
          Next-Gen AI Mesh Network - 3.2ms Latency - getnexora.com
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setShowApp(!showApp)}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition"
          >
            Launch App
          </button>
          <button
            onClick={() => window.open('https://github.com/Zainali110011/Nexora','_blank')}
            className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            View Docs
          </button>
        </div>

        {showApp && (
          <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl max-w-2xl w-full backdrop-blur">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">🚀 NEXORA APP LAUNCHED</h3>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-black/50 rounded-xl"><p className="text-gray-400 text-sm">Latency</p><p className="text-xl font-bold text-green-400">3.2ms</p></div>
              <div className="p-4 bg-black/50 rounded-xl"><p className="text-gray-400 text-sm">Brains</p><p className="text-xl font-bold text-purple-400">100 Active</p></div>
              <div className="p-4 bg-black/50 rounded-xl"><p className="text-gray-400 text-sm">Mesh Nodes</p><p className="text-xl font-bold">1,024</p></div>
              <div className="p-4 bg-black/50 rounded-xl"><p className="text-gray-400 text-sm">Uptime</p><p className="text-xl font-bold text-cyan-400">99.99%</p></div>
            </div>
            <p className="mt-6 text-gray-400">Ab yahan se aage tum apna asli AI dashboard bana sakte ho jani!</p>
          </div>
        )}
      </div>
    </div>
  );
}
