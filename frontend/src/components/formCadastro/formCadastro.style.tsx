import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    
    innerContainer: {
        flexGrow: 1, // Permite que o ScrollView se expanda conforme necessário
        justifyContent: 'center', // Alinha verticalmente os itens
        alignItems: 'center', // Alinha horizontalmente os itens
        padding: 20, // Adiciona um espaçamento interno
    },
    input: {
        
        width: '100%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'gold',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'white'
    },
    title:{
        
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'normal',
        color: 'white'
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
    buttonCancelar:{
        backgroundColor: '#fdc500',
        borderRadius:10,
        width: 293,
        height: 50,
        margin:10,
        borderWidth:1,
        borderColor:'white'
    },
    buttonTextSalvar:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:3
    },
    buttonTextCancelar:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:3
    },
});

export default styles;