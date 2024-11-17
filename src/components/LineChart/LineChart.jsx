import { useEffect, useState } from "react";
import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {
    const [lineCharts, setLineChart] = useState([]);

    useEffect(() => {
        fetch('./linechart.json')
        .then(res => res.json())
        .then(data => setLineChart(data))
    }, [])
    return (
        <div>

<LChart width={400} height={400} data={lineCharts}>
    <Line dataKey ="math" stroke='red'/>
    <Line dataKey ="english" stroke='yellow'/>
  </LChart>

            
        </div>
    );
};

export default LineChart;