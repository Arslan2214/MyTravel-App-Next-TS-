import { FEATURES } from "@/constants";
import Image from "next/image";
import { title } from "process";
import React from "react";

const Features = () => {
  return (
    <section className="mt-8flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full lg:flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px] w-[40%]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[50%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[0] top-[-28px] w-10 lg:w-[50px]"
            />
          </div>
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
        </div>
        <ul className="pt-10 mt-0 grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:mt-36 lg:gap-14 ">
          {FEATURES.map((feature, i) => (
            <FeatureItem
              key={i}
              icon={feature.icon}
              discription={feature.description}
              title={feature.title}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;

interface FeatureItemProps {
  icon: string;
  discription: string;
  title: string;
}

const FeatureItem = ({ icon, discription, title }: FeatureItemProps) => {
  return (
    <li className="px-8 py-5 flex w-full rounded-3xl flex-1 flex-col items-start backdrop:blur-lg shadow-[0_0_4px_0_#ccc] hover:-translate-y-1 hover:shadow-[0_2px_8px_0_#ccc] transition-all duration-300 backdrop-blur-sm">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="py-2 regular-16 mt-5 bg-white/80 text-gray-50 lg:mt-[30px] lg:bg-none text-justify">
        {discription}
      </p>
    </li>
  );
};
