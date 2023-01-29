# SARL Carrière Alla

<p align="center">
  <a href="https://lgtm.com/projects/g/browniebroke/carriere-web/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/github/browniebroke/carriere-web?logo=lgtm&logoColor=white&style=flat-square" alt="Total alerts">
  </a>
  <a href="https://david-dm.org/browniebroke/carriere-web">
    <img src="https://img.shields.io/david/browniebroke/carriere-web?logo=npm&logoColor=white&style=flat-square" alt="dependencies Status"/>
  </a>
  <a href="https://github.com/browniebroke/carriere-web/actions/workflows/ci.yml?query=branch%3Amain">
    <img alt="CI status" src="https://img.shields.io/github/actions/workflow/status/browniebroke/carriere-web/ci.yml?branch=main&label=CI&logo=github&logoColor=white&style=flat-square">
  </a>
  <a href="https://app.netlify.com/sites/carriere-alla/deploys">
    <img src="https://img.shields.io/netlify/10c50357-1953-4307-9c1b-c40f1f826885?label=Netlify&logo=netlify&logoColor=white&style=flat-square" alt="Deployed on Netlify"/>
  </a>
</p>

This site is built using [GatsbyJS](https://www.gatsbyjs.org/), a static code generator using [React](https://reactjs.org/) & [GraphQL](https://graphql.org/). It is deployed on [Netlify](https://www.netlify.com/) and the domain is coming from [OVH](https://www.ovh.co.uk/). Dependencies are kept up to date using the excellent [Renovate Bot](https://renovatebot.com/).

## Development

It uses npm to manage dependencies, so getting started should be easy:

```bash
# Install deps
$ npm i
# Start the development server
$ npm run develop
# Build production
$ npm run build
```

## Git flow

1. Create a branch from `main` for the change with a meaningful name
2. Make the required change, test locally, then commit
3. Create a pull request, which will trigger the build & a deploy preview on Netlify.
