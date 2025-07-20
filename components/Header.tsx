"use client";

import Link from "next/link";
import Image from "next/image";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

import ChangeLang from "@/components/ChangeLang";

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <ChangeLang />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
