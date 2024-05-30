import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  address: string;
}
