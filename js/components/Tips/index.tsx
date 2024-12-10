import React, { type PropsWithChildren, type FC } from 'react'
import { View, Text, StyleSheet, Button, Linking } from 'react-native'

interface IProps extends PropsWithChildren {
  msg: string
  helpUrl?: string
}

const Tips: FC<IProps> = ({ msg, helpUrl }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tips}>{msg}</Text>
      {helpUrl && (
        <Button
          title="查看帮助"
          onPress={() => {
            Linking.openURL(helpUrl)
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tips: {
    fontSize: 14,
    color: 'red'
  }
})

export default Tips
