import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Url } from './entities/url.entity';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Url')
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get()
  @ApiOperation({ summary: 'Endpoint para listar todas as URLs cadastradas' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista com JSONs de todas URLs cadastradas', 
    type: Url,
    isArray: true 
  })
  findAll() {
    return this.urlService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Endpoint para buscar URL por id' })
  @ApiResponse({ 
    status: 200, 
    description: 'JSON com informações da URL encontrada', 
    type: Url 
  })
  findOne(@Param('id') id: string) {
    return this.urlService.findOne(+id);
  }

  @ApiOperation({ summary: 'Endpoint para atualizar URL por id' })
  @ApiResponse({ 
    status: 200, 
    description: 'JSON com informações da URL atualizada', 
    type: Url 
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUrlDto: UpdateUrlDto) {
    return this.urlService.update(+id, updateUrlDto);
  }

  @ApiOperation({ summary: 'Endpoint para deletar URL por id' })
  @ApiResponse({ 
    status: 200, 
    description: 'Ok', 
    type: Url 
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlService.remove(+id);
  }
}
