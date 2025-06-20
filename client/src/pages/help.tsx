
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, HelpCircle, User, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I navigate to different pages on the website?",
      answer: "Use the navigation buttons on the home page or the 'Back to Dashboard' button on any page to return home. The main navigation includes buttons for Calculator, Resources, Help, and Settings."
    },
    {
      question: "Where can I find course materials and resources?",
      answer: "Click on the 'View Resources' button on the home page or use the Resources link in the Quick Actions section. You'll find curriculum information, practice materials, and downloadable resources."
    },
    {
      question: "How do I use the calculator tool?",
      answer: "Access the scientific calculator by clicking the Calculator button on the home page. The calculator supports basic operations (+, -, ×, ÷), scientific functions (square root, square, percentage), and more advanced calculations."
    },
    {
      question: "What should I do if I can't find a specific resource?",
      answer: "Resources are currently being prepared and uploaded. If you need immediate access to specific materials, please ask Ms. Zogovic during class or office hours."
    },
    {
      question: "How can I view my assignments?",
      answer: "Click 'Enter Class' from the home page to see the class overview with current assignments, announcements, and course materials."
    },
    {
      question: "Can I change the website's appearance or language?",
      answer: "Yes! Visit the Settings page to toggle dark mode and select your preferred language. These preferences will be saved for your next visit."
    },
    {
      question: "How do I get back to the main page?",
      answer: "Every page has a 'Back to Dashboard' button in the top-left corner. Click this to return to the home page at any time."
    },
    {
      question: "What browsers work best with this website?",
      answer: "The website works best with modern browsers like Chrome, Firefox, Safari, and Edge. Make sure your browser is up to date for the best experience."
    },
    {
      question: "How can I contact Ms. Zogovic for additional help?",
      answer: "You can ask questions during class time or visit during office hours. For urgent questions, please speak with Ms. Zogovic directly in person."
    },
    {
      question: "Are there mobile-friendly features?",
      answer: "Yes! The website is designed to work well on both desktop and mobile devices. All pages are optimized for touch navigation and smaller screens."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Navigation Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <HelpCircle className="text-white w-4 h-4" />
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Page Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-edu-text">Help & Support</h2>
          <div className="w-24"></div>
        </div>

        {/* Introduction */}
        <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <CardContent className="p-0">
            <div className="text-center">
              <div className="w-16 h-16 bg-edu-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-edu-accent w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text mb-2">Website Navigation Help</h3>
              <p className="text-gray-600">
                Find answers to common questions about using Ms. Zogovic's classroom website. 
                Click on any question below to see the answer.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-edu-text">Frequently Asked Questions</h3>
            <Badge className="bg-edu-blue text-white">
              {faqs.length} Questions
            </Badge>
          </div>

          {faqs.map((faq, index) => (
            <Card key={index} className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h4 className="font-semibold text-edu-text pr-4">{faq.question}</h4>
                  {openFaq === index ? (
                    <ChevronDown className="text-edu-blue w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="text-edu-blue w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Help */}
        <Card className="bg-blue-50 border-blue-200 rounded-xl p-6 mt-8">
          <CardContent className="p-0 text-center">
            <h4 className="font-semibold text-blue-800 mb-2">Need More Help?</h4>
            <p className="text-blue-700 text-sm mb-4">
              If you couldn't find the answer to your question, don't hesitate to ask for help during class or office hours.
            </p>
            <p className="text-blue-600 text-xs">
              Ms. Zogovic is available for additional support and technical assistance.
            </p>
          </CardContent>
        </Card>
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
