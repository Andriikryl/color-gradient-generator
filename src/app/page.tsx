import Angel from "@/component/angel/Angel";
import CompereHl from "@/component/compereHl/CompereHl";
import Create from "@/component/create/Create";
import Hero from "@/component/hero/Hero";
import Hsl from "@/component/hsl/Hsl";
import Lch from "@/component/lch/Lch";
import Path from "@/component/path/Path";
import Rgb from "@/component/rgb/Rgb";

export default function Home() {
  return (
    <>
      <Hero />
      <Create />
      <Path />
      <Angel />
      <Rgb />
      <Hsl />
      <Lch />
      <CompereHl />
    </>
  );
}
