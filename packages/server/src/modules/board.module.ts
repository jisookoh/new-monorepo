import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardService } from "../services/board.service";
import { BoardController } from "../controllers/board.controller";
import { BoardEntity } from "../entities/board.entity";

@Module({
    imports: [TypeOrmModule.forFeature([BoardEntity])],
    controllers: [BoardController],
    providers: [BoardService],
})

export class BoardModule {}

