"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();
  //   console.log(user);

  return (
    <div className="flex items-center justify-between p-3">
      {user && (
        <h1 className=" text-xl">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}
      {/* Breadcrumbs */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
