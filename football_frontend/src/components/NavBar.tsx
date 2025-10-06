"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown, Archive, BookText, Menu, X } from "lucide-react";
import { FaCode } from "react-icons/fa6";
import clsx from "clsx";
import { bold_poppins, normal_poppins } from "@/lib/fonts";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSyncGoogleUser } from "@/hooks/auth";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { mutateAsync: syncUser } = useSyncGoogleUser();

  // Sync Google user to backend automatically after login
  useEffect(() => {
    if (session?.user) {
      syncUser({
        name: session.user.name!,
        email: session.user.email!,
        image: session.user.image!,
      }).then(() => console.log("Google user synced to backend"));
    }
  }, [session, syncUser]);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
  ];

  const moreLinks = [
    { name: "Prices", href: "/prices", icon: <FaCode size={16} /> },
    { name: "Policy", href: "/policy", icon: <Archive size={16} /> },
    { name: "Blogs", href: "/blogs", icon: <BookText size={16} /> },
  ];

  return (
    <nav
      className={clsx(
        normal_poppins.className,
        "bg-white w-full px-6 md:px-10 py-4 shadow-sm top-0 z-50"
      )}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex gap-x-16">
          <div className={clsx(bold_poppins.className, "text-2xl font-bold")}>
            MyLogo
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-x-8 text-black text-lg">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* More Dropdown */}
            <li>
              <Popover.Root>
                <Popover.Trigger className="flex gap-1 items-center hover:text-gray-500 transition-colors">
                  More
                  <ChevronDown size={16} />
                </Popover.Trigger>

                <Popover.Portal>
                  <Popover.Content
                    align="start"
                    sideOffset={8}
                    className="bg-white w-48 flex flex-col gap-2 text-black rounded-lg border shadow-lg p-3"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-2 hover:font-semibold"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {session ? (
            <>
              <span className="text-black font-medium">
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t z-40 flex flex-col gap-2 p-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* More Links */}
          <div className="flex flex-col gap-2 mt-2 border-t pt-2">
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 hover:font-semibold"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex gap-4 mt-3">
            {session ? (
              <>
                <span className="text-black font-medium">
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
