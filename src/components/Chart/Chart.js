import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValues)

    return (
        <div className="chart">
            {props.dataPoints.map((datapoint) => {
                return (
                    <ChartBar 
                        key={datapoint.label} 
                        value = {datapoint.value} 
                        maxValue={totalMax} 
                        label={datapoint.label} 
                    />
                )
            })}
        </div>
    )

}

export default Chart;