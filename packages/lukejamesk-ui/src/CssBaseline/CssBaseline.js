import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@lukejamesk/styles'

const styles = (theme) => ({
  '@global': {
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block',
    },
    'ol, ul': {
      listStyle: 'none',
    },
    'blockquote, q': {
      quotes: 'none',
    },
    'blockquote:before, blockquote:after, q:before, q:after': {
      content: 'none',
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    html: {
      boxSizing: 'border-box',
    },
    body: {
      lineHeight: 1,
      color: theme.palette.text,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.backgroundColor,
    },
  },
})

const CssBaseline = ({ children }) => {
  useStyles(styles)

  return <>{children}</>
}

CssBaseline.propTypes = {
  children: PropTypes.node,
}

export default CssBaseline
