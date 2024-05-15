import Image from "next/image";
'use client' //precisa disso ao usar o onClick
import { Bell, X, Check } from "lucide-react";
import { Notification } from "./components/Notification";
import { Widget } from "./components/Widget";
import WidgetDocumentation from "./components/WidgetDocumentation";

export default function Home() {
  return (
    <main>
      <div className="bg-black w-80 rounded-ee">
        
        <Widget/>
        
      </div>
    </main>
  );
}
