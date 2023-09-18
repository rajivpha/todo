import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { STATUS } from '../dto/create-task.dto';

@Table({ tableName: 'tasks', timestamps: true })
export class Task extends Model {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    field: 'id',
  })
  id: number;

  @Column({ allowNull: false, type: DataType.STRING, field: 'title' })
  title: string;

  @Column({ allowNull: false, type: DataType.STRING, field: 'description' })
  description: string;

  @Column({ allowNull: false, type: DataType.DATE, field: 'date' })
  date: Date;

  @Column({
    allowNull: false,
    type: DataType.ENUM(STATUS.DONE, STATUS.UPCOMING),
    defaultValue: STATUS.UPCOMING,
    field: 'status',
  })
  status: string;
}
