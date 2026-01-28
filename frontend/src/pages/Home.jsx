// src/pages/Home.jsx
import { Navbar } from "../components/Navbar";
import { ProviderBar } from "../components/ProviderBar";
import { Hero } from "../components/Hero";
import { TrendingSection } from "../components/TrendingSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#25282E]">
      <Navbar />
      <ProviderBar />
      <Hero />
      <TrendingSection />
      <Footer />
    </div>
  );
}
