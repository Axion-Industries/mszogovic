import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Newspaper, 
  ListTodo, 
  BookOpen, 
  BarChart3, 
  MessageSquare,
  User,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { formatDueDate, getTimeAgo } from "@/lib/utils";
import type { NewsItem, Assignment } from "@shared/schema";

export default function Class() {
  const { data: newsItems, isLoading: newsLoading } = useQuery<NewsItem[]>({
    queryKey: ['/api/news'],
  });

  const { data: assignments, isLoading: assignmentsLoading } = useQuery<Assignment[]>({
    queryKey: ['/api/assignments'],
  });

  const activeAssignments = assignments?.filter(a => a.status === 'active') || [];

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Navigation Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <ListTodo className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text">Math Class</h1>
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
          <h2 className="text-2xl font-bold text-edu-text">Class Overview</h2>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Class Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Class News */}
          <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-edu-accent/10 rounded-lg flex items-center justify-center">
                  <Newspaper className="text-edu-accent w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-edu-text">Class News</h3>
              </div>
            </div>
            
            <CardContent className="p-6 space-y-6">
              {newsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              ) : newsItems && newsItems.length > 0 ? (
                newsItems.map((item, index) => {
                  const borderColors = ['border-edu-blue', 'border-edu-green', 'border-edu-accent'];
                  const borderColor = borderColors[index % borderColors.length];
                  
                  return (
                    <div key={item.id} className={`border-l-4 ${borderColor} pl-4`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-edu-text">{item.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {getTimeAgo(new Date(item.createdAt))}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.content}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User className="w-3 h-3" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No news items available</p>
                </div>
              )}
              
              <div className="text-center pt-4">
                <Button variant="ghost" size="sm" className="text-edu-blue hover:text-edu-blue/80">
                  View All News <ArrowLeft className="ml-1 w-3 h-3 rotate-180" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="bg-edu-card rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-edu-green/10 rounded-lg flex items-center justify-center">
                    <ListTodo className="text-edu-green w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-edu-text">Assignments</h3>
                </div>
                <Badge className="bg-edu-blue text-white">
                  {activeAssignments.length} Active
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4">
              {assignmentsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse bg-gray-50 rounded-lg p-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              ) : assignments && assignments.length > 0 ? (
                assignments.map((assignment) => {
                  const dueDate = new Date(assignment.dueDate);
                  const dueDateText = formatDueDate(dueDate);
                  
                  let dueBadgeVariant: "default" | "destructive" | "secondary" = "default";
                  if (dueDateText === "Due Tomorrow" || dueDateText === "Due Today") {
                    dueBadgeVariant = "destructive";
                  } else if (dueDateText === "Overdue") {
                    dueBadgeVariant = "destructive";
                  } else {
                    dueBadgeVariant = "secondary";
                  }

                  return (
                    <div 
                      key={assignment.id} 
                      className={`bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors ${
                        assignment.isCompleted ? 'opacity-75' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-edu-text">{assignment.title}</h4>
                        {assignment.isCompleted ? (
                          <Badge variant="secondary">Completed</Badge>
                        ) : (
                          <Badge variant={dueBadgeVariant}>{dueDateText}</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{assignment.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          {assignment.isCompleted ? (
                            <CheckCircle className="w-3 h-3 text-edu-green" />
                          ) : (
                            <Calendar className="w-3 h-3" />
                          )}
                          <span>
                            {assignment.isCompleted 
                              ? `Submitted: ${dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` 
                              : `Due: ${dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}`
                            }
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              assignment.category === 'homework' ? 'bg-gray-100' :
                              assignment.category === 'quiz' ? 'bg-edu-blue text-white' :
                              assignment.category === 'project' ? 'bg-edu-green text-white' :
                              'bg-edu-accent text-white'
                            }`}
                          >
                            {assignment.category}
                          </Badge>
                          <span className={`text-xs font-medium ${
                            assignment.isCompleted && assignment.grade ? 'text-edu-green' : 'text-gray-500'
                          }`}>
                            {assignment.isCompleted && assignment.grade 
                              ? `${assignment.grade}/${assignment.points} pts`
                              : `${assignment.points} pts`
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <ListTodo className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No assignments available</p>
                </div>
              )}
              
              <div className="text-center pt-4">
                <Button variant="ghost" size="sm" className="text-edu-blue hover:text-edu-blue/80">
                  View All Assignments <ArrowLeft className="ml-1 w-3 h-3 rotate-180" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Class Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-edu-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-edu-blue w-6 h-6" />
              </div>
              <h3 className="font-semibold text-edu-text mb-2">Course Materials</h3>
              <p className="text-gray-600 text-sm mb-4">Access textbooks, worksheets, and supplementary resources</p>
              <Button variant="ghost" size="sm" className="text-edu-blue hover:text-edu-blue/80">
                Browse Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-edu-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-edu-green w-6 h-6" />
              </div>
              <h3 className="font-semibold text-edu-text mb-2">Grade Center</h3>
              <p className="text-gray-600 text-sm mb-4">View your grades and track your progress throughout the semester</p>
              <Button variant="ghost" size="sm" className="text-edu-green hover:text-edu-green/80">
                View Grades
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-edu-card rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-edu-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-edu-accent w-6 h-6" />
              </div>
              <h3 className="font-semibold text-edu-text mb-2">Discussion Forum</h3>
              <p className="text-gray-600 text-sm mb-4">Ask questions and participate in class discussions</p>
              <Button variant="ghost" size="sm" className="text-edu-accent hover:text-edu-accent/80">
                Join Discussions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
