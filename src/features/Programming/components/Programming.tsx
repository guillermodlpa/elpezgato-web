import PageHeading from "@/components/PageHeading";
import InstagramColoredIcon from "@/components/icons/InstagramColoredLogo";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { INSTAGRAM_URL } from "@/constants/urls";

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

      <div className="mb-2 text-center">
        <ButtonLink href={INSTAGRAM_URL} className="text-xl">
          <InstagramColoredIcon width="1.5em" height="1.5em" className="mr-1" />
          Ver la programación en Instagram
        </ButtonLink>
      </div>
    </Container>
  );
}
