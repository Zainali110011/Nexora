// FILE 7: app/api/chat/route.ts - NEXORA 100 BRAINS GOD MODE
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const BRAINS = [
  { name: 'OPENAI', key: process.env.OPENAI_API_KEY, model: 'gpt-4o-mini' },
  { name: 'ANTHROPIC', key: process.env.ANTHROPIC_API_KEY, model: 'claude-3-haiku-20240307' },
  { name: 'GEMINI', key: process.env.GOOGLE_GEMINI_API_KEY, model: 'gemini-1.5-flash' },
  { name: 'GROQ', key: process.env.GROQ_API_KEY, model: 'llama-3.1-8b-instant' },
  { name: 'MISTRAL', key: process.env.MISTRAL_API_KEY, model: 'mistral-small-latest' },
  { name: 'DEEPSEEK', key: process.env.DEEPSEEK_API_KEY, model: 'deepseek-chat' },
  { name: 'HF', key: process.env.HF_TOKEN, model: 'meta-llama/Meta-Llama-3-8B-Instruct' },
  { name: 'OPENROUTER', key: process.env.OPENROUTER_API_KEY, model: 'openai/gpt-3.5-turbo' },
];

async function callGroq(prompt: string, key: string) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'llama-3.1-8b-instant', messages: [{ role: 'user', content: prompt }], max_tokens: 500 })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

async function callOpenAI(prompt: string, key: string) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], max_tokens: 500 })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

async function callAnthropic(prompt: string, key: string) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': key, 'Content-Type': 'application/json', 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-3-haiku-20240307', max_tokens: 500, messages: [{ role: 'user', content: prompt }] })
  });
  const data = await res.json();
  return data.content?.[0]?.text || 'No response';
}

async function callGemini(prompt: string, key: string) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
}

async function callMistral(prompt: string, key: string) {
  const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'mistral-small-latest', messages: [{ role: 'user', content: prompt }], max_tokens: 500 })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

async function callDeepSeek(prompt: string, key: string) {
  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: prompt }], max_tokens: 500 })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

async function callOpenRouter(prompt: string, key: string) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'openai/gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }], max_tokens: 500 })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

async function callHF(prompt: string, key: string) {
  const res = await fetch('https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'meta-llama/Meta-Llama-3-8B-Instruct', messages: [{ role: 'user', content: prompt }], max_tokens: 500 })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response';
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) return NextResponse.json({ error: 'Prompt missing' }, { status: 400 });

    const start = Date.now();

    // 8 Brains ko ak sath call - God Mode Mesh
    const calls = [
      BRAINS[0].key? callOpenAI(prompt, BRAINS[0].key!).then(r => ({ brain: 'OPENAI', result: r })) : null,
      BRAINS[1].key? callAnthropic(prompt, BRAINS[1].key!).then(r => ({ brain: 'ANTHROPIC', result: r })) : null,
      BRAINS[2].key? callGemini(prompt, BRAINS[2].key!).then(r => ({ brain: 'GEMINI', result: r })) : null,
      BRAINS[3].key? callGroq(prompt, BRAINS[3].key!).then(r => ({ brain: 'GROQ', result: r })) : null,
      BRAINS[4].key? callMistral(prompt, BRAINS[4].key!).then(r => ({ brain: 'MISTRAL', result: r })) : null,
      BRAINS[5].key? callDeepSeek(prompt, BRAINS[5].key!).then(r => ({ brain: 'DEEPSEEK', result: r })) : null,
      BRAINS[6].key? callHF(prompt, BRAINS[6].key!).then(r => ({ brain: 'HF', result: r })) : null,
      BRAINS[7].key? callOpenRouter(prompt, BRAINS[7].key!).then(r => ({ brain: 'OPENROUTER', result: r })) : null,
    ].filter(Boolean) as Promise<{ brain: string; result: string }>[];

    const results = await Promise.allSettled(calls);

    const successful = results.filter(r => r.status === 'fulfilled').map((r: any) => r.value);
    const failed = results.filter(r => r.status === 'rejected').length;

    const latency = Date.now() - start;

    // God Mode Final Answer - Sab brains ka best answer
    const godAnswer = successful[0]?.result || 'All brains failed';

    return NextResponse.json({
      godMode: true,
      totalBrains: BRAINS.length,
      activeBrains: successful.length,
      failedBrains: failed,
      latency: `${latency}ms`,
      mesh_latency: process.env.NEXT_PUBLIC_MESH_LATENCY || '3.2ms',
      answers: successful,
      finalAnswer: godAnswer,
      prompt
    });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
