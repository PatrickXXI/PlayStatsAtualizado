import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 900,
        alignItems: 'center',
        backgroundColor: '#415d43'
    },
    title:{
        color: 'white',
        fontSize:25,
        borderBottomWidth: 5,
        borderBottomColor: 'gold',
        marginTop:10
    },
    button:{
        marginTop: 10,
        backgroundColor: '#014f86',
        borderRadius:15,
        width: 300,
        height: 60,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:7
    },  
    item: {
        borderBottomWidth: 5,
        borderBottomColor: 'white',
        width: 380,
      },
      text: {
        fontSize: 16,
        color:'white',
        marginTop:3
      }, 
      optionsButton: {
        padding: 1,
    },
    optionsText: {
        fontSize: 20,
        color:'#000f81',
        backgroundColor:'gold',
        borderRadius:50,
        width:28,
        textAlign:'center',
        alignSelf:'flex-end'
    }
})
export default styles;