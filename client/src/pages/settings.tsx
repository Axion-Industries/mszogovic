import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Settings, Moon, Sun, Globe, Bell, Palette } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("english");
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState("medium");
  const [theme, setTheme] = useState("blue");

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
      {/* Header */}
      <header className="bg-edu-card dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Settings className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text dark:text-white">Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-edu-text dark:text-white mb-2">Preferences</h2>
          <p className="text-gray-600 dark:text-gray-300">Customize your learning experience</p>
        </div>

        {/* Settings Cards */}
        <div className="space-y-6">
          
          {/* Appearance Settings */}
          <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Palette className="w-5 h-5 text-edu-blue" />
                <h3 className="text-lg font-semibold text-edu-text dark:text-white">Appearance</h3>
              </div>
            </div>
            <CardContent className="p-6 space-y-6">
              
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {darkMode ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-500" />}
                  <div>
                    <p className="font-medium text-edu-text dark:text-white">Dark Mode</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Switch between light and dark themes</p>
                  </div>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={handleDarkModeToggle}
                />
              </div>



              {/* Font Size */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Font Size</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Adjust text size for better readability</p>
                </div>
                <Select value={fontSize} onValueChange={setFontSize}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-edu-green" />
                <h3 className="text-lg font-semibold text-edu-text dark:text-white">Language & Region</h3>
              </div>
            </div>
            <CardContent className="p-6 space-y-6">
              
              {/* Language */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Language</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Select your preferred language</p>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Español</SelectItem>
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="german">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-edu-accent" />
                <h3 className="text-lg font-semibold text-edu-text dark:text-white">Notifications</h3>
              </div>
            </div>
            <CardContent className="p-6 space-y-6">
              
              {/* Push Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Assignment Reminders</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Get notified about upcoming due dates</p>
                </div>
                <Switch 
                  checked={notifications} 
                  onCheckedChange={setNotifications}
                />
              </div>

              {/* Class Updates */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Class Updates</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Receive notifications for new announcements</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Calculator Settings */}
          <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-edu-text dark:text-white">Calculator</h3>
              </div>
            </div>
            <CardContent className="p-6 space-y-6">
              
              {/* Angle Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Angle Mode</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Default mode for trigonometric functions</p>
                </div>
                <Select defaultValue="degrees">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="degrees">Degrees</SelectItem>
                    <SelectItem value="radians">Radians</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Decimal Places */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Decimal Places</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Number of decimal places to display</p>
                </div>
                <Select defaultValue="auto">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Reset Settings */}
          <Card className="bg-edu-card dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-edu-text dark:text-white">Reset All Settings</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Restore default preferences</p>
                </div>
                <Button 
                  variant="outline" 
                  className="text-red-600 border-red-600 hover:bg-red-50"
                  onClick={() => {
                    setDarkMode(false);
                    setLanguage("english");
                    setNotifications(true);
                    setFontSize("medium");
                    setTheme("blue");
                    document.documentElement.classList.remove('dark');
                  }}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}