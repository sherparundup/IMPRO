"use client";

import React from "react";
import { bold_poppins } from "@/lib/fonts"; // ✅ import your font
import { SparklesPreview } from "./ui/SparklingPreview";
import { HeroScrollDemo } from "./ui/containerScroll/HeroScroll";
import { FeaturesSectionDemo } from "./ui/FeatureBentoGrid/FeatureBentoGrid";

const Hero = () => {
  return (
    <>
      <div
        className={`${bold_poppins.className}  flex-col min-w-screen min-h-screen bg-white text-black flex items-center justify-center text-9xl md:text-6xl text-center`}
      >
        <SparklesPreview />
        <HeroScrollDemo/>
        <FeaturesSectionDemo/>
      </div>
    </>
  );
};

export default Hero;
