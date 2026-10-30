"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Briefcase, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TypingText } from "@/components/animate-ui/primitives/texts/typing";



export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        {/* Navbar */}
        <div className="container min-w-full flex h-16 items-center md:px-12 px-0">
          <div className="md:mr-4 hidden md:flex w-full items-center relative">
            {/* Logo */}
            <Link href="/" className="md:mr-6 flex items-center space-x-2">
              <Briefcase className="size-8 text-[#0B0A4A]" />
              <span className="font-bold font-serif italic text-3xl text-[#0B0A4A]">Hirely</span>
            </Link>
            {/* Center Navigation links */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-6 text-xl font-medium">
              <Link
                href="/jobs"
                className="transition-colors hover:text-foreground/90 text-foreground/60"
              >
                Jobs
              </Link>
              <Link
                href="/companies"
                className="transition-colors hover:text-foreground/90 text-foreground/60"
              >
                Companies
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-foreground/90 text-foreground/60"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-foreground/90 text-foreground/60"
              >
                Contact us
              </Link>
            </nav>
          </div>

          {/* Mobile logo + hamburger */}
          <div className="flex md:hidden w-full items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="size-7 ml-3 text-[#0B0A4A]" />
              <span className="font-serif italic font-black text-[#0B0A4A] text-xl tracking-widest">Hirely</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
              {open ? <X className="size-6 mr-3" /> : <Menu className="size-6 mr-3" />}
            </Button>
          </div>
          <div className="flex flex-1 items-center justify-between md:justify-end">
            {/* Right nav btn desktop */}
            <nav className="hidden md:flex items-center md:space-x-3 font-bold">
              <Button variant="ghost" className="text-lg bg-amber-500 p-4" render={<Link href="/login" />} nativeButton={false}>
                Log in
              </Button>
              <Separator orientation="vertical" />
              <Button className="text-lg p-4" render={<Link href="/signup" />} nativeButton={false}>Sign up</Button>
            </nav>
          </div>
        </div>

        {/* Mobile menu links */}
        {open && (
          <div className="md:hidden border-t px-12 py-4 flex flex-col space-y-3">
            <div className="flex flex-col text-2xl space-y-2">
              <Link href="/jobs" className="text-lg transition-colors hover:text-foreground/90 text-foreground/60 font-medium" onClick={() => setOpen(false)}>
                Jobs
              </Link>
              <Link href="/companies" className="text-lg transition-colors hover:text-foreground/90 text-foreground/60 font-medium" onClick={() => setOpen(false)}>
                Companies
              </Link>
              <Link href="/about" className="text-lg transition-colors hover:text-foreground/90 text-foreground/60 font-medium" onClick={() => setOpen(false)}>
                About us
              </Link>
              <Link href="/contact" className="text-lg transition-colors hover:text-foreground/90 text-foreground/60 font-medium" onClick={() => setOpen(false)}>
                Contact us
              </Link>
            </div>
            <Separator />
            {/* log in and sign up buttons */}
            <div className="flex justify-between font-bold">
              <Button variant="ghost" className="text-lg bg-amber-500 p-4" render={<Link href="/login" />} nativeButton={false}>
                Log in
              </Button>
              <Button className="text-lg p-4" render={<Link href="/signup" />} nativeButton={false}>Sign up</Button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero section */}
      <main className="flex-1">
        <section className="grid h-150 grid-cols-1 bg-[#eaeaea] md:grid-cols-2 mb-60 md:mb-50">
          {/* Left: text + buttons */}
          <div className="flex items-center px-6 py-16 md:px-20">
            <div className="max-w-xl">
              <TypingText
              text="Hire great people,"
              className="text-4xl font-bold leading-tight text-[#0B0A4A] md:text-6xl"
              />
              <h1 className="text-[#004DBB] font-bold text-4xl md:text-6xl">
                <span>faster.</span>
              </h1>

              <p className="mt-6 text-lg md:text-2xl leading-relaxed text-[#3F4A5A]">
                Post a job in minutes, reach thousands of qualified candidates, and
                shortlist the right fit without the back-and-forth.
              </p>

              <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <Link
                  href="/post-job"
                  className="rounded-md bg-[#004DBB] px-6 py-3 text-center font-semibold text-white transition hover:bg-amber-500 hover:text-black"
                >
                  Post a job for free
                </Link>
                <Link
                  href="#how-it-works"
                  className="rounded-md border-2 border-[#004DBB] px-6 py-3 text-center font-semibold text-[#004DBB] transition hover:bg-[#004DBB] hover:text-white"
                >
                  See how it works
                </Link>
              </div>

              <p className="mt-4 text-sm md:text-xl text-[#3F4A5A]">
                No credit card required. Free to get started.
              </p>
            </div>
          </div>
          {/* Right: full-bleed image */}
          <div className="relative bg-[#eaeaea] min-h-80 md:min-h-full">
            <Image
              src="/assets/images/hero.webp"
              alt="Hiring manager reviewing resumes"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
