import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button } from 'react-native';
import { styles } from '../../Style/StyleSheet';

export default function Body() {

    pressButon = () => {
        alert("abc")
    }

    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../images/fundo.jpg')}
                style={styles.img}>

                <View style={styles.secondaryContainer}>

                    <TextInput style={styles.inputName}
                        placeholder='User'
                        inputMode='text'
                        placeholderTextColor='red'
                    />

                    <TextInput style={styles.inputName}
                        placeholder='PassWord'
                        inputMode='numeric'
                        secureTextEntry={true}
                        placeholderTextColor='red'
                    />

                    <Button
                    onPress={pressButon}
                    title= 'Click Me!!'
                    color= 'red'
                    />
            
                </View>
            </ImageBackground>
        </View>
    );
}