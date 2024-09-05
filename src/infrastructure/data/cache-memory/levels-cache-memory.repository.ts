import { LevelEntity, LevelsRepository, Repository } from '@/core';
import { RepositoryCacheMemory } from './repository-cache-memory';

export class LevelsCacheMemoryRepository
  extends RepositoryCacheMemory<LevelEntity>
  implements LevelsRepository {}
