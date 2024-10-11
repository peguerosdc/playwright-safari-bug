import Link from "next/link";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`antialiased ${fontHeading.variable} ${fontBody.variable}`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
              <div className="text-xl font-bold">
                <Link href="/">site</Link>
              </div>
              <button>Login</button>
            </div>
          </header>
          <main className="container mx-auto flex-1 space-y-4 p-2 md:p-4">
            <div className="flex flex-col space-y-0.5">
              <h2 className="bg-gradient-to-r from-blue-600 to-red-400 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent sm:w-fit sm:text-start">
                Welcome
              </h2>
              <p className="text-muted-foreground">Message</p>
            </div>
            {children}
          </main>
          <footer className="bg-muted py-4 sm:py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
              <nav
                className={`flex-wrap items-center justify-center gap-4 text-sm flex`}
              >
                <div className="h-4 w-px " />
                <div className="h-4 w-px " />
                <Link className="hover:underline" href="/">
                  Message 1
                </Link>
                <div className="h-4 w-px " />
                <Link className="hover:underline" href="/">
                  Message 2
                </Link>
              </nav>
              <p className="text-center text-sm">©Copyright 2024</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
