import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskModel.create({ ...createTaskDto });
  }

  async findAll() {
    const whereQuery = {};
    return await this.taskModel.findAll({ where: whereQuery, raw: true });
  }

  async findOne(id: number) {
    const task = await this.taskModel.findOne({ where: { id: id } });

    if (!task) throw new BadRequestException(`Task does'nt exists.`);
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);

    return await this.taskModel.update(
      { ...updateTaskDto },
      { where: { id: id } },
    );
  }

  async remove(id: number) {
    return await this.taskModel.destroy({ where: { id: id } });
  }
}
