export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-13'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)
// export const sanityToken = tokenValue(
//   process.env.NEXT_PUBLIC_SANITY_TOKEN,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
// )
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = true

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
function tokenValue(NEXT_PUBLIC_SANITY_TOKEN: string | undefined, arg1: string) {
  throw new Error("Function not implemented.")
}

