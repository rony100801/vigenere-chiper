const byId = (selector) => document.getElementById(selector)
const getCode = (selector) => parseInt(selector.charCodeAt(0))
console.log("".charCodeAt(0))

// ENKRIPSI
const plainTextEnkripsi = byId("plainTextEnkripsi")
const keyEnkripsi = byId("keyEnkripsi")
const btnEnkripsi = byId("btnEnkripsi")
const hasilEnkripsi = byId("hasilEnkripsi")

// GENERATOR KEY
const keyGenerator = (key, text) => {
  const textArray = text.split("")
  const textLen = text.length
  const keyLen = key.length
  const hasil = textArray.map((x, i) => {
    // console.log((keyLen + i) % keyLen)
    return key[(keyLen + i) % keyLen]
  })
  // console.log(hasil)
  return hasil.join("")
}

// PROSES ENKRIPSI
btnEnkripsi.addEventListener('click', (e)=> {
  e.preventDefault()
  hasilEnkripsi.innerHTML = ""
  const plainText = plainTextEnkripsi.value
  const keyTemp = keyEnkripsi.value
  const key = keyGenerator(keyTemp, plainText)
  // console.log(key)
  const hasil = plainText.split("").map((x, i) => {
    const plainTemp = getCode(plainText[i])
    const keyTemp = getCode(key[i])
    // console.log(plainTemp)
    // console.log(keyTemp)
    const resTemp = parseInt((plainTemp + keyTemp) % 256)
    return String.fromCharCode(resTemp)
  }).join("")
  hasilEnkripsi.innerHTML = hasil
})

