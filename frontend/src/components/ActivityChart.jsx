import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import DataService from "../services/API/DataService";
import SpinLoader from "./Loader/SpinLoader";
import PropTypes from "prop-types";

// Styled Components
const ChartContainer = styled.div`
  width: 835px;
  height: 320px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 500;
`;

const CaptionContainer = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
`;

const CaptionDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${({ color }) => color};
`;

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 10px;
  color: #fff;
  background-color: #e60000;
`;

// Tooltip personnalisé
const CustomToolTip = ({ active, payload }) =>
  active && payload ? (
    <TooltipContainer>
      <div>{`${payload[1].value} Kg`}</div>
      <div>{`${payload[0].value} KCal`}</div>
    </TooltipContainer>
  ) : null;

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default function ActivityChart({ userId }) {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const data = await DataService.getUserActivity(userId);
        if (data) {
          setActivityData(data.sessions);
        } else {
          throw new Error("Aucune donnée reçue.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityData();
  }, [userId]);

  if (loading) return <SpinLoader />;
  if (error) return <div>Erreur de chargement : {error}</div>;

  return (
    <ChartContainer>
      <ChartHeader>
        <Title>Activité quotidienne</Title>
        <CaptionContainer>
          <CaptionDot color="#282D30" />
          <span>Poids (kg)</span>
          <CaptionDot color="#E60000" />
          <span>Calories brûlées (kCal)</span>
        </CaptionContainer>
      </ChartHeader>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={activityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis dataKey="day"tickFormatter={(day) => new Date(day).getDate()} tickLine={false} axisLine={false} fontSize={15} opacity={0.7} />
          <YAxis yAxisId="right" domain={[70,"dataMax"]} dataKey="kilogram" orientation="right" tickLine={false} axisLine={false} fontSize={15} opacity={0.7} />
          <YAxis yAxisId="left" dataKey="calories" orientation="left" domain={[0, 500]} hide />
          <Tooltip content={<CustomToolTip />} />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={8} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={8} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

ActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
};
