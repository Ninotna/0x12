import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// Styled container for the chart
const ChartContainer = styled.div`
  background: #282d30;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Composant affichant l'intensité de l'entraînement sous forme de radar
 * @param {Object} props
 * @param {Array} props.data - Données de performance de l'utilisateur
 * @returns {JSX.Element}
 */
const PerformanceRadarChart = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="category" stroke="white" fontSize={12} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceRadarChart;
