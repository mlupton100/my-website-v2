import { createFileRoute } from "@tanstack/react-router";

import { Sidebar } from "../components";

function Home() {
  return (
    <div className="relative flex flex-col md:flex-row h-screen bg-gray-900">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-center flex-1 px-4">
          <div className="w-fit max-w-3xl mx-auto text-center m-4">
            <h1 className="w-fit mb-4 text-3xl md:text-6xl font-bold uppercase bg-clip-text text-indigo-50">
              Martin Lupton
            </h1>
            <div className="h-2 bg-gradient-to-r from-purple-600 to-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
