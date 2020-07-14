# SARL Carrière Alla

<p align="center">
  <a href="https://lgtm.com/projects/g/browniebroke/carriere-web/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/github/browniebroke/carriere-web?logo=lgtm&logoColor=white&style=flat-square" alt="Total alerts">
  </a>
  <a href="https://david-dm.org/browniebroke/carriere-web">
    <img src="https://img.shields.io/david/browniebroke/carriere-web?logo=npm&logoColor=white&style=flat-square" alt="dependencies Status"/>
  </a>
  <a href="https://github.com/browniebroke/carriere-web/actions?query=workflow%3ALint">
    <img alt="Linting Workflow status" src="https://img.shields.io/github/workflow/status/browniebroke/carriere-web/Lint/master?label=Lint&logo=github&logoColor=white&style=flat-square">
  </a>
  <a href="https://github.com/browniebroke/carriere-web/actions">
    <img src="https://img.shields.io/github/workflow/status/browniebroke/carriere-web/Lighthouse%20Prod/master?label=Lighthouse&logo=github&logoColor=white&style=flat-square" alt="Lighthouse"/>
  </a>
  <a href="https://app.netlify.com/sites/chez-nicole/deploys">
    <img src="https://img.shields.io/netlify/10c50357-1953-4307-9c1b-c40f1f826885?label=Netlify&logo=netlify&logoColor=white&style=flat-square" alt="Deployed on Netlify"/>
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
 
