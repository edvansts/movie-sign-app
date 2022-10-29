
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProps } from '../config/navigator'

const useRootNavigator = () => {
  return (
   useNavigation<RootNavigationProps>()
  )
}

export { useRootNavigator}