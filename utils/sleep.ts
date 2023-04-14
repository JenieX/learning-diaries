async function sleep(milliSeconds?: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliSeconds ?? 1500);
  });
}

export default sleep;
