const byId = (selector) => document.getElementById(selector)
const byClass = (selector) => document.getElementByClass(selector)
const getCode = (selector) => parseInt(selector.charCodeAt(0))

// DEKRIPSI
const chiperText = byId("chiperText")
const keyDekripsi = byId("keyDekripsi")
const btnDekripsi = byId("btnDekripsi")
const hasilDekripsi = byId("hasilDekripsi")

// GENERATOR KEY
const keyGenerator = (key, text) => {
  const textArray = text.split("")
  const textLen = text.length
  const keyLen = key.length
  const hasil = textArray.map((x, i) => {
    return key[(keyLen + i) % keyLen]
  })
  return hasil.join("")
}

// PROSES DEKRIPSI
btnDekripsi.addEventListener('click', (e)=> {
  e.preventDefault()
  hasilDekripsi.innerHTML = ""
  const chiper = chiperText.value
  const keyTemp = keyDekripsi.value
  const key = keyGenerator(keyTemp, chiper)
  // console.log(key)
  const hasil = chiper.split("").map((x, i) => {
    const plainTemp = getCode(chiper[i])
    const keyTemp = getCode(key[i])
    console.log(plainTemp)
    console.log(keyTemp)
    const resTemp = parseInt((plainTemp - keyTemp) % 256)
    return String.fromCharCode(resTemp)
  }).join("")
  hasilDekripsi.innerHTML = hasil
})