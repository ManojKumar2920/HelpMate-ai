import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Nav from "@/components/NavBar/Nav";
import Chatbot from "@/components/HelpMate/Chatbot";
import { HowItWorks } from "@/components/Working/HowItWorks";
import Hero from "@/components/Hero/Hero";
import { UseCases } from "@/components/UseCases/UseCases";
import Footer from "@/components/Footer/Footer";


const page = () => {
  return (
    <ProtectedRoute>
      <div>
        <Nav />
        <Hero />
        <HowItWorks />
        <UseCases />
        <Footer />
        <Chatbot />
      </div>
    </ProtectedRoute>
  );
};

export default page;
