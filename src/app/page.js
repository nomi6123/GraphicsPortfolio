"use client";

import Header from "@/Components/Header";
import Coverflow3D from "@/Components/Coverflow3D";
import AboutSection from "@/Components/AboutSection";
import Footer from "@/Components/Footer";
import ScrollToTop from "@/Components/ScrollToTop";
import { ContactTab } from "@/Components/ContactSection";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Home Section */}
      <section id="home">
        <Coverflow3D />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactTab />
      </section>

      <Footer />
      < ScrollToTop/>
    </div>
  );
}
