import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import AdminDashboard from "@/components/admin/AdminDashboard";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin login
    if (email === "admin@tnpsc.com" && password === "admin123") {
      setIsLoggedIn(true);
      toast({ title: "Login successful", description: "Welcome to the admin panel" });
    } else {
      toast({ title: "Login failed", description: "Use admin@tnpsc.com / admin123", variant: "destructive" });
    }
  };

  if (isLoggedIn) {
    return <AdminDashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-3">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl font-heading">Admin Login</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Sign in to manage the platform</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="admin@tnpsc.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" required />
                </div>
              </div>
              <Button type="submit" className="w-full gradient-gold text-accent-foreground hover:opacity-90">
                Sign In
              </Button>
              <p className="text-xs text-center text-muted-foreground">Demo: admin@tnpsc.com / admin123</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminPage;
