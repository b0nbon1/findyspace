import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Space } from './entities/space.entity';
import { FilesService } from 'src/files/files.service';
import { AddressService } from 'src/address/address.service';

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(Space)
    private spacesRepository: Repository<Space>,
    private fileService: FilesService,
    private addressService: AddressService,
  ) {}
  async create(createSpaceDto: CreateSpaceDto) {
    const space = this.spacesRepository.create({
      ...createSpaceDto,
      images: [],
    });
    await space.save();
    return space;
  }

  async findAll(
    options: IPaginationOptions,
    relations: string[] = [],
    published = true,
  ): Promise<Pagination<Space>> {
    return paginate<Space>(this.spacesRepository, options, {
      relations,
      where: { ...(published && { publish: true }) },
    });
  }

  async findOne(id: string) {
    return this.spacesRepository.findOne(id, {
      relations: ['images'],
    });
  }

  async update(id: string, updateSpaceDto: UpdateSpaceDto) {
    let dataUpdate = {};
    const space = await this.spacesRepository.findOne(id, {
      relations: ['images'],
    });
    const isUpdateImages = !!updateSpaceDto.images?.length;
    if (isUpdateImages) {
      space.images.forEach(({ id }) => {
        updateSpaceDto.images.push(id);
      });
      const images = [];
      await updateSpaceDto.images?.forEach(async (id) => {
        const image = await this.fileService.findOne(id);
        images.push(image);
      });

      dataUpdate = {
        ...space,
        ...updateSpaceDto,
        images,
        id,
      };
    } else {
      dataUpdate = {
        ...space,
        ...updateSpaceDto,
        id,
      };
    }
    return this.spacesRepository.save(dataUpdate);
  }

  async remove(id: string) {
    return this.spacesRepository.delete(id);
  }
}
