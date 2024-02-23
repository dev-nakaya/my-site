import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'primary-50': '#EFFDF5',
        'primary-100': '#D9FBE8',
        'primary-200': '#B3F5D1',
        'primary-300': '#75EDAE',
        'primary-400': '#00DC82',
        'primary-500': '#00C16A',
        'primary-600': '#00A155',
        'primary-700': '#007F45',
        'primary-800': '#016538',
        'primary-900': '#0A5331',
        'primary-950': '#052E16'
      }
    }
  }
}
