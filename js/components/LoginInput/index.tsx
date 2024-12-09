import React, { type PropsWithChildren } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface IProps extends PropsWithChildren {
  label: string
  placeholder: string
  shortLine?: boolean
  secure?: boolean
  onChangeText: (text: string) => void
}

const LoginInput = (props: IProps) => {
  const {
    label,
    placeholder,
    shortLine = false,
    secure = false,
    onChangeText
  } = props

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.row}>
        <Text style={styles.inputLabel}>{label}</Text>

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secure}
          autoCapitalize="none"
          onChangeText={onChangeText}
        />
      </View>

      <View
        style={{
          height: 0.5,
          backgroundColor: '#d0d4d4',
          marginLeft: shortLine ? 20 : 0
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputLabel: {
    marginLeft: 15,
    marginTop: 18,
    marginBottom: 18,
    fontSize: 16,
    width: 90
  },
  input: {
    flex: 1,
    marginRight: 15
  }
})

export default LoginInput
