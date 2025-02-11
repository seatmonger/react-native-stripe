/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')
const { Container } = require('../../core/CompLibrary')

const siteConfig = require(process.cwd() + '/siteConfig') // eslint-disable-line

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null
    }
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.caption}>
        <img src={user.image} title={user.caption} alt={user.caption} />
      </a>
    ))

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who{"'"}s Using This?</h1>
              <p>This project is used by many folks</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you using this project?</p>
            <a
              href="https://github.com/seatmonger/react-native-stripe/edit/master/website/siteConfig.js"
              className="button">
              Add your company
            </a>
          </div>
        </Container>
      </div>
    )
  }
}

module.exports = Users
