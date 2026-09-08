import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROFILE } from '@/lib/site-data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal is-visible max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to internships & placements
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {PROFILE.name}
          </h1>

          <p className="mt-4 font-mono text-base text-primary sm:text-lg">
            {PROFILE.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a B.Tech Engineering student at Lovely Professional
            University, passionate about software testing, quality assurance,
            automation, programming, and technology. I enjoy learning new
            technologies and applying my knowledge to practical projects and
            real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#projects" />}
              nativeButton={false}
              size="lg"
            >
              View My Projects
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {PROFILE.location}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="mx-auto mt-16 hidden w-fit items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <ArrowDown className="size-4 animate-bounce" />
        Scroll to explore
      </a>
    </section>
  )
}
