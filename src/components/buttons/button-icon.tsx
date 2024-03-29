import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon?: React.FC;
}

export function ButtonIcon({ Icon, ...options }: Props) {
    return (
        <button
            className="bg-zinc-700 hover:bg-zinc-700/80 active:bg-zinc-700/60 transition-colors h-10 w-10 flex text-xl justify-center items-center text-white rounded"
            {...options}
        >
            <Icon />
        </button>
    )
}

