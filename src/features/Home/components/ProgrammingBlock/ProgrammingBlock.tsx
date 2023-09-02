import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";

export default function ProgrammingBlock() {
  return (
    <ContentSection>
      <Container>
        <h2 className="text-5xl text-center mb-6">Programación</h2>
        <p
          className="text-center max-w-xl mx-auto"
          // @ts-ignore
          style={{ textWrap: "balance" }}
        >
          En El Pez Gato tenemos una programación variada, con conciertos de
          música en directo, monólogos, magia, etc.
        </p>
      </Container>
    </ContentSection>
  );
}
