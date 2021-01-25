import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { AdminComponent } from './admin/admin.component';
import { SummaryComponent } from './attendance/summary/summary.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AccountComponent } from './account/account.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { UploadComponent } from './attendance/upload/upload.component';
import { DetailsComponent } from './attendance/details/details.component';
import { ProfileComponent } from './attendance/profile/profile.component';
import { AuthService } from './service/auth.service';
import { AuthGuardsService } from './auth-guards.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EmergencyComponent } from './emergency/emergency.component';
import { HelpComponent } from './help/help.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReportComponent } from './report/report.component';
import { DownloadComponent } from './report/download/download.component';
import {MatDialogModule} from '@angular/material/dialog';
import { datepopup } from './report/download/download.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import { NetworkComponent } from './settings/network/network.component';
import { WificonnectionComponent } from './settings/network/wificonnection/wificonnection.component';
import { IpComponent } from './settings/network/ip/ip.component';
import { FtpComponent } from './settings/network/ftp/ftp.component';
import { DeviceComponent } from './settings/device/device.component';
import { SecqurinComponent } from './settings/device/secqurin/secqurin.component';
import { AccessComponent } from './settings/device/access/access.component';
import { addsecqurin } from './settings/device/secqurin/secqurin.component';
import { addaccess } from './settings/device/access/access.component';
import { ConfigurationComponent } from './settings/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AttendanceComponent,
    WhoAmIComponent,
    AdminComponent,
    SummaryComponent,
    MenuComponent,
    LoginComponent,
    AccountComponent,
    UploadComponent,
    DetailsComponent,
    ProfileComponent,
    EmergencyComponent,
    HelpComponent,
    ReportComponent,
    DownloadComponent,
    datepopup,
    NetworkComponent,
    WificonnectionComponent,
    IpComponent,
    FtpComponent,
    DeviceComponent,
    SecqurinComponent,
    AccessComponent,
    addsecqurin,
    addaccess,
    ConfigurationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CdkTableModule,
    MatTableModule,
    FlexLayoutModule,
    CommonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatDatepickerModule,MatSortModule,
    MatButtonToggleModule
  ],
  entryComponents: [datepopup,addsecqurin, addaccess],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatDialogModule, MatNativeDateModule],
  providers: [AuthService, AuthGuardsService, { provide: LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
