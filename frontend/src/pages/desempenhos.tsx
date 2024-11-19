import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MenuDesempenhos from '../components/menuDesempenhos';


interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Desempenhos: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#10451d'}}>
      <MenuDesempenhos navigation={navigation} />
    </View>
  );
}
export default Desempenhos;