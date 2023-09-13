import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";
import { PATH_PROGRAMMING } from "@/constants/paths";

export default function ProgrammingBlock() {
  return (
    <ContentSection>
      <Container>
        <SectionHeading>Programación</SectionHeading>
        <p
          className="text-center max-w-xl mx-auto text-lg mb-16"
          // @ts-ignore
          style={{ textWrap: "balance" }}
        >
          En El Pez Gato tenemos una programación variada, con conciertos de
          música en directo, monólogos, magia, etc.
        </p>

        <div className="mb-2 text-center">
          <ButtonLink href={PATH_PROGRAMMING} className="text-xl">
            Ver toda la programación
          </ButtonLink>
        </div>
      </Container>
    </ContentSection>
  );
}
