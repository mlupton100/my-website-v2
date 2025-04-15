import { createFileRoute } from "@tanstack/react-router";

import { Sidebar } from "../components";

function Home() {
  return (
    <div className="relative flex h-screen bg-gray-900">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-center flex-1 px-4">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-6xl font-bold text-transparent uppercase bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text">
              Hello
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
