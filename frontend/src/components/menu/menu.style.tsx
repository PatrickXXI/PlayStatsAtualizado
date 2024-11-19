import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row', // Alinha os itens em linha
        justifyContent: 'flex-end', // Posiciona os itens no canto direito
        alignItems: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 19,
        paddingVertical: 10, // Adiciona um pouco de espaço vertical
        backgroundColor: '#10451d',
    },
    logo:{
        width: '20%', // largura da imagem
        height: 65, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
    },
    button: {
      
        marginVertical: 5,
        backgroundColor: '#4b7f52',
        borderRadius: 8,
        width: 115,
        height: 30,
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        borderColor:'white',
        borderWidth:1
    },
    itemText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        alignItems:'center',
        alignSelf:'center',
        marginTop:2
    },
});

export default styles;