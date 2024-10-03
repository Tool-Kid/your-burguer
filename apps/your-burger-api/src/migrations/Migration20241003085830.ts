import { Migration } from '@mikro-orm/migrations';

export class Migration20241003085830 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`allergens\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`i18n_key\` text not null);`);

    this.addSql(`create table \`burger_brands\` (\`id\` integer not null primary key autoincrement, \`name\` text not null);`);
    this.addSql(`create unique index \`burger_brands_name_unique\` on \`burger_brands\` (\`name\`);`);

    this.addSql(`create table \`burger_places\` (\`id\` text not null, \`brand_id\` integer not null, \`geo\` json not null, constraint \`burger_places_brand_id_foreign\` foreign key(\`brand_id\`) references \`burger_brands\`(\`id\`) on update cascade, primary key (\`id\`));`);
    this.addSql(`create index \`burger_places_brand_id_index\` on \`burger_places\` (\`brand_id\`);`);

    this.addSql(`create table \`ingredients\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`i18n_key\` text not null);`);
  }

}
