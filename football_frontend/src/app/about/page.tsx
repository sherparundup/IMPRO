"use client";

import React, { useState, useEffect } from "react";
import { Shield, Target, Trophy, Users } from "lucide-react";

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coaches = [
    { name: "Alex Morgan", role: "Head Coach", image: "⚽" },
    { name: "Diego Silva", role: "Technical Director", image: "⚽" },
    { name: "Nadia Rahman", role: "Fitness Coach", image: "⚽" },
    { name: "Liam Carter", role: "Youth Development Head", image: "⚽" },
  ];

  const values = [
    {
      icon: Target,
      title: "Discipline",
      description:
        "We believe discipline is the foundation of every great athlete — both on and off the pitch.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "Our players are trained to compete at the highest level, striving for excellence in every match.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We play with heart, fairness, and respect — upholding the true spirit of the game.",
    },
    {
      icon: Users,
      title: "Team Spirit",
      description:
        "Unity makes strength. We build players who understand teamwork, trust, and collective success.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <div className="overflow-hidden mb-6">
            <h1
              className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 animate-slideUp"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Our Academy
            </h1>
          </div>
          <div className="w-24 h-px bg-black mx-auto mb-8" />
          <p
            className="text-xl md:text-2xl font-light tracking-wide leading-relaxed max-w-3xl mx-auto animate-fadeIn"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            Building the next generation of football champions through
            innovation, discipline, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section py-32 px-8 border-t border-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm tracking-widest mb-4 opacity-60">
              01 / MISSION
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Shaping Future Champions
            </h2>
            <p
              className="text-lg leading-relaxed opacity-80 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our mission is to develop young talents into complete footballers
              — technically skilled, mentally strong, and tactically intelligent.
              Every session is crafted to inspire growth and build confidence.
            </p>
            <p
              className="text-lg leading-relaxed opacity-80"
              style={{ fontFamily: "Georgia, serif" }}
            >
              We train not just athletes, but leaders who embody sportsmanship
              and character beyond the pitch.
            </p>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-black transform rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section py-32 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-white opacity-20" />
              <div className="absolute w-32 h-32 rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-sm tracking-widest mb-4 opacity-60">
              02 / VISION
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Beyond the Game
            </h2>
            <p
              className="text-lg leading-relaxed opacity-80 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              We envision a future where football is more than sport — it’s a
              way to build discipline, teamwork, and lifelong values.
            </p>
            <p
              className="text-lg leading-relaxed opacity-80"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our academy stands as a hub of excellence, innovation, and
              community — developing players who inspire both on and off the
              field.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section py-32 px-8 border-t border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest mb-4 opacity-60">
              03 / VALUES
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-12 hover:bg-gray-50 transition-colors duration-300 group"
                >
                  <Icon
                    className="w-12 h-12 mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed opacity-70"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section py-32 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest mb-4 opacity-60">
              04 / COACHES
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Meet Our Coaches
            </h2>
            <p
              className="text-lg opacity-70 max-w-2xl mx-auto"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A dedicated team of professionals shaping athletes with
              world-class training, mentorship, and passion for the game.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {coach.image}
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  {coach.name}
                </h3>
                <p className="text-sm opacity-60 tracking-wide">{coach.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 px-8 border-t border-black">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-3xl md:text-4xl font-light leading-relaxed tracking-wide"
            style={{ fontFamily: "Georgia, serif" }}
          >
            We don’t just train players.<br />We build champions for life.
          </p>
          <div className="w-24 h-px bg-black mx-auto mt-12" />
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
