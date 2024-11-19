import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'column', // Alinha os itens em linha
        justifyContent: 'flex-end', // Posiciona os itens no canto direito
        alignItems: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 19,
        paddingVertical: 10, // Adiciona um pouco de espaço vertical
        backgroundColor: '#10451d',
    },
    button:{
        marginTop: 170,
        backgroundColor: '#4b7f52',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23,
        borderWidth:2,
        borderColor:'gold' 
    }, 
    button1:{
        marginTop: 5,
        backgroundColor: '#000f81',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },
    textButtonEditar:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 15
    },
    textButtonVoltar:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 15
    },
    text:{
        fontSize:20,
        color:'white',
        marginTop:30,
    },
   
});
export default styles;