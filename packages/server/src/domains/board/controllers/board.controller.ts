import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"

import { BoardDto } from "../dto/board.dto";
import { BoardService } from "../services/board.service";
import { BoardEntity } from "../entities/board.entity";

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {};

    @Post()
    async create(@Body() board: BoardDto): Promise<BoardEntity> {
        console.log(board);
        return await this.boardService.create(board);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() board: BoardEntity): Promise<BoardEntity> {
        return this.boardService.update(+id, board);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.boardService.remove(+id);
    }

    @Get()
    async findAll(): Promise<BoardEntity[]> {
        return this.boardService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<BoardEntity> {
        return this.boardService.findOne(+id);
    }
}
