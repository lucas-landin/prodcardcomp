"use client";
import Image from "next/image";
import { prodImgDesk, prodImgMob } from "../assets";
const ImageSwitcher = () => {
  return (
    <>
      <div className="bigScreenImg hidden md:block ">
        {/* Renderiza essa imagem em telas maiores */}
        <Image
          src={prodImgDesk}
          alt="Imagem Desktop"
          width={500}
          height={500}
          layout="responsive"
          className="rounded-tl-2xl rounded-bl-2xl"
        />
      </div>

      <div className=" smallScreenImg md:hidden sm:block">
        {/* Renderiza essa imagem em telas menores */}
        <Image
          src={prodImgMob}
          alt="Imagem Mobile"
          width={200}
          height={200}
          layout="responsive"
          className=" rounded-tl-xl rounded-tr-xl"
        />
      </div>
    </>
  );
};
export default ImageSwitcher;
