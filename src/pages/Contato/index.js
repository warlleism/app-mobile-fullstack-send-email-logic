import { ActivityIndicator, StyleSheet, Text, Alert, Modal, View, ScrollView, SafeAreaView, Dimensions, StatusBar, TouchableHighlight, Image, TextInput, Pressable } from 'react-native';
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
    const [modalVisible, setModalVisible] = useState(false);

    const default_form = {
        nome: '',
        telefone: '',
        email: '',
        genero: '',
        descricao: ''
    }
    const [formulario, setFormulario] = useState(default_form);

    const OptionsRegister = {
        body: JSON.stringify(formulario),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };


    const postData = async () => {
        setSpinner(!spinner)
        try {
            const response = await fetch('https://deploy-node-vercel-warlleism.vercel.app/email', OptionsRegister);
            const json = await response.json();
            if (json.status == 200) {
                setSpinner(false)
                setModalVisible(!modalVisible)
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <SafeAreaView>
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

                    <TouchableHighlight onPress={() => postData()} style={{
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>Enviado com sucesso!</Text>
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.textStyle}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>


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
        color: "#9F9900",
        borderRadius: 10,
        width: '100%',
        paddingVertical: 15,
        borderColor: '#9F9900',
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 20,
        padding: 10

    },
    centeredView: {
        height: height,
        backgroundColor: '#000000a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        paddingHorizontal: 40,
        paddingVertical: 20,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#9F9900',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    modalText: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },


})