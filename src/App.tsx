import { useState } from "react";
import { questionArr } from "./data/Questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [hits, setHits] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const selectAnswer = (a: string) => {
    //TODO: se a resposta for correta, então acrescente 1 a setCurrentQuestion
    if (questionArr[currentQuestionIndex].corret === a) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setHits(hits + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setHits(hits);
      }, 500);
    }
    //TODO: se o game acabar então mostre uma tela diferente

    if (currentQuestionIndex === questionArr.length - 1) {
      setShowResult(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#161a24]">
      {showResult ? (
        <p className="text-white font-semibold text-4xl">
          Parabéns, você acertou {hits} de {questionArr.length}
        </p>
      ) : (
        <div className="flex flex-col justify-around w-full max-w-5xl h-full text-white px-6 py-28">
          <div className="flex items-center justify-between font-semibold ">
            <h1 className="text-3xl font-semibold">👋 QuizTime </h1>
            {/* RESPOSTAS CERTAS */}
            <div className="w-20 flex items-center justify-center gap-2 p-2 text-center rounded-md border-2 border-green-200 text-green-400 text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#ABF770"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {hits}
            </div>
          </div>
          <div className="text-center flex flex-col gap-28 items-center">
            {/* ALTERNATIVAS */}
            <p className="font-semibold text-4xl">
              {questionArr[currentQuestionIndex].question}
            </p>

            <div className="flex justify-center gap-4 flex-wrap md:gap-10">
              {questionArr[currentQuestionIndex].alternativas.map(
                (item, index) => (
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 w-52 border border-gray-400 rounded shadow"
                    onClick={() => selectAnswer(item)}
                    key={index}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-semibold">
              <p>
                {currentQuestionIndex}/{questionArr.length}
              </p>
            </div>

            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700">
              <p
                className="font-semibold text-xs text-gray-400 cursor-pointer hover:text-white"
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
              >
                NEXT
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
