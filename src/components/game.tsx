'use client';
import { useState } from 'react';
import { RotateCcw, Brain } from 'lucide-react';



type Question = {
    id: number;
    question: string;
    options: string[];
    answer: string;
};

const questions: Question[] = [
    {
        id: 1,
        question: "Quelle équipe a remporté le premier match de la saison ?",
        options: ['Pure Mamba', 'Sky Titans', 'The Warriors', 'Wave Storm'],
        answer: 'Pure Mamba',
    },
    {
        id: 2,
        question: "Combien d’équipes participent à la Gravity League ?",
        options: ['4', '5', '6', '8'],
        answer: '6',
    },
    {
        id: 3,
        question: "Quelle équipe porte le logo du serpent ?",
        options: ['Pure Mamba', 'Wolves Shot', 'Sky Titans', 'The Predators'],
        answer: 'Pure Mamba',
    },
    {
        id: 4,
        question: "Quel est le sport joué dans la Gravity League ?",
        options: ['Football', 'Basketball', 'Volley', 'Hockey'],
        answer: 'Basketball',
    },
    {
        id: 5,
        question: "Qui est le meilleur scoreur de la saison ?",
        options: ['Ethan Parker', 'Jaden Williams', 'Marcus Green', 'Liam Johnson'],
        answer: 'Ethan Parker',
    },
    {
        id: 6,
        question: "Quel est le PDG de la GravityLeague ?",
        options: ['Paul Francis', 'Narcisse D', 'Reina G.', 'Sarah H.'],
        answer: 'Narcisse D',
    }

];

export default function GamePage() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);


    const handleNext = () => {
        if (selected && selected === questions[current].answer) {
            setScore(prev => prev + 1); 
        }

        setSelected(null);

        if (current + 1 < questions.length) {
            setCurrent(prev => prev + 1);
        } else {
            setShowResult(true);
        }
    };



    const handlePrev = () => {
        if (current > 0) setCurrent(current - 1);
    };

    const restartQuiz = () => {
        setCurrent(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <section
            className="min-h-screen flex flex-col items-center text-white px-4 sm:px-6 py-12 relative overflow-hidden"
            style={{
                backgroundImage: "url('/images/herosection3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/90 z-0"></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-3xl text-center mt-40 ">
                <h1 className="text-4xl sm:text-5xl font-bold mb-8">
                    
                     📝 GravityLeague Quiz</h1>

                {!showResult ? (
                    <>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                            Question {current + 1} / {questions.length}
                        </h2>
                        <p className="mb-6 text-lg">{questions[current].question}</p>

                        <div className="flex flex-col gap-4 w-full">
                            {questions[current].options.map((option) => (
                                <label
                                    key={`${current}-${option}`} // clé unique pour chaque option et question
                                    className={`cursor-pointer border rounded-lg px-4 py-3 text-left transition-all ${selected === option
                                            ? 'bg-yellow-500 text-black border-yellow-400'
                                            : 'bg-gray-800/70 hover:bg-gray-700/90'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${questions[current].id}`}

                                        value={option}
                                        checked={selected === option}
                                        onChange={() => setSelected(option)}
                                        className="hidden"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handlePrev}
                                disabled={current === 0}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${current === 0
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-black hover:bg-primary/90'
                                    }`}
                            >
                                ← Back
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 rounded-lg font-semibold bg-white text-black hover:bg-primary transition-all"
                            >
                                {current + 1 === questions.length ? 'Finish →' : 'Next →'}
                            </button>
                        </div>
                    </>
                ) : (
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-4xl font-bold mb-6 text-yellow-400 underline"> Résultats</h2>

                            
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
                                <img
                                    src={
                                        score >= 2
                                            ? '/images/icon2.png' 
                                            : '/images/icon1.jpg' 
                                    }
                                    alt="Résultat du quiz"
                                    className="object-contain w-full h-full rounded-full shadow-lg border-4 border-yellow-400"
                                />
                            </div>

                            
                            <p className="text-xl mb-6">
                                Tu as obtenu <span className="text-yellow-400 font-bold">{score}</span> bonne(s) réponse(s)
                                sur {questions.length}.
                            </p>

                            
                            <p className="text-lg mb-8 text-gray-300 italic">
                                {score >= 3
                                    ? "Excellent ! Tu connais bien la Gravity League "
                                    : "Pas grave ! Rejoue et améliore ton score "}
                            </p>

                            {/* Bouton rejouer */}
                            <button
                                onClick={restartQuiz}
                                className=" flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-primary transition-all"
                            >
                              
                                Rejouer 
                                <RotateCcw className="w-5 h-5" />
                            </button>
                        </div>

                )}
            </div>
        </section>
    );
}
