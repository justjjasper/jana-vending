import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal transition-colors hover:bg-section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <IconSun size={18} stroke={1.5} aria-hidden="true" />
      ) : (
        <IconMoon size={18} stroke={1.5} aria-hidden="true" />
      )}
    </button>
  )
}
