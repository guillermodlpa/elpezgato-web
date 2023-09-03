import { PATH_HOME } from "@/constants/paths";
import Container from "../ui/Container";
import NavLinks from "./NavLinks";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

export default function SiteHeader() {
  return (
    <header className="border-divider border-b">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href={PATH_HOME} className="no-underline hover:opacity-100">
            <HeaderLogo />
          </Link>

          <nav className="flex flex-wrap gap-6 items-center">
            <NavLinks />
          </nav>
        </div>
      </Container>
    </header>
  );
}
