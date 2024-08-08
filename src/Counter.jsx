import { useState } from "react";
function Item ({name, isPacked}){
    if(isPacked){
        return (<li>{name}✓</li>);
    }
    return (<li>{name}✘</li>);
}
export default function Counter(){
  return (
    <ul>
        <Item name="Battery" isPacked={(true)}/>
        <Item name="Clothes"/>
        <Item name="Sunglasses"/>
        <Item name="toothblush"/>
    </ul>);
}
    
