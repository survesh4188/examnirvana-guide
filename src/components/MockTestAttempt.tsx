import { useState, useEffect, useCallback } from "react";
import { Clock, ChevronLeft, ChevronRight, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import { sampleQuestions, type MockTest, type Question } from "@/data/mockData";

interface Props {
  test: MockTest;
  onBack: () => void;
}

const MockTestAttempt = ({ test, onBack }: Props) => {
  const questions = sampleQuestions.slice(0, test.questionCount > 10 ? 10 : test.questionCount);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(test.duration * 60);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  useEffect(() => {
    if (submitted || timeLeft <= 0) {
      if (timeLeft <= 0 && !submitted) handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted, handleSubmit]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const score = questions.reduce((acc, q) => (answers[q.id] === q.correctOption ? acc + 1 : acc), 0);

  if (submitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-gold mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">{Math.round((score / questions.length) * 100)}%</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Test Completed!</h2>
                <p className="text-muted-foreground mt-1">
                  You scored <span className="font-semibold text-foreground">{score}</span> out of <span className="font-semibold text-foreground">{questions.length}</span>
                </p>
              </div>

              <div className="space-y-4 text-left mt-8">
                {questions.map((q, i) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correctOption;
                  return (
                    <div key={q.id} className={`p-4 rounded-lg border ${isCorrect ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"}`}>
                      <div className="flex items-start gap-2">
                        {isCorrect ? <CheckCircle2 className="h-5 w-5 text-success mt-0.5 shrink-0" /> : <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />}
                        <div>
                          <p className="font-medium text-sm mb-1">Q{i + 1}. {q.questionText}</p>
                          <p className="text-xs text-muted-foreground">Your answer: {userAns || "Not answered"} | Correct: {q.correctOption}</p>
                          <p className="text-xs text-muted-foreground mt-1 italic">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button onClick={onBack} className="mt-8 gradient-gold text-accent-foreground hover:opacity-90">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Tests
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  const q = questions[currentQ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold font-heading">{test.title}</h2>
            <p className="text-sm text-muted-foreground">Question {currentQ + 1} of {questions.length}</p>
          </div>
          <Badge variant="outline" className={`text-base px-3 py-1 ${timeLeft < 60 ? "border-destructive text-destructive animate-pulse" : "border-accent text-accent"}`}>
            <Clock className="h-4 w-4 mr-1" />
            {formatTime(timeLeft)}
          </Badge>
        </div>

        <Progress value={((currentQ + 1) / questions.length) * 100} className="mb-6 h-2" />

        {/* Question */}
        <Card className="border shadow-sm mb-6">
          <CardContent className="p-6">
            <p className="text-lg font-medium mb-6">{q.questionText}</p>
            <div className="space-y-3">
              {(["A", "B", "C", "D"] as const).map((opt) => {
                const text = q[`option${opt}` as keyof Question] as string;
                const selected = answers[q.id] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers({ ...answers, [q.id]: opt })}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selected
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50 hover:bg-secondary"
                    }`}
                  >
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold mr-3 ${
                      selected ? "gradient-gold text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {opt}
                    </span>
                    {text}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Nav */}
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          {currentQ === questions.length - 1 ? (
            <Button onClick={handleSubmit} className="gradient-gold text-accent-foreground hover:opacity-90">
              Submit Test
            </Button>
          ) : (
            <Button onClick={() => setCurrentQ(currentQ + 1)}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>

        {/* Question nav dots */}
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQ(i)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                i === currentQ
                  ? "gradient-gold text-accent-foreground"
                  : answers[questions[i].id]
                  ? "bg-accent/20 text-accent"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MockTestAttempt;
