type Product = {
  title: string;
  priceText: string;
};

type Section = {
  heading: string;
  products: Product[];
};

const MENU: Section[] = [
  {
    heading: "Dobles de cerveza",
    products: [
      { title: "Doble Mahou", priceText: "3,50 €" },
      { title: "Doble Mahou IPA", priceText: "4,00 €" },
      { title: "Doble La Salve Munich (Roja)", priceText: "4,50 €" },
      { title: "Doble Franziskaner", priceText: "4,50 €" },
      { title: "Doble Founders All Day IPA", priceText: "5,00 €" },
      { title: "Doble Founders Dirty Bastard", priceText: "5,00 €" },
      { title: "Doble Founders Negra Porter", priceText: "5,00 €" },
    ],
  },
  {
    heading: "Pintas de cerveza",
    products: [
      { title: "Doble Mahou", priceText: "4,50 €" },
      { title: "Doble Mahou IPA", priceText: "5,50 €" },
      { title: "Doble La Salve Munich (Roja)", priceText: "5,50 €" },
      { title: "Doble Franziskaner", priceText: "5,50 €" },
      { title: "Doble Founders All Day IPA", priceText: "7,00 €" },
      { title: "Doble Founders Dirty Bastard", priceText: "7,00 €" },
      { title: "Doble Founders Negra Porter", priceText: "7,00 €" },
    ],
  },
  {
    heading: "Cerveza de botella",
    products: [
      { title: "Tercio de Mahou", priceText: "4,00 €" },
      { title: "Tercio Alhambra 1925", priceText: "4,00 €" },
      { title: "Leffe", priceText: "4,50 €" },
      { title: "Leffe Tripel", priceText: "4,50 €" },
      { title: "Mahou Barrica Bourbon", priceText: "5,00 €" },
      { title: "1906 Estrella Galicia", priceText: "4,00 €" },
      { title: "Corona", priceText: "4,00 €" },
      { title: "Mahou Sin Gluten", priceText: "4,00 €" },
      { title: "Mahou Sin", priceText: "4,00 €" },
      { title: "Mahou 0.0 Tostada", priceText: "4,00 €" },
      { title: "Corona 0.0", priceText: "4,00 €" },
    ],
  },
  {
    heading: "Vino y Sangría",
    products: [
      { title: "Tinto de Verano", priceText: "3,00 €" },
      { title: "Tinto de Verano sin alcohol", priceText: "3,00 €" },
      { title: "Vaso de Sangría", priceText: "3,00 €" },
      { title: "Jarra Gigante de Sangría (2 litros)", priceText: "17,00 €" },
      { title: "Copa de Vino", priceText: "3,50 €" },
    ],
  },
  {
    heading: "Copas y Gin Tonics",
    products: [
      { title: "Copa Nacional", priceText: "7,50 €" },
      { title: "Copa Importación", priceText: "8,00 €" },
      { title: "Copa Premium", priceText: "12,00 €" },
      { title: "Ginebra Nordés", priceText: "9,50" },
    ],
  },
  {
    heading: "Chupitos",
    products: [
      { title: "Chupito", priceText: "2,00/3,00 €" },
      { title: "Mezcal", priceText: "3,50 € chupito 5,00 € vaso" },
      { title: "Tequila 1800", priceText: "3,00 €" },
    ],
  },
];

export default MENU;
