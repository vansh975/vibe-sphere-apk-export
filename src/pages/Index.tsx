
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Redirect to the feed page
  useEffect(() => {
    navigate("/feed");
  }, [navigate]);

  return null;
};

export default Index;
