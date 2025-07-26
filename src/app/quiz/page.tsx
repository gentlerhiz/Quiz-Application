"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import QuizApp from "../QuizApp";
import { useSearchParams } from "next/navigation";

export default function QuizPage() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") === "css" ? "css" : "html";
  useEffect(() => {
    const user = localStorage.getItem("studentUser");
    if (!user) {
      router.replace("/login");
    }
  }, [router]);

  // Navigation handlers
  const handleLogout = () => {
    localStorage.removeItem("studentUser");
    router.replace("/login");
  };
  const handleDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#18122B] px-4 py-8">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-8">
          {/* Navigation Buttons */}
          <div className="w-full flex justify-center mb-2">
            <div className="flex justify-between items-center w-full max-w-xl bg-[#231942]/80 border-2 border-[#635BFF] rounded-2xl px-12 py-3 shadow-lg">
              <button
                onClick={handleDashboard}
                className="flex items-center gap-2 bg-[#635BFF] hover:bg-[#A084E8] text-white font-bold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#A084E8] transition text-base"
              >
                {/* Left Arrow Icon */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-[#FFD600] hover:bg-[#FFE066] text-[#231942] font-bold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#FFD600] transition text-base"
              >
                {/* Avatar Icon */}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B8B4E9] text-[#635BFF] font-bold text-base">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#635BFF"/><rect x="4" y="16" width="16" height="6" rx="3" fill="#635BFF"/></svg>
                </span>
                Logout
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#635BFF] flex items-center justify-center mb-4 shadow-lg">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.1"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <h1 className="text-4xl font-extrabold text-[#B8B4E9] mb-2 text-center tracking-tight">
              Practicode {type === "css" ? "CSS" : "HTML"} Quiz
            </h1>
            <p className="text-lg text-[#CFCBFF] text-center max-w-xl mb-2 font-medium">
              Answer 20 random {type === "css" ? "CSS" : "HTML"} questions. Good luck!
            </p>
          </div>
          <div className="w-full max-w-xl">
            <QuizApp type={type} />
          </div>
        </div>
      </div>
    </>
  );
}
