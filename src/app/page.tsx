import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { HowIBuild } from "@/components/HowIBuild";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <Stack />
      <Work />
      <HowIBuild />
      <Contact />
    </main>
  );
}
