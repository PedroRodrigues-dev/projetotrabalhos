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
import { AtividadeFormComponent } from "./form/atividade-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";

@NgModule({
  declarations: [AtividadeListComponent, AtividadeFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AtividadeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [AtividadeService],
})
export class AtividadeModule {}
