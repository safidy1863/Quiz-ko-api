export interface UseCase<Model> {
  execute(...args: any[]): Promise<Model | { message: string }>;
}
