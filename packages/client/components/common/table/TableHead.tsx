import styled from '@emotion/styled';
import { TableTr, TableTh } from "@/components/common/table";

interface TableHeadProps {
    columns: string[];
}

export const TableHead = ({ columns }: TableHeadProps) => {
    return (
        <S.TableHeadContainer>
            <TableTr>
                { columns &&
                    columns.map(column => (
                        <TableTh key={ column }>
                            { column }
                        </TableTh>
                    ))
                }
            </TableTr>
        </S.TableHeadContainer>
    )
};

namespace S {
    export const TableHeadContainer = styled.thead``
}
