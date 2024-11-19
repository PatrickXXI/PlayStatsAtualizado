import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EstatisticasJogadores from '../components/estatisticasJogadores';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const EstatisticaJogadores: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#073b4c'}}>
      <EstatisticasJogadores navigation={navigation} />
    </View>
  );
}
export default EstatisticaJogadores;