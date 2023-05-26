import { Injectable, Inject } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

import { Url } from './entities/url.entity';

@Injectable()
export class UrlService {
  constructor(
    @Inject('URL_REPOSITORY')
    private urlRepository: typeof Url
  ) {}

  create(createUrlDto: CreateUrlDto) {
    return this.urlRepository.create({
      url: createUrlDto.url,
      code: this.generateCode()
    });
  }

  async findAll() {
    return this.urlRepository.findAll<Url>();
  }

  findOne(code: string) {
    return this.urlRepository.findOne({ where: { code: code } })
  }

  update(code: string, updateUrlDto: UpdateUrlDto) {
    return this.urlRepository.update( updateUrlDto, {where: { code: code }})
  }

  remove(code: string) {
    return this.urlRepository.destroy({ where: { code: code } });
  }

  generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
