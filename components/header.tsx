"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo ou Titre */}
        <div className="text-lg font-bold">Mon Portfolio</div>

        {/* Bouton hamburger en mobile */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-4 text-sm font-medium">
          <Link href="/" passHref legacyBehavior>
            <Button>Accueil</Button>
          </Link>
          <Link href="/projets" passHref legacyBehavior>
            <Button>Projets</Button>
          </Link>
          <Link href="/competences" passHref legacyBehavior>
            <Button>Compétences</Button>
          </Link>
          <Link href="/service" passHref legacyBehavior>
            <Button>Service</Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button>Contact</Button>
          </Link>
        </nav>

        {/* Me contacter bouton desktop */}
        <div className="hidden lg:block ml-auto">
          <Link href="/contact" passHref legacyBehavior>
            <Button>Me contacter</Button>
          </Link>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-2 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Accueil</Button>
            </Link>
            <Link href="/projets" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Projets</Button>
            </Link>
            <Link href="/competences" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Compétences</Button>
            </Link>
            <Link href="/service" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Service</Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Contact</Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-indigo-600 text-white">Me contacter</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
