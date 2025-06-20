import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, HelpCircle, Settings, Clock, DoorOpen, ListTodo, Newspaper, TrendingUp, User } from "lucide-react";
import { getTimeBasedGreeting, formatDate, formatTime } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [greeting, setGreeting] = useState(getTimeBasedGreeting());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Fetch dashboard stats
  const { data: stats } = useQuery({
    queryKey: ['/api/stats'],
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setGreeting(getTimeBasedGreeting());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Navigation Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Calculator className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text">Math Class</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{formatDate(currentTime)}</span>
              <div className="w-8 h-8 bg-edu-accent rounded-full flex items-center justify-center">
                <User className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <Card className="bg-edu-card rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
          <CardContent className="p-0">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-edu-text mb-2">
                {greeting}
              </h2>
              <p className="text-lg text-gray-600 mb-6">Welcome to your Math Class dashboard</p>
              
              {/* Dynamic time display */}
              <div className="flex items-center justify-center space-x-2 text-edu-blue mb-8">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{formatTime(currentTime)}</span>
              </div>

              {/* Enter Class Button */}
              <Link href="/class">
                <Button className="bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <DoorOpen className="mr-2 w-5 h-5" />
                  Enter Class
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100">
            <CardContent className="p-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-edu-green/10 rounded-lg flex items-center justify-center mr-4">
                  <ListTodo className="text-edu-green w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-edu-text">{stats?.activeAssignments || 5}</p>
                  <p className="text-sm text-gray-600">Active Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100">
            <CardContent className="p-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-edu-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <Newspaper className="text-edu-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-edu-text">{stats?.recentUpdates || 3}</p>
                  <p className="text-sm text-gray-600">Recent Updates</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100">
            <CardContent className="p-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-edu-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="text-edu-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-edu-text">{stats?.classAverage || '92%'}</p>
                  <p className="text-sm text-gray-600">Class Average</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-edu-text mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Calculator className="text-edu-blue w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Calculator</p>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <BookOpen className="text-edu-green w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Resources</p>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <HelpCircle className="text-edu-accent w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Help</p>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <Settings className="text-gray-500 w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Settings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
