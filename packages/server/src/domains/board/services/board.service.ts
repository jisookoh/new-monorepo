import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { BoardEntity } from "../entities/board.entity";
import { BoardDto } from "../dto/board.dto";

@Injectable()
export class BoardService {
    constructor(@InjectRepository(BoardEntity) private boardRepository: Repository<BoardEntity>) {}

    async create(board: BoardDto): Promise<BoardEntity> {
        const newBoard = this.boardRepository.create(board);
        return await this.boardRepository.save(newBoard);
    }

    async update(id: number, board: BoardEntity): Promise<BoardEntity> {
        const modBoard = await this.findOne(id);
        Object.assign(modBoard, board);
        return await this.boardRepository.save(modBoard);
    }

    async remove(id: number): Promise<void> {
        const result = await this.boardRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Board with id ${id} not found`);
        }
    }

    async findAll(): Promise<BoardEntity[]> {
        return this.boardRepository.find({
            order: {
                id: 'DESC'
            },
        });
    }

    async findOne(id: number): Promise<BoardEntity> {
        const entity = await this.boardRepository.findOne({
            where: { id },
        })

        if(!entity) throw new NotFoundException(`Could not find board with id ${id}`);

        return entity;
    }
}
