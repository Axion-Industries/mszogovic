import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  BookOpen, 
  Calculator,
  FileText,
  ExternalLink,
  Calendar,
  Target,
  User
} from "lucide-react";

export default function Algebra2Resources() {
  const [selectedQuarter, setSelectedQuarter] = useState("quarter1");

  const fourPillarApproach = [
    {
      title: "SOLVE EQUATIONS",
      description: "Algebraic techniques for finding solutions",
      color: "bg-edu-blue"
    },
    {
      title: "SOLVE INEQUALITIES", 
      description: "Graphical and algebraic methods for inequality solutions",
      color: "bg-edu-green"
    },
    {
      title: "ANALYZE GRAPHS",
      description: "Properties, transformations, domain, range, and end behavior",
      color: "bg-edu-accent"
    },
    {
      title: "APPLICATIONS",
      description: "Real-world modeling and problem-solving",
      color: "bg-purple-500"
    }
  ];

  const primaryResources = [
    { name: "FlippedMath Algebra 2 Common Core", url: "https://algebra2cc.flippedmath.com/" },
    { name: "FlippedMath AP Precalculus", url: "https://precalculus.flippedmath.com/ap-precalc.html" },
    { name: "Khan Academy Algebra 2", url: "https://www.khanacademy.org/math/algebra2" },
    { name: "Khan Academy Trigonometry", url: "https://www.khanacademy.org/math/trigonometry" }
  ];

  const quarterData = {
    quarter1: {
      title: "Quarter 1: Foundation Functions - Linear, Quadratic, and Polynomial",
      weeks: "Aug 14 - Oct 17",
      focus: "Linear Functions, Quadratic Functions, Polynomial Functions",
      concepts: [
        {
          week: "Week 1 (Aug 14-16)",
          topic: "Unit 1: Linear Functions Review",
          fourPillar: "Graphs: Linear transformations and families",
          resources: ["FlippedMath 5.1-5.2 Transformations"],
          notes: "Short week - School starts"
        },
        {
          week: "Week 2 (Aug 19-23)",
          topic: "Linear Functions (4-Pillar Approach)",
          fourPillar: "Equations & Inequalities: Systems and graphical solutions",
          resources: ["Khan Academy: Linear Functions"]
        },
        {
          week: "Week 3 (Aug 26-30)",
          topic: "Linear graphs, slopes, transformations & Linear modeling applications",
          fourPillar: "Graphs & Applications: Rate of change and real-world contexts",
          resources: ["Professor Leonard: Linear Functions"]
        },
        {
          week: "Week 4 (Sep 2-6)",
          topic: "Unit 2: Quadratic Functions - Solving quadratic equations",
          fourPillar: "Equations: Multiple solution methods",
          resources: ["FlippedMath 6.3 Quadratic Formula"],
          notes: "Labor Day - Sep 2"
        },
        {
          week: "Week 5 (Sep 9-13)",
          topic: "Quadratic inequalities (graphical and algebraic)",
          fourPillar: "Inequalities: Parabola regions and test points",
          resources: ["Khan Academy: Quadratic Inequalities"]
        },
        {
          week: "Week 6 (Sep 16-20)",
          topic: "Quadratic graphs: vertex form, axis of symmetry, transformations",
          fourPillar: "Graphs: Vertex, intercepts, end behavior",
          resources: ["Desmos: Quadratic Explorer"],
          notes: "Interims Issued - Sep 16"
        },
        {
          week: "Week 7 (Sep 23-27)",
          topic: "Quadratic applications: projectile motion, optimization, area problems",
          fourPillar: "Applications: Real-world modeling",
          resources: ["Khan Academy: Quadratic Models"]
        },
        {
          week: "Week 8 (Sep 30-Oct 4)",
          topic: "Unit 3: Polynomial Functions - Polynomial equations and factoring techniques",
          fourPillar: "Equations: Advanced factoring, synthetic division",
          resources: ["FlippedMath 1.1-1.4 Polynomials"]
        },
        {
          week: "Week 9 (Oct 7-11)",
          topic: "Polynomial inequalities using sign charts",
          fourPillar: "Inequalities: Critical points and interval testing",
          resources: ["Khan Academy: Polynomial Inequalities"]
        },
        {
          week: "Week 10 (Oct 14-17)",
          topic: "Polynomial graphs: end behavior, zeros, multiplicity & Polynomial modeling",
          fourPillar: "Graphs & Applications: Complete analysis",
          resources: ["Professor Leonard: Polynomial Graphs"],
          notes: "Quarter 1 Ends Oct 17"
        }
      ]
    },
    quarter2: {
      title: "Quarter 2: Exponential, Logarithmic, and Operations Review",
      weeks: "Oct 20 - Jan 15",
      focus: "Exponential Functions, Logarithmic Functions, Complex Numbers",
      concepts: [
        {
          week: "Week 11 (Oct 20-24)",
          topic: "Unit 4: Exponential Functions - Exponential equations",
          fourPillar: "Equations: Properties of exponents, change of base",
          resources: ["FlippedMath 7.1-7.2 Exponentials"],
          notes: "Teacher Planning Day - Oct 20"
        },
        {
          week: "Week 12 (Oct 27-31)",
          topic: "Exponential inequalities & Growth vs. decay analysis",
          fourPillar: "Inequalities: Exponential comparisons",
          resources: ["Khan Academy: Exponential Models"],
          notes: "Report Cards - Oct 28"
        },
        {
          week: "Week 13 (Nov 3-7)",
          topic: "Exponential graphs: transformations, asymptotes, domain/range",
          fourPillar: "Graphs: Complete function analysis",
          resources: ["Desmos: Exponential Functions"]
        },
        {
          week: "Week 14 (Nov 10-14)",
          topic: "Exponential applications: compound interest, population growth, decay",
          fourPillar: "Applications: Financial mathematics and real-world modeling",
          resources: ["Khan Academy: Financial Literacy"],
          notes: "Veterans Day - Nov 11"
        },
        {
          week: "Week 15 (Nov 17-21)",
          topic: "Unit 5: Logarithmic Functions - Logarithmic equations and properties",
          fourPillar: "Equations: Log properties, change of base, solving techniques",
          resources: ["FlippedMath 8.1-8.4 Logarithms"],
          notes: "Interims Issued - Nov 18"
        },
        {
          week: "Week 16 (Nov 24-28)",
          topic: "Logarithmic inequalities",
          fourPillar: "Inequalities: Log function behavior",
          resources: ["Khan Academy: Logarithmic Functions"],
          notes: "Thanksgiving Break"
        },
        {
          week: "Week 17 (Dec 1-5)",
          topic: "Logarithmic graphs: inverse relationship, transformations, asymptotes",
          fourPillar: "Graphs: Domain restrictions and inverse properties",
          resources: ["Professor Leonard: Logarithms"]
        },
        {
          week: "Week 18 (Dec 8-12)",
          topic: "Logarithmic applications: pH, decibels, earthquake magnitude",
          fourPillar: "Applications: Scientific and real-world contexts",
          resources: ["Khan Academy: Log Applications"],
          notes: "Early Release Day - Dec 10"
        },
        {
          week: "Week 19 (Dec 15-19)",
          topic: "Semester Review & Final Exam",
          fourPillar: "All Four Pillars: Comprehensive integration",
          resources: ["Comprehensive review materials"],
          notes: "Final Exams Week"
        },
        {
          week: "Week 20 (Jan 7-10)",
          topic: "Operations Review: Polynomial Division - Long division & Synthetic division",
          fourPillar: "Equations: Division algorithms for polynomial equations",
          resources: ["FlippedMath 1.3 Polynomial Division"]
        },
        {
          week: "Week 21 (Jan 13-15)",
          topic: "Complex Numbers - Operations with complex numbers & Complex solutions",
          fourPillar: "Equations: Complex solutions to quadratic and polynomial equations",
          resources: ["Khan Academy: Complex Numbers"],
          notes: "Quarter 2 Ends Jan 15"
        }
      ]
    },
    quarter3: {
      title: "Quarter 3: Rational Functions and Trigonometric Functions",
      weeks: "Jan 20 - Apr 2",
      focus: "Rational Functions, Trigonometric Functions",
      concepts: [
        {
          week: "Week 22 (Jan 20-24)",
          topic: "Unit 6: Rational Functions - Simplifying rational expressions & Operations",
          fourPillar: "Foundation: Building blocks for rational functions",
          resources: ["FlippedMath 3.1-3.3 Rational Expressions"],
          notes: "MLK Day - Jan 20"
        },
        {
          week: "Week 23 (Jan 27-31)",
          topic: "Complex fractions & Domain and range of rational expressions",
          fourPillar: "Graphs: Domain restrictions and discontinuities",
          resources: ["Khan Academy: Rational Expressions"]
        },
        {
          week: "Week 24 (Feb 3-7)",
          topic: "Rational equations (LCD method, cross multiplication)",
          fourPillar: "Equations: Solving techniques and extraneous solutions",
          resources: ["Professor Leonard: Rational Equations"]
        },
        {
          week: "Week 25 (Feb 10-14)",
          topic: "Rational inequalities (sign analysis, critical points)",
          fourPillar: "Inequalities: Test intervals and boundary behavior",
          resources: ["Khan Academy: Rational Inequalities"],
          notes: "Early Release Day - Feb 11"
        },
        {
          week: "Week 26 (Feb 17-21)",
          topic: "Rational function graphs: vertical/horizontal/oblique asymptotes, holes",
          fourPillar: "Graphs: Complete asymptotic analysis",
          resources: ["Desmos: Rational Function Explorer"],
          notes: "Presidents Day - Feb 17"
        },
        {
          week: "Week 27 (Feb 24-28)",
          topic: "Rational function applications: rates, work problems, optimization",
          fourPillar: "Applications: Real-world rational modeling",
          resources: ["Khan Academy: Rational Models"]
        },
        {
          week: "Week 28 (Mar 3-7)",
          topic: "Unit 7: Trigonometric Functions - Introduction - Unit circle & Radian/degree conversion",
          fourPillar: "Foundation: Building trigonometric understanding",
          resources: ["Khan Academy: Unit Circle"]
        },
        {
          week: "Week 29 (Mar 10-14)",
          topic: "Basic trigonometric equations (sin, cos, tan)",
          fourPillar: "Equations: Unit circle solutions",
          resources: ["FlippedMath Trigonometry"],
          notes: "Teacher Planning Day - Mar 12"
        },
        {
          week: "Week 30 (Mar 17-21)",
          topic: "Trigonometric inequalities",
          fourPillar: "Inequalities: Periodic solutions and intervals",
          resources: ["Khan Academy: Trig Equations"]
        },
        {
          week: "Week 31 (Mar 31-Apr 2)",
          topic: "Trigonometric graphs: amplitude, period, phase shift, vertical shift",
          fourPillar: "Graphs: Complete periodic function analysis",
          resources: ["Desmos: Trig Function Explorer"],
          notes: "Quarter 3 Ends Apr 2"
        }
      ]
    },
    quarter4: {
      title: "Quarter 4: Advanced Trigonometry and Integration",
      weeks: "Apr 6 - Jun 5",
      focus: "Advanced Trigonometry, Trigonometric Applications, Review and Integration",
      concepts: [
        {
          week: "Week 32 (Apr 6-10)",
          topic: "Trigonometric applications: modeling periodic phenomena",
          fourPillar: "Applications: Real-world trigonometric modeling",
          resources: ["Khan Academy: Trig Applications"]
        },
        {
          week: "Week 33 (Apr 13-17)",
          topic: "Trigonometric identities and solving complex equations",
          fourPillar: "Equations: Advanced trigonometric solving techniques",
          resources: ["FlippedMath: Trig Identities"]
        },
        {
          week: "Week 34 (Apr 20-24)",
          topic: "Inverse trigonometric functions",
          fourPillar: "Graphs & Equations: Inverse function properties",
          resources: ["Khan Academy: Inverse Trig Functions"]
        },
        {
          week: "Week 35 (Apr 27-May 1)",
          topic: "Comprehensive Review: All function families integration",
          fourPillar: "All Four Pillars: Comprehensive integration",
          resources: ["Comprehensive review materials"]
        },
        {
          week: "Week 36 (May 4-8)",
          topic: "Final Projects and Assessments",
          fourPillar: "Applications: Culminating projects showcasing all four pillars",
          resources: ["Project guidelines and rubrics"]
        },
        {
          week: "Week 37 (May 11-15)",
          topic: "Final Exams and Course Wrap-up",
          fourPillar: "All Four Pillars: Final comprehensive assessment",
          resources: ["Final exam review materials"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-edu-bg dark:bg-gray-900 animate-in fade-in duration-500">
      {/* Navigation Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Calculator className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text dark:text-white">Algebra 2 Honors Resources</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">{new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <div className="w-8 h-8 bg-edu-accent rounded-full flex items-center justify-center">
                <User className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Page Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/algebra2">
            <Button variant="ghost" className="flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium transition-all duration-200 hover:translate-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Algebra 2</span>
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-edu-text dark:text-white">Curriculum Guide 2025-2026</h2>
          <div className="w-24"></div>
        </div>

        {/* Course Overview */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-bottom duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-blue/10 rounded-lg flex items-center justify-center">
                <Target className="text-edu-blue w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">Function-Based Approach</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This curriculum follows a systematic function-based approach where each function family is explored through four key components.
            </p>
            <div className="bg-edu-blue/10 dark:bg-edu-blue/20 p-4 rounded-lg">
              <p className="text-edu-blue font-medium">School: Doral Academy | Teacher: Mrs. Zogovic</p>
            </div>
          </CardContent>
        </Card>

        {/* Four-Pillar Approach */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-left duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-green/10 rounded-lg flex items-center justify-center">
                <BookOpen className="text-edu-green w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">The Four-Pillar Function Approach</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6">For each function family, students will master:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fourPillarApproach.map((pillar, index) => (
                <div key={index} className={`${pillar.color} p-4 rounded-lg text-white hover:shadow-lg transition-all duration-200 hover:scale-[1.02]`}>
                  <h4 className="font-bold text-sm mb-2">{pillar.title}</h4>
                  <p className="text-xs opacity-90">{pillar.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Primary Resources */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-right duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-accent/10 rounded-lg flex items-center justify-center">
                <ExternalLink className="text-edu-accent w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">Primary Resources</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {primaryResources.map((resource, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                  <ExternalLink className="w-5 h-5 text-edu-blue flex-shrink-0" />
                  <div>
                    <p className="font-medium text-edu-text dark:text-white">{resource.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{resource.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quarterly Curriculum */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 animate-in slide-in-from-bottom duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Calendar className="text-purple-600 dark:text-purple-300 w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">Quarterly Breakdown</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <Tabs value={selectedQuarter} onValueChange={setSelectedQuarter}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="quarter1" className="transition-all duration-200 hover:scale-105">Quarter 1</TabsTrigger>
                <TabsTrigger value="quarter2" className="transition-all duration-200 hover:scale-105">Quarter 2</TabsTrigger>
                <TabsTrigger value="quarter3" className="transition-all duration-200 hover:scale-105">Quarter 3</TabsTrigger>
                <TabsTrigger value="quarter4" className="transition-all duration-200 hover:scale-105">Quarter 4</TabsTrigger>
              </TabsList>

              {Object.entries(quarterData).map(([key, quarter]) => (
                <TabsContent key={key} value={key} className="animate-in fade-in duration-300">
                  <div className="space-y-6">
                    {/* Quarter Header */}
                    <div className="bg-gradient-to-r from-edu-blue/10 to-edu-green/10 dark:from-edu-blue/20 dark:to-edu-green/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-edu-text dark:text-white mb-1">{quarter.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{quarter.weeks}</p>
                      <Badge className="bg-edu-blue text-white">{quarter.focus}</Badge>
                    </div>

                    {/* Weekly Concepts */}
                    <div className="space-y-4">
                      {quarter.concepts.map((concept, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.01]">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-edu-text dark:text-white">{concept.week}</h5>
                            {concept.notes && (
                              <Badge variant="outline" className="text-xs">{concept.notes}</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{concept.topic}</p>
                          <div className="bg-edu-blue/5 dark:bg-edu-blue/10 p-2 rounded mb-2">
                            <p className="text-xs font-medium text-edu-blue">{concept.fourPillar}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {concept.resources.map((resource, resIndex) => (
                              <span key={resIndex} className="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">&copy; 2025 Mrs. Zogovic's Math Classes. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}