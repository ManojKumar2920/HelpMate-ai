// components/User.tsx
"use client";

import { useAuth } from "@/hooks/useAuth";
import { signout } from "@/services/authService";
import Image from "next/image";
import { useState } from "react";

const User = () => {
  const { user } = useAuth();

  const [isSignOutOpen, setIsSignOutOpen] = useState(false);

  const toggleSignout = () =>{
    setIsSignOutOpen(!isSignOutOpen);
  }

  return (
    <div className=" border-gray-700 flex items-center space-x-4">
      <div className="relative w-10 h-10">
        <div className="relative w-10 h-10">
          {user && (
            <Image
              src={user.photoURL || "https://avatar.iran.liara.run/public"}
              alt="User Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full cursor-pointer"
              onClick={toggleSignout} 
            />
          )}
        </div>
        {isSignOutOpen && (
          <div className=" p-2 rounded-lg border w-[100px] text-center cursor-pointer absolute right-2" onClick={signout}>
            Sign Out
          </div>
        )}
        {/* <button onClick={signout}>Sign Out</button> */}
      </div>
    </div>
  );
};

export default User;
