import { useState } from "react";

type Message = {
  role: "user" | "courtier";
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "courtier", text: "Welcome — how may I help you with this moment?" }
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text })
      });
      const body = await res.json();
      const reply = body?.reply ?? "Sorry, I couldn't reach The Courtier just now.";
      setMessages((m) => [...m, { role: "courtier", text: reply }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "courtier", text: "An error occurred. Try again later." }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <div className="space-y-4 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "courtier" ? "courtier" : "text-right"}>
            <div className={m.role === "courtier" ? "text-gray-800" : "text-gray-700"}>{m.text}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 border rounded-md"
          placeholder="Describe the occasion, relationship, and how you feel..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />
        <button onClick={send} disabled={sending} className="px-4 py-2 bg-infinka-gold text-white rounded-md">
          {sending ? "..." : "Ask"}
        </button>
      </div>
    </div>
  );
}
