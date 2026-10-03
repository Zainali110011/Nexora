"use client";
import { useState } from "react";

export default function Page() {
  const [users] = useState("9,217");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [chats, setChats] = useState([{role:"ai", text:"Salam Jani! Main Nexora hun, 10 Badshah Brains active hain. Bolo kya help chahiye?"}]);

  const brains = [
    {name:"Nexora Alpha", status:"ACTIVE", ms:"2.1ms"},
    {name:"Nexora Beta", status:"ACTIVE", ms:"3.2ms"},
    {name:"Nexora Gamma", status:"ACTIVE", ms:"2.8ms"},
    {name:"Nexora Delta", status:"ACTIVE", ms:"3.0ms"},
    {name:"Nexora Epsilon", status:"ACTIVE", ms:"2.5ms"},
    {name:"Nexora Zeta", status:"ACTIVE", ms:"3.1ms"},
    {name:"Nexora Eta", status:"SYNCING", ms:"4.0ms"},
    {name:"Nexora Theta", status:"ACTIVE", ms:"2.9ms"},
    {name:"Nexora Iota", status:"ACTIVE", ms:"3.3ms"},
    {name:"Nexora Kappa", status:"ACTIVE", ms:"2.7ms"},
  ];

  const sendChat = async () => {
    if(!msg.trim()) return;
    const userMsg = msg;
    setChats(prev => [...prev, {role:"user", text:userMsg}]);
    setMsg("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({message:userMsg})
      });
      const data = await res.json();
      setChats(prev => [...prev, {role:"ai", text:data.reply || "Error aa gaya jani!"}]);
    } catch (e) {
      setChats(prev => [...prev, {role:"ai", text:"Backend connect nahi hai jani, API key check karo!"}]);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <div className="border-b border-white/10 p-4 flex justify-between items-center sticky top-0 bg-[#050A14]/80 backdrop-blur z-10">
        <h1 className="font-black text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">NEXORA // 100 BRAINS</h1>
        <div className="flex gap-3 items-center">
          <span className="hidden md:block text-xs text-gray-400">{users} Online</span>
          <button onClick={()=>setShowLogin(true)} className="px-5 py-2 bg-white text-black rounded-full font-bold text-sm">Login</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-1">
          <h3 className="font-bold mb-3 text-cyan-400">10 BADSHAH BRAINS</h3>
          <div className="grid grid-cols-2 gap-3">
            {brains.map((b,i)=>(
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400">{b.name}</p>
                <p className="font-bold text-sm">{b.ms}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${b.status==="ACTIVE"?"bg-green-500/20 text-green-400":"bg-yellow-500/20 text-yellow-400"}`}>{b.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl">
            <p className="text-sm text-gray-400">Mesh Network</p>
            <p className="text-2xl font-black">1,024 Nodes</p>
            <p className="text-xs text-green-400 mt-1">● 99.99% Uptime - 3.2ms Latency</p>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col h-[75vh] bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chats.map((c,i)=>(
              <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${c.role==="user"?"ml-auto bg-white text-black":"bg-white/10 border border-white/10"}`}>{c.text}</div>
            ))}
            {loading && <div className="p-3 rounded-2xl bg-white/5 text-sm text-gray-400">Nexora soch raha hai...</div>}
          </div>
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Nexora se kuch pucho..." className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-3 text-sm outline-none" />
            <button onClick={sendChat} disabled={loading} className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm disabled:opacity-50">Send</button>
          </div>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center p-4 z-50">
          <div className="bg-[#0F172A] border border-white/10 p-8 rounded-2xl w-full max-w-sm">
            <h3 className="text-2xl font-bold mb-2">Login to Nexora</h3>
            <p className="text-sm text-gray-400 mb-6">getnexora.com</p>
            <input placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 mb-3 text-sm" />
            <input placeholder="Password" type="password" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 mb-4 text-sm" />
            <button onClick={()=>setShowLogin(false)} className="w-full py-3 bg-white text-black rounded-xl font-bold">Continue</button>
            <button onClick={()=>setShowLogin(false)} className="w-full mt-3 text-sm text-gray-400">Close</button>
          </div>
        </div>
      )}
    </div>
  );
              }
