import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Layout from '@organisms/Layout';
import styles from './styles';
import Text from '@atoms/Text';
import Input from '@atoms/Input/Input';
import Button from '@atoms/Button';
import {useDispatch} from 'react-redux';
import {signUp} from '@store/actions/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onConfirmSignUp = () => {
    console.log('SignUp Confirm', email);
    dispatch(signUp(email, password));
  };

  const goToLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <Layout noHeader>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.title}>
          <Text size="medium" weight="regular" align="center">
            SignUp
          </Text>
        </View>

        <View style={styles.main}>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Input
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Button onPress={onConfirmSignUp} style={styles.buttonConfirm}>
            <Text color="white" align="center">
              Sign Up
            </Text>
          </Button>
        </View>
        <View style={styles.footer}>
          <View style={styles.signUpContainer}>
            <Text size="small" align="center" color="gray">
              Already have an account?
            </Text>
            <Button
              variation="tertiary"
              onPress={goToLogIn}
              style={styles.buttonSignUp}>
              <Text color="black" weight="bold">
                Log in
              </Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
};
export default SignUp;
