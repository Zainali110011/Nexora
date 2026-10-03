// FILE 3: app/admin/page.tsx - GOD MODE CONTROL ROOM
"use client";
import { useState } from "react";
import { BRAINS, TOTAL_BRAINS } from "../../lib/brainRouter";

export default function AdminGodMode() {
  const [revenue] = useState("$128.4K");
  const [users] = useState("9,217");

  return (
    <div className="min-h-screen bg-[#020a1a] text-white p-6 font-mono">
      {/* HEADER */}
      <div className="border border-cyan-500/30 rounded-xl p-4 flex justify-between items-center bg-black/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">🛡️</div>
          <div>
            <h1 className="text-cyan-400 font-bold">Admin • God Mode Control Room</h1>
            <p className="text-xs text-gray-400">NEXORA 100 BRAINS SYSTEM</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-green-400 text-sm">● SYSTEM ONLINE</p>
          <p className="text-xs text-gray-400">Oct 02, 2026 • 14:32 UTC • {TOTAL_BRAINS}/100 BRAINS ACTIVE</p>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="border border-cyan-500/30 rounded-xl p-5 bg-black/40">
          <p className="text-xs text-gray-400">TOTAL REVENUE</p>
          <h2 className="text-3xl font-bold mt-1">{revenue}</h2>
          <p className="text-green-400 text-xs mt-1">↗ 12.4% MoM</p>
          <div className="mt-3 h-[40px] bg-cyan-500/10 rounded"></div>
        </div>
        <div className="border border-cyan-500/30 rounded-xl p-5 bg-black/40">
          <p className="text-xs text-gray-400">ACTIVE USERS</p>
          <h2 className="text-3xl font-bold mt-1">{users}</h2>
          <p className="text-green-400 text-xs mt-1">↗ 8.2% MoM</p>
        </div>
        <div className="border border-cyan-500/30 rounded-xl p-5 bg-black/40">
          <p className="text-xs text-gray-400">100 BRAINS MESH LATENCY</p>
          <h2 className="text-3xl font-bold mt-1">3.2ms</h2>
          <p className="text-cyan-400 text-xs mt-1">● 100/100 OPERATIONAL</p>
        </div>
      </div>

      {/* REVENUE CHART + 100 BRAINS LIST */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="border border-cyan-500/20 rounded-xl p-5 bg-black/30">
          <h3 className="text-sm text-cyan-300">Revenue Overview — Last 30 Days</h3>
          <div className="mt-4 h-[150px] border-b border-l border-cyan-900/50 flex items-end gap-1 p-2">
            {[20][40][35][60][55][70][65][85][80][95].map((h,i)=>(
              <div key={i} className="flex-1 bg-cyan-400/60 rounded-t" style={{height: `${h}%`}}></div>
            ))}
          </div>
        </div>
        <div className="border border-cyan-500/20 rounded-xl p-5 bg-black/30 max-h-[250px] overflow-y-auto">
          <h3 className="text-sm text-cyan-300">100 BRAINS STATUS</h3>
          <div className="mt-3 space-y-2">
            {Object.values(BRAINS).slice(0,12).map((b:any)=>(
              <div key={b.id} className="flex justify-between text-xs border-b border-white/5 pb-1">
                <span>{b.name}</span><span className="text-green-400">● ACTIVE</span>
              </div>
            ))}
            <p className="text-[10px] text-gray-500">...92+ more brains active</p>
          </div>
        </div>
      </div>

      {/* API + MODULES */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="border border-white/10 rounded-xl p-4 bg-black/30">
          <h3 className="text-sm">API Status</h3>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between"><span>Auth Service</span><span className="text-green-400">✓ HEALTHY 42ms</span></div>
            <div className="flex justify-between"><span>Payments
