import React from 'react';

// --- Utility Components for consistent styling ---
const SectionWrapper = ({ children, className = '' }) => (
  <section className={`max-w-7xl mx-auto px-6 py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const GoldSubheading = ({ children }) => (
  <span className="text-[#C5A059] font-medium text-sm tracking-widest uppercase mb-4 block">
    {children}
  </span>
);

// --- 1. AboutHero ---
const AboutHero = () => (
  <div className="bg-[#FAF9F6] pt-20 pb-12">
    <SectionWrapper className="flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="md:w-2/3">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
          Global Photography, Fashion & <br /> Creative Awards
        </h1>
        <p className="text-[#C5A059] text-xl mb-6 italic">
          Where Art Meets Vision
        </p>
        <p className="text-gray-600 max-w-xl leading-relaxed">
          Art Vision Awards (AVA) is a world-renowned photography and fashion
          awards platform, celebrating excellence in visual arts, creative
          expression, and contemporary storytelling.
        </p>
      </div>
      <div className="md:w-1/3 border border-gray-200 p-8 rounded-xl bg-white shadow-sm flex justify-between">
        <div>
          <p className="font-bold text-sm">Photography</p>
          <p className="text-xs text-gray-500">Nature, Street, Fashion</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-sm">Creative Direction</p>
          <p className="text-xs text-gray-500">Styling, Visual Arts</p>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

// --- 2. AboutAVA ---
const AboutAVA = () => (
  <SectionWrapper className="flex flex-col md:flex-row gap-16">
    <div className="md:w-2/3">
      <GoldSubheading>About AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-6">Art Vision Awards</h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          The Art Vision Awards (AVA) stands as a beacon for creative minds
          globally. Founded on the principle of recognizing raw talent and
          refined craftsmanship, AVA provides a stage where imagery transcends
          the lens to tell stories that matter.
        </p>
        <p>
          Our jurors comprise some of the most influential voices in the
          industry, ensuring that every submission is evaluated with technical
          precision and artistic sensitivity.
        </p>
      </div>
    </div>
    <div className="md:w-1/3">
      <p className="text-sm font-medium mb-4">Founder</p>
      <div className="border border-gray-100 rounded-2xl p-6 flex items-start gap-4 bg-white shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
          alt="Founder"
          className="w-20 h-20 rounded-lg object-cover grayscale"
        />
        <div>
          <h4 className="font-bold text-gray-900">Founded by Gil Zerbaze</h4>
          <p className="text-xs text-gray-500 mt-2 leading-tight">
            Photographer and Creative Director with a vision to unify the global
            artistic community.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

// --- 3. Location ---
const Location = () => (
  <div className="px-6">
    <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[400px] flex items-center px-12">
      <img
        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        alt="French Riviera"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      <div className="relative z-10 max-w-lg">
        <GoldSubheading>Location</GoldSubheading>
        <h2 className="text-4xl font-serif mb-4">Born on the French Riviera</h2>
        <p className="text-gray-700">
          Drawing inspiration from the timeless elegance of the Mediterranean
          coast, AVA carries the spirit of European art history into the modern
          digital era.
        </p>
      </div>
    </div>
  </div>
);

// --- 4. OurMission ---
const OurMission = () => {
  const categories = [
    'Fashion photography',
    'Fine Art photography',
    'Editorial work',
    'Digital creators',
    'Beauty',
    'Documentary',
    'Styling',
    'Social',
  ];
  return (
    <SectionWrapper>
      <GoldSubheading>Mission</GoldSubheading>
      <h2 className="text-4xl font-serif mb-8">Our mission</h2>
      <p className="text-gray-600 max-w-4xl mb-10 leading-relaxed">
        Our mission is to foster a community where creativity knows no bounds.
        We aim to empower photographers and artists by providing them with
        global visibility and professional recognition. Through our annual
        awards, we set the standard for excellence in the visual arts.
      </p>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-5 py-2 rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 cursor-pointer transition"
          >
            {cat}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 5. WhyArt (Mission Features) ---
const WhyArt = () => {
  const features = [
    {
      title: 'Vision',
      desc: 'Showcasing unique perspectives that challenge the status quo.',
    },
    {
      title: 'Editorial',
      desc: 'Curating stories that blend commercial appeal with artistic integrity.',
    },
    {
      title: 'Expression',
      desc: 'Encouraging artists to use their voice to create impact.',
    },
    {
      title: 'Exceptional Visibility',
      desc: 'Connecting winners with top-tier agencies and galleries.',
    },
    {
      title: 'Emphasis on Story',
      desc: 'Prioritizing the narrative behind the image.',
    },
    {
      title: 'Styling',
      desc: 'Celebrating the art of visual composition and aesthetics.',
    },
  ];
  return (
    <SectionWrapper>
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-12">Why Art Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-8 border border-gray-100 rounded-xl bg-[#FDFDFD]"
          >
            <h3 className="font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 6. OurCoreValues ---
const OurCoreValues = () => {
  const values = [
    { title: 'Vision', desc: 'Fostering an environment of creative freedom.' },
    {
      title: 'Emotion',
      desc: 'Valuing art that moves the soul and sparks conversation.',
    },
    {
      title: 'Global',
      desc: 'Bridging cultures through a universal visual language.',
    },
    {
      title: 'Styling',
      desc: 'Excellence in presentation and aesthetic detail.',
    },
  ];
  return (
    <SectionWrapper className="bg-gray-50">
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <div key={i} className="p-6 border-l-2 border-[#C5A059] bg-white">
            <h4 className="font-bold mb-2">{v.title}</h4>
            <p className="text-xs text-gray-500">{v.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 7. PhotoCompetition ---
const PhotoCompetition = () => (
  <SectionWrapper className="flex flex-col md:flex-row gap-12 items-center">
    <div className="md:w-2/3">
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-4xl font-serif mb-6">
        More Than an International Photo Competition
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Beyond the accolades, AVA is a global movement. We host exhibitions in
        major art capitals, publish annual catalogs of winning works, and
        provide a network for artists to collaborate across borders. It is a
        home for the bold, the visionary, and the storytellers of tomorrow.
      </p>
    </div>
    <div className="md:w-1/3 flex gap-4">
      <img
        src="https://images.unsplash.com/photo-1554941068-a252680d25d9?w=400&h=500&fit=crop"
        className="w-1/2 h-64 object-cover rounded-xl"
        alt="Gallery 1"
      />
      <img
        src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&h=500&fit=crop"
        className="w-1/2 h-64 object-cover rounded-xl mt-8"
        alt="Gallery 2"
      />
    </div>
  </SectionWrapper>
);

// --- MAIN PAGE ---
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
      <AboutHero />
      <AboutAVA />
      <Location />
      <OurMission />
      <WhyArt />
      <OurCoreValues />
      <PhotoCompetition />
    </div>
  );
}
