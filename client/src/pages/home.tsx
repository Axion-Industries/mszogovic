import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Calculator, Clock, User, BookOpen, TrendingUp, Users, Calendar, ChevronRight, Bell, HelpCircle, Moon, Sun, DoorOpen, GraduationCap } from "lucide-react";
import { getTimeBasedGreeting, formatDate, formatTime } from "@/lib/utils";

export default function Home() {
  const [greeting, setGreeting] = useState(getTimeBasedGreeting());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setGreeting(getTimeBasedGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-edu-bg dark:bg-gray-900">
      {/* Navigation Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-edu-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <Calculator className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <h1 className="text-sm sm:text-lg lg:text-xl font-semibold text-edu-text dark:text-white truncate">Ms. Zogovic's Math Class</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
              <span className="hidden sm:inline text-xs sm:text-sm text-gray-600 dark:text-gray-300">{formatDate(currentTime)}</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-edu-accent rounded-full flex items-center justify-center">
                <User className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <Switch
                  id="dark-mode-toggle"
                  checked={darkMode}
                  onCheckedChange={handleDarkModeToggle}
                />
                <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Welcome Section */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <CardContent className="p-0">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-edu-text dark:text-white mb-2">
                {greeting}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 px-2">Welcome to Ms. Zogovic's Math Class</p>

              {/* Dynamic time display */}
              <div className="flex items-center justify-center space-x-2 text-edu-blue mb-6 sm:mb-8">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">{formatTime(currentTime)}</span>
              </div>

              {/* Two Class Buttons with Dropdown Resources */}
              <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:flex-row">
                <div className="relative group w-full sm:w-auto">
                  <Link href="/algebra2">
                    <Button className="w-full sm:w-auto bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                      <DoorOpen className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Algebra 2 Honors
                    </Button>
                  </Link>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hidden sm:block">
                    <Link href="/algebra2-resources">
                      <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800 border-edu-blue text-edu-blue hover:bg-edu-blue hover:text-white">
                        <BookOpen className="mr-1 w-3 h-3" />
                        Resources
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative group w-full sm:w-auto">
                  <Link href="/statistics">
                    <Button className="w-full sm:w-auto bg-edu-green hover:bg-edu-green/90 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                      <GraduationCap className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      AP Statistics
                    </Button>
                  </Link>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hidden sm:block">
                    <Link href="/statistics-resources">
                      <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800 border-edu-green text-edu-green hover:bg-edu-green hover:text-white">
                        <BookOpen className="mr-1 w-3 h-3" />
                        Resources
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Resource Links */}
              <div className="flex flex-col gap-2 mt-4 sm:hidden">
                <Link href="/algebra2-resources">
                  <Button variant="outline" size="sm" className="w-full bg-white dark:bg-gray-800 border-edu-blue text-edu-blue hover:bg-edu-blue hover:text-white">
                    <BookOpen className="mr-2 w-4 h-4" />
                    Algebra 2 Resources
                  </Button>
                </Link>
                <Link href="/statistics-resources">
                  <Button variant="outline" size="sm" className="w-full bg-white dark:bg-gray-800 border-edu-green text-edu-green hover:bg-edu-green hover:text-white">
                    <BookOpen className="mr-2 w-4 h-4" />
                    AP Statistics Resources
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-edu-text dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              <Link href="/calculator">
                <div className="text-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <Calculator className="text-edu-blue w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-edu-text dark:text-white">Calculator</p>
                </div>
              </Link>
              <Link href="/statistics-resources">
                <div className="text-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <BookOpen className="text-edu-green w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-edu-text dark:text-white">AP Statistics</p>
                </div>
              </Link>
              <Link href="/help">
                <div className="text-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <HelpCircle className="text-edu-accent w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-edu-text dark:text-white">Help</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-edu-card dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-4 sm:py-6 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">© 2024 Ms. Zogovic's Classroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}