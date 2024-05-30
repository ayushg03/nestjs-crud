import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWalletAddressDto) {
    return this.prisma.walletAddress.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.walletAddress.findMany();
  }

  async findOne(id: number) {
    return this.prisma.walletAddress.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateWalletAddressDto) {
    return this.prisma.walletAddress.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.walletAddress.delete({
      where: { id },
    });
  }
}
