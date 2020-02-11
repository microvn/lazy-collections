import { pipe } from './pipe';
import { range } from './range';
import { chunk } from './chunk';

it('should create chunked items', () => {
  const program = pipe(range(0, 10), chunk(3), Array.from);

  expect(program()).toEqual([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10],
  ]);
});
