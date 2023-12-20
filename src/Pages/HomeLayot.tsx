import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "../Components/index";
import { useEffect } from "react";

export default function HomeLayot() {
  const { search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/page${search}`);
  }, []);

  return (
    <main style={{ padding: "5% 10%", display: "grid", gap: "40px" }}>
      <SearchBar />
      <Outlet />
    </main>
  );
}
