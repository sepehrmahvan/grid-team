"use client";
import TitleText from "@/share/TitleText";
import React, { useEffect, useMemo, useRef, useState } from "react";

const OurServices = () => {
  const services = useMemo(
    () => [
      {
        id: 1,
        name: "Wordpress",
      },
      {
        id: 2,
        name: "Ux",
      },
      {
        id: 3,
        name: "Product design",
      },
      {
        id: 4,
        name: "Elementor",
      },
      {
        id: 5,
        name: "Instagram ",
      },
      {
        id: 6,
        name: "UI",
      },
      {
        id: 7,
        name: "Graphic ",
      },
      {
        id: 8,
        name: "Frontend",
      },
      {
        id: 9,
        name: "Backend",
      },
      {
        id: 10,
        name: "Seo",
      },
    ],
    []
  );

  const [hasAnimated, setHasAnimated] = useState(false);
  const [columnsPerRow, setColumnsPerRow] = useState(5);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Generate random values only on client side to avoid hydration mismatch
  const [animationValues, setAnimationValues] = useState<{
    rotations: number[];
    initialRotations: number[];
    durations: number[];
    delays: number[];
  } | null>(null);

  // Update columns per row based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumnsPerRow(2); // Mobile: 2 columns
      } else if (width < 768) {
        setColumnsPerRow(3); // Small tablet: 3 columns
      } else if (width < 1024) {
        setColumnsPerRow(4); // Tablet: 4 columns
      } else {
        setColumnsPerRow(5); // Desktop: 5 columns
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Calculate if service should be white based on checkerboard pattern
  const isServiceWhite = (index: number) => {
    const row = Math.floor(index / columnsPerRow);
    const col = index % columnsPerRow;
    // Checkerboard pattern: (row + col) % 2 === 0 means white
    return (row + col) % 2 === 0;
  };

  // Initialize random values only on client side
  useEffect(() => {
    if (animationValues === null) {
      const rotations = services.map(() => Math.random() * 40 - 20);
      const initialRotations = services.map(() => Math.random() * 120 - 60);
      const durations = services.map(() => 0.8 + Math.random() * 1.0);
      const delays = services.map((_, index) => {
        const row = Math.floor(index / columnsPerRow);
        const col = index % columnsPerRow;
        const baseRowDelay = row * 200;
        const randomDelay = Math.random() * 300;
        const columnDelay = col * 30;
        return baseRowDelay + randomDelay + columnDelay;
      });
      setAnimationValues({ rotations, initialRotations, durations, delays });
    }
  }, [services, animationValues, columnsPerRow]);

  // Get animation values (default to 0 if not initialized yet)
  const getRotation = (index: number) => animationValues?.rotations[index] ?? 0;
  const getInitialRotation = (index: number) => animationValues?.initialRotations[index] ?? 0;
  const getDuration = (index: number) => animationValues?.durations[index] ?? 1.2;
  const getDelay = (index: number) => animationValues?.delays[index] ?? 0;



  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full sm:w-[90%] md:w-[86%] mx-auto min-h-[400px] sm:min-h-[48vh] flex flex-col justify-between items-center border border-gray-400 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] mt-8 sm:mt-10"
    >
      <TitleText
        title="Our Services"
        text="We offer a wide range of services to our clients"
      />
      <div className="flex flex-wrap gap-2 sm:gap-2 md:gap-2 w-full mt-6 sm:mt-8 md:mt-[40px]">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="w-[calc(50%-4px)] sm:w-[calc(33.333%-5.33px)] md:w-[calc(25%-6px)] lg:w-[calc(20%-6.4px)]"
          >
            <h3
              className={`${
                isServiceWhite(index)
                  ? "bg-transparent text-grid-black border border-grid-black"
                  : "bg-grid-black text-white"
              } ${
                hasAnimated ? "animate-service-drop" : ""
              } w-full text-center py-2 sm:py-3 md:py-[15px] px-2 sm:px-3 md:px-4 rounded-full text-xs sm:text-sm md:text-base`}
              style={{
                animationDelay: hasAnimated && animationValues ? `${getDelay(index)}ms` : undefined,
                animationDuration: hasAnimated && animationValues ? `${getDuration(index)}s` : undefined,
                "--service-rotation": `${getRotation(index)}deg`,
                "--service-initial-rotation": `${getInitialRotation(index)}deg`,
                opacity: 0,
              } as React.CSSProperties}
            >
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
