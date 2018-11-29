import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsIntegrationsComponent } from './settings-integrations/settings-integrations.component';
import { SettingsIntegrationDetailsComponent } from './settings-integration-details/settings-integration-details.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'integrations' },
      { path: 'integrations', component: SettingsIntegrationsComponent },
      { path: 'integrations/:id', component: SettingsIntegrationDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }