"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * On the home page, "/#about" becomes a plain "#about" anchor so the smooth
 * scroller can glide to it. On other pages it is a normal link to the home page.
 */
export function NavLink({ href, ...props }: React.ComponentProps<"a"> & { href: string }) {
  const pathname = usePathname();
  if (href.startsWith("/#") && pathname === "/") {
    return <a href={href.slice(1)} {...props} />;
  }
  return <Link href={href} {...props} />;
}
