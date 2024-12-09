import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import LoginInput from '../../components/LoginInput'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LoginInput
          label="用户名"
          placeholder="请输入用户名"
          shortLine
          onChangeText={(text) => setUsername(text)}
        />

        <LoginInput
          label="密码"
          placeholder="请输入密码"
          shortLine
          secure
          onChangeText={(text) => setPassword(text)}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingTop: 20,
    backgroundColor: '#f1f5f6',
    flexGrow: 1
  }
})

export default LoginPage
