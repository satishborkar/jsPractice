import React from "react";

import HelloComponent from './1_Hello';
import HelloProps from './2_HelloWithProps';
import Button from './3_CompWithMethod';
import ButtonWithState from "./4_CompWithState";
import ButtonWithStateChange from "./5_StateChange";
import EventComponent from "./6_SyntheticEvents";
import Incrementer from "./7_Assignment/Incrementer";
import ControlledComponent from "./7_ControlledComponents";
import Calculator from "./8_CalculatorComponent";
import ListComponent from "./9_ListComponent";
import DPComponent from "./10_DefaultProps";
import PTComponent from "./11_PropTypes";

let employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ramakant" },
    { id: 4, name: "Subodh" },
    { id: 5, name: "Papa Rao" }
];

class Root extends React.Component {
    render() {
        return <div>
            <h1 className="text-danger">Hello There from Root</h1>
            {/* <HelloComponent />
            <HelloComponent></HelloComponent> */}
            {/* <HelloProps fname={"Manish"} lname={"Sharma"}/> */}
            {/* <Button/> */}
            {/* <ButtonWithState/> */}
            {/* <ButtonWithStateChange /> */}
            {/* <EventComponent/> */}
            {/* <Incrementer /> */}
            {/* <ControlledComponent/> */}
            {/* <Calculator /> */}
            {/* <ListComponent items={employees} /> */}

            {/* <DPComponent content={"Just for Fun"} fColor="red" bColor="blue" />
            <DPComponent content={"Just for Fun"} />
            <DPComponent content={"Just for Fun"} fColor="blue" /> */}

            <PTComponent age={10} now={new Date().toLocaleTimeString()}/>
        </div>;
    }
}

export default Root;