"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/SparkilingBg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bold_poppins } from "@/lib/fonts";
import Link from "next/link";

export function SparklesPreview() {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Hero Text */}
      <motion.h1
        className={cn(
          bold_poppins.className,
          "md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20"
        )}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Where Passion Meets Purpose <br /> and Football Meets Future
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className={cn(
          "text-white mt-6 text-lg md:text-2xl text-center relative z-20"
        )}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        Join the academy and elevate your game
      </motion.p>

      {/* CTA Button */}
      <Link href="/details">
        <motion.button
          className="mt-8 px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-blend-color transition-colors relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          Get Details
        </motion.button>
      </Link>
    </div>
  );
}
