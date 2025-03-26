'use client'

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GEN_AI_API_KEY;

const ChatPage = () => {
  const [messages, setMessages] = useState<{ role: "user" | "model"; parts: { text: string }[] }[]>([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
  const model = genAI?.getGenerativeModel({ model: "gemini-1.5-flash" });

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim() || !model) return;

    const userMessage = { role: "user", parts: [{ text: input }] };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsGenerating(true);

    try {
      const chat = model.startChat({
        history: messages,
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();

      setMessages((prevMessages) => [...prevMessages, { role: "model", parts: [{ text: text }] }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prevMessages) => [...prevMessages, { role: "model", parts: [{ text: "An error occurred. Please try again." }] }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-3 rounded-lg ${
              message.role === "user" ? "bg-black-100 self-end" : "bg-black-100 self-start"
            }`}
          >
            {message.parts.map((part, partIndex) => (
              <span key={partIndex}>{part.text}</span>
            ))}
          </div>
        ))}
        {isGenerating && <div className="mb-2 p-3 rounded-lg bg-black-100 self-start">Generating...</div>}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow p-2 border rounded-l-md"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md"
            disabled={isGenerating}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPage;