// app/page.tsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Ingredients from './components/Ingredients';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Ingredients />
      <NewsSection />
      <Footer />
    </div>
  );
}
