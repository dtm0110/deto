import { EENV, ENV } from "@/constants/env"

const HOSTS = {
  [EENV.development]: "",
  [EENV.production]: "",
}

export const HOST = HOSTS[ENV]
