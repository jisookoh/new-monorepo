import { BoardDto } from "server/src/domains/board/dto/board.dto";
import {useMutation, useQuery} from "@tanstack/react-query";
import { useQueryKeys } from "@/constants/queryKeys";
import { getBoard, postBoard, putBoard } from "@/api/BoardApi";

export const useCreateBoard = () =>
    useMutation({
        mutationFn: (params: BoardDto) => postBoard(params),
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
