"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("studentUser");
    if (!user) {
      router.replace("/login");
    } else {
      setUsername(user);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("studentUser");
    router.replace("/login");
  };

  const handleStartHtmlQuiz = () => {
    router.push("/quiz?type=html");
  };
  const handleStartCssQuiz = () => {
    router.push("/quiz?type=css");
  };

  return (
    <div className="min-h-screen bg-[#18122B] px-4 py-8 relative overflow-hidden">
      {/* Transparent lines background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="lines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <rect x="0" y="0" width="20" height="40" fill="none"/>
              <line x1="0" y1="0" x2="0" y2="40" stroke="#fff" strokeOpacity="0.04" strokeWidth="4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>
      {/* Navbar */}
      <nav className="w-full max-w-2xl mx-auto flex items-center justify-between bg-[#231942]/80 border border-[#635BFF] rounded-2xl shadow-lg px-6 py-3 mb-8 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD600] via-[#635BFF] to-[#A084E8] flex items-center justify-center shadow">
            <svg width="28" height="28" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" fill="#fff" fillOpacity="0.12" />
              <circle cx="22" cy="22" r="16" fill="#FFD600" fillOpacity="0.18" />
              <circle cx="22" cy="22" r="12" fill="#635BFF" fillOpacity="0.18" />
              <path d="M12 22h20" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M22 12a10 10 0 0 1 0 20a10 10 0 0 1 0-20z" stroke="#635BFF" strokeWidth="2.5" fill="#fff" fillOpacity="0.7"/>
              <path d="M22 12c2.5 3.5 4 7.5 4 10s-1.5 6.5-4 10c-2.5-3.5-4-7.5-4-10s1.5-6.5 4-10z" stroke="#A084E8" strokeWidth="2.5" fill="#FFD600" fillOpacity="0.7"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-[#FFD600]">Welcome, {username}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-[#635BFF] hover:bg-[#A084E8] text-white font-semibold px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#A084E8] transition text-base"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.1"/><path d="M15 12H9M12 9v6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          Logout
        </button>
      </nav>
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD600] via-[#635BFF] to-[#A084E8] flex items-center justify-center mb-2 shadow-lg">
            {/* Colored web icon with yellow accent */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" fill="#fff" fillOpacity="0.12" />
              <circle cx="22" cy="22" r="16" fill="#FFD600" fillOpacity="0.18" />
              <circle cx="22" cy="22" r="12" fill="#635BFF" fillOpacity="0.18" />
              <path d="M12 22h20" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M22 12a10 10 0 0 1 0 20a10 10 0 0 1 0-20z" stroke="#635BFF" strokeWidth="2.5" fill="#fff" fillOpacity="0.7"/>
              <path d="M22 12c2.5 3.5 4 7.5 4 10s-1.5 6.5-4 10c-2.5-3.5-4-7.5-4-10s1.5-6.5 4-10z" stroke="#A084E8" strokeWidth="2.5" fill="#FFD600" fillOpacity="0.7"/>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-[#B8B4E9] mb-2 text-center tracking-tight">Welcome, <span className="text-[#FFD600]">{username}</span>!</h1>
          <p className="text-lg text-[#CFCBFF] text-center max-w-xl mb-2 font-medium">Ready to shine? Start a new quiz, track your progress, and master HTML with Practicode Academy.</p>
        </div>
        <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2 font-sans">
          {/* HTML Quiz Card */}
          <div className="rounded-3xl bg-[#231942] border-2 border-[#635BFF] p-10 flex flex-col items-center shadow-xl gap-7 font-sans">
            <div className="flex flex-col items-center gap-3 mb-2 text-center w-full">
              <span className="text-6xl mx-auto">🎯</span>
              <span className="text-[#FFD600] font-extrabold text-2xl tracking-wide w-full block">20 new HTML questions</span>
            </div>
            <button
              onClick={handleStartHtmlQuiz}
              className="bg-[#635BFF] text-white font-extrabold py-3 px-8 w-full rounded-full shadow hover:bg-[#A084E8] transition text-lg tracking-wide border-2 border-[#635BFF]"
            >
              Start HTML Quiz
            </button>
          </div>
          {/* CSS Quiz Card */}
          <div className="rounded-3xl bg-[#231942] border-2 border-[#635BFF] p-10 flex flex-col items-center shadow-xl gap-7 font-sans">
            <div className="flex flex-col items-center gap-3 mb-2 text-center w-full">
              <span className="text-6xl mx-auto">🎨</span>
              <span className="text-[#FFD600] font-extrabold text-2xl tracking-wide w-full block">20 new CSS questions</span>
            </div>
            <button
              onClick={handleStartCssQuiz}
              className="bg-[#635BFF] text-white font-extrabold py-3 px-8 w-full rounded-full shadow hover:bg-[#A084E8] transition text-lg tracking-wide border-2 border-[#635BFF]"
            >
              Start CSS Quiz
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gradient-to-r from-[#231942] via-[#2d2170] to-[#231942] border-t border-[#635BFF] py-6 flex flex-col items-center justify-center text-[#CFCBFF] text-base font-semibold shadow-lg mt-8 relative z-10 gap-1">
        <span className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="inline-block -mt-0.5"><path d="M10 18s-6-4.35-6-8.5A4.5 4.5 0 0 1 10 5a4.5 4.5 0 0 1 6 4.5C16 13.65 10 18 10 18z" fill="#FFD600" stroke="#635BFF" strokeWidth="1.2"/></svg>
          <span>&copy; {new Date().getFullYear()} <span className="text-[#FFD600] font-bold">Practicode Global Consult</span>. All rights reserved.</span>
        </span>
        <span className="text-[#B8B4E9] text-sm font-normal mt-1 text-center">Empowering students and professionals with practical coding skills and modern web tools.</span>
      </footer>
    </div>
  );
}
