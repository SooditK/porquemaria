import React from "react";
import { FaDiscord } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const Discord = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => signIn("discord")}
        className="flex justify-center items-center bg-indigo-500 text-white px-5 py-3 rounded-lg hover:ring-4 hover:ring-indigo-300 "
      >
        <div>
          <FaDiscord className="w-10" />
        </div>
        Sign In with Discord
      </button>
    </div>
  );
};

export default Discord;
