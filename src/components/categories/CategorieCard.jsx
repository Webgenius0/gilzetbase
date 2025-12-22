import { Camera } from "lucide-react";

const CategorieCard = ({ image, photographer }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
      {/* Image Container with aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`Photo by ${photographer}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Bottom Bar Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm px-4 py-2 flex items-center justify-start gap-2">
        <Camera className="w-4 h-4 text-gray-700" />
        <span className="text-sm font-medium text-gray-800 tracking-wide">
          {photographer}
        </span>
      </div>
    </div>
  );
};

export default CategorieCard;
