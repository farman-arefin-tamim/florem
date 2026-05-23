"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Invalid email or password");
      return;
    }

    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6ef] py-12">
      <Card className="border mx-auto w-full max-w-md py-10 px-6">
        <h1 className="text-center text-3xl font-bold text-[#2b1e16] mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to explore our tile gallery
        </p>

        {error && (
          <div className="alert alert-error mb-4 text-sm">
            <span>{error}</span>
          </div>
        )}

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="email" type="email" >
            <Label>Email</Label>
            <Input placeholder="tamim@example.com"/>
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            isLoading={loading}
            className="w-full bg-[#2b1e16] text-white rounded-full mt-2"
          >
            Login
          </Button>
        </Form>

        <div className="divider text-gray-400 text-sm my-4">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full rounded-full flex items-center gap-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-[#2b1e16] font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </Card>
    </div>
  );
}
