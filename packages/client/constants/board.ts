export const BOARD_COLUMNS: string[] = ['번호', '제목', '등록일'];

export interface BoardDataType {
    id: number,
    title: string,
    contents: string,
    reg_date: string,
    mod_date?: string,
    remove_data?: null
}

export interface CreateBoardDataType {
    title: string,
    contents: string,
}
