"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#2b1e16]"></span>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const user = session.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Update failed. Please try again.");
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/my-profile"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#fff6ef] py-16 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-[#2b1e16] mb-8 text-center">
          Update Information
        </h1>

        <Card className="border p-8">
          <div className="flex justify-center mb-6">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-[#2b1e16] ring-offset-2">
                <img
                  src={
                    user?.image ||
                    `https://ui-avatars.com/api/?name=${user?.name}&background=2b1e16&color=fff`
                  }
                  alt={user?.name}
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="alert alert-error mb-4 text-sm">
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success mb-4 text-sm">
              <span>Profile updated successfully! Redirecting...</span>
            </div>
          )}

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text" defaultValue={user?.name}>
              <Label>Full Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

            <TextField name="image" type="text" defaultValue={user?.image || ""}>
              <Label>Photo URL</Label>
              <Input placeholder="https://example.com/photo.jpg" />
              <FieldError />
            </TextField>

            <div className="flex gap-3 mt-2">
              <Button
                type="submit"
                isLoading={loading}
                className="flex-1 bg-[#2b1e16] text-white rounded-full"
              >
                Update Information
              </Button>
              <Button
                type="button"
                variant="bordered"
                className="rounded-full border-[#2b1e16] text-[#2b1e16]"
                onPress={() => router.push("/my-profile")}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}
