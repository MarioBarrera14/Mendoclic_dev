import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

// app/page.tsx
export default function Home() {
  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      
      {/* Las secciones ahora se centran solas gracias al HOC */}
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
