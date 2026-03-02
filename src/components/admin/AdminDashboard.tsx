import { useState } from "react";
import { FileText, ClipboardList, PlayCircle, BookOpen, Users, LogOut, Plus, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { groups, subjects, languages } from "@/data/mockData";

const summaryCards = [
  { label: "Study Materials", value: 6, icon: FileText, color: "bg-blue-500/10 text-blue-600" },
  { label: "Mock Tests", value: 8, icon: ClipboardList, color: "bg-emerald-500/10 text-emerald-600" },
  { label: "YouTube Links", value: 6, icon: PlayCircle, color: "bg-red-500/10 text-red-600" },
  { label: "Users", value: 142, icon: Users, color: "bg-purple-500/10 text-purple-600" },
];

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const { toast } = useToast();

  const handleFormSubmit = (section: string) => (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: `${section} saved`, description: "Data has been saved successfully (demo)." });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold font-heading">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">Manage platform content</p>
          </div>
          <Button variant="outline" onClick={onLogout} className="text-destructive border-destructive/30 hover:bg-destructive hover:text-destructive-foreground">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((c) => (
            <Card key={c.label} className="border-0 shadow-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${c.color}`}><c.icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-2xl font-bold">{c.value}</p>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="materials">
          <TabsList className="flex-wrap h-auto gap-1 mb-6">
            <TabsTrigger value="materials">Study Materials</TabsTrigger>
            <TabsTrigger value="tests">Mock Tests</TabsTrigger>
            <TabsTrigger value="youtube">YouTube Links</TabsTrigger>
            <TabsTrigger value="papers">Previous Papers</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
          </TabsList>

          {/* Study Materials */}
          <TabsContent value="materials">
            <Card className="border-0 shadow-md">
              <CardHeader><CardTitle className="font-heading text-lg">Upload Study Material</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit("Study Material")} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>Title</Label><Input placeholder="Material title" className="mt-1" required /></div>
                    <div><Label>Subject</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Group</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Language</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent></Select></div>
                  </div>
                  <div><Label>Description</Label><Textarea placeholder="Brief description" className="mt-1" /></div>
                  <div><Label>Upload File (PDF)</Label><Input type="file" accept=".pdf,.doc,.docx" className="mt-1" /></div>
                  <Button type="submit" className="gradient-gold text-accent-foreground hover:opacity-90"><Upload className="h-4 w-4 mr-2" />Upload</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mock Tests */}
          <TabsContent value="tests">
            <Card className="border-0 shadow-md">
              <CardHeader><CardTitle className="font-heading text-lg">Create Mock Test</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit("Mock Test")} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>Title</Label><Input placeholder="Test title" className="mt-1" required /></div>
                    <div><Label>Subject</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Group</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Duration (min)</Label><Input type="number" placeholder="30" className="mt-1" /></div>
                    <div><Label>Difficulty</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="Easy">Easy</SelectItem><SelectItem value="Medium">Medium</SelectItem><SelectItem value="Hard">Hard</SelectItem></SelectContent></Select></div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Add Question</h4>
                    <div className="space-y-3">
                      <div><Label>Question Text</Label><Textarea placeholder="Enter question" className="mt-1" /></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label>Option A</Label><Input className="mt-1" /></div>
                        <div><Label>Option B</Label><Input className="mt-1" /></div>
                        <div><Label>Option C</Label><Input className="mt-1" /></div>
                        <div><Label>Option D</Label><Input className="mt-1" /></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label>Correct Answer</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="A">A</SelectItem><SelectItem value="B">B</SelectItem><SelectItem value="C">C</SelectItem><SelectItem value="D">D</SelectItem></SelectContent></Select></div>
                      </div>
                      <div><Label>Explanation</Label><Textarea placeholder="Why this answer is correct" className="mt-1" /></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button type="submit" className="gradient-gold text-accent-foreground hover:opacity-90"><Plus className="h-4 w-4 mr-2" />Create Test</Button>
                    <Button type="button" variant="outline"><Upload className="h-4 w-4 mr-2" />Import CSV</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* YouTube Links */}
          <TabsContent value="youtube">
            <Card className="border-0 shadow-md">
              <CardHeader><CardTitle className="font-heading text-lg">Add YouTube Link</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit("YouTube Link")} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>Title</Label><Input placeholder="Video title" className="mt-1" required /></div>
                    <div><Label>Subject</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Topic</Label><Input placeholder="Topic name" className="mt-1" /></div>
                    <div><Label>Language</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>YouTube URL</Label><Input placeholder="https://youtube.com/..." className="mt-1" required /></div>
                    <div><Label>Thumbnail URL</Label><Input placeholder="https://img.youtube.com/..." className="mt-1" /></div>
                  </div>
                  <Button type="submit" className="gradient-gold text-accent-foreground hover:opacity-90"><Plus className="h-4 w-4 mr-2" />Add Link</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Previous Papers */}
          <TabsContent value="papers">
            <Card className="border-0 shadow-md">
              <CardHeader><CardTitle className="font-heading text-lg">Upload Previous Paper</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit("Previous Paper")} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><Label>Year</Label><Input type="number" placeholder="2024" className="mt-1" required /></div>
                    <div><Label>Group</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Language</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent></Select></div>
                  </div>
                  <div><Label>Upload PDF</Label><Input type="file" accept=".pdf" className="mt-1" /></div>
                  <Button type="submit" className="gradient-gold text-accent-foreground hover:opacity-90"><Upload className="h-4 w-4 mr-2" />Upload Paper</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Syllabus */}
          <TabsContent value="syllabus">
            <Card className="border-0 shadow-md">
              <CardHeader><CardTitle className="font-heading text-lg">Manage Syllabus</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit("Syllabus")} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>Group</Label><Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{groups.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent></Select></div>
                    <div><Label>Subject</Label><Input placeholder="Subject name" className="mt-1" required /></div>
                    <div><Label>Topic</Label><Input placeholder="Topic" className="mt-1" required /></div>
                    <div><Label>Subtopic</Label><Input placeholder="Subtopic" className="mt-1" /></div>
                  </div>
                  <Button type="submit" className="gradient-gold text-accent-foreground hover:opacity-90"><Plus className="h-4 w-4 mr-2" />Add Topic</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
