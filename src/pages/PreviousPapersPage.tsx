import { useState } from "react";
import { FileText, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { previousPapers, groups, languages } from "@/data/mockData";

const years = [...new Set(previousPapers.map((p) => p.year))].sort((a, b) => b - a);

const PreviousPapersPage = () => {
  const [year, setYear] = useState("all");
  const [group, setGroup] = useState("all");
  const [language, setLanguage] = useState("all");

  const filtered = previousPapers.filter((p) => {
    if (year !== "all" && p.year !== Number(year)) return false;
    if (group !== "all" && p.group !== group) return false;
    if (language !== "all" && p.language !== language) return false;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-heading mb-2">Previous Year Papers</h1>
        <p className="text-muted-foreground mb-8">Download past exam question papers for practice</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[130px]"><SelectValue placeholder="All Years" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((y) => <SelectItem key={y} value={String(y)}>{y}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={group} onValueChange={setGroup}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="All Groups" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Groups</SelectItem>
              {groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Language" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              {languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Card key={p.id} className="card-hover border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading">{p.group}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {p.year}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">{p.language}</Badge>
                  <Badge variant="secondary" className="text-xs">PDF</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground">
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No papers found for the selected filters.</p>
        )}
      </div>
    </Layout>
  );
};

export default PreviousPapersPage;
