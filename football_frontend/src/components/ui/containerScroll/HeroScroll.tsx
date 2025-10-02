"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/containerScroll/containerscroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-black">
              In *acedemy ko nam <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                We Offer
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://thunderdungeon.com/wp-content/uploads/2025/03/christian-memes-10-2-25-2025-600x600.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
