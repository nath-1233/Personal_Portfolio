import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from '@/components/portfolio/social-icons'
import { PROFILE } from '@/lib/site-data'

const socials = [
  { label: 'LinkedIn', icon: LinkedInIcon, href: PROFILE.socials.linkedin },
  { label: 'GitHub', icon: GitHubIcon, href: PROFILE.socials.github },
  { label: 'YouTube', icon: YouTubeIcon, href: PROFILE.socials.youtube },
]

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold"
        >
          <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
            NM
          </span>
          {PROFILE.name}
        </a>
        <p className="mt-3 font-mono text-sm text-primary">{PROFILE.tagline}</p>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
          Passionate about learning, building, testing, and improving
          technology.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 {PROFILE.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
