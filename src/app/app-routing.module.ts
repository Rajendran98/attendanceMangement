import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {AttendanceReportComponent} from './attendance/report/report.component';
import {SettingsComponent} from './settings/settings.component';
import {WhoAmIComponent} from './who-am-i/who-am-i.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { UploadComponent } from './attendance/upload/upload.component';
import { DetailsComponent } from './attendance/details/details.component';
import { ProfileComponent } from './attendance/profile/profile.component';
import { AuthGuardsService } from './auth-guards.service';
import { EmergencyComponent } from './emergency/emergency.component';
import { HelpComponent } from './help/help.component';
import { ReportComponent } from './report/report.component';
import { DownloadComponent } from './report/download/download.component';
import { SummaryComponent } from './attendance/summary/summary.component';
import { NetworkComponent } from './settings/network/network.component';
import { WificonnectionComponent } from './settings/network/wificonnection/wificonnection.component';
import { IpComponent } from './settings/network/ip/ip.component';
import { FtpComponent } from './settings/network/ftp/ftp.component';
import { DeviceComponent } from './settings/device/device.component';
import { SecqurinComponent } from './settings/device/secqurin/secqurin.component';
import { AccessComponent } from './settings/device/access/access.component';
import { ConfigurationComponent } from './settings/configuration/configuration.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'summary', pathMatch: 'full'
  },
  {
    path: 'summary', component: SummaryComponent
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'account', component: AccountComponent/*, canActivate: [ AuthGuardsService]*/
  },
  {
    path: 'attendance', component: AttendanceComponent
  },
  {
    path: 'summary', component: AttendanceReportComponent
  },
  {
    path: 'attendance/upload', component: UploadComponent
  },
  {
    path: 'attendance/details', component: DetailsComponent
  },
  {
    path: 'attendance/profile', component: ProfileComponent
  },
  {
    path: 'report', component: ReportComponent
  },
  {
    path: 'report/download', component: DownloadComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'settings/network', component:  NetworkComponent 
  },
  {
    path: 'settings/device', component:  DeviceComponent
  },
  {
    path: 'settings/configuration', component: ConfigurationComponent
  },
  {
    path: 'settings/network/wificonnection', component:  WificonnectionComponent
  },
  {
    path: 'settings/network/ip', component: IpComponent 
  },
  {
    path: 'settings/network/ftp', component: FtpComponent 
  },
  {
    path: 'settings/device/secqurin', component:  SecqurinComponent
  },
  {
    path: 'settings/device/access', component:  AccessComponent
  },
  {
    path: 'emergency', component: EmergencyComponent
  },
  {
    path: 'whoami', component: WhoAmIComponent
  },
  {
    path: 'help', component: HelpComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
