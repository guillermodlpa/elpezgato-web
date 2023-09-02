import Container from "../ui/Container";
import NextImage from "next/image";

export default function SiteFooter() {
  return (
    <footer className="">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="mr-4">
              <NextImage
                src="/logo_bar_el_pez_gato.jpg"
                alt="Logo El Pez Gato"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">El Pez Gato</h1>
              <h2 className="text-lg ">Bar Musical</h2>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
