import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="flex flex-row">
        <HeroImage />
      </div>
    </section>
  );
};

const HeroImage = () => {
  return (
    <>
      <div>
        <div className="bg-gray-900 fixed w-[484] h-[560px] flex flex-row items-end">
          <Image src={""} alt="" className="bg-white w-[484px] h-[480px] translate-x-20"></Image>
        </div>
      </div>
    </>
  );
};

export { Hero };
