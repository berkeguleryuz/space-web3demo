import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import MiddleTwo from "@/components/MiddleTwo";
import Project from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Middle />
        <MiddleTwo />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
