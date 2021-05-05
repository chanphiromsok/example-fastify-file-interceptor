import { ApiProperty } from '@nestjs/swagger';

// you can add validate using class-validator
export class FieldsFileDto {
  @ApiProperty({ type: Array, format: 'binary' })
  photo_url: any;

  @ApiProperty({ type: Array, format: 'binary' })
  images: any;

  @ApiProperty({ example: 'Rom' })
  username: string;

  @ApiProperty({ example: '12345678' })
  password: string;
}
