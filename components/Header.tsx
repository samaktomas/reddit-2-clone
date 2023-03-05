import Image from "next/image";
import React from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeEuropeAfricaIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div
      className="flex bg-white px-4 py-2 shaddow-sm 
    sticky top-0 z-50"
    >
      <div className="relative h-12 w-20 flex-shrink-0">
        <Link href={"/"}>
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo-768x492.png"
            style={{ objectFit: "contain" }}
            fill
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline ">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form
        className="flex flex-1 items-center space-x-2
      border-gray-200 rounded-full bg-gray-100 px-3 py-1    "
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-gray=400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>

      <div className="items-center space-x-2 text-gray-500 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeEuropeAfricaIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border b-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign In & Sign Out button*/}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border-gray-100 p-2 
      cursor-pointer"
        >
          <div className="h-5 w-5 relative flex-shrink-0 ">
            <Image src="https://links.papareact.com/23l" alt="signIco" fill />
          </div>

          <div className="flex flex-col text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 icon" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border-gray-100 p-2 
      cursor-pointer"
        >
          <div className="h-5 w-5 relative flex-shrink-0 ">
            <Image src="https://links.papareact.com/23l" alt="signIco" fill />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}
