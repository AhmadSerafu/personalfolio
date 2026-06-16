import LoadingScreen from "@/components/Loadingscreen";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <Navbar />
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Credentials />
        </FadeIn>
        <FadeIn>
          <Gallery />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
        <FadeIn>
          <Footer />
        </FadeIn>
      </main>
    </>
  );
}
