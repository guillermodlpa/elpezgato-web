import LocationSharpIcon from "@/components/icons/LocationSharpIcon";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";
import {
  ADDRESS_CITY,
  ADDRESS_NUMBER,
  ADDRESS_STREET,
} from "@/constants/address";
import GOOGLE_MAPS_URL from "@/constants/googleMapsUrl";
import Image from "next/image";

export default function AboutBlock() {
  return (
    <ContentSection>
      <Container>
        {/* 2 columns on desktop, thinner first for image and then text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="flex justify-center items-center">
            <Image
              src={"/bar_el_pez_gato_FLYER_OFERTA_JUEVES_REGRESOALFUTURO.png"}
              alt="Flyer de El Pez Gato"
              width={300}
              height={300}
              className="object-cover object-top"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <h2 className="text-2xl sm:text-3xl text-center mb-4">
                Sobre nosotros
              </h2>
              <p className="text-lg mb-2">
                El Pez Gato es un bar musical situado en el centro de Madrid.
                Ofrecemos una amplia variedad de bebidas y cócteles, así como
                actuaciones en directo de música en vivo.
              </p>
              <p className="text-lg mb-2">
                La historia de El Pez Gato se remonta a 2020, en plena pandemia
                cuando el bar abrió sus puertas por primera vez. Desde entonces,
                ha sido un lugar de encuentro para los amantes de la música y la
                noche madrileña.
              </p>
            </div>
          </div>
        </div>

        {/* 2 columns on desktop, first one with description of the neightbourhood and second with an image of street map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="">
              <h2 className="text-2xl sm:text-3xl text-center mb-4">
                Nuestro barrio
              </h2>
              <p className="text-lg mb-8">
                El Pez Gato está situado en el barrio de Malasaña, en el centro
                de Madrid. Es un barrio con mucha vida, lleno de bares y
                restaurantes, y muy cerca de la Gran Vía.
              </p>
              <p className="text-lg text-center">
                <a href={GOOGLE_MAPS_URL} rel={"noopener"}>
                  {`${ADDRESS_STREET} ${ADDRESS_NUMBER}, ${ADDRESS_CITY}`}
                  <LocationSharpIcon
                    className="w-5 h-5 ml-1 fill-white inline-block mb-1"
                    title="Pin de ubicación"
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a href={GOOGLE_MAPS_URL} rel={"noopener"}>
              <Image
                src={"/bar_el_pez_gato_mapa.png"}
                alt="Mapa de Madrid con pin en El Pez Gato"
                width={300}
                height={300}
                className="object-cover object-top"
              />
            </a>
          </div>
        </div>
      </Container>
    </ContentSection>
  );
}
