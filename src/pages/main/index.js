import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native';


const Main = () => {
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
                            <View style={style.menuText}>
                                <Text style={style.agendaText}>AGENDAR CONSULTA</Text>
                            </View>
                        </View>
                        <View style={style.toptitulo}>
                            <Text style={{ color: "#fff", textAlign: 'right', fontSize: 20, fontWeight: "200" }}>
                                Amor e dedicação a <Text style={{ fontWeight: "900" }}>Saúde Do Seu Pet. </Text>
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>

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
        top: 80,
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
        bottom: 50,
        right: 20,
        width: 240,
        color: "#fff",
    }

})