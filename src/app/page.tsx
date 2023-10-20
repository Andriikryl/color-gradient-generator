import Angel from "@/component/angel/Angel";
import CompereHl from "@/component/compereHl/CompereHl";
import Create from "@/component/create/Create";
import Hero from "@/component/hero/Hero";
import Hsl from "@/component/hsl/Hsl";
import Lch from "@/component/lch/Lch";
import Path from "@/component/path/Path";
import Resources from "@/component/resoursec/Resources";
import Rgb from "@/component/rgb/Rgb";
import Toasty from "@/component/toasty/Toasty";

export default function Home() {
  return (
    <>
      <Hero />
      <Rgb />
      <Toasty text="“Colors are the smiles of nature..” – Leigh Hunt" />
      <Hsl />
      <Lch />
      <Toasty text="“Life is a painting, and you are the artist. You have on your palette all the colors in the spectrum - the same ones available to Michaelangelo and DaVinci.” – Paul J. Meyer" />
      <CompereHl />
      <Create />
      <Toasty text="“It's basically the story of my life. Trying to paint the prettiest picture I can with the colors I have.” – Caleb Plant" />
      <Path />
      <Angel />
      <Toasty text="“Black and white are the colors of photography. To me they symbolize the alternatives of hope and despair to which mankind is forever subjected.” – Robert Frank" />
      <Resources />
    </>
  );
}
