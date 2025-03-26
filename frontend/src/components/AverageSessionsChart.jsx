import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import DataService from "../services/API/DataService";
import SpinLoader from "./Loader/SpinLoader";
import PropTypes from "prop-types";

// Styled Components
const ChartContainer = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary || "#ff0000"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Title = styled.h3`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.66);
  position: absolute;
  top: 25px;
  left: 25px;
`;

const TooltipContainer = styled.div`
  background-color: white;
  padding: 5px 10px;
  font-size: 10px;
  text-align: center;
  border-radius: 5px;
`;

// Tooltip personnalisé
function CustomToolTip({ active, payload }) {
  if (!active || !payload || !payload.length || !payload[0]?.value) {
    return null;
  }

  return (
    <div className="averageSessions__chart--toolTipText">
      {`${payload[0].value} min`}
    </div>
  );
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

// Curseur personnalisé
const CustomCursorShadow = ({ points }) => (
  <Rectangle
    fill="black"
    opacity={0.1}
    x={points[0].x - 10}
    y={0}
    width={300}
    height={300}
  />
);

CustomCursorShadow.propTypes = {
  points: PropTypes.array.isRequired,
};

export default function AverageSessionsChart({ userId }) {
  const [sessions, setSessions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const data = await DataService.getUserAverageSessions(userId);
        if (data) {
          setSessions(data);
        } else {
          throw new Error("Aucune donnée reçue.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [userId]);

  if (loading) return <SpinLoader />;
  if (error) return <div>Erreur de chargement : {error}</div>;

  return (
    <ChartContainer>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={sessions}
          margin={{ top: 55, right: 10, left: 10, bottom: 10 }}
        >
          <XAxis
            tickLine={false}
            dataKey="day"
            axisLine={false}
            stroke="rgba(255, 255, 255, 0.66)"
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <Tooltip content={<CustomToolTip />} cursor={<CustomCursorShadow />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 7,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

AverageSessionsChart.propTypes = {
  userId: PropTypes.number.isRequired,
};
