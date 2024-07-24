/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import configPromise from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'

import { componentImportMap } from './admin/componentImportMap.js'

// import '@payloadcms/ui/styles.css' // Uncomment this line if `@payloadcms/ui` in `tsconfig.json` points to `/ui/dist` instead of `/ui/src`
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react'

import './custom.scss'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout componentImportMap={componentImportMap} config={configPromise}>
    {children}
  </RootLayout>
)

export default Layout
