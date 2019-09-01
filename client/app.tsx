import React from 'react'
import {
  Title,
  Text
} from './core/typography'

export interface AppProps {
  name: String
}

const App = ({ name }: AppProps) => (
  <div>
    <Title type="h1">{name}</Title>
    <Text type="p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus perferendis molestiae.
    </Text>
  </div>
)

export default App
