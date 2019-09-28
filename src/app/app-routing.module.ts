import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotComponent } from './plot/plot.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { BlogComponent } from './blog/blog.component';
import { OwnerComponent } from './plot/plot-detail/owners/owner.component';
import { DocsComponent } from './plot/plot-detail/docs/docs.component';
import {StatementComponent} from './plot/plot-detail/statement/statement.component';
import { DocumentsComponent } from './plot/plot-detail/documents/documents.component';

import { LoginComponent } from './login/login.component';
import { ClaimsComponent } from './claims/claims.component';
import { ConversationComponent } from './conversation/conversation.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'conversations', component: ConversationComponent},
  {path: 'select', component: SelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
