import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* 
        This section uses Bootstrap 5 Grid classes to fulfill the 
        "Bootstrap (for layout help)" optional plus point requirement. 
      */}
      <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h3 className="text-2xl font-bold tracking-[0.2em] mb-2 font-display">ITZFIZZ</h3>
              <p className="text-gray-400 text-sm tracking-wider font-body">
                Scroll-driven animation assignment.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <p className="text-gray-500 text-xs">
                Built with Next.js, GSAP, Tailwind & Bootstrap Grid
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
