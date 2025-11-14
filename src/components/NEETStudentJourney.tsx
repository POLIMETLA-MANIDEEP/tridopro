import { useState } from "react";
import {
  TrendingUp,
  Award,
  Calendar,
  Brain,
  Target,
  CheckCircle2,
  AlertCircle,
  Zap,
  Trophy,
  ArrowRight,
  Clock,
  BarChart3,
  Heart,
  Activity,
} from "lucide-react";

const NEETStudentJourney = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timelineHover, setTimelineHover] = useState<number | null>(null);

  // Student Profile
  const studentProfile = {
    name: "Priya Sharma",
    age: 18,
    location: "Jaipur, Rajasthan",
    school: "Delhi Public School",
    startDate: "November 1, 2024",
    examDate: "May 4, 2025",
    dreamCollege: "AIIMS Delhi - MBBS",
    requiredPercentile: "99.9+",
    requiredMarks: "680+/720",
  };

  // Initial Assessment (Day 0)
  const initialAssessment = {
    physics: 88,
    chemistry: 102,
    biology: 156,
    totalMarks: 346,
    neetScore: 346, // Out of 720
    percentile: 91.4,
    weakAreas: [
      "Human Physiology",
      "Modern Physics",
      "Organic Chemistry Reactions",
    ],
    timeAvailable: "6 months (184 days)",
    studyHours: "8-9 hours/day",
    challenges: [
      "Biology memory overload - forgetting details",
      "Physics numerical weakness",
      "Organic reactions confusion",
      "Inconsistent mock scores (320-360 range)",
    ],
  };

  // Monthly Progress Data
  const progressData = [
    {
      month: "Nov '24",
      week: "Week 1-4",
      physics: 88,
      chemistry: 102,
      biology: 156,
      total: 346,
      percentile: 91.4,
      focus: "Q1 High-Yield Topics - Quick Scoring",
      keyWins: [
        "Completed 15 Q1 chapters (Genetics, Ecology, Thermodynamics)",
        "Biology jumped to 172 (+16 marks) - Genetics mastery",
        "First 95+ percentile mock achieved",
        "Created visual memory maps for Biology",
      ],
      studyPattern: "5h Biology + 2h Chemistry + 1.5h Physics + 0.5h revision",
      confidence: 52,
    },
    {
      month: "Dec '24",
      week: "Week 5-9",
      physics: 98,
      chemistry: 118,
      biology: 186,
      total: 402,
      percentile: 95.8,
      focus: "Q1 Completion + Q2 Foundation",
      keyWins: [
        "All Q1 topics secured - base score 402",
        "Biology consistency achieved (180+ every mock)",
        "Organic Chemistry reaction mechanisms clarity",
        "Physics numericals breakthrough",
        "Crossed 400 barrier for first time",
      ],
      studyPattern: "4.5h Biology + 2h Chemistry + 2h Physics + 0.5h tests",
      confidence: 68,
    },
    {
      month: "Jan '25",
      week: "Week 10-13",
      physics: 112,
      chemistry: 132,
      biology: 224,
      total: 468,
      percentile: 97.6,
      focus: "Q2 Deep Dive - Human Physiology & Inorganic",
      keyWins: [
        "Human Physiology mastered (was weakest, now strongest)",
        "Inorganic Chemistry full coverage completed",
        "Physics Electrodynamics + Optics breakthrough",
        "450+ consistently in all mocks",
        "AIIMS previous years - 85% accuracy",
      ],
      studyPattern: "4h Biology + 2.5h Chemistry + 2h Physics + 0.5h analysis",
      confidence: 82,
    },
    {
      month: "Feb '25",
      week: "Week 14-17",
      physics: 124,
      chemistry: 146,
      biology: 252,
      total: 522,
      percentile: 98.8,
      focus: "Q2 Mastery + Speed Optimization",
      keyWins: [
        "First 500+ score achieved",
        "Biology accuracy 94% (was 78% in Nov)",
        "Zero silly mistakes protocol implemented",
        "Revision cycles optimized - 3 rounds completed",
        "Mock timing perfected (3 hours sharp)",
      ],
      studyPattern: "3.5h deep practice + 3h mocks + 1.5h error analysis",
      confidence: 91,
    },
    {
      month: "Mar '25",
      week: "Week 18-21",
      physics: 136,
      chemistry: 158,
      biology: 276,
      total: 570,
      percentile: 99.3,
      focus: "Peak Performance + Q3 Strategic Coverage",
      keyWins: [
        "Consistent 560+ in all mocks",
        "Completed Q3 topics strategically",
        "Biology near-perfect (285+/360 capability)",
        "Created final revision notes (50 pages total)",
        "Mental stamina - 4-hour test sessions comfortable",
      ],
      studyPattern: "2h revision + 4h full mocks + 2h weak area targeting",
      confidence: 96,
    },
    {
      month: "Apr '25",
      week: "Week 22-26",
      physics: 142,
      chemistry: 166,
      biology: 294,
      total: 602,
      percentile: 99.7,
      focus: "Final Sprint - Revision + Exam Mindset",
      keyWins: [
        "Last 5 mocks: 598, 605, 612, 608, 615",
        "Every PYQ from last 10 years solved twice",
        "Q4 chapters strategically skipped (saved 18 days)",
        "Exam hall simulation - time, stress, strategy",
        "Mental preparation peak",
      ],
      studyPattern: "3h rapid revision + 3h mock + 2h PYQ + 1h meditation",
      confidence: 99,
    },
  ];

  // Final Outcome
  const finalOutcome = {
    examDate: "May 4, 2025",
    actualScore: {
      physics: 144,
      chemistry: 168,
      biology: 302,
      total: 614,
    },
    airRank: 412,
    percentile: 99.89,
    stateRank: 8, // Rajasthan
    collegeAdmitted: "AIIMS Delhi - MBBS",
    cutoffScore: 680, // AIIMS typically
    improvement: "+268 marks in 184 days",
    timeInvested: "1,564 hours",
  };

  // TridaPro Strategy Implementation
  const strategyBreakdown = {
    phase1: {
      name: "Foundation Sprint (Days 1-35)",
      approach: "Q1 Domination - High-Yield, Low-Effort Topics",
      chapters: {
        biology: [
          "Genetics & Evolution (Mendelian)",
          "Ecology (Ecosystem)",
          "Reproduction (Human)",
          "Biomolecules (Basics)",
          "Cell Biology (Structure)",
        ],
        chemistry: [
          "Thermodynamics",
          "Mole Concept",
          "Atomic Structure",
          "Chemical Bonding (Basics)",
          "Solutions",
        ],
        physics: [
          "Units & Dimensions",
          "Kinematics",
          "Gravitation",
          "Thermodynamics (Basics)",
        ],
      },
      results: "+56 marks, 91.4% → 95.8% percentile",
    },
    phase2: {
      name: "Mastery Building (Days 36-120)",
      approach: "Q2 Deep Dive - NEET Dominance Topics",
      chapters: {
        biology: [
          "Human Physiology (All systems)",
          "Plant Physiology",
          "Molecular Biology",
          "Biotechnology",
          "Animal Kingdom (Classification)",
        ],
        chemistry: [
          "Organic Chemistry (Full reactions)",
          "Inorganic Chemistry (Complete)",
          "Electrochemistry",
          "Chemical Kinetics",
          "Coordination Compounds",
        ],
        physics: [
          "Electrostatics & Capacitors",
          "Current Electricity",
          "Magnetism & EMI",
          "Optics (Ray + Wave)",
          "Modern Physics (Photoelectric, Nuclear)",
        ],
      },
      results: "+120 marks, 95.8% → 98.8% percentile",
    },
    phase3: {
      name: "Strategic Coverage (Days 121-155)",
      approach: "Q3 Gap Filling + Q4 Selective Skip",
      chapters: {
        covered: [
          "Plant Kingdom (Classification details)",
          "Environmental Issues",
          "Microbes in Human Welfare",
          "Semiconductor Electronics",
        ],
        skipped: [
          "Quantum Mechanics (Advanced)",
          "Nuclear Physics (Derivations)",
          "Organic Name Reactions (Rare)",
          "Experimental Physics (Low weightage)",
        ],
      },
      results: "+48 marks with 30% less effort",
    },
    phase4: {
      name: "Peak Performance (Days 156-184)",
      approach: "Revision + Speed + Mental Strength",
      focus: [
        "30 full-length mocks",
        "All PYQs (2015-2024)",
        "Daily rapid revision (50-page notes)",
        "Exam psychology & stress management",
      ],
      results: "Consistent 600+ scores, zero exam anxiety",
    },
  };

  // Key Interventions by AI
  const aiInterventions = [
    {
      day: 22,
      trigger:
        "Priya was memorizing Biology linearly, forgetting 60% within 3 days",
      action:
        "AI introduced spaced repetition algorithm + visual mind-maps for complex pathways",
      impact:
        "Retention jumped from 40% to 87%, Biology score +24 marks in 2 weeks",
      icon: Brain,
    },
    {
      day: 58,
      trigger:
        "Organic Chemistry reactions causing confusion, 15+ hours spent with 52% accuracy",
      action:
        "AI detected pattern: weak foundation. Prescribed reaction mechanism videos + reagent flashcards",
      impact: "Clarity achieved in 4 days, accuracy improved to 84%",
      icon: Zap,
    },
    {
      day: 94,
      trigger:
        "Human Physiology (highest weightage) showed only 68% accuracy despite 40 hours invested",
      action:
        "AI shifted approach: from passive reading to active diagram drawing + system interconnections",
      impact:
        "Became strongest chapter (92% accuracy), contributed +32 marks alone",
      icon: Heart,
    },
    {
      day: 142,
      trigger:
        "Mock scores plateaued at 550-560, stress increasing with 3 weeks to exam",
      action:
        "AI recommended mental reset: 2-day Q1 Biology sprint (confidence booster) + meditation protocol",
      impact:
        "Scores jumped to 598, then 605, 612 in next mocks. Mental confidence restored",
      icon: Activity,
    },
    {
      day: 168,
      trigger:
        "Attempting to cover all remaining topics (Q4) with 16 days left",
      action:
        "AI flagged inefficiency: 'Skip Q4, focus on revision + mock analysis for maximum ROI'",
      impact:
        "Saved 12 days, achieved 600+ consistency, entered exam fully prepared",
      icon: Target,
    },
  ];

  const comparisonData = {
    traditional: {
      approach: "Linear syllabus completion",
      timeSpent: 1680,
      chapters: 97, // All NEET topics
      marksGained: 214,
      finalScore: 560,
      percentile: 99.1,
      stress: "Very High - syllabus race till last day",
      outcome: "MAMC Delhi (State Quota)",
    },
    tridapro: {
      approach: "Outcome-driven AI sequencing",
      timeSpent: 1564,
      chapters: 78, // Strategic selection
      marksGained: 268,
      finalScore: 614,
      percentile: 99.89,
      stress: "Moderate - clear roadmap, completed revision 3x",
      outcome: "AIIMS Delhi - MBBS",
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden sm:overflow-x-visible bg-linear-to-br from-slate-950 via-rose-950 to-slate-950 text-white p-6">
      {/* Hero Section */}
      <div className="w-full max-w-xs md:w-60 mx-auto mb-8">
        <img
          src="/image1.png"
          alt="NEET Success Banner"
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
      </div>
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-linear-to-r from-rose-600 via-pink-600 to-purple-600 rounded-3xl p-8 shadow-2xl border-2 border-rose-400/50">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                NEET SUCCESS STORY
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                From 91%ile to 99.89%ile in 184 Days
              </h1>
              <p className="text-base md:text-xl text-rose-100 mb-6">
                How {studentProfile.name} conquered NEET and secured AIIMS Delhi
                using TridaPro Super-30
              </p>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Nov 2024 - May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>+268 Marks Improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>AIR 412</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border-2 border-white/20">
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2">
                AIR 412
              </div>
              <div className="text-sm uppercase tracking-wider opacity-90">
                All India Rank
              </div>
              <div className="text-2xl md:text-3xl font-bold text-rose-300 mt-3">
                99.89%ile
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-2 bg-white/5 backdrop-blur rounded-xl p-2 border border-white/10">
          {["overview", "journey", "strategy", "comparison"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-3 sm:px-6 py-3 rounded-lg font-semibold transition-all whitespace-normal wrap-break-word text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Student Profile */}
            <div className="lg:col-span-1 bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Student Profile
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-white/60 mb-1">Name</div>
                  <div className="font-semibold text-lg">
                    {studentProfile.name}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">School</div>
                  <div className="font-semibold">{studentProfile.school}</div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Location</div>
                  <div className="font-semibold">{studentProfile.location}</div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-white/60 mb-1">
                    Dream College
                  </div>
                  <div className="font-semibold text-rose-400">
                    {studentProfile.dreamCollege}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">
                    Required Score
                  </div>
                  <div className="font-semibold">
                    {studentProfile.requiredMarks}
                  </div>
                  <div className="text-sm text-white/60">
                    ({studentProfile.requiredPercentile} percentile)
                  </div>
                </div>
              </div>
            </div>

            {/* Initial vs Final */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 wrap-break-word">
                  The Transformation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                    <div className="text-sm text-red-400 font-semibold mb-4 uppercase">
                      Day 0 - November 1, 2024
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-4xl font-bold mb-1">
                          346<span className="text-xl">/720</span>
                        </div>
                        <div className="text-sm text-white/60">Total Score</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <div className="font-semibold text-2xl">
                            {initialAssessment.physics}
                          </div>
                          <div className="text-white/60">Physics</div>
                          <div className="text-xs text-white/40">/180</div>
                        </div>
                        <div>
                          <div className="font-semibold text-2xl">
                            {initialAssessment.chemistry}
                          </div>
                          <div className="text-white/60">Chemistry</div>
                          <div className="text-xs text-white/40">/180</div>
                        </div>
                        <div>
                          <div className="font-semibold text-2xl">
                            {initialAssessment.biology}
                          </div>
                          <div className="text-white/60">Biology</div>
                          <div className="text-xs text-white/40">/360</div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-red-500/30">
                        <div className="text-3xl font-bold text-red-400">
                          {initialAssessment.percentile}%ile
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
                    <div className="text-sm text-emerald-400 font-semibold mb-4 uppercase">
                      Day 184 - May 4, 2025
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-4xl font-bold mb-1">
                          {finalOutcome.actualScore.total}
                          <span className="text-xl">/720</span>
                        </div>
                        <div className="text-sm text-white/60">Total Score</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <div className="font-semibold text-2xl text-emerald-400">
                            {finalOutcome.actualScore.physics}
                          </div>
                          <div className="text-white/60">Physics</div>
                          <div className="text-xs text-emerald-400">
                            +
                            {finalOutcome.actualScore.physics -
                              initialAssessment.physics}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-2xl text-emerald-400">
                            {finalOutcome.actualScore.chemistry}
                          </div>
                          <div className="text-white/60">Chemistry</div>
                          <div className="text-xs text-emerald-400">
                            +
                            {finalOutcome.actualScore.chemistry -
                              initialAssessment.chemistry}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-2xl text-emerald-400">
                            {finalOutcome.actualScore.biology}
                          </div>
                          <div className="text-white/60">Biology</div>
                          <div className="text-xs text-emerald-400">
                            +
                            {finalOutcome.actualScore.biology -
                              initialAssessment.biology}
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-emerald-500/30">
                        <div className="text-3xl font-bold text-emerald-400">
                          {finalOutcome.percentile}%ile
                        </div>
                        <div className="text-sm text-emerald-400">
                          AIR {finalOutcome.airRank}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Initial Challenges */}
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  Initial Challenges (Day 0)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {initialAssessment.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-sm font-bold text-orange-400">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="text-sm">{challenge}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NEET-Specific Context */}
              <div className="bg-linear-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-400" />
                  NEET Reality Check
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-rose-400 mb-1">
                      50%
                    </div>
                    <div className="text-white/70">
                      Biology weightage in NEET
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      19L
                    </div>
                    <div className="text-white/70">
                      Students appeared (2024)
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">
                      680+
                    </div>
                    <div className="text-white/70">AIIMS cutoff score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journey" && (
          <div className="space-y-6">
            {/* Progress Chart */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 wrap-break-word">
                <TrendingUp className="w-6 h-6 text-rose-400" />
                184-Day NEET Conquest Journey
              </h2>
              <div className="relative h-72 md:h-[400px]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-white/60">
                  <span>720</span>
                  <span>600</span>
                  <span>480</span>
                  <span>360</span>
                  <span>240</span>
                  <span>120</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="absolute left-16 right-0 top-0 bottom-12">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-white/10"
                      style={{ top: `${(i / 6) * 100}%` }}
                    />
                  ))}

                  {/* Data points and lines */}
                  <svg
                    className="w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    {/* Lines */}
                    {progressData.map((data, idx) => {
                      if (idx === progressData.length - 1) return null;
                      const x1 = (idx / (progressData.length - 1)) * 100;
                      const x2 = ((idx + 1) / (progressData.length - 1)) * 100;
                      const y1 = 100 - (data.total / 720) * 100;
                      const y2 =
                        100 - (progressData[idx + 1].total / 720) * 100;

                      return (
                        <line
                          key={idx}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="#f43f5e"
                          strokeWidth="3"
                          className="transition-all duration-300"
                        />
                      );
                    })}

                    {/* Data points */}
                    {progressData.map((data, idx) => {
                      const x = (idx / (progressData.length - 1)) * 100;
                      const y = 100 - (data.total / 720) * 100;

                      return (
                        <g key={idx}>
                          <circle
                            cx={`${x}%`}
                            cy={`${y}%`}
                            r="8"
                            fill="#f43f5e"
                            className="cursor-pointer transition-all duration-300 hover:r-12"
                            onMouseEnter={() => setTimelineHover(idx)}
                            onMouseLeave={() => setTimelineHover(null)}
                          />
                          {timelineHover === idx && (
                            <g>
                              <rect
                                x={`${x}%`}
                                y={`${y - 15}%`}
                                width="120"
                                height="60"
                                fill="#1e293b"
                                stroke="#f43f5e"
                                strokeWidth="2"
                                rx="8"
                                transform="translate(-60, -60)"
                              />
                              <text
                                x={`${x}%`}
                                y={`${y - 15}%`}
                                fill="white"
                                fontSize="14"
                                fontWeight="bold"
                                textAnchor="middle"
                                transform="translate(0, -40)"
                              >
                                {data.month}
                              </text>
                              <text
                                x={`${x}%`}
                                y={`${y - 15}%`}
                                fill="#f43f5e"
                                fontSize="18"
                                fontWeight="bold"
                                textAnchor="middle"
                                transform="translate(0, -20)"
                              >
                                {data.total}/720
                              </text>
                              <text
                                x={`${x}%`}
                                y={`${y - 15}%`}
                                fill="#10b981"
                                fontSize="12"
                                textAnchor="middle"
                                transform="translate(0, -5)"
                              >
                                {data.percentile}%ile
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="absolute left-16 right-0 bottom-0 flex justify-between text-xs text-white/60">
                  {progressData.map((data, idx) => (
                    <span
                      key={idx}
                      className="transform -rotate-45 origin-top-left"
                    >
                      {data.month}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target line */}
              <div className="mt-4 flex items-center gap-2 text-sm">
                <div className="w-16 h-0.5 bg-emerald-400" />
                <span className="text-white/60">
                  Target: 680+ marks (99.9%ile for AIIMS Delhi)
                </span>
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {progressData.map((month, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-rose-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-rose-400">
                        {month.month}
                      </div>
                      <div className="text-sm text-white/60">{month.week}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{month.total}</div>
                      <div className="text-sm text-white/60">marks</div>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-linear-to-r from-rose-500/10 to-purple-500/10 rounded-lg border border-rose-500/30">
                    <div className="text-xs text-rose-400 font-semibold mb-1 uppercase">
                      Focus Area
                    </div>
                    <div className="text-sm font-semibold">{month.focus}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-white/60 mb-2 uppercase">
                      Key Achievements
                    </div>
                    <ul className="space-y-2">
                      {month.keyWins.slice(0, 2).map((win, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{win}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-white/60 mb-1">Percentile</div>
                      <div className="text-lg font-bold text-emerald-400">
                        {month.percentile}%
                      </div>
                    </div>
                    <div>
                      <div className="text-white/60 mb-1">Confidence</div>
                      <div className="text-lg font-bold text-yellow-400">
                        {month.confidence}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subject-wise Progress */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-rose-400" />
                Subject-wise Transformation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Biology */}
                <div className="bg-linear-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-emerald-400" />
                    <div>
                      <div className="text-xl font-bold">Biology</div>
                      <div className="text-xs text-white/60">
                        50% of NEET (360 marks)
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Initial</span>
                      <span className="text-2xl font-bold text-red-400">
                        156/360
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-red-400 h-3 rounded-full"
                        style={{ width: "43%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-white/60">Final</span>
                      <span className="text-2xl font-bold text-emerald-400">
                        302/360
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-emerald-400 h-3 rounded-full"
                        style={{ width: "84%" }}
                      ></div>
                    </div>
                    <div className="pt-3 border-t border-emerald-500/30 text-center">
                      <div className="text-3xl font-bold text-emerald-400">
                        +146
                      </div>
                      <div className="text-xs text-white/60">marks gained</div>
                    </div>
                  </div>
                </div>

                {/* Chemistry */}
                <div className="bg-linear-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-8 h-8 text-yellow-400" />
                    <div>
                      <div className="text-xl font-bold">Chemistry</div>
                      <div className="text-xs text-white/60">
                        25% of NEET (180 marks)
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Initial</span>
                      <span className="text-2xl font-bold text-red-400">
                        102/180
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-red-400 h-3 rounded-full"
                        style={{ width: "57%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-white/60">Final</span>
                      <span className="text-2xl font-bold text-yellow-400">
                        168/180
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-yellow-400 h-3 rounded-full"
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                    <div className="pt-3 border-t border-yellow-500/30 text-center">
                      <div className="text-3xl font-bold text-yellow-400">
                        +66
                      </div>
                      <div className="text-xs text-white/60">marks gained</div>
                    </div>
                  </div>
                </div>

                {/* Physics */}
                <div className="bg-linear-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-xl font-bold">Physics</div>
                      <div className="text-xs text-white/60">
                        25% of NEET (180 marks)
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Initial</span>
                      <span className="text-2xl font-bold text-red-400">
                        88/180
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-red-400 h-3 rounded-full"
                        style={{ width: "49%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-white/60">Final</span>
                      <span className="text-2xl font-bold text-blue-400">
                        144/180
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-blue-400 h-3 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <div className="pt-3 border-t border-blue-500/30 text-center">
                      <div className="text-3xl font-bold text-blue-400">
                        +56
                      </div>
                      <div className="text-xs text-white/60">marks gained</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Interventions Timeline */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />5 Critical AI
                Interventions That Secured AIIMS
              </h3>
              <div className="space-y-4">
                {aiInterventions.map((intervention, idx) => {
                  const Icon = intervention.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6"
                    >
                      <div className="flex gap-4">
                        <div className="shrink-0">
                          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-purple-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-500/20 px-3 py-1 rounded-full text-sm font-semibold">
                              Day {intervention.day}
                            </div>
                            <ArrowRight className="w-4 h-4 text-purple-400" />
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="text-xs text-white/60 mb-1 uppercase">
                                Problem Detected
                              </div>
                              <div className="text-sm">
                                {intervention.trigger}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-purple-400 mb-1 uppercase">
                                AI Action
                              </div>
                              <div className="text-sm font-semibold">
                                {intervention.action}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-emerald-400 mb-1 uppercase">
                                Impact
                              </div>
                              <div className="text-sm text-emerald-400">
                                {intervention.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "strategy" && (
          <div className="space-y-6">
            {/* 4-Phase Strategy */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 wrap-break-word">
                <Target className="w-6 h-6 text-rose-400" />
                TridaPro's 4-Phase NEET Domination Blueprint
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phase 1 */}
                <div className="bg-linear-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-400">
                        {strategyBreakdown.phase1.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {strategyBreakdown.phase1.approach}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs text-emerald-400 font-semibold mb-2 uppercase flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Biology (Priority #1)
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase1.chapters.biology.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-emerald-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-yellow-400 font-semibold mb-2 uppercase">
                        Chemistry
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase1.chapters.chemistry.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-yellow-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-blue-400 font-semibold mb-2 uppercase">
                        Physics
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase1.chapters.physics.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-blue-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-emerald-500/30">
                    <div className="text-lg font-bold text-emerald-400">
                      {strategyBreakdown.phase1.results}
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-linear-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-400">
                        {strategyBreakdown.phase2.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {strategyBreakdown.phase2.approach}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs text-emerald-400 font-semibold mb-2 uppercase">
                        Biology (Depth)
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase2.chapters.biology.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-emerald-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-yellow-400 font-semibold mb-2 uppercase">
                        Chemistry (Complete)
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase2.chapters.chemistry.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-yellow-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-blue-400 font-semibold mb-2 uppercase">
                        Physics (Advanced)
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase2.chapters.physics.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-blue-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-blue-500/30">
                    <div className="text-lg font-bold text-blue-400">
                      {strategyBreakdown.phase2.results}
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-linear-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                    <div>
                      <div className="text-xl font-bold text-amber-400">
                        {strategyBreakdown.phase3.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {strategyBreakdown.phase3.approach}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs text-emerald-400 font-semibold mb-2 uppercase flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Covered Strategically
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase3.chapters.covered.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-emerald-500/20 px-3 py-1 rounded-full text-xs"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-red-400 font-semibold mb-2 uppercase flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Skipped (Q4 Low-ROI Topics)
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {strategyBreakdown.phase3.chapters.skipped.map(
                          (ch, i) => (
                            <span
                              key={i}
                              className="bg-red-500/20 px-3 py-1 rounded-full text-xs line-through opacity-60"
                            >
                              {ch}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-amber-500/30">
                    <div className="text-lg font-bold text-amber-400">
                      {strategyBreakdown.phase3.results}
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl font-bold">
                      4
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-400">
                        {strategyBreakdown.phase4.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {strategyBreakdown.phase4.approach}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {strategyBreakdown.phase4.focus.map((item, i) => (
                        <span
                          key={i}
                          className="bg-purple-500/20 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-purple-500/30">
                    <div className="text-lg font-bold text-purple-400">
                      {strategyBreakdown.phase4.results}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biology-Specific Strategy (NEET's 50%) */}
            <div className="bg-linear-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-emerald-400" />
                The Biology Domination Strategy (50% of NEET = 360 Marks)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm font-semibold text-emerald-400 mb-3">
                    Q1 Topics (Days 1-25)
                  </div>
                  <div className="text-xs text-white/70 mb-2">
                    High marks, easy recall
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>• Genetics (Mendelian)</li>
                    <li>• Reproduction basics</li>
                    <li>• Ecology fundamentals</li>
                    <li>• Cell structure</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="text-lg font-bold text-emerald-400">
                      +48 marks
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm font-semibold text-blue-400 mb-3">
                    Q2 Topics (Days 26-90)
                  </div>
                  <div className="text-xs text-white/70 mb-2">
                    High effort, high weightage
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>• Human Physiology (all systems)</li>
                    <li>• Plant Physiology</li>
                    <li>• Molecular Biology</li>
                    <li>• Biotechnology</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="text-lg font-bold text-blue-400">
                      +82 marks
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm font-semibold text-amber-400 mb-3">
                    Q3/Q4 (Days 91-120)
                  </div>
                  <div className="text-xs text-white/70 mb-2">
                    Strategic coverage/skip
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Classification (brief)</li>
                    <li>✓ Environmental issues</li>
                    <li>✗ Microbe details (skip)</li>
                    <li>✗ Rare taxonomy (skip)</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="text-lg font-bold text-amber-400">
                      +16 marks
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Biology Impact:</span>
                  <span className="text-2xl font-bold text-emerald-400">
                    156 → 302 (+146 marks)
                  </span>
                </div>
              </div>
            </div>

            {/* Time Allocation */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-400" />
                Strategic Time Investment (184 Days)
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">
                      Phase 1: Foundation Sprint
                    </span>
                    <span className="text-emerald-400 font-bold">
                      35 days (19%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-6">
                    <div
                      className="bg-linear-to-r from-emerald-500 to-green-500 h-6 rounded-full flex items-center px-4 text-sm font-bold"
                      style={{ width: "19%" }}
                    >
                      19%
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">
                      Phase 2: Mastery Building
                    </span>
                    <span className="text-blue-400 font-bold">
                      85 days (46%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-6">
                    <div
                      className="bg-linear-to-r from-blue-500 to-indigo-500 h-6 rounded-full flex items-center px-4 text-sm font-bold"
                      style={{ width: "46%" }}
                    >
                      46%
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">
                      Phase 3: Strategic Coverage
                    </span>
                    <span className="text-amber-400 font-bold">
                      35 days (19%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-6">
                    <div
                      className="bg-linear-to-r from-amber-500 to-orange-500 h-6 rounded-full flex items-center px-4 text-sm font-bold"
                      style={{ width: "19%" }}
                    >
                      19%
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">
                      Phase 4: Peak Performance
                    </span>
                    <span className="text-purple-400 font-bold">
                      29 days (16%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-6">
                    <div
                      className="bg-linear-to-r from-purple-500 to-pink-500 h-6 rounded-full flex items-center px-4 text-sm font-bold"
                      style={{ width: "16%" }}
                    >
                      16%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "comparison" && (
          <div className="space-y-6">
            {/* Head-to-Head Comparison */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-rose-400" />
                TridaPro vs Traditional Coaching: The NEET Reality
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Traditional Approach */}
                <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-red-500/20 px-4 py-2 rounded-full text-sm font-bold text-red-400 mb-2">
                      TRADITIONAL COACHING
                    </div>
                    <div className="text-lg text-white/60">
                      Similar Student Profile
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">Approach</div>
                      <div className="font-semibold">
                        {comparisonData.traditional.approach}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">
                          Time Invested
                        </div>
                        <div className="text-2xl font-bold text-red-400">
                          {comparisonData.traditional.timeSpent}h
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">
                          Chapters Done
                        </div>
                        <div className="text-2xl font-bold text-red-400">
                          {comparisonData.traditional.chapters}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">
                        Improvement
                      </div>
                      <div className="text-2xl font-bold text-red-400">
                        +{comparisonData.traditional.marksGained} marks
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">
                        Final Score
                      </div>
                      <div className="text-3xl font-bold text-red-400">
                        {comparisonData.traditional.finalScore}/720
                      </div>
                      <div className="text-sm text-white/60 mt-1">
                        {comparisonData.traditional.percentile}%ile
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">
                        Student Experience
                      </div>
                      <div className="text-sm">
                        {comparisonData.traditional.stress}
                      </div>
                    </div>
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                      <div className="text-xs text-red-400 font-semibold mb-1">
                        COLLEGE ADMITTED
                      </div>
                      <div className="font-bold">
                        {comparisonData.traditional.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* TridaPro Approach */}
                <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-emerald-500/20 px-4 py-2 rounded-full text-sm font-bold text-emerald-400 mb-2">
                      TRIDAPRO SUPER-30
                    </div>
                    <div className="text-lg text-white/60">Priya's Journey</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">Approach</div>
                      <div className="font-semibold">
                        {comparisonData.tridapro.approach}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">
                          Time Invested
                        </div>
                        <div className="text-2xl font-bold text-emerald-400">
                          {comparisonData.tridapro.timeSpent}h
                        </div>
                        <div className="text-xs text-emerald-400">
                          116h saved
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">
                          Chapters Done
                        </div>
                        <div className="text-2xl font-bold text-emerald-400">
                          {comparisonData.tridapro.chapters}
                        </div>
                        <div className="text-xs text-emerald-400">
                          19 skipped
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">
                        Improvement
                      </div>
                      <div className="text-2xl font-bold text-emerald-400">
                        +{comparisonData.tridapro.marksGained} marks
                      </div>
                      <div className="text-xs text-emerald-400">
                        +
                        {comparisonData.tridapro.marksGained -
                          comparisonData.traditional.marksGained}{" "}
                        vs traditional
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">
                        Final Score
                      </div>
                      <div className="text-3xl font-bold text-emerald-400">
                        {comparisonData.tridapro.finalScore}/720
                      </div>
                      <div className="text-sm text-white/60 mt-1">
                        {comparisonData.tridapro.percentile}%ile
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-xs text-white/60 mb-1">
                        Student Experience
                      </div>
                      <div className="text-sm">
                        {comparisonData.tridapro.stress}
                      </div>
                    </div>
                    <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg p-4">
                      <div className="text-xs text-emerald-400 font-semibold mb-1 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        COLLEGE ADMITTED
                      </div>
                      <div className="font-bold text-lg">
                        {comparisonData.tridapro.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-rose-400" />
                </div>
                <div className="text-xl font-bold mb-3">116 Hours Saved</div>
                <div className="text-sm text-white/80">
                  By strategically skipping 19 low-ROI chapters and optimizing
                  study sequence, Priya saved 116 hours - reinvested into
                  Biology mastery and mock tests.
                </div>
              </div>

              <div className="bg-linear-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-xl font-bold mb-3">+54 Marks Edge</div>
                <div className="text-sm text-white/80">
                  TridaPro's outcome-driven sequencing delivered 54 more marks
                  than traditional approach - the exact difference between MAMC
                  and AIIMS Delhi.
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-xl font-bold mb-3">5 AI Interventions</div>
                <div className="text-sm text-white/80">
                  Real-time AI monitoring prevented 5 critical mistakes,
                  including memory technique optimization and stress management
                  during final month.
                </div>
              </div>
            </div>

            {/* The College Difference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold mb-2">MAMC Delhi</div>
                  <div className="text-sm text-white/60">
                    (Traditional Coaching Result)
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Required Score:</span>
                    <span className="font-semibold">555-565 (State Quota)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">College Rank:</span>
                    <span className="font-semibold">#15-20 in India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Infrastructure:</span>
                    <span className="font-semibold">Good (State-level)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">
                      Research Opportunities:
                    </span>
                    <span className="font-semibold">Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">
                      International Exposure:
                    </span>
                    <span className="font-semibold">Moderate</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold mb-2 text-emerald-400">
                    AIIMS Delhi
                  </div>
                  <div className="text-sm text-white/60">(TridaPro Result)</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Required Score:</span>
                    <span className="font-semibold text-emerald-400">
                      680+ (All India)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">College Rank:</span>
                    <span className="font-semibold text-emerald-400">
                      #1 in India
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Infrastructure:</span>
                    <span className="font-semibold text-emerald-400">
                      World-class
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">
                      Research Opportunities:
                    </span>
                    <span className="font-semibold text-emerald-400">
                      Extensive + Global
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">
                      International Exposure:
                    </span>
                    <span className="font-semibold text-emerald-400">
                      Maximum (WHO, NIH tie-ups)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Success Metrics */}
            <div className="bg-linear-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-2 border-yellow-500/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">
                  Dream Achieved: AIIMS Delhi MBBS
                </h3>
                <p className="text-white/70">
                  India's #1 Medical College - The Ultimate Goal
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    AIR 412
                  </div>
                  <div className="text-sm text-white/60">All India Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    99.89%ile
                  </div>
                  <div className="text-sm text-white/60">Percentile</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    614/720
                  </div>
                  <div className="text-sm text-white/60">Total Score</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    184
                  </div>
                  <div className="text-sm text-white/60">Days to AIIMS</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-rose-500 to-pink-500 flex items-center justify-center text-2xl font-bold shrink-0">
                  PS
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-rose-400 mb-4">"</div>
                  <div className="text-lg mb-4 italic">
                    Six months ago, I was scoring 346 and doubting if I could
                    even get a decent state medical college. My biggest problem
                    was Biology - I would memorize everything and forget within
                    days. Traditional coaching kept pushing me to "study
                    harder," but I was already studying 10 hours a day!
                    <br />
                    <br />
                    TridaPro changed my entire approach. The AI detected that my
                    memorization technique was the problem, not my effort.
                    Within 3 weeks of using spaced repetition and visual
                    mind-maps, my Biology retention jumped from 40% to 87%. By
                    focusing on Q1 topics first, I gained confidence quickly
                    instead of drowning in the massive NEET syllabus.
                    <br />
                    <br />
                    The smartest decision was when AI told me to skip certain Q4
                    topics in the final month. Traditional coaching would never
                    say "don't study this" - but TridaPro knew that those 18
                    days were better spent perfecting my strong areas. That
                    decision alone added 40+ marks to my score.
                    <br />
                    <br />
                    Today, I'm at AIIMS Delhi - something I didn't even dare to
                    dream 6 months ago. This isn't just about marks; it's about
                    getting the best medical education in India and opening
                    doors to global research opportunities. Thank you, TridaPro!
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="font-bold text-lg">Priya Sharma</div>
                      <div className="text-sm text-white/60">
                        AIIMS Delhi, MBBS 2025
                      </div>
                      <div className="text-sm text-rose-400">
                        NEET: 614/720 (AIR 412, 99.89%ile)
                      </div>
                    </div>
                    <div className="text-6xl text-white/10">"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Impact */}
            <div className="bg-linear-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-emerald-400" />
                Long-term Career Impact: The AIIMS Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-emerald-400 mb-2">
                    Education Quality
                  </div>
                  <div className="text-white/80">
                    World-class faculty, cutting-edge research facilities,
                    direct exposure to rare medical cases, international guest
                    lectures from Harvard, Johns Hopkins, Oxford
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-emerald-400 mb-2">
                    Career Opportunities
                  </div>
                  <div className="text-white/80">
                    Priority access to MD/MS super-specializations, WHO/ICMR
                    research positions, global medical programs (USA, UK,
                    Australia), premier hospital placements
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-emerald-400 mb-2">
                    Lifetime Advantage
                  </div>
                  <div className="text-white/80">
                    AIIMS alumni network spans globally, higher starting
                    salaries (₹15L+ vs ₹8L avg), respect in medical community,
                    better entrepreneurship opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-linear-to-r from-rose-600 via-pink-600 to-purple-600 rounded-3xl p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Your AIIMS/Top Medical College Journey Starts Here
          </h3>
          <p className="text-base md:text-xl text-rose-100 mb-6">
            Join 15,000+ NEET aspirants who transformed their scores with
            TridaPro Super-30's AI-powered strategy
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-rose-600 px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-rose-100 transition-all shadow-xl w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur border-2 border-white/30 px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all w-full sm:w-auto">
              Watch Success Stories
            </button>
          </div>
          <div className="mt-6 text-sm text-rose-200">
            ✓ No credit card required • ✓ Free Biology mastery module • ✓
            AI-powered assessment
          </div>
        </div>
      </div>
    </div>
  );
};

export default NEETStudentJourney;
