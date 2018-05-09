function completion(n) {
  return '00000000'.slice(String(n).length) + n
}

function text2Binary(text) {
  return text.split('').map(function(word) {
    return completion(word.charCodeAt(0).toString(2))
  }).join(' ')
}

function encrypt2Zero(binary) {
  return binary.split('').map(function(n) {
    const map = {
      '1': '​',
      '0': '‌'
    }
    return map[n] || '‍'
  }).join('')
}

function decrypt2Binary(str) {
  return str.split('').map(function(zero) {
    if (zero === '​') {
      return '1'
    }

    if (zero === '‌') {
      return '0'
    }

    return ' '
  }).join('')
}

function binary2Text(binary) {
  return binary.split(' ').map(function(num) {
    return String.fromCharCode(parseInt(num, 2))
  }).join('')
}

function getEncrypt(words) {
  return encrypt2Zero(text2Binary(words))
}

function getDecrypt(words) {
  return binary2Text(decrypt2Binary(words))
}

module.exports = {
  getEncrypt,
  getDecrypt
}