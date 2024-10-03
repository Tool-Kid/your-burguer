import { Migration } from '@mikro-orm/migrations';

export class Migration20241003135452 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`burgers\` (\`id\` text not null, \`name\` text not null, \`place_id\` text not null, constraint \`burgers_place_id_foreign\` foreign key(\`place_id\`) references \`burger_places\`(\`id\`) on update cascade, primary key (\`id\`));`);
    this.addSql(`create unique index \`burgers_name_unique\` on \`burgers\` (\`name\`);`);
    this.addSql(`create index \`burgers_place_id_index\` on \`burgers\` (\`place_id\`);`);

    this.addSql(`create table \`burgers_allergens\` (\`burger_id\` text not null, \`allergen_id\` integer not null, constraint \`burgers_allergens_burger_id_foreign\` foreign key(\`burger_id\`) references \`burgers\`(\`id\`) on delete cascade on update cascade, constraint \`burgers_allergens_allergen_id_foreign\` foreign key(\`allergen_id\`) references \`allergens\`(\`id\`) on delete cascade on update cascade, primary key (\`burger_id\`, \`allergen_id\`));`);
    this.addSql(`create index \`burgers_allergens_burger_id_index\` on \`burgers_allergens\` (\`burger_id\`);`);
    this.addSql(`create index \`burgers_allergens_allergen_id_index\` on \`burgers_allergens\` (\`allergen_id\`);`);

    this.addSql(`create table \`burgers_ingredients\` (\`burger_id\` text not null, \`ingredient_id\` integer not null, constraint \`burgers_ingredients_burger_id_foreign\` foreign key(\`burger_id\`) references \`burgers\`(\`id\`) on delete cascade on update cascade, constraint \`burgers_ingredients_ingredient_id_foreign\` foreign key(\`ingredient_id\`) references \`ingredients\`(\`id\`) on delete cascade on update cascade, primary key (\`burger_id\`, \`ingredient_id\`));`);
    this.addSql(`create index \`burgers_ingredients_burger_id_index\` on \`burgers_ingredients\` (\`burger_id\`);`);
    this.addSql(`create index \`burgers_ingredients_ingredient_id_index\` on \`burgers_ingredients\` (\`ingredient_id\`);`);
  }

}
