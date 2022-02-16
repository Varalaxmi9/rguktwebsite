import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademicsComponent } from './academics/academics.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { StudentsComponent } from './students/students.component';
import { ExaminationComponent } from './examination/examination.component';
import { PlacementsComponent } from './placements/placements.component';
import { EventsComponent } from './events/events.component';
import { CareerComponent } from './career/career.component';
import { AcademicprogrammeComponent } from './academics/academicprogramme/academicprogramme.component';
import { CurriculaComponent } from './academics/curricula/curricula.component';
import { AcademiccalendarComponent } from './academics/academiccalendar/academiccalendar.component';
import { TimetableComponent } from './academics/timetable/timetable.component';
import { CseComponent } from './departments/cse/cse.component';
import { EceComponent } from './departments/ece/ece.component';
import { EeeComponent } from './departments/eee/eee.component';
import { CivilComponent } from './departments/civil/civil.component';
import { ChemicalComponent } from './departments/chemical/chemical.component';
import { MechanicalComponent } from './departments/mechanical/mechanical.component';
import { HostelComponent } from './facilities/hostel/hostel.component';
import { ConferencehallComponent } from './facilities/conferencehall/conferencehall.component';
import { CentrallibraryComponent } from './facilities/centrallibrary/centrallibrary.component';
import { HospitalComponent } from './facilities/hospital/hospital.component';
import { BankComponent } from './facilities/bank/bank.component';
import { EprofileComponent } from './students/eprofile/eprofile.component';
import { ResultsComponent } from './students/results/results.component';
import { ApplyconvocationComponent } from './students/applyconvocation/applyconvocation.component';
import { FeeComponent } from './students/fee/fee.component';
import { CertificateComponent } from './students/certificate/certificate.component';
import { ExamComponent } from './examination/exam/exam.component';
import { ResultssemComponent } from './examination/resultssem/resultssem.component';
import { RemedialComponent } from './examination/remedial/remedial.component';
import { InternshipComponent } from './placements/internship/internship.component';
import { DriveComponent } from './placements/drive/drive.component';
import { UpcomingComponent } from './placements/upcoming/upcoming.component';
import { CrtComponent } from './placements/crt/crt.component';
import { TechfestComponent } from './events/techfest/techfest.component';
import { AnthapragnaComponent } from './events/anthapragna/anthapragna.component';
import { FestivalComponent } from './events/festival/festival.component';
import { ConvocationComponent } from './events/convocation/convocation.component';
import { WomenComponent } from './women/women.component';
import { GuidenceComponent } from './guidence/guidence.component';
import { RaggingComponent } from './ragging/ragging.component';
import { PostofficeComponent } from './postoffice/postoffice.component';
import { PgComponent } from './pg/pg.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademicsComponent,
    DepartmentsComponent,
    AdmissionsComponent,
    PagenotfoundComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    FacilitiesComponent,
    StudentsComponent,
    ExaminationComponent,
    PlacementsComponent,
    EventsComponent,
    CareerComponent,
    AcademicprogrammeComponent,
    CurriculaComponent,
    AcademiccalendarComponent,
    TimetableComponent,
    CseComponent,
    EceComponent,
    EeeComponent,
    CivilComponent,
    ChemicalComponent,
    MechanicalComponent,
    HostelComponent,
    ConferencehallComponent,
    CentrallibraryComponent,
    HospitalComponent,
    BankComponent,
    EprofileComponent,
    ResultsComponent,
    ApplyconvocationComponent,
    FeeComponent,
    CertificateComponent,
    ExamComponent,
    ResultssemComponent,
    RemedialComponent,
    InternshipComponent,
    DriveComponent,
    UpcomingComponent,
    CrtComponent,
    TechfestComponent,
    AnthapragnaComponent,
    FestivalComponent,
    ConvocationComponent,
    WomenComponent,
    GuidenceComponent,
    RaggingComponent,
    PostofficeComponent,
    PgComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
