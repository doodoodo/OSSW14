import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Parts( {parts} ) {
  const navigate = useNavigate();

  const onClickParts = () => {
    navigate(`/${parts.no}`,{state: {no:parts.no, name:parts.name, price:parts.price, pre_price:parts.pre_price, price1_3:parts.price1_3,price1_4:parts.price1_4,price3_1:parts.price3_1,price3_2:parts.price3_2,price3_3:parts.price3_3,price3_4:parts.price3_4,price3_5:parts.price3_5,price3_6:parts.price3_6,price6_1:parts.price6_1,price6_2:parts.price6_2,price6_3:parts.price6_3,price6_4:parts.price6_4,price6_5:parts.price6_5,price6_6:parts.price6_6,price12_1:parts.price12_1,price12_2:parts.price12_2,price12_3:parts.price12_3,price12_4:parts.price12_4,price12_5:parts.price12_5,price12_6:parts.price12_6}});
  };

  return (
    <li style={{ height: "200px", marginTop: "20px", listStyleType: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'row', height: "180px" }}>
        <div style={{ width: "180px", height: "180px" }}>
         <img src={parts.img}></img>
        </div>
        <div style={{ flexDirection: 'row', width: "800px", height: "180px" }}>
          <div style={{ width: "800px", height: "30px" }}>
            <button style= {{ textDecoration: 'none', fontSize: "20px", color: "black", border: 'none', backgroundColor: "white"}} onClick= {onClickParts}>{parts.name}</button>
          </div>
          <hr />
          <div style={{width: "800px", height: "120px", marginTop: "30px"}}>
            <p style={{ fontSize: "12px"}}>
              {parts.spec}
            </p>
          </div>
        </div>
        <div style={{width: "300px", height: "180px", textAlign: "center"}}>
          <div style={{marginTop: "70px"}}>
            {
              parts.price === '0'
              ?<div style ={{color: "black", fontSize: "20px"}}>일시품절</div>
              :(
              (parts.price === parts.pre_price)
              ? <div style ={{color: "green", fontSize: "20px"}}>{parts.price}원</div>
              : ( parts.pre_price > parts.price
                ? <div>
                  <div style ={{color:"red", fontSize: "20px"}}>{parts.price}원</div>
                  <div style ={{color:"red", fontSize: "20px"}}>{parts.pre_price-parts.price}원▼</div>
                </div>
                :( parts.pre_price < parts.price
                  ? <div> 
                    <div style ={{color:"blue", fontSize: "20px"}}>{parts.price}원</div>
                    <div style ={{color:"blue", fontSize: "20px"}}>{parts.price-parts.pre_price}원▲</div>
                  </div>
                  :null
                  )
                )
              )
            }
          </div>
        </div>
      </div>
      <hr />
    </li>
  );
}
export default Parts;