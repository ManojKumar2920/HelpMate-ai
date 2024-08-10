// components/User.tsx
"use client";

import { useAuth } from "@/hooks/useAuth";
import { signout } from "@/services/authService";
import Image from "next/image";

const User = () => {
  const { user } = useAuth();


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
              className="rounded-full"
            />
          )}
        </div>
        {/* <button onClick={signout}>Sign Out</button> */}
      </div>
    </div>
  );
};

export default User;
