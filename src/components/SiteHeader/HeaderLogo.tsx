import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src="/logo_bar_el_pez_gato.jpg"
          alt="Logo El Pez Gato"
          className="w-[50px] sm:w-[75px] md:w-[100px]"
          width={100}
          height={100}
        />
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl">El Pez Gato</h1>
        <h2 className=" text-md sm:text-lg font-light">Bar Musical</h2>
      </div>
    </div>
  );
}
