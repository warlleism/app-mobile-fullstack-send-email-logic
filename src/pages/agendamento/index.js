import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions, StatusBar, TouchableHighlight, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const screenWidth = Dimensions.get("window").width;

const Agendamento = () => {

    const navigation = useNavigation()
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <SafeAreaView>
            <ScrollView style={{ position: 'relative' }}>

                <View style={{ width: screenWidth, height: 300, overflow: "hidden", position: "relative", backgroundColor: '#9F9900' }}>
                    <TouchableHighlight onPress={() => navigation.navigate('Main')}
                        activeOpacity={1}
                        underlayColor="#9F9900"
                        style={{
                            position: 'absolute',
                            top: 20,
                            left: 10,
                            borderRadius: 100,
                        }} >
                        <Icon name="arrowleft" size={40} color={'#fff'} />
                    </TouchableHighlight>
                    <Image style={{ position: 'absolute', left: '20%', top: '10%' }} source={require('../../../images/icons/icon1.png')} />
                    <Image style={{ position: 'absolute', left: '50%', top: '40%' }} source={require('../../../images/icons/icon2.png')} />
                    <Image style={{ position: 'absolute', left: '10%', top: '40%' }} source={require('../../../images/icons/icon3.png')} />
                    <Image style={{ position: 'absolute', left: '60%', top: '10%' }} source={require('../../../images/icons/icon4.png')} />
                    <View style={{
                        backgroundColor: "#f2f2f2",
                        width: screenWidth + 300,
                        height: 100,
                        position: 'absolute',
                        bottom: -30,
                        left: -100,
                        transform: [{ rotate: '-10deg' }]
                    }}>
                    </View>
                </View>

                <Text style={{ alignSelf: 'center', width: "90%", fontSize: 20, fontWeight: '900', color: "#9F9900", marginBottom: 60, marginTop: 30, textAlign: 'center' }}>Agendamento</Text>

                <View style={style.containerInputsContent}>

                    <View style={style.containerInput}>
                        <TextInput style={style.input} />
                        <Text style={style.textInput}>Nome do dono</Text>
                    </View>

                    <View style={style.containerInput}>
                        <TextInput style={style.input} />
                        <Text style={style.textInput}>Nome do pet</Text>
                    </View>

                    <View style={style.containerInput}>
                        <TextInput style={style.input} />
                        <Text style={style.textInput}>Idade do pet</Text>
                    </View>

                    <View style={style.containerInput}>

                        <View style={{ borderWidth: 1, borderColor: '#9F9900', width: '100%', borderRadius: 10, marginBottom: 20 }}>

                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: '100%', borderColor: '#9F9900', borderWidth: 4, }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Gênero" color="#9F9900" />
                                <Picker.Item label="Macho" value="Macho" color="#9F9900" />
                                <Picker.Item label="Fêmea" value="Fêmea" color="#9F9900" />
                            </Picker>
                        </View>

                    </View>

                    <View style={style.containerInput}>
                        <TextInput style={style.input}
                            multiline={true}
                            numberOfLines={10} />
                        <Text style={style.textInput}>Descrição</Text>
                    </View>

                    <TouchableHighlight onPress={() => console.log('teste')} style={{
                        width: '90%',
                        padding: 17,
                        alignItems: 'center',
                        backgroundColor: '#9F9900',
                        borderRadius: 5,
                        marginBottom: 50
                    }}>
                        <Text style={{ color: "#fff", fontWeight: '800' }}>Enviar</Text>
                    </TouchableHighlight>
                </View>


            </ScrollView>

            <StatusBar hidden />
        </SafeAreaView>
    )
}

export default Agendamento;

const style = StyleSheet.create({
    containerInputsContent: {
        alignItems: 'center',
    },

    containerInput: {
        width: '90%',
        position: 'relative',
    },

    textInput: {
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        top: -12,
        left: 30,
        paddingHorizontal: 10,
        color: '#9F9900',
        fontSize: 17
    },
    input: {
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        borderColor: '#9F9900',
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 20,
    }


})