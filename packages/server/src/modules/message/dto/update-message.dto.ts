import { PartialType } from '@nestjs/mapped-types';
import { CreateMessage } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessage) {}
