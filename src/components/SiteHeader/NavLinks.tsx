import {
  PATH_CONTACT,
  PATH_HOME,
  PATH_MENU,
  PATH_PROGRAMMING,
  PATH_RESERVATIONS,
} from "@/constants/paths";
import InstagramColoredIcon from "../icons/InstagramColoredLogo";
import { INSTAGRAM_URL } from "@/constants/urls";
import Link from "next/link";

export default function NavLinks({
  onClickLink,
  showHomeLink = true,
}: {
  onClickLink?: () => void;
  showHomeLink?: boolean;
}) {
  return (
    <>
      {showHomeLink && (
        <Link
          className="no-underline hover:underline"
          href={PATH_HOME}
          onClick={onClickLink}
        >
          Inicio
        </Link>
      )}
      <Link
        className="no-underline hover:underline"
        href={PATH_PROGRAMMING}
        onClick={onClickLink}
      >
        Programación
      </Link>
      <Link
        className="no-underline hover:underline"
        href={PATH_MENU}
        onClick={onClickLink}
      >
        Carta
      </Link>
      <Link
        className="no-underline hover:underline"
        href={PATH_RESERVATIONS}
        onClick={onClickLink}
      >
        Reservas
      </Link>
      <Link
        className="no-underline hover:underline"
        href={PATH_CONTACT}
        onClick={onClickLink}
      >
        Contacto
      </Link>

      <a
        className="no-underline inline-flex justify-center align-center"
        href={INSTAGRAM_URL}
        onClick={onClickLink}
      >
        <InstagramColoredIcon height={30} width={30} />
      </a>
    </>
  );
}
