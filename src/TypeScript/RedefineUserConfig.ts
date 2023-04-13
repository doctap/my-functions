interface IUserConfig {
  domain: string
  port: '60' | '80'
  theme: 'dark' | 'sunny'
  model: number
}

const DEFAULT_CONFIG: IUserConfig = {
  domain: 'example.com',
  port: '60',
  theme: 'dark',
  model: 3
};

const createConfig = (config: Partial<IUserConfig>): IUserConfig => {
  return Object.assign({}, DEFAULT_CONFIG, config);
}

console.log(createConfig({
  theme: 'sunny'
}))

console.log(DEFAULT_CONFIG)