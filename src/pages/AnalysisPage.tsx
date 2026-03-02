import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target } from "lucide-react";
import Layout from "@/components/Layout";
import { testAttempts } from "@/data/mockData";

const COLORS = ["#F4A300", "#0D1B2A", "#10B981", "#EF4444", "#3B82F6", "#8B5CF6"];

const AnalysisPage = () => {
  const barData = testAttempts.map((a) => ({
    name: a.testTitle.length > 15 ? a.testTitle.slice(0, 15) + "..." : a.testTitle,
    score: Math.round((a.score / a.total) * 100),
  }));

  const subjectMap: Record<string, { correct: number; total: number }> = {};
  testAttempts.forEach((a) => {
    if (!subjectMap[a.subject]) subjectMap[a.subject] = { correct: 0, total: 0 };
    subjectMap[a.subject].correct += a.score;
    subjectMap[a.subject].total += a.total;
  });
  const pieData = Object.entries(subjectMap).map(([name, v]) => ({
    name,
    value: Math.round((v.correct / v.total) * 100),
  }));

  const avgScore = Math.round(testAttempts.reduce((a, t) => a + (t.score / t.total) * 100, 0) / testAttempts.length);
  const weakTopics = pieData.filter((p) => p.value < 70).map((p) => p.name);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-heading mb-2">Performance Analysis</h1>
        <p className="text-muted-foreground mb-8">Track your progress and identify areas for improvement</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-accent/10 p-3 rounded-xl"><Target className="h-6 w-6 text-accent" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Score</p>
                <p className="text-2xl font-bold">{avgScore}%</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-success/10 p-3 rounded-xl"><TrendingUp className="h-6 w-6 text-success" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Tests Taken</p>
                <p className="text-2xl font-bold">{testAttempts.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-destructive/10 p-3 rounded-xl"><TrendingDown className="h-6 w-6 text-destructive" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Weak Areas</p>
                <p className="text-2xl font-bold">{weakTopics.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <Card className="border-0 shadow-md">
            <CardHeader><CardTitle className="font-heading">Score Per Test (%)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(41, 100%, 48%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="border-0 shadow-md">
            <CardHeader><CardTitle className="font-heading">Subject-wise Accuracy</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                    {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Weak Topics */}
        {weakTopics.length > 0 && (
          <Card className="border-0 shadow-md mt-8">
            <CardHeader><CardTitle className="font-heading text-destructive">⚠️ Topics Needing Improvement</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {weakTopics.map((t) => (
                  <Badge key={t} variant="outline" className="border-destructive/30 text-destructive">{t}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">Focus on these subjects to improve your overall score.</p>
            </CardContent>
          </Card>
        )}

        {/* Recent Attempts */}
        <Card className="border-0 shadow-md mt-8">
          <CardHeader><CardTitle className="font-heading">Recent Test Attempts</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {testAttempts.map((a) => (
                <div key={a.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div>
                    <p className="font-medium text-sm">{a.testTitle}</p>
                    <p className="text-xs text-muted-foreground">{a.date}</p>
                  </div>
                  <Badge className={Math.round((a.score / a.total) * 100) >= 70 ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}>
                    {a.score}/{a.total} ({Math.round((a.score / a.total) * 100)}%)
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AnalysisPage;
