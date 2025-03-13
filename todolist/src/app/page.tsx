"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to To-Do App</h1>
      <p className="mb-4">Please log in or register to start using the app.</p>
      <div className="flex justify-center gap-4">
        <button onClick={() => router.push("/register")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
        <button onClick={() => router.push("/login")} className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
