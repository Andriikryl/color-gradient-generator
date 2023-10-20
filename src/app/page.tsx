import Angel from "@/component/angel/Angel";
import CompereHl from "@/component/compereHl/CompereHl";
import Create from "@/component/create/Create";
import Hero from "@/component/hero/Hero";
import Hsl from "@/component/hsl/Hsl";
import Lch from "@/component/lch/Lch";
import Path from "@/component/path/Path";
import Resources from "@/component/resoursec/Resources";
import Rgb from "@/component/rgb/Rgb";

export default function Home() {
  return (
    <>
      <Hero />
      <Rgb />
      <Hsl />
      <Lch />
      <CompereHl />
      <Create />
      <Path />
      <Angel />
      <Resources />
    </>
  );
}
