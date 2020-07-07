import React from "react"
import Layout from "../components/layout"
import Chart from "./chart"
import { DataProvider } from "../context/data-provider"
import { Controls } from "../components/controls"

export default function Home() {
  return (
      <DataProvider>
        <Layout>
          <Controls />
          <Chart />
        </Layout>
      </DataProvider>
  )
}
