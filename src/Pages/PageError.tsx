import { useLocation } from "react-router-dom";
import notFoundImgLigth from "../assets/not-found-404-dark-light.svg";
import { useQueryStateResult } from "../services/usersApi";
import { T_FetchError } from "../types/types";

export default function PageError() {
  const { search: urlSearch } = useLocation();
  const res = useQueryStateResult(urlSearch);
  const error = res.error as T_FetchError;
  return (
    <div style={{ height: "90dvh" }} className="error-container">
      <img src={notFoundImgLigth} alt="not found" />
      <div className="error-desc">
        <h2>Ooh... There was an Error!</h2>
        <p>{error?.error || ""}</p>
      </div>
    </div>
  );
}
