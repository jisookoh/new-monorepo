import { BoardDto } from "server/src/domains/board/dto/board.dto";
import { get, post, remove, put } from "@/api/BaseApi";
import { BoardDataType } from "@/constants/board";

export const postBoard = async (params: BoardDto) => {
    return ( await post('/board', params) ).data;
}

export const getBoards = async () => {
    return ( await get<BoardDataType[]>('/board') ).data;
}

export const getBoard = async (params: string) => {
    return ( await get<BoardDataType>(`/board/${params}`) ).data;
}

export const putBoard = async (params: BoardDto) => {
    return ( await put('/board', params) ).data;
}

// todo: remove.dto 생성 필요
// export const removeBoard = async (params: BoardDto) => {
//     return ( await remove('/board', params) ).data;
// }
