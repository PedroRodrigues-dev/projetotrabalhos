import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtividadeListComponent } from './list/atividade-list.component';
import { AtividadeRoutingModule } from './atividade-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AtividadeService } from './atividade.service';

@NgModule({
    declarations: [AtividadeListComponent],
    imports: [
      CommonModule,
      SharedModule,
      AtividadeRoutingModule,
    ],
    providers: [AtividadeService],
  })
  export class AtividadeModule {}