import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor: '#10451d'
    },
    input: {
        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'gold',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
    },
    buttonSalvar:{
        marginTop: 10,
        backgroundColor: '#4b7f52',
        borderRadius:10,
        width: 300,
        height: 50,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonVoltar: {
        marginTop: 20,
        backgroundColor: '#000f81',
        borderRadius:10,
        width: 300,
        height: 50,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonDados:{
        width: '50%',               // Largura percentual em relação ao pai
        maxWidth: 250,             // Limitar a largura máxima (opcional)
        marginVertical: 7, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'blue',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white',
        marginTop:10
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:5,
        resizeMode: 'cover',
    },
    title: {
        marginTop:45,
        fontSize:30,
        color:'white',
        borderBottomWidth:5,
        borderColor:'blue'
    },
    titleEdicao:{
        marginTop:45,
        fontSize:20,
        color:'white',
        
    },
    titleEdicao1:{
        
        fontSize:20,
        color:'white',
       
    },
    text:{
        fontSize:20,
        color:'white',  
    }
})
export default styles;