// src/pages/Home.jsx
import { Navbar } from "../components/Navbar";
import { ProviderBar } from "../components/ProviderBar";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <ProviderBar />
      <Hero />
    </main>
  );
}
