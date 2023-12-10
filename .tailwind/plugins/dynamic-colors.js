const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)
  return `${r}, ${g}, ${b}`
}

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue) return `rgba(var(--${variableName}), ${opacityValue})`
    return `rgb(var(--${variableName}))`
  }
}

module.exports = require("tailwindcss/plugin").withOptions(
  ({ light, dark }) => {
    const flattenLight = flattenColorPalette(light)
    const flattenDark = flattenColorPalette(dark)
    return ({ addBase }) => {
      const lightBase = Object.fromEntries(
        Object.entries(flattenLight).map(([key]) => [`--${key}`, hexToRgb(flattenLight[key])])
      )
      const darkBase = Object.fromEntries(
        Object.entries(flattenDark).map(([key]) => [`--${key}`, hexToRgb(flattenDark[key])])
      )
      addBase({
        ['[data-theme="light"]']: lightBase,
        ['[data-theme="dark"]']: darkBase,
      })
    }
  },
  ({ light, dark }) => {
    const flattenLight = flattenColorPalette(light)
    const flattenDark = flattenColorPalette(dark)
    const lightColors = Object.fromEntries(
      Object.entries(flattenLight).map(([key, value]) => [
        key,
       withOpacity(key)
      ])
    )
    const darkColors = Object.fromEntries(
      Object.entries(flattenDark).map(([key, value]) => [
        key,
        withOpacity(key)
      ])
    )
    return {
      theme: {
        extend: {
          colors: {
            ...lightColors,
            ...darkColors,
          },
        },
      },
    }
  }
)
