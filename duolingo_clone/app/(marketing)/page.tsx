"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-8">
      {/* Hero Image */}
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px]">
        <Image src="/hero.svg" alt="Hero" fill />
      </div>

      {/* Text + Button Section */}
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-700 max-w-[480px] text-center">
          Learn, practice, and master new languages with Lingo.
        </h1>

        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button className="w-[300px] bg-emerald-500 text-white hover:bg-emerald-600">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button variant="ghost" className="w-[300px] text-sm">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button className="w-[300px] bg-emerald-500 text-white hover:bg-emerald-600" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}