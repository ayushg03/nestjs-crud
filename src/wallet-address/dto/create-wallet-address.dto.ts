import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletAddressDto {
  @ApiProperty({ example: 1, description: 'The ID of the user associated with the wallet address' })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: '0x123456789', description: 'The wallet address' })
  @IsString()
  @IsNotEmpty()
  address: string;
}
