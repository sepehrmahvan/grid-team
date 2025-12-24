

"use client";
import React, { useState, useEffect, useRef } from 'react';

const Poster = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);
    const [typedText, setTypedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const posterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        // Initialize particles
        const initParticles = () => {
            const newParticles = Array.from({ length: 25 }, (_, i) => ({
                id: i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.5 + 0.1
            }));
            setParticles(newParticles);
        };

        initParticles();

        // Text animation
        const textInterval = setInterval(() => {
            setTextIndex(prev => (prev + 1) % 3);
        }, 3000);

        // Typewriter effect
        const fullText = 'GRID TEAM';
        let currentIndex = 0;
        const typeWriter = () => {
            if (currentIndex < fullText.length) {
                setTypedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeWriter, 150); // Speed of typing
            } else {
                setIsTypingComplete(true);
            }
        };

        // Start typing after a short delay
        setTimeout(() => {
            typeWriter();
        }, 1000);

        // Scroll effect
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            if (posterRef.current) {
                const rect = posterRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const tiltX = (e.clientX - centerX) / 25;
                const tiltY = (e.clientY - centerY) / 25;
                setTilt({ x: tiltX, y: tiltY });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(textInterval);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
            {/* Complex animated background with advanced effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Advanced gradient orbs with parallax */}
                <div
                    className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#7D7FF4]/15 to-[#e94560]/15 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${tilt.x}deg)` }}
                ></div>
                <div
                    className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-[#e94560]/12 to-[#7D7FF4]/12 rounded-full blur-2xl animate-pulse delay-1000"
                    style={{ transform: `translateY(${scrollY * -0.05}px) rotate(${tilt.y}deg)` }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#7D7FF4]/8 to-[#f1f5f9]/25 rounded-full blur-xl animate-pulse delay-500"
                    style={{ transform: `translateY(${scrollY * 0.03}px) scale(${1 + Math.abs(tilt.x) * 0.01})` }}
                ></div>

                {/* Dynamic floating particles with physics */}
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute rounded-full animate-pulse"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y + scrollY * particle.speed}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            background: `rgba(${Math.random() > 0.5 ? '125, 127, 244' : '233, 69, 96'}, ${0.3 + Math.random() * 0.4})`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                        }}
                    />
                ))}

                {/* Complex geometric patterns */}
                <div className="absolute inset-0 opacity-8">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="complex-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                                <circle cx="12.5" cy="12.5" r="1.5" fill="#7D7FF4" opacity="0.4"/>
                                <rect x="10" y="10" width="5" height="5" fill="none" stroke="#e94560" strokeWidth="0.5" opacity="0.3"/>
                                <polygon points="12.5,5 17.5,12.5 12.5,20 7.5,12.5" fill="#7D7FF4" opacity="0.2"/>
                            </pattern>
                            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7D7FF4" stopOpacity="0.1"/>
                                <stop offset="50%" stopColor="#e94560" stopOpacity="0.05"/>
                                <stop offset="100%" stopColor="#7D7FF4" stopOpacity="0.1"/>
                            </linearGradient>
                        </defs>
                        <rect width="100" height="100" fill="url(#complex-grid)" />
                        <rect width="100" height="100" fill="url(#grid-gradient)" />
                    </svg>
                </div>

                {/* Floating geometric shapes with complex animations */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#7D7FF4]/20 rotate-45 animate-spin" style={{ animationDuration: '20s', transform: `translate(${tilt.x * 2}px, ${tilt.y * 2}px)` }}></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-[#e94560]/30 rounded-full animate-pulse delay-2000" style={{ transform: `scale(${1 + Math.abs(tilt.x) * 0.02})` }}></div>
                <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-[#7D7FF4]/10 transform rotate-12 animate-bounce delay-1000" style={{ transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)` }}></div>

                {/* Light rays effect with mouse interaction */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-1 h-screen bg-gradient-to-b from-[#7D7FF4] to-transparent" style={{ transform: `skew(${tilt.x}deg)` }}></div>
                    <div className="absolute top-0 right-1/3 w-1 h-screen bg-gradient-to-b from-[#e94560] to-transparent" style={{ transform: `skew(${tilt.y}deg)` }}></div>
                    <div className="absolute top-0 left-2/3 w-0.5 h-screen bg-gradient-to-b from-[#7D7FF4]/50 to-transparent" style={{ transform: `rotate(${tilt.x}deg)` }}></div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-16 left-16 w-8 h-8 bg-[#7D7FF4]/20 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-24 right-24 w-6 h-6 bg-[#e94560]/30 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-32 w-12 h-12 bg-[#7D7FF4]/15 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-16 right-16 w-4 h-4 bg-[#e94560]/25 rounded-full animate-pulse delay-500"></div>

            {/* Main poster content */}
            <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 transition-all duration-1500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>

                {/* Header section */}
                <div className="text-center mb-8">
                

                    <div className="relative mt-[100px]">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF99CC] via-[#66CCFF] to-[#FFE4B5] leading-none mb-4 inline-block"
                            style={{
                                textShadow: `0 0 18px rgba(255, 153, 204, 0.45), 0 0 36px rgba(102, 204, 255, 0.25), 0 0 54px rgba(255, 228, 181, 0.15)`,
                                transform: `perspective(1000px) rotateX(${tilt.y * 0.5}deg) rotateY(${tilt.x * 0.5}deg)`
                            }}>
                            {typedText}
                            {!isTypingComplete && (
                                <span className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-[#FF99CC] animate-pulse ml-1"></span>
                            )}
                        </h1>

                        {/* Animated background glow */}
                        {isTypingComplete && (
                            <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF99CC] via-[#66CCFF] to-[#FFE4B5] animate-gradient-x opacity-15 blur-sm -z-10">
                                GRID TEAM
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center space-x-6 mb-4">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF99CC] to-[#66CCFF] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FF99CC] rounded-full animate-pulse"></div>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-[#66CCFF] to-[#FFE4B5] rounded-full"></div>
                    </div>

                    <div className="h-16 flex items-center justify-center">
                        <p className={`text-lg md:text-xl text-[#64748b] font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
                            textIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            Where creativity meets innovation, transforming ideas into extraordinary digital experiences
                        </p>
                        <p className={`absolute text-lg md:text-xl text-[#64748b] font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
                            textIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            Crafting pixel-perfect solutions with cutting-edge technology and artistic vision
                        </p>
                        <p className={`absolute text-lg md:text-xl text-[#64748b] font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
                            textIndex === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            From concept to launch, we bring your digital dreams to life with unparalleled expertise
                        </p>
                    </div>
                </div>

                {/* Services showcase */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    {/* Design Service */}
                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-[#7D7FF4]/20 transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1"
                         style={{ transform: `perspective(1000px) rotateX(${tilt.y * 0.1}deg) rotateY(${tilt.x * 0.1}deg)` }}>
                        <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
                            🎨
                            <div className="absolute inset-0 text-4xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300">🎨</div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#7D7FF4] transition-colors duration-300">Creative Design</h3>
                        <p className="text-[#64748b] text-sm leading-relaxed mb-3 group-hover:text-[#475569] transition-colors duration-300">
                            Innovative visual solutions that capture attention and drive engagement through masterful design.
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7D7FF4]/10 via-[#e94560]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        {/* Animated border removed as requested */}
                        {/* Floating particles on hover */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-[#7D7FF4] rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#e94560] rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-200"></div>
                    </div>

                    {/* Development Service */}
                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-[#e94560]/30 transition-all duration-700 transform hover:-translate-y-3 hover:rotate-2 overflow-hidden"
                         style={{ transform: `perspective(1000px) rotateX(${tilt.y * 0.1}deg) rotateY(${tilt.x * 0.1}deg)` }}>
                        <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-700 relative">
                            ⚡
                            <div className="absolute inset-0 text-4xl opacity-0 group-hover:opacity-60 group-hover:rotate-90 transition-all duration-700 delay-200">⚡</div>
                            {/* Electric sparks effect */}
                            <div className="absolute top-0 right-0 w-1 h-1 bg-[#e94560] rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
                            <div className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-[#e94560] rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#e94560] transition-all duration-500 relative">
                            Fast Development
                            <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-[#e94560] transition-all duration-700 ease-out"></div>
                        </h3>
                        <p className="text-[#64748b] text-sm leading-relaxed mb-3 group-hover:text-[#475569] transform group-hover:translate-x-1 transition-all duration-300">
                            Rapid development with cutting-edge technologies, delivering scalable solutions.
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/10 via-[#7D7FF4]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Circuit-like pattern animation */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <path d="M20,20 L80,20 L80,50 L50,50 L50,80 L20,80 Z" fill="none" stroke="#e94560" strokeWidth="1" className="animate-pulse"/>
                                <circle cx="20" cy="20" r="2" fill="#e94560" className="animate-ping delay-100"/>
                                <circle cx="80" cy="50" r="1.5" fill="#7D7FF4" className="animate-pulse delay-300"/>
                                <circle cx="50" cy="80" r="1" fill="#e94560" className="animate-bounce delay-500"/>
                            </svg>
                        </div>

                        {/* Floating code snippets */}
                        <div className="absolute top-2 left-2 text-xs font-mono text-[#e94560]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                            {'</>'}
                        </div>
                        <div className="absolute bottom-2 right-2 text-xs font-mono text-[#7D7FF4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                            {'{ }'}
                        </div>
                    </div>

                    {/* Innovation Service */}
                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-[#7D7FF4]/30 transition-all duration-700 transform hover:-translate-y-3 hover:-rotate-1 overflow-hidden"
                         style={{ transform: `perspective(1000px) rotateX(${tilt.y * -0.1}deg) rotateY(${tilt.x * -0.1}deg)` }}>
                        <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700 relative">
                            🚀
                            <div className="absolute inset-0 text-4xl opacity-0 group-hover:opacity-60 group-hover:rotate-45 transition-all duration-700 delay-200">🚀</div>
                            {/* Rocket trail effect */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-[#7D7FF4] to-transparent opacity-0 group-hover:opacity-100 animate-pulse delay-400"></div>
                            <div className="absolute top-1 right-1 w-1 h-1 bg-[#7D7FF4] rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#7D7FF4] transition-all duration-500 relative">
                            Innovation
                            <div className="absolute -bottom-1 right-0 w-0 group-hover:w-full h-0.5 bg-[#7D7FF4] transition-all duration-700 ease-out"></div>
                        </h3>
                        <p className="text-[#64748b] text-sm leading-relaxed mb-3 group-hover:text-[#475569] transform group-hover:-translate-x-1 transition-all duration-300">
                            Pushing boundaries with creative solutions that redefine possibilities.
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7D7FF4]/10 via-[#e94560]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Galaxy/starfield effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                {/* Stars */}
                                <circle cx="25" cy="25" r="1" fill="#7D7FF4" className="animate-pulse delay-100"/>
                                <circle cx="75" cy="35" r="0.8" fill="#e94560" className="animate-pulse delay-300"/>
                                <circle cx="45" cy="70" r="0.6" fill="#7D7FF4" className="animate-bounce delay-500"/>
                                <circle cx="85" cy="80" r="0.4" fill="#e94560" className="animate-pulse delay-700"/>
                                <circle cx="15" cy="60" r="0.5" fill="#7D7FF4" className="animate-ping delay-900"/>

                                {/* Orbiting elements */}
                                <circle cx="50" cy="50" r="15" fill="none" stroke="#7D7FF4" strokeWidth="0.5" opacity="0.3" className="animate-spin" style={{animationDuration: '10s'}}/>
                                <circle cx="50" cy="50" r="8" fill="none" stroke="#e94560" strokeWidth="0.3" opacity="0.4" className="animate-spin" style={{animationDuration: '7s', animationDirection: 'reverse'}}/>
                            </svg>
                        </div>

                        {/* Innovation symbols - positioned to avoid text overlap */}
                        <div className="absolute -top-1 -right-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 transform group-hover:rotate-12 z-10">
                            💡
                        </div>
                        <div className="absolute -bottom-1 -left-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500 transform group-hover:-rotate-12 z-10">
                            ✨
                        </div>
                        <div className="absolute top-1/4 -left-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-700 transform group-hover:scale-150 z-10">
                            🌟
                        </div>
                    </div>
                </div>

                {/* Interactive mouse follower */}
                <div
                    className="absolute w-32 h-32 bg-gradient-radial from-[#7D7FF4]/10 to-transparent rounded-full pointer-events-none transition-all duration-500 ease-out blur-xl"
                    style={{
                        left: mousePosition.x * 0.02,
                        top: mousePosition.y * 0.02,
                        transform: 'translate(-50%, -50%)',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Poster;