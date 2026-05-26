"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import ProjectPreview from "@/components/ProjectPreview";
import useModalBodyLock from "@/components/useModalBodyLock";

export type ProjectPreviewVariant =
  | "blog"
  | "cafe"
  | "restaurant"
  | "landing"
  | "studio";

export type ProjectAccent = "warm" | "gold" | "green" | "cyan" | "sage";

export type ShowroomProject = {
  title: string;
  slug: string;
  preview: ProjectPreviewVariant;
  businessType: string;
  description: string;
  badge: string;
  previewLabel: string;
  chips: string[];
  demoHref: string;
  detailsHref?: string;
  external?: boolean;
  disabledDemo?: boolean;
  accent: ProjectAccent;
  detail: {
    shows: string[];
    bestFor: string[];
    miniTitle: string;
    miniText: string;
  };
};

type ShowroomCopy = {
  featuredLabel: string;
  viewDemo: string;
  details: string;
  closeDetails: string;
  openLiveDemo: string;
  unavailableDemo: string;
  whatShows: string;
  bestFor: string;
  miniPreview: string;
  demoGridBadge: string;
  demoGridTitle: string;
  demoGridText: string;
  wipBadge: string;
  wipTitle: string;
  wipText: string;
};

type ProjectsShowroomProps = {
  copy: ShowroomCopy;
  featured: ShowroomProject;
  demos: ShowroomProject[];
  wip: ShowroomProject[];
};

const accentClasses = {
  warm: {
    border: "border-amber-300/20 hover:border-amber-300/45",
    shadow: "hover:shadow-[0_0_85px_rgba(251,191,36,0.14)]",
    glow: "bg-[radial-gradient(circle_at_25%_12%,rgba(251,191,36,0.15),transparent_38%)]",
    text: "text-amber-200",
    button:
      "border-amber-300/20 bg-amber-300/10 text-amber-100 hover:border-amber-300/45 hover:bg-amber-300/15",
  },
  gold: {
    border: "border-[#d9b46f]/20 hover:border-[#d9b46f]/45",
    shadow: "hover:shadow-[0_0_90px_rgba(217,180,111,0.15)]",
    glow: "bg-[radial-gradient(circle_at_25%_12%,rgba(217,180,111,0.17),transparent_38%)]",
    text: "text-[#f3d19c]",
    button:
      "border-[#d9b46f]/20 bg-[#d9b46f]/10 text-[#f3d19c] hover:border-[#d9b46f]/45 hover:bg-[#d9b46f]/15",
  },
  green: {
    border: "border-emerald-400/12 hover:border-emerald-400/24",
    shadow: "hover:shadow-[0_0_60px_rgba(52,211,153,0.07)]",
    glow: "bg-[radial-gradient(circle_at_25%_12%,rgba(52,211,153,0.08),transparent_38%)]",
    text: "text-emerald-300",
    button:
      "border-emerald-400/16 bg-emerald-400/6 text-emerald-300 hover:border-emerald-400/24 hover:bg-emerald-400/10",
  },
  cyan: {
    border: "border-cyan-300/15 hover:border-cyan-300/40",
    shadow: "hover:shadow-[0_0_80px_rgba(34,211,238,0.12)]",
    glow: "bg-[radial-gradient(circle_at_25%_12%,rgba(34,211,238,0.13),transparent_38%)]",
    text: "text-cyan-200",
    button:
      "border-cyan-300/20 bg-cyan-300/10 text-cyan-200 hover:border-cyan-300/40 hover:bg-cyan-300/15",
  },
  sage: {
    border: "border-[#a8b897]/20 hover:border-[#a8b897]/45",
    shadow: "hover:shadow-[0_0_82px_rgba(168,184,151,0.14)]",
    glow: "bg-[radial-gradient(circle_at_25%_12%,rgba(168,184,151,0.15),transparent_38%)]",
    text: "text-[#d8e4cd]",
    button:
      "border-[#a8b897]/20 bg-[#a8b897]/10 text-[#d8e4cd] hover:border-[#a8b897]/40 hover:bg-[#a8b897]/15",
  },
};

function DemoLink({
  project,
  className,
  children,
}: {
  project: ShowroomProject;
  className: string;
  children: React.ReactNode;
}) {
  if (project.disabledDemo) {
    return (
      <span
        aria-disabled="true"
        className={`${className} cursor-default`}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={project.demoHref}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

function ProjectDetailsContent({
  project,
  copy,
}: {
  project: ShowroomProject;
  copy: ShowroomCopy;
}) {
  const accent = accentClasses[project.accent];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div>
        <p className={`text-sm font-semibold ${accent.text}`}>
          {copy.whatShows}
        </p>

        <div className="mt-4 grid gap-2">
          {project.detail.shows.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300"
            >
              <span className={`mr-2 ${accent.text}`}>+</span>
              {item}
            </div>
          ))}
        </div>

        <p className={`mt-6 text-sm font-semibold ${accent.text}`}>
          {copy.bestFor}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.detail.bestFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <DemoLink
        project={project}
        className="group/preview block overflow-hidden rounded-3xl border border-white/10 bg-black/40 transition hover:border-white/20"
      >
        <ProjectPreview
          variant={project.preview}
          label={copy.miniPreview}
          size="card"
        />

        <div className="p-5">
          <p className={`text-sm font-semibold ${accent.text}`}>
            {project.detail.miniTitle}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {project.detail.miniText}
          </p>

          <span
            className={`mt-5 inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition ${accent.button}`}
          >
            {project.disabledDemo
              ? copy.unavailableDemo
              : `${copy.openLiveDemo} ${project.external ? "↗" : "->"}`}
          </span>
        </div>
      </DemoLink>
    </div>
  );
}

