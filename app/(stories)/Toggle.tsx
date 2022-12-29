"use client"

import { ReactNode, useState } from "react";

export default function Toggle({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div>
        <a className={(open ? "text-violet-400" : "text-violet-700")} onClick={() => setOpen(o => !o)}>{open ? "[-]" : "[+] comments collapsed"}</a>
      </div>
      <ul className="m-2" style={{ display: open ? "block" : "none" }}>
        {children}
      </ul>
    </>
  );
}
