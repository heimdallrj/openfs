import { Settings, BellRing, Home, HardDrive, Images } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen bg-[#F8FAFD]">
      <header className="h-16 px-4 flex items-center">
        <h1 className="text-2xl font-semibold w-56">OpenFS</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 w-96"
        />
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <BellRing />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings />
          </button>
          <img
            src="https://avatars.githubusercontent.com/u/1164024"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="flex h-full">
          <aside className="w-60 p-4 overflow-y-auto">
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 flex gap-2 items-center"
              >
                <Home size={20} /> Home
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 flex gap-2 items-center"
              >
                <HardDrive size={20} /> FS
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 flex gap-2 items-center"
              >
                <Images size={20} /> Photos
              </a>
            </nav>
          </aside>
          <section className="flex-1 bg-white overflow-y-aut rounded-t-xl">
            {children}
          </section>
          <aside className="w-14 p-4 overflow-y-auto">
            <p>x</p>
          </aside>
        </div>
      </main>
    </div>
  );
}
