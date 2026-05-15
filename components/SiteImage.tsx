"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { API_URL } from "@/lib/api";

type Props = {
  slot: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  fallback: ReactNode;
};

// Renders <fallback> until we confirm the API has an image for this slot.
// When confirmed, swaps to an <img> served by the API.
export function SiteImage({ slot, alt = "", className, style, fallback }: Props) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    const u = `${API_URL}/site/media/${slot}`;
    // HEAD to verify existence before swapping out the fallback.
    fetch(u, { method: "HEAD" })
      .then((r) => {
        if (!alive) return;
        if (r.ok) setUrl(u);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [slot]);

  if (!url) return <>{fallback}</>;

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}
      onError={() => setUrl(null)}
    />
  );
}
