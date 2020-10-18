import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602815500964 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //realizar alterações : Criar tabela, campo  etc

    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
        {
          name: 'Opening_hours',
          type: 'varchar',
        },

      ]
    }))
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    // funciona como um rollback, desfazendo dalterações no metodo up

    await queryRunner.dropTable('orphanages');
  }
}
