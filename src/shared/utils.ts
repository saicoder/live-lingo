export const randomItem = <T>(items: Array<T>) => {
  return items[Math.floor(Math.random() * items.length)]
}
