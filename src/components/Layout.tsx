import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="gradient-navy py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 TNPSC Prep. All rights reserved. | Tamil Nadu Public Service Commission Exam Preparation
          </p>
          <p className="text-primary-foreground/40 text-xs mt-1">
            தமிழ்நாடு அரசுப் பணியாளர் தேர்வாணையம் தேர்வுத் தயாரிப்பு
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
