import { BoardDto } from "server/src/domains/board/dto/board.dto";
import { useMutation, UseMutationOptions, useQuery } from "@tanstack/react-query";
import { useQueryKeys } from "@/constants/queryKeys";
import { getBoards, postBoard, putBoard, getBoard } from "@/api/BoardApi";
import { AxiosError } from "axios";

export const useCreateBoard = (options?: UseMutationOptions<unknown, AxiosError, BoardDto, unknown>) =>
    useMutation({
        mutationFn: (params: BoardDto) => postBoard(params),
        ...options,
    });

export const useGetBoards = () =>
    useQuery({
        queryKey: useQueryKeys.GetBoards,
        queryFn: () => getBoards(),
    });

export const useGetBoard = (id: string) => {
    return useQuery({
        queryKey: useQueryKeys.GetBoard,
        queryFn: () => getBoard(id),
    })
}

export const useUpdateBoard = () =>
    useMutation({
        mutationFn: (params: BoardDto) => putBoard(params),
    })
