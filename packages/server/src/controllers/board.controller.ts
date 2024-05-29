import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BoardService } from "../services/board.service";

import { BoardEntity } from "../entities/board.entity";

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {};

    @Post()
    async create(@Body() board: BoardEntity): Promise<BoardEntity> {
        return await this.boardService.create(board);
    }

    @Get()
    async findAll(): Promise<BoardEntity[]> {
        return this.boardService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<BoardEntity> {
        return this.boardService.findOne(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() board: BoardEntity): Promise<number> {
        return this.boardService.update(+id, board);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<number> {
        return this.boardService.remove(+id);
    }

}
