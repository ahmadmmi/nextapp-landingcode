import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
import Portofolio from "@/components/Portofolio";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // ></main>
    <main>
      <Header />
      <Homepage />
      <Service />
      <Portofolio />
      <Contact />
      <Footer />
    </main>
  );
}
