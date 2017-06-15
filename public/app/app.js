angular.module("app", ["ui.router"])
   .config(function ($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise('/hello')

      $stateProvider
      // HELLO //   
         .state('hello', {
            url: '/hello'
            , templateUrl: '../app/routes/hello/helloTmpl.html'
            , controller: 'helloCtrl'
         })

      // SHOP //
            .state('shop', {
                  url: '/shop'
                  , templateUrl: '../app/routes/shop/shopTmpl.html'
                  , controller: 'shopCtrl'
            })
         
      // LEARN //
            .state('learn', {
                  url: '/learn'
                  , templateUrl: '../app/routes/learn/learnTmpl.html'
                  , controller: 'learnCtrl'
            })

      // LOOKBOOK //
            .state('lookbook', {
                  url: '/lookbook'
                  , templateUrl: '../app/routes/lookbook/lookbookTmpl.html'
                  , controller: 'lookbookCtrl'
            })
         
      // READING //
            .state('reading', {
                  url: '/reading'
                  , templateUrl: '../app/routes/reading/readingTmpl.html'
                  , controller: 'readingCtrl'
            })
         
      // FAQ //
            .state('faq', {
                  url: '/faq'
                  , templateUrl: '../app/routes/faq/faqTmpl.html'
            })

      // REVIEW //
            .state('review', {
                  url: '/review'
                  , templateUrl: '../app/routes/review/reviewTmpl.html'
                  , controller: 'reviewCtrl'
            })


      // BUTEO //
            .state('buteo', {
                  url: '/buteo'
                  , templateUrl: '../app/shopViews/buteoTmpl.html'
                  , controller: 'shopCtrl'
            })

      //  // VENTUS //
      //       .state('ventus', {
      //             url: '/ventus'
      //             , templateUrl: '../app/shopViews/ventusTmpl.html'
      //       })

      //  // CAPRA //
      //       .state('capra', {
      //             url: '/capra'
      //             , templateUrl: '../app/shopViews/capraTmpl.html'
      //       })

      // // ORYC //
      //       .state('oryc', {
      //             url: '/oryc'
      //             , templateUrl: '../app/shopViews/orycTmpl.html'
      //       })

      // // MERU //
      //       .state('meru', {
      //             url: '/meru'
      //             , templateUrl: '../app/shopViews/meruTmpl.html'
      //       })

      // // AERY //
      //       .state('aery', {
      //             url: '/aery'
      //             , templateUrl: '../app/shopViews/aeryTmpl.html'
      //       })

      // // LEPO //
      //       .state('lepo', {
      //             url: '/lepo'
      //             , templateUrl: '../app/shopViews/lepoTmpl.html'
      //       })

      // // THERA //
      //       .state('thera', {
      //             url: '/thera'
      //             , templateUrl: '../app/shopViews/theraTmpl.html'
      //       })

      // // MERCA //
      //       .state('merca', {
      //             url: '/merca'
      //             , templateUrl: '../app/shopViews/mercaTmpl.html'
      //       })

      // // OMNI //
      //       .state('omni', {
      //             url: '/omni'
      //             , templateUrl: '../app/shopViews/omniTmpl.html'
      //       })

      // // URSI //
      //       .state('ursi', {
      //             url: '/ursi'
      //             , templateUrl: '../app/shopViews/ursiTmpl.html'
      //       })

      // LOGIN //
         // .state('login', {
         //    url: '/login'
         //    , templateUrl: '../app/routes/login/loginTmpl.html'
         //    , controller: 'loginCtrl'
         // })

   // ACCOUNT //         
         // .state('account', {
         //    url: '/account'
         //    , templateUrl: '../app/routes/account/accountTmpl.html'
         //    , controller: 'accountCtrl'
         //    , resolve: {
         //       user: function (authService, $state) {
         //          return authService.getCurrentUser()
         //             .then(function (response) {
         //                if (!response.data)
         //                   $state.go('login')
         //                return response.data
         //             })
         //             .catch(function (err) {
         //                $state.go('login')
         //             })
         //       }
         //    }
         // })


   });