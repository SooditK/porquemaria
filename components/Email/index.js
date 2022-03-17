import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";

const Email = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <button
        type="button"
        onClick={() => signIn()}
        className="flex justify-center border-2 border-black items-center bg-white text-black px-7 py-3 rounded-lg hover:ring-4 hover:ring-slate-300"
      >
        <div>
          <HiOutlineMail className="w-10 -ml-2 mr-2" />
        </div>
        Sign In with Email
      </button>
    </div>
  );
};

export default Email;
