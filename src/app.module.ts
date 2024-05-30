import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, WalletAddressModule],
  providers: [PrismaService],
})
export class AppModule {}
