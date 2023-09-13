import PageHeading from "@/components/PageHeading";
import Container from "@/components/ui/Container";
import { PATH_CONTACT } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";

export default function Reservations() {
  return (
    <Container className="my-12">
      <PageHeading>Reservas</PageHeading>

      <div className="flex justify-center mb-4">
        <Image
          src="/artifice.gif"
          alt="Fuego artificial"
          width={50}
          height={50}
        />
      </div>

      <p
        className="text-center max-w-xl mx-auto text-lg mb-8"
        // @ts-ignore
        style={{ textWrap: "balance" }}
      >
        Ocasionalmente abrimos para eventos privados. Si quieres reservar El Pez
        Gato para un evento privado,{" "}
        <Link href={PATH_CONTACT}>ponte en contacto con nosotros.</Link>
      </p>

      <Image
        src={"/concierto_bar_el_pez_gato.png"}
        alt="Concierto acústico en El Pez Gato"
        width={500}
        height={500}
        className="object-cover object-top mx-auto mb-8"
      />

      <p className="text-lg mb-6 max-w-2xl mx-auto text-center">
        Se puede reservar tanto el bar completo como la zona superior con el
        escenario. Si buscas un garito con buena música, un servicio de calidad
        y un ambiente acogedor, El Pez Gato es tu sitio.
      </p>
    </Container>
  );
}
