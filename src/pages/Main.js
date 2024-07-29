import React, { useState} from 'react';
import {Container} from '@mui/material'
import TabsComponent from '../component/Tabs';
import {OneSwipe } from '../component/Swiper';
import {TwoSwipe} from "../component/two/Two";
import {ThreeSwipe} from "../component/three/Three";
import {FourSwipe, Five} from "../component/four/Four";
// import {} from "../component/five/Five";
const VALUE ={
    itemOne:"one",
    itemTwo:"two",
    itemThree:"three",
    itemFour:"four",
    itemFive:"five"
}

const Main = () => {
    const GetCategories=({value})=>{
        switch(value){
            case VALUE.itemOne:{
                return <OneSwipe/>
            }
            case VALUE.itemTwo:{
                return <TwoSwipe/>
            }
            case VALUE.itemThree:{
                return <ThreeSwipe/>
            }
            case VALUE.itemFour:{
                return <FourSwipe/>
            }
            case VALUE.itemFive:{
                return <Five/>
            }
            default: return<></>
        }
    }

    const categorySelect = [
    {value: VALUE.itemOne, label: "one"},
    {value: VALUE.itemTwo, label: "two"},
    {value: VALUE.itemThree, label: "three"},
    {value: VALUE.itemFour, label: "four"},
    {value: VALUE.itemFive, label: "five"}
    ]

    const [value, setValue] = useState(categorySelect[0].value);

    return (
        <Container>
            <TabsComponent categorySelect={categorySelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
        </Container>
    );
}

export default Main;