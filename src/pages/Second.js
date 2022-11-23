import { StatusBar } from 'expo-status-bar';
import { Text, View , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Second() {

    const navigate = useNavigation();

    function navigateBack(){
        navigate.goBack();
    }

    return (
        <View >
            <TouchableOpacity onPress={navigateBack} >
                <Text style={{ backgroundColor: "#202061"}}>Agora pode clicar</Text>
            </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
    );
}

