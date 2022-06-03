import { LineChart, Line, YAxis } from 'recharts';
import React, { PureComponent } from 'react';

const data = [
    {
        uv: 4000
    },
    {
        uv: 3000
    },
    {
        uv: 2000
    },
    {
        uv: 2780
    },
    {
        uv: 4000
    },
    {
        uv: 3000
    },
  ];
function Part3({no, price1, price2, price3, price4, price5, price6}) { 
    data[0].uv=price1;
    data[1].uv=price2;
    data[2].uv=price3;
    data[3].uv=price4;
    data[4].uv=price5;
    data[5].uv=price6;
  return (
    <LineChart width={600} height={400} data={data}>
        <YAxis/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
    );
    
}

export default Part3