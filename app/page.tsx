"use client"

import { useState } from "react"
import Link from "next/link"
import { Briefcase, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"



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
              <Briefcase className="size-8 text-blue-500" />
              <span className="font-bold text-2xl text-blue-500">Hirely</span>
            </Link>
            {/* Center Navigation links */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-6 text-xl font-medium">
              <Link
                href="/jobs"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Jobs
              </Link>
              <Link
                href="/companies"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Companies
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Contact us
              </Link>
            </nav>
          </div>

          {/* Mobile logo + hamburger */}
          <div className="flex md:hidden w-full items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="size-7 ml-3" />
              <span className="font-serif italic font-black text-3xl tracking-widest">Hirely</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
              {open ? <X className="size-6 mr-3" /> : <Menu className="size-6 mr-3" />}
            </Button>
          </div>
          <div className="flex flex-1 items-center justify-between md:justify-end">
            {/* Right btn navigation links desktop */}
            <nav className="hidden md:flex items-center md:space-x-3 font-bold">
              <Button variant="ghost" className="text-lg bg-amber-400 p-4" render={<Link href="/login" />}>
                Log in
              </Button>
              <Separator orientation="vertical" />
              <Button className="text-lg p-4" render={<Link href="/signup" />}>Sign up</Button>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t px-12 py-4 flex flex-col space-y-3">
            <div className="flex flex-col text-2xl space-y-2">
              <Link href="/jobs" className="text-lg font-medium" onClick={() => setOpen(false)}>
                Jobs
              </Link>
              <Link href="/companies" className="text-lg font-medium" onClick={() => setOpen(false)}>
                Companies
              </Link>
              <Link href="/about" className="text-lg font-medium" onClick={() => setOpen(false)}>
                About us
              </Link>
              <Link href="/contact" className="text-lg font-medium" onClick={() => setOpen(false)}>
                Contact us
              </Link>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <Button variant="ghost" className="text-lg bg-amber-400 p-4" render={<Link href="/login" />}>
                Log in
              </Button>
              <Button className="text-lg p-4" render={<Link href="/signup" />}>Sign up</Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
