import Container from "../ui/Container";
import NextImage from "next/image";

export default function SiteHeader() {
  return (
    <header className="border-divider border-b">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="mr-4">
              <NextImage
                src="/logo_bar_el_pez_gato.jpg"
                alt="Logo El Pez Gato"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">El Pez Gato</h1>
              <h2 className="text-xl ">Bar Musical</h2>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
