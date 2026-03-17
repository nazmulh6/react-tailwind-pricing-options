import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData =  [
    {
      "id": 1,
      "name": "Rahim",
      "physics": 85,
      "chemistry": 78,
      "math": 90
    },
    {
      "id": 2,
      "name": "Karim",
      "physics": 72,
      "chemistry": 80,
      "math": 75
    },
    {
      "id": 3,
      "name": "Ayesha",
      "physics": 88,
      "chemistry": 92,
      "math": 95
    },
    {
      "id": 4,
      "name": "Nusrat",
      "physics": 67,
      "chemistry": 70,
      "math": 73
    },
    {
      "id": 5,
      "name": "Sakib",
      "physics": 91,
      "chemistry": 85,
      "math": 89
    }
  ]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={400} height={400} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='purple'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;