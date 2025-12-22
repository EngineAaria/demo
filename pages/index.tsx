import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-8">
        <img src="/logo.png" alt="Infinka GiftVerse" className="mx-auto w-48" />
        <h1 className="hero-title text-4xl">Infinka GiftVerse</h1>
        <p className="text-gray-700">
          A calm, emotionally intelligent system that helps humans gift not to impress — but to connect.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/chat">
            <a className="px-6 py-3 rounded-md bg-infinka-gold text-white">Start with The Courtier</a>
          </Link>
          <a className="px-6 py-3 rounded-md border border-gray-300" href="#">
            Learn more
          </a>
        </div>
        <div className="text-sm text-gray-500 mt-6">
          Note: This is a prototype aligned to the Infinka GiftVerse constitution.
        </div>
      </div>
    </main>
  );
}
