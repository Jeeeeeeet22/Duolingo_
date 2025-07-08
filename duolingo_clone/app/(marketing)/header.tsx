"use client";

import Image from "next/image";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="w-full border-b h-20 px-4 lg:px-8 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="pt-6 pl-4 pb-7 flex items-center gap-x-3">
        <Image src="/mascot.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-extrabold text-emerald-600 tracking-wide">Lingo!</h1>
      </div>

      {/* Right: Auth buttons */}
      <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-md">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 text-sm border border-emerald-600 text-emerald-600 rounded-md">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
};