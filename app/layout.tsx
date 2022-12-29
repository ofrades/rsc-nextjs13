import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <nav className="inner">
            <Link href="/">
              <strong>HN</strong>
            </Link>
            <Link href="/new">
              <strong>New</strong>
            </Link>
            <Link href="/show">
              <strong>Show</strong>
            </Link>
            <Link href="/ask">
              <strong>Ask</strong>
            </Link>
            <Link href="/job">
              <strong>Jobs</strong>
            </Link>
            <a className="github" href="https://nextjs.org" target="_blank" rel="noreferrer">
              Nextjs 13
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
