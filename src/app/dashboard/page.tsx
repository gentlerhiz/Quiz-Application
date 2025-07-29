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
  const handleStartJsQuiz = () => {
    router.push("/quiz?type=js");
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
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-2 font-sans px-4">
          {/* HTML Quiz Card */}
          <div className="rounded-3xl bg-[#231942] border-2 border-[#635BFF] p-6 sm:p-8 lg:p-10 flex flex-col items-center shadow-xl gap-4 sm:gap-6 lg:gap-7 font-sans min-h-[280px] sm:min-h-[320px]">
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-2 text-center w-full">
              {/* HTML5 Logo */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                <rect width="64" height="64" rx="8" fill="#E34F26"/>
                <path d="M12 8L15.2 52L32 56L48.8 52L52 8H12Z" fill="#E34F26"/>
                <path d="M32 11V53L45.2 50L47.6 11H32Z" fill="#EF652A"/>
                <path d="M32 23H42L42.4 18H32V13H47.5L47.2 15.5L45.5 32H32V27H40.5L40.2 23H32Z" fill="#EBEBEB"/>
                <path d="M32 41.5V46.5L37.5 45L38 41.5H32Z" fill="#EBEBEB"/>
                <path d="M32 32V27H22.5L23 32H32ZM32 46.5V41.5H26L26.5 45L32 46.5Z" fill="#FFF"/>
              </svg>
              <span className="text-[#FFD600] font-extrabold text-lg sm:text-xl lg:text-2xl tracking-wide w-full block leading-tight">Master HTML Fundamentals</span>
            </div>
            <button
              onClick={handleStartHtmlQuiz}
              className="bg-[#635BFF] text-white font-extrabold py-2 sm:py-3 px-6 sm:px-8 w-full rounded-full shadow hover:bg-[#A084E8] transition text-base sm:text-lg tracking-wide border-2 border-[#635BFF] min-h-[48px]"
            >
              Start HTML Quiz
            </button>
          </div>
          {/* CSS Quiz Card */}
          <div className="rounded-3xl bg-[#231942] border-2 border-[#635BFF] p-6 sm:p-8 lg:p-10 flex flex-col items-center shadow-xl gap-4 sm:gap-6 lg:gap-7 font-sans min-h-[280px] sm:min-h-[320px]">
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-2 text-center w-full">
              {/* CSS3 Logo */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                <rect width="64" height="64" rx="8" fill="#1572B6"/>
                <path d="M12 8L15.2 52L32 56L48.8 52L52 8H12Z" fill="#1572B6"/>
                <path d="M32 11V53L45.2 50L47.6 11H32Z" fill="#33A9DC"/>
                <path d="M32 23H42L42.4 18H32V13H47.5L47.2 15.5L45.5 32H32V27H40.5L40.2 23H32Z" fill="#EBEBEB"/>
                <path d="M32 41.5V46.5L37.5 45L38 41.5H32Z" fill="#EBEBEB"/>
                <path d="M32 32V27H22.5L23 32H32ZM32 46.5V41.5H26L26.5 45L32 46.5Z" fill="#FFF"/>
              </svg>
              <span className="text-[#FFD600] font-extrabold text-lg sm:text-xl lg:text-2xl tracking-wide w-full block leading-tight">Style with CSS</span>
            </div>
            <button
              onClick={handleStartCssQuiz}
              className="bg-[#635BFF] text-white font-extrabold py-2 sm:py-3 px-6 sm:px-8 w-full rounded-full shadow hover:bg-[#A084E8] transition text-base sm:text-lg tracking-wide border-2 border-[#635BFF] min-h-[48px]"
            >
              Start CSS Quiz
            </button>
          </div>
          {/* JavaScript Quiz Card */}
          <div className="rounded-3xl bg-[#231942] border-2 border-[#635BFF] p-6 sm:p-8 lg:p-10 flex flex-col items-center shadow-xl gap-4 sm:gap-6 lg:gap-7 font-sans min-h-[280px] sm:min-h-[320px] sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-2 text-center w-full">
              {/* JavaScript Logo */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                <rect width="64" height="64" rx="8" fill="#F7DF1E"/>
                <path d="M32 8C40.8366 8 48 15.1634 48 24V40C48 48.8366 40.8366 56 32 56C23.1634 56 16 48.8366 16 40V24C16 15.1634 23.1634 8 32 8Z" fill="#F7DF1E"/>
                <path d="M36.5 42C37.5 43.5 39 44.5 41.5 44.5C43.5 44.5 44.5 43.5 44.5 42C44.5 40 43 39.5 41 38.5C38.5 37.5 36.5 36 36.5 33C36.5 30.5 38.5 28.5 41.5 28.5C44 28.5 45.5 29.5 46.5 31.5L44 33C43.5 32 42.5 31.5 41.5 31.5C40.5 31.5 40 32 40 33C40 34.5 41 35 43 36C46 37 48.5 38.5 48.5 42C48.5 45.5 45.5 47.5 41.5 47.5C37.5 47.5 35 45.5 34 43L36.5 42Z" fill="#323330"/>
                <path d="M24 43.5C24.5 44.5 25.5 45 26.5 45C28 45 28.5 44 28.5 42.5V28.5H32V42.5C32 46.5 29.5 48 26.5 48C23.5 48 21.5 46.5 20.5 44.5L24 43.5Z" fill="#323330"/>
              </svg>
              <span className="text-[#FFD600] font-extrabold text-lg sm:text-xl lg:text-2xl tracking-wide w-full block leading-tight">Code with JavaScript</span>
            </div>
            <button
              onClick={handleStartJsQuiz}
              className="bg-[#635BFF] text-white font-extrabold py-2 sm:py-3 px-6 sm:px-8 w-full rounded-full shadow hover:bg-[#A084E8] transition text-base sm:text-lg tracking-wide border-2 border-[#635BFF] min-h-[48px]"
            >
              Start JavaScript Quiz
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
