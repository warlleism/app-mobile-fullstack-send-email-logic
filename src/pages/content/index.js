import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ImageBackground, Dimensions, StatusBar, TouchableHighlight } from 'react-native';
import { Context } from '../../context/provider';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;

const Content = () => {

    const { dataArray } = useContext(Context)
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <ScrollView style={{ position: 'relative' }}>
                {
                    dataArray[1].map((e) => {
                        return (
                            <View key={e.id}>
                                <ImageBackground source={e.img}
                                    style={{ width: screenWidth, height: 300, overflow: "hidden", position: "relative" }}
                                >
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
                                </ImageBackground>
                                <Text key={e.titulo} style={{ alignSelf: 'center', width: "90%", fontSize: 20, fontWeight: '900', color: "#9F9900", marginVertical: 30, textAlign: 'center' }}>{e.titulo}</Text>
                            </View>
                        )
                    })
                }

                {
                    dataArray[0].map((e) => {
                        return (
                            <View style={style.containerContent} key={e.id}>
                                <View style={style.conteinerInfo}>
                                    {
                                        e.conteudo
                                            ?
                                            <Text style={{ fontSize: 20, color: '#ffff' }}>{e?.conteudo}</Text>
                                            :
                                            false
                                    }
                                    <Text style={{ fontSize: 15, color: '#ffff', marginTop: 10, textAlign: 'left' }}>{e?.texto}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

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

            <StatusBar hidden />
        </SafeAreaView>
    )
}

export default Content;

const style = StyleSheet.create({
    containerContent: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 30,
        justifyContent: 'center'
    },
    conteinerInfo: {
        padding: 20,
        display: 'flex',
        borderRadius: 5,
        width: screenWidth - 30,
        backgroundColor: '#9F9900'

    }


})