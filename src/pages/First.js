import { StatusBar } from 'expo-status-bar';
import {  Text, View , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function First() {

    const navigation = useNavigation();

    function navigationToSecond(){
        navigation.navigate("Second")
    }

    return (
    <View >
        <Text>Augusto Shigeru</Text>
        <TouchableOpacity onPress={navigationToSecond} >
            <Text style={{ backgroundColor: "#E02061"}}>Não clique aqui</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
    );
}

