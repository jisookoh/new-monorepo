import { BoardDto } from "server/src/domains/board/dto/board.dto";
import { get, post, remove, put } from "@/api/BaseApi";

export const postBoard = async (params: BoardDto) => {
    return ( await post('/board', params) ).data;
}

export const getBoard = async () => {
    return ( await get('/board') ).data;
}

export const putBoard = async (params: BoardDto) => {
    return ( await put('/board', params) ).data;
}

// todo: remove.dto 생성 필요
// export const removeBoard = async (params: BoardDto) => {
//     return ( await remove('/board', params) ).data;
// }
