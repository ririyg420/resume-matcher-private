import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '../i18n';

const _spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap'
});

const _geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Resume Matcher',
  description: 'Build your resume with Resume Matcher',
  applicationName: 'Resume Matcher',
  keywords: ['resume', 'matcher', 'job', 'application']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Keep the root layout static; locale handling happens in the `[locale]` segment.
  return (
    <html lang={defaultLocale} className="dark h-full" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen antialiased text-white selection:bg-white/15 selection:text-white/95">
        {/* Hero Gradient Background */}
        <div className="fixed inset-0 hero overflow-hidden -z-10">
          {/* Corner dark navy */}
          <div className="layer anim" style={{
            left:'-36vmin', 
            bottom:'-30vmin', 
            width:'108vmin', 
            height:'108vmin',
            background: 'radial-gradient(54% 54% at 50% 50%, var(--corner) 0%, transparent 76%)',
            animation: 'pulseCorner 38s cubic-bezier(.22,.61,.36,1) infinite alternate'
          }}></div>

          {/* Main glow */}
          <div className="layer mix-screen anim" style={{
            left:'50%', 
            top:'-20vmin', 
            width:'144vmin', 
            height:'144vmin',
            background: `radial-gradient(50% 50% at 50% 50%,
              var(--core-kernel) 0%,
              var(--core-shoulder) 30%,
              color-mix(in oklab, var(--core-shoulder), black 55%) 64%,
              transparent 80%)`,
            animation: 'breatheMain 28s cubic-bezier(.22,.61,.36,1) infinite alternate'
          }}></div>

          {/* Rim glow */}
          <div className="layer mix-screen anim" style={{
            right:'-18vmin', 
            top:'-26vmin', 
            width:'96vmin', 
            height:'96vmin',
            background: `radial-gradient(52% 52% at 50% 50%,
              var(--rim) 0%,
              var(--rim-outer) 58%,
              transparent 80%)`,
            animation: 'driftRim 34s linear infinite alternate'
          }}></div>

          {/* Glow Pulse in Zentrum */}
          <div className="layer mix-screen anim" style={{
            left:'50%', 
            top:'50%', 
            width:'70vmin', 
            height:'70vmin', 
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle at 50% 50%, white 0%, transparent 60%)',
            filter: 'blur(60px)',
            opacity: 0,
            animation: 'glowPulse 11s ease-in-out infinite'
          }}></div>

          {/* Depth rotation */}
          <div className="depth anim" style={{
            animation: 'orbitDepth 120s linear infinite'
          }}></div>

          <div className="vignette"></div>
          <div className="grain"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
