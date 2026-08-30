import React from "react";
import HighlightPill from "./HighlightPill";

export default function HeroExample() {
  return (
    <section style={{padding: '48px 24px', textAlign: 'center'}}>
      <h1 style={{fontSize: '3rem', margin: 0, color: '#fff'}}>
        Free template to start your{' '}
        <HighlightPill>Next.js site.</HighlightPill>
      </h1>
      <p style={{color: 'rgba(255,255,255,0.7)', marginTop: '18px'}}>No complexity. No noise. Just clean, reliable automation to boost your team's efficiency.</p>
    </section>
  );
}
