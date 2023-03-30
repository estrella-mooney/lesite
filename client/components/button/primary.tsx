import { ButtonUnstyled } from '@mui/base'
import React from 'react'
import { BUTTON_TYPES } from '../../../common/convention/button'
import './button.scss'

function Button(props: any) {
  const { type, btnText } = props
  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        return 'primaryBtn button'

      case BUTTON_TYPES.SECONDARY:
        return 'secondaryBtn button'

      default:
        return 'tertiaryBtn button'
    }
  }
  return <div className={`${getButtonClass()}`}>{btnText}</div>
}

export default Button
