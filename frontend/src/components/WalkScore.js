import { useEffect, useState } from "react";
import walkScoreService from "../services/walkScoreService";

const WalkScore = ({ city }) => {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    const getScores = async function () {
      const scoresResponse = await walkScoreService.getScoresByCity(city);
      setScores(scoresResponse);
    };
    getScores();
  }, [city]);

  return <div>{scores ? `Bike Score: ${scores.bike.score}` : "Loading"}</div>;
};

export default WalkScore;
