import { useEffect, useState } from "react";

// A static site cannot tally its own hits, so the count lives on Abacus
// (https://abacus.jasoncameron.dev) and is shared across every visitor.
// `hit` increments and returns; `get` reads without incrementing, so a visitor
// is counted once per browser session rather than once per page load.
const ENDPOINT = "https://abacus.jasoncameron.dev";
const NAMESPACE = "pratiks360.github.io";
const KEY = "portfolio-visits";
const SESSION_FLAG = "portfolio_visit_counted";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Only real visitors increment. Local dev reads the tally without adding to
    // it, so development page loads never inflate the public number.
    const counted = sessionStorage.getItem(SESSION_FLAG) === "1";
    const shouldIncrement = import.meta.env.PROD && !counted;
    let cancelled = false;

    fetch(`${ENDPOINT}/${shouldIncrement ? "hit" : "get"}/${NAMESPACE}/${KEY}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { value: number }) => {
        if (cancelled) return;
        sessionStorage.setItem(SESSION_FLAG, "1");
        setCount(data.value);
      })
      .catch(() => {
        // The counter is decorative — if it is unreachable, render nothing
        // rather than showing a zero that reads like real data.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <div>
      <span className="text-primary">●</span> visitors ={" "}
      <span className="text-foreground">{count.toLocaleString()}</span>
    </div>
  );
}
