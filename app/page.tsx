"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-b from-slate-300/30 to-transparent dark:from-slate-700/20 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container flex flex-col items-center px-6 text-center md:px-8"
      >
        <motion.h1
          className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Coming Soon
        </motion.h1>

        <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-400">
          We’re crafting something elegant and powerful. Leave your email and
          we’ll let you know when it’s live.
        </p>

        <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-gray-300 bg-white/60 px-4 py-2 text-gray-800 placeholder:text-gray-400 backdrop-blur-md transition-all duration-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-100"
          />
          <Button
            type="submit"
            className="rounded-xl bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-gray-900 dark:hover:bg-slate-300 transition-all duration-300"
          >
            Notify Me
          </Button>
        </form>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1.2 }}
        className="mt-10 text-sm text-gray-500 dark:text-gray-500"
      >
        © {new Date().getFullYear()} ShadcnUIVerse — All rights reserved.
      </motion.p>
    </section>
  );
}
