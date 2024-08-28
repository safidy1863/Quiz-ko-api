import * as bcrypt from 'bcrypt';

async function encrypt(data: string) {
  const salt = await bcrypt.genSalt();
  const dataHashed = await bcrypt.hash(data, salt);

  return dataHashed;
}

export { encrypt };
