"use client";
import React, { useState, useEffect } from "react";
import { htmlQuestions } from "./htmlQuestions";
import { cssQuestions } from "./cssQuestions";

type QuizType = "html" | "css";
interface QuizAppProps {
  type?: QuizType;
}

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
export default function QuizApp({ type = "html" }: QuizAppProps) {
  const questionPool = type === "css" ? cssQuestions : htmlQuestions;
  const [questions, setQuestions] = useState(() => shuffleArray(questionPool).slice(0, 20));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("studentUser");
    if (user) setUsername(user);
  }, []);

  function handleOption(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === questions[current].answer) setScore(score + 1);
    setSelected(null);
    if (current < 19) setCurrent(current + 1);
    else setShowResult(true);
  }

  function handleRestart() {
    setQuestions(shuffleArray(questionPool).slice(0, 20));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div className="max-w-lg w-full mx-auto p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl text-center flex flex-col items-center gap-6 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2 drop-shadow">Quiz Complete!</h2>
        <div className="w-full flex flex-col items-center">
          <div className="text-lg text-gray-700 dark:text-gray-200 mb-2">{username ? `Well done, ${username}!` : "Your score:"}</div>
          <div className="text-4xl font-black text-indigo-600 dark:text-indigo-200 mb-4">{score} <span className="text-lg font-medium text-gray-500">/ 20</span></div>
        </div>
        <button className="mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 transition font-semibold text-lg" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="max-w-lg w-full mx-auto p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl flex flex-col gap-6 animate-fade-in font-sans">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 transition-all duration-300"
          style={{ width: `${((current + 1) / 20) * 100}%` }}
        />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">Question {current + 1} of 20</span>
        <span className="text-sm text-gray-400">Score: {score}</span>
      </div>
      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 min-h-[64px] flex items-center justify-center text-center font-sans">
        {q.question}
      </div>
      <div className="grid gap-4 font-sans">
        {q.options.map((opt: string, idx: number) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              className={`w-full border-2 rounded-xl px-5 py-3 text-lg text-left font-medium transition-all duration-200
                ${isSelected ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-500 scale-[1.03] shadow-lg" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 hover:dark:bg-gray-700 hover:border-indigo-300"}
                ${selected !== null && !isSelected ? "opacity-60" : ""}
              `}
              onClick={() => handleOption(idx)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <button
        className="mt-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleNext}
        disabled={selected === null}
      >
        {current === 19 ? "Finish" : "Next"}
      </button>
    </div>
  );
}
