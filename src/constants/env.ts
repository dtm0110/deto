export enum EENV {
  development = "development",
  production = "production",
}

export const ENV = (process.env.NEXT_PUBLIC_ENV || EENV.development) as keyof typeof EENV
