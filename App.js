import { StatusBar } from 'expo-status-bar';
import { styles } from './src/Style/StyleSheet';
import Header from './src/assets/Components/Header';
import Body from './src/assets/Components/Body';
import Footer from './src/assets/Components/Footer';
import { StyleSheet, View, TextInput, Button, Text, Image, ImageBackground } from 'react-native';

export default function App() {
    return (
        <View style={ styles.container }> 
            <Header/>
            <Body/>
            <Footer/>
        </View>
    
    );

}