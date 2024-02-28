import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import { styles } from "../../Style/StyleSheet";

export default function Body() {
  pressButon = () => {
    alert("abc");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/fundo.jpg")}
        style={styles.img}
      >

    /* Caixa de nome do usuário */
        <View style={styles.secondaryContainer}>
          <TextInput
            style={styles.inputName}
            placeholder="User"
            inputMode="text"
            placeholderTextColor="brown"
          />

    /*Caixa de senha do login*/
          <TextInput
            style={styles.inputName}
            placeholder="PassWord"
            inputMode="numeric"
            secureTextEntry={true}
            placeholderTextColor="brown"
          />

          <Button onPress={pressButon} title="Click Me!!" color="brown" />
        </View>
      </ImageBackground>
    </View>
  );
}
