import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MateriaListComponent } from './list/materia-list.component';
import { MateriaRoutingModule } from './materia-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MateriaService } from './materia.service';

@NgModule({
    declarations: [MateriaListComponent],
    imports: [
      CommonModule,
      SharedModule,
      MateriaRoutingModule
    ],
    providers: [MateriaService],
  })
  export class MateriaModule {}