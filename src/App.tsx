import { useEffect } from "react";
import { initSmoothScroll, cleanupSmoothScroll } from "@/utils/smoothScroll";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Section components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Advantages from "@/components/sections/Advantages";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

function App() {
  useEffect(() => {
    // Инициализация плавной прокрутки
    initSmoothScroll();

    // Очистка при размонтировании
    return () => {
      cleanupSmoothScroll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигационная панель */}
      <Navbar />

      {/* Основные секции */}
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Stats />
      <Contact />

      {/* Футер */}
      <Footer />
    </div>
  );
}

export default App;
