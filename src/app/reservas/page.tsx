import { PATH_RESERVATIONS } from "@/constants/paths";
import Reservations from "@/features/Reservations";
import getBaseUrl from "@/utils/getBaseUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservas",
  alternates: { canonical: `${getBaseUrl()}${PATH_RESERVATIONS}` },
};

export default function ReservationsPage() {
  return (
    <>
      <Reservations />
    </>
  );
}
