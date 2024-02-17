import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar shouldHideOnScroll>
    <Link href="/" className="text-decoration-none" aria-label="Acme Logo">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">JOB-SLAYER</p>
      </NavbarBrand>
    </Link>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>

          <Link color="foreground" href="/">
            Off-Campus
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Internships
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Remote
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
