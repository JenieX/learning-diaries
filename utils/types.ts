export interface FishOptions extends RequestInit {
  through?: 'GM',
  timeOut?: 10_000 | 30_000 | 60_000,
}

export type FishReturn = Promise<{
  response: Response,
  abortTimeOut: NodeJS.Timeout | undefined,
}>;
