import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
const screenWidth = Dimensions.get("window").width;
import { Context } from '../../context/provider';


const Main = () => {

    const { setDataArray } = useContext(Context)
    const navigation = useNavigation()

    const Artigos = [
        {
            id: 1,
            titulo: '1. Proteção',
            texto: "É dever do proprietário proteger seu animal do sol e da chuva, além de impedir que os bichinhos fujam ou saiam sozinhos na rua. Assim, evitamos brigas, atropelamentos, envenenamentos e crias indesejáveis."
        },
        {
            id: 2,
            titulo: '2.  Alimentação',
            texto: "Oferecer sempre uma ração de boa qualidade, respeitando as características de cada animal e faixa etária (ração de filhote, adulto e idoso). E sempre disponibilizar água limpa e fresca."
        },
        {
            id: 3,
            titulo: '3.  Castração',
            texto: "A castração é sempre aconselhável quando não se quer um filhote. Com isso, evitamos superpopulação, abandonos, doenças uterinas, neoplasias (câncer), doenças prostáticas, agressividade e marcação de território."
        },
        {
            id: 4,
            titulo: '4.  Passeios e brincadeiras',
            texto: "A castração é sempre aconselhável quando não se quer um filhote. Com isso, evitamos superpopulação, abandonos, doenças uterinas, neoplasias (câncer), doenças prostáticas, agressividade e marcação de território."
        },
        {
            id: 5,
            titulo: '5.  Vacinação',
            texto: "A castração é sempre aconselhável quando não se quer um filhote. Com isso, evitamos superpopulação, abandonos, doenças uterinas, neoplasias (câncer), doenças prostáticas, agressividade e marcação de território."
        },
        {
            id: 6,
            titulo: '6.  Vermífugos',
            texto: "Assim como as vacinas, os vermífugos são muito importantes, pois os parasitas intestinais (vermes) podem comprometer a saúde dos animais, levando ao emagrecimento, à queda de pelos, anemias e zoonoses."
        },
        {
            id: 7,
            titulo: '7.  Higiene bucal',
            texto: "Cães e gatos também precisam escovar os dentes, mas com produtos veterinários específicos. Doenças periodontais, além de causar o desagradável mau hálito, prejudicam a alimentação, causam dor e as bactérias da boca podem se desprender e causar lesões em outros órgãos."
        },
        {
            id: 8,
            titulo: '8.  Banhos e escovação',
            texto: "A castração é sempre aconselhável quando não se quer um filhote. Com isso, evitamos superpopulação, abandonos, doenças uterinas, neoplasias (câncer), doenças prostáticas, agressividade e marcação de território."
        },
        {
            id: 9,
            titulo: '9.  Visitas ao veterinário',
            texto: "É de grande importância realizar, pelo menos, uma vez ao ano uma consulta com o veterinário. Muitas doenças podem ser evitadas com a prevenção. Esteja sempre atento a qualquer mudança de comportamento ou hábito do seu animal, pois isso pode sinalizar doenças."
        },
        {
            id: 10,
            titulo: '10.  Castração',
            texto: "A castração é sempre aconselhável quando não se quer um filhote. Com isso, evitamos superpopulação, abandonos, doenças uterinas, neoplasias (câncer), doenças prostáticas, agressividade e marcação de território."
        }
    ]

    return (
        <SafeAreaView>
            <ScrollView >
                <View style={style.containerMain}>
                    <ImageBackground source={require('../../../images/dog-main.jpg')} resizeMode="cover" style={style.containerImgMenu}>
                        <View style={style.menu}>
                            <View style={style.menuLines}>
                                <View style={style.line1}></View>
                                <View style={style.line2}></View>
                                <View style={style.line3}></View>
                            </View>
                        </View>
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
                            setDataArray(Artigos)
                            navigation.navigate('Content')
                        }}
                            style={{ height: 130, flex: 1, width: screenWidth - 30, marginBottom: 30, position: 'relative' }}>
                            <ImageBackground source={require('../../../images/img1.jpg')} style={style.cardArtigo} resizeMode={'cover'}>
                                <Text style={{ color: "#fff", letterSpacing: 4, width: '70%', marginTop: 30, marginLeft: 20 }}>10 cuidados para se ter com seu pet.</Text>
                            </ImageBackground>
                            <View style={{ width: 20, height: '100%', backgroundColor: '#9F9900', position: 'absolute', right: 0 }}></View>
                            <Image source={require('../../../images/pata.png')} style={{ position: 'absolute', left: 10, bottom: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('tedte')} style={{ height: 130, flex: 1, width: screenWidth - 30, marginBottom: 30, position: 'relative' }}>
                            <ImageBackground source={require('../../../images/img2.png')} style={style.cardArtigo} resizeMode={'cover'}>
                                <Text style={{ color: "#fff", letterSpacing: 4, width: '70%', marginTop: 30, marginLeft: 20 }}>As vacinas do seu pet estão em dia? se não, clique e saiba mais.</Text>
                            </ImageBackground>
                            <View style={{ width: 20, height: '100%', backgroundColor: '#9F9900', position: 'absolute', right: 0 }}></View>
                            <Image source={require('../../../images/pata.png')} style={{ position: 'absolute', left: 10, bottom: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('tedte')} style={{ height: 130, flex: 1, width: screenWidth - 30, marginBottom: 30, position: 'relative' }}>
                            <ImageBackground source={require('../../../images/img3.png')} style={style.cardArtigo} resizeMode={'cover'}>
                                <Text style={{ color: "#fff", letterSpacing: 4, width: '70%', marginTop: 30, marginLeft: 20 }}>Conheça formas de prevenir doenças em seu pet.</Text>
                            </ImageBackground>
                            <View style={{ width: 20, height: '100%', backgroundColor: '#9F9900', position: 'absolute', right: 0 }}></View>
                            <Image source={require('../../../images/pata.png')} style={{ position: 'absolute', left: 10, bottom: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={style.containerSobremin}>

                        <View style={{ width: '90%', marginBottom: 20 }}>
                            <Text style={{ letterSpacing: 2 }}><Text style={{ fontWeight: "900", color: "#9F9900" }}>S</Text>obre mim</Text>
                        </View >

                        <ImageBackground source={require('../../../images/doctor.png')} style={style.sobremin} resizeMode={'cover'}></ImageBackground>
                        <Text style={{ letterSpacing: 3, fontSize: 20, textAlign: "center", color: "#9F9900", fontWeight: '900', }}>Antonia Pereira</Text>
                        <Text style={{ letterSpacing: 1, fontSize: 10, textAlign: "center", color: "#9F9900", fontWeight: '300', }}>Médica Veterinária</Text>
                        <Text style={{ letterSpacing: 3, width: '90%', fontSize: 10, textAlign: "center", color: "#9F9900", marginTop: 30, }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</Text>
                    </View>

                </View>
            </ScrollView>

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
        height: 30,
        width: '90%',
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
        height: '100%',
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
        width: screenWidth - 30,
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
    }



})