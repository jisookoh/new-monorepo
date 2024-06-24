import { BoardDto } from "server/src/domains/board/dto/board.dto";
import {useMutation, UseMutationOptions, useQuery} from "@tanstack/react-query";
import { useQueryKeys } from "@/constants/queryKeys";
import { getBoard, postBoard, putBoard } from "@/api/BoardApi";
import {AxiosError} from "axios";

export const useCreateBoard = (options?: UseMutationOptions<unknown, AxiosError, BoardDto, unknown>) =>
    useMutation({
        mutationFn: (params: BoardDto) => postBoard(params),
        ...options,
    });

export const useGetBoard = () =>
    useQuery({
        queryKey: useQueryKeys.GetBoard,
        queryFn: () => getBoard(),
    });

export const useUpdateBoard = () =>
    useMutation({
        mutationFn: (params: BoardDto) => putBoard(params),
    })
