"use client";

import { AboutMe } from "@/components/aboutme";
import { FadeIn } from "@/components/fade";
import { Icon } from "@/components/icon";
import { Links } from "@/components/links";
import { Works } from "@/components/works";
import Foot from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-800 text-white ">
        <FadeIn>
          <Icon />
        </FadeIn>
        <FadeIn>
          <AboutMe />
          <div className='flex items-center justify-center text-3xl font-mono font-bold my-6'>My Links</div>
          <Links />
          <Works /> 
        </FadeIn>
      </div>
      <Foot />
    </>
  );
}
