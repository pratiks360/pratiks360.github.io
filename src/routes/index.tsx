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
import BeyondWork from "@/components/portfolio/BeyondWork";
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
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pratik Shukla — Enterprise Solution Architect" },
      {
        name: "twitter:description",
        content:
          "Pratik Shukla, Enterprise Solution Architect in Dubai, UAE — AI, cloud, banking and event-streaming platforms.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "/#pratik-shukla",
              name: "Pratik Shukla",
              alternateName: "Pratik Shukla Dubai",
              jobTitle: "Enterprise Solution Architect",
              description:
                "Enterprise Solution Architect based in Dubai, UAE with 12+ years of experience across banking, AI, cloud, and event streaming.",
              url: "/",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              knowsAbout: [
                "Enterprise Architecture",
                "Solution Architecture",
                "Apache Kafka",
                "Event Streaming",
                "Cloud Architecture",
                "Artificial Intelligence",
                "Banking Technology",
              ],
              sameAs: [
                "https://github.com/pratiks360",
                "https://linkedin.com/in/pratikshukla360",
                "https://medium.com/@pratiks360",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "/#website",
              name: "Pratik Shukla — Enterprise Solution Architect",
              url: "/",
              about: { "@id": "/#pratik-shukla" },
              inLanguage: "en",
            },
          ],
        }),
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
        <BeyondWork />
        <Contact />
      </main>
    </div>
  );
}