"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const DISCORD_WEBHOOK_URL = "#"; // Webhook Url

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: "🚀 Yeni Portfolyo Mesajı!",
            color: 0x3b82f6,
            fields: [
              { name: "Gönderen", value: String(data.name), inline: true },
              { name: "E-posta", value: String(data.email), inline: true },
              { name: "Mesaj", value: String(data.message) }
            ],
            timestamp: new Date().toISOString(),
          }]
        }),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl border border-white/5 bg-zinc-900/30 p-8 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Adınız"
            className="w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="E-posta"
            className="w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Mesajınız..."
          className="w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:outline-none resize-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-bold text-black hover:bg-zinc-200 disabled:opacity-50"
        >
          {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={18} />}
          <span>{status === 'success' ? "Gönderildi!" : "Mesaj Gönder"}</span>
        </button>
      </form>
    </div>
  );
}