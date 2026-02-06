 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const portfolioImages = [
    {
        id: 1,
        image: "/assets/portfolio-sample.png",
        title: "Portfolio 1",
        category: "Category 1",
    },
    {
        id: 2,
        image: "/assets/p1.png",
        title: "Portfolio 2",
        category: "Category 2",
    },
    
    {
        id: 3,
        image: "/assets/p2.png",
        title: "Portfolio 3",
        category: "Category 3",
    },
    {
        id: 4,
        image: "/assets/p3.png",
        title: "Portfolio 4",
        category: "Category 4",
    },
    {
        id: 5,
        image: "/assets/p4.png",
        title: "Portfolio 1",
        category: "Category 1",
    },
    {
        id: 6,
        image: "/assets/p2.png",
        title: "Portfolio 2",
        category: "Category 2",
    },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % portfolioImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getRelativePosition = (index: number) => {
    const total = portfolioImages.length;
    let diff = index - current;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="mt-2 sm:mt-16 md:mt-20 lg:mt-[80px] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 relative">

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grid-black tracking-tight">
          View our team projects
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-grid-light-gray max-w-xl mx-auto">
          To see the portfolio and learn more about the projects, visit our
          showcase and explore how we build clean, modern and functional
          interfaces for digital products.
        </p>
      </div>

      {/* carousel */}
      <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] flex items-center justify-center overflow-hidden">
        {portfolioImages.map((item, index) => {
          const position = getRelativePosition(index);

          if (position < -2 || position > 2) return null;

          let translateX = "0";
          let translateY = "0";
          let rotate = "0deg";
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;

          if (position === 0) {
            // center card
            translateY = "0";
            rotate = "0deg";
            scale = 1;
            opacity = 1;
            zIndex = 30;
          } else if (position === -1) {
            // left inner
            translateX = isMobile ? "-85%" : "-70%";
            translateY = isMobile ? "5%" : "10%";
            rotate = isMobile ? "-8deg" : "-12deg";
            scale = isMobile ? 0.85 : 1;
            opacity = isMobile ? 0.7 : 0.95;
            zIndex = 20;
          } else if (position === 1) {
            // right inner
            translateX = isMobile ? "85%" : "70%";
            translateY = isMobile ? "5%" : "10%";
            rotate = isMobile ? "8deg" : "12deg";
            scale = isMobile ? 0.85 : 1;
            opacity = isMobile ? 0.7 : 0.95;
            zIndex = 20;
          } else if (position === -2) {
            // far left
            translateX = isMobile ? "-170%" : "-140%";
            translateY = isMobile ? "10%" : "18%";
            rotate = isMobile ? "-12deg" : "-18deg";
            scale = isMobile ? 0.7 : 1;
            opacity = isMobile ? 0.4 : 0.8;
            zIndex = 10;
          } else if (position === 2) {
            // far right
            translateX = isMobile ? "170%" : "140%";
            translateY = isMobile ? "10%" : "18%";
            rotate = isMobile ? "12deg" : "18deg";
            scale = isMobile ? 0.7 : 1;
            opacity = isMobile ? 0.4 : 0.8;
            zIndex = 10;
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              className="absolute focus:outline-none select-none"
              style={{
                transform: `translate(-50%, -50%) translate(${translateX}, ${translateY}) rotate(${rotate}) scale(${scale})`,
                left: "50%",
                top: "50%",
                zIndex,
                opacity,
                transition:
                  "transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 700ms ease",
              }}
            >
              <div className="relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] rounded-2xl sm:rounded-3xl select-none bg-white/90 shadow-[0_25px_60px_rgba(15,23,42,0.3)] overflow-hidden border border-white/60">
                <div className="relative w-full pt-[75%] bg-[#f3f4f6] select-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 240px, (max-width: 1280px) 280px, 320px"
                    className="object-cover select-none"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* button */}
      <div className="relative mt-8 sm:mt-10 lg:mt-12 flex justify-center">
        <button className="group relative bg-grid-black text-grid-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer hover:bg-grid-black/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 text-xs sm:text-sm font-semibold tracking-widest overflow-hidden border border-black/10">
          <span className="relative z-10">See All Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent group-hover:left-full transition-all duration-700 ease-out" />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;