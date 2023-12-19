import { Outlet, useNavigate, useParams } from "react-router-dom";
import { SearchBar, UsersPagination } from "../Components/index";
import { useEffect } from "react";

export default function HomeLayot() {
  const { page } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/page/${page || 1}`);
  }, []);

  return (
    <main style={{ padding: "5% 10%", display: "grid", gap: "40px" }}>
      <SearchBar />
      <Outlet />
      <UsersPagination />
    </main>
  );
}
