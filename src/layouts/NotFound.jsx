
import { ArrowLeft } from "lucide-react";

import { useEffect } from "react";
import { Link } from "react-router";

export default function NotFound() {
  useEffect(() => {
    const handleMove = (e) => {
      const sparkle = document.createElement("span");

      sparkle.className =
        "fixed z-50 w-1.5 h-1.5 rounded-full pointer-events-none " +
        "bg-[radial-gradient(circle,_#FFD700_0%,_transparent_70%)] " +
        "animate-[sparkleFade_0.8s_ease-out_forwards]";

      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.transform = "translate(-50%, -50%)";

      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-serif text-white bg-yellow-500 bg-background/95 overflow-x-hidden">
      <main className="flex-1 flex items-center justify-center relative px-5 py-16">
        {/* Decorative sparkles */}
        <span className="absolute w-1 h-1 bg-primary rounded-full animate-ping top-[20%] left-[15%]" />
        <span className="absolute w-1 h-1 bg-primary rounded-full animate-ping top-[40%] right-[20%]" />
        <span className="absolute w-1 h-1 bg-primary rounded-full animate-ping bottom-[30%] left-[25%]" />
        <span className="absolute w-1 h-1 bg-primary rounded-full animate-ping top-[60%] right-[15%]" />

        {/* Background SVG */}
        {/* <svg
          viewBox="0 0 200 300"
          className="absolute w-[250px] md:w-[400px] opacity-5 text-primary"
          fill="currentColor"
        >
          <path d="M80 30 L120 30 L120 50 L110 50 L110 80 L140 80 L140 280 L60 280 L60 80 L90 80 L90 50 L80 50 Z" />
          <rect x="70" y="10" width="60" height="20" rx="5" opacity="0.7" />
        </svg> */}

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center animate-[fadeIn_1s_ease-out]">
          <h1 className="text-[60px] md:text-[180px] font-bold leading-none
            bg-linear-to-r from-primary/20 via-primary/90 to-primary
            bg-[length:200%_200%] bg-clip-text text-transparent
            animate-[shimmer_3s_infinite]
            drop-shadow-[0_0_80px_rgba(218,165,32,0.3)]">
            404
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-light tracking-widest">
            Scent Not Found
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            The fragrance you&apos;re looking for seems to have evaporated into thin air.
            Perhaps it was too exclusive, or the page has been discontinued.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 px-8 py-3.5
              bg-primary hover:bg-accent text-foreground font-medium rounded-md
              transition-all active:scale-95
              shadow-[0_0_20px_rgba(200,164,93,0.3)]"
            >
              <ArrowLeft /> Return Home
            </Link>

            <Link
              href="/companies"
              className="px-8 py-3.5 border border-primary/50 rounded-md
              hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
            >
              Browse Companies
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-16 p-8 rounded-xl bg-foreground/5 border border-primary/50">
            <h3 className="text-xl text-primary mb-6">
              Explore Our Offerings
            </h3>

            {/* <div className="flex flex-wrap gap-3 justify-center">
              {[
                ["Perfume Manufacturers", "/categories/perfume-manufacturers"],
                ["Fragrance Oils", "/categories/fragrance-oils"],
                ["Bottles & Caps", "/categories/bottles-caps"],
                ["Packaging & Labels", "/categories/packaging-labels"],
                ["Latest Offers", "/offers"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="px-8 py-3.5 border border-primary/50 rounded-md
                  hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
                >
                  {label}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </main>

      {/* Tailwind custom animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes sparkleFade {
          from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          to { opacity: 0; transform: translate(-50%, -50%) scale(2); }
        }
      `}</style>
    </div>
  );
}
