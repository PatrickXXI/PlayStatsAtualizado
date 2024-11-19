import  {View} from 'react-native';
import FormCadastro from '../components/formCadastro/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const CadastrarTimeP: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#10451d'}}>
      <FormCadastro navigation ={navigation}/>
    </View>
  );
}
export default CadastrarTimeP;