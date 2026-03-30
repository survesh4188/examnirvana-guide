import { Link } from "react-router-dom";
import { BookOpen, FileText, PlayCircle, ClipboardList, BarChart3, GraduationCap, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const stats = [
  { label: "Mock Tests", value: "50+", icon: ClipboardList },
  { label: "Study Materials", value: "200+", icon: FileText },
  { label: "Video Links", value: "100+", icon: PlayCircle },
  { label: "Questions", value: "5000+", icon: BookOpen },
];

const quickLinks = [
  { title: "Mock Tests", description: "Practice with timed MCQ tests", icon: ClipboardList, path: "/mock-test", color: "from-blue-600 to-blue-800" },
  { title: "Study Materials", description: "Download PDFs & notes", icon: FileText, path: "/study-materials", color: "from-emerald-600 to-emerald-800" },
  { title: "Video Lectures", description: "Learn from YouTube experts", icon: PlayCircle, path: "/youtube-links", color: "from-red-600 to-red-800" },
  { title: "Syllabus", description: "Group-wise complete syllabus", icon: GraduationCap, path: "/syllabus", color: "from-purple-600 to-purple-800" },
  { title: "Previous Papers", description: "Year-wise question papers", icon: BookOpen, path: "/previous-papers", color: "from-orange-600 to-orange-800" },
  { title: "Performance", description: "Track your progress", icon: BarChart3, path: "/analysis", color: "from-teal-600 to-teal-800" },
];

const updates = [
  "📢 TNPSC Group 2 Notification Released — Apply before March 2025",
  "📚 New Study Materials uploaded for Indian Economy",
  "🎯 Group 4 Mock Test Series now available",
  "📝 Previous Year Papers for 2024 added",
];

const HomePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent/50 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Tamil Nadu's #1 Exam Prep Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 font-heading">
              Crack TNPSC Group Exams{" "}
              <span className="text-gradient-gold">with Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-4 max-w-2xl mx-auto">
              தமிழ்நாடு அரசுப் பணி தேர்வுக்கு தயாராகுங்கள்
            </p>
            <p className="text-base text-primary-foreground/50 mb-8 max-w-xl mx-auto">
              Free mock tests, study materials, video lectures, and previous year papers — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/mock-test">
                <Button size="lg" className="gradient-gold text-accent-foreground font-semibold px-8 gold-glow hover:opacity-90 transition-opacity w-full sm:w-auto">
                  Start Practicing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/syllabus">
                <Button
                  size="lg"
                  className="gradient-gold text-accent-foreground font-semibold px-8 gold-glow hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  View Syllabus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-gold py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-center gap-3 py-2">
                <stat.icon className="h-6 w-6 text-accent-foreground/80" />
                <div>
                  <p className="text-xl font-bold text-accent-foreground">{stat.value}</p>
                  <p className="text-xs text-accent-foreground/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Ticker */}
      <section className="bg-primary py-2.5 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...updates, ...updates].map((update, i) => (
            <span key={i} className="text-primary-foreground/80 text-sm mx-8">
              {update}
            </span>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-2">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground">
              வெற்றிக்குத் தேவையான அனைத்தும் ஒரே இடத்தில்
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Card className="card-hover border-0 shadow-md overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${link.color} p-6 flex items-center gap-4`}>
                      <div className="bg-white/20 p-3 rounded-xl">
                        <link.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                        <p className="text-white/70 text-sm">{link.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-white/50 ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Ready to Begin Your Preparation?
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
            Join thousands of aspirants who are already preparing with our comprehensive mock tests and materials.
          </p>
          <Link to="/mock-test">
            <Button size="lg" className="gradient-gold text-accent-foreground font-semibold px-10 gold-glow hover:opacity-90">
              Start Free Mock Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
