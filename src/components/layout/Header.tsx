"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";

export function Header() {
  const [query, setQuery] = React.useState("");

  return (
    <header className="sticky top-0 py-6 w-full bg-[#16182c]">
      <div className="flex h-16  justify-between items-center gap-[88px] px-4 sm:px-6">
        <div className="flex gap-8">
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex size-9 items-center justify-center rounded-md  text-white/70 hover:bg-white/5"
          >
            <MenuIcon className="size-5" />
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon/logo.svg"
              alt="Logo"
              width={88}
              height={32}
              priority
            />
          </Link>
        </div>

        <div className="relative ml-2 hidden flex-1 items-center sm:flex">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="pl-9 h-12     text-white/90 placeholder:text-white/40 border-white/10 bg-white/5"
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button className="h-12 w-[128px] rounded-md bg-[#1FE6E5] px-5 text-black hover:bg-[#1FE6E5]/90">
            Sign Up
          </Button>
          <Button className="h-12 w-[128px] rounded-md bg-[#9A2BD8] px-5 text-white hover:bg-[#9A2BD8]/90">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
