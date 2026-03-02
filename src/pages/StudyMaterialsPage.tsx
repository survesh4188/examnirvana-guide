import { useState } from "react";
import { FileText, Download, Filter } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { studyMaterials, groups, subjects, languages } from "@/data/mockData";

const StudyMaterialsPage = () => {
  const [group, setGroup] = useState("all");
  const [subject, setSubject] = useState("all");
  const [language, setLanguage] = useState("all");

  const filtered = studyMaterials.filter((m) => {
    if (group !== "all" && m.group !== group) return false;
    if (subject !== "all" && m.subject !== subject) return false;
    if (language !== "all" && m.language !== language) return false;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-heading mb-2">Study Materials</h1>
        <p className="text-muted-foreground mb-8">Download free study notes and materials in Tamil & English</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Select value={group} onValueChange={setGroup}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="All Groups" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Groups</SelectItem>
              {groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="All Subjects" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
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
          {filtered.map((m) => (
            <Card key={m.id} className="card-hover border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="outline" className="text-xs">{m.fileType}</Badge>
                  <Badge variant="secondary" className="text-xs">{m.language}</Badge>
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{m.description}</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">{m.group}</Badge>
                  <Badge variant="outline" className="text-xs">{m.subject}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No materials found for the selected filters.</p>
        )}
      </div>
    </Layout>
  );
};

export default StudyMaterialsPage;
