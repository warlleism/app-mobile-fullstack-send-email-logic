import { ActivityIndicator, StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions, StatusBar, TouchableHighlight, Image, TextInput } from 'react-native';
import { TextInputMask } from "react-native-masked-text";
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")

const Contato = () => {

    const navigation = useNavigation()
    const [valor, setValor] = useState("")
    const [spinner, setSpinner] = useState(false);

    const default_form = {
        nome: '',
        telefone: '',
        email: '',
        genero: '',
        descricao: ''
    }
    const [formulario, setFormulario] = useState(default_form)

    
    const OptionsRegister = {
        body: JSON.stringify(formulario),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    const PostData = async () => {

        await fetch(url, OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    setSpinner(false)
                } else {
                    setSpinner(false)
                }
            })

        setSpinner(!spinner)
    }


    return (
        <SafeAreaView>
            {console.log(formulario)}

            <ScrollView style={{ position: 'relative' }}>

                <View style={{ width: width, height: 300, overflow: "hidden", position: "relative", backgroundColor: '#9F9900' }}>
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
                        width: width + 300,
                        height: 100,
                        position: 'absolute',
                        bottom: -30,
                        left: -100,
                        transform: [{ rotate: '-10deg' }]
                    }}>
                    </View>
                </View>

                <Text style={{ alignSelf: 'center', width: "90%", fontSize: 20, fontWeight: '900', color: "#9F9900", marginBottom: 60, marginTop: 30, textAlign: 'center' }}>Contato</Text>

                <View style={style.containerInputsContent}>

                    <View style={style.containerInput}>
                        <TextInput style={style.input} onChangeText={(e) => setFormulario({ ...formulario, nome: e })} />
                        <Text style={style.textInput}>Nome</Text>
                    </View>

                    <View style={style.containerInput}>
                        <View style={{ borderWidth: 1, height: 60, borderColor: '#9F9900', width: '100%', borderRadius: 10, marginBottom: 20 }}>
                            <TextInputMask
                                autoFocus={false}
                                type={'cel-phone'}
                                color={'#9F9900'}
                                value={valor}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    suffixUnit: ''
                                }}
                                keyboardType={"number-pad"}
                                onChangeText={(e) => setFormulario({ ...formulario, telefone: e })}
                                style={{ padding: 10, height: '100%', fontSize: 20 }}
                            />
                        </View>
                        <Text style={style.textInput}>Telefone</Text>
                    </View>

                    <View style={style.containerInput}>
                        <TextInput style={style.input} onChangeText={(e) => setFormulario({ ...formulario, email: e })} />
                        <Text style={style.textInput}>Email</Text>
                    </View>

                    <View style={style.containerInput}>
                        <TextInput style={style.input}
                            multiline={true}
                            numberOfLines={10}
                            onChangeText={(e) => setFormulario({ ...formulario, descricao: e })}
                        />
                        <Text style={style.textInput}>Descrição</Text>
                    </View>

                    <TouchableHighlight onPress={() => PostData()} style={{
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

            {
                spinner
                    ?
                    <View style={{ position: 'absolute', height: height, backgroundColor: '#000000a6', width: width, justifyContent: 'center' }}>
                        <ActivityIndicator size={100} color="#9F9900" style={{ alignSelf: 'center' }} />
                    </View>
                    :
                    false
            }
            <StatusBar hidden />
        </SafeAreaView>
    )
}

export default Contato;

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
        padding: 10

    }


})