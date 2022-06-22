import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png'

import Texto from '../componentes/Texto.js';
const width = Dimensions.get('screen').width;

export default function Cestas(){
    return <>
                <Image source={topo} style={estilos.topo} /> 
                <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
                <View style={estilos.cesta}>

                    <Texto style={estilos.nome}>Cesta de Verdutas</Texto>
                    
                    <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>

                    </View>

                    <Texto style={estilos.descricao}>
                          Uma cesta com produtos selecionados
                          cuidadosamente da fazenda direto
                          para sua cozinha
                    </Texto>
                    <Texto style={estilos.preco}>R$ 40,00</Texto>

                </View>

           </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "MontserratRegular",
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16, //altura da fonte
        lineHeight: 16, //
        color: "white", //cor da fonte que é branco
        fontWeight: "bold", //definir a gordura da fonte
        padding: 16, //margem da fonte
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeigth: 42, //tamanho da linha
        fontWeight: "bold",
    },

    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }

});