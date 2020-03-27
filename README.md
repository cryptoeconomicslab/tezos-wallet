# Tezos Wallet

Tezos Plasma Wallet for Android developed with Plasma Chamber and React Native.

## Development

### Requirement

tezos-wallet requires the following to run:

- [Node.js](https://nodejs.org/) v10+
- [npm](https://www.npmjs.com/) (normally comes with Node.js)

### How to install

```bash
cd app/
npm i
```

### How to run

```bash
# run the emulator before this command
npm run android
```

### How to install emulator

#### Android

[Check here](https://developer.android.com/studio/?gclid=Cj0KCQiAvc_xBRCYARIsAC5QT9kzcTZsyRADH_pNZHuisRabGUe7iC-yNIFGZqIRglURvyQ5ye4LhL0aAkLkEALw_wcB)

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue or any other method with the owners of this repository before making a change.

Please note we have [a code of conduct](https://github.com/cryptoeconomicslab/ovm-plasma-chamber-spec/blob/master/CODE-OF-CONDUCT.md), please follow it in all your interactions with the project.

1.  Ensure that tests pass and code is lint free: `npm run lint`
2.  Update the README.md if any changes invalidate its current content.
3.  Include any tests for new functionality.
4.  Reference any revelant issues in your PR comment.

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Roadmap

- [ ] embed `wakkanay-tezos`

## Issue of the libraries

### support React Native runtime (`ConseilJS`)

We have found that `libsodium-wrappers-sumo` doesn't work on the React Native.
https://github.com/Cryptonomic/ConseilJS/blob/master/package.json#L77

There's a possibility that the other libraries also don't work on it.

## License

> You can check out the full license [here](/LICENSE)

This project is licensed under the terms of the Apache-2.0 license.
