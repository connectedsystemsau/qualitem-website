interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'brand'
  className?: string
  onClick?: () => void
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = 'rounded-full border transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
  
  const variantClasses = {
    primary: 'border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
    secondary: 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent',
    brand: 'border-transparent bg-brand text-white hover:bg-brand-dark dark:bg-blue-700 dark:hover:bg-blue-800'
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}