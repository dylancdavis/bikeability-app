import { useEffect, useState } from "react";
import walkScoreService from "../services/walkScoreService";

const WalkScore = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getScores = async function () {
      const data = await walkScoreService.getScoresByCity("Seattle", "WA");
      setData(data);
    };
    getScores();
  }, []);

  return <div>{data ? data.walkscore : "Loading"}</div>;
};

export default WalkScore;
