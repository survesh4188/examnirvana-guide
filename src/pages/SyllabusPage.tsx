import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import { syllabusData, groups } from "@/data/mockData";

const SyllabusPage = () => {
  const [selectedGroup, setSelectedGroup] = useState("Group 1");

  const groupData = syllabusData.filter((s) => s.group === selectedGroup);
  const subjectMap: Record<string, Record<string, string[]>> = {};
  groupData.forEach((item) => {
    if (!subjectMap[item.subject]) subjectMap[item.subject] = {};
    if (!subjectMap[item.subject][item.topic]) subjectMap[item.subject][item.topic] = [];
    subjectMap[item.subject][item.topic].push(item.subtopic);
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold font-heading mb-2">Exam Syllabus</h1>
        <p className="text-muted-foreground mb-8">Complete syllabus for all TNPSC Group exams</p>

        <Tabs value={selectedGroup} onValueChange={setSelectedGroup}>
          <TabsList className="mb-8 flex-wrap h-auto gap-1">
            {groups.map((g) => (
              <TabsTrigger key={g} value={g} className="data-[state=active]:gradient-gold data-[state=active]:text-accent-foreground">
                {g}
              </TabsTrigger>
            ))}
          </TabsList>

          {groups.map((g) => (
            <TabsContent key={g} value={g}>
              {Object.entries(subjectMap).length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No syllabus data available for {g}</p>
              ) : (
                <Accordion type="multiple" className="space-y-3">
                  {Object.entries(subjectMap).map(([subject, topics]) => (
                    <AccordionItem key={subject} value={subject} className="border rounded-lg px-4 shadow-sm">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-accent" />
                          <span className="font-semibold font-heading">{subject}</span>
                          <Badge variant="outline" className="text-xs">{Object.keys(topics).length} topics</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 pl-8">
                          {Object.entries(topics).map(([topic, subtopics]) => (
                            <div key={topic}>
                              <p className="font-medium text-sm text-foreground mb-1">{topic}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {subtopics.map((st) => (
                                  <Badge key={st} variant="secondary" className="text-xs font-normal">{st}</Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default SyllabusPage;
