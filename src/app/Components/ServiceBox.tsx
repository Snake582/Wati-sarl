// Components/ServiceBox.tsx
'use client';

import { useWatiReveal } from "../hooks/useWatiReveal";

type Props = {
  title: string
  index: number
  description?: string
}

export default function ServiceBox({ title, index, description }: Props) {
  const { ref, show } = useWatiReveal(index * 150) // 👈 stagger

  return (
    <div
      ref={ref}
      className={`wati-reveal ${show ? 'show' : ''} 
      bg-white rounded-2xl p-8 min-h-[160px]
      shadow-sm hover:shadow-md transition-shadow
      flex flex-col justify-between`}
    >
      <h3 className="text-lg font-semibold text-gray-800 leading-snug">
        {title}
      </h3>
      <div className="mt-4">
        {description && (
            <p className="mt-4 text-gray-600">
                {description}
            </p>
        )}
      </div>
    </div>
  )
}
