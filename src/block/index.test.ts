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
    expect(CalculateHash(blockMessage)).toEqual({
      sigBytes: 32,
      words: [
        1548122984,
        1813881211,
        -630577237,
        538389316,
        -1572333747,
        1573750405,
        1854121999,
        1452753498
      ]
    })
  })
})
