import React from 'react';
import { Route, Link } from 'react-router-dom';
import users from './parts/sample';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Chart from './parts/parts-1';
import { useState } from 'react';
import Part1 from './parts/parts-1';
import Part3 from './parts/parts-3';
import Part6 from './parts/parts-6';
import Part12 from './parts/parts-12';

function Link1() {
  const location = useLocation();
  const [graph, setGraph] = useState(0);
  const onPart1 = () => {
    setGraph(0);
  } 
  const onPart3 = () => {
    setGraph(1);
  } 
  const onPart6 = () => {
    setGraph(2);
  } 
  const onPart12 = () => {
    setGraph(3);
  } 
  return (
    <div>
      <div style={{ textAlign: "center" }}>
          <div style={{fontSize: "20px", color: "black"}}>{location.state.name}</div>
      </div>
      <div style={{width: "1260px", height: "400px"}}>
        <div style={{marginTop: "100px", textAlign: "center", display: 'flex', justifyContent: 'center'}}>
          <div>
            {graph === 0
            ?<Part1 no={location.state.no} price4={location.state.price} price3={location.state.pre_price} price2={location.state.price1_3} price1={location.state.price1_4}/>
            :null
            }
            {graph === 1
            ?<Part3 no={location.state.no} price6={location.state.price} price5={location.state.price3_2} price4={location.state.price3_3} price3={location.state.price3_4} price2={location.state.price3_5} price1={location.state.price3_6}/>
            :null
            }
            {graph === 2
            ?<Part6 no={location.state.no} price6={location.state.price} price5={location.state.price6_2} price4={location.state.price6_3} price3={location.state.price6_4} price2={location.state.price6_5} price1={location.state.price6_6}/>
            :null
            }
            {graph === 3
            ?<Part12 no={location.state.no} price6={location.state.price} price5={location.state.price12_2} price4={location.state.price12_3} price3={location.state.price12_4} price2={location.state.price12_5} price1={location.state.price12_6}/>
            :null
            }
          </div>
        </div>
      </div>
      <div style={{width: "1260px",marginTop: "20px",textAlign: "center" }}>
        <div>
          <Button style={{width: "100px",marginTop: "20px",textAlign: "center" }} onClick={onPart1}>1개월</Button>
        </div>
      </div>
      <div style={{width: "1260px",marginTop: "20px",textAlign: "center" }}>
        <div>
          <Button style={{width: "100px",marginTop: "20px",textAlign: "center" }} onClick={onPart3}>3개월</Button>
        </div>
      </div>
      <div style={{width: "1260px",marginTop: "20px",textAlign: "center" }}>
        <div>
          <Button style={{width: "100px",marginTop: "20px",textAlign: "center" }} onClick={onPart6}>6개월</Button>
        </div>
      </div>
      <div style={{width: "1260px",marginTop: "20px",textAlign: "center" }}>
        <div>
          <Button style={{width: "100px",marginTop: "20px",textAlign: "center" }} onClick={onPart12}>12개월</Button>
        </div>
      </div>
    </div>
  );
}

export default Link1;