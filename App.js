import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Estado } from './Componentes/Estado';
import { Boton } from './Componentes/Atomicos';
import { Calculadora } from './Componentes/Calculadora';
import { Login } from './Componentes/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}></Text>
    </View>
  )
}

export function Cuerpo(){
  return(
    <View style={styles.contenido}>
        <Calculadora/>
    </View>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}></Text>
    </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{props.op1}</Text>
        <Text style={styles.texto}>{props.op2}</Text>
        <Text style={styles.texto}>{props.op3}</Text>
        <Text style={styles.texto}>{props.op4}</Text>
    </View>
  )
}

export const Pie3=({opA,opB,opC,opD})=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{opA}</Text>
        <Text style={styles.texto}>{opB}</Text>
        <Text style={styles.texto}>{opC}</Text>
        <Text style={styles.texto}>{opD}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#909090',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'',
    
  },
  pie:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#909090',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  contenido:{
    flex:8,
    alignItems:'stretch',
    padding:20
  },
  texto:{
    color:"#fff",
    fontSize:30
  }
});

