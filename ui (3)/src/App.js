import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {button}from 'react-bootstrap';

import {Route,Routes,Link,useNavigate} from 'react-router-dom'


import axios from 'axios';
import Link1 from './Link1';
import Parts from './parts/parts';

function App() {
  axios.defaults.withCredentials = true;
  const [cpu,setCpu] = useState([]);
  const [gpu,setGpu] = useState([]);
  const [mb,setMb] = useState([]);
  const [mem,setMem] = useState([]);
  const [cas,setCase] = useState([]);
  const [power,setPower] = useState([]);
  const [ssd,setSsd] = useState([]);
  const [hdd,setHdd] = useState([]);
  const [cooler,setCooler] = useState([]);
   useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/cpu")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,
            })
      )
      setCpu(cpu.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/gpu")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,
            })
      )
      setGpu(gpu.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/mb")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,
            })
      )
      setMb(mb.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/power")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,

            })
      )
      setPower(power.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/cooler")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,

            })
      )
      setCooler(cooler.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/ssd")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,

            })
      )
      setSsd(ssd.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/hdd")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,

            })
      )
      setHdd(hdd.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/case")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,

            })
      )
      setCase(cas.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  useEffect(async() => {
    try{
      const res = await axios.get("http://localhost:8000/mem")
      const _inputData = await res.data.map((rowData) => ({
              no: rowData.no,
              name: rowData.name,
              price: rowData.price,
              pre_price: rowData.pre_price,
              img: rowData.img,
              spec: rowData.spec,
              price1_3: rowData.price1_3,
              price1_4: rowData.price1_4,
              price3_1: rowData.price3_1,
              price3_2: rowData.price3_2,
              price3_3: rowData.price3_3,
              price3_4: rowData.price3_4,
              price3_5: rowData.price3_5,
              price3_6: rowData.price3_6,
              price6_1: rowData.price6_1,
              price6_2: rowData.price6_2,
              price6_3: rowData.price6_3,
              price6_4: rowData.price6_4,
              price6_5: rowData.price6_5,
              price6_6: rowData.price6_6,
              price12_1: rowData.price12_1,
              price12_2: rowData.price12_2,
              price12_3: rowData.price12_3,
              price12_4: rowData.price12_4,
              price12_5: rowData.price12_5,
              price12_6: rowData.price12_6,

            })
      )
      setMem(mem.concat(_inputData))
    } catch(e){
      console.error(e.message)
    }
  },[])
  function CPU() {
    return (
      <ul>
        {cpu.map(cpu => (
          <Parts parts={cpu} key={cpu.no} />
        ))}
      </ul>
    );
  }
  function GPU() {
    return (
      <ul>
        {gpu.map(gpu => (
          <Parts parts={gpu} key={gpu.no} />
        ))}
      </ul>
    );
  }
  function MB() {
    return (
      <ul>
        {mb.map(mb => (
          <Parts parts={mb} key={mb.no} />
        ))}
      </ul>
    );
  }
  function SSD() {
    return (
      <ul>
        {ssd.map(ssd => (
          <Parts parts={ssd} key={ssd.no} />
        ))}
      </ul>
    );
  }
  function HDD() {
    return (
      <ul>
        {hdd.map(hdd => (
          <Parts parts={hdd} key={hdd.no} />
        ))}
      </ul>
    );
  }
  function CASE() {
    return (
      <ul>
        {cas.map(cas => (
          <Parts parts={cas} key={cas.no} />
        ))}
      </ul>
    );
  }
  function COOLER() {
    return (
      <ul>
        {cooler.map(cooler => (
          <Parts parts={cooler} key={cooler.no} />
        ))}
      </ul>
    );
  }
  function POWER() {
    return (
      <ul>
        {power.map(power => (
          <Parts parts={power} key={power.no} />
        ))}
      </ul>
    );
  }
  function RAM() {
    return (
      <ul>
        {mem.map(mem => (
          <Parts parts={mem} key={mem.no} />
        ))}
      </ul>
    );
  }

  return (
    <div className="App">
      <div className='nav_wrapper'>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand  href="/">오픈 소스 14조</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <li>
                  <Nav.Link href="/CPU">CPU</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/GPU">그래픽카드</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/MB">메인보드</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/CASE">케이스</Nav.Link>
                </li>  
                <li>
                  <Nav.Link href="/COOLER">쿨러</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/HDD">하드디스크</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/SSD">SSD</Nav.Link>
                </li>
                <li>  
                  <Nav.Link href="/POWER">파워</Nav.Link>
                </li>  
                <li>
                  <Nav.Link href="/RAM">메모리</Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className = 'button_container_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ri">
                <Routes>
                  <Route path='/' element ={<CPU/>}/>
                  <Route path='/CPU' element ={<CPU/>}/>
                  <Route path='/GPU' element ={<GPU />}/>
                  <Route path='/RAM' element ={<RAM />}/>
                  <Route path='/CASE' element ={<CASE />}/>
                  <Route path='/COOLER' element ={<COOLER />}/>
                  <Route path='/HDD' element ={<HDD />}/>
                  <Route path='/SSD' element ={<SSD />}/>
                  <Route path='/POWER' element ={<POWER />}/>
                  <Route path='/MB' element ={<MB />}/>
                  <Route exact path='/:no' element={<Link1/>} />
                </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 
}

export default App;
