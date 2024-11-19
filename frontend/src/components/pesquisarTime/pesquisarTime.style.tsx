import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: 500,
        alignItems: 'center'
    },
    input: {
        marginTop:'30%',
        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 15, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'gold',
        borderWidth:2,
        borderRadius:7,
        backgroundColor:'white',
        textAlign: 'center'
    },
    buttonTime:{
        marginTop:10,
        backgroundColor: '#000f81',
        borderRadius:8,
        width: '80%',
        height: 40,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonTextTime:{
        textAlign:'center',
        fontSize: 20,
        color:'white',
        marginTop:3
    },
    
});

export default styles;