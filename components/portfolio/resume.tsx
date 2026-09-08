'use client'

import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  CERTIFICATIONS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from '@/lib/site-data'

const resumeBlocks = [
  {
    heading: 'Profile Summary',
    body: 'B.Tech Engineering student at Lovely Professional University focused on software testing, quality assurance, and automation. Passionate about continuous learning and applying skills to practical projects to build reliable, high-quality software.',
  },
  {
    heading: 'Education',
    body: 'B.Tech Engineering — Lovely Professional University (Ongoing). Developing knowledge in software engineering, programming, databases, testing, automation, and emerging technologies.',
  },
  {
    heading: 'Technical Skills',
    body: 'Software Testing, Test Automation, Automation Anywhere, Java, Python, SQL, JUnit, Microsoft Azure, Git/GitHub, Database Management.',
  },
  {
    heading: 'Projects',
    body: 'AutoCharge Hub (Autonomous EV Wireless Charging & Service Station), Software Testing case studies, and Automation projects including a Calculator Bot and process automation.',
  },
  {
    heading: 'Training & Certifications',
    body: 'Microsoft Azure, Software Testing & QA, Automation Anywhere, and programming/database training.',
  },
]

function buildResumeText() {
  const lines: string[] = []
  lines.push(PROFILE.name.toUpperCase())
  lines.push(PROFILE.tagline)
  lines.push(`${PROFILE.email} | ${PROFILE.location}`)
  lines.push('')

  lines.push('PROFILE SUMMARY')
  lines.push(resumeBlocks[0].body)
  lines.push('')

  lines.push('EDUCATION')
  lines.push(`${PROFILE.degree} — ${PROFILE.university} (Ongoing)`)
  lines.push('')

  lines.push('TECHNICAL SKILLS')
  SKILL_GROUPS.forEach((g) => {
    lines.push(`- ${g.title}: ${g.skills.join(', ')}`)
  })
  lines.push('')

  lines.push('PROJECTS')
  PROJECTS.forEach((p) => {
    lines.push(`- ${p.title}: ${p.subtitle}`)
  })
  lines.push('')

  lines.push('TRAINING & CERTIFICATIONS')
  CERTIFICATIONS.forEach((c) => {
    lines.push(`- ${c.name} — ${c.org} (${c.date})`)
  })

  return lines.join('\n')
}

export function Resume() {
  const handleDownload = () => {
    const blob = new Blob([buildResumeText()], {
      type: 'text/plain;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'Nathaniel-Miamba-Resume.txt'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="resume" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              eyebrow="Resume"
              title="A quick snapshot of my background"
              description="Download a copy or read the summary of my profile, education, skills, projects, and training."
            />
            <Button onClick={handleDownload} size="lg" className="mt-8">
              <Download className="size-4" />
              Download Resume
            </Button>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <Card>
              <CardContent className="divide-y divide-border p-0">
                {resumeBlocks.map((block) => (
                  <div key={block.heading} className="p-6">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-primary" />
                      <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">
                        {block.heading}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {block.body}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
