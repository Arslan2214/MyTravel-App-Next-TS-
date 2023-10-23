import React from "react";

const Camp = () => {
  return (
    <section className="border-2 border-green-400 mt-16 sm:mt-40 md:mt-16 xl:mt-0 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-container flex h-[340px] w-full items-start justify-start gap-9 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite backgroundImage='bg-bg-img-1' />
      </div>
    </section>
  );
};

export default Camp;

interface CampSiteProps {
  backgroundImage: string;
}

const CampSite = ({ backgroundImage }:CampSiteProps) => {
  return <div>CampSite</div>;
};
