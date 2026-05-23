"use client";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit2, FiLogOut, FiMail, FiUser } from "react-icons/fi";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

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

  return (
    <div className="min-h-screen bg-[#fff6ef] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2b1e16] mb-8 text-center">
          My Profile
        </h1>

        <Card className="border p-8">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-[#2b1e16] ring-offset-2">
                <img
                  src={
                    user?.image ||
                    `https://ui-avatars.com/api/?name=${user?.name}&background=2b1e16&color=fff&size=200`
                  }
                  alt={user?.name}
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#2b1e16]">{user?.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Welcome back!</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-xl">
              <FiUser className="text-[#2b1e16] text-xl" />
              <div>
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="font-medium text-[#2b1e16]">{user?.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-xl">
              <FiMail className="text-[#2b1e16] text-xl" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-[#2b1e16]">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <Link href="/my-profile/edit" className="flex-1">
              <button className="btn w-full bg-[#2b1e16] text-white rounded-full flex items-center gap-2">
                <FiEdit2 />
                Update Information
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-outline rounded-full flex items-center gap-2 border-[#2b1e16] text-[#2b1e16]"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
