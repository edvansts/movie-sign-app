
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProps } from '../config/navigator'

const useRootStackNavigator = () => {
  return (
   useNavigation<RootStackNavigationProps>()
  )
}

export { useRootStackNavigator}