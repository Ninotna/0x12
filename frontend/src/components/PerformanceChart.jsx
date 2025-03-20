import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  Text,
  PolarGrid,
  ResponsiveContainer,
} from "recharts";
import DataService from "../services/API/DataService";
import SpinLoader from "./Loader/SpinLoader";
import PropTypes from "prop-types";

// Styled Components
const ChartContainer = styled.div`
  width: 258px;
  height: 263px;
  margin: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary || "#282D30"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  fill: white;
`;

export default function PerformanceChart({ userId }) {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const data = await DataService.getUserPerformance(userId);
        if (data) {
          const formattedData = data.data.map((item) => ({
            value: item.value,
            kind: data.kind[item.kind], // Associe la clé à son libellé
          }));
          setPerformanceData(formattedData);
        } else {
          throw new Error("Aucune donnée reçue.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, [userId]);

  if (loading) return <SpinLoader />;
  if (error) return <div>Erreur de chargement : {error}</div>;

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performanceData}>
          <Radar dataKey="value" fill="#ff0000" fillOpacity={0.7} stroke="#ff0000" />
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={({ payload, x, y, cx, cy, ...rest }) => (
              <StyledText {...rest} verticalAnchor="middle" y={y + (y - cy) / 20} x={x + (x - cx) / 20}>
                {payload.value}
              </StyledText>
            )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired,
};
