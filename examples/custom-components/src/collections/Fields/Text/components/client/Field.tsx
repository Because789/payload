'use client'
import type { TextFieldClientComponent } from 'payload'

import { TextField } from '@payloadcms/ui'
import React from 'react'

export const CustomTextFieldClient: TextFieldClientComponent = (props) => {
  const { field } = props

  return <TextField field={field} />
}
