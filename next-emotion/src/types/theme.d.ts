import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        name: string,
        colors: {
          primary: string,
          secondary: string,
          background: string,
          text: string,
        },
    }
}