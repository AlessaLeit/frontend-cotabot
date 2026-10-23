import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import "./ApexChart.scss";

const ApexChart = ({ graphData }) => {
    const dates = useMemo(() => {
        return (graphData?.conversions ?? []).map((item) => [
            new Date(item.created_at).getTime(),
            item.conversion_value,
        ]);
    }, [graphData]);

    const series = [
        {
            name: "Cotação",
            data: dates,
        },
    ];

    const options = {
        chart: {
            type: "area",
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                autoSelected: "zoom",
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
        },
        title: {
            align: "left",
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        yaxis: {
            labels: {
                formatter: (val) => val.toFixed(4),
            },
        },
        xaxis: {
            type: "datetime",
            labels: {
                datetimeUTC: false,
            },
        },
        tooltip: {
            shared: false,
            x: {
                format: "dd/MM/yyyy HH:mm",
            },
            y: {
                formatter: (val) => val.toFixed(4),
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={255}
            />
        </div>
    );
};

export default ApexChart;
