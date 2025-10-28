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
    <div className="w-full glass-effect-strong rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-xl">💬</span>
        </div>
        <div>
          <div className="font-bold text-white">Pricing Assistant</div>
          <div className="text-xs text-white/80">Ask me about our plans</div>
        </div>
      </div>
      
      <div className="h-96 overflow-y-auto p-5 space-y-4 bg-card/30">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-4 rounded-2xl max-w-[85%] shadow-md ${
                m.from === "bot"
                  ? "bg-muted text-foreground rounded-tl-sm"
                  : "bg-gradient-to-r from-primary to-accent text-white rounded-tr-sm"
              }`}
            >
              <p className="text-sm leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex border-t border-border/50 bg-card/50">
        <input
          className="flex-1 p-4 bg-transparent text-foreground outline-none placeholder:text-muted-foreground focus:bg-background/30 transition-colors"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your question..."
        />
        <button
          onClick={handleSend}
          className="px-6 font-semibold bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
