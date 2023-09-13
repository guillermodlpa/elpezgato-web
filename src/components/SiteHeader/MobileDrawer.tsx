"use client";

import { useState } from "react";
import LinesClipboardIcon from "../icons/LinesClipboardIcon";
import Drawer from "../ui/Drawer";
import DrawerBody from "../ui/DrawerBody";
import DrawerFooter from "../ui/DrawerFooter";
import DrawerHeader from "../ui/DrawerHeader";
import IconButton from "../ui/IconButton";
import HeaderLogo from "./HeaderLogo";
import NavLinks from "./NavLinks";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        icon={<LinesClipboardIcon />}
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
