"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [users] = useState("9,217")
  const [brains] = useState(10)

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      {/* HEADER */}
      <div className="border-b border-cyan-500/20">
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            NEXORA - 10 BADSHAH BRAINS
          </h1>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
              {brains} ACTIVE
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
              {users} Users
            </span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          100 BRAINS
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            GOD MODE
          </span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mb-8">
          Next-Gen AI Mesh Network - 3.2ms Latency - getnexora.com
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
            Launch App
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
            View Docs
          </button>
        </div>
      </div>
    </div>
  )
}
