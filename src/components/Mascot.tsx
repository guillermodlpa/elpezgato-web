"use client";

import { Transition } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const INITIAL_DELAY = 1000;
const TIME_SHOWING = 5000;
const DELAY_BETWEEN_SHOWS = 25000;

export default function Mascot() {
  const [visible, setVisible] = useState(false);

  // show it every 5 seconds, then hide it
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showAndHideLater = () => {
      setVisible(true);

      timeout = setTimeout(() => {
        setVisible(false);

        timeout = setTimeout(() => {
          showAndHideLater();
        }, DELAY_BETWEEN_SHOWS);
      }, TIME_SHOWING);
    };

    timeout = setTimeout(() => showAndHideLater(), INITIAL_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/pez_gato_mascota.png" as="image" />
      </Head>

      <Transition
        appear
        show={visible}
        enter="duration-500"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className={`fixed bottom-0 right-0 z-drawer transition-transform`}
        role="dialog"
      >
        <Image
          src="/pez_gato_mascota.png"
          alt="Mascota"
          className="w-[75px] md:w-[100px]"
          width={100}
          height={100}
          onClick={() => setVisible(false)}
          onMouseEnter={() => setVisible(false)}
        />
      </Transition>
    </>
  );
}
