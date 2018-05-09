# text-fingerprint

## Install

```sh
$ npm install --save text-fingerprint
```

## Usage

```js
const { getEncrypt, getDecrypt } = require('text-fingerprint')
```

## Example

```js
const { getEncrypt, getDecrypt } = require('text-fingerprint')
const secret = 'secret'
const text = 'some test words'
const encryptSecret = getEncrypt(secret) //"‌​​​‌‌​​‍‌​​‌‌​‌​‍‌​​‌‌‌​​‍‌​​​‌‌​‌‍‌​​‌‌​‌​‍‌​​​‌​‌‌"
const encryptText = text + encryptSecret //"some test words‌​​​‌‌​​‍‌​​‌‌​‌​‍‌​​‌‌‌​​‍‌​​​‌‌​‌‍‌​​‌‌​‌​‍‌​​​‌​‌‌"
const decryptText = getDecrypt(encryptText) // "               secret"
```