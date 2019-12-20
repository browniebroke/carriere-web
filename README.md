# SARL Carrière Alla

<p align="center">
  <a href="https://lgtm.com/projects/g/browniebroke/carriere-web/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/g/browniebroke/carriere-web.svg?logo=lgtm&logoWidth=18"/ alt="Total alerts">
  </a>
  <a href="https://david-dm.org/browniebroke/carriere-web">
    <img src="https://david-dm.org/browniebroke/carriere-web/status.svg" alt="dependencies Status"/>
  </a>
  <a href="https://travis-ci.com/browniebroke/carriere-web">
    <img src="https://travis-ci.com/browniebroke/carriere-web.svg?branch=master"/>
  </a>
  <a href="https://github.com/browniebroke/carriere-web/actions">
    <img src="https://github.com/browniebroke/carriere-web/workflows/Lighthouse/badge.svg" alt="Lighthouse"/>
  </a>
  <a href="https://www.netlify.com">
    <img src="https://img.shields.io/badge/deployed-netlify-00c7b7.svg" alt="Deployed on Netlify"/>
  </a>
</p>

This site is built using [GatsbyJS](https://www.gatsbyjs.org/), a static code generator using [React](https://reactjs.org/) & [GraphQL](https://graphql.org/). It is deployed on [Netlify](https://www.netlify.com/) and the domain is coming from [OVH](https://www.ovh.co.uk/). Dependencies are kept up to date using the excellent [Renovate Bot](https://renovatebot.com/).

## Development 

It uses yarn to manage dependencies, so getting started should be easy:

```bash
# Install deps
$ yarn
# Start the development server
$ yarn run develop
# Build production
$ yarn run build
```

## Git flow

1. Create a branch from `master` for the change with a meaningful name
2. Make the required change, test locally, then commit
3. Create a pull request, which will trigger the build & a deploy preview on Netlify.
 
