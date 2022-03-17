import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const Google = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="flex justify-center border-2 border-black items-center bg-white text-black px-5 py-3 rounded-lg hover:ring-4 hover:ring-slate-300"
      >
        <div>
          <FaGoogle className="w-10" />
        </div>
        Sign In with Google
      </button>
    </div>
  );
};

export default Google;
