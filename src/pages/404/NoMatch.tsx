import react, { useEffect } from "react";

import { useHistory } from "react-router";

function NoMatch() {
  const history = useHistory();

  useEffect(() => {
    history.replace(
      `NotFound?prev=${encodeURIComponent(window.location.href)}`
    );
  }, [history]);

  return null;
}

export default NoMatch;
