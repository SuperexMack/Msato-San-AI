"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useRef } from "react";
import HomePage from "./HomePage";
import Link from "next/link";

export function HomeSection() {
  // Scroll Logic
  const VideoFeature = useRef(null);
  const About = useRef(null);
  const Contact = useRef(null);

  const DivClick = (e: any) => {
    e.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      name: "Features",
      link: () => DivClick(VideoFeature),
    },
    {
      name: "About",
      link: () => DivClick(About),
    },
    {
      name: "Contact",
      link: () => DivClick(Contact),
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="https://x.com/mohitsatitwt" variant="secondary">
              Follow Mack😁
            </NavbarButton>
            <NavbarButton href="/extensionPage" variant="primary">
              Get Extension
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                onClick={() => {
                  item.link();
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-black"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="https://x.com/mohitsatitwt"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Follow Mack😁
              </NavbarButton>
              <NavbarButton
                href="/extensionPage"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Extension
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <HomePage
        VideoFeature={VideoFeature}
        About={About}
        Contact={Contact}
      ></HomePage>

      {/* Navbar */}
    </div>
  );
}
