(function () {

    /*Creating a function for header*/
    function headerCtrlFn($scope) {
        var vm = this;
        vm.brandName = "innRoad";
        $scope.brandLogo = "img/innr-logo.png";


        vm.navItems = ["Reservation", "Accounts", "Guest Services", "Inventory", "Setup", "Admin", "Night Audit", "Reports"];
        vm.navItemsList = [
            {
                "navTitle": "Reservation",
                "navImg": "img/transparent.png",
                "navClass": "nav-reservation"
            },
            {
                "navTitle": "Accounts",
                "navImg": "img/transparent.png",
                "navClass": "nav-accounts"
            },
            {
                "navTitle": "Guest Services",
                "navImg": "img/transparent.png",
                "navClass": "nav-guest-services"
            },
            {
                "navTitle": "Inventory",
                "navImg": "img/transparent.png",
                "navClass": "nav-inventory"
            },
            {
                "navTitle": "Setup",
                "navImg": "img/transparent.png",
                "navClass": "nav-setup"
            },
            {
                "navTitle": "Admin",
                "navImg": "img/transparent.png",
                "navClass": "nav-admin"
            },
            {
                "navTitle": "Night Audit",
                "navImg": "img/transparent.png",
                "navClass": "nav-night-audit"
            },
            {
                "navTitle": "Reports",
                "navImg": "img/transparent.png",
                "navClass": "nav-reports"
            }
        ];

        /* SubNavList */
        vm.subNavList = [
                ['Reservations', 'Tape Chart', 'New Quote', 'Guest History', 'Groups'],
                ['Accounts', 'Statements', 'Unit Owner Items', 'Travel Agent Items', 'Management Transfers', 'Account Distributions'],
                ['Room Status', 'Task List', 'Room Maintenance'],
                ['Overview', 'Seasons', 'Rates', 'Rules', 'Distribution', 'Policies'],
                ['Properties', 'Room Classes', 'Taxes', 'Ledger Accounts', 'Merchant Services', 'Document Templates', 'List Management', 'Task Management'],
                ['Client Info', 'Users', 'Roles'],
                ['Period Status'],
                ['Account Balances', 'Ledger Balances', 'Merchant Trans', 'Daily Flash', 'Room Forecast', 'Net Sales', 'Advance Deposit']
            ];
        
        
        vm.select = function($index){
            vm.subMenu = vm.subNavList[$index];
            vm.subMenuShow = true;
        }
        
        // vm.activeNav = vm.navItemsList[0].navTitle;
        // vm.setActive = function(nav) {
        //     vm.activeNav = nav
        //  }





        /* Load Template */

        vm.gsTemplate = "app/guestservices/guestservices.html";
        vm.tlTemplate = "app/guestservices/tasklist/tasklist.html";
        vm.commonTemplate = "app/common.html";
        vm.taskTemplate
        
        vm.loadView = function (param) {
            if (param == "Guest Services") {
                vm.loadTemplate = vm.gsTemplate;
            } else if(param == "Task List"){
                vm.loadTemplate = vm.tlTemplate;
            }
            else {
                vm.loadTemplate = vm.commonTemplate;
            }
        }





    }



    /*Creating Header Controller*/
    angular.module("header").controller("headerCtrl", ["$scope", headerCtrlFn])
    
})();