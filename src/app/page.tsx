import Image from "next/image";
'use client' //precisa disso ao usar o onClick
import { Bell, X, Check, Rocket } from "lucide-react";
import { Notification } from "./components/Notification";
import { Widget } from "./components/Widget";
import WidgetDocumentation from "./components/WidgetDocumentation";
import NavbarRoot from "./components/Navbar/NavbarRoot";
import NavbarIconText from "./components/Navbar/NavbarIconText";
import { NavbarActionsLinks } from "./components/Navbar/NavbarActionsLinks";
import { NavbarActionLink } from "./components/Navbar/NavbarActionLink";
import NavbarIcon from "./components/Navbar/NavbarIcon";

export default function Home() {
  return (
    <div className=" bg-slate-900 w-full h-screen">
      <header className="flex bg-black h-14 justify-between p-4">
        <div>
          <h3 className="text-white font-bold">NEXT JS</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="text-white font-bold">Home</h3>
          <h3 className="text-white font-bold">Services</h3>
          <h3 className="text-white font-bold">About</h3>
          <h3 className="text-white font-bold">Contact</h3>
        </div>
        <div>
          <h3 className="text-white font-bold">NEXT JS</h3>
        </div>
      </header>

      <NavbarRoot>
        <NavbarIcon icon={Check}/>
        <NavbarActionsLinks>
          <NavbarActionLink text="Home"/>
          <NavbarActionLink text="Services"/>
          <NavbarActionLink text="About"/>
          <NavbarActionLink text="Contact"/>
        </NavbarActionsLinks>
        <NavbarIconText text="NEXT JS"/>
      </NavbarRoot>
      
      {/* <div className="bg-black w-80 rounded-ee">
          <Widget/>
      </div> */}
    </div>

  );
}
