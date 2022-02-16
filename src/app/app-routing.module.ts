import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiccalendarComponent } from './academics/academiccalendar/academiccalendar.component';
import { AcademicprogrammeComponent } from './academics/academicprogramme/academicprogramme.component';
import { AcademicsComponent } from './academics/academics.component';
import { CurriculaComponent } from './academics/curricula/curricula.component';
import { TimetableComponent } from './academics/timetable/timetable.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CareerComponent } from './career/career.component';
import { ChemicalComponent } from './departments/chemical/chemical.component';
import { CivilComponent } from './departments/civil/civil.component';
import { CseComponent } from './departments/cse/cse.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EceComponent } from './departments/ece/ece.component';
import { EeeComponent } from './departments/eee/eee.component';
import { MechanicalComponent } from './departments/mechanical/mechanical.component';
import { AnthapragnaComponent } from './events/anthapragna/anthapragna.component';
import { ConvocationComponent } from './events/convocation/convocation.component';
import { EventsComponent } from './events/events.component';
import { FestivalComponent } from './events/festival/festival.component';
import { TechfestComponent } from './events/techfest/techfest.component';
import { ExamComponent } from './examination/exam/exam.component';
import { ExaminationComponent } from './examination/examination.component';
import { RemedialComponent } from './examination/remedial/remedial.component';
import { ResultssemComponent } from './examination/resultssem/resultssem.component';
import { BankComponent } from './facilities/bank/bank.component';
import { CentrallibraryComponent } from './facilities/centrallibrary/centrallibrary.component';
import { ConferencehallComponent } from './facilities/conferencehall/conferencehall.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HospitalComponent } from './facilities/hospital/hospital.component';
import { HostelComponent } from './facilities/hostel/hostel.component';
import { GuidenceComponent } from './guidence/guidence.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PgComponent } from './pg/pg.component';
import { CrtComponent } from './placements/crt/crt.component';
import { DriveComponent } from './placements/drive/drive.component';
import { InternshipComponent } from './placements/internship/internship.component';
import { PlacementsComponent } from './placements/placements.component';
import { UpcomingComponent } from './placements/upcoming/upcoming.component';
import { PostofficeComponent } from './postoffice/postoffice.component';
import { RaggingComponent } from './ragging/ragging.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ApplyconvocationComponent } from './students/applyconvocation/applyconvocation.component';
import { CertificateComponent } from './students/certificate/certificate.component';
import { EprofileComponent } from './students/eprofile/eprofile.component';
import { FeeComponent } from './students/fee/fee.component';
import { ResultsComponent } from './students/results/results.component';
import { StudentsComponent } from './students/students.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'admissions', component:AdmissionsComponent},
  {path:'academics', component:AcademicsComponent, children:[
    {path:'academicprogramme', component:AcademicprogrammeComponent},
    {path:'academiccalendar', component:AcademiccalendarComponent},
    {path:'curricula', component:CurriculaComponent},
    {path:'timetable', component:TimetableComponent},
  ]},
  {path:'departments', component:DepartmentsComponent, children:[
    {path:'cse', component:CseComponent},
    {path:'ece', component:EceComponent},
    {path:'eee', component:EeeComponent},
    {path:'civil', component:CivilComponent},
    {path:'chemical', component:ChemicalComponent},
    {path:'mechanical', component:MechanicalComponent},
  ]},
  {path:'facilities', component:FacilitiesComponent, children:[
    {path:'bank', component:BankComponent},
    {path:'centrallibrary', component:CentrallibraryComponent},
    {path:'conferencehall', component:ConferencehallComponent},
    {path:'hospital', component:HospitalComponent},
    {path:'hostel', component:HostelComponent},
  ]},
  {path:'students', component:StudentsComponent, children:[
    {path:'applyconvocation', component:ApplyconvocationComponent},
    {path:'certificate', component:CertificateComponent},
    {path:'eprofile', component:EprofileComponent},
    {path:'fee', component:FeeComponent},
    {path:'results', component:ResultsComponent},
  ]},
  {path:'examination', component:ExaminationComponent, children:[
    {path:'exam', component:ExamComponent},
    {path:'remedial', component:RemedialComponent},
    {path:'resultssem', component:ResultssemComponent},
  ]},
  {path:'placements', component:PlacementsComponent, children:[
    {path:'crt', component:CrtComponent},
    {path:'drive', component:DriveComponent},
    {path:'internship', component:InternshipComponent},
    {path:'upcoming', component:UpcomingComponent},
  ]},
  {path:'events', component:EventsComponent, children:[
    {path:'anthapragna', component:AnthapragnaComponent},
    {path:'convocation', component:ConvocationComponent},
    {path:'festival', component:FestivalComponent},
    {path:'techfest', component:TechfestComponent},
  ]},
  {path:'career', component:CareerComponent},
  {path:'pg', component:PgComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'women', component:WomenComponent},
  {path:'ragging', component:RaggingComponent},
  {path:'guidence', component:GuidenceComponent},
  {path:'postoffice', component:PostofficeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
