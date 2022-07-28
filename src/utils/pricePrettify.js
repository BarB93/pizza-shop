export default function pricePrettify(num) {
  if (!Boolean(num)) {
    // eslint-disable-next-line no-console
    console.error('Неккоректная цена')
    return 0
  }

  const n = num.toString()
  const separator = ' '
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + separator)
}
