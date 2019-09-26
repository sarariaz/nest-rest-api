import { Controller, Get , Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemDto} from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'Get all items'
    }

@Get(':id')
findOne(@Param('id') id : string){
    return `Item : ${id}`
}


@Post()
create(@Body() createitemDto : CreateItemDto): string{
    return `  Name : ${createitemDto.name}`

}

@Delete(':id')
delete(@Param('id') id : string){
    return `item ${id} deleted`
}


}
