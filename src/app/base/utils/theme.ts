export type Theme = 'light' | 'dark'

export function applyTheme(theme: Theme) {
  if (typeof window === 'undefined') return // SSR safe

  const root = document.documentElement

  if (theme === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.add('light')
    root.classList.remove('dark')
  }

  localStorage.setItem('theme', theme)
}

// Get theme from storage or system
export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return (localStorage.getItem('theme') as Theme) || 'light'
}
