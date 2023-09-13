import LocationSharpIcon from "@/components/icons/LocationSharpIcon";
import Container from "@/components/ui/Container";
import {
  ADDRESS_CITY,
  ADDRESS_NUMBER,
  ADDRESS_STREET,
} from "@/constants/address";
import GOOGLE_MAPS_URL from "@/constants/googleMapsUrl";
import NextImage from "next/image";

export default function HeroBlock() {
  return (
    <section className="bg-gray-900 w-full relative min-h-[80svh] flex justify-center items-end">
      <NextImage
        alt="Interior del bar El Pez Gato"
        src="/bar_el_pez_gato_mural.jpg"
        fill
        priority
        className="object-cover"
      />

      <Container
        className="z-10 relative bg-backgroundDefault mb-4 pb-8 pt-6"
        maxWidth="max-w-sm"
      >
        <div className="text-center">
          <NextImage
            src="/logo_bar_el_pez_gato.jpg"
            alt="Logo El Pez Gato"
            width={150}
            height={150}
            className="mb-6 mx-auto"
            priority
          />
          <h1 className="text-4xl md:text-5xl mb-2">El Pez Gato</h1>
          <h2 className="text-xl md:text-2xl mb-6 font-light">Bar Musical</h2>
          <p className="text-center">
            <a href={GOOGLE_MAPS_URL} rel="noopener">
              {`${ADDRESS_STREET} ${ADDRESS_NUMBER}, ${ADDRESS_CITY}`}
              <LocationSharpIcon
                className="w-5 h-5 ml-1 mb-1 fill-white inline-block"
                title="Pin de ubicación"
              />
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
