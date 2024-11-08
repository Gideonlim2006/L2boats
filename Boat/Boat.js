import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    box: {
        padding: 10
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        textAlign: "center",
        marginTop: 20,
        borderColor: '#000',
        backgroundColor: '#808080',

        color: '#fff',
        padding: 10
    },
    image: {

        backgroundColor: '#808080',

    }
})

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <View style={[styles.title, { flexDirection: 'row', alignItems: 'center'}]}>
                <Icon name={icon_name} size={30} color="#fff" />
                <Text style={{ marginLeft: 8, fontSize: 24, fontWeight: 'bold', color: '#fff' }}>
                    {name}
                </Text>
            </View>
            <Text style={[styles.description, ]}> {description} </Text>
            <View style={[styles.box, styles.image]}>
                <Image source={poster} style={{ width: 391.5, height: 300 }} />
            </View>
            <Text></Text>
        </View>
    );
};

export default Boat;
