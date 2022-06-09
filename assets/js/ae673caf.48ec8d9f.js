"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[11568],{47896:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 3.9.3",tags:["Release notes","Moodle 3.9"],sidebar_position:3,moodleVersion:"3.9.3"},d=void 0,p={unversionedId:"releases/3.9/3.9.3",id:"releases/3.9/3.9.3",title:"Moodle 3.9.3",description:"Release date: 9 November 2020",source:"@site/general/releases/3.9/3.9.3.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.3",permalink:"/devdocs/general/releases/3.9/3.9.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654755163,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 3.9.3",tags:["Release notes","Moodle 3.9"],sidebar_position:3,moodleVersion:"3.9.3"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.2",permalink:"/devdocs/general/releases/3.9/3.9.2"},next:{title:"Moodle 3.9.4",permalink:"/devdocs/general/releases/3.9/3.9.4"}},m={},u=[{value:"Warning",id:"warning",level:2},{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,o.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 November 2020"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.3"),"."),(0,s.kt)("h2",{id:"warning"},"Warning"),(0,s.kt)("p",null,"If you have a large database, the upgrade step added in ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-69687"},"MDL-69687")," may be very, very slow. To avoid excessive down-time when you grade, you may want to test for this. A fix is being developed in ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-70285"},"MDL-70285"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68722"},"MDL-68722")," - Atto Equation Editor Symbols missing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68070"},"MDL-68070"),' - Messaging breaks when "Personal messages between users" is disabled'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69355"},"MDL-69355")," - Download of files bigger than 10 MB fails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68900"},"MDL-68900")," - Attempting to grade forums outside of their display period causes invalid response value error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69257"},"MDL-69257")," - H5P Interactive video should comply with maxbytes file upload limits"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65792"},"MDL-65792")," - Timed/Scheduled Posts are displaying create/modified time instead of release time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69266"},"MDL-69266")," - Drag and drop questions with 'unlimited' options fail in Moodle 3.9"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69736"},"MDL-69736")," - H5P Interactive book does not show a submit button"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69667"},"MDL-69667")," - Competencies count always 0 in competencyframeworks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69772"},"MDL-69772")," - Incorrect 'allcountrycodes' field prevents country selection during registration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69657"},"MDL-69657")," - Method of saving embedded H5P content grades in the gradebook (Backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69174"},"MDL-69174"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69641"},"MDL-69641")," - Fix Course gradebook slow query due to cross join on full user table (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69190"},"MDL-69190"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62387"},"MDL-62387")," - Cohort sync dropdown contains redundant entries"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69342"},"MDL-69342")," - 'Delete picture' checkbox deletes also the new profile picture when editing profile"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69359"},"MDL-69359")," - Add option to show only contributed plugins in uninstall script (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69260"},"MDL-69260"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69156"},"MDL-69156")," - Course copy: idnumber field is missing if not permitted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67654"},"MDL-67654")," - Forum inline reply does not use formchangechecker"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69791"},"MDL-69791")," - Grader report doesn't show an error message when an invalid grade is entered in AJAX mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69818"},"MDL-69818")," - Restoring a feedback activity doesn't restore item dependency"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69751"},"MDL-69751")," - Activity chooser does not display if site contains invalid user"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67650"},"MDL-67650")," - Forced $CFG config checkbox, select, textarea are not disabled in GUI"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68438"},"MDL-68438")," - Changing notification email format fails if messaging is disabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70093"},"MDL-70093")," - PDF dataformat export is misformatted when a cell height is greater than a page height"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69698"},"MDL-69698")," - List of licenses is not displayed in the user's  preferred language"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69729"},"MDL-69729")," - Clean up temporary H5P editor files (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68909"},"MDL-68909"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68284"},"MDL-68284")," - Locking invisible quiz in gradebook setup makes it visible (but only on gradebook setup page)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69805"},"MDL-69805")," - Database activity shows the comments option even if comments are disabled at site level")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65074"},"MDL-65074")," - Quiz navigation buttons use part of btn-secondary styles, can disappear"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68167"},"MDL-68167")," - Fix core/form_autocomplete accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69390"},"MDL-69390")," - Insufficient colour contrast for focused/mouseover action menu items"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70004"},"MDL-70004"),' - Invalid role attribute in the label for the "Clear my choice" option'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69392"},"MDL-69392")," - Colour contrast issues in quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68766"},"MDL-68766"),' - Login form: "Log in using your account on:" should be h3, not h6'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69395"},"MDL-69395")," - Insufficient colour contrast between form control borders and background"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69649"},"MDL-69649")," - Missing labels in restore page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69644"},"MDL-69644"),' - Focus outline of the "contact the privacy officer" link inconsistent with rest of page')),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52407"},"MDL-52407")," - Travis: Start sending e-mail notifications")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68292"},"MDL-68292")," - admin/modules.php exposes CSRF token (sesskey) in url"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69014"},"MDL-69014")," - User preferences not removed when tours are deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69807"},"MDL-69807")," - Editing a block exposes the CSRF token (sesskey) in the url")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=413935"},"MSA-20-0016")," Teacher is able to unenrol users without permission using course restore"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=413936"},"MSA-20-0017")," Privilege escalation within a course when restoring role overrides"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=413938"},"MSA-20-0018")," Some database module web services did not respect group settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=413939"},"MSA-20-0019")," tool_uploadcourse creates new enrol instances unexpectedly in some circumstances"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=413940"},"MSA-20-0020")," Stored XSS possible when renaming content bank items"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=413941"},"MSA-20-0021"),' The participants table download feature did not respect the site\'s "show user identity" configuration')),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.3"},"Notes de mise \xe0 jour de Moodle 3.9.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.3"},"Notas de Moodle 3.9.3"))))}k.isMDXComponent=!0}}]);