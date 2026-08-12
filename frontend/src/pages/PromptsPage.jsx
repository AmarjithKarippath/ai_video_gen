import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, Copy, Sparkles, Video, ArrowLeft } from 'lucide-react';
import { aiPrompts } from '../data/aiPrompts';

function PromptTile({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = item.prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article
      id={item.slug}
      className="group scroll-mt-24 flex flex-col overflow-hidden rounded-2xl border border-purple-500/25 bg-slate-900/60 backdrop-blur transition hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="text-lg font-semibold leading-snug text-white">
          {item.title}
        </h2>
        <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>

        <div className="relative mt-auto">
          <p className="max-h-28 overflow-hidden text-xs leading-relaxed text-gray-500">
            {item.prompt}
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/95 to-transparent" />
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${item.title}`}
          className={`mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
            copied
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
              : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
          }`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Prompt
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function PromptsPage() {
  const location = useLocation();

  useEffect(() => {
    const title = 'AI Image Prompts for Photorealistic Portraits | Waveify.ai';
    const description =
      'Browse ready-to-use AI image prompts for photorealistic portraits, fashion collages, and cinematic identity-preserving edits. Copy any prompt instantly.';

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/prompts`);

    return () => {
      document.title = 'Waveify.ai - AI Video Generator for Instagram & TikTok';
    };
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-3xl filter" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl filter" />
      </div>

      <header className="relative z-20 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link to="/" className="inline-flex items-center gap-2">
            <Video className="h-7 w-7 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
              Waveify.ai
            </span>
          </Link>
          <nav className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-purple-400/50 bg-purple-500/20 px-4 py-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4" />
              AI Prompts
            </span>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <section className="mb-12 max-w-3xl" aria-labelledby="ai-prompts-heading">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-200">
            <Sparkles className="h-4 w-4" />
            AI Prompts
          </div>
          <h1 id="ai-prompts-heading" className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready-to-Use{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Image Prompts
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Explore curated photorealistic portrait prompts. Preview each look, then copy the full
            prompt with one click for your favorite AI image tools.
          </p>
        </section>

        <section aria-label="AI prompt gallery">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiPrompts.map((item) => (
              <PromptTile key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Waveify.ai — AI Prompts Collection
      </footer>
    </div>
  );
}
