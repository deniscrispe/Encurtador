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
    return 'This action adds a new url';
  }

  async findAll() {
    return this.urlRepository.findAll<Url>();
  }

  findOne(id: number) {
    return `This action returns a #${id} url`;
  }

  update(id: number, updateUrlDto: UpdateUrlDto) {
    return `This action updates a #${id} url`;
  }

  remove(id: number) {
    return `This action removes a #${id} url`;
  }

  generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
