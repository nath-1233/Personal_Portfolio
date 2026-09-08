import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { JOURNEY } from '@/lib/site-data'

export function Journey() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Learning Journey"
            title="How my skills have been developing"
            description="A step-by-step path of what I've been learning and practicing as a technology student."
          />
        </Reveal>

        <ol className="mt-12 space-y-0 border-l border-border pl-6 sm:pl-8">
          {JOURNEY.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 60} className="relative pb-8 last:pb-0">
              <span
                className="absolute -left-[calc(1.5rem+1px)] top-1.5 grid size-3 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2rem+1px)]"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-muted-foreground">
                Step {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
