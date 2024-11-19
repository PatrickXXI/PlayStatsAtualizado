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
    button1:{
        marginTop: 100,
        backgroundColor: '#4b7f52',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23, 
        borderWidth:2,
        borderColor:'gold'
    },
    button:{
        marginTop: 10,
        backgroundColor: '#4b7f52',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonDesconectar:{
        marginTop: 10,
        backgroundColor: '#000f81',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },  
    itemText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 15
    },
    logo:{
        marginTop:35,
        width: 65, // largura da imagem
        height: 80, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
        alignSelf:'center'
    },
});
export default styles;