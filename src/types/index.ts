export type Species = 'Human' | 'Animal' | 'Alien'

export interface IFilter {
  specie: Species
  name: string
}
