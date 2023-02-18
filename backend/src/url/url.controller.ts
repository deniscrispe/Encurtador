import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Url } from './entities/url.entity';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiExtraModels, ApiBody, getSchemaPath } from '@nestjs/swagger';

@ApiTags('Url')
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  @ApiOperation({ summary: 'Endpoint para buscar URL pelo código' })
  @ApiResponse({ 
    status: 201, 
    description: 'URL criada com sucesso',
    schema: { $ref: getSchemaPath(Url) }, 
  })
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get()
  @ApiOperation({ summary: 'Endpoint para listar todas as URLs cadastradas' })
  @ApiResponse({ 
    status: 200, 
    description: 'OK', 
    schema: { $ref: getSchemaPath(Url) },
    isArray: true 
  })
  findAll() {
    return this.urlService.findAll();
  }

  @Get(':code')
  @ApiOperation({ summary: 'Endpoint para buscar URL pelo código' })
  @ApiResponse({ 
    status: 200, 
    description: 'OK', 
    type: Url 
  })
  findOne(@Param('code') code: string) {
    return this.urlService.findOne(code);
  }

  @ApiOperation({ summary: 'Endpoint para atualizar URL pelo código' })
  @ApiResponse({ 
    status: 200, 
    description: 'OK', 
    type: Url 
  })
  @Patch(':code')
  update(@Param('code') code: string, @Body() updateUrlDto: UpdateUrlDto) {
    return this.urlService.update(code, updateUrlDto);
  }

  @ApiOperation({ summary: 'Endpoint para deletar URL pelo código' })
  @ApiResponse({ 
    status: 200, 
    description: 'Ok', 
    type: Url 
  })
  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.urlService.remove(code);
  }
}
