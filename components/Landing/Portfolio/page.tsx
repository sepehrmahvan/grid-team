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
]

const Portfolio = () => {
    return(
        <div className="mt-[80px]">
            {/* title text */}
            <TitleText title="View our team Potfolio" text="lorem lorem lorem lorem lorem lorem lorem lorem " />
            {/* portfolio images */}
            <Link href="/portfolio" className="grid grid-cols-2 gap-4">
                {portfolioImages.map((image) => (
                    <div key={image.id} className="w-[100%] relative rounded-2xl overflow-hidden">
                        <img src={image.image} alt={image.title} className="w-full" />
                        <div className="bg-grid-white px-4 py-6 rounded-2xl absolute bottom-[20px] left-0 right-0 w-[90%] mx-auto flex justify-between items-center shadow-xl">
                            <h3 className="text-grid-black text-sm font-medium">{image.title}</h3>
                            <p className="text-grid-light-gray text-sm font-medium">{image.category}</p>
                        </div>
                    </div>
                ))}
            </Link>
            <div className="flex justify-end items-center mt-10 w-full">
                <Link href="/portfolio" className="text-sm font-medium flex items-center gap-2 text-grid-black hover:text-primary transition-all duration-300">See More <FaArrowRight className="text-sm -rotate-45" /></Link>
            </div>
        </div>
    )
}

export default Portfolio