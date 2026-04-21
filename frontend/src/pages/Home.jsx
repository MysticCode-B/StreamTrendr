// src/pages/Home.jsx
import { Navbar } from "../components/Navbar";
import { ProviderBar } from "../components/ProviderBar";
import { Hero } from "../components/Hero";
import { HomeShowcase } from "../components/HomeShowcase";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <ProviderBar />
      <Hero />
      <HomeShowcase />
    </main>
  );
}
