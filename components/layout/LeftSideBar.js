"use client";

import { navLinks } from "@/lib/constants";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? "text-blue-1" : "text-grey-1"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      {/* <hr className="text-black" /> */}

      <div className="flex gap-4 text-body-medium items-center">
        <SignedIn>
          <UserButton />
          <p>Edit Profile</p>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <p className="flex gap-3 items-center cursor-pointer">
              {" "}
              <span className="">
                <LogIn sx={{ color: "white", fontSize: "32px" }} />
              </span>
              Login
            </p>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default LeftSideBar;
