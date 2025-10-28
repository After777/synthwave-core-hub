import ChatBot from "../chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to RAV Labs ⚡</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          We create high-performance websites for brands, shops, and businesses that want to stand out.
        </p>
        <div className="mt-8">
          <a
            href="#chat"
            className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition-all"
          >
            Chat with Us 🤖
          </a>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Website Plans 💼</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
          {/* Basic Plan */}
          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Basic</h3>
            <p className="text-gray-400">
              Simple landing page — ₹2000 + ₹300/month for management & hosting.
            </p>
          </div>

          {/* Advanced Plan */}
          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Advanced</h3>
            <p className="text-gray-400">
              Advanced website — ₹4000 + ₹800/month (includes SEO, payment gateway & security).  
              <br />
              <span className="text-cyan-400">25% discount for advanced users!</span>
            </p>
          </div>

          {/* Premium Plan */}
          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Premium</h3>
            <p className="text-gray-400">
              Complete brand suite — custom design, full SEO setup, eCommerce, analytics, and hosting management.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHATBOT ===== */}
      <section id="chat" className="py-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Talk to Our AI Bot 🤖</h2>
        <p className="text-gray-400 mb-6 text-center max-w-md">
          Get instant pricing, compare plans, or ask anything about your project.
        </p>
        <ChatBot />
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-6 text-gray-500 border-t border-zinc-800">
        © {new Date().getFullYear()} RAV Labs. All rights reserved.
      </footer>
    </div>
  );
}
