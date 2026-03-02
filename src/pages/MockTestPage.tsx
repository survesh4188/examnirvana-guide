import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, BookOpen, BarChart, Play } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import MockTestAttempt from "@/components/MockTestAttempt";
import { mockTests, groups, subjects, type MockTest } from "@/data/mockData";

const difficultyColor = {
  Easy: "bg-success/10 text-success border-success/20",
  Medium: "bg-accent/10 text-accent border-accent/20",
  Hard: "bg-destructive/10 text-destructive border-destructive/20",
};

const MockTestPage = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);

  const filtered = mockTests.filter((t) => {
    if (selectedGroup !== "all" && t.group !== selectedGroup) return false;
    if (selectedSubject !== "all" && t.subject !== selectedSubject) return false;
    return true;
  });

  if (activeTest) {
    return <MockTestAttempt test={activeTest} onBack={() => setActiveTest(null)} />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Mock Tests</h1>
          <p className="text-muted-foreground">Practice with timed MCQ tests for all TNPSC Groups</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="All Groups" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Groups</SelectItem>
              {groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="All Subjects" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((test) => (
            <Card key={test.id} className="card-hover border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-xs">{test.group}</Badge>
                  <Badge className={`text-xs border ${difficultyColor[test.difficulty]}`}>{test.difficulty}</Badge>
                </div>
                <h3 className="text-lg font-semibold font-heading mb-3">{test.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{test.questionCount} Qs</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{test.duration} min</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Subject: {test.subject}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setActiveTest(test)} className="w-full gradient-gold text-accent-foreground hover:opacity-90">
                  <Play className="h-4 w-4 mr-2" />
                  Start Test
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No mock tests found for the selected filters.</p>
        )}
      </div>
    </Layout>
  );
};

export default MockTestPage;
