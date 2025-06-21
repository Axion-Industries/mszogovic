import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Newspaper, 
  User,
  Calendar,
  Clock
} from "lucide-react";
import { getTimeAgo } from "@/lib/utils";

// Use static news data for static site deployment
const newsItems = [
  {
    id: 1,
    title: "Midterm Exam Schedule Released",
    content: "The midterm examination schedule has been posted. Please review the dates and prepare accordingly. Study guides will be available next week.",
    author: "Ms. Zogovic",
    priority: "high",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "New Learning Resources Added",
    content: "I've uploaded additional practice problems for Chapter 5: Quadratic Functions. These resources include step-by-step solutions and video explanations.",
    author: "Ms. Zogovic",
    priority: "normal",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Office Hours Update",
    content: "My office hours have been extended! I'm now available Monday-Thursday from 3:00-4:30 PM for extra help and questions.",
    author: "Ms. Zogovic",
    priority: "normal",
    createdAt: new Date().toISOString(),
  },
];

export default function Algebra2News() {
  return (
    <div className="min-h-screen bg-edu-bg dark:bg-gray-900 animate-in fade-in duration-500">
      {/* Navigation Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Newspaper className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text dark:text-white">Algebra 2 News</h1>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <Link href="/algebra2">
            <Button variant="ghost" className="flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium transition-all duration-200 hover:translate-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Algebra 2</span>
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-edu-text dark:text-white">All Class News</h2>
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems && newsItems.length > 0 ? (
            newsItems.map((item, index) => {
              const borderColors = ['border-l-edu-blue', 'border-l-edu-green', 'border-l-edu-accent', 'border-l-purple-500'];
              const borderColor = borderColors[index % borderColors.length];
              
              return (
                <Card 
                  key={item.id} 
                  className={`bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 ${borderColor} hover:shadow-md transition-all duration-300 hover:scale-[1.01] animate-in slide-in-from-bottom duration-700`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                      <h3 className="text-xl font-semibold text-edu-text dark:text-white">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <Badge variant="secondary" className="text-xs">
                          {getTimeAgo(new Date(item.createdAt))}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{item.content}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-600">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4" />
                        <span>By {item.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <CardContent className="p-12">
                <div className="text-center">
                  <Newspaper className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
                  <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">No News Available</h3>
                  <p className="text-gray-500 dark:text-gray-400">Check back later for class updates and announcements.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

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