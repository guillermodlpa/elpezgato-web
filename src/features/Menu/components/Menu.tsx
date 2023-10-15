import PageHeading from "@/components/PageHeading";
import EmailIcon from "@/components/icons/EmailIcon";
import InstagramColoredIcon from "@/components/icons/InstagramColoredLogo";
import Container from "@/components/ui/Container";
import CONTACT_EMAIL from "@/constants/contactEmail";
import { INSTAGRAM_URL } from "@/constants/urls";
import MENU from "../constants/menu";

const OUTLINE_COLOR = "rgb(221,5,39)";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl mt-8 mb-2"
      style={{
        textShadow: `1px 1px ${OUTLINE_COLOR}, -1px 1px ${OUTLINE_COLOR}, 1px -1px ${OUTLINE_COLOR}, -1px -1px ${OUTLINE_COLOR}`,
      }}
    >
      {children}
    </h2>
  );
}

function ProductList({ children }: { children: React.ReactNode }) {
  return <ul>{children}</ul>;
}

function Product({
  title,
  priceText,
}: {
  title: React.ReactNode;
  priceText: React.ReactNode;
}) {
  return (
    <li className="mb-2 flex">
      <p className="flex-grow">{title}</p>
      <p>{priceText}</p>
    </li>
  );
}

export default function Menu() {
  return (
    <div
      className="py-12"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(30,0,60) 0%, rgb(10,0,20) 50%, rgba(34,0,68) 100%)",
      }}
    >
      <Container maxWidth="max-w-sm">
        <PageHeading>Carta</PageHeading>

        <div className="pt-8">
          {MENU.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <SectionHeading>{section.heading}</SectionHeading>

              <ProductList>
                {section.products.map((product, productIndex) => (
                  <Product
                    key={productIndex}
                    title={product.title}
                    priceText={product.priceText}
                  />
                ))}
              </ProductList>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
