import { CalculateHash } from './index'

describe('test CalculateHash func crypto', () => {
  it('CalculateHash sha256 crypto', () => {
    const blockMessage = {
      Index: 1,
      Timestamp: 234343434343434,
      Content: '23232',
      Hash: 'fafafa',
      PreHash:
        '2c467b686c1da17bda6a67ab20172b44a248174d5dcd34856e83a80f5697425a',
      Difficulty: 2,
      Nonce: '232323'
    }
    expect(CalculateHash(blockMessage)).toEqual(
      'add07737c809c8b37ab659c31ebf1123442f00c4343963a5ae4e9f110f3c1ab8'
    )
  })
})
