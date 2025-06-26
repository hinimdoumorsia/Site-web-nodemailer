import Header from "@/components/header";
import Hero from "@/components/hero";
//import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Accueil() {
  return (
    <div className="min-h-screen bg-blue-900 text-white font-semibold max-w-screen-xl mx-auto px-4">
      <Header />
      <main className="bg-blue-900 py-10">
        <Hero />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
