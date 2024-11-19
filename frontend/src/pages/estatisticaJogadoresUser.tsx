import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EstatisticasJogadoresUser from '../components/estatisticasJogadoresUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const EstatisticaJogadoresUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#1b4332'}}>
      <EstatisticasJogadoresUser navigation={navigation} />
    </View>
  );
}
export default EstatisticaJogadoresUser;