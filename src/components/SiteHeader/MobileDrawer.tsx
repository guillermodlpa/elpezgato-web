"use client";

import { useState } from "react";
import Drawer from "../ui/Drawer";
import DrawerBody from "../ui/DrawerBody";
import DrawerHeader from "../ui/DrawerHeader";
import IconButton from "../ui/IconButton";
import NavLinks from "./NavLinks";
import BarsIcon from "../icons/BarsIcon";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        icon={<BarsIcon />}
        aria-label="Abrir menú"
        variant="ghost"
        colorScheme="whiteAlpha"
        className="block md:hidden"
        size="lg"
        onClick={() => setIsOpen(true)}
      />

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerHeader
          onClose={() => setIsOpen(false)}
          heading={`El Pez Gato`}
        />
        <DrawerBody>
          <div className="my-4 flex flex-col gap-8 text-2xl text-center">
            <NavLinks onClickLink={() => setIsOpen(false)} />
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
}
