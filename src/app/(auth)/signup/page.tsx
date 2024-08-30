import { Metadata } from "next";
import UserRegisterForm from "@/components/form/UserRegisterForm";
import SignUpForm from "./SignupForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create new account",
  // CHANGE this description
  description: "Authentication forms built using the components",
};

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create new account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your data below to create account
        </p>
      </div>
      <Link href="/login" className="text-center font-semibold hover:underline">
        Already have an account? <span className="text-primary">Sign in</span>
      </Link>
      <SignUpForm />
    </>
  );
}
