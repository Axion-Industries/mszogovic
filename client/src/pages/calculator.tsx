
import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, User } from "lucide-react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const inputPercent = () => {
    const value = parseFloat(display) / 100;
    setDisplay(String(value));
  };

  const inputSquareRoot = () => {
    const value = Math.sqrt(parseFloat(display));
    setDisplay(String(value));
  };

  const inputSquare = () => {
    const value = Math.pow(parseFloat(display), 2);
    setDisplay(String(value));
  };

  const toggleSign = () => {
    if (display.charAt(0) === "-") {
      setDisplay(display.slice(1));
    } else {
      setDisplay("-" + display);
    }
  };

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

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Page Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2 text-edu-blue hover:text-edu-blue/80 font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-edu-text">Scientific Calculator</h2>
          <div className="w-24"></div>
        </div>

        {/* Calculator */}
        <Card className="bg-edu-card rounded-2xl shadow-lg border border-gray-100">
          <CardContent className="p-6">
            {/* Display */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="text-right text-3xl font-mono text-white overflow-hidden">
                {display}
              </div>
            </div>

            {/* Button Grid */}
            <div className="grid grid-cols-4 gap-3">
              {/* Row 1 - Functions */}
              <Button 
                onClick={clear} 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg"
              >
                C
              </Button>
              <Button 
                onClick={toggleSign} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 text-lg"
              >
                ±
              </Button>
              <Button 
                onClick={inputPercent} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 text-lg"
              >
                %
              </Button>
              <Button 
                onClick={() => inputOperation("÷")} 
                className="bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-4 text-lg"
              >
                ÷
              </Button>

              {/* Row 2 - Functions */}
              <Button 
                onClick={inputSquareRoot} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 text-lg"
              >
                √
              </Button>
              <Button 
                onClick={inputSquare} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 text-lg"
              >
                x²
              </Button>
              <Button 
                onClick={() => inputOperation("÷")} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 text-lg"
              >
                1/x
              </Button>
              <Button 
                onClick={() => inputOperation("×")} 
                className="bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-4 text-lg"
              >
                ×
              </Button>

              {/* Row 3 - Numbers 7,8,9 */}
              <Button 
                onClick={() => inputNumber("7")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                7
              </Button>
              <Button 
                onClick={() => inputNumber("8")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                8
              </Button>
              <Button 
                onClick={() => inputNumber("9")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                9
              </Button>
              <Button 
                onClick={() => inputOperation("-")} 
                className="bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-4 text-lg"
              >
                -
              </Button>

              {/* Row 4 - Numbers 4,5,6 */}
              <Button 
                onClick={() => inputNumber("4")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                4
              </Button>
              <Button 
                onClick={() => inputNumber("5")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                5
              </Button>
              <Button 
                onClick={() => inputNumber("6")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                6
              </Button>
              <Button 
                onClick={() => inputOperation("+")} 
                className="bg-edu-blue hover:bg-edu-blue/90 text-white font-semibold py-4 text-lg"
              >
                +
              </Button>

              {/* Row 5 - Numbers 1,2,3 */}
              <Button 
                onClick={() => inputNumber("1")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                1
              </Button>
              <Button 
                onClick={() => inputNumber("2")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                2
              </Button>
              <Button 
                onClick={() => inputNumber("3")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                3
              </Button>
              <Button 
                onClick={performCalculation} 
                className="bg-edu-green hover:bg-edu-green/90 text-white font-semibold py-4 text-lg row-span-2"
              >
                =
              </Button>

              {/* Row 6 - 0 and decimal */}
              <Button 
                onClick={() => inputNumber("0")} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg col-span-2"
              >
                0
              </Button>
              <Button 
                onClick={inputDecimal} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 text-lg"
              >
                .
              </Button>
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
