import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const StockChartComponent = () => {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Load the dataset
            const data = await fetch('https://demo-live-data.highcharts.com/aapl-ohlcv.json')
                .then(response => response.json());

            // split the data set into ohlc and volume
            const ohlc = [],
                volume = [],
                dataLength = data.length;

            for (let i = 0; i < dataLength; i += 1) {
                ohlc.push([
                    data[i][0], // the date
                    data[i][1], // open
                    data[i][2], // high
                    data[i][3], // low
                    data[i][4] // close
                ]);

                volume.push([
                    data[i][0], // the date
                    data[i][5] // the volume
                ]);
            }

            setChartOptions({
                chart: {
                    title: 'AAPL Stock Chart' // Add chart name here
                },
                yAxis: [{
                    labels: {
                        align: 'left'
                    },
                    height: '80%',
                    resize: {
                        enabled: true
                    }
                }, {
                    labels: {
                        align: 'left'
                    },
                    top: '80%',
                    height: '20%',
                    offset: 0
                }],
                tooltip: {
                    shape: 'square',
                    headerShape: 'callout',
                    borderWidth: 0,
                    shadow: false,
                    positioner: function (width, height, point) {
                        const chart = this.chart;
                        let position;

                        if (point.isHeader) {
                            position = {
                                x: Math.max(
                                    // Left side limit
                                    chart.plotLeft,
                                    Math.min(
                                        point.plotX + chart.plotLeft - width / 2,
                                        // Right side limit
                                        chart.chartWidth - width - chart.marginRight
                                    )
                                ),
                                y: point.plotY
                            };
                        } else {
                            position = {
                                x: point?.series?.chart?.plotLeft,
                                y: point?.series?.yAxis?.top - chart?.plotTop
                            };
                        }

                        return position;
                    }
                },
                series: [{
                    type: 'ohlc',
                    id: 'aapl-ohlc',
                    name: 'AAPL Stock Price',
                    data: ohlc
                }, {
                    type: 'column',
                    id: 'aapl-volume',
                    name: 'AAPL Volume',
                    data: volume,
                    yAxis: 1
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 800
                        },
                        chartOptions: {
                            rangeSelector: {
                                inputEnabled: false
                            }
                        }
                    }]
                }
            });
        };

        fetchData();
    }, []);

    return (
        <div>
            {chartOptions && <HighchartsReact highcharts={Highcharts} options={chartOptions} />}
        </div>
    );
};

export default StockChartComponent;
