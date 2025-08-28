import Nav from '../components/Nav';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-10 text-center">
        <h1 className="font-accent text-4xl sm:text-5xl font-bold tracking-tight">
          Counter App
        </h1>
        <p className="text-neutral-400 font-mono mt-2 text-sm sm:text-base">
          A simple interactive counter with reset functionality
        </p>
      </header>

      {/*Nav*/}
      <div className="flex justify-center">
        <nav>
          <Nav />
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        {children}
      </main>

      {/* Footer (Optional for balance) */}
      <footer className="font-title py-4 text-center text-xs text-neutral-500">
        Built with React + Tailwind + Lucide
      </footer>
    </div>
  );
};

export default MainLayout;
