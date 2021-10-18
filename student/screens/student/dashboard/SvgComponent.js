import React from 'react'
import { View, Text,Image } from 'react-native'
import Chemistry from "../../../assets/icons/chemistry.svg";
import SvgUri from "react-native-svg-uri"
export default function SvgComponent() {
    return (
       <SvgUri width="200" height="100" svgXmlData={Chemistry}/>
    )
}
