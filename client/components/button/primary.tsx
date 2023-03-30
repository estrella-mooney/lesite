import { ButtonUnstyled } from '@mui/base'
import React from 'react'
import { BUTTON_TYPES } from '../../../common/convention/button'
import './button.scss'

const Button = (props) => {
  const { type, btnText } = props
  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        return 'primarybtn button'

      case BUTTON_TYPES.SECONDARY:
        return 'secondarybtn button'

      default:
        return 'tertiarybtn button'
    }
  }
  return <div className={`${getButtonClass()}`}>{btnText}</div>
}

export default Button
