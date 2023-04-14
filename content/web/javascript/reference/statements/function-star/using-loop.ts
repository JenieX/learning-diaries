import { log, sleep } from '../../../../../../utils';

function* counter(): Generator<1 | 2 | 3, void, unknown> {
  log.one();
  yield 1;

  log.two();
  yield 2;

  log.three();
  yield 3;

  log.end();
}

const counterGenerator = counter();

async function main(): Promise<void> {
  log.start();

  let loop = 0;

  for (const value of counterGenerator) {
    loop += 1;

    console.log(`Loop #${(loop)}`);
    console.log(value);

    await sleep();
    log.space();
  }
}

await main();
