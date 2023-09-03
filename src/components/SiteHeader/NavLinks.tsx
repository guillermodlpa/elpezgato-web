import {
  PATH_CONTACT,
  PATH_PROGRAMMING,
  PATH_RESERVATIONS,
} from "@/constants/paths";
import InstagramColoredIcon from "../icons/InstagramColoredLogo";
import { INSTAGRAM_URL } from "@/constants/urls";
import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link className="no-underline" href={PATH_PROGRAMMING}>
        Programación
      </Link>
      <Link className="no-underline" href={PATH_RESERVATIONS}>
        Reservas
      </Link>
      <Link className="no-underline" href={PATH_CONTACT}>
        Contacto
      </Link>
      <a className="no-underline" href={INSTAGRAM_URL}>
        <InstagramColoredIcon height={50} width={50} />
      </a>
    </>
  );
}
