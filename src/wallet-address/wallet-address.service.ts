import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(private prisma: PrismaService) {}

  create(createWalletAddressDto: CreateWalletAddressDto) {
    return this.prisma.walletAddress.create({
      data: createWalletAddressDto,
    });
  }

  findAll() {
    return this.prisma.walletAddress.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.walletAddress.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: number, updateWalletAddressDto: UpdateWalletAddressDto) {
    return this.prisma.walletAddress.update({
      where: { id },
      data: updateWalletAddressDto,
      include: {
        user: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.walletAddress.delete({
      where: { id },
      include: {
        user: true,
      },
    });
  }
}
