import React, { type PropsWithChildren, type FC } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface IProps extends PropsWithChildren {
  title: string
  onClick: () => void
}

const ConfirmButton: FC<IProps> = ({ title, onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.ConfirmText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3296f3',
    alignItems: 'center',
    padding: 12,
    margin: 20,
    marginTop: 30,
    borderRadius: 5
  },
  ConfirmText: {
    color: 'white',
    fontSize: 18
  }
})

export default ConfirmButton
