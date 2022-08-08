import React from "react";
import { GoVerified } from "react-icons/go";
export default function SmImage({ src, alt, isNFTImage, className, classNameImg}) {
  return (
    <div className={`relative h-[45px] w-[45px] ${className}`}>
      <img
        className={`rounded-full h-[40px] w-[40px] object-cover ${classNameImg}`}
        src={src ? src : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1659534767~exp=1659535367~hmac=524171c5543d6fa034d5d02fe05ae668748d4580eac8c77bdf21a0f439d9d276"}
        alt={alt}
      />
      {isNFTImage && (
        <GoVerified className="text-base bg-white rounded-full text-blue-500 absolute top-0 right-0" />
      )}
    </div>
  );
}
