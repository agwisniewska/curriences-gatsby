import React, { useContext } from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { IContext, Context} from "../components/data-provider"

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
  const { state } = useContext<IContext>(Context);

  const {loading, results, params} = state;

  debugger;

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

        {params.foreignCurrencies.map((foreignCurrency, index) => (
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