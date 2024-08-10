"use client";
import React, { useState, useEffect, useRef, FormEvent, KeyboardEvent } from "react";
import Image from "next/image";
import { Send, X } from "lucide-react";
import Logo from "@/public/bot.jpg";

import {
  GoogleGenerativeAI,
  GenerativeModel,
  GenerationConfig,
} from "@google/generative-ai";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ type: string; text: string }[]>(
    []
  );
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  

  const apiKey: any = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("Google API key is not defined in environment variables");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model: GenerativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are the HelpMate.ai, the AI powered customer support chatbot. You was developed by Team AlienX in Coimbatore. You're able to integrate with other users website to serve as their company customer support chatbot in future. For as of now you can only answer about yourself and the Company CC Gloal. CC Global is nothing but a CodersCave a agency that provides services in Software development, web services and branding support to their clients. if the client asks about the budget respond back with proper message that varies depending on the requirements, user need and scope of the project, you can schedule a call with us to get detailed overview about it contact@coderscave.in .always mention as CC Global, if the user asks about CC Global then tell the CodersCave. You can only able to respond back the users with their questions related to the respected company.",
  });

  const generationConfig: GenerationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(input);
      const responseText = await result.response.text();
      setMessages([...newMessages, { type: "bot", text: responseText }]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage = "Sorry, I am not able to provide a valid response.";
      setMessages([...newMessages, { type: "bot", text: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any); // Cast to FormEvent<HTMLFormElement> for the form submission
    }
  };

  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }

  }, [messages, loading]);

  return (
    <div>
      <div className=" fixed bottom-10 right-10 z-50" onClick={toggleModal} >
       
        <Image
          src={Logo}
          alt="HelpMate"
          width={50}
          className="rounded-full  shadow-lg cursor-pointer"
        />
        
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white absolute bottom-10 right-10 w-[90%] sm:w-[30dvw] h-[90dvh] border rounded-lg shadow-xl overflow-hidden flex flex-col">
            <div
              ref={chatContainerRef}
              className="flex-grow bg-gray-100 p-6 pt-16 overflow-y-auto"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg max-w-xs ${
                      msg.type === "user"
                        ? "bg-jade-500 text-white self-end"
                        : "bg-gray-300 text-black self-start"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start mb-2">
                  <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs flex items-center">
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="h-6 w-6 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div className="absolute top-0 left-0 h-6 w-6 rounded-full border-t-4 border-b-4 border-jade-500 animate-spin"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t font-light flex flex-col">
              <form onSubmit={handleSubmit} className="flex px-2 items-end">
                <textarea
                  name="input"
                  id="input"
                  className="w-full text-sm max-h-32 min-h-10 h-10 resize-none overflow-y-auto rounded p-2 focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "40px";
                    target.style.height = `${Math.min(
                      target.scrollHeight,
                      128
                    )}px`;
                  }}
                  placeholder="Type your message..."
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                ></textarea>
                <button
                  type="submit"
                  className="ml-2 p-2 rounded focus:outline-none"
                  disabled={loading}
                >
                  <Send />
                </button>
              </form>
              <div className="text-center text-gray-400 p-2 text-[12px] border-t">
                <p>
                  Powered by{" "}
                  <span className="font-bold text-jade-900">HelpMate.ai</span>
                </p>
              </div>
            </div>

            <div className="absolute top-0 flex justify-between w-full px-3 py-2 bg-white border-b border-slate-300">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={Logo}
                  alt="HelpMate"
                  width={40}
                  className="rounded-full shadow-lg cursor-pointer"
                />
                <div>
                  <h1 className="font-normal">HelpMate.ai</h1>
                  <p className="text-[10px] text-slate-500">
                    Keep your clients Engaged!
                  </p>
                </div>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={toggleModal}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
