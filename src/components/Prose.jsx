import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        'prose prose-neutral max-w-none dark:prose-invert',
        // Headings
        'prose-headings:font-display prose-headings:font-semibold prose-headings:text-neutral-950',
        // Lead paragraph
        'prose-lead:text-neutral-600',
        // Links
        'prose-a:font-semibold prose-a:text-neutral-950 hover:prose-a:text-neutral-700',
        // Lists
        'prose-ol:text-neutral-600 prose-ul:text-neutral-600',
        // Code
        'prose-code:rounded prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-neutral-700',
        // Figures
        'prose-img:rounded-lg',
        // Quotes
        'prose-blockquote:border-neutral-950 prose-blockquote:text-neutral-800',
        // Table
        'prose-th:font-medium prose-th:text-neutral-950',
        className,
      )}
      {...props}
    />
  )
} 