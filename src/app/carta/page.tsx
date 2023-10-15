import { PATH_MENU } from "@/constants/paths";
import Menu from "@/features/Menu";
import getBaseUrl from "@/utils/getBaseUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carta",
  alternates: { canonical: `${getBaseUrl()}${PATH_MENU}` },
};

export default function MenuPage() {
  return (
    <>
      <Menu />
    </>
  );
}
