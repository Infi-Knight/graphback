import { InputModelTypeContext } from '@graphback/core';
import { ModelChange } from '../changes/ChangeTypes';
import { SchemaMigration } from '../models';

export interface MigrationProvider {
  getMigrations(): Promise<SchemaMigration[]>;
  applyMigration(migration: SchemaMigration): Promise<void>;
  createMigration(migration: SchemaMigration): Promise<void>;
}
