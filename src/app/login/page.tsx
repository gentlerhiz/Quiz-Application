"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loginCode, setLoginCode] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (loginCode.trim() === "1212") {
      localStorage.setItem("studentUser", name.trim());
      router.push("/dashboard");
    } else {
      setError("Invalid code. Please enter the login code provided by Practicode.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#18122B] px-4 py-8">
        <div className="flex-1 w-full max-w-2xl flex flex-col items-center justify-center gap-8 mx-auto">
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD600] via-[#635BFF] to-[#A084E8] flex items-center justify-center mb-4 shadow-lg">
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
          <h1 className="text-4xl font-extrabold text-[#B8B4E9] mb-2 text-center tracking-tight">Practicode HTML Quiz</h1>
          <p className="text-lg text-[#CFCBFF] text-center max-w-xl mb-2 font-medium">Enter the code provided by Practicode Academy to access your personalized HTML quiz dashboard.</p>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-[#231942]/80 border border-[#635BFF] rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6 px-8 py-8 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold text-center mb-2 text-[#B8B4E9]">Student Login</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-[#635BFF] bg-[#18122B] text-[#CFCBFF] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A084E8] text-lg transition placeholder:text-[#A084E8]"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Login Code"
            className="border-2 border-[#635BFF] bg-[#18122B] text-[#CFCBFF] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A084E8] text-lg transition placeholder:text-[#A084E8]"
            value={loginCode}
            onChange={e => setLoginCode(e.target.value)}
          />
          {error && <div className="text-[#FFB4B4] text-sm text-center font-medium">{error}</div>}
          <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
            <button
              type="submit"
              className="flex-1 bg-[#635BFF] hover:bg-[#A084E8] text-white font-bold py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#A084E8] transition text-lg"
            >
              Login
            </button>
            <a
              href="https://wa.me/2349030578667?text=Hello%2C%20I%20want%20to%20request%20for%20my%20Practicode%20Quiz%20access%20code."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#FFD600] hover:bg-[#FFE066] text-[#18122B] font-bold py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#FFD600] transition text-lg flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block mr-1"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.2-7.2c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.2 0-.52.07-.8.36-.28.28-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.16.15.21 2.15 3.29 5.22 4.48.73.31 1.3.5 1.75.64.74.24 1.41.21 1.94.13.59-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
              Request Code
            </a>
          </div>
        </form>
        <div className="mt-8 w-full max-w-md mx-auto rounded-2xl bg-[#231942]/60 border border-[#635BFF] p-6 flex flex-col items-center shadow-lg">
          <h3 className="text-xl font-bold text-[#B8B4E9] mb-4">Why Practicode Quiz?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex items-center gap-3 bg-[#18122B]/80 rounded-xl p-4 border border-[#635BFF]/30">
              <span className="text-2xl">🎯</span>
              <span className="text-[#FFD600] font-semibold">20 new HTML questions</span>
            </div>
            <div className="flex items-center gap-3 bg-[#18122B]/80 rounded-xl p-4 border border-[#635BFF]/30">
              <span className="text-2xl">⚡</span>
              <span className="text-[#CFCBFF] font-semibold">Instant feedback & scoring</span>
            </div>
            <div className="flex items-center gap-3 bg-[#18122B]/80 rounded-xl p-4 border border-[#635BFF]/30">
              <span className="text-2xl">🧑‍💻</span>
              <span className="text-[#CFCBFF] font-semibold">Designed for students</span>
            </div>
            <div className="flex items-center gap-3 bg-[#18122B]/80 rounded-xl p-4 border border-[#635BFF]/30">
              <span className="text-2xl">🌙</span>
              <span className="text-[#CFCBFF] font-semibold">Modern, distraction-free UI</span>
            </div>
          </div>
        </div>

        {/* Monetization/Benefits Section */}
        {/* Unlock Full Access Section - Full Width, Modern, No Gradient */}
        <section className="w-full flex justify-center items-center py-12 px-2 sm:px-0 bg-[#18122B]">
          <div className="w-[90vw] max-w-5xl bg-[#231942] border-2 border-[#FFD600] rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 flex flex-col items-start md:items-start gap-4">
              <h2 className="text-4xl font-extrabold text-[#FFD600] mb-2 leading-tight">Unlock Full Access</h2>
              <p className="text-lg text-[#CFCBFF] max-w-xl font-medium mb-2">Get access to <span className="font-bold text-[#FFD600]">200+ HTML & CSS questions</span>, detailed explanations, and all future updates. Practice, learn, and master web development with Practicode Academy.</p>
              <ul className="text-[#B8B4E9] text-base font-medium space-y-2 mb-2">
                <li>✔️ 200+ handpicked HTML & CSS questions</li>
                <li>✔️ Detailed explanations for every answer</li>
                <li>✔️ Lifetime access to all future updates</li>
                <li>✔️ Priority support via WhatsApp</li>
              </ul>
              <a
                href="https://wa.me/2348167352512?text=I%20want%20to%20unlock%20full%20access%20to%20the%20HTML%20%26%20CSS%20Quiz%20App!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-extrabold py-3 px-8 rounded-full shadow hover:bg-[#128C7E] transition text-lg tracking-wide border-2 border-[#25D366] flex items-center gap-2 mt-2"
                style={{ width: 'fit-content', minWidth: '180px' }}
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-1.98 0-3.91-.52-5.6-1.5l-.4-.23-4.13 1.33 1.36-4.02-.26-.41A10.97 10.97 0 0 1 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.13-6.19c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.09-.34-.17-1.44-.53-2.74-1.7-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.44-.03-.62-.09-.18-.77-1.85-1.06-2.54-.28-.68-.57-.58-.78-.59-.2-.01-.45-.01-.7-.01-.25 0-.65.09-.99.43-.34.34-1.31 1.28-1.31 3.13 0 1.85 1.34 3.64 1.53 3.89.19.25 2.65 4.05 6.43 5.5.9.38 1.6.6 2.15.77.91.29 1.74.25 2.39.16.73-.11 2.03-.82 2.31-1.61.28-.79.28-1.46.19-1.61-.09-.15-.31-.22-.66-.39z"/></svg>
                Request Code
              </a>
            </div>
            <div className="flex-1 flex justify-center items-center">
              {/* Illustration or Icon */}
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="180" height="180" rx="36" fill="#FFD600" fillOpacity="0.08"/>
                <rect x="30" y="40" width="120" height="100" rx="18" fill="#635BFF" fillOpacity="0.18"/>
                <rect x="45" y="55" width="90" height="70" rx="12" fill="#FFD600" fillOpacity="0.18"/>
                <rect x="60" y="70" width="60" height="40" rx="8" fill="#635BFF" fillOpacity="0.25"/>
                <path d="M90 90l15 15M90 90l-15 15" stroke="#FFD600" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="90" cy="90" r="8" fill="#FFD600" stroke="#635BFF" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Slider */}
      {/* <TestimonialsSlider /> */}

        {/* Upcoming Features Section */}
        <div className="mt-8 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-extrabold text-[#FFD600] mb-8 text-center tracking-tight">Upcoming Features</h3>
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-center mb-8">
              {/* CSS Assessment/Quiz */}
              <div className="rounded-2xl bg-[#231942]/80 border-2 border-[#635BFF] p-8 flex flex-col items-center shadow-xl gap-4 text-center w-full max-w-xs mx-auto">
                <span className="text-6xl mb-2">
                  {/* CSS3 SVG Icon */}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#264DE4"/><path d="M14 40L11 8h26l-3 32-10 3-10-3z" fill="#2965F1"/><path d="M24 39l8.1-2.3 2.6-29.2H24V39z" fill="#264DE4"/><path d="M24 22.1h-4.1l-.3-3.3H24V15h-7.7l.1 1.2.7 7.7H24v-1.8zm0 7.2h-3.7l-.2-2.2H24v-2.1h-6.2l.2 2.2.6 6.7H24v-2.1zm0 0v2.1h3.7l.1-1.1.2-2.2H24zm0-7.2v1.8h3.7l.1-1.1.2-2.2H24z" fill="#EBEBEB"/></svg>
                </span>
                <span className="text-lg font-bold text-[#FFD600]">CSS Assessment/Quiz</span>
              </div>
              {/* JavaScript, React, Next.js */}
              <div className="rounded-2xl bg-[#231942]/80 border-2 border-[#635BFF] p-8 flex flex-col items-center shadow-xl gap-4 text-center w-full max-w-xs mx-auto">
                <span className="text-6xl mb-2">
                  {/* JavaScript SVG Icon */}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#F7DF1E"/><text x="12" y="34" font-size="20" font-family="Arial, Helvetica, sans-serif" fill="#222">JS</text></svg>
                </span>
                <span className="text-lg font-bold text-[#FFD600]">JavaScript, React, Next.js</span>
              </div>
              {/* SQL, Python, and more */}
              <div className="rounded-2xl bg-[#231942]/80 border-2 border-[#635BFF] p-8 flex flex-col items-center shadow-xl gap-4 text-center w-full max-w-xs mx-auto">
                <span className="text-6xl mb-2">
                  {/* Database SVG Icon */}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="12" rx="16" ry="7" fill="#4F8DB3"/><rect x="8" y="12" width="32" height="24" rx="16" fill="#3572A5"/><ellipse cx="24" cy="36" rx="16" ry="7" fill="#4F8DB3"/></svg>
                </span>
                <span className="text-lg font-bold text-[#FFD600]">SQL, Python, and more</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full justify-center">
              {/* Progress tracking & leaderboards */}
              <div className="rounded-2xl bg-[#231942]/80 border-2 border-[#635BFF] p-8 flex flex-col items-center shadow-xl gap-4 text-center w-full max-w-xs mx-auto">
                <span className="text-6xl mb-2">
                  {/* Leaderboard SVG Icon */}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="28" width="8" height="12" rx="2" fill="#FFD600"/><rect x="20" y="16" width="8" height="24" rx="2" fill="#FFD600"/><rect x="32" y="22" width="8" height="18" rx="2" fill="#FFD600"/></svg>
                </span>
                <span className="text-lg font-bold text-[#FFD600]">Progress tracking & leaderboards</span>
              </div>
              {/* Mobile app version */}
              <div className="rounded-2xl bg-[#231942]/80 border-2 border-[#635BFF] p-8 flex flex-col items-center shadow-xl gap-4 text-center w-full max-w-xs mx-auto">
                <span className="text-6xl mb-2">
                  {/* Mobile SVG Icon */}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="12" y="6" width="24" height="36" rx="6" fill="#635BFF"/><rect x="18" y="38" width="12" height="2" rx="1" fill="#FFD600"/></svg>
                </span>
                <span className="text-lg font-bold text-[#FFD600]">Mobile app version</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo View Section */}
        <div className="mt-8 w-full max-w-md mx-auto rounded-2xl bg-[#231942]/80 border border-[#635BFF] p-6 flex flex-col items-center shadow-lg">
          <h3 className="text-xl font-bold text-[#B8B4E9] mb-4">See a Demo</h3>
          <div className="w-full bg-white/90 dark:bg-gray-900/90 rounded-xl shadow p-4 flex flex-col gap-4">
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 transition-all duration-300" style={{ width: '20%' }} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Question 1 of 20</span>
              <span className="text-sm text-gray-400">Score: 0</span>
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 min-h-[48px] flex items-center justify-center text-center">
              What does HTML stand for?
            </div>
            <div className="grid gap-2">
              <button className="w-full border-2 rounded-xl px-4 py-2 text-base text-left font-medium bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 hover:dark:bg-gray-700 hover:border-indigo-300 transition">Hyper Text Markup Language</button>
              <button className="w-full border-2 rounded-xl px-4 py-2 text-base text-left font-medium bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 hover:dark:bg-gray-700 hover:border-indigo-300 transition">Home Tool Markup Language</button>
              <button className="w-full border-2 rounded-xl px-4 py-2 text-base text-left font-medium bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 hover:dark:bg-gray-700 hover:border-indigo-300 transition">Hyperlinks and Text Markup Language</button>
              <button className="w-full border-2 rounded-xl px-4 py-2 text-base text-left font-medium bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 hover:dark:bg-gray-700 hover:border-indigo-300 transition">Hyperlinking Text Mark Language</button>
            </div>
            <button className="mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 transition font-semibold text-base">Next</button>
          </div>
        </div>
      </div>
        </div>
      <footer className="w-full bg-gradient-to-r from-[#231942] via-[#2d2170] to-[#231942] border-t border-[#635BFF] py-6 flex flex-col items-center justify-center text-[#CFCBFF] text-base font-semibold shadow-lg mt-8 relative z-10 gap-1">
        <span className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="inline-block -mt-0.5"><path d="M10 18s-6-4.35-6-8.5A4.5 4.5 0 0 1 10 5a4.5 4.5 0 0 1 6 4.5C16 13.65 10 18 10 18z" fill="#FFD600" stroke="#635BFF" strokeWidth="1.2"/></svg>
          <span>&copy; {new Date().getFullYear()} <span className="text-[#FFD600] font-bold">Practicode Global Consult</span>. All rights reserved.</span>
        </span>
        <span className="text-[#B8B4E9] text-sm font-normal mt-1 text-center">Empowering students and professionals with practical coding skills and modern web tools.</span>
      </footer>
    </>
  );
}