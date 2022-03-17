import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
// import "flowbite";
import SignInComponent from "../components";
import SignedInSession from "../components/SignedIn";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session);
    return (
      <div className="flex items-center justify-center h-screen">
        <SignedInSession session={session} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <SignInComponent />
    </div>
  );
}
