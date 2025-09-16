import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import PopularFoodsSection from "@/components/PopularFoodsSection";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PopularFoodsSection />
        <FeaturedSection />
      </main>
      <Chat />
      <Footer />
    </div>
  );
};

export default Index;
