"use client";

import { useEffect, useState } from "react";

const Poster = () => {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const customersLogos = [
    {
      id: 1,
      logo: "/assets/our-customers-1.png",
    },
    {
      id: 2,
      logo: "/assets/our-customers-2.png",
    },
    {
      id: 3,
      logo: "/assets/our-customers-3.png",
    },
    {
      id: 4,
      logo: "/assets/our-customers-4.png",
    },
    {
      id: 5,
      logo: "/assets/our-customers-5.png",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setCursorPos({ x, y });
  };

  const parallaxStyle = (depth: number) => {
    // Reduce parallax effect on mobile devices
    const adjustedDepth = isMobile ? depth * 0.3 : depth;
    return {
      transform: `translate3d(${cursorPos.x * adjustedDepth}px, ${cursorPos.y * adjustedDepth}px, 0)`,
    };
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-screen h-[500px] md:h-screen sm:h-auto sm:min-h-[90vh] lg:h-screen overflow-hidden bg-grid-poster-bg rounded-b-[30px] sm:rounded-b-[50px] lg:rounded-b-[70px]">
      {/* poster content */}
      <div
        className="mt-16 sm:mt-20 md:mt-24 lg:mt-[100px] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-6 lg:gap-0 px-4 sm:px-6 md:px-8 lg:p-0 w-full lg:w-[86%] mx-auto"
        onMouseMove={handleMouseMove}
      >
        {/* left side */}
        <div className="pl-0 lg:pl-[20px] flex flex-col gap-3 sm:gap-4 w-full lg:w-auto items-center lg:items-start">
          <span
            className={`text-grid-white text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-widest inline-flex items-center gap-2 sm:gap-3 ${
              mounted ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-gentle-pulse" />
            Creative Digital Studio
          </span>
          <div
            className={`flex items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 ${
              mounted ? "animate-fade-in" : "opacity-0"
            }`}
            style={parallaxStyle(10)}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider sm:tracking-widest bg-gradient-to-r from-white via-white/90 to-primary text-transparent bg-clip-text animate-gradient-x drop-shadow-glow text-center lg:text-left">
              Grid Team
            </h1>
            <img
              src="/assets/Mouse.png"
              alt="mouse"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-float2 drop-shadow-glow hidden sm:block"
            />
          </div>
        </div>
        {/* right side */}
        <div
          className={`w-full lg:w-[30%] flex flex-col gap-3 sm:gap-4 items-center lg:items-start ${
            mounted ? "animate-fade-in" : "opacity-0"
          }`}
          style={parallaxStyle(6)}
        >
          <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide sm:tracking-widest leading-relaxed text-center lg:text-left">
            We design and build modern brands, websites, and digital products that
            help your business stand out, connect with your audience, and grow faster.
          </p>
          <button
            className="group relative bg-grid-white text-grid-black px-4 sm:px-6 md:px-8 rounded-full flex items-center gap-2 cursor-pointer hover:bg-grid-white/95 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 text-xs sm:text-sm font-semibold tracking-widest overflow-hidden border-2 border-white/20 hover:border-white w-fit mx-auto lg:mx-0 py-2 sm:py-3 transform hover:-translate-y-0.5 hover:scale-[1.02] animate-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-scale-pulse" />
              View Portfolio
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Shine effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-700 ease-out"></div>
          </button>
        </div>
      </div>
      {/* poster image */}
      <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-[50%] -translate-x-1/2 w-full flex justify-center items-center pointer-events-none px-4">
        <img
          src="/assets/poster-3.png"
          alt="poster-image"
          className="w-[35%] sm:w-[22%] lg:w-[23%] relative -rotate-4 -right-4 sm:-right-8 md:-right-12 lg:-right-20 -bottom-4 sm:-bottom-6 lg:-bottom-10 opacity-80 sm:opacity-100"
        />
        <img
          src="/assets/poster-1.png"
          alt="poster-image"
          className="w-[45%] sm:w-[28%] lg:w-[27%] z-10 drop-shadow-glow"
        />
        <img
          src="/assets/poster-2.png"
          alt="poster-image"
          className="w-[35%] sm:w-[22%] lg:w-[23%] relative rotate-4 -left-4 sm:-left-8 md:-left-12 lg:-left-20 -bottom-4 sm:-bottom-6 lg:-bottom-10 opacity-80 sm:opacity-100"
        />
      </div>
      {/* our customers logos */}
      <div className="bg-gradient-to-r from-grid-black via-grid-black/95 to-grid-black absolute bottom-0 z-50 w-full overflow-hidden">
        <div className="flex items-center gap-8 sm:gap-12 md:gap-16 py-3 sm:py-4 animate-scroll-left carousel-track">
          {[...customersLogos, ...customersLogos].map((logo, index) => (
            <img
              key={`${logo.id}-${index}`}
              src={logo.logo}
              alt="customer-logo"
              className="w-[12%] sm:w-[10%] md:w-[8%] min-w-[60px] sm:min-w-[80px] opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-glow"
            />
          ))}
        </div>
      </div>
      {/* people loved it */}
      <img
        src="/assets/people-loved-it.png"
        alt="liked"
        className="absolute right-4 sm:right-8 md:right-12 lg:right-[140px] top-[25%] sm:top-[30%] lg:top-[35%] z-50 w-32 sm:w-40 md:w-48 lg:w-60 animate-drift hidden sm:block"
        style={parallaxStyle(4)}
      />
    </section>
  );
};

export default Poster;
