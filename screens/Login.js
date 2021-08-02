import React from 'react';
import { Image, Input, Button, Avatar } from 'react-native-elements';
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import stories from '../mock/stories.json';
import InfoCard from '../components/InfoCard';
import { BLUE } from '../common/colors';

const Login = () => {
  const [tc, setTc] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 12 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View
        style={{
          flex: 0.75,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        {/* Yapı Kredi logosu */}
        <Image
          source={require('../assets/img/yk-logo-3.png')}
          style={{ width: 200, height: 50, marginTop: 20, marginBottom: 50 }}
        ></Image>
      </View>

      <View
        style={{
          flex: 2.25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          rounded
          source={require('../assets/img/rasit-ozcan.jpeg')}
          size={100}
          containerStyle={{ marginBottom: 10 }}
        />
        {/* Welcome text */}
        <Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>
          Yapı Kredi Mobil'e Hoş Geldiniz!
        </Text>
        {/* Input fields */}
        <View style={styles.inputContainer}>
          <Input
            placeholder="T.C. Kimlik No"
            autoFocus
            type="number"
            value={tc}
            onChangeText={text => setTc(text)}
            containerStyle={{
              borderRadius: 10,
            }}
            inputStyle={{ borderBottomWidth: 0 }}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
          />
          <Input
            placeholder="Şifre"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            containerStyle={{
              borderRadius: 10,
            }}
            inputStyle={{ borderBottomWidth: 0 }}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
          />
        </View>

        {/* Login button */}
        <Button
          title="Giriş"
          containerStyle={styles.button}
          buttonStyle={{ borderRadius: 22, backgroundColor: 'rgb(0,114,188)' }}
        />
      </View>

      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map(story => (
            <InfoCard
              containerStyles={{
                width: 160,
                height: 130,
              }}
              contentStyles={{
                paddingLeft: 5,
                width: 80,
                height: 130,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              imageStyles={{ width: 50, height: 50 }}
              key={story.id}
              text={story.text}
              button={null}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: Dimensions.get('window').height,
    backgroundColor: BLUE,
  },
  inputContainer: {
    width: Dimensions.get('window').width * (90 / 100),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(76, 190, 249)',
    backgroundColor: 'white',
  },
  button: {
    width: Dimensions.get('window').width * (90 / 100),
    height: 44,
    marginTop: 20,
    marginBottom: 20,
  },
  storiesContainer: {
    marginTop: 20,
    width: Dimensions.get('window').width,
    marginBottom: 0,
    height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
