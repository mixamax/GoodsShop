export default function plural(value: number) {
  const variants = {
    one: 'item',
    other: 'items',
    zero: 'items',
    two: 'items',
    few: 'items',
    many: 'items',
  }
  const locale = 'en-US'
  const key = new Intl.PluralRules(locale).select(value)
  return variants[key] || ''
}
