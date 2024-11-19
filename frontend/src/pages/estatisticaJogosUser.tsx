import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EstatisticasJogosUser from '../components/estatisticasJogosUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const EstatisticaJogosUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#1b4332'}}>
      <EstatisticasJogosUser navigation={navigation} />
    </View>
  );
}
export default EstatisticaJogosUser;