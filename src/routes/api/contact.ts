import { createFileRoute } from "@tanstack/react-router";

// Set up Formspree:
// 1. Go to https://formspree.io
// 2. Sign up with your email (shpooja.work@gmail.com)
// 3. Create a new form for this domain
// 4. Copy the form ID and replace FORMSPREE_ID below

const FORMSPREE_ID = "mzdnqjge";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.json();
          const { name, email, message } = formData;

          if (!name || !email || !message) {
            return new Response(
              JSON.stringify({ error: "Missing required fields" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          // Using Formspree for email delivery (free service)
          const formspreeResponse = await fetch(
            `https://formspree.io/f/${FORMSPREE_ID}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                email,
                message,
                _redirect: "false",
              }),
            }
          );

          if (!formspreeResponse.ok) {
            const errorText = await formspreeResponse.text();
            console.error("Formspree error:", errorText);
            return new Response(
              JSON.stringify({
                error: "Failed to send message. Please try emailing directly.",
              }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(
            JSON.stringify({
              success: true,
              message: "Message sent successfully to pratiks360@gmail.com",
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          console.error("Contact API error:", error);
          return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
