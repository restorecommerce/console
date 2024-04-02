import { Observable, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export const filterEmpty = <T>(): UnaryFunction<
  Observable<T | ''>,
  Observable<T>
> => pipe(filter((value) => value !== '') as OperatorFunction<T | '', T>);

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

export const filterEmptyAndNullishAndUndefined = <T>(): UnaryFunction<
  Observable<T | null | undefined | ''>,
  Observable<T>
> =>
  pipe(
    filter(
      (value) => value !== null && value !== undefined && value !== ''
    ) as OperatorFunction<T | null | undefined | '', T>
  );
