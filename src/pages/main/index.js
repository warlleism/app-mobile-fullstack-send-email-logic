import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { Artigos } from '../article/artigos';
import { Context } from '../../context/provider';
import { useState } from 'react';


const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")

const Main = () => {

    const { setDataArray } = useContext(Context)
    const navigation = useNavigation()

    const [posicao] = useState(new Animated.Value(-3200))

    function Animacao(value) {
        Animated.timing(
            posicao,
            {
                toValue: value,
                duration: 600,
                useNativeDriver: true
            }
        ).start()
    }

    return (
        <SafeAreaView>

            <ScrollView>
                <View style={style.containerMain}>
                    <ImageBackground source={require('../../../images/dog-main.jpg')} resizeMode="cover" style={style.containerImgMenu}>

                        <TouchableOpacity onPress={() => Animacao(0)} style={style.menu}>
                            <View style={style.menuLines}>
                                <View style={style.line1}></View>
                                <View style={style.line2}></View>
                                <View style={style.line3}></View>
                            </View>
                        </TouchableOpacity>

                        <View style={style.toptitulo}>
                            <Text style={{ color: "#fff", textAlign: 'right', fontSize: 20, fontWeight: "200" }}>
                                Amor e dedicação a <Text style={{ fontWeight: "900" }}>Saúde Do Seu <Text style={{ color: "#9F9900" }}>Pet.</Text></Text>
                            </Text>
                        </View>
                    </ImageBackground>

                    <View style={style.containerArtigos}>
                        <View style={{ width: '90%', marginBottom: 20 }}>
                            <Text style={{ letterSpacing: 2 }}><Text style={{ fontWeight: "900", color: "#9F9900" }}>A</Text>rtigos</Text>
                        </View >
                        <TouchableOpacity onPress={() => {
                            setDataArray(Artigos[0])
                            navigation.navigate('Content')
                        }}
                            style={{ height: 130, flex: 1, width: width - 30, marginBottom: 30, position: 'relative' }}>
                            <ImageBackground source={require('../../../images/img1.jpg')} style={style.cardArtigo} resizeMode={'cover'}>
                                <Text style={{ color: "#fff", letterSpacing: 4, width: '70%', marginTop: 30, marginLeft: 20 }}>10 cuidados para se ter com seu pet.</Text>
                            </ImageBackground>
                            <View style={{ width: 20, height: '100%', backgroundColor: '#9F9900', position: 'absolute', right: 0 }}></View>
                            <Image source={require('../../../images/pata.png')} style={{ position: 'absolute', left: 10, bottom: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity TouchableOpacity onPress={() => {
                            setDataArray(Artigos[1])
                            navigation.navigate('Content')
                        }} style={{ height: 130, flex: 1, width: width - 30, marginBottom: 30, position: 'relative' }}>
                            <ImageBackground source={require('../../../images/img2.png')} style={style.cardArtigo} resizeMode={'cover'}>
                                <Text style={{ color: "#fff", letterSpacing: 4, width: '70%', marginTop: 30, marginLeft: 20 }}>As vacinas do seu pet estão em dia? se não, clique e saiba mais.</Text>
                            </ImageBackground>
                            <View style={{ width: 20, height: '100%', backgroundColor: '#9F9900', position: 'absolute', right: 0 }}></View>
                            <Image source={require('../../../images/pata.png')} style={{ position: 'absolute', left: 10, bottom: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity TouchableOpacity onPress={() => {
                            setDataArray(Artigos[2])
                            navigation.navigate('Content')
                        }} style={{ height: 130, flex: 1, width: width - 30, marginBottom: 30, position: 'relative' }}>
                            <ImageBackground source={require('../../../images/img3.png')} style={style.cardArtigo} resizeMode={'cover'}>
                                <Text style={{ color: "#fff", letterSpacing: 4, width: '70%', marginTop: 30, marginLeft: 20 }}>Conheça formas de prevenir doenças em seu pet.</Text>
                            </ImageBackground>
                            <View style={{ width: 20, height: '100%', backgroundColor: '#9F9900', position: 'absolute', right: 0 }}></View>
                            <Image source={require('../../../images/pata.png')} style={{ position: 'absolute', left: 10, bottom: 10 }} />
                        </TouchableOpacity>

                        <View style={{ width: '90%', marginTop: 30 }}>
                            <Text style={{ letterSpacing: 2 }}><Text style={{ fontWeight: "900", color: "#9F9900" }}>S</Text>obre mim</Text>
                        </View >

                        <View style={style.containerSobremin}>
                            <ImageBackground source={require('../../../images/doctor.png')} style={style.sobremin} resizeMode={'cover'}></ImageBackground>
                            <Text style={{ letterSpacing: 3, fontSize: 20, textAlign: "center", color: "#9F9900", fontWeight: '900', }}>Antonia Pereira</Text>
                            <Text style={{ letterSpacing: 1, fontSize: 10, textAlign: "center", color: "#9F9900", fontWeight: '300', }}>Médica Veterinária</Text>
                            <Text style={{ letterSpacing: 3, width: '90%', fontSize: 10, textAlign: "center", color: "#9F9900", marginTop: 30, }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Animated.View style={{ position: 'absolute', left: 0, top: 0, width: "60%", height: height, backgroundColor: "#fff", transform: [{ translateX: posicao }] }}>

                <TouchableOpacity onPress={() => Animacao(-3200)}
                    activeOpacity={1}
                    underlayColor="#9F9900"
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        borderRadius: 100,
                    }} >
                    <Icon name="close" size={40} color={'#92a904'} />
                </TouchableOpacity>

                <View style={style.containerNav}>
                    <TouchableOpacity onPress={() => navigation.navigate('Agendamento')}>
                        <Text style={{ fontSize: 20, color: '#92a904', marginLeft: 10 }}>Agendamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
                        <Text style={{ fontSize: 20, color: '#92a904', marginLeft: 10 }}>Contato</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>

            <StatusBar hidden />

        </SafeAreaView>
    )
}

export default Main;

const style = StyleSheet.create({
    containerMain: {
        width: '100%'
    },

    containerImgMenu: {
        width: '100%',
        height: 400,
        position: 'relative',
    },

    menu: {
        top: 30,
        height: 50,
        left: 20,
        width: 60,
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
    },

    agendaText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: '400'
    },

    menuLines: {
        width: 80,
        height: '50%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
    },

    line1: {
        width: '50%',
        height: 3,
        backgroundColor: '#ffffff'
    },

    line2: {
        width: '30%',
        height: 3,
        backgroundColor: '#ffffff94'
    },

    line3: {
        width: '10%',
        height: 3,
        backgroundColor: '#ffffff40'
    },

    toptitulo: {
        position: 'absolute',
        bottom: 70,
        right: 20,
        width: 240,
        color: "#fff",
    },

    containerArtigos: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: -50,
        paddingTop: 30,
    },

    cardArtigo: {
        height: '100%',
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
    },

    containerSobremin: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: "center",
        marginBottom: 50,
        marginTop: 20,
        width: width - 30,
        backgroundColor: '#92a9041f',
        borderRadius: 20,
        paddingVertical: 30,

    },

    sobremin: {
        height: 90,
        width: 90,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#92a9041f",
        borderRadius: 50,
    },

    containerNav: {
        justifyContent: 'space-between',
        height: 100,
        marginTop: 100
    }



})