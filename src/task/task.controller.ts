import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Res,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Response } from 'express';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Res() res: Response, @Body() createTaskDto: CreateTaskDto) {
    const task = await this.taskService.create(createTaskDto);
    if (task) {
      res.redirect('task');
    }
  }

  @Get()
  @Render('tasks')
  async findAll() {
    const tasks = await this.taskService.findAll();

    return { tasks };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    console.log(updateTaskDto);
    const task = await this.taskService.update(+id, updateTaskDto);
    if (task) {
      res.redirect('task');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskService.remove(+id);
  }
}
