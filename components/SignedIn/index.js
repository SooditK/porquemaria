import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";

const SignedInSession = ({ session }) => {
  return (
    <div className="bg-gray-50 max-w-lg rounded-lg hover:shadow-2xl flex-col gap-y-4 items-center justify-center">
      <div className="max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-5">
          <img
            className="my-5 w-24 h-24 rounded-full shadow-lg hover:shadow-2xl"
            src={session.user.image}
            alt={session.user.name}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Hi, {session.user.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {session.user.email}
          </span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
            <button
              onClick={() => signOut()}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedInSession;
