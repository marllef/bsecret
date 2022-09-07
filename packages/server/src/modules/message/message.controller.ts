import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessage } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Request } from 'express';
import { JwtAuthGuard } from '~/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() data: CreateMessage, @Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1];
    return this.messageService.create(data, token);
  }

  @Post(':messageId')
  reply(
    @Param('messageId') messageId: string,
    @Body() data: CreateMessage,
    @Req() req: Request,
  ) {
    const token = req.headers.authorization?.split(' ')[1];
    data.parentId = messageId;
    return this.messageService.create(data, token);
  }

  @Get()
  findAll(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1];
    return this.messageService.findAll(token);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
