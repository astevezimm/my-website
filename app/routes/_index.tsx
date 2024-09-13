import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/posts/1");
  }, [navigate]);

  return null;
}
