import React, { useState } from "react";
import { htmlQuestions } from "./htmlQuestions";

function shuffleArray(array: any[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function QuizApp() {
  const [questions, setQuestions] = useState(() => shuffleArray(htmlQuestions).slice(0, 20));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
    setQuestions(shuffleArray(htmlQuestions).slice(0, 20));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="mb-4">Your score: <span className="font-bold">{score} / 20</span></p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">HTML Quiz</h2>
      <div className="mb-2 font-semibold">Question {current + 1} of 20</div>
      <div className="mb-4">{q.question}</div>
      <div className="grid gap-2 mb-4">
        {q.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            className={`border rounded px-4 py-2 text-left ${selected === idx ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"}`}
            onClick={() => handleOption(idx)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
        onClick={handleNext}
        disabled={selected === null}
      >
        {current === 19 ? "Finish" : "Next"}
      </button>
    </div>
  );
}
