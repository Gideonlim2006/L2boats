import { View, Text, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={icon_name} size={30} color="#808080" />
                <Text style={{ marginLeft: 8, fontSize: 24, fontWeight: 'bold', color: '#808080' }}>
                    {name}
                </Text>
            </View>
            <Text style={{color: '#808080'}}> {description} </Text>
            <Image source={poster} style={{ width: 400, height: 300 }} />
            <Text></Text>
        </View>
    );
};

export default Boat;
