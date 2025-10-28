import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hey! Want to know our pricing?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const msg = input.toLowerCase();
      let reply = "";

      if (msg.includes("basic") || msg.includes("simple"))
        reply =
          "🌐 Basic Website — ₹2000 + ₹300/month (includes hosting + management).";
      else if (msg.includes("advanced"))
        reply =
          "⚡ Advanced Website — ₹4000 + ₹800/month (includes SEO, payment gateway & security). 25% discount for advanced users!";
      else if (msg.includes("premium"))
        reply =
          "🚀 Premium Website — ₹6500 + ₹1200/month. Includes everything + animations, blogs, and priority support.";
      else
        reply =
          "I can tell you about our Basic, Advanced, or Premium plans! Just type one of them 😊";

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-black text-white rounded-2xl shadow-lg overflow-hidden border border-cyan-400">
      <div className="bg-cyan-400 text-black font-semibold p-2 text-center">
        💬 WebBot
      </div>
      <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              m.from === "bot"
                ? "bg-gray-800 text-white"
                : "bg-cyan-400 text-black ml-auto"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-700">
        <input
          className="flex-1 p-2 bg-gray-900 text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about websites..."
        />
        <button
          onClick={handleSend}
          className="bg-cyan-400 text-black px-4 font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
