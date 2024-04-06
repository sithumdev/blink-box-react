import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const current = useRef<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (current.current) return;

    current.current = true;

    const client = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    });

    client.init({ onLoad: "login-required" }).then((res) => setIsLoggedIn(res));
  }, []);

  return isLoggedIn;
};

export default useAuth;
