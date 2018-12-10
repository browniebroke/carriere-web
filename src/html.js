import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="fr">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#b2d233"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="msapplication-TileColor" content="#b2d233" />
          <meta name="msapplication-config" content="/img/browserconfig.xml" />
        </head>
        <body>
          <div className="container main-container">
            <div
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
          </div>
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
