import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const heroImage = "/images/f9cadd026_generated_ca063caf.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-hidden bg-background">
      <HeroSection heroImage={heroImage} onExplore={() => navigate("/pillars")} />
    </div>
  );
}