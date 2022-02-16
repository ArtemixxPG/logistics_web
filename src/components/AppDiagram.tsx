import * as React from "react";

import {Bar} from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    BarController, ChartData
} from 'chart.js';
import {useEffect, useState} from "react";


interface AppDiagram{
    barCharData: []
}

// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
//
// function random_rgba() {
//     let o = Math.round, r = Math.random, s = 255;
//     return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }
//
// function  createDataset(initData){
//     let dataset = [];
//     for(let i = 0; i < initData.length; i++){
//         let column = {
//             data: [initData[i].volume],
//             label: initData[i].expression_name,
//             borderColor: getRandomColor(),
//             backgroundColor: random_rgba(),
//             fill: true
//         }
//         dataset.push(column)
//     }
//     return dataset;
// }

export const Diagram = ({ barCharData}: AppDiagram) => {



    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        BarElement,
        BarController,
    );



    const barChartData = {
        labels: [""],
        datasets: barCharData

    };




    const options = {
        scales: {
            x: {
                stacked: false
            },
            y: {
                stacked: false
            }
        },
        style:{
            borderWidth:{
                left:"0px",
                top: "0px"
            },
        },
        label:{
            display: true,
            text: "COVID-19 Cases of Last 6 Months",
            fontSize: 20
        },
        maintainAspectRatio: false
    };



    const barChart = (


                <Bar
                    options={options}
                    data={barChartData}
                />


    );

    return barChart;
};
