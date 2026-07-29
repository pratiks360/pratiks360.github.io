import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Excellence from "@/components/portfolio/Excellence";
import TechStack from "@/components/portfolio/TechStack";
import Experience from "@/components/portfolio/Experience";
import Accomplishments from "@/components/portfolio/Accomplishments";
import Certifications from "@/components/portfolio/Certifications";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pratik Shukla — Enterprise Solution Architect | AI & Data Streaming" },
      {
        name: "description",
        content:
          "Personal portfolio of Pratik Shukla — Enterprise Solution Architect in Dubai with 12+ years across banking, AI, cloud, and event streaming.",
      },
      {
        property: "og:title",
        content: "Pratik Shukla — Enterprise Solution Architect",
      },
      {
        property: "og:description",
        content:
          "12+ years architecting AI, banking, cloud, and event-streaming platforms for global enterprises.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Excellence />
        <TechStack />
        <Experience />
        <Accomplishments />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}