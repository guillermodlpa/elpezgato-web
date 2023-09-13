import { PATH_HOME } from "@/constants/paths";
import Container from "../ui/Container";
import NavLinks from "./NavLinks";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import MobileDrawer from "./MobileDrawer";

export default function SiteHeader() {
  return (
    <header className="border-divider border-b">
      <Container maxWidth="max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <Link href={PATH_HOME} className="no-underline hover:opacity-100">
            <HeaderLogo />
          </Link>

          <nav className="flex-wrap gap-6 items-center hidden md:flex">
            <NavLinks showHomeLink={false} />
          </nav>

          <MobileDrawer />
        </div>
      </Container>
    </header>
  );
}
