export default function pricePrettify(num: number) {
  const n = num.toString()
  const separator = ' '
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + separator)
}
