import {
  filter,
  Observable,
  OperatorFunction,
  pipe,
  UnaryFunction,
} from 'rxjs';

export function filterNullishAndUndefined<T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> {
  return pipe(
    filter(
      (value) => value !== null && value !== undefined
    ) as OperatorFunction<T | null | undefined, T>
  );
}
