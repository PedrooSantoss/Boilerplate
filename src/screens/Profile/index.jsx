import { View, Text } from 'react-native'
import styles from './style'
import Title from '../../components/Title'

export default function Profile() {
  return (
    <View style={styles.create}>
      <Title title="Create a new account" />
    </View>
  )
}