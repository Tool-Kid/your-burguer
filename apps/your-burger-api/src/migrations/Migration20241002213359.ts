import { Migration } from '@mikro-orm/migrations';

export class Migration20241002213359 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`burger_brands\` (\`id\` integer not null primary key autoincrement, \`name\` text not null);`);
  }

}
