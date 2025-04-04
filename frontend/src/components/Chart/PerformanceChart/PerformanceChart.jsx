// Radar chart for user's performances

import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  Text,
  PolarGrid,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import DataService from "../../../services/API/DataService";
import SpinLoader from "../../Loader/SpinLoader";

export default function PerformanceChart({ userId }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await DataService.getUserPerformance(userId);

        if (result && result.kind) {
          const kindMap = result.kind;
          const formatted = result.data.map((item) => ({
            kind: kindMap[item.kind],
            value: item.value,
          }));
          setData(formatted);

          // 						const { kind, data: perfData } = result.data
          // const formatted = perfData.map((item) => ({
          // 	kind: kind[item.kind],
          // 	value: item.value,
          // }))
          // setData(formatted)
        } else {
          throw new Error("Aucune donnée de performance");
        }
      } catch (err) {
        console.error("❌ Erreur dans fetchData :", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  if (error) {
    return <div>Erreur de chargement...</div>;
  }

  return (
    <div className="chart__activity--performance">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="chart__performance">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
              <Radar
                dataKey="value"
                fill="#ff0000"
                fillOpacity={0.7}
                stroke="#ff0000"
              />
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                stroke="white"
                tickLine={false}
                tick={RadarChartTickRender}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

function RadarChartTickRender({ payload, x, y }) {
  return (
    <Text
      x={x}
      y={y}
      textAnchor="middle"
      verticalAnchor="middle"
      fill="#FFF"
      fontSize={11}
      style={{
        pointerEvents: "none",
        whiteSpace: "nowrap", // ✅ ne coupe jamais
      }}
    >
      {payload.value}
    </Text>
  );
}

PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

RadarChartTickRender.propTypes = {
  payload: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
};
