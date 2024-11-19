import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center'
    },
    logo:{
        width: 55, // largura da imagem
        height: 70, // altura da imagem
        resizeMode: 'cover',
    },
    input: {

        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 15, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'gold',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'white'
    },
    title:{
        marginTop:80,
        alignSelf:'center',
        fontSize:35,
        fontWeight: 'normal',
        color:'white'
        
    },
    button:{
        backgroundColor: '#4b7f52',
        borderRadius:10,
        width: 293,
        height: 50,
        margin:10,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:3
    },
    
});

export default styles;