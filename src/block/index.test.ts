import { CalculateHash } from './index'

describe('test CalculateHash func cryto', () => {
  it('CalculateHash sha256 cryto', () => {
    const blockMessage = {
      Index: 1,
      Timestamp: 234343434343434,
      Content: '23232',
      Hash: 'fafafa',
      PreHash: 'fljfljfjlajl',
      Difficulty: 2,
      Nonce: '232323'
    }
    expect(CalculateHash(blockMessage)).toEqual(
      '5c467b686c1da17bda6a27ab20172b44a248174d5dcd86856e83a80f5697425a'
    )
  })
})
