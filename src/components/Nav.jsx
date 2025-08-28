import { Info, X } from 'lucide-react';
import { useState } from 'react';

const Nav = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <div className="flex flex-row gap-4 items-end">
        <Info 
          size={24} 
          className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out cursor-pointer" 
          onClick={() => setShowAbout((prev) => !prev)}
        />
      </div>

      {/* About Me Modal */}
      {showAbout && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-50">
          <div className="relative flex flex-col p-8 rounded-2xl bg-black/30 border border-gray-700 max-w-lg
                          w-full transition-all duration-300 ease-out animate-fade-in backdrop-blur-md overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>

            {/* Close Button */}
            <div className="flex justify-end text-white relative z-10">
              <button 
                onClick={() => setShowAbout(false)}
                aria-label="Close about section"
                className="p-1 rounded-full text-red-400 hover:text-white hover:bg-red-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative z-10 mt-2">
              <h2 className="text-2xl font-body mb-2 text-white">Hi, I'm 
                <span className="text-3xl font-bold font-accent text-red-500">Chandan</span>
              </h2>
              <p className="font-accent text-base text-gray-300">
                This is a simple interactive counter built with React, TailwindCSS, and Lucide.
              </p>
              <p className="font-accent text-base text-gray-300 mt-2">
                If you like my work, you can check out my other projects.
              </p>
              <div className="mt-6">
                <a 
                  href="https://portfolio-vite-orcin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center text-lg font-semibold rounded-xl
                            bg-red-700 text-white hover:bg-red-600 transition-colors duration-300 px-8 py-4"
                >
                  Visit My Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
