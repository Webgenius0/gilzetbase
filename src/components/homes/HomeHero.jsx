import React from "react";
import { Button } from "../ui/button";
import HeroBg from "../../assets/hero/herobg-img.png";
const HomeHero = () => {
  return (
    <>
      <div>
        {/* here i want to make the img bg img so write necessary css */}
        <div
          className=" bg-cover bg-center h-276 max-h-screen w-full "
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <div className=" flex flex-col items-center justify-center h-full text-center pt-20 space-y-6 position-relative -ml-300">
            <h1 className="text-8xl font-light text-(--color-all) leading-tight mb-10 tracking-tight text-start">
              ART VISION
              <br />
              AWARDS
            </h1>

            <div className="pt-6 space-y-3 max-w-xl  text-start flex gap-5 items-start justify-start">
              <Button className="relative overflow-hidden w-full rounded-sm max-w-35 text-white bg-(--color-all) group">
                <span className="relative z-10">Submit a Photo</span>
                <span className="absolute inset-0 bg-gray-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              </Button>

              <Button className="relative overflow-hidden w-full rounded-sm max-w-35 text-gray-300 border border-gray-600 group">
                <span className="relative z-10">Create an Account</span>
                <span className="absolute inset-0 bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;

// import React from "react";
// import { Button } from "../ui/button";
// import HeroBg from "../../assets/Landingbg.png";
// import img1 from "../../assets/Frame1.png"; // Top-left semicircle
// import img2 from "../../assets/Frame2.png"; // Center oval
// import img3 from "../../assets/Framme3.png"; // Right oval

// const HomeHero = () => {
//   return (
//     <section
//       className="relative min-h-screen w-full bg-[#1a1a1a] text-[#D8D05A] overflow-hidden flex items-center"
//       style={{
//         backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${HeroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* --- FLOATING LABELS --- */}
//       <div className="absolute top-[12%] left-[28%] z-10 hidden lg:block">
//         <p className="text-[10px] uppercase tracking-[0.2em] -rotate-12 opacity-70">
//           Free registration
//         </p>
//       </div>
//       <div className="absolute top-[18%] right-[22%] z-10 hidden lg:block">
//         <p className="text-[10px] uppercase tracking-[0.2em] rotate-12 opacity-70">
//           Open to all creatives
//         </p>
//       </div>
//       <div className="absolute bottom-[8%] left-[45%] z-10 hidden lg:block">
//         <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">
//           International visibility
//         </p>
//       </div>

//       <div className="container mx-auto px-6 relative grid grid-cols-12 items-center gap-4 h-full">
//         {/* LEFT COLUMN */}
//         <div className="col-span-12 lg:col-span-5 z-30 flex flex-col justify-center">
//           {/* Top-Left Semicircle */}
//           <div className="w-1/2  aspect-[2/1] overflow-hidden rounded-t-full border border-[#D8D05A]/40 border-b-0 mb-8 transform -translate-x-4 md:translate-x-0">
//             <img
//               src={img1}
//               alt="Art 1"
//               className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
//             />
//           </div>

//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tighter uppercase mb-8">
//             Art Vision <br />
//             <span className="ml-4 md:ml-12">Awards</span>
//           </h1>

//           <div className="flex flex-wrap gap-4">
//             <Button className="bg-[#D8D05A] text-black hover:bg-[#eee684] px-8 py-6 rounded-sm text-xs uppercase tracking-widest font-semibold">
//               Submit a Photo
//             </Button>
//             <Button
//               variant="outline"
//               className="border-[#D8D05A]/40 text-[#D8D05A] hover:bg-[#D8D05A]/10 px-8 py-6 rounded-sm text-xs uppercase tracking-widest"
//             >
//               Create an account
//             </Button>
//           </div>
//         </div>

//         {/* CENTER COLUMN (Main Oval) */}
//         <div className="hidden lg:flex col-span-4 justify-center items-center z-20">
//           <div className="relative w-full max-w-[440px] aspect-[2/3] group">
//             <div className="absolute inset-0 border border-[#D8D05A]/60 rounded-full scale-[1.03] group-hover:scale-[1.05] transition-transform duration-700" />
//             <div className="w-full h-full rounded-full overflow-hidden border border-[#D8D05A]/20">
//               <img
//                 src={img2}
//                 alt="Art 2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="col-span-12 lg:col-span-3 relative h-full flex flex-col justify-center lg:items-end">
//           <div className="lg:absolute lg:right-[-20%] flex flex-col lg:flex-row items-center gap-8">
//             <p className="hidden xl:block text-[#D8D05A] text-xl font-light italic leading-tight self-end ">
//               Where Art <br /> Meets Vision
//             </p>

//             {/* Right Oval (Partially Visible) */}
//             <div className="w-48 lg:w-[280px] aspect-[2/3] rounded-full border border-[#D8D05A]/40 p-1 overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
//               <div className="w-full h-full rounded-full overflow-hidden">
//                 <img
//                   src={img3}
//                   alt="Art 3"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHero;
