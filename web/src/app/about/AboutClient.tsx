"use client";

import { motion, Variants } from "framer-motion";

interface EducationItem {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface AboutData {
  hook: string;
  skills: string[];
  education: EducationItem[];
  tools: string[];
  details: string;
  personalTouch: string;
}

interface AboutClientProps {
  cvUrl: string;
  data: AboutData;
}

export default function AboutClient({ cvUrl, data }: AboutClientProps) {
  const fadeSlideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const columnVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: custom * 0.15 },
    }),
  };

  const viewportConfig = { once: false, amount: 0.3 };

  return (
    <section className="w-full flex flex-col items-center px-6 md:px-8 py-24 wrapper-margin-top gap-24 md:gap-32 overflow-hidden">

      <motion.div
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center"
      >
        <header className="flex flex-col items-center text-center gap-12 mb-16">
          <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] text-white uppercase tracking-tighter">
            ABOUT <span className="text-[#ff4d94]"> ME </span>
          </h1>
          <p className="font-body text-white/60 text-sm md:text-base max-w-[500px] leading-relaxed whitespace-pre-line">
            {data.hook}
          </p>
          <div className="flex justify-center w-full">
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="button-padding flex items-center justify-center bg-[#ff4d94] text-white font-heading text-[0.9rem] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:bg-[#e64586] hover:-translate-y-1 active:scale-95 shadow-lg shadow-[#ff4d94]/30 w-fit"
            >
              Get resume
            </a>
          </div>
        </header>
      </motion.div>

      <motion.div
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="w-full max-w-[1200px] mx-auto flex flex-col items-center"
      >
        <h2 className="font-display text-[3rem] tracking-[0.2em] uppercase text-white/80 mb-16">
          Stack & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full items-start text-left wrapper-margin-top-100 wrapper-padding">

          <motion.div custom={0} variants={columnVariant} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col items-start">
            <h3 className="wrapper-margin-bottom-50 font-heading text-[1.5rem] tracking-widest uppercase text-white border-b border-white/30 w-full">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="button-padding rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-widest text-white/70 transition-all hover:border-[#ff4d94]/40 hover:text-[#ff4d94] cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div custom={1} variants={columnVariant} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col items-start">
            <h3 className="wrapper-margin-bottom-50 font-heading text-[1.5rem] tracking-widest uppercase text-white border-b border-white/30 w-full">EDUCATION</h3>
            <div className="flex flex-col gap-6">
              {data.education?.map((item, i) => {
                const start = item.startDate ? new Date(item.startDate).getFullYear() : "";
                const end = item.endDate ? new Date(item.endDate).getFullYear() : "Present";
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <h4 className="font-heading text-sm text-white tracking-wider">{item.degree}</h4>
                    <p className="text-[11px] uppercase tracking-widest text-white/50">{item.school} | {start}—{end}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div custom={2} variants={columnVariant} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col items-start">
            <h3 className="wrapper-margin-bottom-50 font-heading text-[1.5rem] tracking-widest uppercase text-white border-b border-white/30 w-full">TOOLS</h3>
            <div className="flex flex-wrap gap-2">
              {data.tools?.map((tool, i) => (
                <span
                  key={i}
                  className="button-padding  rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-widest text-white/70 transition-all hover:border-[#ff4d94]/40 hover:text-[#ff4d94] cursor-pointer"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-32 md:gap-48 mt-12">
        <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col items-center text-center w-full wrapper-margin-bottom-50">
          <h2 className="font-display text-[3rem] tracking-[0.2em] uppercase text-white/80 mb-16">Professional <span className="text-[#ff4d94]"> summary </span></h2>
          <p className="font-body text-white/60 text-sm md:text-base max-w-[500px] leading-relaxed whitespace-pre-line">
            {data.details}
          </p>
        </motion.section>

        <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col items-center text-center w-full wrapper-margin-bottom-100">
          <h2 className="font-display text-[3rem] tracking-[0.2em] uppercase text-white/80 mb-16">Off the <span className="text-[#ff4d94]"> clock </span></h2>
          <p className="font-body text-white/60 text-sm md:text-base max-w-[500px] leading-relaxed whitespace-pre-line">
            {data.personalTouch}
          </p>
        </motion.section>
      </div>
    </section>
  );
}