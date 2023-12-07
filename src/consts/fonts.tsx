import { Global } from '@emotion/react'

export const fonts = {
  Roboto: [
    {
      src: 'Roboto-Light.ttf',
      weight: '300',
    },
    {
      src: 'Roboto-Regular.ttf',
      weight: '400',
    },
    {
      src: 'Roboto-Medium.ttf',
      weight: '500',
    },
    {
      src: 'Roboto-Bold.ttf',
      weight: '700',
    },
  ],
}

/* export const FallbackFonts = () => {
  const fontFaces = []
  Object.keys(fonts).map((fontName) => {
    fonts[fontName].map((item: { src: string; weight: string }) => {
      fontFaces.push({
        '@font-face': {
          fontFamily: fontName,
          fontStyle: 'normal',
          fontWeight: item.weight ? `font-weight: ${item.weight};` : '',
          src: `url('/fonts/${item.src}')`,
        },
      })
    })
  })
  return <Global styles={fontFaces} />
} */