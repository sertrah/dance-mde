import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "90px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1751201806991863"
        data-ad-slot="9075984590"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
