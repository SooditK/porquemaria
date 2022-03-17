import React from "react";
import Discord from "./Discord";
import Email from "./Email";
import Google from "./Google";

const SignInComponent = () => {
  return (
    <div className="flex p-4 bg-gray-50 max-w-sm rounded-lg flex-col gap-y-4 items-center justify-center">
      <Discord />
      <Google />
      <Email />
    </div>
  );
};

export default SignInComponent;
