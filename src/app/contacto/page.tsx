import { PATH_CONTACT } from "@/constants/paths";
import Contact from "@/features/Contact";
import getBaseUrl from "@/utils/getBaseUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  alternates: { canonical: `${getBaseUrl()}${PATH_CONTACT}` },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
