'use client'

import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    Icon?: React.FC;
    full?: boolean;
}

export function ButtonSecondary({title, full, Icon, ...options}: Props) {
    return (
        <button className={`
            ${full ? 'w-full' : 'w-fit'}
            h-12 transition-colors rounded-md px-6 font-medium text-base
            bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500
            flex items-center justify-center gap-2
        `} {...options}>
            {Icon && <span className="text-xl text-white"><Icon /></span>}
            {title}
        </button>
    )
}