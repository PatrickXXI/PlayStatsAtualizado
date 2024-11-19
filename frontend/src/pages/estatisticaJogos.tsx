import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EstatisticasJogos from '../components/estatisticasJogos';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const EstatisticaJogos: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#073b4c'}}>
      <EstatisticasJogos navigation={navigation} />
    </View>
  );
}
export default EstatisticaJogos;