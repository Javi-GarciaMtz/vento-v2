import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { MotorcycleNewComponent } from "./components/motorcycle-new/motorcycle-new.component";
import { MotorcycleUpdateComponent } from "./components/motorcycle-update/motorcycle-update.component";
import { MotorcyclesManageComponent } from "./components/motorcycles-manage/motorcycles-manage.component";

// Rutas definidas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add-motorcycle', component: MotorcycleNewComponent},
    {path: 'update-motorcycle', component: MotorcycleUpdateComponent},
    {path: 'manage-motorcycle', component: MotorcyclesManageComponent}
];

// Exportar la configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
