import React from "react";
import PropTypes from "prop-types";
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
import useAverageSessions from "../services/API/useAverageSessions";
import SpinLoader from "../components/Loader/SpinLoader";

// Utilisation de styled components pour styliser le composant

const ChartContainer = styled.div`
  width: 258px;
  height: 263px;
  background-color: #ff0000;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h3`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.66);
  position: absolute;
  top: 25px;
  left: 25px;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TooltipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 10px;
  background-color: white;
`;

// 3️⃣ Ajout d'un tooltip et d'un curseur personnalisé pour AverageSessionsChart

const CustomToolTip = ({ active, payload }) => {
    return active && payload ? (
      <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>
    ) : null;
  };
  
  const CustomCursorShadow = ({ points }) => {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x - 10}
        y={0}
        width={300}
        height={300}
      />
    );
  };

  // 4️⃣ Ajout d'une gestion des erreurs et logs pour débogage de AverageSessionsChart

const AverageSessionsChart = ({ userId }) => {
    const { isLoading, data, error } = useAverageSessions("user-sessions", userId);
  
    if (error) {
      return <div>Erreur de chargement...</div>;
    }
  
    console.log("Données récupérées pour AverageSessionsChart:", data);
  
    return (
      <ChartContainer>
        {isLoading ? (
          <SpinLoader />
        ) : (
          <ChartWrapper>
            <Title>Durée moyenne des sessions</Title>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={data}
                width={500}
                height={300}
                margin={{ top: 55, right: 10, left: 10, bottom: 10 }}
              >
                <XAxis
                  tickLine={false}
                  dataKey="day"
                  axisLine={false}
                  stroke="rgba(255, 255, 255, 0.66)"
                />
                <YAxis hide={true} domain={["dataMin-10", "dataMax+10"]} />
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
          </ChartWrapper>
        )}
      </ChartContainer>
    );
  };
  
  AverageSessionsChart.propTypes = {
    userId: PropTypes.number.isRequired,
  };
  
  export default AverageSessionsChart;