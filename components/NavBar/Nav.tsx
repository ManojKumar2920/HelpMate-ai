"use client";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import User from "../Profile/User";

const Nav = () => {
  const { user } = useAuth();

  return (
    <div className=" flex justify-between items-center px-10 py-3">
      <div>
        <Image src={Logo} alt="Logo" width={50}></Image>
      </div>
      <div className=" hidden md:block w-[50%]">
        <div className=" flex w-full justify-between ">
          <Link href={"/#how-it-works"}>How it works?</Link>
          <Link href={"/#use-cases"}>Use Cases</Link>
          <Link href={"/https://buymeacoffee.com/manojkumar20"}>Support</Link>
        </div>
      </div>
      {user ? (
        <User />
      ) : (
        <div>
          <Link
            href={"auth"}
            className=" bg-gradient-to-br from-jade-200 to-jade-700 px-4 py-2 rounded-lg hover:bg-jade-400"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
