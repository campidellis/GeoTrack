import { IsString } from "class-validator";

export class CreateDeviceDto {
    @IsString()
    readonly nome: string;
}
