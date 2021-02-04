import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AtividadeListComponent } from "./list/atividade-list.component";
import { AtividadeRoutingModule } from "./atividade-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AtividadeService } from "./atividade.service";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [AtividadeListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AtividadeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [AtividadeService],
})
export class AtividadeModule {}
