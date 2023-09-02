import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";

export default function ReservationsBlock() {
  return (
    <ContentSection>
      <Container>
        <h2 className="text-5xl text-center mb-6">Reservas</h2>
        <p
          className="text-center max-w-xl mx-auto"
          // @ts-ignore
          style={{ textWrap: "balance" }}
        >
          Ocasionalmente abrimos para eventos privados. Si quieres reservar El
          Pez Gato para un evento privado, ponte en contacto con nosotros.
        </p>
      </Container>
    </ContentSection>
  );
}
