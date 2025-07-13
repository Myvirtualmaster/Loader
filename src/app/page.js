'use client'

import FloatingIcons from "@/components/FloatingIcons";
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  return (
    <div className="flex h-screen w-screen ">
      <FloatingIcons />
      <div className="flex w-full  px-4 h-full justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl text-white ">
          <TypeAnimation
          sequence={[
            'Welcome to My Virtual Master',
            1000,
            'Launching Soon 🚀',
            1000,
            '',
            500,

          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl font-bold"
          />
        </div>
      </div>
    </div>
  );
}
