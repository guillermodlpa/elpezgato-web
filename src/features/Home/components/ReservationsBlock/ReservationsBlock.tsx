import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";
import { PATH_RESERVATIONS } from "@/constants/paths";
import Image from "next/image";

export default function ReservationsBlock() {
  return (
    <ContentSection>
      <Container maxWidth="max-w-3xl">
        <h2 className="text-5xl text-center mb-6">Reservas</h2>
        <p
          className="text-center max-w-2xl mx-auto text-lg mb-16"
          // @ts-ignore
          style={{ textWrap: "balance" }}
        >
          Ocasionalmente abrimos para eventos privados. Si quieres reservar El
          Pez Gato para un evento privado, ponte en contacto con nosotros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex justify-center items-center">
            <Image
              src={"/concierto_bar_el_pez_gato.png"}
              alt="Concierto acústico en El Pez Gato"
              width={300}
              height={300}
              className="object-cover object-top"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <p className="text-lg mb-6">
                Se puede reservar tanto el bar completo como la zona superior
                con el escenario. Si buscas un garito con buena música, un
                servicio de calidad y un ambiente acogedor, El Pez Gato es tu
                sitio.
              </p>
              <div className="mb-2 text-center">
                <ButtonLink href={PATH_RESERVATIONS} className="text-xl">
                  Reservar
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ContentSection>
  );
}
