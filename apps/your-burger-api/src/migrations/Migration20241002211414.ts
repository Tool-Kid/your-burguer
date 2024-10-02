import { Migration } from '@mikro-orm/migrations';

export class Migration20241002211414 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`ingredients\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`i18n_key\` text not null);`);
  }

}
