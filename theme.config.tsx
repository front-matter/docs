import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Icon from './public/icon.png'

const config: DocsThemeConfig = {
  logo: (
    <div className="nx-flex nx-justify-center nx-text-2xl">
      <Image src={Icon} alt="Icon" width={32} />
      <span style={{ marginLeft: '.4em', marginRight: '.2em', fontWeight: 700, color: 'rgb(21, 128, 61)' }}>Front Matter</span>Documentation
    </div>
  ),
  logoLink: 'https://front-matter.io',
  docsRepositoryBase: 'https://github.com/front-matter/docs/tree/main',
  footer: {
    text: 'Front Matter Documentation',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Front Matter Documentation" />
      <meta
        property="og:description"
        content="Documentation for the Front Matter organization."
      />
    </>
  ),
}

export default config
