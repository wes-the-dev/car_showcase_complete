"use client"
import CustomButton from "./CustomButton"
import Image from "next/image"

const Hero = () => {
    const handleScroll =()=>{
        const nextSection = document.querySelector("#discover");
        
        if(nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">Find a car, with rental prices -- quickly and easily!</h1>
            <p className="hero_subtitle">
                Streamline your car search for rental experience with our effortless search and filter process. Search from a very wide range of vehicles. You can find literally any car on earth here
            </p>
            <CustomButton
                title = "Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
             />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            <div className="hero__image-overlay"></div>
        </div>
    </div>
  )
}

export default Hero