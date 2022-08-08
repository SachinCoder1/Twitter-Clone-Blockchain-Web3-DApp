import React from "react";
import { GoVerified } from "react-icons/go";
export default function SmImage({ src, alt, isNFTImage, className, classNameImg}) {
  return (
    <div className={`relative h-[45px] w-[45px] ${className}`}>
      <img
        className={`rounded-full h-[40px] w-[40px] object-cover ${classNameImg}`}
        src={src}
        alt={alt}
      />
      {isNFTImage && (
        <GoVerified className="text-base bg-white rounded-full text-blue-500 absolute top-0 right-0" />
      )}
    </div>
  );
}
