import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ExternalRedirect({ origin }) {
  const { pathname, search, hash } = useLocation();
  const target = `${origin}${pathname}${search}${hash}`;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <p className="yassco-redirect" role="status">
      Opening the right site…
    </p>
  );
}
