"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/all-tiles">All Tiles</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              {session && (
                <li>
                  <NavLink href="/my-profile">My Profile</NavLink>
                </li>
              )}
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={80}
              height={80}
              className="object-contain w-auto h-auto"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex text-[#2b1e16]">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/all-tiles">All Tiles</NavLink>
            </li>
             <li>
                <NavLink href="/about">About</NavLink>
              </li>
            {session && (
              <li>
                <NavLink href="/my-profile">My Profile</NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/my-profile">
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-[#2b1e16] ring-offset-1">
                    <img
                      src={
                        session.user?.image ||
                        `https://ui-avatars.com/api/?name=${session.user?.name}&background=2b1e16&color=fff`
                      }
                      alt={session.user?.name}
                    />
                  </div>
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-[#2b1e16] text-white rounded-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="btn bg-[#2b1e16] rounded-full text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
