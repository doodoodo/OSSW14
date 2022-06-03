import { LineChart, Line, YAxis, XAxis } from 'recharts';
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

let data = [
    {
        uv: 100
    },
    {
        uv: 1
    },
    {
        uv: 1
    },
    {
        uv: 1
    },
  ];

function Part1({no, price1, price2, price3, price4}) {
    
   data[0].uv=price1;
   data[1].uv=price2;
   data[2].uv=price3;
   data[3].uv=price4;
    return (
    <LineChart width={600} height={400} data={data}>
        <YAxis/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
    );
    
}

export default Part1