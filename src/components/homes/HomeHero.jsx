import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import HeroBg from "../../assets/Landingbg.png";

// HD images for a premium look
const carouselImages = [
  "https://avatars.mds.yandex.net/get-shedevrum/15102269/img_766586fdd70311efb2d5caf2840a7b5b/orig",
  "https://artmostprint.ru/wp-content/uploads/2017/10/katalog-008.jpg",
 "https://i.pinimg.com/474x/d5/c1/87/d5c18722936b18e9a211ce9d212a7fe7.jpg",
  "https://avatars.mds.yandex.net/get-shedevrum/16525081/img_55456a6101de11f09a1b06608fe15d8d/orig",

];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextIndex = (currentIndex + 1) % carouselImages.length;

  return (
    <section className="relative min-h-screen w-full  overflow-hidden flex items-center pt-16" style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Background Subtle Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" /> */}

      {/* --- FLOATING LABELS (Refined Positions) --- */}
      <div className="absolute top-[15%] left-[30%] z-10 hidden lg:block">
        <p className="text-[14px] uppercase text-white tracking-[0.4em] rotate-12 opacity-60 font-medium">
          Free registration

        </p>
      </div>
      <div className="absolute top-[20%] left-[68%] z-10 hidden lg:block">
        <p className="text-[14px] uppercase text-white tracking-[0.4em] -rotate-12 opacity-60 font-medium">
          Open to all creatives
        </p>
      </div>
      <div className="absolute bottom-[5%] right-[52%] z-10 hidden lg:block">
        <p className="text-[14px] uppercase text-white tracking-[0.4em] rotate-0 opacity-60 font-medium">
          International visibility
        </p>
      </div>

      <div className="container mx-auto px-8 relative grid grid-cols-12 items-start h-full z-10">
        
        {/* LEFT COLUMN: Brand & CTA */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
          {/* Semicircle Thumbnail */}
          <div className="w-[350px] aspect-[2/1] overflow-hidden rounded-t-full border-2 border-[#D8D05A]  mb-10">
            <img 
              src={carouselImages[(currentIndex + 2) % carouselImages.length]} 
              className="w-full h-full object-cover grayscale brightness-75  hover:grayscale-0 transition-all duration-1000" 
              alt="Archived" 
            />
          </div>

          <h1 className="text-6xl md:text-7xl xl:text-[96px] font-extralight text-[#D8D05A] leading-[0.85] text-start tracking-tighter uppercase mb-12">
            Art Vision <br />
            <span className=" text-start">Awards</span>
          </h1>

          <div className="flex flex-wrap gap-5">
            <Button className="bg-[#CAA844] text-white hover:bg-white hover:text-black px-5 py-4 rounded-[7px] text-[11px] uppercase tracking-widest font-bold transition-all duration-300">
              Submit a Photo
            </Button>
            <Button variant="outline" className="border-[#CAA844]/40 text-[#CAA844] hover:bg-[#CAA844] hover:text-black px-5 py-4 rounded-[7px] text-[11px] uppercase tracking-widest transition-all duration-300">
              Create Account
            </Button>
          </div>
        </div>

        {/* CENTER COLUMN: Large Main Oval */}
        <div className="hidden lg:flex col-span-5 justify-center items-center relative">
          <div className="relative w-full max-w-[420px] h-[700px] aspect-[1/1.4] group">
            {/* Double Border Effect */}
            <div className="absolute inset-[-15px] border border-[#D8D05A] rounded-full" />
            {/* <div className="absolute inset-0 border border-[#D8D05A]/40 rounded-full scale-[1.02]" /> */}
            
            <div className="w-full h-full rounded-full overflow-hidden border border-[#D8D05A]/10 relative shadow-2xl shadow-black">
              {carouselImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out scale-110  ${
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-0"
                  }`}
                  alt="Main Feature"
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Secondary Oval & Slogan */}
        <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-end relative h-full">
          <div className="flex flex-col items-end gap-12 mr-[-10%] xl:mr-[-25%]">
            
            <p className="text-[#D8D05A] text-2xl xl:text-3xl font-light italic leading-tight text-right opacity-90 pr-10 absolute bottom-[10%] left-[2%]">
              Where Art <br /> Meets Vision
            </p>

            {/* Next Preview Oval */}
            <div className="w-56 xl:w-[350px] absolute bottom-[0%] left-[30%] aspect-[1/1.5] rounded-full border border-[#D8D05A] p-4 relative bg-black/20 backdrop-blur-sm group cursor-pointer">
              <div className="w-full h-full rounded-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                {carouselImages.map((img, index) => (
                  <img
                    key={`next-${index}`}
                    src={img}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === nextIndex ? "opacity-80" : "opacity-0"
                    }`}
                    alt="Next Up"
                  />
                ))}
              </div>
              {/* Floating "Next" indicator */}
              <div className="absolute -left-8 top-1/2 -rotate-90 text-[10px] tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                Next Slide
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      {/* <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D8D05A]/20 to-transparent" /> */}
    </section>
  );
};

export default HomeHero;