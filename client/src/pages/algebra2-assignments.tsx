import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ListTodo, 
  User,
  Calendar,
  Clock,
  Target
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { formatDueDate } from "@/lib/utils";
import type { Assignment } from "@shared/schema";

export default function Algebra2Assignments() {
  const { data: assignments, isLoading: assignmentsLoading } = useQuery<Assignment[]>({
    queryKey: ['/api/assignments'],
  });

  return (
    <div className="min-h-screen bg-edu-bg dark:bg-gray-900 animate-in fade-in duration-500">
      {/* Navigation Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <ListTodo className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text dark:text-white">Algebra 2 Assignments</h1>
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
          <h2 className="text-2xl font-bold text-edu-text dark:text-white">All Assignments</h2>
        </div>

        {/* Assignment Stats */}
        {assignments && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="bg-edu-blue/10 dark:bg-edu-blue/20 border-edu-blue animate-in slide-in-from-left duration-500">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-edu-blue mx-auto mb-2" />
                <p className="text-2xl font-bold text-edu-blue">{assignments.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Assignments</p>
              </CardContent>
            </Card>
            <Card className="bg-edu-green/10 dark:bg-edu-green/20 border-edu-green animate-in slide-in-from-bottom duration-500">
              <CardContent className="p-4 text-center">
                <ListTodo className="w-8 h-8 text-edu-green mx-auto mb-2" />
                <p className="text-2xl font-bold text-edu-green">{assignments.filter(a => a.status === 'active').length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Active</p>
              </CardContent>
            </Card>
            <Card className="bg-edu-accent/10 dark:bg-edu-accent/20 border-edu-accent animate-in slide-in-from-right duration-500">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-edu-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-edu-accent">{assignments.filter(a => a.category === 'quiz').length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Quizzes</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Assignments List */}
        <div className="space-y-4">
          {assignmentsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
                    <div className="flex space-x-2">
                      <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-16"></div>
                      <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-12"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : assignments && assignments.length > 0 ? (
            assignments.map((assignment, index) => (
              <Card 
                key={assignment.id} 
                className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:scale-[1.01] animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-edu-text dark:text-white mb-2">{assignment.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{assignment.description}</p>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          assignment.category === 'homework' ? 'bg-gray-100 dark:bg-gray-600 border-gray-300' :
                          assignment.category === 'quiz' ? 'bg-edu-blue text-white border-edu-blue' :
                          assignment.category === 'project' ? 'bg-edu-green text-white border-edu-green' :
                          'bg-edu-accent text-white border-edu-accent'
                        }`}
                      >
                        {assignment.category.charAt(0).toUpperCase() + assignment.category.slice(1)}
                      </Badge>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {assignment.points} points
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-600 gap-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {formatDueDate(new Date(assignment.dueDate))}</span>
                      </div>
                    </div>
                    <Badge 
                      className={`text-xs ${
                        assignment.status === 'active' ? 'bg-edu-green text-white' :
                        assignment.status === 'completed' ? 'bg-gray-500 text-white' :
                        'bg-edu-accent text-white'
                      }`}
                    >
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <CardContent className="p-12">
                <div className="text-center">
                  <ListTodo className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
                  <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">No Assignments Available</h3>
                  <p className="text-gray-500 dark:text-gray-400">Assignments will appear here when they are posted.</p>
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