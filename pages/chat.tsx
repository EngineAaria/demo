import dynamic from "next/dynamic";
import Link from "next/link";
import Chat from "../components/Chat";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-infinka-cream p-8">
      <header className="max-w-4xl mx-auto flex items-center justify-between">
        <img src="/logo.png" alt="Infinka" className="w-36" />
        <Link href="/">
          <a className="text-sm text-gray-600">Home</a>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="hero-title text-2xl mb-2">The Courtier</h2>
          <p className="text-gray-600 mb-4">Tell The Courtier who this is for and how you feel. We'll keep it calm and safe.</p>

          <Chat />
        </div>
      </main>
    </div>
  );
}
