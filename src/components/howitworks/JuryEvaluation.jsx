import { FileText, Eye, Award, Palette, BookOpen } from "lucide-react";

const EvaluationCard = ({ item }) => {
  return (
    <div className="flex flex-col items-start text-left bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9F0] rounded-md mb-4">
        <div className="text-[#C4A24C]">{item.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

const evaluationCriteria = [
  {
    id: 1,
    icon: <FileText className="w-5 h-5" />,
    title: "Artistic vision",
    description:
      "How well the work fulfills the artistic intention and captures the emotional response.",
  },
  {
    id: 2,
    icon: <Eye className="w-5 h-5" />,
    title: "Visual impact",
    description:
      "Impact on the viewer, clarity, and effectiveness of visual design.",
  },
  {
    id: 3,
    icon: <Award className="w-5 h-5" />,
    title: "Technical quality",
    description:
      "Execution and craftsmanship, focus, lighting, composition, and exposure.",
  },
  {
    id: 4,
    icon: <Palette className="w-5 h-5" />,
    title: "Creativity",
    description:
      "Originality of concept, creativity, and unique angle or approach.",
  },
  {
    id: 5,
    icon: <BookOpen className="w-5 h-5" />,
    title: "Storytelling & emotion",
    description:
      "Ability to evoke emotions and convey a narrative and an general feelings.",
  },
];

const JuryEvaluation = () => {
  return (
    <div className="w-full py-16 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-normal text-gray-900 mb-2">
            Jury Evaluation
          </h2>
          <p className="text-gray-600 text-sm">
            International jury reviews submissions anonymously based on:
          </p>
        </div>

        {/* Criteria Grid - 3 on top, 2 on bottom */}
        <div className="space-y-6">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evaluationCriteria.slice(0, 3).map((criterion) => (
              <EvaluationCard key={criterion.id} item={criterion} />
            ))}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {evaluationCriteria.slice(3, 5).map((criterion) => (
              <EvaluationCard key={criterion.id} item={criterion} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuryEvaluation;
