import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { BoardEntity } from "../entities/board.entity";

@Injectable()
export class BoardService {
    constructor(@InjectRepository(BoardEntity) private boardRepository: Repository<BoardEntity>) {}

    async create(board: BoardEntity): Promise<BoardEntity> {
        const newBoard = this.boardRepository.create(board);
        return await this.boardRepository.save(newBoard);
    }

    async findAll(): Promise<BoardEntity[]> {
        return this.boardRepository.find();
    }

    async findOne(id: number): Promise<BoardEntity> {
        const entity = await this.boardRepository.findOne({
            where: { id },
        })

        if(!entity) throw new NotFoundException(`Could not find board with id ${id}`);

        return entity;
    }

    async update(id: number, board: BoardEntity): Promise<number> {
        await this.boardRepository.update(id, board);
        return id;
    }

    async remove(id: number): Promise<number> {
        await this.boardRepository.delete(id);
        return id;
    }
}
