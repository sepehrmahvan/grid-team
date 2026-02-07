"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const portfolioImages = [
  { id: 1, image: "/assets/portfolio-sample.png" },
  { id: 2, image: "/assets/p1.png" },
  { id: 3, image: "/assets/p2.png" },
  { id: 4, image: "/assets/p3.png" },
  { id: 5, image: "/assets/p4.png" },
];

const AUTOPLAY_DELAY = 4500;

const Portfolio = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <section className="bg-transparent rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] py-4 sm:py-6 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="text-center w-full my-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grid-black tracking-tight">
          View our team projects
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-grid-light-gray">
          To see the portfolio and learn more about the projects, visit Dribbble site. To see the portfolio and learn more about the projects
        </p>
      </div>
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
        <div className="absolute -top-32 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-72 bg-primary/6 rounded-full blur-[80px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-visible">
        {/* Panorama (Coverflow) Swiper */}
        <div className="portfolio-swiper relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, A11y]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            speed={600}
            autoplay={{
              delay: AUTOPLAY_DELAY,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 120,
              scale: 0.82,
              modifier: 1,
              slideShadows: true,
            }}
            slidesPerView="auto"
            slidesOffsetBefore={40}
            slidesOffsetAfter={40}
            breakpoints={{
              320: { coverflowEffect: { depth: 80, rotate: 35, scale: 0.78 } },
              640: { coverflowEffect: { depth: 100, rotate: 40, scale: 0.82 } },
              1024: { coverflowEffect: { depth: 120, rotate: 42, scale: 0.84 } },
            }}
            pagination={{
              clickable: true,
              el: ".portfolio-pagination",
              bulletClass: "portfolio-bullet",
              bulletActiveClass: "portfolio-bullet-active",
            }}
            a11y={{
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              paginationBulletMessage: "Go to slide {{index}}",
            }}
            className="!overflow-visible !pb-14"
          >
            {portfolioImages.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[320px] md:!w-[360px] lg:!w-[380px]">
                <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-grid-background shadow-[0_24px_48px_-12px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.08] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.28)] transition-shadow duration-300">
                  <Image
                    src={item.image}
                    alt={`Project ${item.id}`}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 380px"
                    className="object-cover select-none"
                    draggable={false}
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-[inherit]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav buttons */}
          <button
            type="button"
            className="portfolio-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-black/5 flex items-center justify-center text-grid-black cursor-pointer disabled:opacity-40 disabled:pointer-events-none -translate-x-1 sm:left-2 hover:scale-105 active:scale-95 transition-transform"
            onClick={goPrev}
            disabled={isBeginning && !swiperRef.current?.params?.loop}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="portfolio-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-black/5 flex items-center justify-center text-grid-black cursor-pointer disabled:opacity-40 disabled:pointer-events-none translate-x-1 sm:right-2 hover:scale-105 active:scale-95 transition-transform"
            onClick={goNext}
            disabled={isEnd && !swiperRef.current?.params?.loop}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination container (bullets injected by Swiper) */}
          <div className="portfolio-pagination flex justify-center gap-2 mt-6 sm:mt-8" />
        </div>

        {/* Slide counter */}
        <div className="flex justify-center mt-2 text-xs text-grid-light-gray tabular-nums">
          {activeIndex + 1} / {portfolioImages.length}
        </div>
      </div>

      {/* Text block */}
      <div className="relative max-w-2xl mx-auto text-center mt-8 sm:mt-10 lg:mt-14">
        <div className="mt-2 sm:mt-3">
          <button className="group relative bg-grid-black text-grid-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer hover:bg-grid-black/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 text-xs sm:text-sm font-semibold tracking-widest overflow-hidden border border-black/10 shadow-md">
            <span className="relative z-10">See All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
