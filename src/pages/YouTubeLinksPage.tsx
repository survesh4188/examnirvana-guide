import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { youtubeLinks, subjects, languages } from "@/data/mockData";

const YouTubeLinksPage = () => {
  const [subject, setSubject] = useState("all");
  const [language, setLanguage] = useState("all");

  const filtered = youtubeLinks.filter((l) => {
    if (subject !== "all" && l.subject !== subject) return false;
    if (language !== "all" && l.language !== language) return false;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-heading mb-2">YouTube Reference Links</h1>
        <p className="text-muted-foreground mb-8">Curated video lessons from top educators</p>

        <div className="flex flex-wrap gap-3 mb-8">
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
          {filtered.map((link) => (
            <Card key={link.id} className="card-hover border shadow-sm overflow-hidden">
              <div className="relative">
                <img src={link.thumbnailUrl} alt={link.title} className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{link.subject}</Badge>
                  <Badge variant="secondary" className="text-xs">{link.language}</Badge>
                </div>
                <h3 className="font-semibold font-heading mb-1">{link.title}</h3>
                <p className="text-xs text-muted-foreground">Topic: {link.topic}</p>
              </CardContent>
              <CardFooter>
                <a href={link.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" /> Watch Now
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No videos found for the selected filters.</p>
        )}
      </div>
    </Layout>
  );
};

export default YouTubeLinksPage;
