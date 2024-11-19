import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MenuCadastros from '../components/menuCadastros';


interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Cadastros: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#10451d'}}>
      <MenuCadastros navigation={navigation} />
    </View>
  );
}
export default Cadastros;