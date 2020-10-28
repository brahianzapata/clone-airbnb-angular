import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { BookingComponent } from './booking/booking.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { OnlyLoggedInUsersGuardGuard } from './shared/guards/only-logged-in-users-guard.guard';
import { DetailModule } from './detail/detail.module';
import { SinginModule } from './singin/singin.module';
import { SingupModule } from './singup/singup.module';

export const routes: Routes = [
    { 
      path: '',   
      redirectTo: '/home', 
      pathMatch: 'full' 
    }, // redirect to `first-component`
    {
      path:'home',
      loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
      canActivate: [OnlyLoggedInUsersGuardGuard]
    },
    {
      path:'detail/:id',
      loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule)
    },
    {
      path:'search/:text',
      component: SearchComponent
    },
    {
      path:'booking/:id',
      loadChildren: () => import('./booking/booking.module').then(mod => mod.BookingModule),
      canActivate: [OnlyLoggedInUsersGuardGuard]
    },
    {
      path:'singin',
      loadChildren: () => import('./singin/singin.module').then(mod => mod.SinginModule)

    },
    {
      path:'singup',
      loadChildren: () => import('./singup/singup.module').then(mod => mod.SingupModule)
    },
    { 
      path: '404', 
      loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
    },  // Wildcard route for a 404 page
    { 
      path: '**', 
      redirectTo: '/404'
    }
  ];