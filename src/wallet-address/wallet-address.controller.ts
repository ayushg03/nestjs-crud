import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('wallet-address')
@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new wallet address' })
  @ApiResponse({ status: 201, description: 'The wallet address has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    return this.walletAddressService.create(createWalletAddressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all wallet addresses with user details' })
  @ApiResponse({ status: 200, description: 'Return all wallet addresses with user details.' })
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a wallet address by ID with user details' })
  @ApiResponse({ status: 200, description: 'Return a wallet address by ID with user details.' })
  @ApiResponse({ status: 404, description: 'Wallet address not found' })
  findOne(@Param('id') id: string) {
    return this.walletAddressService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a wallet address by ID with user details' })
  @ApiResponse({ status: 200, description: 'The wallet address has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Wallet address not found' })
  update(@Param('id') id: string, @Body() updateWalletAddressDto: UpdateWalletAddressDto) {
    return this.walletAddressService.update(+id, updateWalletAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a wallet address by ID with user details' })
  @ApiResponse({ status: 200, description: 'The wallet address has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Wallet address not found' })
  remove(@Param('id') id: string) {
    return this.walletAddressService.remove(+id);
  }
}
