import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

import DIFFICULTY from '../contants/difficulty';

interface Block {
  Index: number;
  Timestamp: string;
  Content: string;
  Hash: string;
  PreHash: string;
  Difficulty: number;
  Nonce: string;
}

export function CalculateHash(block: Block): string {
  const { Index, Timestamp, Content, Hash, PreHash, Difficulty, Nonce } = block;
  return sha256(
    Nonce +
      `${Index}${Timestamp}${Content}${Hash}${PreHash}${Difficulty}${Nonce}`
  );
}
