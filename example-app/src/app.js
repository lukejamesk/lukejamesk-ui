import React from 'react'
import PropTypes from 'prop-types'
import {
  Title,
  Text
} from '@lukejamesk-ui/typography'

const App = ({ name }) => (
  <div>
    <Title type="heading1">{name}</Title>
    <Text type="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus perferendis molestiae.
    </Text>
  </div>
)

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App
