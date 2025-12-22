# Infinka GiftVerse — MVP (Scaffold)

This repository is a minimal scaffold for Infinka GiftVerse — a calm, emotionally intelligent gifting guide ("The Courtier").

Goals in this scaffold:
- Next.js + TypeScript + Tailwind CSS frontend
- Chat UI shell with persona and contextual form
- Server API route for LLM calls (mocked until you provide keys)
- System prompt file encoding Infinka ethics & safety
- Placeholders to wire Supabase / embeddings later

Quick start (node >= 18 recommended)
1. Copy your logo image (image 1) to `public/logo.png`.
2. Create `.env.local` from `.env.example` and add your LLM key if you want to enable real model calls.
3. Install and run:
   - npm install
   - npm run dev
4. Open http://localhost:3000

Next steps I can implement after you confirm:
- Wire OpenAI or Anthropic (requires API key)
- Add Supabase for persistence & memory
- Add intensity governor & risk detection agent
- Add user auth and privacy controls
- Push to GitHub (I can create repo if you instruct me)

License: MIT (change if you prefer)
