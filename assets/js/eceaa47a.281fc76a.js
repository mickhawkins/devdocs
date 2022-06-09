"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[27750],{78038:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return m}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 2.2.4",tags:["Release notes","Moodle 2.2"],sidebar_position:4,moodleVersion:"2.2.4"},d=void 0,p={unversionedId:"releases/2.2/2.2.4",id:"releases/2.2/2.2.4",title:"Moodle 2.2.4",description:"Release date: 9 July 2012",source:"@site/general/releases/2.2/2.2.4.md",sourceDirName:"releases/2.2",slug:"/releases/2.2/2.2.4",permalink:"/devdocs/general/releases/2.2/2.2.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2/2.2.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/devdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654755163,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.2.4",tags:["Release notes","Moodle 2.2"],sidebar_position:4,moodleVersion:"2.2.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2.3",permalink:"/devdocs/general/releases/2.2/2.2.3"},next:{title:"Moodle 2.2.5",permalink:"/devdocs/general/releases/2.2/2.2.5"}},u={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 July 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.2.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.2.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28557"},"MDL-28557")," Group event now appears to teachers, managers and administrators"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33398"},"MDL-33398")," ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27368"},"MDL-27368")," Cron works when course completion is enabled")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-24401"},"MDL-24401")," String default changes")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207146"},"MSA-12-0040")," Capabilities issue through caching"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207147"},"MSA-12-0041")," XSS issue in LTI module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207148"},"MSA-12-0042")," File access issue in blocks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207149"},"MSA-12-0043")," Early information access issue in forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207150"},"MSA-12-0044")," Capability check issue in forum subscriptions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207151"},"MSA-12-0045")," Injection potential in admin for repositories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207152"},"MSA-12-0046")," Insecure protocol redirection in LDAP authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207153"},"MSA-12-0047")," SQL injection potential in Feedback module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207154"},"MSA-12-0048")," Possible XSS in cohort administration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207155"},"MSA-12-0049")," Group restricted activity displayed to all users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=207156"},"MSA-12-0050")," Potential DOS attack through database activity")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32866"},"MDL-32866")," Filemanager in private files now saves changes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33583"},"MDL-33583"),' "Keep all" automated backups now works'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33607"},"MDL-33607")," Add new wiki page no longer reports error writing to database"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33603"},"MDL-33603")," Database activity entries are linked correctly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26892"},"MDL-26892")," Question images not lost during upgrade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29924"},"MDL-29924")," Glossary attachments appear in filter popups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25695"},"MDL-25695")," TOC links now work in Wiki")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2.4"},"Notes de mise \xe0 jour de Moodle 2.2.4"))))}h.isMDXComponent=!0}}]);