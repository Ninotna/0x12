import { useState, useEffect } from "react";
import styled from "styled-components";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import DataService from "../services/API/DataService";
import SpinLoader from "./Loader/SpinLoader";
import PropTypes from "prop-types";

// Styled Components
const ChartContainer = styled.div`
  width: 258px;
  height: 263px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bgLight || "#FBFBFB"};
`;

const ScoreCircle = styled.div`
  width: 217px;
  height: 217px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScoreText = styled.text`
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ weight }) => weight || "600"};
  fill: ${({ theme }) => theme.colors.tertiary || "#282D30"};
  text-anchor: middle;
`;

export default function DailyScoreChart({ userId }) {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserScore = async () => {
      try {
        const data = await DataService.getUserData(userId);
        if (data) {
          setScore(data.todayScore * 100);
        } else {
          throw new Error("Aucune donnée reçue.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserScore();
  }, [userId]);

  if (loading) return <SpinLoader />;
  if (error) return <div>Erreur de chargement : {error}</div>;

  const radialBarArrayPerfData = [
    { name: "A", x: 100, fill: "white" },
    { name: "B", x: score, fill: "#ff0000" },
  ];

  return (
    <ChartContainer>
      <ScoreCircle>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="100%"
            outerRadius="100%"
            barSize={10}
            startAngle={90}
            endAngle={450}
            data={radialBarArrayPerfData}
          >
            <RadialBar minAngle={15} dataKey="x" cornerRadius="50%" />
            <ScoreText x="50%" y="45%" size="26px" weight="700">
              {score}%
            </ScoreText>
            <ScoreText x="50%" y="55%">de votre</ScoreText>
            <ScoreText x="50%" y="65%">objectif</ScoreText>
          </RadialBarChart>
        </ResponsiveContainer>
      </ScoreCircle>
    </ChartContainer>
  );
}

DailyScoreChart.propTypes = {
  userId: PropTypes.number.isRequired,
};
