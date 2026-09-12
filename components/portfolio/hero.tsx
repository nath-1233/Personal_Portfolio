'use client'

import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { useState } from 'react'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/portfolio/social-icons'
import { Button } from '@/components/ui/button'
import { PROFILE } from '@/lib/site-data'

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_8%_10%,rgba(197,250,225,0.8),transparent_32%),linear-gradient(115deg,#effcf7_0%,#f8fbfc_52%,#ffffff_100%)] pt-28 pb-20 sm:pt-36 sm:pb-28 dark:bg-[radial-gradient(circle_at_8%_10%,rgba(18,82,67,0.55),transparent_32%),linear-gradient(115deg,#10211e_0%,#15211f_52%,#101513_100%)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.25fr] lg:gap-20 lg:px-8">
        <div className="reveal is-visible order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-primary/20 bg-white/40 shadow-2xl shadow-primary/10 dark:bg-white/5" />
            <div className="relative grid size-64 place-items-center overflow-hidden rounded-full border-4 border-white bg-primary/10 shadow-xl shadow-slate-900/10 sm:size-80">
              {imageFailed ? (
                <span className="font-mono text-6xl font-semibold text-primary">
                  NM
                </span>
              ) : (
                <img
                  src={PROFILE.profileImage}
                  alt={`${PROFILE.name} profile`}
                  className="size-full object-cover"
                  onError={() => setImageFailed(true)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="reveal is-visible order-1 max-w-3xl lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span aria-hidden="true">♬</span>
            Creator &amp; QA enthusiast
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold tracking-[-0.04em] text-primary sm:text-6xl lg:text-7xl">
            {PROFILE.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-primary/90 sm:text-2xl">
            Software Testing <span className="mx-2 text-primary/50">|</span>{' '}
            Automation <span className="mx-2 text-primary/50">|</span> Creator
          </p>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am {PROFILE.name}, currently pursuing my {PROFILE.degree} at{' '}
            {PROFILE.university}. I enjoy building reliable software through
            quality assurance, test automation, programming, and practical
            engineering projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-base text-foreground/80">
            <a className="inline-flex items-center gap-2 hover:text-primary" href={`mailto:${PROFILE.email}`}>
              <Mail className="size-5" /> Email
            </a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={`tel:${PROFILE.phone}`}>
              <Phone className="size-5" /> Phone
            </a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon className="size-5" /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={PROFILE.socials.github} target="_blank" rel="noreferrer">
              <GitHubIcon className="size-5" /> GitHub
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button render={<a href="#resume" />} nativeButton={false} size="lg">
              <Download className="size-4" />
              Download Resume
            </Button>
            <Button render={<a href="#contact" />} nativeButton={false} size="lg" variant="outline">
              Let&apos;s Connect
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {PROFILE.location}
          </div>
        </div>
      </div>
    </section>
  )
}
