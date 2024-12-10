import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import LoginInput from '../../components/LoginInput'
import ConfirmButton from '../../components/ConfirmButton'
import Tips from '../../components/Tips'
import NavBar from '../../components/NavBar'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [helpUrl, setHelpUrl] = useState('https://www.baidu.com')
  const [msg, setMsg] = useState('需要帮助?')

  const onLogin = () => {}

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="登录" rightTitle="注册" />

      <View style={styles.line} />

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

        <ConfirmButton title="立即登录" onClick={onLogin} />

        <Tips msg={msg} helpUrl={helpUrl} />
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
  },
  line: {
    height: 0.5,
    backgroundColor: '#d0d4d4'
  }
})

export default LoginPage
