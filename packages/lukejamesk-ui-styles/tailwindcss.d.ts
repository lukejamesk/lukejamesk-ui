declare module 'tailwindcss/defaultTheme' {
  export const colors: { [key: string]: string }
}

declare module 'tailwindcss/plugin' {
  type Colors = { [key: string]: { [key: string]: string } }

  type Theme = <T>(path: string) => T
  type AddComponents = (arg: unknown) => void
  type AddUtilities = (arg: unknown) => void

  type PluginType = {
    theme: Theme
    addComponents: AddComponents
    addUtilities: AddUtilities
  }

  type Callback = (tw: PluginType) => void

  export default function(callback: Callback): void
}
