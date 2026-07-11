import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-section hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.95] ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <IconSun size={16} stroke={1.5} aria-hidden="true" />
      ) : (
        <IconMoon size={16} stroke={1.5} aria-hidden="true" />
      )}
    </button>
  )
}
