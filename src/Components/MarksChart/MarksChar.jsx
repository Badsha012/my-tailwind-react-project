import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChar = ({marksPromise}) => {

    const marksDataRes= use(marksPromise);
    const markData =marksDataRes.data;
    //console.log(marksData);

    // data procing

    const marksChartData =markData.map(studentdata=>{
        const student={
           id: studentdata.id,
           name:studentdata.name,
           physics:studentdata.marks.physics,
           math:studentdata.marks.math,
           chemistry:studentdata.marks.chemistry,
        }
        const avg=(student.physics+student.chemistry+student.math)/3;
        student.avg=avg;
        return student;
    })
    console.log(marksChartData)
    return (
        <div>
            <BarChart width={500} height={500} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
                <Bar dataKey="physics" fill='green'></Bar>

            </BarChart>
            
        </div>
    );
};

export default MarksChar;