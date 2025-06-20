import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, BookOpen, Calculator, Settings, User, Calendar, Download } from "lucide-react";

export default function Help() {
  const helpTopics = [
    {
      icon: <Calculator className="w-6 h-6 text-edu-blue" />,
      title: "Using the Calculator",
      description: "How to access and use the scientific calculator",
      steps: [
        "Click 'Calculator' from the home page or quick actions",
        "Use number buttons to input values",
        "Click operation buttons (+, -, ×, ÷) for basic math",
        "Use scientific functions (sin, cos, tan, log, ln, √) for advanced calculations",
        "Press 'Clear' to reset or '⌫' to delete the last entry"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-edu-green" />,
      title: "Finding Course Resources",
      description: "How to access curriculum materials and downloads",
      steps: [
        "Click 'Resources' from the home page",
        "Browse the curriculum guide organized by quarters",
        "Download PDF materials using the download buttons",
        "View the four-pillar approach for each topic",
        "Access external links to Khan Academy and FlippedMath"
      ]
    },
    {
      icon: <User className="w-6 h-6 text-edu-accent" />,
      title: "Navigating Your Class",
      description: "How to find assignments and news in your class",
      steps: [
        "Click 'Enter Class' from the home page",
        "View recent class news in the left panel",
        "Check assignments and due dates in the right panel",
        "Use the back button to return to the dashboard",
        "Look for assignment categories (homework, quiz, project)"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Understanding Due Dates",
      description: "How assignment due dates are displayed",
      steps: [
        "Red badges indicate assignments due today or tomorrow",
        "Gray badges show future due dates",
        "Completed assignments are marked with a checkmark",
        "Points are displayed for each assignment",
        "Assignment descriptions provide detailed instructions"
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-gray-600" />,
      title: "Adjusting Settings",
      description: "How to customize your experience",
      steps: [
        "Click 'Settings' from the home page or quick actions",
        "Toggle dark/light mode based on your preference",
        "Change language settings if needed",
        "Adjust notification preferences",
        "Settings are saved automatically"
      ]
    },
    {
      icon: <Download className="w-6 h-6 text-blue-600" />,
      title: "Downloading Materials",
      description: "How to save and access course materials",
      steps: [
        "Go to the Resources page",
        "Find the material you need",
        "Click the 'Download PDF' button",
        "Files will save to your default download folder",
        "Materials are organized by topic and difficulty level"
      ]
    }
  ];

  const commonQuestions = [
    {
      question: "Where can I find my grades?",
      answer: "Individual assignment grades are shown when you complete assignments. For a comprehensive grade overview, check with your teacher during class or office hours."
    },
    {
      question: "How do I know what homework is due?",
      answer: "Visit the 'Enter Class' section to see all assignments with their due dates. Assignments due today or tomorrow are highlighted in red."
    },
    {
      question: "Can I access the calculator on my phone?",
      answer: "Yes! The scientific calculator works on all devices including phones and tablets. Just navigate to the Calculator section from any page."
    },
    {
      question: "What if I can't download a PDF?",
      answer: "Make sure your browser allows downloads from this site. If you're still having trouble, try right-clicking the download button and selecting 'Save link as'."
    },
    {
      question: "How often is the class news updated?",
      answer: "Mrs. Zogovic updates class news regularly with important announcements, schedule changes, and course information. Check back frequently for the latest updates."
    }
  ];

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-accent rounded-lg flex items-center justify-center">
                <HelpCircle className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text">Help Center</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-edu-text mb-2">How to Use This Website</h2>
          <p className="text-gray-600">Find answers to common questions and learn how to navigate Mrs. Zogovic's math class website.</p>
        </div>

        {/* Help Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {helpTopics.map((topic, index) => (
            <Card key={index} className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {topic.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-edu-text">{topic.title}</h3>
                    <p className="text-sm text-gray-600">{topic.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {topic.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-edu-blue text-white text-xs rounded-full flex items-center justify-center mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Questions */}
        <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-edu-text">Frequently Asked Questions</h3>
          </div>
          <CardContent className="p-6">
            <div className="space-y-6">
              {commonQuestions.map((qa, index) => (
                <div key={index} className="border-l-4 border-edu-blue pl-4">
                  <h4 className="font-semibold text-edu-text mb-2">{qa.question}</h4>
                  <p className="text-gray-600">{qa.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100 mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-edu-text mb-4">Still Need Help?</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2">If you can't find the answer you're looking for, don't hesitate to ask!</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Office Hours:</strong> Monday-Thursday, 3:00-4:30 PM</p>
                <p><strong>Classroom:</strong> Room 204</p>
                <p><strong>Email:</strong> Available through the school portal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}