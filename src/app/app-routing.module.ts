import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
 //   redirectTo: 'folder/Inbox',
  redirectTo: 'login',
  //redirectTo: 'result',
  //redirectTo: 'complaint',
  
    //redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lecture',
    loadChildren: () => import('./lecture/lecture.module').then( m => m.LecturePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.module').then( m => m.FeesPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then( m => m.DownloadPageModule)
  },
  {
    path: 'lecturedetail/:id',
    loadChildren: () => import('./lecturedetail/lecturedetail.module').then( m => m.LecturedetailPageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./notice/notice.module').then( m => m.NoticePageModule)
  },
  {
    path: 'otpverify',
    loadChildren: () => import('./otpverify/otpverify.module').then( m => m.OtpverifyPageModule)
  },
  {
    path: 'circular',
    loadChildren: () => import('./circular/circular.module').then( m => m.CircularPageModule)
  },
  {
    path: 'homework',
    loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: 'studycontent',
    loadChildren: () => import('./studycontent/studycontent.module').then( m => m.StudycontentPageModule)
  },
  {
    path: 'healthcard',
    loadChildren: () => import('./healthcard/healthcard.module').then( m => m.HealthcardPageModule)
  },
  {
    path: 'healthcarddetail',
    loadChildren: () => import('./healthcarddetail/healthcarddetail.module').then( m => m.HealthcarddetailPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'contentdetail/:id',
    loadChildren: () => import('./contentdetail/contentdetail.module').then( m => m.ContentdetailPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'healthmonthwise',
    loadChildren: () => import('./healthmonthwise/healthmonthwise.module').then( m => m.HealthmonthwisePageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'submithomework/:id/:id1/:id2',
    loadChildren: () => import('./submithomework/submithomework.module').then( m => m.SubmithomeworkPageModule)
  },
  {
    path: 'studycontentmodal',
    loadChildren: () => import('./modals/studycontentmodal/studycontentmodal.module').then( m => m.StudycontentmodalPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'leaveapplication',
    loadChildren: () => import('./leaveapplication/leaveapplication.module').then( m => m.LeaveapplicationPageModule)
  },
  {
    path: 'subjectalloted',
    loadChildren: () => import('./subjectalloted/subjectalloted.module').then( m => m.SubjectallotedPageModule)
  },
  {
    path: 'eventcal',
    loadChildren: () => import('./eventcal/eventcal.module').then( m => m.EventcalPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'vaccination',
    loadChildren: () => import('./vaccination/vaccination.module').then( m => m.VaccinationPageModule)
  },
  {
    path: 'docrequest',
    loadChildren: () => import('./docrequest/docrequest.module').then( m => m.DocrequestPageModule)
  },
  {
    path: 'connectus',
    loadChildren: () => import('./connectus/connectus.module').then( m => m.ConnectusPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'paymentconfirm',
    loadChildren: () => import('./paymentconfirm/paymentconfirm.module').then( m => m.PaymentconfirmPageModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import('./complaint/complaint.module').then( m => m.ComplaintPageModule)
  }
  ,
  {
    path: 'teacherhome',
    loadChildren: () => import('./teacherhome/teacherhome.module').then( m => m.TeacherhomePageModule)
  }
  ,
  {
    path: 'teacherfees',
    loadChildren: () => import('./teacherfees/teacherfees.module').then( m => m.TeacherfeesPageModule)
  }
  ,
  {
    path: 'teachcircular',
    loadChildren: () => import('./teachcircular/teachcircular.module').then( m => m.TeachcircularPageModule)
  }
  ,
  {
    path: 'teacheventcal',
    loadChildren: () => import('./teacheventcal/teacheventcal.module').then( m => m.TeacheventcalPageModule)
  }
  ,
  {
    path: 'teachconnectus',
    loadChildren: () => import('./teachconnectus/teachconnectus.module').then( m => m.TeachconnectusPageModule)
  }
  ,
  {
    path: 'teacherprofile',
    loadChildren: () => import('./teacherprofile/teacherprofile.module').then( m => m.TeacherprofilePageModule)
  }
  ,
  {
    path: 'teachermarks',
    loadChildren: () => import('./teachermarks/teachermarks.module').then( m => m.TeachermarksPageModule)
  }
  // ,
  // {
  //   path: 'teacherattendance',
  //   loadChildren: () => import('./teacherattendance/teacherattendance.module').then( m => m.TeacherattendancePageModule)
  // }path: 'teachstufees/:id/:id1',
  ,
  {
    path: 'teacherattendanc/:id/:id1',
    loadChildren: () => import('./teacherattendance/teacherattendance.module').then( m => m.TeacherattendancePageModule)
  }
  ,  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)//,
  }
  ,
  {
    path: 'normaluserform',
    loadChildren: () => import('./normaluserform/normaluserform.module').then( m => m.NormaluserformPageModule)//,
  }
  ,
  // {
  //   path: 'exam',
  //   loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule)//,
  // },
  // {
  //   path: 'exam/:id/:id1/:id2/:id4/:id5/:id6/:id7',
  //   loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule)//,
  // },
    {
      path: 'exam/:id/:id1/:id2/:id4/:id5/:id6/:id7/:id8/:id9',
      loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule)//,
    },
  {
    path: 'mahatmaform',
    loadChildren: () => import('./mahatmaform/mahatmaform.module').then( m => m.MahatmaformPageModule)//,
  },
  {
    path: 'wesitelink',
    loadChildren: () => import('./wesitelink/wesitelink.module').then( m => m.WesitelinkPageModule)//,
  }  
  ,
  {
    path: 'teachclassfees/:id',
    loadChildren: () => import('./teachclassfees/teachclassfees.module').then( m => m.TeachclassfeesPageModule)//,
  }  
  ,
  {
    path: 'teachsecfees/:id/:id1',
    loadChildren: () => import('./teachsecfees/teachsecfees.module').then( m => m.TeachsecfeesPageModule)//,
  }  
  ,
  {
    path: 'teachstufees/:id/:id1',
    loadChildren: () => import('./teachstufees/teachstufees.module').then( m => m.TeachstufeesPageModule)//,
  }
  ,
  {
    path: 'teachstufeesdetail/:id',
    loadChildren: () => import('./teachstufeesdetail/teachstufeesdetail.module').then( m => m.TeachstufeesdetailPageModule)//,
  }  
  ,
  {
    path: 'teachclassfeesrecon/:id',
    loadChildren: () => import('./teachclassfeesrecon/teachclassfeesrecon.module').then( m => m.TeachclassfeesreconPageModule)//,
  }  
  ,
  {
    path: 'teachsecfeesrecon/:id/:id1',
    loadChildren: () => import('./teachsecfeesrecon/teachsecfeesrecon.module').then( m => m.TeachsecfeesreconPageModule)//,
  }  
  ,
  {
    path: 'teachstufeesrecon/:id/:id1',
    loadChildren: () => import('./teachstufeesrecon/teachstufeesrecon.module').then( m => m.TeachstufeesreconPageModule)//,
  }  
  ,
  {
    path: 'teachclassfeesrecuntill/:id',
    loadChildren: () => import('./teachclassfeesrecuntill/teachclassfeesrecuntill.module').then( m => m.TeachclassfeesrecuntillPageModule)//,
  }  
  ,
  {
    path: 'teachsecfeesrecuntill/:id',
    loadChildren: () => import('./teachsecfeesrecuntill/teachsecfeesrecuntill.module').then( m => m.TeachsecfeesrecuntillPageModule)//,
  }
  ,
  {
    path: 'teachstufeesrecuntill/:id/:id1',
    loadChildren: () => import('./teachstufeesrecuntill/teachstufeesrecuntill.module').then( m => m.TeachstufeesrecuntillPageModule)//,
  }
  ,
  {
    path: 'teachstudentprofile/:id',
    loadChildren: () => import('./teachstudentprofile/teachstudentprofile.module').then( m => m.TeachstudentprofilePageModule)//,
  }  
  ,
  {
    path: 'teachstulist/:id',
    loadChildren: () => import('./teachstulist/teachstulist.module').then( m => m.TeachstulistPageModule)//,
  }  
  ,
  {
    path: 'leaverespond',
    loadChildren: () => import('./leaverespond/leaverespond.module').then( m => m.LeaverespondPageModule)//,
  }  
  ,
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then( m => m.GroupsPageModule)//,
  }  
  ,
  {
    path: 'groupdetail/:id',
    loadChildren: () => import('./groupdetail/groupdetail.module').then( m => m.GroupdetailPageModule)//,
  }  
  ,
  {
    path: 'teachchatstulist/:id/:id1',
    loadChildren: () => import('./teachchatstulist/teachchatstulist.module').then( m => m.TeachchatstulistPageModule)//,
  }  
  ,
  {
    path: 'teachchatbox/:id/:id1/:id2',
    loadChildren: () => import('./teachchatbox/teachchatbox.module').then( m => m.TeachchatboxPageModule)//,
  }  
  ,
  {
    path: 'stugroups',
    loadChildren: () => import('./stugroups/stugroups.module').then( m => m.StugroupsPageModule)//,
  }  
  ,
  {
    path: 'stugroupdetail/:id',
    loadChildren: () => import('./stugroupdetail/stugroupdetail.module').then( m => m.StugroupdetailPageModule)//,
  }  
  ,
  {
    path: 'stuchatbox/:id/:id1/:id2',
    loadChildren: () => import('./stuchatbox/stuchatbox.module').then( m => m.StuchatboxPageModule)//,
  }
  ,
  {
    path: 'teachAttClassList',
    loadChildren: () => import('./teachAttClassList/teachAttClassList.module').then( m => m.TeachAttClassListPageModule)//,
  }
  ,
  {
    path: 'teachAttCalender/:id/:id1',
    loadChildren: () => import('./teachAttCalender/teachAttCalender.module').then( m => m.TeachAttCalenderPageModule)//,
  }  
  ,
  {
    path: 'teacherMarksClass',
    loadChildren: () => import('./teacherMarksClass/teacherMarksClass.module').then( m => m.TeacherMarksClassPageModule)//,
  } ,
  {
    path: 'teachMarksExam/:id/:id1',
    loadChildren: () => import('./teachMarksExam/teachMarksExam.module').then( m => m.TeachMarksExamPageModule)//,
  }
  ,
  {
    path: 'teachMarksSubject/:id/:id1/:id2/:id3/:id4',
    loadChildren: () => import('./teachMarksSubject/teachMarksSubject.module').then( m => m.TeachMarksSubjectPageModule)//,
  }
  ,
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)//,
  }
  
  
  ,
  {
    path: 'teachstuclaslist',
    loadChildren: () => import('./teachstuclaslist/teachstuclaslist.module').then( m => m.TeachstuclaslistPageModule)//,
  }
  ,
  {
    path: 'teachchangepass',
    loadChildren: () => import('./teachchangepass/teachchangepass.module').then( m => m.TeachchangepassPageModule)//,
  }
  ,
  {
    path: 'teachgroupclasslist/:id',
    loadChildren: () => import('./teachgroupclasslist/teachgroupclasslist.module').then( m => m.TeachgroupclasslistPageModule)//,
  },
  {
    path: 'addcircularnew',
    loadChildren: () => import('./addcircularnew/addcircularnew.module').then( m => m.AddcircularnewPageModule)//,
  }
  ,
  {
    path: 'assigncircularstudent/:id',
    loadChildren: () => import('./assigncircularstudent/assigncircularstudent.module').then( m => m.AssigncircularstudentPageModule)//,
  }
  ,
  {
    path: 'assigncircularteacher/:id',
    loadChildren: () => import('./assigncircularteacher/assigncircularteacher.module').then( m => m.AssigncircularteacherPageModule)//,
  }
  
  ,
  {
    path: 'uploading',
    loadChildren: () => import('./docuploading/docuploading.module').then( m => m.DocuploadingPageModule)//,
  }
  ,
  {
    path: 'newhomework',
    loadChildren: () => import('./newhomework/newhomework.module').then( m => m.NewhomeworkPageModule)//,
  }
  ,
  {
    path: 'homeworksubjects/:id',
    loadChildren: () => import('./homeworksubjects/homeworksubjects.module').then( m => m.HomeworksubjectsPageModule)//,
  }
  ,
  {
    path: 'formhomework/:id/:id1',
    loadChildren: () => import('./formhomework/formhomework.module').then( m => m.FormhomeworkPageModule)//,
  }
  ,
  {
    path: 'exammarks',
    loadChildren: () => import('./exammarks/exammarks.module').then( m => m.ExammarksPageModule)//,
  }
  ,
  {
    path: 'mysubjectclasses',
    loadChildren: () => import('./mysubjectclasses/mysubjectclasses.module').then( m => m.MysubjectclassesPageModule)//,
  }
  ,
  {
    path: 'mymarksexam/:id/:id1',
    loadChildren: () => import('./mymarksexam/mymarksexam.module').then( m => m.MymarksexamPageModule)//,
  }
  ,
  {
    path: 'mymarkssubject/:id/:id1/:id2/:id3/:id4',
    loadChildren: () => import('./mymarkssubject/mymarkssubject.module').then( m => m.MymarkssubjectPageModule)//,
  }
  ,
  {
    path: 'trancking',
    loadChildren: () => import('./trancking/trancking.module').then( m => m.TranckingPageModule)//,
  }
  ,
  {
    path: 'biomatricstafflist/:id',
    loadChildren: () => import('./biomatricstafflist/biomatricstafflist.module').then( m => m.BiomatricstafflistPageModule)//,
  }
  ,
  {
    path: 'biomatricattcalender/:id/:id1',
    loadChildren: () => import('./biomatricattcalender/biomatricattcalender.module').then( m => m.BiomatricattcalenderPageModule)//,
  }
  ,
  {
    path: 'homeworkstafflist',
    loadChildren: () => import('./homeworkstafflist/homeworkstafflist.module').then( m => m.HomeworkstafflistPageModule)//,
  }
  ,
  {
    path: 'homeworkstaffcalender/:id/:id1',
    loadChildren: () => import('./homeworkstaffcalender/homeworkstaffcalender.module').then( m => m.HomeworkstaffcalenderPageModule)//,
  }
  ,
  {
    path: 'stafftype',
    loadChildren: () => import('./stafftype/stafftype.module').then( m => m.StafftypePageModule)//,
  }
  ,
  {
    path: 'trackingattendacneclass',
    loadChildren: () => import('./trackingattendacneclass/trackingattendacneclass.module').then( m => m.TrackingattendacneclassPageModule)//,
  }
  ,
  {
    path: 'trackingattendancecal/:id/:id1',
    loadChildren: () => import('./trackingattendancecal/trackingattendancecal.module').then( m => m.TrackingattendancecalPageModule)//,
  },
  {
    path: 'homeworkviewmodal',
    loadChildren: () => import('./modals/homeworkviewmodal/homeworkviewmodal.module').then( m => m.HomeworkviewmodalPageModule)
  },
  
  
  
  
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
