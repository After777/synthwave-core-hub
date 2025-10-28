import ChatBot from "../chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Chat with us 💬</h1>
      <p className="mb-6 text-gray-400 text-center max-w-md">
        Our AI bot will help you get exact pricing, packages, and setup instantly. 🚀
      </p>
      <ChatBot />
    </div>
  );
}
