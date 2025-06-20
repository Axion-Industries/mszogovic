
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Settings, User, Moon, Sun, Globe, Check } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const savedLanguage = localStorage.getItem("language") || "English";
    
    setDarkMode(savedDarkMode);
    setLanguage(savedLanguage);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    showSavedMessage();
  };

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    showSavedMessage();
  };

  const showSavedMessage = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const languages = [
    { code: "English", name: "English", flag: "🇺🇸" },
    { code: "Spanish", name: "Español", flag: "🇪🇸" },
    { code: "French", name: "Français", flag: "🇫🇷" },
    { code: "German", name: "Deutsch", flag: "🇩🇪" },
    { code: "Italian", name: "Italiano", flag: "🇮🇹" },
    { code: "Portuguese", name: "Português", flag: "🇵🇹" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-edu-bg'}`}>
      {/* Navigation Header */}
      <header className={`shadow-sm border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-edu-card border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Settings className="text-white w-4 h-4" />
              </div>
              <h1 className={`text-xl font-semibold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-edu-text'
              }`}>Ms. Zogovic</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
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
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-edu-text'
          }`}>Settings</h2>
          <div className="w-24"></div>
        </div>

        {/* Saved Message */}
        {saved && (
          <div className="mb-6">
            <Card className="bg-green-50 border-green-200 rounded-xl p-4">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 text-green-800">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Settings saved successfully!</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Cards */}
        <div className="space-y-6">
          
          {/* Dark Mode Setting */}
          <Card className={`rounded-xl shadow-sm border transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-edu-card border-gray-100'
          }`}>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-edu-blue/10 rounded-lg flex items-center justify-center">
                  {darkMode ? (
                    <Moon className="text-edu-blue w-5 h-5" />
                  ) : (
                    <Sun className="text-edu-blue w-5 h-5" />
                  )}
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-edu-text'
                }`}>Appearance</h3>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-edu-text'
                  }`}>Dark Mode</h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Switch between light and dark themes for better viewing comfort
                  </p>
                </div>
                <Button
                  onClick={toggleDarkMode}
                  className={`transition-all duration-300 ${
                    darkMode 
                      ? 'bg-edu-blue hover:bg-edu-blue/90 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Language Setting */}
          <Card className={`rounded-xl shadow-sm border transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-edu-card border-gray-100'
          }`}>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-edu-green/10 rounded-lg flex items-center justify-center">
                  <Globe className="text-edu-green w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-edu-text'
                  }`}>Language</h3>
                  <Badge className="bg-edu-green text-white">
                    {language}
                  </Badge>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6">
              <p className={`text-sm mb-4 transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Select your preferred language for the website interface
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    variant={language === lang.code ? "default" : "outline"}
                    className={`flex items-center space-x-2 p-4 h-auto ${
                      language === lang.code 
                        ? 'bg-edu-green hover:bg-edu-green/90 text-white' 
                        : darkMode 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <Check className="w-4 h-4 ml-auto" />
                    )}
                  </Button>
                ))}
              </div>
              
              <div className={`mt-4 p-3 rounded-lg transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-yellow-50'
              }`}>
                <p className={`text-xs transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-yellow-700'
                }`}>
                  <strong>Note:</strong> Language selection is currently for demonstration purposes. 
                  The website content remains in English while the interface adapts to your preference.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* About Settings */}
          <Card className={`rounded-xl shadow-sm border transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-edu-card border-gray-100'
          }`}>
            <CardContent className="p-6">
              <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-edu-text'
              }`}>About These Settings</h4>
              <p className={`text-sm mb-4 transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Your preferences are automatically saved to your browser and will be remembered 
                for your next visit to Ms. Zogovic's classroom website.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''}>
                  Auto-save enabled
                </Badge>
                <Badge variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''}>
                  Browser storage
                </Badge>
                <Badge variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''}>
                  Privacy friendly
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t py-6 mt-12 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-edu-card border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>© 2024 Ms. Zogovic's Classroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
