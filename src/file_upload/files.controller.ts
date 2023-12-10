import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res, HttpException, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FileService } from './files.service';
import { imageFileFilter } from './file.util';


@Controller('upload')
export class FilesController {
  constructor(private readonly fileService: FileService) {}

  @Get('/:image')
  async getFile(@Param('image') image: string, @Res() res: Response) {
    await this.fileService.downloadFile(image, res);
  }

  @Post()
  @UseInterceptors(FilesInterceptor('file', 3,{
    fileFilter:imageFileFilter
  }))
  async create(@UploadedFiles() file: Express.Multer.File) {
 
   const image = await this.fileService.uploadFile(file);
    return { image };
  }


}
// {
//   fileFilter:imageFileFilter,
// }