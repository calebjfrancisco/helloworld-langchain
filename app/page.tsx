"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const getChatMessage = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
    });
    const data = await response.json();
    setMessage(data.message);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <span>
        Ask me anything{" "}
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.currentTarget.value)}
        />
        <button
          className="bg-white text-black p-2 ml-5"
          onClick={getChatMessage}
        >
          Send
        </button>
      </span>
      <span className="mt-5">{message}</span>
    </main>
  );
}
