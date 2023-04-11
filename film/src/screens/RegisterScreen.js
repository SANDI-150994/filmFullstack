import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import Logo from '../../assets/movie.png'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [nrp, setNrp] = React.useState('')
    const [nama, setNama] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleLogin = async (value) =>{
        console.log ('value', value)
        try {
            const response =await 
            axios.post('http://192.168.1.24:3300/users/login', 
            { nrp: value.nrp, password:value.password})
            
            console.log('response', response.data)
            if (response.data.status == 200){
                navigation.navigate('Movie')
                ToastAndroid.show(response.data.metadata, ToastAndroid.SHORT)
            }
        } catch (error) {
            console.log(error.message)
            ToastAndroid.show("Cek kembali nrp dan password", ToastAndroid.SHORT)
        }
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nrp"
                    placeholderTextColor="white"
                    onChangeText={(nrp)=> setNrp(nrp)}
                    value={nrp}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nama"
                    placeholderTextColor="white"
                    onChangeText={(nama)=> setNama(nama)}
                    value={nama}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    onChangeText={(password)=> setPassword(password)}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={async ()=>{
                        await handleLogin({ nrp, nama, password})
                    }}
                >
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Already have an account?
                    <Text
                        style={{ fontWeight: 'bold' }}
                    onPress={() => navigation.goBack('LoginScreen')}
                    > Sign in</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#f2ed46',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#000',
        fontSize: 20,
    },
    text: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
})

export default RegisterScreen