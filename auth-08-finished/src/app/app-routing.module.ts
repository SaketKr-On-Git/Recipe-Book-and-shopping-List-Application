import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path:'recipes',
  loadChildren:()=>import('./recipes/recipes.module').then(m=>m.RecipesModule)},
  {path:'shopping-list',loadChildren:()=>import('./shopping-list/shopping-list.module').then(s=>s.ShoppingListModule)},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(a=>a.AuthModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],//forRot is used only once ..in all feature modules forChild is used
  exports: [RouterModule]
})
export class AppRoutingModule {}
