import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '../images/icons/facebook.svg'
import Phone from '../images/icons/phone.svg'

const Footer = ({ containerClass }) => (
  <footer className="footer mt-auto bg-secondary py-5">
    <div className={containerClass}>
      <div className="row justify-content-between">
        <div className="col-md-4 pb-4">
          <ul className="list-unstyled">
            <li>
              <a href="https://www.facebook.com/carrierealla/">
                <Facebook className="font-icon mr-1" />
                Facebook
              </a>
            </li>
            <li>
              <a href="tel:+33565621365">
                <Phone className="font-icon mr-1" />
                Tel: 05 65 62 13 65
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 pb-4">
          <a
            href="https://www.infogreffe.fr/entreprise-societe/812786986"
            style={{ textDecoration: 'none' }}
          >
            <span style={{ fontSize: '0.8em' }}>
              812 786 986 R.C.S. RODEZ
              <br />
              Greffe du Tribunal de Commerce de RODEZ
            </span>
          </a>
        </div>
      </div>
      <div className="row justify-content-around small">
        <div className="col-md-12 text-center">
          <div>
            Icônes:{' '}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>
            ,{' '}
            <a
              href="https://www.flaticon.com/authors/gregor-cresnar"
              title="Gregor Cresnar"
            >
              Gregor Cresnar
            </a>{' '}
            et{' '}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>{' '}
            (
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
            )
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  containerClass: PropTypes.string.isRequired,
}

export default Footer
