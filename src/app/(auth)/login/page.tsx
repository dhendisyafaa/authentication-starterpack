import Link from "next/link";
import React from "react";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to <span className="text-primary">Radsnaps</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to access gallery
        </p>
      </div>
      <Link
        href="/signup"
        className="text-center font-semibold hover:underline"
      >
        Don&apos;t have an account?{" "}
        <span className="text-primary">Sign Up</span>
      </Link>
      <SignInForm />
    </>
  );
}
