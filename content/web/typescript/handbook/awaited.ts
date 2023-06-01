/**
 * In TypeScript, the Awaited<T> utility type is used to extract the resolved
 * type of a promise type T.
 */

async function fetchResponse(): Promise<Response> {
  const response = await fetch('https://example.com/data');

  return response;
}

type FetchDataResolvedType = Awaited<ReturnType<typeof fetchResponse>>;

const data: FetchDataResolvedType = await fetchResponse();
console.log(data);

export {};
