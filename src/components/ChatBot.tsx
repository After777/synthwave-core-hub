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

      if (msg.includes("monthly") || msg.includes("subscription"))
        reply =
          "📅 Monthly Subscription — ₹2000 + ₹500/month (includes hosting, security, and management)";
      else if (msg.includes("basic"))
        reply =
          "🌐 Basic Plan — ₹2000 + ₹500/month (includes hosting, security, and management)";
      else if (msg.includes("advanced"))
        reply =
          "⚡ Advanced Plan — ₹3500 + ₹500/month (includes everything in Basic plus advanced features like payment gateway and multiple pages)";
      else
        reply =
          "I can tell you about our Monthly Subscription, Basic Plan, or Advanced Plan! Just type one of them 😊";

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="w-full glass-effect rounded-xl overflow-hidden">
      <div className="bg-primary text-primary-foreground font-semibold p-3 text-center">
        💬 Pricing Assistant
      </div>
      <div className="h-80 overflow-y-auto p-4 space-y-3 text-sm bg-background/50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg max-w-[85%] ${
              m.from === "bot"
                ? "bg-muted text-foreground"
                : "bg-primary text-primary-foreground ml-auto"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-border">
        <input
          className="flex-1 p-3 bg-background/50 text-foreground outline-none focus:bg-background"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about our plans..."
        />
        <button
          onClick={handleSend}
          className="bg-primary text-primary-foreground px-6 font-semibold hover:bg-primary/90 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
