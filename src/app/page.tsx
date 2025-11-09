"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 md:py-24">
      {/* Animated gradient side lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/70 dark:bg-neutral-800/70">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/70 dark:bg-neutral-800/70">
        <div className="absolute bottom-0 h-40 w-px bg-gradient-to-t from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Main hero text */}
      <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-extrabold text-slate-800 dark:text-slate-200 sm:text-5xl lg:text-6xl">
        {"Master DSA & Coding Smarter — with Gist Labs."
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
      </h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-4 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400"
      >
        Learn Data Structures, Algorithms, and Code concepts visually and interactively.  
        Gist Labs helps you grasp complex topics in hours, not days.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <button
          onClick={() => router.push("/gist")}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5"
        >
          Explore Gist Labs
        </button>
        <button
          onClick={() => router.push("/")}
          className="rounded-lg border border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-100 dark:text-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          Learn More
        </button>
      </motion.div>

      {/* Product / UI preview image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="relative z-10 mt-16 w-full max-w-4xl rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
          <img
            src="/preview.png" // 🔁 replace with your own preview
            alt="Gist Labs software preview"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
