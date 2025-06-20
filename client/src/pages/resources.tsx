import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Download, ExternalLink, Calendar, Users } from "lucide-react";

// Curriculum data extracted from the provided document
const curriculumData = [
  {
    quarter: "Quarter 1: Aug 14 - Oct 17",
    title: "Foundation Functions: Linear, Quadratic, and Polynomial",
    weeks: [
      {
        week: 1,
        concepts: "Unit 1: Linear Functions Review • Function notation • Domain and range basics",
        focus: "Graphs: Linear transformations and families",
        notes: "Short week - School starts"
      },
      {
        week: 2,
        concepts: "Linear Functions (4-Pillar Approach) • Linear equations • Linear inequalities",
        focus: "Equations & Inequalities: Systems and graphical solutions",
        notes: ""
      },
      {
        week: 3,
        concepts: "• Linear graphs, slopes, transformations • Linear modeling applications",
        focus: "Graphs & Applications: Rate of change and real-world contexts",
        notes: ""
      },
      {
        week: 4,
        concepts: "Unit 2: Quadratic Functions • Solving quadratic equations (factoring, square root, quadratic formula)",
        focus: "Equations: Multiple solution methods",
        notes: "Labor Day - Sep 2"
      },
      {
        week: 5,
        concepts: "• Quadratic inequalities (graphical and algebraic) • Sign analysis",
        focus: "Inequalities: Parabola regions and test points",
        notes: ""
      },
      {
        week: 6,
        concepts: "• Quadratic graphs: vertex form, axis of symmetry, transformations",
        focus: "Graphs: Vertex, intercepts, end behavior",
        notes: "Interims Issued - Sep 16"
      },
      {
        week: 7,
        concepts: "• Quadratic applications: projectile motion, optimization, area problems",
        focus: "Applications: Real-world modeling",
        notes: ""
      },
      {
        week: 8,
        concepts: "Unit 3: Polynomial Functions • Polynomial equations and factoring techniques",
        focus: "Equations: Advanced factoring, synthetic division",
        notes: ""
      },
      {
        week: 9,
        concepts: "• Polynomial inequalities using sign charts",
        focus: "Inequalities: Critical points and interval testing",
        notes: ""
      },
      {
        week: 10,
        concepts: "• Polynomial graphs: end behavior, zeros, multiplicity • Polynomial modeling",
        focus: "Graphs & Applications: Complete analysis",
        notes: "Quarter 1 Ends Oct 17"
      }
    ]
  },
  {
    quarter: "Quarter 2: Oct 20 - Jan 15",
    title: "Exponential, Logarithmic, and Operations Review",
    weeks: [
      {
        week: 11,
        concepts: "Unit 4: Exponential Functions • Exponential equations",
        focus: "Equations: Properties of exponents, change of base",
        notes: "Teacher Planning Day - Oct 20"
      },
      {
        week: 12,
        concepts: "• Exponential inequalities • Growth vs. decay analysis",
        focus: "Inequalities: Exponential comparisons",
        notes: "Report Cards - Oct 28"
      },
      {
        week: 13,
        concepts: "• Exponential graphs: transformations, asymptotes, domain/range",
        focus: "Graphs: Complete function analysis",
        notes: ""
      },
      {
        week: 14,
        concepts: "• Exponential applications: compound interest, population growth, decay",
        focus: "Applications: Financial mathematics and real-world modeling",
        notes: "Veterans Day - Nov 11"
      },
      {
        week: 15,
        concepts: "Unit 5: Logarithmic Functions • Logarithmic equations and properties",
        focus: "Equations: Log properties, change of base, solving techniques",
        notes: "Interims Issued - Nov 18"
      },
      {
        week: 16,
        concepts: "• Logarithmic inequalities",
        focus: "Inequalities: Log function behavior",
        notes: "Thanksgiving Break"
      },
      {
        week: 17,
        concepts: "• Logarithmic graphs: inverse relationship, transformations, asymptotes",
        focus: "Graphs: Domain restrictions and inverse properties",
        notes: ""
      },
      {
        week: 18,
        concepts: "• Logarithmic applications: pH, decibels, earthquake magnitude",
        focus: "Applications: Scientific and real-world contexts",
        notes: "Early Release Day - Dec 10"
      },
      {
        week: 19,
        concepts: "Semester Review & Final Exam",
        focus: "All Four Pillars: Comprehensive integration",
        notes: "Final Exams Week"
      }
    ]
  },
  {
    quarter: "Quarter 3: Jan 20 - Apr 2",
    title: "Rational Functions and Trigonometric Functions",
    weeks: [
      {
        week: 22,
        concepts: "Unit 6: Rational Functions • Simplifying rational expressions • Operations with rational expressions",
        focus: "Foundation: Building blocks for rational functions",
        notes: "MLK Day - Jan 20"
      },
      {
        week: 23,
        concepts: "• Complex fractions • Domain and range of rational expressions",
        focus: "Graphs: Domain restrictions and discontinuities",
        notes: ""
      },
      {
        week: 24,
        concepts: "• Rational equations (LCD method, cross multiplication)",
        focus: "Equations: Solving techniques and extraneous solutions",
        notes: ""
      },
      {
        week: 25,
        concepts: "• Rational inequalities (sign analysis, critical points)",
        focus: "Inequalities: Test intervals and boundary behavior",
        notes: "Early Release Day - Feb 11"
      },
      {
        week: 26,
        concepts: "• Rational function graphs: vertical/horizontal/oblique asymptotes, holes",
        focus: "Graphs: Complete asymptotic analysis",
        notes: "Presidents Day - Feb 17"
      },
      {
        week: 27,
        concepts: "• Rational function applications: rates, work problems, optimization",
        focus: "Applications: Real-world rational modeling",
        notes: ""
      },
      {
        week: 28,
        concepts: "Unit 7: Trigonometric Functions - Introduction • Unit circle • Radian/degree conversion",
        focus: "Foundation: Building trigonometric understanding",
        notes: ""
      },
      {
        week: 29,
        concepts: "• Basic trigonometric equations (sin, cos, tan)",
        focus: "Equations: Unit circle solutions",
        notes: "Teacher Planning Day - Mar 12"
      },
      {
        week: 30,
        concepts: "• Trigonometric inequalities",
        focus: "Inequalities: Periodic solutions and intervals",
        notes: ""
      },
      {
        week: 31,
        concepts: "• Trigonometric graphs: amplitude, period, phase shift, vertical shift",
        focus: "Graphs: Complete periodic function analysis",
        notes: "Quarter 3 Ends Apr 2"
      }
    ]
  },
  {
    quarter: "Quarter 4: Apr 6 - Jun 5",
    title: "Advanced Trigonometry and Integration",
    weeks: [
      {
        week: 32,
        concepts: "• Trigonometric applications: modeling periodic phenomena",
        focus: "Applications: Real-world trigonometric modeling",
        notes: ""
      },
      {
        week: 33,
        concepts: "Unit 8: Advanced Trigonometry • Trigonometric identities • Sum/difference formulas",
        focus: "Equations: Identity verification and solving",
        notes: ""
      },
      {
        week: 34,
        concepts: "• Double angle and half angle formulas • Product-to-sum formulas",
        focus: "Advanced identity applications",
        notes: ""
      },
      {
        week: 35,
        concepts: "• Law of Sines and Law of Cosines • Triangle solving",
        focus: "Applications: Triangle geometry and real-world problems",
        notes: ""
      },
      {
        week: 36,
        concepts: "Unit 9: Sequences and Series • Arithmetic sequences • Geometric sequences",
        focus: "Pattern recognition and explicit formulas",
        notes: ""
      },
      {
        week: 37,
        concepts: "• Series and summation notation • Applications of sequences",
        focus: "Applications: Financial mathematics and modeling",
        notes: ""
      },
      {
        week: 38,
        concepts: "Final Review and Assessment",
        focus: "Comprehensive review of all function families",
        notes: "Memorial Day - May 26"
      }
    ]
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-green rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text">Course Resources</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-edu-text mb-2">Algebra 2 Honors Curriculum Guide 2025-2026</h2>
          <p className="text-gray-600">Mrs. Zogovic - Reorganized Function-Based Approach</p>
        </div>

        {/* Curriculum Philosophy */}
        <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-edu-text mb-4">The Four-Pillar Function Approach</h3>
            <p className="text-gray-600 mb-4">For each function family, students will master:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-edu-blue/10 p-4 rounded-lg">
                <h4 className="font-semibold text-edu-blue mb-2">SOLVE EQUATIONS</h4>
                <p className="text-sm text-gray-600">Algebraic techniques for finding solutions</p>
              </div>
              <div className="bg-edu-green/10 p-4 rounded-lg">
                <h4 className="font-semibold text-edu-green mb-2">SOLVE INEQUALITIES</h4>
                <p className="text-sm text-gray-600">Graphical and algebraic methods for inequality solutions</p>
              </div>
              <div className="bg-edu-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold text-edu-accent mb-2">ANALYZE GRAPHS</h4>
                <p className="text-sm text-gray-600">Properties, transformations, domain, range, and end behavior</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">APPLICATIONS</h4>
                <p className="text-sm text-gray-600">Real-world modeling and problem-solving</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloadable Resources */}
        <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-edu-text mb-4">Downloadable Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <img 
                      src={`@assets/resource-image-${num}.png`} 
                      alt={`Resource ${num}`}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-12 h-12 bg-edu-blue/10 rounded-lg flex items-center justify-center hidden">
                      <BookOpen className="text-edu-blue w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-edu-text">Resource Set {num}</h4>
                      <p className="text-sm text-gray-600">Study materials and practice problems</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // Simulate PDF download
                      const link = document.createElement('a');
                      link.href = `@assets/resource-${num}.pdf`;
                      link.download = `resource-${num}.pdf`;
                      link.click();
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quarterly Curriculum Tables */}
        <div className="space-y-8">
          {curriculumData.map((quarter, quarterIndex) => (
            <Card key={quarterIndex} className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-edu-blue/5 to-edu-green/5">
                <h3 className="text-xl font-semibold text-edu-text mb-2">{quarter.quarter}</h3>
                <p className="text-gray-600">{quarter.title}</p>
              </div>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Week</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Major Concepts/Topics</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Four-Pillar Focus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Special Notes</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {quarter.weeks.map((week, weekIndex) => (
                        <tr key={weekIndex} className={weekIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 text-edu-blue mr-2" />
                              <span className="text-sm font-medium text-gray-900">{week.week}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{week.concepts}</div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant="outline" className="text-xs">
                              {week.focus}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            {week.notes && (
                              <div className="text-sm text-gray-600 italic">{week.notes}</div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Primary Resources */}
        <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100 mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-edu-text mb-4">Primary Online Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "FlippedMath Algebra 2 Common Core", url: "https://algebra2cc.flippedmath.com/" },
                { name: "FlippedMath AP Precalculus", url: "https://precalculus.flippedmath.com/ap-precalc.html" },
                { name: "Khan Academy Algebra 2", url: "https://www.khanacademy.org/math/algebra2" },
                { name: "Khan Academy Trigonometry", url: "https://www.khanacademy.org/math/trigonometry" }
              ].map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-edu-text">{resource.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">Online learning platform</p>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => window.open(resource.url, '_blank')}
                      className="bg-edu-blue hover:bg-edu-blue/90 text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}