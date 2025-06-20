
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, FileText, Image, Download, User } from "lucide-react";

export default function Resources() {
  const curriculumTables = [
    {
      title: "Grade 9 Mathematics Topics",
      data: [
        ["Unit", "Topic", "Duration", "Key Concepts"],
        ["1", "Number Systems", "3 weeks", "Real numbers, rational/irrational numbers"],
        ["2", "Linear Equations", "4 weeks", "Solving equations, graphing lines"],
        ["3", "Quadratic Functions", "5 weeks", "Parabolas, factoring, vertex form"],
        ["4", "Geometry", "4 weeks", "Area, perimeter, volume calculations"],
        ["5", "Statistics", "3 weeks", "Data analysis, measures of central tendency"]
      ]
    },
    {
      title: "Assessment Schedule",
      data: [
        ["Assessment Type", "Frequency", "Weight", "Format"],
        ["Homework", "Weekly", "20%", "Problem sets"],
        ["Quizzes", "Bi-weekly", "25%", "Short answer"],
        ["Tests", "Monthly", "40%", "Comprehensive"],
        ["Final Project", "End of term", "15%", "Research presentation"]
      ]
    },
    {
      title: "Required Materials",
      data: [
        ["Item", "Required", "Optional", "Notes"],
        ["Textbook", "✓", "", "Mathematics 9 - McGraw Hill"],
        ["Calculator", "✓", "", "Scientific calculator required"],
        ["Graphing Paper", "✓", "", "Available in classroom"],
        ["Ruler/Compass", "", "✓", "For geometry units"],
        ["Binder", "✓", "", "3-ring binder recommended"]
      ]
    }
  ];

  const resources = [
    {
      title: "Chapter 1: Real Numbers",
      type: "PDF",
      description: "Complete notes and practice problems for real number operations",
      category: "Notes"
    },
    {
      title: "Linear Equations Practice Set",
      type: "PDF",
      description: "Additional practice problems with step-by-step solutions",
      category: "Practice"
    },
    {
      title: "Quadratic Functions Video Series",
      type: "Video",
      description: "Interactive video lessons covering all quadratic function concepts",
      category: "Video"
    },
    {
      title: "Geometry Formulas Reference",
      type: "PDF",
      description: "Quick reference guide with all essential geometry formulas",
      category: "Reference"
    },
    {
      title: "Statistics Calculator Tutorial",
      type: "Video",
      description: "How to use your calculator for statistical calculations",
      category: "Tutorial"
    },
    {
      title: "Midterm Review Guide",
      type: "PDF",
      description: "Comprehensive review covering all topics for midterm exam",
      category: "Review"
    }
  ];

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Navigation Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text">Ms. Zogovic</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{new Date().toLocaleDateString('en-US', {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Page Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-edu-text">Course Resources</h2>
          <div className="w-24"></div>
        </div>

        {/* Curriculum Tables */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-edu-text mb-6">Course Information</h3>
          <div className="space-y-6">
            {curriculumTables.map((table, index) => (
              <Card key={index} className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h4 className="text-lg font-semibold text-edu-text">{table.title}</h4>
                </div>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          {table.data[0].map((header, headerIndex) => (
                            <th key={headerIndex} className="text-left py-3 px-4 font-semibold text-edu-text bg-gray-50">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.data.slice(1).map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="py-3 px-4 text-gray-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div>
          <h3 className="text-xl font-semibold text-edu-text mb-6">Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-edu-card rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-edu-blue/10 rounded-lg flex items-center justify-center">
                        {resource.type === "PDF" ? (
                          <FileText className="text-edu-blue w-5 h-5" />
                        ) : (
                          <Image className="text-edu-green w-5 h-5" />
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={resource.type === "PDF" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}
                    >
                      {resource.type}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-edu-text mb-2">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-edu-blue hover:text-edu-blue/80 p-0"
                      disabled
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <span className="text-xs text-gray-400">Resource requested</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Card className="bg-yellow-50 border-yellow-200 rounded-xl p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-yellow-800 mb-2">Resources Coming Soon</h4>
                <p className="text-yellow-700 text-sm">
                  Resource images and PDFs are currently being prepared and will be available shortly. 
                  Check back soon for downloadable materials and additional learning resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-edu-card border-t border-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">© 2024 Ms. Zogovic's Classroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
