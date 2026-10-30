"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TypingText } from "@/components/animate-ui/primitives/texts/typing";
import {
  Briefcase,
  Users,
  MagnifyingGlass,
  Lightning,
  ShieldCheck,
  Globe,
} from "@phosphor-icons/react";



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
        <section className="grid h-auto md:h-150 grid-cols-1 bg-[#eaeaea] md:grid-cols-2">
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
        {/* Features */}
        <section className="w-full py-12 md:py-24 bg-muted flex flex-col items-center">
          <div className="container px-6 md:px-20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-[#0B0A4A] font-bold tracking-tighter md:text-5xl">
                  Why choose Hirely?
                </h2>
                <p className="max-w-225 text-muted-foreground md:text-2xl/relaxed">
                  Because hirely is built with both the job seekers and employers in mind. <br className="hidden md:block" /> Also with modern tools and
                  a clean experience for the users.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-16 md:gap-20 px-12 md:px-0 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <MagnifyingGlass className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-[#0B0A4A] font-bold">Smart Search</h3>
                <p className="text-muted-foreground">
                  Find relevant jobs with powerful filtering and search
                  capabilities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-[#0B0A4A] font-bold">Easy Applications</h3>
                <p className="text-muted-foreground">
                  Apply to jobs in minutes with your profile and uploaded CV.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Lightning className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-[#0B0A4A] font-bold">Fast Hiring</h3>
                <p className="text-muted-foreground">
                  For employers: Post jobs, review applications, and hire
                  quickly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-[#0B0A4A] font-bold">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Built with modern security practices and reliable
                  infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-[#0B0A4A] font-bold">Remote & Onsite</h3>
                <p className="text-muted-foreground">
                  Find opportunities that fit your lifestyle, remote or onsite.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-[#0B0A4A] font-bold">All Industries</h3>
                <p className="text-muted-foreground">
                  From tech to design, finance to healthcare — we&apos;ve got
                  you covered.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
