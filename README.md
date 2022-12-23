# Node template
[Node.js](https://nodejs.org/en/) project startup template.

----

## Playground

| Command | Description |
| ------- | ----------- |
| `npm start` | Compile and start project |
| `npm run dev` | Start project in dev mode |
| `npm run lint` | Run linter |
| `npm run lint:fix` | Fix linter errors |
| `npm run post:install` | Install pre-commit git hook |

## Initial settings

### Eslint

Needed packages:

- [eslint](https://eslint.org/)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n#readme)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)

`npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise`

### Prettier

Needed packages:

- [prettier](https://prettier.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

## Todo

- [ ] Implement environment global vars
- [ ] Add `nix-shell` configuration
- [ ] Improve eslint rules
- [ ] Improve template scrips
- [ ] Add testing settings

