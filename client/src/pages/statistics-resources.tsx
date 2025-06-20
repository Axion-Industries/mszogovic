import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  BookOpen, 
  TrendingUp,
  FileText,
  ExternalLink,
  Calendar,
  Target,
  User
} from "lucide-react";

export default function StatisticsResources() {
  const [selectedQuarter, setSelectedQuarter] = useState("quarter1");

  const statisticalPractices = [
    {
      title: "Practice 1: Formulate Questions",
      description: "Determine an investigative question for a statistical study",
      skills: ["1.A: Determine a valid investigative question that requires a statistical investigation"]
    },
    {
      title: "Practice 2: Collect Data", 
      description: "Identify and justify methods for collecting data and conducting statistical inference",
      skills: [
        "2.A: Identify information to answer a question or solve a problem",
        "2.B: Justify an appropriate method for ethically gathering and representing data",
        "2.C: Identify appropriate statistical inference methods",
        "2.D: Identify types of errors and relationships among components in statistical inference methods",
        "2.E: Identify the null and alternative hypotheses"
      ]
    },
    {
      title: "Practice 3: Analyze Data",
      description: "Construct representations of data and calculate numerical statistical outputs", 
      skills: [
        "3.A: Construct tabular and graphical representations of data and distributions",
        "3.B: Calculate summary statistics, relative positions of points within a distribution, and predicted responses",
        "3.C: Calculate and estimate expected counts, percentages, probabilities, and intervals",
        "3.D: Calculate means, standard deviations, and parameters for probability distributions",
        "3.E: Calculate appropriate statistical inference method results"
      ]
    },
    {
      title: "Practice 4: Interpret Results",
      description: "Interpret results and justify conclusions and methods",
      skills: [
        "4.A: Describe and compare tabular and graphical representations of data",
        "4.B: Justify a claim based on statistical calculations and results",
        "4.C: Describe distributions and compare relative positions of points within a distribution",
        "4.D: Interpret statistical calculations and results to assess meaning or a claim",
        "4.E: Justify the use of a chosen statistical inference method by verifying conditions",
        "4.F: Interpret results of statistical inference methods",
        "4.G: Justify a claim based on statistical inference method results"
      ]
    }
  ];

  const quarterData = {
    quarter1: {
      title: "Quarter 1: Exploring One-Variable Data and Collecting Data",
      weeks: "Weeks 1-9 (Aug 14 - Oct 17)",
      unit: "Unit 1",
      topics: [
        "1.1: Introducing Statistics: What Can We Learn from Data?",
        "1.2: Variables",
        "1.3: Tabular Representation and Summary Statistics for One Categorical Variable",
        "1.4: Graphical Representations for One Categorical Variable",
        "1.5: Graphical Representations for One Quantitative Variable",
        "1.6: Descriptions for One Quantitative Variable Distributions",
        "1.7: Summary Statistics for One Quantitative Variable",
        "1.8: Graphical Representations of Summary Statistics for One Quantitative Variable",
        "1.9: Comparisons of the Distributions for One Quantitative Variable",
        "1.10: The Investigative Question Revisited and Data Collection",
        "1.11: Random Sampling",
        "1.12: Potential Problems with Sampling",
        "1.13: Experimental Design"
      ],
      practices: ["Practice 1: Formulating investigative questions for data collection", "Practice 2: Understanding sampling methods and experimental design", "Practice 3: Creating graphs and calculating summary statistics", "Practice 4: Interpreting distributions and justifying claims"],
      resources: ["Khan Academy: Analyzing Categorical Data", "Khan Academy: Summarizing Quantitative Data", "Khan Academy: Study Design", "StatQuest: Descriptive Statistics", "MathMedic: Unit 1 Concepts"]
    },
    quarter2: {
      title: "Quarter 2: Probability, Random Variables, and Probability Distributions",
      weeks: "Weeks 10-18 (Oct 20 - Jan 15)",
      unit: "Unit 2",
      topics: [
        "2.1: Tabular and Graphical Representations for the Distributions of Two Categorical Variables",
        "2.2: Summary Statistics for Two Categorical Variables",
        "2.3: Estimating Probabilities Using Simulation",
        "2.4: Introduction to Probability",
        "2.5: Mutually Exclusive Events",
        "2.6: Conditional Probability",
        "2.7: Independent Events and Unions of Events",
        "2.8: Introduction to Random Variables and Probability Distributions",
        "2.9: Parameters of Random Variables",
        "2.10: The Binomial Distribution",
        "2.11: The Normal Distribution",
        "2.12: Sampling Distributions and the Central Limit Theorem"
      ],
      practices: ["Practice 1: Formulating questions about relationships between variables", "Practice 2: Understanding probability models and simulation methods", "Practice 3: Calculating probabilities and distribution parameters", "Practice 4: Interpreting probability results and distribution properties"],
      resources: ["Khan Academy: Probability", "Khan Academy: Random Variables", "Khan Academy: Sampling Distribution", "StatQuest: Probability and Distributions", "Simulation Tools: StatKey"]
    },
    quarter3: {
      title: "Quarter 3: Inference for Categorical Data: Proportions",
      weeks: "Weeks 19-27 (Jan 20 - Apr 2)",
      unit: "Unit 3",
      topics: [
        "3.1: Estimators",
        "3.2: Sampling Distributions for Sample Proportions",
        "3.3: Constructing a Confidence Interval for a Population Proportion",
        "3.4: Justifying a Claim Based on a Confidence Interval for a Population Proportion",
        "3.5: Setting Up a Test for a Population Proportion",
        "3.6: p-Values",
        "3.7: Carrying Out a Test for a Population Proportion",
        "3.8: Potential Errors When Performing Tests",
        "3.9: Sampling Distributions for the Difference Between Sample Proportions",
        "3.10: Constructing a Confidence Interval for the Difference Between Two Population Proportions",
        "3.11: Justifying a Claim Based on a Confidence Interval for the Difference Between Two Population Proportions",
        "3.12: Setting Up a Test for the Difference Between Two Population Proportions",
        "3.13: Carrying Out a Test for the Difference Between Two Population Proportions",
        "3.14: Setting Up a Chi-Square Test for Homogeneity or Independence",
        "3.15: Carrying Out a Chi-Square Test for Homogeneity or Independence"
      ],
      practices: ["Practice 2: Selecting appropriate inference methods for proportions", "Practice 3: Calculating confidence intervals and test statistics", "Practice 4: Interpreting inference results and justifying conclusions"],
      resources: ["Khan Academy: Confidence Intervals", "Khan Academy: Significance Tests", "Khan Academy: Chi-Square Tests", "StatQuest: Hypothesis Testing"]
    },
    quarter4: {
      title: "Quarter 4: Inference for Quantitative Data and Regression",
      weeks: "Weeks 28-36 (Apr 6 - Jun 5)",
      unit: "Units 4 & 5",
      topics: [
        "4.1: Sampling Distributions for Sample Means",
        "4.2: Constructing a Confidence Interval for a Population Mean or Population Mean Difference",
        "4.3: Justifying a Claim Based on a Confidence Interval for a Population Mean or Population Mean Difference",
        "4.4: Setting Up a Test for a Population Mean or Population Mean Difference",
        "4.5: Carrying Out a Test for a Population Mean or Population Mean Difference",
        "4.6: Sampling Distributions for the Difference Between Two Sample Means",
        "4.7: Constructing a Confidence Interval for the Difference Between Two Population Means",
        "4.8: Justifying a Claim Based on a Confidence Interval for the Difference Between Two Population Means",
        "4.9: Setting Up a Test for the Difference Between Two Population Means",
        "4.10: Carrying Out a Test for the Difference Between Two Population Means",
        "5.1: Graphical Representations Between Two Quantitative Variables",
        "5.2: Correlation",
        "5.3: Linear Regression Models",
        "5.4: Residuals",
        "5.5: Least-Squares Regression"
      ],
      practices: ["Practice 2: Selecting t-procedures and verifying conditions", "Practice 3: Calculating t-statistics and confidence intervals", "Practice 4: Interpreting results for means and mean differences", "Practice 1: Formulating questions about relationships between quantitative variables"],
      resources: ["Khan Academy: t-Distributions and Inference", "StatQuest: t-tests and t-distributions", "MathMedic: Inference for Means", "Khan Academy: Bivariate Data", "StatQuest: Linear Regression"]
    }
  };

  return (
    <div className="min-h-screen bg-edu-bg dark:bg-gray-900 animate-in fade-in duration-500">
      {/* Navigation Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-green rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text dark:text-white">AP Statistics Resources</h1>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Page Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/statistics">
            <Button variant="ghost" className="flex items-center space-x-2 text-edu-green hover:text-edu-green/80 font-medium transition-all duration-200 hover:translate-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to AP Statistics</span>
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-edu-text dark:text-white">Comprehensive Curriculum Guide 2025-2026</h2>
          <div className="w-24"></div>
        </div>

        {/* Course Overview */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-bottom duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-green/10 rounded-lg flex items-center justify-center">
                <Target className="text-edu-green w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">2025 College Board AP Statistics Revised Course Framework</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This curriculum aligns with the 2025 College Board AP Statistics Revised Course Framework, implementing the new unit structure and statistical practices while maintaining comprehensive resource integration.
            </p>
            <div className="bg-edu-green/10 dark:bg-edu-green/20 p-4 rounded-lg">
              <p className="text-edu-green font-medium">School: Doral Academy | Teacher: Mrs. Zogovic</p>
            </div>
          </CardContent>
        </Card>

        {/* Statistical Practices Framework */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-in slide-in-from-left duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-blue/10 rounded-lg flex items-center justify-center">
                <BookOpen className="text-edu-blue w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">Statistical Practices Framework</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {statisticalPractices.map((practice, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                  <h4 className="font-semibold text-edu-text dark:text-white mb-2">{practice.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{practice.description}</p>
                  <div className="space-y-1">
                    {practice.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-xs text-gray-500 dark:text-gray-400 flex items-start">
                        <span className="w-1 h-1 bg-edu-green rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quarterly Curriculum */}
        <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 animate-in slide-in-from-right duration-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-edu-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="text-edu-accent w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-edu-text dark:text-white">Quarterly Breakdown</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <Tabs value={selectedQuarter} onValueChange={setSelectedQuarter}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="quarter1" className="transition-all duration-200 hover:scale-105">Quarter 1</TabsTrigger>
                <TabsTrigger value="quarter2" className="transition-all duration-200 hover:scale-105">Quarter 2</TabsTrigger>
                <TabsTrigger value="quarter3" className="transition-all duration-200 hover:scale-105">Quarter 3</TabsTrigger>
                <TabsTrigger value="quarter4" className="transition-all duration-200 hover:scale-105">Quarter 4</TabsTrigger>
              </TabsList>

              {Object.entries(quarterData).map(([key, quarter]) => (
                <TabsContent key={key} value={key} className="animate-in fade-in duration-300">
                  <div className="space-y-6">
                    {/* Quarter Header */}
                    <div className="bg-gradient-to-r from-edu-green/10 to-edu-blue/10 dark:from-edu-green/20 dark:to-edu-blue/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-edu-text dark:text-white mb-1">{quarter.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{quarter.weeks}</p>
                      <Badge className="bg-edu-green text-white">{quarter.unit}</Badge>
                    </div>

                    {/* Topics */}
                    <div>
                      <h5 className="font-semibold text-edu-text dark:text-white mb-3">Topics Covered:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {quarter.topics.map((topic, index) => (
                          <div key={index} className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                            <FileText className="w-4 h-4 text-edu-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Statistical Practices Integration */}
                    <div>
                      <h5 className="font-semibold text-edu-text dark:text-white mb-3">Statistical Practices Integration:</h5>
                      <div className="space-y-2">
                        {quarter.practices.map((practice, index) => (
                          <div key={index} className="flex items-start space-x-2 p-2 rounded bg-edu-blue/5 dark:bg-edu-blue/10">
                            <Target className="w-4 h-4 text-edu-blue mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{practice}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Essential Resources */}
                    <div>
                      <h5 className="font-semibold text-edu-text dark:text-white mb-3">Essential Resources:</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {quarter.resources.map((resource, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                            <ExternalLink className="w-4 h-4 text-edu-accent flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{resource}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

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