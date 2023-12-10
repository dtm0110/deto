import { EENV, ENV } from "@constants/env"

const GA_IDS = {
  [EENV.development]: "",
  [EENV.production]: "",
}

export const GA_ID = GA_IDS[ENV]
