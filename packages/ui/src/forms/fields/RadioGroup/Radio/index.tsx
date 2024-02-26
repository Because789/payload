'use client'
import type { OptionObject } from 'payload/types'

import { getTranslation } from '@payloadcms/translations'
import React from 'react'

import type { OnChange } from '../types'

import { useTranslation } from '../../../../providers/Translation'
import './index.scss'

const baseClass = 'radio-input'

export const Radio: React.FC<{
  id: string
  isSelected: boolean
  onChange: OnChange
  option: OptionObject
  path: string
}> = (props) => {
  const { isSelected, onChange, option, path } = props
  const { i18n } = useTranslation()

  const id = `field-${path}-${option.value}`

  return (
    <label htmlFor={id}>
      <div
        className={[baseClass, isSelected && `${baseClass}--is-selected`].filter(Boolean).join(' ')}
      >
        <input
          checked={isSelected}
          id={id}
          onChange={() => (typeof onChange === 'function' ? onChange(option.value) : null)}
          type="radio"
        />
        <span className={`${baseClass}__styled-radio`} />
        <span className={`${baseClass}__label`}>{getTranslation(option.label, i18n)}</span>
      </div>
    </label>
  )
}
