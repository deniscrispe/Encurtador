import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Url extends Model{

    @PrimaryKey
    @AutoIncrement
    @ApiProperty()
    @Column
    id: number;

    @ApiProperty()
    @Column
    code: string;

    @ApiProperty()
    @Column
    url: string;

}
