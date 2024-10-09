export abstract class Mapper<I, O> {
  abstract mapFrom(data: I, ...args: any[]): O;
  abstract mapTo(data: O, ...args: any[]): I;
}
