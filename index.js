/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import LoginPage from './js/pages/LoginPage'

AppRegistry.registerComponent(appName, () => LoginPage)
