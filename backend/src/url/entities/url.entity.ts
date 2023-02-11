import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';
import internal from 'stream';

@Table
export class Url extends Model{

    @PrimaryKey
    @Column
    id: number;

    @Column
    code: string;

    @Column
    url: string;

}
