export interface ICipherService {
  cipher: (key: string, plaintext: string) => string;

  decipher: (key: string, encryptedData: string) => string;
}
