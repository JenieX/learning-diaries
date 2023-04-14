const log = {
  space(): void {
    console.log('');
  },
  start(): void {
    this.space();
    console.log('[auto-log]: Start');
    this.space();
  },
  one(): void {
    console.log('[auto-log]: One');
  },
  two(): void {
    console.log('[auto-log]: Two');
  },
  three(): void {
    console.log('[auto-log]: Three');
  },
  four(): void {
    console.log('[auto-log]: Four');
  },
  five(): void {
    console.log('[auto-log]: Five');
  },
  end(): void {
    console.log('[auto-log]: End');
  },
};

export default log;
