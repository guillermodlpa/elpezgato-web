import { PATH_PROGRAMMING } from "@/constants/paths";
import Programming from "@/features/Programming";
import getBaseUrl from "@/utils/getBaseUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programación",
  alternates: { canonical: `${getBaseUrl()}${PATH_PROGRAMMING}` },
};

export default function ProgrammingPage() {
  return (
    <>
      <Programming />
    </>
  );
}
