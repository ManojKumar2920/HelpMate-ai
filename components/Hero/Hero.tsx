import Link from "next/link";
import React from "react";
import Bot from "../Robot/Bot";
import Particles from "../magicui/particles";


const Hero = () => {
  return (
    <div className=" relative text-center w-full">
      <div className=" p-10 flex flex-col items-center justify-center">
      <Particles
        className=" absolute inset-0 z-0"
        quantity={200}
        ease={100}
        color={'#000000'}
        refresh
      />
        <h1 className=" text-xl md:text-3xl font-bold md:px-6">
          Meet HelpMate: Your 24/7 AI-Powered <br /> Customer Support Assistant
        </h1>
        <p className=" md:max-w-3xl py-4 text-sm">
          Resolve customer queries faster and smarter with HelpMate, the AI
          chatbot that never sleeps. Enhance your support with instant
          responses, personalized interactions, and seamless integration.
        </p>
        <Link href={"mailto:manojkumararumainathan@gmail.com"} className=" px-4 py-2 bg-gradient-to-br from-jade-200 to-jade-600 rounded-xl">Get Your Own Bot</Link>
        <Bot />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Hero;
