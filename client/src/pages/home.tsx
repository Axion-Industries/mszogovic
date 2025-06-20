import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, HelpCircle, Settings, Clock, DoorOpen, GraduationCap, User } from "lucide-react";
import { getTimeBasedGreeting, formatDate, formatTime } from "@/lib/utils";

export default function Home() {
  const [greeting, setGreeting] = useState(getTimeBasedGreeting());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setGreeting(getTimeBasedGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-edu-bg dark:bg-gray-900">
      {/* Navigation Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Calculator className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text dark:text-white">Ms. Zogovic's Math Class</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">{formatDate(currentTime)}</span>
              <div className="w-8 h-8 bg-edu-accent rounded-full flex items-center justify-center">
                <User className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <CardContent className="p-0">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-edu-text dark:text-white mb-2">
                {greeting}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Welcome to Ms. Zogovic's Math Class</p>
              
              {/* Dynamic time display */}
              <div className="flex items-center justify-center space-x-2 text-edu-blue mb-8">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{formatTime(currentTime)}</span>
              </div>

              {/* Two Class Buttons with Dropdown Resources */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative group">
                  <Link href="/algebra2">
                    <Button className="bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <DoorOpen className="mr-2 w-5 h-5" />
                      Algebra 2 Honors
                    </Button>
                  </Link>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <Link href="/algebra2-resources">
                      <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800 border-edu-blue text-edu-blue hover:bg-edu-blue hover:text-white">
                        <BookOpen className="mr-1 w-3 h-3" />
                        Resources
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/statistics">
                    <Button className="bg-edu-green hover:bg-edu-green/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <GraduationCap className="mr-2 w-5 h-5" />
                      AP Statistics
                    </Button>
                  </Link>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <Link href="/statistics-resources">
                      <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800 border-edu-green text-edu-green hover:bg-edu-green hover:text-white">
                        <BookOpen className="mr-1 w-3 h-3" />
                        Resources
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-edu-text dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link href="/calculator">
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <Calculator className="text-edu-blue w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium text-edu-text dark:text-white">Calculator</p>
                </div>
              </Link>
              <Link href="/statistics-resources">
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <BookOpen className="text-edu-green w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium text-edu-text dark:text-white">AP Statistics</p>
                </div>
              </Link>
              <Link href="/help">
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <HelpCircle className="text-edu-accent w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium text-edu-text dark:text-white">Help</p>
                </div>
              </Link>
              <Link href="/settings">
                <div className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <Settings className="text-gray-500 w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium text-edu-text dark:text-white">Settings</p>
                </div>
              </Link>
            </div>
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
