import LocationSharpIcon from "@/components/icons/LocationSharpIcon";
import Container from "@/components/ui/Container";
import {
  ADDRESS_CITY,
  ADDRESS_NUMBER,
  ADDRESS_STREET,
} from "@/constants/address";
import NextImage from "next/image";

export default function HeroBlock() {
  return (
    <section className="bg-gray-900 w-full relative pt-[40vh]">
      <NextImage
        alt="Interior del bar El Pez Gato"
        src="/bar_el_pez_gato_mural.jpg"
        fill
        style={{ objectFit: "cover" }}
      />

      <Container
        className="z-10 relative bg-black mb-4 pb-8 pt-6"
        maxWidth="max-w-xs"
      >
        <div className="text-center">
          <NextImage
            src="/logo_bar_el_pez_gato.jpg"
            alt="Logo El Pez Gato"
            width={150}
            height={150}
            className="mb-6 mx-auto"
          />
          <h1 className="text-4xl  mb-2 font-bold">El Pez Gato</h1>
          <h2 className="text-3xl mb-6">Bar Musical</h2>
          <p className="flex align-center justify-center text-center">
            {`${ADDRESS_STREET} ${ADDRESS_NUMBER}, ${ADDRESS_CITY}`}
            <LocationSharpIcon
              className="w-5 h-5 ml-1 fill-white inline-block"
              title="Pin de ubicación"
            />
          </p>
        </div>
      </Container>
    </section>
  );
}
