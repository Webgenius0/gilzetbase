import { useState } from "react";
import { toast } from "react-hot-toast";

const MOCK_CANDIDATES = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    photoUrl: `https://picsum.photos/400/600?random=${i + 10}`,
    category: ["Digital Art", "Oil Painting", "Photography"][i % 3],
}));

export default function JuryDashboard() {
    const [candidates, setCandidates] = useState(MOCK_CANDIDATES);
    const [votedCandidates, setVotedCandidates] = useState({});

    const handleVote = (id, score) => {
        setVotedCandidates((prev) => ({
            ...prev,
            [id]: score,
        }));
        toast.success("Vote recorded successfully!");
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Voting Dashboard</h1>
                <p className="text-gray-500 mt-2">
                    Review the candidate submissions below. Please vote based solely on the visual merit of the work.
                    Candidate names are hidden to ensure anonymity.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {candidates.map((candidate) => (
                    <div
                        key={candidate.id}
                        className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        {/* Image Container */}
                        <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                            <img
                                src={candidate.photoUrl}
                                alt="Candidate Submission"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Overlay Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                {/* This overlay intentionally kept minimal to focus on the image, 
                     but provides a backdrop for actions if needed in future */}
                            </div>

                            {/* Vote Score Indicator (if voted) */}
                            {votedCandidates[candidate.id] && (
                                <div className="absolute top-3 right-3 bg-[#d4af37] text-white font-bold px-3 py-1 rounded-full shadow-lg z-10">
                                    Is Voted: {votedCandidates[candidate.id]} / 10
                                </div>
                            )}
                        </div>

                        {/* Voting Controls */}
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
                                    {candidate.category}
                                </span>
                                <span className="text-xs text-gray-400">ID: #{candidate.id.toString().padStart(4, '0')}</span>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm font-medium text-gray-700">Rate this submission:</p>
                                <div className="flex justify-between gap-1">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                                        <button
                                            key={score}
                                            onClick={() => handleVote(candidate.id, score)}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${votedCandidates[candidate.id] === score
                                                    ? "bg-[#d4af37] text-white scale-110 shadow-md ring-2 ring-offset-2 ring-[#d4af37]"
                                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110"
                                                }`}
                                            title={`Vote ${score}`}
                                        >
                                            {score}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
