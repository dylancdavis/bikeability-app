import { useEffect, useState } from "react";
import walkScoreService from "../services/walkScoreService";
import { Card } from "@mui/material";
import { blue } from "@mui/material/colors";

const WalkScore = ({ city }) => {
  const [scores, setScores] = useState(null);

  const cardStyle = {
    padding: "16px",
    fontSize: "16px",
    background: blue[50],
  };

  useEffect(() => {
    const getScores = async function () {
      const scoresResponse = await walkScoreService.getScoresByCity(city);
      setScores(scoresResponse);
    };
    getScores();
  }, [city]);

  return (
    <Card style={cardStyle}>
      {scores ? `Bike Score: ${scores.bike.score}` : "Loading"}
    </Card>
  );
};

export default WalkScore;
