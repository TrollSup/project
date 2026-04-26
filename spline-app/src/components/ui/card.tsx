import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-xl border border-slate-700 bg-black/90 shadow-2xl', className)} {...props} />
  )
)
Card.displayName = 'Card'

export { Card }
