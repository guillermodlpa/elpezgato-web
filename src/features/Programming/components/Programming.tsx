import PageHeading from "@/components/PageHeading";
import Container from "@/components/ui/Container";

export default function Programming() {
  return (
    <Container className="my-12">
      <PageHeading>Programación</PageHeading>

      <p
        className="text-center max-w-xl mx-auto text-lg mb-16"
        // @ts-ignore
        style={{ textWrap: "balance" }}
      >
        En El Pez Gato tenemos una programación variada, con conciertos de
        música en directo, monólogos, magia, etc.
      </p>
    </Container>
  );
}
