import { CalculateHash } from './src/block'

console.log(
  CalculateHash({
    Index: 1,
    Timestamp: Date.now(),
    Content: '23232',
    Hash: 'fafafa',
    PreHash: 'fljfljfjlajl',
    Difficulty: 2,
    Nonce: '232323'
  })
)
