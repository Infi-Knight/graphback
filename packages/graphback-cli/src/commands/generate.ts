import { commandRoot } from '../commandRoot'
import { generate } from '../helpers'

export const command = 'generate'

export const desc = 'Generate GraphQL schema and resolvers'

export const builder = {}

export async function handler() {
  await generate(commandRoot)
}