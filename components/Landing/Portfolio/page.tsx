import TitleText from "@/share/TitleText"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const portfolioImages = [
    {
        id: 1,
        image: "/assets/p1.png",
        title: "Portfolio 1",
        category: "Category 1",
    },
    {
        id: 2,
        image: "/assets/p2.png",
        title: "Portfolio 2",
        category: "Category 2",
    },
    
    {
        id: 3,
        image: "/assets/p3.png",
        title: "Portfolio 3",
        category: "Category 3",
    },
    {
        id: 4,
        image: "/assets/p4.png",
        title: "Portfolio 4",
        category: "Category 4",
    },
    {
        id: 5,
        image: "/assets/p1.png",
        title: "Portfolio 1",
        category: "Category 1",
    },
    {
        id: 6,
        image: "/assets/p2.png",
        title: "Portfolio 2",
        category: "Category 2",
    },
]

const Portfolio = () => {
    return(
        <div className="mt-[80px]">
            {/* title text */}
            <TitleText title="View our team Potfolio" text="lorem lorem lorem lorem lorem lorem lorem lorem " />
            {/* portfolio images */}
            <Link href="/portfolio" className="grid grid-cols-3 gap-6">
                {portfolioImages.map((image) => (
                    <div key={image.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm">
                        <img src={image.image} alt={image.title} className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-5 py-2 rounded-2xl absolute bottom-4 left-4 right-4 flex justify-between items-center shadow-lg border border-white/20">
                            <div>
                                <h3 className="text-grid-black text-base font-semibold mb-1">{image.title}</h3>
                            </div>
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <FaArrowRight className="text-primary text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </Link>
            <div className="flex justify-end items-center mt-12 w-full">
                <Link href="/portfolio" className="group relative bg-gradient-to-r from-primary to-primary text-white px-6 py-3 rounded-full cursor-pointer hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 text-sm font-semibold flex items-center gap-3 transform hover:scale-105 border-2 border-primary/20">
                    <span>See More</span>
                    <FaArrowRight className="text-sm transform group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300" />
                    {/* Shine effect */}
                    <div className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 ease-out rounded-full'></div>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio