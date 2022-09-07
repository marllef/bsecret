import { PartialType } from '@nestjs/mapped-types';
import { CreateAccount } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccount) {}
