import { Controller, Get , Post ,Put , Delete, Body ,Param } from '@nestjs/common';
 class ItemDto {
     qty:number;
     name:string;
     email:string;
     password:string;
 }
@Controller('items')
export class ItemsController {
    @Get(':id')
    findAll(@Param() param):string{
        return `${param.id}`;
    }
    @Get()
    findOne():string{
        return 'ss';
    }

    @Post()
    create(@Body() createItemDto:ItemDto):string{
        return createItemDto.email;
    }
    @Delete(':id')
    delete(@Param('id') id):string{
        return `id ${id} deleted`;
    }
    
    @Put(':id')
    updated(@Body() updateItem:ItemDto,@Param('id') id):string{
        return `id ${id} updated with Name  ${updateItem.name}`;
    }
    
}
