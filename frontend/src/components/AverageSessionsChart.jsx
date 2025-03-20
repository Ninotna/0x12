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

