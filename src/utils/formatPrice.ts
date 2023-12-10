const formatPrice = (value?: string | number) => {
  if (!value) {
    return ""
  }
  return (+value).toLocaleString("en-EU")
}

export default formatPrice
