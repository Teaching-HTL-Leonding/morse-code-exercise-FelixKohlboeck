import { Routes } from '@angular/router';
import {EncodingComponent} from "./encoding/encoding.component";
import {DecodingComponent} from "./decoding/decoding.component";

export const routes: Routes = [
  {path: 'decoding', component: DecodingComponent },
  {path: 'encoding', component: EncodingComponent },
  {path: '', redirectTo: '/decoding', pathMatch: 'full'}
];
