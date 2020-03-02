# Tezos Wallet

Tezos Plasma Wallet for Android developed with Plasma Chamber and React Native.

## Development

### How to install

```bash
$ cd app/
$ npm i
```

### How to run

```bash
$ npm run android
```

### eslint

```bash
$ npm run lint
$ npm run lint:fix
```

### prettier

```bash
$ npm run fmt
```

### How to install emulator

#### Android

[Install Android Studio](https://developer.android.com/studio/?gclid=Cj0KCQiAvc_xBRCYARIsAC5QT9kzcTZsyRADH_pNZHuisRabGUe7iC-yNIFGZqIRglURvyQ5ye4LhL0aAkLkEALw_wcB)

## Roadmap

- [ ] embed `wakkanay-tezos`

## Issue of the libraries

### support React Native runtime (`ConseilJS`)

We have found that `libsodium-wrappers-sumo` doesn't work on the React Native.
https://github.com/Cryptonomic/ConseilJS/blob/master/package.json#L77

There's a possibility that the other libraries also don't work on it.
