const EligibilityRules = () => {
  const eligibilityItems = [
    "Must be 18 years or older to participate.",
    "Must be 18 years or older to participate.",
    "Must be 18 years or older to participate.",
    "Must be 18 years or older to participate.",
    "Must be 18 years or older to participate.",
    "Must be 18 years or older to participate.",
  ];

  const rulesItems = [
    "Lorem ipsum dolor sit amet consectetur. Diam eleifend ac viverra pharetra proin. Eu commodo consequat cras netus vitae. Condimentum turpis rhoncus aliquam lorem lorem molestie eget. Aliquam ipsum. Nequs adipiscing sodales malesuada eget semper tempor pulvinar placerat. Et magna feugiat dolor turpis et id. Bibendum massa cursus.",
    "Lorem ipsum dolor sit amet consectetur. Diam eleifend ac viverra pharetra proin. Eu commodo consequat cras netus vitae. Condimentum turpis rhoncus aliquam lorem lorem molestie eget. Nequs adipiscing sodales malesuada semper tempor placerat.",
    "Lorem ipsum dolor sit amet consectetur. Diam eleifend ac viverra pharetra proin. Eu commodo consequat cras netus vitae. Condimentum turpis rhoncus aliquam lorem lorem molestie eget. Aliquam ipsum.",
    "Lorem ipsum dolor sit amet consectetur. Diam eleifend ac viverra pharetra proin. Eu commodo consequat cras netus vitae. Condimentum turpis rhoncus aliquam lorem lorem molestie eget.",
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Eligibility Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Eligibility
            </h2>
            <div className="space-y-4">
              {eligibilityItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="text-gray-400 text-sm mt-0.5">•</span>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Rules & Guideline Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Rules & Guideline
            </h2>
            <div className="space-y-4">
              {rulesItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 text-sm mt-1">•</span>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityRules;
