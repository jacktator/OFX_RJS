# Documentation

## Planning

This project should have the following
- [Live Site](https://ofx.netlify.app/)
- [Environment Variable](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata) (To Hide API Route)
- [UI Library](https://ofx.netlify.app/storybook/index.html)
- [License](./LICENSE)

## Features by Priority

Must Have:

- Title
- Quote Form
    - First Name *
    - Last Name *
    - Email
    - Telephone / Mobile
    - From Currency *
    - To Currency *
    - Amount *
    - Button
    - Error Message (when below minimum)
- Quote Result
    - OFX Customer Rate
    - From
    - To
    - Button

Nice to Have:

- [x] PWA
- [ ] Save Locally (With Historical Rate TimeStamp)
- [ ] AutoSave (IndexDB)


### Packages

- [x] React (Dev)
- [x] PropTypes (Dev)
- [ ] [React Bootstrap](https://react-bootstrap.github.io/) (UI)
- [ ] StyledComponents (UI)
- [ ] Storybook (UI)
- [x] Netlify (CI & CD)
- [ ] Snapshot (Testing)
