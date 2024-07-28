'use server'

import { openai } from '@ai-sdk/openai'
import { generateObject } from 'ai'
import { z } from 'zod'

import { nodes, links } from '@/assets/data/demo-mindmap'

export const SearchWithAI = async (query: string) => {
    const { object } = await generateObject({
        model: openai('gpt-4-turbo'),
        prompt: `
            Busca en la memoria de simulación la información sobre "${query}" con este contexto ${JSON.stringify({ nodes, links })}
        `,
        schema: z.object({
            nodes: z.array(z.object({
                id: z.string(),
                info: z.string(),
                registros: z.array(z.string())
            })),
            links: z.array(z.object({
                source: z.string(),
                target: z.string(),
            }))
        })
    })

    return object
}