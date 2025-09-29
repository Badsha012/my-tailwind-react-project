import React from 'react';
import { Line, LineChart } from 'recharts';
const resultData=[
  { "id": 1, "name": "Student 1", "physics": 85, "chemistry": 78 },
  { "id": 2, "name": "Student 2", "physics": 72, "chemistry": 80 },
  { "id": 3, "name": "Student 3", "physics": 90, "chemistry": 88 },
  { "id": 4, "name": "Student 4", "physics": 68, "chemistry": 75 },
  { "id": 5, "name": "Student 5", "physics": 77, "chemistry": 82 },
  { "id": 6, "name": "Student 6", "physics": 95, "chemistry": 91 },
  { "id": 7, "name": "Student 7", "physics": 81, "chemistry": 79 },
  { "id": 8, "name": "Student 8", "physics": 74, "chemistry": 70 },
  { "id": 9, "name": "Student 9", "physics": 88, "chemistry": 85 },
  { "id": 10, "name": "Student 10", "physics": 79, "chemistry": 76 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
          <Line dataKey="physics"></Line>
          <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
            
        </div>
    );
};

export default ResultChart;
