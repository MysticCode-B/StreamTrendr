// src/pages/Home.jsx
import { Navbar } from "../components/Navbar";
import { ProviderBar } from "../components/ProviderBar";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#25282E]">
      <Navbar />
      <ProviderBar />
      <Hero />
    </div>
  );
}
