/**
 * In TypeScript, the Parameters<T> utility type is used to extract the parameter
 * types from a function type T.
 */

function getUserInfo(id: number, name: string): { id: number, name: string } {
  return { id, name };
}

type UserInfoParams = Parameters<typeof getUserInfo>;

const params: UserInfoParams = [1, 'John'];

// @ts-expect-error
const error: UserInfoParams = ['1', 'John'];
