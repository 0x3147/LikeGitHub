import React, { type PropsWithChildren, type FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IProps extends PropsWithChildren {
  title: string
  rightTitle: string
  onRightClick?: () => void
}

const NavBar: FC<IProps> = ({ title, rightTitle, onRightClick }) => {
  return (
    <View style={styles.container}>
      <View />

      <View style={styles.titleLayout}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onPress={onRightClick}>
        <Text style={styles.button}>{rightTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44
  },
  titleLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  button: {
    color: '#007aff',
    paddingRight: 15,
    fontSize: 16
  }
})

export default NavBar
