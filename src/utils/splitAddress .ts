export const splitAddress = (address: string, a: number, b: number) => {
  try {
    return address.slice(0, a) + "..." + address.slice(-b)
  } catch (error) {
    return ""
  }
}
