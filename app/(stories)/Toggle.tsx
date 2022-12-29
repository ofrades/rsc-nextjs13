"use client"

import { ReactNode, useState } from "react";

export default function Toggle({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div>
        <a onClick={() => setOpen(o => !o)}>{open ? "[-]" : "[+] comments collapsed"}</a>
      </div>
      <ul className="m-2" style={{ display: open ? "block" : "none" }}>
        {children}
      </ul>
    </>
  );
}
