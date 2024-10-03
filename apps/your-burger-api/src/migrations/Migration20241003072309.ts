import { Migration } from '@mikro-orm/migrations';

export class Migration20241003072309 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`burger_places\` (\`id\` text not null, \`brand_id\` integer not null, \`brand_name\` text not null, \`geo\` json not null, constraint \`burger_places_brand_id_brand_name_foreign\` foreign key(\`brand_id\`, \`brand_name\`) references \`burger_brands\`(\`id\`, \`name\`) on update cascade, primary key (\`id\`));`);
    this.addSql(`create index \`burger_places_brand_id_brand_name_index\` on \`burger_places\` (\`brand_id\`, \`brand_name\`);`);
  }

}
