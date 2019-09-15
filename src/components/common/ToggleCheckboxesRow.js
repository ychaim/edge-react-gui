// @flow

import React, { Component } from 'react'
import { TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'

import CheckBox from '../../modules/UI/components/CheckBox/index'
import Text from '../../modules/UI/components/FormattedText/index'
import { styles, underlayColor } from '../../styles/scenes/ManageTokensStyle.js'

export type State = {
  enabled?: boolean
}

export type Props = {
  toggleAll: string => void,
  isAllEnabled: boolean,
  name: string
}

class ManageTokenRow extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      isAllEnabled: props.isAllEnabled
    }
  }

  render () {
    const { toggleAll, isAllEnabled, name } = this.props
    // disable editing if token is native to the app

    return (
      <TouchableHighlight onPress={toggleAll} underlayColor={underlayColor} style={[styles.manageTokenRow]}>
        <View style={[styles.manageTokenRowInterior]}>
          <View style={styles.rowLeftArea}>
            <TouchableWithoutFeedback onPress={toggleAll} enabled={isAllEnabled}>
              <View style={[styles.touchableCheckboxInterior]}>
                <CheckBox style={styles.checkBox} enabled={isAllEnabled} />
              </View>
            </TouchableWithoutFeedback>
            <View style={[styles.tokenNameArea]}>
              <Text style={[styles.tokenNameText]}>{name}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ManageTokenRow
