import './globals.css';
import Link from "next/link";

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { name: string };
}) {
  console.log(params)
  return (
    <html lang="en">
      <head />
      <body className='bg-gray-800'>
        <header className="bg-gray-900 text-sm">
          <nav className="p-3 relative flex h-16 justify-between items-center">
            <div className='justify-start'>
              <Link href="/" className='bg-gray-800 hover:bg-sky-900 text-gray-100 p-3 m-2 rounded-md'>
                <strong>HN</strong>
              </Link>
              <Link href="/new" className='bg-gray-800 hover:bg-sky-900 text-gray-100 p-3 m-2 rounded-md'>
                <strong>New</strong>
              </Link>
              <Link href="/show" className='bg-gray-800 hover:bg-sky-900 text-gray-100 p-3 m-2 rounded-md'>
                <strong>Show</strong>
              </Link>
              <Link href="/ask" className='bg-gray-800 hover:bg-sky-900 text-gray-100 p-3 m-2 rounded-md'>
                <strong>Ask</strong>
              </Link>
              <Link href="/job" className='bg-gray-800 hover:bg-sky-900 text-gray-100 p-3 m-2 rounded-md'>
                <strong>Jobs</strong>
              </Link>
            </div>
            <div className='justify-end'>
              <Link className="bg-violet-800 hover:bg-violet-900 text-gray-100 p-3 rounded-md" href="https://nextjs.org" target="_blank" rel="noreferrer">
                Nextjs 13
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
