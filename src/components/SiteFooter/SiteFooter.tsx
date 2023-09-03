import GOOGLE_MAPS_URL from "@/constants/googleMapsUrl";
import Container from "../ui/Container";
import NextImage from "next/image";
import {
  ADDRESS_CITY,
  ADDRESS_NUMBER,
  ADDRESS_STREET,
} from "@/constants/address";
import LocationSharpIcon from "../icons/LocationSharpIcon";
import CONTACT_EMAIL from "@/constants/contactEmail";
import NavLinks from "../SiteHeader/NavLinks";

export default function SiteFooter() {
  return (
    <footer className="border-divider border-t">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div>
            <div className="flex items-center mb-4">
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
            <p className="text-center mb-2">
              <a href={GOOGLE_MAPS_URL} rel="noopener">
                {`${ADDRESS_STREET} ${ADDRESS_NUMBER}, ${ADDRESS_CITY}`}
                <LocationSharpIcon
                  className="w-5 h-5 ml-1 mb-1 fill-white inline-block"
                  title="Pin de ubicación"
                />
              </a>
            </p>
            <p>{CONTACT_EMAIL}</p>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <NavLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
}
