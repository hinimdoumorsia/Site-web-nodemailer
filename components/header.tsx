import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <nav className="flex items-center space-x-4 text-sm font-medium ml-12">
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
        <div className="ml-auto">
          <Link href="/contact" passHref legacyBehavior>
            <Button>Me contacter</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
