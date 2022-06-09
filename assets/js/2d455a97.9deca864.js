"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[27314],{1708:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 2.9.5",tags:["Release notes","Moodle 2.9"],sidebar_position:5,moodleVersion:"2.9.5"},d=void 0,m={unversionedId:"releases/2.9/2.9.5",id:"releases/2.9/2.9.5",title:"Moodle 2.9.5",description:"Release date: 14 March 2016",source:"@site/general/releases/2.9/2.9.5.md",sourceDirName:"releases/2.9",slug:"/releases/2.9/2.9.5",permalink:"/devdocs/general/releases/2.9/2.9.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.9/2.9.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.9",permalink:"/devdocs/general/tags/moodle-2-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654755163,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 2.9.5",tags:["Release notes","Moodle 2.9"],sidebar_position:5,moodleVersion:"2.9.5"},sidebar:"releaseNotes",previous:{title:"Moodle 2.9.4",permalink:"/devdocs/general/releases/2.9/2.9.4"},next:{title:"Moodle 2.9.6",permalink:"/devdocs/general/releases/2.9/2.9.6"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 March 2016"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.9.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.9.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48778"},"MDL-48778")," - Fixed problems with assign quick grading in case of multiple attempts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21912"},"MDL-21912")," - New setting 'Allow admin conflict resolution' for ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/29/en/Course_restore"},"restoring a course")," from a different Moodle site"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31635"},"MDL-31635"),' - Course completion "grade" criteria now correctly shows grades as points and not percents'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51702"},"MDL-51702")," - Restored ability to assign roles to blocks in Default dashboard and My home"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49807"},"MDL-49807")," - Wiki table of contents correctly displays headers created in Atto editor")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48015"},"MDL-48015")," - Fixed misalignment in gradebook when category has no total and items"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52566"},"MDL-52566")," - Releasing assignment with team submission now releases grades to all group members"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52486"},"MDL-52486")," - Fixed javascript errors in languages with _ in the name such as en_us (for example when editing user interests)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51723"},"MDL-51723")," - Fixed bug with unenrolling users on login under LDAP auth with Active Directory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38020"},"MDL-38020")," - Corrected user enrollment workflow through Participant list using Edit Icon"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41531"},"MDL-41531")," - Fixed irregular characters in course name interfering with PayPal enrolment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51075"},"MDL-51075")," - Centered positioning of glossary popup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52217"},"MDL-52217")," - Cleaning temporary download directory for dropbox repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52589"},"MDL-52589")," - Allow non-default cache stores to be uninstalled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50083"},"MDL-50083")," - Unlock submissions when reopening locked assignment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43620"},"MDL-43620")," - Allow to reset the course start date when having a chat activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49338"},"MDL-49338")," - Fixed bug when quiz statistics report displays the preview icons to the wrong variant"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52763"},"MDL-52763")," - Users with the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/29/en/Capabilities/mod/assign:viewblinddetails"},"mod/assign:viewblinddetails capability")," are able to cross reference users with their blind identities"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52435"},"MDL-52435")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/29/en/Plagiarism_prevention"},"Plagiarism prevention")," links are moved to the top of the submission text"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52814"},"MDL-52814")," - Fixed overlapping of redo button in Quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53012"},"MDL-53012")," - Behat: Add step to run scheduled task"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50218"},"MDL-50218")," - If there is no grade, an external tool (LTI) module will now return a grade of ",(0,s.kt)("inlineCode",{parentName:"li"},"''")," instead of 0 to the LTI tool producer")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330173"},"MSA-16-0003")," Incorrect capability check when displaying users emails in Participants list"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330174"},"MSA-16-0004")," XSS from profile fields from external db"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330175"},"MSA-16-0005")," Reflected XSS in mod_data advanced search"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330176"},"MSA-16-0006")," Hidden courses are shown to students in Event Monitor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330177"},"MSA-16-0007")," Non-Editing Instructor role can edit exclude checkbox in Single View"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330178"},"MSA-16-0008")," External function get_calendar_events return events that pertains to hidden activities"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330179"},"MSA-16-0009")," CSRF in Assignment plugin management page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330180"},"MSA-16-0010")," Enumeration of category details possible without authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330181"},"MSA-16-0011")," Add no referrer to links with ",(0,s.kt)("inlineCode",{parentName:"li"},"_blank")," target attribute"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=330182"},"MSA-16-0012")," External function mod_assign_save_submission does not check due dates")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.9.5"},"Notes de mise \xe0 jour de Moodle 2.9.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.9.5"},"Notas de Moodle 2.9.5"))))}c.isMDXComponent=!0}}]);