import { Entity, Repository } from 'src/core';

export class RepositoryCacheMemory<
  TEntity extends Entity,
> extends Repository<TEntity> {
  protected readonly items: TEntity[];

  constructor() {
    super();
    this.items = [];
  }

  async create(data: TEntity): Promise<TEntity> {
    data.id = (
      this.items.length > 0 ? this.items.slice(-1)[0].id + 1 : 1
    ).toString();
    const count = this.items.push(data);
    return this.items[count - 1];
  }

  async findAll(filter?: Partial<TEntity>): Promise<TEntity[]> {
    let filtered = this.items;
    for (const key in filter) {
      filtered = filtered.filter((item) => item[key] === filter[key]);
    }
    return filtered;
  }

  findOne(id: string): Promise<TEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<TEntity>): Promise<TEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
