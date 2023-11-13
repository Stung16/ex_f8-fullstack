import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

export default function Logout() {
  const { logout, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);
  return (
    <>
      {isAuthenticated && (
      <button
        className="btn btn-logout"
        onClick={() => {
          setLoading(true);
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          });
        }}
      >
        Đăng xuất
      </button>
      )}
      {loading && <Loading />}
    </>
  );
}
