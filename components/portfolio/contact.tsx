'use client'

import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from '@/components/portfolio/social-icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PROFILE } from '@/lib/site-data'

const socials = [
  { label: 'LinkedIn', icon: LinkedInIcon, href: PROFILE.socials.linkedin },
  { label: 'GitHub', icon: GitHubIcon, href: PROFILE.socials.github },
  { label: 'YouTube', icon: YouTubeIcon, href: PROFILE.socials.youtube },
  { label: 'Facebook', icon: FacebookIcon, href: PROFILE.socials.facebook },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${encodeURIComponent(
      form.message,
    )}`
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio inquiry',
    )}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              eyebrow="Contact Me"
              title="Let's connect"
              description="Open to internships, placements, and collaboration. Feel free to reach out — I'll get back to you."
            />

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span className="font-mono text-sm">{PROFILE.email}</span>
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`https://wa.me/${PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </span>
                  <span className="text-sm">
                    <strong className="block">WhatsApp</strong>
                    <span className="text-muted-foreground">Message me</span>
                  </span>
                </a>
                <a
                  href={PROFILE.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <span className="text-sm">
                    <strong className="block">Location</strong>
                    <span className="text-muted-foreground">{PROFILE.location}</span>
                  </span>
                </a>
              </div>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <social.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                    <CheckCircle2 className="size-10 text-primary" />
                    <h3 className="text-lg font-semibold">Thank you!</h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Your email client should now be open with your message.
                      I look forward to connecting with you.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSent(false)}
                      className="mt-2"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Write your message here..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-fit">
                      Send Message
                      <Send className="size-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
