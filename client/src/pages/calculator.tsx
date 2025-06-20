import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator } from "lucide-react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(`${parseFloat(newValue.toFixed(7))}`);
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
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

  const performFunction = (func: string) => {
    const inputValue = parseFloat(display);
    let result: number;

    switch (func) {
      case "sin":
        result = Math.sin(inputValue * (Math.PI / 180));
        break;
      case "cos":
        result = Math.cos(inputValue * (Math.PI / 180));
        break;
      case "tan":
        result = Math.tan(inputValue * (Math.PI / 180));
        break;
      case "log":
        result = Math.log10(inputValue);
        break;
      case "ln":
        result = Math.log(inputValue);
        break;
      case "√":
        result = Math.sqrt(inputValue);
        break;
      case "x²":
        result = inputValue * inputValue;
        break;
      case "1/x":
        result = 1 / inputValue;
        break;
      case "π":
        result = Math.PI;
        break;
      case "e":
        result = Math.E;
        break;
      default:
        return;
    }

    setDisplay(`${parseFloat(result.toFixed(7))}`);
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Header */}
      <header className="bg-edu-card shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-edu-blue rounded-lg flex items-center justify-center">
                <Calculator className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-edu-text">Scientific Calculator</h1>
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

        {/* Calculator */}
        <Card className="bg-edu-card rounded-xl shadow-lg border border-gray-100">
          <CardContent className="p-6">
            {/* Display */}
            <div className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-right text-2xl font-mono min-h-[60px] flex items-center justify-end">
              {display}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-5 gap-2">
              {/* Scientific Functions Row 1 */}
              <Button onClick={() => performFunction("sin")} className="bg-edu-green hover:bg-edu-green/90 text-white">sin</Button>
              <Button onClick={() => performFunction("cos")} className="bg-edu-green hover:bg-edu-green/90 text-white">cos</Button>
              <Button onClick={() => performFunction("tan")} className="bg-edu-green hover:bg-edu-green/90 text-white">tan</Button>
              <Button onClick={() => performFunction("log")} className="bg-edu-green hover:bg-edu-green/90 text-white">log</Button>
              <Button onClick={() => performFunction("ln")} className="bg-edu-green hover:bg-edu-green/90 text-white">ln</Button>

              {/* Scientific Functions Row 2 */}
              <Button onClick={() => performFunction("√")} className="bg-edu-green hover:bg-edu-green/90 text-white">√</Button>
              <Button onClick={() => performFunction("x²")} className="bg-edu-green hover:bg-edu-green/90 text-white">x²</Button>
              <Button onClick={() => performFunction("1/x")} className="bg-edu-green hover:bg-edu-green/90 text-white">1/x</Button>
              <Button onClick={() => performFunction("π")} className="bg-edu-green hover:bg-edu-green/90 text-white">π</Button>
              <Button onClick={() => performFunction("e")} className="bg-edu-green hover:bg-edu-green/90 text-white">e</Button>

              {/* Clear and Operations */}
              <Button onClick={clear} className="bg-red-500 hover:bg-red-600 text-white col-span-2">Clear</Button>
              <Button onClick={() => setDisplay(display.slice(0, -1) || "0")} className="bg-gray-500 hover:bg-gray-600 text-white">⌫</Button>
              <Button onClick={() => performOperation("÷")} className="bg-edu-blue hover:bg-edu-blue/90 text-white">÷</Button>
              <Button onClick={() => performOperation("×")} className="bg-edu-blue hover:bg-edu-blue/90 text-white">×</Button>

              {/* Number Pad */}
              <Button onClick={() => inputNumber("7")} className="bg-gray-200 hover:bg-gray-300 text-black">7</Button>
              <Button onClick={() => inputNumber("8")} className="bg-gray-200 hover:bg-gray-300 text-black">8</Button>
              <Button onClick={() => inputNumber("9")} className="bg-gray-200 hover:bg-gray-300 text-black">9</Button>
              <Button onClick={() => performOperation("-")} className="bg-edu-blue hover:bg-edu-blue/90 text-white">-</Button>
              <Button onClick={() => performOperation("+")} className="bg-edu-blue hover:bg-edu-blue/90 text-white rowspan-2">+</Button>

              <Button onClick={() => inputNumber("4")} className="bg-gray-200 hover:bg-gray-300 text-black">4</Button>
              <Button onClick={() => inputNumber("5")} className="bg-gray-200 hover:bg-gray-300 text-black">5</Button>
              <Button onClick={() => inputNumber("6")} className="bg-gray-200 hover:bg-gray-300 text-black">6</Button>
              <Button onClick={() => performOperation("=")} className="bg-edu-accent hover:bg-edu-accent/90 text-white row-span-2">=</Button>

              <Button onClick={() => inputNumber("1")} className="bg-gray-200 hover:bg-gray-300 text-black">1</Button>
              <Button onClick={() => inputNumber("2")} className="bg-gray-200 hover:bg-gray-300 text-black">2</Button>
              <Button onClick={() => inputNumber("3")} className="bg-gray-200 hover:bg-gray-300 text-black">3</Button>

              <Button onClick={() => inputNumber("0")} className="bg-gray-200 hover:bg-gray-300 text-black col-span-2">0</Button>
              <Button onClick={inputDecimal} className="bg-gray-200 hover:bg-gray-300 text-black">.</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}