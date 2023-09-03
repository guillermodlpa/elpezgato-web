import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
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
  );
}
