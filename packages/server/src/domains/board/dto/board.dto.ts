import { IsString, IsNotEmpty } from 'class-validator';
import { Expose } from "class-transformer";

// @Expose(): 데이터의 보안성과 무결성을 유지하면서 필요한 속성만 선택적으로 노출

export class BoardDto {
    @Expose()
    @IsString()
    @IsNotEmpty()
    title!: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    content!: string;
}
