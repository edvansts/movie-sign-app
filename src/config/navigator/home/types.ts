import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"


export type HomeTabsParamList =  {
    home: undefined,
    user: undefined,
    myList: undefined
}


export type HomeTabsNavigationProps = BottomTabNavigationProp<HomeTabsParamList>