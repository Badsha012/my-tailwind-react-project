import React, { use } from 'react';

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
            
        </div>
    );
};

export default MarksChar;