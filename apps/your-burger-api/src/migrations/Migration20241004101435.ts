import { Migration } from '@mikro-orm/migrations';

export class Migration20241004101435 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`allergens\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`i18n_key\` text not null);`);

    this.addSql(`create table \`burger_brands\` (\`id\` integer not null primary key autoincrement, \`name\` text not null);`);
    this.addSql(`create unique index \`burger_brands_name_unique\` on \`burger_brands\` (\`name\`);`);

    this.addSql(`create table \`geopoints\` (\`id\` numeric(10,0) not null, \`street\` text not null, \`latitude\` numeric(10,0) not null, \`longitude\` numeric(10,0) not null, primary key (\`id\`));`);
    this.addSql(`create unique index \`geopoints_street_unique\` on \`geopoints\` (\`street\`);`);

    this.addSql(`create table \`burger_places\` (\`id\` text not null, \`brand_id\` integer not null, \`geo_id\` numeric(10,0) not null, constraint \`burger_places_brand_id_foreign\` foreign key(\`brand_id\`) references \`burger_brands\`(\`id\`) on update cascade, constraint \`burger_places_geo_id_foreign\` foreign key(\`geo_id\`) references \`geopoints\`(\`id\`) on update cascade, primary key (\`id\`));`);
    this.addSql(`create index \`burger_places_brand_id_index\` on \`burger_places\` (\`brand_id\`);`);
    this.addSql(`create unique index \`burger_places_geo_id_unique\` on \`burger_places\` (\`geo_id\`);`);

    this.addSql(`create table \`burgers\` (\`id\` text not null, \`name\` text not null, \`place_id\` text not null, constraint \`burgers_place_id_foreign\` foreign key(\`place_id\`) references \`burger_places\`(\`id\`) on update cascade, primary key (\`id\`));`);
    this.addSql(`create unique index \`burgers_name_unique\` on \`burgers\` (\`name\`);`);
    this.addSql(`create index \`burgers_place_id_index\` on \`burgers\` (\`place_id\`);`);

    this.addSql(`create table \`burgers_allergens\` (\`burger_id\` text not null, \`allergen_id\` integer not null, constraint \`burgers_allergens_burger_id_foreign\` foreign key(\`burger_id\`) references \`burgers\`(\`id\`) on delete cascade on update cascade, constraint \`burgers_allergens_allergen_id_foreign\` foreign key(\`allergen_id\`) references \`allergens\`(\`id\`) on delete cascade on update cascade, primary key (\`burger_id\`, \`allergen_id\`));`);
    this.addSql(`create index \`burgers_allergens_burger_id_index\` on \`burgers_allergens\` (\`burger_id\`);`);
    this.addSql(`create index \`burgers_allergens_allergen_id_index\` on \`burgers_allergens\` (\`allergen_id\`);`);

    this.addSql(`create table \`ingredients\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`i18n_key\` text not null);`);

    this.addSql(`create table \`burgers_ingredients\` (\`burger_id\` text not null, \`ingredient_id\` integer not null, constraint \`burgers_ingredients_burger_id_foreign\` foreign key(\`burger_id\`) references \`burgers\`(\`id\`) on delete cascade on update cascade, constraint \`burgers_ingredients_ingredient_id_foreign\` foreign key(\`ingredient_id\`) references \`ingredients\`(\`id\`) on delete cascade on update cascade, primary key (\`burger_id\`, \`ingredient_id\`));`);
    this.addSql(`create index \`burgers_ingredients_burger_id_index\` on \`burgers_ingredients\` (\`burger_id\`);`);
    this.addSql(`create index \`burgers_ingredients_ingredient_id_index\` on \`burgers_ingredients\` (\`ingredient_id\`);`);
  }

}
