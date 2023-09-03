import EmailIcon from "@/components/icons/EmailIcon";
import InstagramColoredIcon from "@/components/icons/InstagramColoredLogo";
import Container from "@/components/ui/Container";
import CONTACT_EMAIL from "@/constants/contactEmail";
import { INSTAGRAM_URL } from "@/constants/urls";

export default function Contact() {
  return (
    <Container className="my-12">
      <h1 className="text-5xl text-center mb-6">Contacto</h1>

      <p
        className="text-center max-w-xl mx-auto text-lg mb-16"
        // @ts-ignore
        style={{ textWrap: "balance" }}
      >
        Si quieres ponerte en contacto con nosotros, puedes hacerlo a través de
        nuestro correo electrónico o por Instagram.
      </p>

      <p className="text-lg mb-8 max-w-2xl mx-auto text-center">
        <EmailIcon
          height={"1.5em"}
          width={"1.5em"}
          className="inline-block mr-2"
        />
        {CONTACT_EMAIL}
      </p>

      <p className="text-lg  max-w-2xl mx-auto text-center">
        <a href={INSTAGRAM_URL}>
          <InstagramColoredIcon
            height={"2em"}
            width={"2em"}
            className="inline-block"
          />
          {INSTAGRAM_URL}
        </a>
      </p>
    </Container>
  );
}
