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

  let loops = 5;

  while (loops) {
    console.log(`Loop #${5 - loops + 1}`);
    console.log(counterGenerator.next());

    loops -= 1;

    await sleep();
    log.space();
  }
}

await main();
