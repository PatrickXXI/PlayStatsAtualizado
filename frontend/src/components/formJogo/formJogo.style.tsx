import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
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
        fontSize:35,
        fontWeight: 'normal',
        color:'white',
        marginTop: 95
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
        marginTop:3
    },
       // Estilo para o item de cada time na lista
    timeItem: {
        padding: 15,  // Espaçamento interno para o item
        marginVertical: 5, // Margem vertical para separar os itens
        backgroundColor: 'white', // Cor de fundo do item
        borderRadius: 5, // Bordas arredondadas
        width:'100%'
        
    },

    // Estilo para o texto dentro de cada item (nome do time)
    timeText: {
        fontSize: 16, // Tamanho da fonte
        fontWeight: 'bold', // Negrito para destacar o nome do time
        color: '#333', // Cor do texto (cor escura para boa legibilidade)
        textAlign: 'center', // Alinhar o texto ao centro
    },
    buttonTime:{
        marginTop:10,
        backgroundColor: 'white',
        borderRadius:8,
        width: '80%',
        height: 40,
        borderWidth:3,
        borderColor:'#2a9134'
    },
    buttonTextTime:{
        textAlign:'center',
        fontSize: 20,
        color:'#2a9134',
        
    },
    logo:{
        width: 65, // largura da imagem
        height: 80, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
        alignSelf:'center'
    },
});
export default styles;