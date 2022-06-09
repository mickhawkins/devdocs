(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6755],{28442:function(e,t){"use strict";t.Z=function(e){return"string"==typeof e}},88698:function(e,t,n){"use strict";var a=n(75963);t.Z=void 0;var i=a(n(64938)),s=n(85893),o=(0,i.default)((0,s.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.Z=o},32798:function(e){e.exports={siteHome:"https://moodle.academy/",courses:{setup:{id:29,name:"Set up your Moodle Development Environment",summary:"Learn about the Moodle developer community and setting up a development environment",description:"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.",tags:["development","basics","setup"],archived:!1,series:[]},securityEssentials:{id:53,name:"Moodle Access and Security Essentials",summary:"A short course looking at access control and security aspects of plugins.",description:"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle's Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.",tags:["development","basic","essentials","security","api"],archived:!1,series:["basics"]},outputEssentials:{id:49,name:"Web Output Essentials",summary:"Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",description:"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",tags:["development","basics","essentials","output","api"],archived:!1,series:["basics"]},architecture:{id:51,name:"Moodle's Modular Architecture and APIs",summary:"Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",description:"In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",tags:["development","api","architecture"],archived:!1,series:["basics"]},pluginBasics:{id:10,name:"Moodle Plugin Development Basics",summary:"Learn about the essential concepts in Moodle's moduel architecture.",description:"This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",tags:["development","basics","essentials","api","plugins","architecture"],archived:!1,series:["basics"]}}}},86134:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),i=n(69119),s=n(39960),o=n(88698),l=n(32798),r=n.n(l),c=n(80684);function u(e){var t=e.courseName;if(!r().courses[t])throw Error("Unknown course "+t);var n=r().courses[t];return a.createElement(i.Z,{type:"info",icon:a.createElement(o.Z,{fontSize:"inherit"}),title:"Learn more on Moodle Academy"},"You can learn more about"," ",a.createElement("strong",null,e.subject)," ","from the"," ",a.createElement(c.Z,{title:n.summary},a.createElement(s.Z,{to:r().siteHome+"course/view.php?id="+n.id},n.name))," ","on Moodle Academy.")}},66330:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(83117),i=n(80102),s=(n(67294),n(3905)),o=n(13904),l=n(86134),r=["components"],c={title:"Access API",tags:["Access"]},u=void 0,d={unversionedId:"apis/subsystems/access",id:"apis/subsystems/access",title:"Access API",description:"The Access API gives you functions so you can determine what the current user is allowed to do. It also allows plugins to extend Moodle with new capabilities.",source:"@site/docs/apis/subsystems/access.md",sourceDirName:"apis/subsystems",slug:"/apis/subsystems/access",permalink:"/devdocs/docs/apis/subsystems/access",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/access.md",tags:[{label:"Access",permalink:"/devdocs/docs/tags/access"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654755163,formattedLastUpdatedAt:"09/06/2022",frontMatter:{title:"Access API",tags:["Access"]},sidebar:"docs",previous:{title:"Subsystems",permalink:"/devdocs/docs/category/subsystems"},next:{title:"Analytics API",permalink:"/devdocs/docs/apis/subsystems/analytics/"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"How to define new capabilities in plugins",id:"how-to-define-new-capabilities-in-plugins",level:2},{value:"Useful functions and classes",id:"useful-functions-and-classes",level:2},{value:"Context fetching",id:"context-fetching",level:3},{value:"Determining that a user has a given capability",id:"determining-that-a-user-has-a-given-capability",level:3},{value:"has_capability()",id:"has_capability",level:4},{value:"require_capability()",id:"require_capability",level:4},{value:"Enrolment functions",id:"enrolment-functions",level:3},{value:"Other related functions",id:"other-related-functions",level:3},{value:"<code>require_login()</code>",id:"require_login",level:4},{value:"<code>require_course_login()</code>",id:"require_course_login",level:4},{value:"<code>isguestuser()</code>, <code>isloggedin()</code> and <code>is_siteadmin()</code>",id:"isguestuser-isloggedin-and-is_siteadmin",level:4},{value:"<code>is_guest()</code>, <code>is_viewing()</code> and <code>is_enrolled()</code>",id:"is_guest-is_viewing-and-is_enrolled",level:4},{value:"<code>get_users_by_capability()</code>",id:"get_users_by_capability",level:4},{value:"See also",id:"see-also",level:2}],h={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,(0,a.Z)({frontMatter:c},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"The Access API gives you functions so you can determine what the current user is allowed to do. It also allows plugins to extend Moodle with new capabilities."),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Moodle uses a role-based access control model. Entities are represented by contexts which are arranged into a tree-like hierarchy known as the context tree."),(0,s.kt)("p",null,"The following context types are available:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Context name"),(0,s.kt)("th",{parentName:"tr",align:null},"Represents"),(0,s.kt)("th",{parentName:"tr",align:null},"Immediate contents"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"context_system")),(0,s.kt)("td",{parentName:"tr",align:null},"The site as a whole"),(0,s.kt)("td",{parentName:"tr",align:null},"user, course category, module, and block"),(0,s.kt)("td",{parentName:"tr",align:null},"The System context is root context in the tree. There is only one System context")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"context_user")),(0,s.kt)("td",{parentName:"tr",align:null},"An individual user"),(0,s.kt)("td",{parentName:"tr",align:null},"block"),(0,s.kt)("td",{parentName:"tr",align:null},"Each user has their own, unique, context")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"context_coursecat")),(0,s.kt)("td",{parentName:"tr",align:null},"A single course category"),(0,s.kt)("td",{parentName:"tr",align:null},"course category, course, block"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"context_course")),(0,s.kt)("td",{parentName:"tr",align:null},"A single course"),(0,s.kt)("td",{parentName:"tr",align:null},"module, block"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"context_module")),(0,s.kt)("td",{parentName:"tr",align:null},"An activity"),(0,s.kt)("td",{parentName:"tr",align:null},"block"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"context_block")),(0,s.kt)("td",{parentName:"tr",align:null},"A block"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("p",null,"A Role is a set of capability definitions, where each capability represents something that the user is able to do. Roles are defined at the top most\ncontext in the context tree, the System context."),(0,s.kt)("p",null,"Roles can be overridden by contexts further down the tree."),(0,s.kt)("p",null,"User access is calculated from the combination of roles which are assigned to each user."),(0,s.kt)("p",null,"All users that did not log-in yet automatically get the default role defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"$CFG->notloggedinroleid"),", it is not possible to assign any other role to this non-existent user id. There is one special guest user account that is used when user logs in using the guest login button or when guest auto-login is enabled. Again you can not assign any roles to the guest account directly, this account gets the ",(0,s.kt)("inlineCode",{parentName:"p"},"$CFG->guestroleid")," automatically. All other authenticated users get the default user role specified in ",(0,s.kt)("inlineCode",{parentName:"p"},"$CFG->defaultuserroleid")," and in the frontpage context the role specified in ",(0,s.kt)("inlineCode",{parentName:"p"},"$CFG->defaultfrontpageroleid"),"."),(0,s.kt)(l.Z,{subject:"Contexts and the Roles API",courseName:"securityEssentials",mdxType:"AcademyLink"}),(0,s.kt)("h2",{id:"how-to-define-new-capabilities-in-plugins"},"How to define new capabilities in plugins"),(0,s.kt)("p",null,"Capabilities are defined by ",(0,s.kt)("inlineCode",{parentName:"p"},"$capabilities")," array defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"db/access.php")," files. The name of the capability consists of ",(0,s.kt)("inlineCode",{parentName:"p"},"plugintype/pluginname:capabilityname"),"."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/folder/db/access.php"',title:'"mod/folder/db/access.php"'},"$capabilities = [\n    'mod/folder:managefiles' => [\n        'riskbitmask' => RISK_SPAM,\n        'captype' => 'write',\n        'contextlevel' => CONTEXT_MODULE,\n        'archetypes' => [\n            'editingteacher' => CAP_ALLOW,\n        ],\n    ],\n];\n")),(0,s.kt)("p",null,"Where the meaning of array keys is:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"riskbitmask")),(0,s.kt)("td",{parentName:"tr",align:null},"associated risks. These are explained on ",(0,s.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Hardening_new_Roles_system"},"Hardening new Roles system"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"captype")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("em",{parentName:"td"},"read")," or ",(0,s.kt)("em",{parentName:"td"},"write")," capability type, for security reasons system prevents all write capabilities for guest account and not-logged-in users")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"contextlevel")),(0,s.kt)("td",{parentName:"tr",align:null},"specified as context level constant. Declares the typical context level where this capability is checked. This capability can be checked with contexts that are at a lower level (e.g. ",(0,s.kt)("inlineCode",{parentName:"td"},"moodle/site:accessallgroups"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"archetypes")),(0,s.kt)("td",{parentName:"tr",align:null},"specifies defaults for roles with standard archetypes, this is used in installs, upgrades and when resetting roles (it is recommended to use only CAP_ALLOW here).  Archetypes are defined in mdl_role table.  See also ",(0,s.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Role_archetypes"},"Role archetypes"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"clonepermissionsfrom")),(0,s.kt)("td",{parentName:"tr",align:null},"when you are adding a new capability, you can tell Moodle to copy the permissions for each role from the current settings for another capability. This may give better defaults than just using archetypes for administrators who have heavily customised their roles configuration. The full syntax is: ",(0,s.kt)("inlineCode",{parentName:"td"},"clonepermissionsfrom")," => ",(0,s.kt)("inlineCode",{parentName:"td"},"moodle/quiz:attempt"))))),(0,s.kt)("p",null,"It is necessary to bump up plugin version number after any change in db/access.php, so that the upgrade scripts can make the necessary changes to the database.  To run the upgrade scripts, log in to Moodle as administrator, navigate to the site home page, and follow the instructions.  (If you need to test the upgrade script without changing the plugin version, it is also possible to set back the version number in the mdl_block or mdl_modules table in the database.)"),(0,s.kt)("p",null,'The capability names are defined in plugin language files, the name of the string consists of "pluginname:capabilityname", in the example above it would be:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/folder/lang/en/folder.php"',title:'"mod/folder/lang/en/folder.php"'},"$string['folder:managefiles'] = 'Manage files in folder module';\n")),(0,s.kt)("h2",{id:"useful-functions-and-classes"},"Useful functions and classes"),(0,s.kt)("h3",{id:"context-fetching"},"Context fetching"),(0,s.kt)("p",null,"In plugins context instances are usually only instantiated because they are instantiated and deleted automatically by the system."),(0,s.kt)("p",null,"Fetching by object id:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$systemcontext = context_system::instance();\n$usercontext = context_user::instance($user->id);\n$categorycontext = context_coursecat::instance($category->id);\n$coursecontext = context_course::instance($course->id);\n$contextmodule = context_module::instance($cm->id);\n$contextblock = context_block::instance($this->instance->id);\n")),(0,s.kt)("p",null,"Fetching by context id:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$context = context::instance_by_id($contextid);\n")),(0,s.kt)("p",null,"Notes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"by default exception is thrown if context can not be created"),(0,s.kt)("li",{parentName:"ul"},"deleted users do not have contexts any more")),(0,s.kt)("h3",{id:"determining-that-a-user-has-a-given-capability"},"Determining that a user has a given capability"),(0,s.kt)("p",null,'When implementing access control always ask "Does the user have capability to do something?". It is incorrect to ask "Does the user have a role somewhere?".'),(0,s.kt)("h4",{id:"has_capability"},"has_capability()"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"has_capability()")," is the most important function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"function has_capability(\n    string $capability,\n    context $context,\n    object $user = null,\n    bool $doanything = true\n): bool;\n")),(0,s.kt)("p",null,"Check whether a user has a particular capability in a given context. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$context = context_module::instance($cm->id);\nif (has_capability('mod/folder:managefiles', $context)) {\n    // Do or display something.\n}\n")),(0,s.kt)("p",null,"By default checks the capabilities of the current user, but you can pass a different user id. By default will return true for admin users, it is not recommended to use false here."),(0,s.kt)("h4",{id:"require_capability"},"require_capability()"),(0,s.kt)("p",null,"Function require_capability() is very similar, it is throwing access control exception if user does not have the capability."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"function require_capability($capability, context $context, $userid = null, $doanything = true, $errormessage = 'nopermissions', $stringfile = _) {\n")),(0,s.kt)("h3",{id:"enrolment-functions"},"Enrolment functions"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"./enrol"},"Enrolment API"),"."),(0,s.kt)("h3",{id:"other-related-functions"},"Other related functions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"function require_login($courseorid = null, $autologinguest = true, $cm = null, $setwantsurltome = true, $preventredirect = false)\nfunction require_course_login($courseorid, $autologinguest = true, $cm = null, $setwantsurltome = true, $preventredirect = false)\nfunction get_users_by_capability(context $context, $capability, $fields = _, $sort = _, $limitfrom = _, $limitnum = _,\n                                $groups = _, $exceptions = _, $doanything_ignored = null, $view_ignored = null, $useviewallgroups = false)\nfunction isguestuser($user = null)\nfunction isloggedin()\nfunction is_siteadmin($user_or_id = null)\nfunction is_guest(context $context, $user = null)\nfunction is_viewing(context $context, $user = null, $withcapability = _)\n")),(0,s.kt)("h4",{id:"require_login"},(0,s.kt)("inlineCode",{parentName:"h4"},"require_login()")),(0,s.kt)("p",null,"Each plugin script should include require_login() or require_course_login() after setting up PAGE->url."),(0,s.kt)("p",null,"This function does following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"it verifies that user is logged in before accessing any course or activities (not-logged-in users can not enter any courses)."),(0,s.kt)("li",{parentName:"ul"},"user is logged in as gu"),(0,s.kt)("li",{parentName:"ul"},"verify access to hidden courses and activities"),(0,s.kt)("li",{parentName:"ul"},"if an activity is specified, verify any ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Availability_API"},"availability restrictions")," for the activity"),(0,s.kt)("li",{parentName:"ul"},"verify that user is either enrolled or has capability 'moodle/course:view' or some enrol plugin gives them temporary guest access"),(0,s.kt)("li",{parentName:"ul"},"logs access to courses")),(0,s.kt)("h4",{id:"require_course_login"},(0,s.kt)("inlineCode",{parentName:"h4"},"require_course_login()")),(0,s.kt)("p",null,"This function is supposed to be used only in activities that want to allow read access to content on the frontpage without logging-in. For example view resource files, reading of glossary  entries, etc."),(0,s.kt)("h4",{id:"isguestuser-isloggedin-and-is_siteadmin"},(0,s.kt)("inlineCode",{parentName:"h4"},"isguestuser()"),", ",(0,s.kt)("inlineCode",{parentName:"h4"},"isloggedin()")," and ",(0,s.kt)("inlineCode",{parentName:"h4"},"is_siteadmin()")),(0,s.kt)("p",null,"These function were previously needed for limiting of access of special accounts. It is usually not necessary any more, because any ",(0,s.kt)("em",{parentName:"p"},"write")," or ",(0,s.kt)("em",{parentName:"p"},"risky")," capabilities are now automatically prevented in has_capability()."),(0,s.kt)("p",null,"It is strongly discouraged to use is_siteadmin() in activity modules, please use standard capabilities and enrolment status instead."),(0,s.kt)("h4",{id:"is_guest-is_viewing-and-is_enrolled"},(0,s.kt)("inlineCode",{parentName:"h4"},"is_guest()"),", ",(0,s.kt)("inlineCode",{parentName:"h4"},"is_viewing()")," and ",(0,s.kt)("inlineCode",{parentName:"h4"},"is_enrolled()")),(0,s.kt)("p",null,"In order to access course data one of these functions must return true for user:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_enrolled()")," - user has active record in user_enrolments table"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_viewing()")," - user has 'moodle/course:view' capability (may access course, but is not considered to be participant)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_guest()")," - user was given temporary guest access by some enrolment plugin")),(0,s.kt)("h4",{id:"get_users_by_capability"},(0,s.kt)("inlineCode",{parentName:"h4"},"get_users_by_capability()")),(0,s.kt)("p",null,"This method returns list of users with given capability, it ignores enrolment status and should be used only above the course context."),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/apis"},"API guides")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Roles"},"Roles")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Role_archetypes"},"Role archetypes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Hardening_new_Roles_system"},"Hardening new Roles system")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Roles_and_modules"},"Roles and modules")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/NEWMODULE_Adding_capabilities"},"NEWMODULE Adding capabilities")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/New_permissions_evaluation_in_2.0"},"New permissions evaluation in 2.0")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=257611"},"(Forums) How to check if current user is student?"))))}g.isMDXComponent=!0},220:function(e,t,n){"use strict";var a=n(67294);t.Z=a.createContext(null)}}]);