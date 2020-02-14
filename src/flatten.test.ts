import { pipe } from './pipe';
import { flatten } from './flatten';
import { range } from './range';
import { toArray } from './toArray';

it('should be possible to flatten data (shallow)', () => {
  const program = pipe(flatten({ shallow: true }), toArray());

  expect(program([1, [2], range(3, 10)])).toEqual(Array.from(range(1, 10)));
});

it('should be possible to deep flatten data', () => {
  const program = pipe(flatten(), toArray());

  expect(program([1, [2, [3, [[[4]], [5]]]]])).toEqual(Array.from(range(1, 5)));
});
