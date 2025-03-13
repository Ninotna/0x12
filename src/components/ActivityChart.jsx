import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Styled container for the chart
const ChartContainer = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 300px;
`;

/**
 * Custom tooltip for the chart
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{ background: "#FFF", padding: "5px", border: "1px solid #ccc" }}
      >
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Composant affichant l'activité quotidienne de l'utilisateur
 * @param {Object} props
 * @param {Array} props.data - Données d'activité (poids et calories brûlées)
 * @returns {JSX.Element}
 */
const ActivityChart = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ActivityChart;
