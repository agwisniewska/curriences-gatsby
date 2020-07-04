import React, { useEffect, useState } from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { DataProvider } from "../components/data-provider"

interface LineChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data = [{name: 'Page A', uv: 600, pv: 800, amt: 1200}];

const renderLineChart = (data: LineChartData[]) => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);


export default function Chart(props) {

  // TODO: Move to data provider, create context, child should stateless component


  return <DataProvider>

    {renderLineChart(data)}
  </DataProvider>
}