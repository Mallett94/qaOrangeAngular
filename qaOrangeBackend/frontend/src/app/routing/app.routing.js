"use strict";
var router_1 = require("@angular/router");
var showings_component_1 = require("../components/showings/showings.component");
var about_component_1 = require("../components/about/about.component");
var contact_component_1 = require("../components/contact/contact.component");
var booking_component_1 = require("../components/booking/booking.component");
var homepage_component_1 = require("../components/homepage/homepage.component");
var forum_component_1 = require("../components/forum/forum.component");
var thread_component_1 = require("../components/forum/thread.component");
var appRoutes = [
    {
        path: '',
        component: homepage_component_1.HomePageComponent
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
    },
    {
        path: 'booking',
        component: booking_component_1.BookingComponent
    },
    {
        path: 'forum',
        component: forum_component_1.ForumComponent
    },
    {
        path: 'thread/:id',
        component: thread_component_1.ThreadComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map