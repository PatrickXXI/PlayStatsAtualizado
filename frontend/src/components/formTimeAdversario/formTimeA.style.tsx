import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor:'#10451d'
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
    title:{
        alignSelf:'center',
        fontSize:26,
        fontWeight: 'normal',
        color:'white',
        marginTop: 120,
    },
    button:{
        marginTop: 10,
        backgroundColor: '#4b7f52',
        borderRadius:10,
        width: 300,
        height: 50,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonVoltar:{
        marginTop: 20,
        backgroundColor: '#000f81',
        borderRadius:10,
        width: 300,
        height: 50,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:4
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white'
      },
      picker: {  
        width: '60%',
        height: 52,
        borderColor: 'green',
        marginBottom: 20,
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
      },
      logo:{
        width: 65, // largura da imagem
        height: 80, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
        alignSelf:'center',
        marginTop:35
    },
});

export default styles;