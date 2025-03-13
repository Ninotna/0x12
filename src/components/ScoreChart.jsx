import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Styled container for the chart
const ChartContainer = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScoreLabel = styled.div`
  position: absolute;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #282d30;
`;

/**
 * Composant affichant le score de l'utilisateur sous forme de jauge
 * @param {Object} props
 * @param {number} props.score - Score de l'utilisateur (valeur entre 0 et 1)
 * @returns {JSX.Element}
 */
const ScoreChart = ({ score }) => {
  const scoreData = [{ name: "Score", value: score * 100 }];

  return (
    <ChartContainer>
      <ScoreLabel>
        <p>{`${score * 100}%`}</p>
        <p>de votre objectif</p>
      </ScoreLabel>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          data={scoreData}
          startAngle={90}
          endAngle={90 + score * 360}
        >
          <RadialBar
            minAngle={15}
            dataKey="value"
            fill="#E60000"
            cornerRadius={10}
          />
          <Legend verticalAlign="bottom" height={36} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;
