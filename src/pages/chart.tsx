import React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { useDataState } from "../context/use-data-state"

const lineStrokes = [
  '#8883d8',
  '#82ca9d',
  '#6d888b',
  '#25f486',
  '#d1d91f',
  '#8c0abb',
  '#0cbbde',
  '#ce3507',
  '#5a2b86',
  '#e68c8d'
];

export default function Chart() {
  const { loading, results, params } = useDataState();

  return (
    <div>
      <h1> Chart </h1>
      {loading && <span> Loading .... </span>}

      {!loading && results && results.length &&  <LineChart width={800} height={500} data={results}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />

        {params.foreignCurrencies.map((foreignCurrency: string, index: number) => (
          <Line
            type="linear"
            dot={false}
            dataKey={foreignCurrency}
            key={foreignCurrency}
            stroke={lineStrokes[index % lineStrokes.length]}
          />
        ))}
      </LineChart>}
    </div>)
}