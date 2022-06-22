import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const estilos = StyleSheet.create({

    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }

});

export default function Texto({children, style}){
    let estilo = estilos.texto;

    if(style?.fontWeight=="bold"){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[estilo, style]}>{children}</Text>
}

