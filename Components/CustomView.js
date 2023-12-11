import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomView = (onPress, label ) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
    <View>
      <Text>{label}</Text>
      {/* Your custom view goes here */}
    </View>
  </TouchableOpacity>
  )
}

export default CustomView

const styles = StyleSheet.create({})