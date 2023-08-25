import {
  filter,
  Observable,
  OperatorFunction,
  pipe,
  UnaryFunction,
} from 'rxjs';

export const filterNullish = <T>(): UnaryFunction<
  Observable<T | null>,
  Observable<T>
> => pipe(filter((value) => value !== null) as OperatorFunction<T | null, T>);

export const filterUndefined = <T>(): UnaryFunction<
  Observable<T | undefined>,
  Observable<T>
> =>
  pipe(
    filter((value) => value !== undefined) as OperatorFunction<T | undefined, T>
  );

export const filterNullishAndUndefined = <T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> =>
  pipe(
    filter(
      (value) => value !== null && value !== undefined
    ) as OperatorFunction<T | null | undefined, T>
  );
