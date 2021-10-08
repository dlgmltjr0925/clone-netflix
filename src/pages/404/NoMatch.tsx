import { useHistory, useLocation } from "react-router";

import { useEffect } from "react";

export default function NoMatch() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const language = "/" + navigator.language.slice(-2).toLowerCase();

    if (!new RegExp(`^${language}`).test(location.pathname)) {
      console.log("Change language", `${language}${location.pathname}`);
      const url = `${language}${location.pathname}`;
      history.replace(url);
    } else {
      console.log("Move to Not Found page");
      const url = `/NotFound?prev=${encodeURIComponent(window.location.href)}`;
      history.replace(url);
    }
  }, [history, location.pathname]);

  return null;
}
