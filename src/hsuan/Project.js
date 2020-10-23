import React from "react";
import "./Project.css";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Form,
  FormControl,
  Accordion,
  Card,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Project() {
  return (
    <>
      <Container>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="搜尋商品"
          ></input>
        </div>
        <div className="sort">
          <h3>分類</h3>
        </div>
        <hr></hr>
        {/* <Accordion>
  <Card className="
    menu">
    <Card.Header className="">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="
    menu">
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}
      </Container>
      <ul id="product-menu">
  <li class="ui-state-disabled"><div>優惠推薦1</div></li>
  <ul>
      <li class="ui-state-disabled"><div>本月優惠</div></li>
      <li><div>免運專區</div></li>
  </ul>
  
  <li class="ui-state-disabled"><div>頭髮造型</div></li>
  <ul>
      <li class="ui-state-disabled"><div>髮蠟</div></li>
      <li><div>梳子</div></li>
  </ul>
  <li class="ui-state-disabled"><div>刮鬍修容</div></li>
  <ul>
      <li class="ui-state-disabled"><div>刮鬍刀</div></li>
      <li><div>刮鬍刷</div></li>
      <li><div>直立架</div></li>
  </ul>
  <li class="ui-state-disabled"><div>服飾配件</div></li>
  <ul>
      <li class="ui-state-disabled"><div>帽子</div></li>
      <li><div>墨鏡</div></li>
      <li><div>領帶/領結</div></li>
      <li><div>領帶夾</div></li>
      <li><div>口袋巾</div></li>
      <li><div>袖扣</div></li>
      <li><div>皮帶</div></li>
      <li><div>鈔票夾</div></li>
      
  </ul>
</ul>
    </>
  );
}

export default Project;
