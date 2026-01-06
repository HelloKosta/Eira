'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex flex-col"
      style={{ transition: 'background 1.2s ease' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Логотип: абстрактная снежинка + точка */}
        <div className="relative mb-8">
          <div className="w-24 h-24 flex items-center justify-center">
            {/* Линии снежинки */}
            <div className="absolute w-16 h-0.5 bg-gray-400 rotate-45"></div>
            <div className="absolute w-16 h-0.5 bg-gray-400 -rotate-45"></div>
            <div className="absolute w-0.5 h-16 bg-gray-400"></div>
            <div className="absolute w-0.5 h-16 bg-gray-400 rotate-90"></div>
            {/* Центр — ваш розовый акцент */}
            <div 
              className={`w-3 h-3 rounded-full bg-[#e53e3e] transition-all duration-1000 ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{
                animation: 'pulse 3s infinite'
              }}
            ></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-3">
          Eira
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-md text-center">
          where attention settles.
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm max-w-md w-full">
          <p className="italic text-center text-gray-700">
            Открыл. Задержал дыхание. Остался.
          </p>
        </div>
      </div>

      <footer className="py-6 text-center text-gray-500 text-sm">
        Coming soon • {new Date().getFullYear()}
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
