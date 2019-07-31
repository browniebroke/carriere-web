import React from 'react'

import Layout from '../components/layout'

const ContactPage = ({ location, data }) => (
  <Layout location={location}>
    <div className="my-5">
      <div className="row">
        <div className="col">
          <h1>Contact</h1>
          <p>
            Nous sommes situés à Sauclières, petite commune du Sud Aveyron.
            Voici quelques détails sur nos horaires d'ouverture et sur comment
            nous trouver.
          </p>

          <p>
            Nous sommes ouvert du lundi au vendredi de 8h00 à 12h00 et de 13h00
            à 17h00 hors périodes de congés. Nous sommes ne arrêt pendant 3
            semaines au mois d'Août et 2 semaines autour de Noël et nouvel an.
            Autour des périodes de congés, il est recommendé de nous contacter
            auparavant.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 order-lg-1 align-self-center">
          <h2>Atelier</h2>
          <p>
            Notre atelier de taille de pierre est situé en burdure de la D999 en
            direction de St Jean du Bruel, à droite juste après un ancien pont
            auparavant emprunté par les trains.
          </p>
        </div>
        <div className="col-lg-8 order-lg-0 align-self-center">
          <div className="embed-responsive embed-responsive-21by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5742.481627766451!2d3.367443931626158!3d43.975069249864276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3c1639c27bbad%3A0x9e427d1108895af!2sS.A.R.L.+Gilbert+Alla!5e0!3m2!1sen!2suk!4v1564603421040!5m2!1sen!2suk"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
