"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("../components/test/user.component");
var showings_component_1 = require("../components/showings/showings.component");
var about_component_1 = require("../components/about/about.component");
var contact_component_1 = require("../components/contact/contact.component");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'showings',
        component: showings_component_1.ShowingsComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map