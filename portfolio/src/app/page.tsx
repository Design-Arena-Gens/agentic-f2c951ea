import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Atlas Labs",
      period: "2022 — Present",
      achievements: [
        "Led the redesign of a data-rich analytics suite used by 20k+ monthly users",
        "Introduced a component library that reduced feature delivery time by 35%",
        "Partnered with product teams to validate concepts with rapid prototypes",
      ],
    },
    {
      role: "Product Designer & Developer",
      company: "Independent",
      period: "2019 — 2022",
      achievements: [
        "Delivered end-to-end web experiences for startups in fintech, edtech, and health",
        "Shipped responsive design systems and accessibility audits for 15+ clients",
        "Mentored junior designers transitioning into frontend development roles",
      ],
    },
  ];

  const projects = [
    {
      title: "Lumina Insights",
      description:
        "Executive dashboard surfacing real-time KPIs, team health, and roadmap status with automated reporting.",
      tech: ["Next.js", "TypeScript", "tRPC", "Tailwind"],
      link: "https://lumina.dev",
    },
    {
      title: "Field Notes",
      description:
        "Offline-first research companion for UX teams to capture recordings, transcripts, and highlights collaboratively.",
      tech: ["React", "PWA", "IndexedDB", "Firebase"],
      link: "https://fieldnotes.app",
    },
    {
      title: "Storycraft",
      description:
        "Interactive storytelling platform blending long-form writing with modular, embeddable web components.",
      tech: ["Next.js", "MDX", "Framer Motion", "Vercel"],
      link: "https://storycraft.io",
    },
  ];

  const skills = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Product",
      items: ["Design Systems", "Prototyping", "Journey Mapping", "UX Research"],
    },
    {
      title: "Workflow",
      items: ["Figma", "Notion", "Storybook", "Linear", "Jest + RTL"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:px-12 lg:px-20">
        <section className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              Product-minded engineer crafting memorable interfaces
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Hi, I&apos;m Olivia Reed — I design and build human-centered web
                products.
              </h1>
              <p className="max-w-xl text-lg leading-7 text-slate-300">
                I help teams discover, validate, and launch digital experiences
                with craft. My sweet spot lives at the intersection of UX and
                frontend engineering, where storytelling, accessibility, and
                performance all meet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="mailto:hello@oliviareed.com"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="https://read.cv/oliviareed"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Download resume
              </Link>
              <div className="flex items-center gap-3 text-slate-400">
                <Link
                  href="https://github.com/oliviareed"
                  className="rounded-full border border-transparent p-2 transition hover:border-slate-600 hover:bg-slate-800/70 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/oliviareed"
                  className="rounded-full border border-transparent p-2 transition hover:border-slate-600 hover:bg-slate-800/70 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://dribbble.com/oliviareed"
                  className="rounded-full border border-transparent p-2 transition hover:border-slate-600 hover:bg-slate-800/70 hover:text-white"
                >
                  <Globe className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Products shipped",
                  value: "34",
                },
                { label: "Teams partnered with", value: "18" },
                { label: "Years crafting", value: "8" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-[0_0_40px_-20px_rgba(16,185,129,0.4)]"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-emerald-500/10 to-sky-400/20 blur-3xl" />
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[inset_0_1px_0_rgba(148,163,184,0.25)] backdrop-blur">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-emerald-300" />
                Currently in Brooklyn, NY — available for hybrid NYC & remote
                collaborations.
              </div>
              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Expertise
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Design Systems",
                      "Data Visualization",
                      "Prototyping",
                      "Accessibility",
                      "Creative Direction",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Mail className="h-4 w-4 text-emerald-300" />
                    hello@oliviareed.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <PhoneCall className="h-4 w-4 text-emerald-300" />
                    (347) 555-0137
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Crafting clarity from complexity
            </h2>
            <p className="text-base leading-7 text-slate-300">
              From concept to launch, I partner with founders and product teams
              to define north-star visions, validate assumptions, and translate
              insights into polished digital experiences. My approach blends
              product thinking, visual storytelling, and pragmatic engineering
              to deliver systems that scale.
            </p>
            <p className="text-base leading-7 text-slate-300">
              I thrive in cross-functional environments where close
              collaboration with research, product, and engineering accelerates
              learning. Whether we&apos;re shipping a new SaaS platform or
              evolving a design system, I lead with intentionality, curiosity,
              and a bias for action.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Selected clients
            </p>
            <div className="mt-6 grid gap-6 text-slate-200 sm:grid-cols-2">
              {[
                "Dropbox",
                "Gusto",
                "Reforge",
                "Etsy",
                "LottieFiles",
                "Oura",
              ].map((client) => (
                <div
                  key={client}
                  className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5 text-sm font-medium text-slate-100"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Experience
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                Partnerships built on trust
              </h2>
            </div>
            <Link
              href="mailto:hello@oliviareed.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Request full CV
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-wide text-emerald-300">
                    {experience.period}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-slate-300">{experience.company}</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-left"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                Launching products that feel inevitable
              </h2>
            </div>
            <Link
              href="https://dribbble.com/oliviareed"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              View case studies
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition hover:border-emerald-400/60 hover:bg-slate-900/80"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Code2 className="h-4 w-4 text-emerald-300" />
                  Product case study
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-slate-700 px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                >
                  Explore project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Skills
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              A toolkit honed for shipping
            </h2>
            <p className="text-base leading-7 text-slate-300">
              I champion high-velocity workflows grounded in craft. From
              zero-to-one explorations to optimizations on mature products, I
              build resilient systems that empower teams to iterate quickly and
              confidently.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5"
                >
                  <p className="text-xs uppercase tracking-wide text-emerald-300">
                    {skill.title}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Collaborations
            </p>
            <div className="space-y-5">
              <blockquote className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 text-sm leading-6 text-slate-200">
                &quot;Olivia translates vague ideas into compelling product narratives.
                Her ability to align stakeholders and ship with pace made her an
                essential partner for our Series B launch.&quot;
                <span className="mt-4 block text-xs uppercase tracking-wide text-emerald-300">
                  Priya N., VP Product at HorizonOS
                </span>
              </blockquote>
              <blockquote className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 text-sm leading-6 text-slate-200">
                &quot;From design audits to production builds, she brings the same
                level of intention and polish. We doubled activation after
                shipping the onboarding flow she architected.&quot;
                <span className="mt-4 block text-xs uppercase tracking-wide text-emerald-300">
                  Mateo R., Founder at Cove
                </span>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.3),rgba(15,23,42,0.6))]" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Let&apos;s collaborate
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Ready to craft your next flagship experience?
              </h2>
              <p className="text-base leading-7 text-slate-200">
                I&apos;m currently booking new engagements for Q4. Send a note with
                the problem you&apos;re solving and we&apos;ll explore how to
                make it real together.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              <Link
                href="mailto:hello@oliviareed.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-200"
              >
                hello@oliviareed.com
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="https://cal.com/oliviareed/intro"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Book a 30-min intro
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 pb-10 text-xs text-slate-500 md:px-12 lg:px-20">
        <p>© {new Date().getFullYear()} Olivia Reed. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:hello@oliviareed.com"
            className="hover:text-emerald-200"
          >
            Contact
          </Link>
          <Link href="https://dribbble.com/oliviareed" className="hover:text-emerald-200">
            Dribbble
          </Link>
          <Link href="https://github.com/oliviareed" className="hover:text-emerald-200">
            GitHub
          </Link>
        </div>
      </footer>
    </div>
  );
}
