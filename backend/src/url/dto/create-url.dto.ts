import { ApiProperty } from '@nestjs/swagger';

export class CreateUrlDto {
    @ApiProperty()
    url: string;
}