function ProjectDetailsModal({
  project,
  copy,
  onClose,
  lockedScrollY,
}: {
  project: ShowroomProject;
  copy: ShowroomCopy;
  onClose: () => void;
  lockedScrollY: number;
}) {
  const accent = accentClasses[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      style={{
        height: "100vh",
        transform: `translateY(${lockedScrollY}px)`,
      }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 22, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative max-h-[calc(100dvh-2rem)] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-[2rem] border bg-[#07111c]/95 p-5 shadow-[0_0_96px_rgba(52,211,153,0.08)] backdrop-blur-2xl [-webkit-overflow-scrolling:touch] sm:p-7 md:p-8 ${accent.border}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={`pointer-events-none absolute inset-0 ${accent.glow}`} />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className={`text-sm font-semibold ${accent.text}`}>
                {project.businessType}
              </p>

              <h2
                id="project-details-title"
                className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl"
              >
                {project.title}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                {project.description}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={copy.closeDetails}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-emerald-400/22 hover:bg-white/[0.08]"
            >
              ×
            </button>
          </div>

          <div className="mt-7">
            <ProjectDetailsContent project={project} copy={copy} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  copy,
  onDetails,
  experimental = false,
}: {
  project: ShowroomProject;
  copy: ShowroomCopy;
  onDetails: (project: ShowroomProject) => void;
  experimental?: boolean;
}) {
  const accent = accentClasses[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[2rem] border bg-black/35 shadow-[0_0_42px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 ${accent.border} ${accent.shadow}`}
    >
      <div className={`pointer-events-none absolute inset-0 ${accent.glow}`} />
      {experimental && (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      )}

      <div className="relative">
        <ProjectPreview
          variant={project.preview}
          label={project.previewLabel}
          size="card"
        />

        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className={`text-sm font-medium ${accent.text}`}>
              {project.businessType}
            </p>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
              {project.badge}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onDetails(project)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-400/22 hover:bg-white/[0.08]"
            >
              {copy.details}
            </button>

            <DemoLink
              project={project}
              className={`rounded-full border px-5 py-2.5 text-center text-sm font-semibold transition ${accent.button}`}
            >
              {project.disabledDemo
                ? copy.unavailableDemo
                : `${copy.viewDemo} ${project.external ? "↗" : "->"}`}
            </DemoLink>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsShowroom({
  copy,
  featured,
  demos,
  wip,
}: ProjectsShowroomProps) {
  const [selectedProject, setSelectedProject] =
    useState<ShowroomProject | null>(null);
  const [lockedScrollY, setLockedScrollY] = useState(0);
  const featuredAccent = accentClasses[featured.accent];

  const openProjectDetails = useCallback((project: ShowroomProject) => {
    setLockedScrollY(window.scrollY);
    setSelectedProject(project);
  }, []);

  const closeProjectDetails = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useModalBodyLock(
    Boolean(selectedProject),
    lockedScrollY,
    closeProjectDetails,
  );

  return (
    <>
      <section className="relative mt-20 overflow-hidden rounded-[2.2rem] border border-[#d9b46f]/20 bg-black/40 shadow-[0_0_110px_rgba(217,180,111,0.1)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(217,180,111,0.15),transparent_36%),radial-gradient(circle_at_82%_74%,rgba(52,211,153,0.045),transparent_42%)]" />
        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <span className="inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f3d19c]">
              {copy.featuredLabel}
            </span>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
              {featured.businessType}
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {featured.title}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              {featured.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {featured.chips.slice(0, 3).map((chip) => (
                <div
                  key={chip}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300"
                >
                  <span className="mr-2 text-[#f3d19c]">+</span>
                  {chip}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoLink
                project={featured}
                className="rounded-full bg-[#d9b46f] px-7 py-3 text-center font-semibold text-[#120d0a] shadow-[0_0_35px_rgba(217,180,111,0.22)] transition hover:bg-white hover:shadow-[0_0_55px_rgba(217,180,111,0.35)]"
              >
                {copy.viewDemo}
              </DemoLink>

              <button
                type="button"
                onClick={() => openProjectDetails(featured)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 font-semibold text-white transition hover:border-[#d9b46f]/40 hover:bg-white/[0.08]"
              >
                {copy.details}
              </button>
            </div>
          </div>

          <DemoLink
            project={featured}
            className="group relative block border-t border-white/10 lg:border-l lg:border-t-0"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(217,180,111,0.18),transparent_45%)]" />
            <div className="relative p-5 md:p-8">
              <ProjectPreview
                variant={featured.preview}
                label={featured.previewLabel}
                size="featured"
              />
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <span className={`text-sm font-semibold ${featuredAccent.text}`}>
                  {featured.detail.miniTitle}
                </span>
                <span className="text-sm text-zinc-400 transition group-hover:text-white">
                  {copy.openLiveDemo} -&gt;
                </span>
              </div>
            </div>
          </DemoLink>
        </div>
      </section>

      <section className="relative mt-24">
        <div className="pointer-events-none absolute inset-x-0 top-12 h-px bg-linear-to-r from-transparent via-emerald-400/12 to-transparent" />
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {copy.demoGridBadge}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {copy.demoGridTitle}
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-400">{copy.demoGridText}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {demos.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              copy={copy}
              onDetails={openProjectDetails}
            />
          ))}
        </div>
      </section>

      <section className="relative mt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {copy.wipBadge}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {copy.wipTitle}
          </h2>

          <p className="mt-5 leading-7 text-zinc-400">{copy.wipText}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {wip.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              copy={copy}
              onDetails={openProjectDetails}
              experimental
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            copy={copy}
            onClose={closeProjectDetails}
            lockedScrollY={lockedScrollY}
          />
        )}
      </AnimatePresence>
    </>
  );
}
