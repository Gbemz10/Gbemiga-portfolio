import { projects } from "@/data/projects";
import { WorkIndex } from "./WorkIndex";
import { Feature } from "./Feature";

export function Work() {
  const featured = projects.filter((p) => p.flagship);

  return (
    <section id="work" className="scroll-mt-14 mx-auto max-w-[1400px] px-6 md:px-10">
      <div className="rule flex flex-col gap-2 pt-6 md:flex-row md:items-baseline md:justify-between">
        <p className="mono-label">Selected work</p>
        <p className="max-w-[46ch] text-[15px] text-mute">
          Six projects. Two of them opened up below; every one of them has a case
          study.
        </p>
      </div>

      <WorkIndex />

      <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
        {featured.map((p) => (
          <Feature key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
