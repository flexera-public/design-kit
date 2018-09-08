'use strict';

/**
 * @ngdoc overview
 * @name designkitApp
 * @description
 * # designkitApp
 *
 * Main module of the application.
 */
angular
  .module('designkitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/logos', {
        templateUrl: 'views/logos.html',
        controller: 'LogosCtrl'
      })
      .when('/colors', {
        templateUrl: 'views/colors.html',
        controller: 'ColorsCtrl'
      })
      .when('/colors/:colorId', {
        templateUrl: 'views/show_color.html',
        controller: 'ColorsCtrl'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl'
      })
       .when('/buttons', {
        templateUrl: 'views/buttons.html',
        controller: 'ButtonsCtrl'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/ui-elements', {
        templateUrl: 'views/ui-elements.html',
        controller: 'UIelementsCtrl'
      })
      .when('/icons', {
        templateUrl: 'views/icons.html',
        controller: 'IconsCtrl'
      })
      .when('/icons/elemental', {
        templateUrl: 'views/icons/elemental.html',
        controller: 'ElementalIconsCtrl'
      })
      .when('/icons/representative', {
        templateUrl: 'views/icons/representative.html',
        controller: 'RepresentativeIconsCtrl'
      })
      .when('/icons/actionable', {
        templateUrl: 'views/icons/actionable.html',
        controller: 'ActionablelIconsCtrl'
      })
      .when('/widgets', {
        templateUrl: 'views/widgets.html',
        controller: 'WidgetsCtrl'
      })
      .when('/patterns', {
        templateUrl: 'views/patterns.html',
        controller: 'PatternsCtrl'
      })
      .when('/sprites', {
        templateUrl: 'views/sprites.html',
        controller: 'SpritesCtrl',
        controllerAs: 'sprites'
      })
      .when('/components', {
        templateUrl: 'views/components.html',
        controller: 'ComponentsCtrl',
        controllerAs: 'components'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:LogosCtrl
 * @description
 * # LogosCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('LogosCtrl', ["$scope", "$rootScope", "$routeParams", function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-logos';
    $rootScope.bodyClass = 'layout-logos';
    $rootScope.colorId = $routeParams.colorId;

  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ColorsCtrl
 * @description
 * # ColorsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ColorsCtrl', ["$scope", "$rootScope", "$routeParams", "$location", function ($scope, $rootScope, $routeParams, $location) {
    $scope.colors = [
      {
        id: 1,
        section: 'Brand Colors',
        item: {
          name: 'Cool Blue',
          hex: '0A83F6',
          rgb: '10, 131, 246',
          selector: 'swatch-cool-blue',
        }
      },
      {
        id: 2,
        section: 'Brand Colors',
        item: {
          name: 'Lima Green',
          hex: '80C11A',
          rgb: '128, 193, 26',
          selector: 'swatch-lima',
        }
      },
      {
        id: 3,
        section: 'Brand Colors',
        item: {
          name: 'Fire Engine Red',
          hex: 'C32525',
          rgb: '195, 37, 37',
          selector: 'swatch-fire-engine',
        }
      },
      {
        id: 4,
        section: 'Brand Colors',
        item: {
          name: 'Royal Purple',
          hex: '7355A6',
          rgb: '115, 85, 166',
          selector: 'swatch-royal-purple',
        },
      },
      {
        id: 5,
        section: 'Brand Colors',
        item: {
          name: 'Buckthorn Orange',
          hex: 'F7A626',
          rgb: '247, 166, 38',
          selector: 'swatch-buckthorn',
        }
      },
      {
        id: 6,
        section: 'Graph Colors',
        item: {
          name: 'Viking',
          hex: '4FBBCD',
          rgb: '79, 187, 205',
          selector: 'swatch-viking',
        }
      },
      {
        id: 7,
        section: 'Graph Colors',
        item: {
          name: 'Royal Purple',
          hex: '7355A6',
          rgb: '114, 85, 165',
          selector: 'swatch-royal-purple',
        },
      },
      {
        id: 8,
        section: 'Graph Colors',
        item: {
          name: 'Mulberry',
          hex: 'C45887',
          rgb: '196, 88, 135',
          selector: 'swatch-mulberry',
        },
      },
      {
        id: 9,
        section: 'Graph Colors',
        item: {
          name: 'Buckthorn Orange',
          hex: 'F7A626',
          rgb: '247, 166, 38',
          selector: 'swatch-buckthorn',
        }
      },
      {
        id: 10,
        section: 'Graph Colors',
        item: {
          name: 'Celery',
          hex: 'B4CB55',
          rgb: '180, 203, 85',
          selector: 'swatch-celery',
        }
      },
      {
        id: 11,
        section: 'Graph Colors',
        item: {
          name: 'Indian',
          hex: 'D05A5A',
          rgb: '208, 90, 90',
          selector: 'swatch-indian',
        }
      },
      {
        id: 12,
        section: 'Graph Colors',
        item: {
          name: 'Silver Tree',
          hex: '5DD08B',
          rgb: '93, 208, 139',
          selector: 'swatch-silver-tree',
        }
      },
      {
        id: 13,
        section: 'Graph Colors',
        item: {
          name: 'Sean',
          hex: '3C8CC7',
          rgb: '60, 140, 199',
          selector: 'swatch-sean',
        }
      },
      {
        id: 14,
        section: 'Button Colors',
        item: {
          name: 'Green Button',
          hex: '5FB000',
          rgb: '95, 176, 0',
          selector: 'swatch-green-button',
        }
      },
      {
        id: 15,
        section: 'Button Colors',
        item: {
          name: 'Blue Button',
          hex: '0871D4',
          rgb: '8, 113, 212',
          selector: 'swatch-blue-button',
        }
      },
      {
        id: 16,
        section: 'Button Colors',
        item: {
          name: 'Red Button',
          hex: 'C32525',
          rgb: '195, 37, 37',
          selector: 'swatch-red-button',
        }
      },
      {
        id: 17,
        section: 'Button Colors',
        item: {
          name: 'Grey Button',
          hex: 'E7E7E7',
          rgb: '231, 231, 231',
          selector: 'swatch-grey-button',
        }
      },
      {
        id: 18,
        section: 'Text Colors',
        item: {
          name: 'Link',
          hex: '0A83F6',
          rgb: '10, 131, 246',
          selector: 'swatch-link',
        }
      },
      {
        id: 19,
        section: 'Text Colors',
        item: {
          name: 'Link Hover',
          hex: '0769C6',
          rgb: '7, 105, 198',
          selector: 'swatch-link-hover',
        }
      },
      {
        id: 20,
        section: 'Text Colors',
        item: {
          name: 'Text',
          hex: '76899A',
          rgb: '118, 137, 154',
          selector: 'swatch-text',
        }
      },
      {
        id: 21,
        section: 'Text Colors',
        item: {
          name: 'Heading',
          hex: '57626C',
          rgb: '87, 98, 108',
          selector: 'swatch-heading',
        }
      },
      {
        id: 22,
        section: 'Section Colors',
        item: {
          name: 'Left Background (Sith)',
          hex: '353B41',
          rgb: '53, 59, 65',
          selector: 'swatch-left-dark',
        }
      },
      {
        id: 23,
        section: 'Section Colors',
        item: {
          name: 'Left Background (Light)',
          hex: 'DADEE3',
          rgb: '218, 222, 227',
          selector: 'swatch-left-light',
        }
      },
      {
        id: 24,
        section: 'Section Colors',
        item: {
          name: 'Body',
          hex: 'F4F5F7',
          rgb: '244, 245, 247',
          selector: 'swatch-body',
        }
      },
      {
        id: 25,
        section: 'Border Colors',
        item: {
          name: 'Grey Border',
          hex: 'D1D6DC',
          rgb: '209, 214, 220',
          selector: 'swatch-grey-border',
        }
      },
      {
        id: 26,
        section: 'Border Colors',
        item: {
          name: 'Grey Border (Light)',
          hex: 'E2E5E9',
          rgb: '226, 229, 233',
          selector: 'swatch-grey-border-light',
        }
      },
      {
        id: 27,
        section: 'Icon Colors',
        item: {
          name: 'Grey Icon',
          hex: '57626C',
          rgb: '87, 98, 108',
          selector: 'swatch-grey-icon',
        }
      },
      {
        id: 28,
        section: 'Icon Colors',
        item: {
          name: 'Grey Icon (Highlight)',
          hex: 'A2AFBA',
          rgb: '162, 175, 186',
          selector: 'swatch-grey-icon-highlight',
        }
      },
      {
        id: 29,
        section: 'Icon Colors',
        item: {
          name: 'Blue Icon',
          hex: '2390F7',
          rgb: '35, 144, 247',
          selector: 'swatch-blue-icon',
        }
      },
      {
        id: 30,
        section: 'Icon Colors',
        item: {
          name: 'Blue Icon (Highlight)',
          hex: '54A9F9',
          rgb: '84, 169, 249',
          selector: 'swatch-blue-icon-highlight',
        }
      },
      {
        id: 30,
        section: 'Icon Colors',
        item: {
          name: 'Green Icon',
          hex: '80C11A',
          rgb: '128, 193, 26',
          selector: 'swatch-green-icon',
        }
      },
      {
        id: 31,
        section: 'Icon Colors',
        item: {
          name: 'Sith Icon',
          hex: '30373C',
          rgb: '48, 55, 60',
          selector: 'swatch-sith-icon',
        }
      },
      {
        id: 32,
        section: 'Highlight Colors',
        item: {
          name: 'Hover Highlight',
          hex: 'FAFAFA',
          rgb: '250, 250, 250',
          selector: 'swatch-hover-highlight',
        }
      },
      {
        id: 33,
        section: 'Highlight Colors',
        item: {
          name: 'Select Highlight',
          hex: 'FAFAFA',
          rgb: '250, 250, 250',
          selector: 'swatch-select-highlight',
        }
      },
      {
        id: 34,
        section: 'Highlight Colors',
        item: {
          name: 'Inline Highlight',
          hex: 'E2E5E9',
          rgb: '226, 229, 233',
          selector: 'swatch-inline-highlight',
        }
      },
      {
        id: 35,
        section: 'Messaging Colors',
        item: {
          name: 'Messaging Background',
          hex: 'FFF7E5',
          rgb: '255, 247, 229',
          selector: 'swatch-messaging-background',
        }
      },
      {
        id: 36,
        section: 'Messaging Colors',
        item: {
          name: 'Messaging Text',
          hex: '939182',
          rgb: '147, 145, 130',
          selector: 'swatch-messaging-text',
        }
      },
      {
        id: 37,
        section: 'Header Colors',
        item: {
          name: 'Header Flat',
          hex: '0069CC',
          rgb: '0, 105, 204',
          selector: 'swatch-header-flat',
        }
      },
      {
        id: 38,
        section: 'Header Colors',
        item: {
          name: 'Header Gradient Start',
          hex: '076CCA',
          rgb: '7, 108, 202',
          selector: 'swatch-header-gradient-start',
        }
      },
      {
        id: 39,
        section: 'Header Colors',
        item: {
          name: 'Header Gradient End',
          hex: '065BAC',
          rgb: '6, 91, 172',
          selector: 'swatch-header-gradient-end',
        }
      }
    ];

    $scope.selectedColor = _.find($scope.colors, {item: {hex: $routeParams.colorId}});
    if ($routeParams.colorId && $scope.selectedColor === undefined) { $location.url('/colors/not_found'); }

    $scope.sectionClass = 'section-colors';
    $rootScope.bodyClass = 'layout-color';
    $rootScope.swatchClass = 'swatch-body-';

    if ($routeParams.colorId ==='not_found') {
      $rootScope.colorId = '000000';
    }
    else {
      $rootScope.colorId = $routeParams.colorId;
    }

  }]);
'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:TypographyCtrl
 * @description
 * # TypographyCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('TypographyCtrl', ["$scope", "$rootScope", "$routeParams", function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-typeography';
    $rootScope.bodyClass = 'layout-typeography';
    $rootScope.colorId = $routeParams.colorId;

  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('MainCtrl', ["$scope", "$location", function($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    $scope.showSubmenu = false;
    $scope.$on('$routeChangeSuccess', function () {
    var path = $location.path();
      if (path.contains('/icons')){
        $scope.showSubmenu = true;
        setTimeout(function() {
          $('.sub-nav-list').addClass('expand');
          $('.sub-nav-list > li').addClass('expand');
        }, 100);
        
      } else {
        setTimeout(function() {$('.sub-nav-list').removeClass('expand');}, 300);
        $('.sub-nav-list > li ').removeClass('expand');
        $scope.showSubmenu = false;
        
      }
    });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('IconsCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.sectionClass = 'section-icons';
    $rootScope.bodyClass = 'layout-icons';
  }]);
'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ButtonsCtrl
 * @description
 * # ButtonsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ButtonsCtrl', ["$scope", "$rootScope", "$routeParams", function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-buttons';
    $rootScope.bodyClass = 'layout-buttons';
    $rootScope.colorId = $routeParams.colorId;

  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('FormsCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-forms';
    $rootScope.bodyClass = 'layout-forms';

  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:TablesCtrl
 * @description
 * # TablesCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('TablesCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-tables';
    $rootScope.bodyClass = 'layout-tables';

    $scope.tableRows = [
      {
        isChecked: false,
        title: 'Excepteur occaecat incididunt',
        description: 'Aute commodo laboris Lorem culpa sunt deserunt tempor enim dolore magna proident culpa cillum. Excepteur pariatur pariatur occaecat quis occaecat est veniam. Officia irure non ullamco minim culpa ad anim eiusmod eiusmod irure fugiat. Adipisicing cupidatat anim sint eiusmod labore do.',
        state: 'images/assets/icon-server-orange.svg'
      },
      {
        isChecked: true,
        title: 'Tempor enim',
        description: 'Minim est labore est labore est non. Ea cillum anim culpa est. Enim est anim id commodo dolor non cupidatat anim proident. Adipisicing ea pariatur do adipisicing consequat labore fugiat fugiat duis nisi. Sunt nulla commodo duis ut labore esse veniam sunt deserunt. Culpa eu esse proident tempor amet elit adipisicing ullamco anim officia quis culpa quis consectetur.',
        state: 'images/assets/icon-server-red.svg'
      },
      {
        isChecked: true,
        title: 'Consequat eiusmod',
        description: 'Elit elit nulla commodo mollit culpa nostrud. Ut in est deserunt fugiat laborum et. Aute proident qui aute aliqua magna aliquip consectetur excepteur eu nulla. Veniam sint aute occaecat ex culpa adipisicing laborum ea laborum ut ut sint. Quis excepteur voluptate aliquip tempor excepteur proident sit.',
        state: 'images/assets/icon-server-orange.svg'
      },
      {
        isChecked: false,
        title: 'Ex sunt commodo culpa magna',
        description: 'Pariatur et duis irure velit anim nisi enim. Lorem mollit ullamco veniam proident enim proident velit incididunt sit nostrud. Nulla aliquip officia sunt pariatur nisi sunt est voluptate et eiusmod amet fugiat nostrud. Non aliquip dolor aute magna aute consequat culpa. Excepteur aute consequat labore sunt ex non do pariatur sunt ex deserunt irure. Ad laboris sint tempor pariatur mollit ea ut.',
        state: 'images/assets/icon-server-green.svg'
      },
      {
        isChecked: true,
        title: 'Nulla commodo aliqua',
        description: 'Proident fugiat deserunt amet occaecat ut adipisicing cupidatat. Excepteur voluptate consequat enim duis reprehenderit sint enim. Labore sit eu do ad anim magna. Culpa dolore amet culpa et laboris incididunt amet laborum laborum tempor aliqua elit aute tempor. Voluptate minim fugiat consequat fugiat dolor in id nisi irure excepteur velit mollit dolor. Aute irure ex consectetur culpa id labore dolor exercitation. Ad anim nulla et Lorem adipisicing dolor dolor in aliqua laborum ullamco labore ut.',
        state: 'images/assets/icon-server-warning.svg'
      },
      {
        isChecked: false,
        title: 'Minim non eiusmod aliqua',
        description: 'Ut deserunt nulla laborum consectetur amet. Magna anim dolor elit et sit enim nostrud sint. Consectetur voluptate anim dolor officia. Ipsum ea laborum ex nisi anim laborum id proident. Pariatur excepteur labore pariatur elit consectetur ipsum consectetur aliqua ut. Dolore Lorem id voluptate cillum labore dolore consectetur eu dolore officia laborum.',
        state: 'images/assets/icon-server-red.svg'
      },
      {
        isChecked: false,
        title: 'Commodo sint incididunt',
        description: 'Velit quis qui ut ipsum. Incididunt amet sint magna aliqua sit tempor laboris pariatur aliqua ad id exercitation commodo. Lorem in culpa deserunt cupidatat reprehenderit proident. Esse culpa nisi quis esse dolore tempor elit eiusmod duis in ex. Eu sint incididunt laborum exercitation incididunt consequat laborum consequat enim magna qui Lorem irure.',
        state: 'images/assets/icon-server-green.svg'
      },
      {
        isChecked: true,
        title: 'Amet incididunt dolor eu consectetur',
        description: 'Ad labore cillum excepteur eiusmod ullamco. Sint quis consequat cillum consequat. Consequat deserunt enim exercitation amet sint duis amet laboris elit excepteur commodo commodo. Minim ipsum culpa officia voluptate non labore culpa. Irure aute occaecat amet labore culpa commodo tempor occaecat elit sint veniam culpa duis ipsum. Ullamco tempor occaecat sit adipisicing minim in minim aliquip nulla eu nulla aliquip.',
        state: 'images/assets/icon-server-warning.svg'
      },
      {
        isChecked: true,
        title: 'Aliqua magna sunt officia',
        description: 'Voluptate tempor aliquip officia cupidatat sit sunt nulla fugiat esse. Voluptate mollit cupidatat incididunt pariatur reprehenderit exercitation proident non deserunt voluptate adipisicing id id. Tempor veniam mollit laboris magna deserunt pariatur ex anim fugiat aliqua consequat ex irure. Consequat deserunt mollit cupidatat et voluptate nulla aute sunt anim esse ullamco ex sunt. Nostrud qui nisi occaecat ut fugiat deserunt exercitation labore dolore. Sit sit consequat laborum cupidatat aute in aute mollit ipsum nostrud elit. Aliquip sunt sint eu aute pariatur anim et labore.',
        state: 'images/assets/icon-server-warning.svg'
      },
      {
        isChecked: true,
        title: 'Nisi sint non ullamco officia',
        description: 'Dolore tempor sunt elit aute enim magna sint ipsum dolore voluptate consequat proident dolor. Commodo incididunt labore pariatur adipisicing cupidatat aliquip sunt consequat elit ex sint duis magna velit. Amet ad dolor eu elit pariatur elit ipsum quis aute pariatur. Irure culpa Lorem esse eu adipisicing fugiat. Consectetur nisi voluptate duis aliquip adipisicing aliquip anim. Tempor dolore eu commodo nulla sint nisi laborum cillum duis minim nisi nostrud ut.',
        state: 'images/assets/icon-server-red.svg'
      }
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:UIelementsCtrl
 * @description
 * # UIelementsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('UIelementsCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tableRows = [
      {
        isChecked: false,
        title: 'Fusce Adipiscing Elit Mattis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, necessitatibus. Pariatur, non vero voluptate voluptas nesciunt ipsa nostrum omnis dolorum molestias doloremque itaque, ducimus impedit fuga obcaecati amet nulla quos.',
        state: 'images/assets/icon-server-green.svg',
      },
      {
        isChecked: false,
        title: 'Quam Consectetur Ipsum Fermentum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias sit, soluta! Iure placeat a repellat vitae obcaecati, nobis consequatur tempora vel. Illo placeat obcaecati fugit libero quasi eius ipsam!',
        state: 'images/assets/icon-server-red.svg',
      },
      {
        isChecked: false,
        title: 'Ornare Vulputate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sequi optio neque explicabo autem dolor accusantium dolorum fugiat eaque quod voluptas, quisquam iure, sapiente itaque sit dicta modi iusto ratione.',
        state: 'images/assets/icon-server-orange.svg',
      },
      {
        isChecked: false,
        title: 'Sit Tellus Vehicula',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci praesentium eligendi vitae totam reiciendis reprehenderit nihil autem! Numquam amet esse voluptatem rem maxime illo, animi optio voluptates voluptate quis.',
        state: 'images/assets/icon-server-warning.svg',
      },
      {
        isChecked: false,
        title: 'Risus Pharetra Euismod',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur minus unde sed necessitatibus quia eum nihil, obcaecati facere? Assumenda corporis a nobis corrupti temporibus quia dolorem, voluptas rem? Placeat.',
        state: 'images/assets/icon-server-green.svg',
      },
      {
        isChecked: false,
        title: 'Fusce Adipiscing Elit Mattis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, necessitatibus. Pariatur, non vero voluptate voluptas nesciunt ipsa nostrum omnis dolorum molestias doloremque itaque, ducimus impedit fuga obcaecati amet nulla quos.',
        state: 'images/assets/icon-server-green.svg',
      },
      {
        isChecked: false,
        title: 'Quam Consectetur Ipsum Fermentum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias sit, soluta! Iure placeat a repellat vitae obcaecati, nobis consequatur tempora vel. Illo placeat obcaecati fugit libero quasi eius ipsam!',
        state: 'images/assets/icon-server-red.svg',
      },
      {
        isChecked: false,
        title: 'Ornare Vulputate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sequi optio neque explicabo autem dolor accusantium dolorum fugiat eaque quod voluptas, quisquam iure, sapiente itaque sit dicta modi iusto ratione.',
        state: 'images/assets/icon-server-orange.svg',
      },
      {
        isChecked: false,
        title: 'Sit Tellus Vehicula',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci praesentium eligendi vitae totam reiciendis reprehenderit nihil autem! Numquam amet esse voluptatem rem maxime illo, animi optio voluptates voluptate quis.',
        state: 'images/assets/icon-server-warning.svg',
      },
      {
        isChecked: false,
        title: 'Risus Pharetra Euismod',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur minus unde sed necessitatibus quia eum nihil, obcaecati facere? Assumenda corporis a nobis corrupti temporibus quia dolorem, voluptas rem? Placeat.',
        state: 'images/assets/icon-server-green.svg',
      },

    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:WidgetsCtrl
 * @description
 * # TWidgetsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('WidgetsCtrl', ["$scope", "$rootScope", "$routeParams", function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-widgets';
    $rootScope.bodyClass = 'layout-widgets';
    $rootScope.colorId = $routeParams.colorId;

  }]);

'use strict';

/**
 * @ngdoc downloadableIcon
 * @name designkitApp.directive:downloadableIcon
 * @restrict E
 * @param {String} src The URL of the SVG to be downloaded.
 * @param {String} name The name (title) of the image.
 * @param {String} color The hex color (minus the leading #) to be applied to every `path`
 * within the SVG.
 * @param {String} colorName The name of the color, will be appended to the download file
 * name. Will be lower-cases, and spaces converted to hyphens.
 * @description Download an SVG image and insert it into the document as a child of this
 * element. This then sets the `fill` attribute of all `path` elements to the color given,
 * and links to download the image with the new color as an SVG or a PNG.
 */
angular.module('designkitApp').directive('downloadableIcon', ["$http", function($http) {
  var pngWidth = 256;

  return {
    restrict: 'E',
    scope: {
      src: '@',
      name: '@',
      color: '@',
      colorName: '@'
    },
    template: '<div class="store-preview-icon"></div><span class="store-icon-text"><span class="store-icon-name">{{ name }}</span><span class="store-download-link"><a class="store-download svg">SVG</a><a class="store-download png">PNG</a></span></span>',
    link: function(scope, element) {
      var pngLink = element.find('.png'),
          svgLink = element.find('.svg'),
          imageWrapper = element.find('div');

      function loadImage() {
        $http({method: 'GET', url: scope.src, cache: true}).success(function(svg) {
          var svgDataUri,
              svgDimensions,
              canvasHeight,
              colorFilename = scope.colorName.replace(/ +/, '-').toLowerCase(),
              filename = _.last(scope.src.split('/')).split('.')[0] + '-' + colorFilename,
              image = new Image(),
              canvas = document.createElement('canvas');

          imageWrapper.html(svg);
          imageWrapper.find('path').attr('fill', '#' + scope.color);

          svgDimensions = _.map(imageWrapper.find('svg')[0].getAttribute('viewBox').split(' '), parseFloat);
          canvasHeight = svgDimensions[3] * pngWidth / svgDimensions[2];
          canvas.width = pngWidth;
          canvas.height = canvasHeight;

          image.onload = function() {
            canvas.getContext('2d').drawImage(image, 0, 0, pngWidth, canvasHeight);

            pngLink.attr('href', canvas.toDataURL('image/png'));
            pngLink.attr('download', filename + '.png');
          };

          svgDataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(imageWrapper.html());
          image.src = svgDataUri;

          svgLink.attr('href', svgDataUri);
          svgLink.attr('download', filename + '.svg');
        });
      }

      scope.$watch('color', loadImage);

      if (!imageWrapper.find('svg')[0]) { loadImage(); }
    }
  };
}]);

'use strict';

/**
 * @ngdoc selectAll
 * @name designkitApp.directive:selectAll
 * @restrict E
 * @param {Array} collection A collection of rows that this manages.
 * @param {String} attribute The name of the attribute in the row that holds selection state.
 * @description Manages a selectAll checkbox.
 */
angular.module('designkitApp').directive('selectAll', function() {
  return {
    restrict: 'E',
    template: '<div class="checkbox_wrap">' +
      '<input type="checkbox" id="checkbox-all-{{id}}" />' +
      '<label for="checkbox-all-{{id}}" class="checkbox_label"><span class="sr-only">{{label}}</span></label>' +
     '</div>',
    scope: {
      collection: '=',
      attribute: '@'
    },
    link: function(scope, element) {
      scope.id = Math.floor(10000 * Math.random());
      var checkbox = element.find('input');
      checkbox.on('change', function() {
        scope.$apply(function() {
          if (checkbox.prop('checked')) {
            scope.collection.forEach(function(el) {
              el[scope.attribute] = true;
            });
          } else {
            scope.collection.forEach(function(el) {
              el[scope.attribute] = false;
            });
          }
        });
      });
      scope.$watch('collection', function(collection) {
        var all = true,
            some = false;
        collection.forEach(function(element) {
          if (element[scope.attribute]) {
            some = true;
          } else {
            all = false;
          }
        });
        if (all) {
          element.find('div').removeClass('checkbox_indeterminate');
          scope.label = 'Select none';
          checkbox.prop('checked', true).prop('indeterminate', false);
        } else if (some) {
          element.find('div').addClass('checkbox_indeterminate');
          scope.label = 'Select all';
          checkbox.prop('checked', false).prop('indeterminate', true);
        } else {
          element.find('div').removeClass('checkbox_indeterminate');
          scope.label = 'Select all';
          checkbox.prop('checked', false).prop('indeterminate', false);
        }
      }, true);
    }
  };
});

'use strict';

$(document).ready(function() {
  $('input:checkbox').change(function(){
     if($(this).is(':checked')) {
       $(this).parent().addClass('checked');
     } else {
       $(this).parent().removeClass('checked');
     }
  });
});

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('LandingCtrl', ["$scope", "$rootScope", "$timeout", function ($scope, $rootScope, $timeout) {
    $scope.cards = [{
      id: '1',
      title: 'Logos',
      details: 'Main logo, product logos and product marks'
    }, {
      id: '2',
      title: 'Colors',
      details: 'Branding, primary and accent colors'
    }, {
      id: '3',
      title: 'Typography',
      details: 'Base typography and hierarchy'
    }, {
      id: '4',
      title: 'Icons',
      details: 'Principal system icons',
    }, {
      id: '5',
      title: 'Tables',
      details: 'Basic table UI'
    }, {
      id: '6',
      title: 'Components',
      details: 'Reusable UI for buttons, forms, labels, etc'
    }, {
      id: '7',
      title: 'Patterns',
      details: 'Application layouts and patterns'
    }];

    $scope.sectionClass = 'section-landing';
    $rootScope.bodyClass = 'layout-landing';

    // Landing page delay
    $timeout(function () {
        $scope.sectionClass = 'animate-loaded';
    }, 100);


  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ElementalIconsCtrl
 * @description
 * # ElementalIconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ElementalIconsCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.colors = [{
      name: 'Grey',
      hex: '57626C'
    }, {
      name: 'Blue',
      hex: '2390F7'
    }, {
      name: 'Text',
      hex: '76899A'
    }, {
      name: 'Green',
      hex: '80C11A'
    }, {
      name: 'Sith',
      hex: '30373C'
    }, {
      name: 'White',
      hex: 'FFFFFF',
      class: 'blue-background'
    }];

    $scope.colors.selected = $scope.colors[0];

    $scope.icons = [{
      id: 1.1,
      item: {
        name: 'Arrow - Right',
        src: 'images/ignore/icon-arrow-right.svg',
      }
    }, {
      id: 1.2,
      item: {
        name: 'Arrow - Left',
        src: 'images/ignore/icon-arrow-left.svg',
      }
    }, {
      id: 1.3,
      item: {
        name: 'Arrow - Up',
        src: 'images/ignore/icon-arrow-up.svg',
      }
    }, {
      id: 1.4,
      item: {
        name: 'Arrow - Down',
        src: 'images/ignore/icon-arrow-down.svg',
      }
    }, {
      id: 2,
      item: {
        name: 'Calendar',
        src: 'images/ignore/icon-calendar.svg',
      }
    }, {
      id: 3,
      item: {
        name: 'Caret',
        src: 'images/ignore/icon-caret.svg',
      }
    }, {
      id: 4,
      item: {
        name: 'Close',
        src: 'images/ignore/icon-close.svg',
      }
    }, {
      id: 5,
      item: {
        name: 'Download',
        src: 'images/ignore/icon-download.svg',
      }
    }, {
      id: 6,
      item: {
        name: 'Expand',
        src: 'images/ignore/icon-expand.svg',
      }
    }, {
      id: 7,
      item: {
        name: 'Export',
        src: 'images/ignore/icon-export.svg',
      }
    }, {
      id: 8,
      item: {
        name: 'External',
        src: 'images/ignore/icon-external.svg',
      }
    }, {
      id: 9,
      item: {
        name: 'Info',
        src: 'images/ignore/icon-info.svg',
      }
    }, {
      id: 10,
      item: {
        name: 'Link',
        src: 'images/ignore/icon-link.svg',
      }
    }, {
      id: 11,
      item: {
        name: 'Markdown',
        src: 'images/ignore/icon-markdown.svg',
      }
    }, {
      id: 12,
      item: {
        name: 'Edit',
        src: 'images/ignore/icon-edit.svg',
      }
    }, {
      id: 13,
      item: {
        name: 'Plus Open',
        src: 'images/ignore/icon-plus-open.svg',
      }
    }, {
      id: 14,
      item: {
        name: 'Refresh',
        src: 'images/ignore/icon-refresh.svg',
      }
    }, {
      id: 15,
      item: {
        name: 'Search',
        src: 'images/ignore/icon-search.svg',
      }
    }, {
      id: 16,
      item: {
        name: 'Share',
        src: 'images/ignore/icon-share.svg',
      }
    }, {
      id: 17,
      item: {
        name: 'Trash',
        src: 'images/ignore/icon-trash.svg',
      }
    }, {
      id: 18,
      item: {
        name: 'Docs',
        src: 'images/ignore/icon-docs.svg',
      }
    }, {
      id: 19,
      item: {
        name: 'Check',
        src: 'images/ignore/icon-check.svg',
      }
    }, {
      id: 20,
      item: {
        name: 'Sort - Unsorted',
        src: 'images/ignore/icon-sort-unsorted.svg',
      }
    }, {
      id: 21,
      item: {
        name: 'Sort - Up',
        src: 'images/ignore/icon-sort-up.svg',
      }
    }, {
      id: 22,
      item: {
        name: 'Sort - Down',
        src: 'images/ignore/icon-sort-down.svg',
      }
    }, {
      id: 23,
      item: {
        name: 'API',
        src: 'images/ignore/icon-api.svg',
      }
    }, {
      id: 24,
      item: {
        name: 'Attachment',
        src: 'images/ignore/icon-attachment.svg',
      }
    }, {
      id: 25,
      item: {
        name: 'Back',
        src: 'images/ignore/icon-back-button.svg'
      }
    }, {
      id: 26,
      item: {
        name: 'Check',
        src: 'images/ignore/icon-checkmark-circled.svg'
      }
    }, {
      id: 27,
      item: {
        name: 'Cloud',
        src: 'images/ignore/icon-cloud.svg'
      }
    }, {
      id: 28,
      item: {
        name: 'Email',
        src: 'images/ignore/icon-email.svg'
      }
    }, {
      id: 29,
      item: {
        name: 'Phone',
        src: 'images/ignore/icon-phone.svg'
      }
    }, {
      id: 30,
      item: {
        name: 'Copy',
        src: 'images/ignore/icon-copy.svg'
      }
    }, {
      id: 31,
      item: {
        name: 'Error',
        src: 'images/ignore/icon-error.svg'
      }
    }, {
      id: 32,
      item: {
        name: 'Filter',
        src: 'images/ignore/icon-filter.svg'
      }
    }, {
      id: 33,
      item: {
        name: 'Hide',
        src: 'images/ignore/icon-hide.svg'
      }
    }, {
      id: 34,
      item: {
        name: 'Home',
        src: 'images/ignore/icon-home.svg'
      }
    }, {
      id: 35,
      item: {
        name: 'Help Info',
        src: 'images/ignore/icon-info-help.svg'
      }
    }, {
      id: 36,
      item: {
        name: 'Beta',
        src: 'images/ignore/icon-beta.svg'
      }
    }, {
      id: 37,
      item: {
        name: 'Save',
        src: 'images/ignore/icon-save.svg'
      }
    }, {
      id: 38,
      item: {
        name: 'Read Only',
        src: 'images/ignore/icon-read-only.svg'
      }
    }, {
      id: 39,
      item: {
        name: 'Secure',
        src: 'images/ignore/icon-secure.svg'
      }
    }, {
      id: 40,
      item: {
        name: 'Caret 2',
        src: 'images/ignore/icon-caret-2.svg'
      }
    }, {
      id: 41,
      item: {
        name: 'Log Out',
        src: 'images/ignore/icon-logout.svg'
      }
    }, {
      id: 42,
      item: {
        name: 'Gear',
        src: 'images/ignore/icon-gear.svg'
      }
    }, {
      id: 43,
      item: {
        name: 'Folder',
        src: 'images/ignore/icon-folder.svg'
      }
    }, {
      id: 44,
      item: {
        name: 'Key',
        src: 'images/ignore/icon-key.svg'
      }
    }, {
      id: 45,
      item: {
        name: 'Book',
        src: 'images/ignore/icon-book.svg'
      }
    }, {
      id: 46,
      item: {
        name: 'Brush',
        src: 'images/ignore/icon-brush.svg'
      }
    }, {
      id: 47,
      item: {
        name: 'Cloud 2',
        src: 'images/ignore/icon-cloud-2.svg'
      }
    }, {
      id: 48,
      item: {
        name: 'User',
        src: 'images/ignore/icon-user.svg'
      }
    }, {
      id: 49,
      item: {
        name: 'List View',
        src: 'images/ignore/icon-list-view.svg'
      }
    }, {
      id: 50,
      item: {
        name: 'Card View',
        src: 'images/ignore/icon-card-view.svg'
      }
    }, {
      id: 51,
      item: {
        name: 'Ticket',
        src: 'images/ignore/icon-ticket.svg'
      }
    }, {
      id: 52,
      item: {
        name: 'Feedback',
        src: 'images/ignore/icon-feedback.svg'
      }
    }, {
      id: 52,
      item: {
        name: 'Admin',
        src: 'images/ignore/icon-admin.svg'
      }
    }, {
      id: 53,
      item: {
        name: 'Lock',
        src: 'images/ignore/icon-lock.svg'
      }
    }];

    $scope.sectionClass = 'section-icons';
    $rootScope.bodyClass = 'layout-icons';
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ActionablelIconsCtrl
 * @description
 * # ActionablelIconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ActionablelIconsCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'layout-sprites';

    $scope.productNames = [{
      name: 'Cloud Analytics'
    }, {
      name: 'Cloud Management'
    }, {
      name: 'Self Service'
    }];

    $scope.productNames.selected = null;

    $scope.spriteGroups = [{
        group: {
          name: 'Actions',
          description: 'Basic action buttons',
          file_type: 'SVG'
        },
        sprites: [{
          name: 'Delete',
          src: 'images/sprites/action/delete.svg',
          description: 'Delete an item or component.'
        }, {
          name: 'Lock',
          src: 'images/sprites/action/padlock-closed.svg',
          description: 'Indicates the RightScale component (e.g. Deployment) is locked. Clicking it will set status to unlocked, allowing the component and its children to be terminated and deleted.'
        }, {
          name: 'Unlock',
          src: 'images/sprites/action/padlock-open.svg',
          description: 'Indicates the RightScale component (e.g. Deployment) is unlocked. Clicking it will set status to locked, preventing the component and its children from being terminated or deleted.'
        }, ]
      },

    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:RepresentativeIconsCtrl
 * @description
 * # RepresentativeIconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('RepresentativeIconsCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'layout-sprites';

    $scope.productNames = [{
      name: 'Cloud Analytics'
    }, {
      name: 'Cloud Management'
    }, {
      name: 'Self Service'
    }];

    $scope.productNames.selected = null;
    $scope.spriteGroups = [

      {
        group: {
          name: 'Bookmarks',
          description: 'The following icons help categorize your bookmarks.  Bookmarks are displayed in the left pane (unless the pane is collapsed).',
          file_type: 'SVG'
        },
        sprites: [{
          name: 'Server',
          src: 'images/sprites/bookmarks/server_bm.svg'
        }, {
          name: 'Deployment',
          src: 'images/sprites/bookmarks/deployments_bm.svg'
        }, {
          name: 'Instance',
          src: 'images/sprites/bookmarks/instances_bm.svg'
        }, {
          name: 'Server Template',
          src: 'images/sprites/bookmarks/server_templates_bm.svg'
        }, {
          name: 'Server Array',
          src: 'images/sprites/bookmarks/server_array_bm.svg'
        }]
      }, {
        group: {
          name: 'Clouds',
          description: 'The following icons are for the cloud providers supported by RightScale',
          file_type: 'PNG'
        },
        sprites: [{
          name: 'Amazon',
          src: 'images/sprites/clouds/amazon.png'
        }, {
          name: 'Azure',
          src: 'images/sprites/clouds/azure.png'
        }, {
          name: 'Cloudstack',
          src: 'images/sprites/clouds/cloudstack.png'
        }, {
          name: 'Datapipe',
          src: 'images/sprites/clouds/datapipe.png'
        }, {
          name: 'Eucalyptus',
          src: 'images/sprites/clouds/eucalyptus.png'
        }, {
          name: 'Google',
          src: 'images/sprites/clouds/google.png'
        }, {
          name: 'HP',
          src: 'images/sprites/clouds/hp.png'
        }, {
          name: 'Openstack',
          src: 'images/sprites/clouds/openstack.png'
        }, {
          name: 'Rackspace',
          src: 'images/sprites/clouds/rackspace.png'
        }, {
          name: 'Softlayer',
          src: 'images/sprites/clouds/softlayer.png',
        }]
      }, {
        group: {
          name: 'RightScale Appliances',
          description: 'These icons are for RightScale products',
          file_type: 'SVG'
        },
        sprites: [{
          name: 'Private Cloud',
          src: 'images/sprites/clouds/private-cloud.svg'
        },
        {
          name: 'Universal Cloud Appliance',
          src: 'images/sprites/clouds/uca.svg'
        }]
      }, {
        group: {
          name: 'Product Logos',
          description: 'Logos of supported cloud providers',
          file_type: 'SVG'
        },
        sprites: [{
          name: 'Cloud Analytics',
          src: 'images/sprites/product_logos/cloud_analytics.svg'
        }, {
          name: 'Cloud Management',
          src: 'images/sprites/product_logos/cloud_management.svg'
        }, {
          name: 'Self Service',
          src: 'images/sprites/product_logos/self_service.svg'
        }]
      }, {
        group: {
          name: 'Status',
          description: 'Standard status icons are defined below.  Most icons are static, but a few do change the display in the Dashboard, yet do not take action with respect to any cloud asssets.',
          file_type: 'SVG'
        },
        sprites: [{
          name: 'Alerts Untriggered / Active Instances',
          src: 'images/sprites/info/circle-green.svg',
          description: 'Indicates that no alerts are currently triggered. Also indicates the number of active instances in an array.'
        }, {
          name: 'Alerts Triggered',
          src: 'images/sprites/info/circle-red.svg',
          description: 'Indicates that one or more alerts are currently triggered.'
        }, {
          name: 'Alert Circle Orange',
          src: 'images/sprites/info/circle-orange.svg',
          description: 'Currently unused. May be needed for additional alert status.'
        }, {
          name: 'Alert Circle Blue',
          src: 'images/sprites/info/circle-blue.svg',
          description: 'Currently unused. May be needed for additional alert status.'
        }, {
          name: 'Alert Square Green',
          src: 'images/sprites/info/square-green.svg',
          description: 'Currently unused. May be needed for additional alert status.'
        }, {
          name: 'Alert Square Orange',
          src: 'images/sprites/info/square-orange.svg',
          description: 'Indicates that a server or instance is in the stopped or provisioned state.'
        }, {
          name: 'Offline',
          src: 'images/sprites/info/square-red.svg',
          description: 'A Server whose state is offline, or a server array which has no active instances.'
        }, {
          name: 'Booting',
          src: 'images/sprites/info/arrow-up-green.svg',
          description: 'An instance has been launched, and its current state is booting.'
        }, {
          name: 'Pending',
          src: 'images/sprites/info/arrow-up-orange.svg',
          description: 'An instance has been launched, and its current state is pending.'
        }, {
          name: 'Decommissioning',
          src: 'images/sprites/info/arrow-down-green.svg',
          description: 'A Server is in the decommissioning state.'
        }, {
          name: 'Instance Arrow Down Orange',
          src: 'images/sprites/info/arrow-down-orange.svg',
          description: 'Currently unused. May be needed for additional instance status.'
        }, {
          name: 'Warning',
          src: 'images/sprites/info/warning.svg',
          description: 'Indicates that a component is in an error or warning state. Hover over the icon to bring up a tooltip with additional details.'
        }]
      },
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:PatternsCtrl
 * @description
 * # PatternsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('PatternsCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.patterns = [
      {
        id: 1,
        group: {
          name: 'Header',
          description: 'The product header includes the main and product logos and our product dropdown trigger on the left. The right side content is based on the product, and may include global navigation, search, and support information.',
          example: 'images/ignore/pattern-header-1.png',
          reference: 'Self-Service, Cloud Analytics, Cloud Management',
          border: 'border-light'
        }
      },
      {
        id: 2,
        group: {
          name: 'Title area',
          description: 'A common pattern used to group the section title and any secondary navigation. The title area contains the page/section title, optional description, secondary navigation, and breadcrumbs. It also can contain primary buttons such as "Create" or "Publish".',
          example: 'images/ignore/pattern-titlearea.png',
          reference: 'Self-Service, Cloud Analytics, Cloud Management',
          border: 'border-light'
        }
      },
      {
        id: 3,
        group: {
          name: 'Activity stream',
          description: 'Activity streams are used to summerize time-ordered activity in a context. Each item in the stream may link to additional information about the item.',
          example: 'images/ignore/pattern-activity.png',
          reference: 'Self-Service'
        }
      },
      {
        id: 4,
        group: {
          name: 'Wizard',
          description: 'Wizard views are used when the user needs to move through a process with multiple steps.',
          example: 'images/ignore/pattern-wizard.png',
          reference: 'Cloud Management',
          border: 'border-light'
        }
      }
    ];

    $scope.sectionClass = 'section-patterns';
    $rootScope.bodyClass = 'layout-patterns';

  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:SpritesCtrl
 * @description
 * # SpritesCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('SpritesCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'layout-sprites';

    $scope.productNames = [
      {
        name: 'Cloud Analytics'
      },
      {
        name: 'Cloud Management'
      },
      {
        name: 'Self Service'
      }
    ];

    $scope.productNames.selected = null;

    $scope.spriteGroups = [
      {
        group: {
          name: 'Actions',
          description: 'Basic action buttons',
          fileType:'SVG'
        },
        sprites: [
          {
            name: 'Delete',
            src: 'images/sprites/action/delete.svg',
            description: 'Delete an item or component.'
          },
          {
            name: 'Lock',
            src: 'images/sprites/action/padlock-closed.svg',
            description: 'Indicates the RightScale component (e.g. Deployment) is locked. Clicking it will set status to unlocked, allowing the component and its children to be terminated and deleted.'
          },
          {
            name: 'Unlock',
            src: 'images/sprites/action/padlock-open.svg',
            description: 'Indicates the RightScale component (e.g. Deployment) is unlocked. Clicking it will set status to locked, preventing the component and its children from being terminated or deleted.'
          },
        ]
      },
      {
        group: {
          name: 'Bookmarks',
          description: 'The following icons help categorize your bookmarks.  Bookmarks are displayed in the left pane (unless the pane is collapsed).',
          fileType:'SVG'
        },
        sprites: [
          {
            name: 'Server',
            src: 'images/sprites/bookmarks/server_bm.svg'
          },
          {
            name: 'Deployment',
            src: 'images/sprites/bookmarks/deployments_bm.svg'
          },
          {
            name: 'Instance',
            src: 'images/sprites/bookmarks/instances_bm.svg'
          },
          {
            name: 'Server Template',
            src: 'images/sprites/bookmarks/server_templates_bm.svg'
          },
          {
            name: 'Server Array',
            src: 'images/sprites/bookmarks/server_array_bm.svg'
          }
        ]
      },
      {
        group: {
          name: 'Clouds',
          description: 'The following icons are for the cloud providers supported by RightScale',
          fileType:'PNG'
        },
        sprites: [
          {
            name: 'Amazon',
            src: 'images/sprites/clouds/amazon.png'
          },
          {
            name: 'Azure',
            src: 'images/sprites/clouds/azure.png'
          },
          {
            name: 'Cloudstack',
            src: 'images/sprites/clouds/cloudstack.png'
          },
          {
            name: 'Datapipe',
            src: 'images/sprites/clouds/datapipe.png'
          },
          {
            name: 'Eucalyptus',
            src: 'images/sprites/clouds/eucalyptus.png'
          },
          {
            name: 'Google',
            src: 'images/sprites/clouds/google.png'
          },
          {
            name: 'HP',
            src: 'images/sprites/clouds/hp.png'
          },
          {
            name: 'Openstack',
            src: 'images/sprites/clouds/openstack.png'
          },
          {
            name: 'Rackspace',
            src: 'images/sprites/clouds/rackspace.png'
          },
          {
            name: 'Softlayer',
            src: 'images/sprites/clouds/softlayer.png'
          }
        ]
      },
      {
        group: {
          name: 'Product Logos',
          description: 'Logos of supported cloud providers',
          fileType:'SVG'
        },
        sprites: [
         {
            name: 'Cloud Analytics',
            src: 'images/sprites/product_logos/cloud_analytics.svg'
          },
          {
            name: 'Cloud Management',
            src: 'images/sprites/product_logos/cloud_management.svg'
          },
          {
            name: 'Self Service',
            src: 'images/sprites/product_logos/self_service.svg'
          }
        ]
      },
      {
        group: {
          name: 'Status',
          description: 'Standard status icons are defined below.  Most icons are static, but a few do change the display in the Dashboard, yet do not take action with respect to any cloud asssets.',
          fileType:'SVG'
        },
        sprites: [
          {
            name: 'Alerts Untriggered / Active Instances',
            src: 'images/sprites/info/circle-green.svg',
            description: 'Indicates that no alerts are currently triggered. Also indicates the number of active instances in an array.'
          },
          {
            name: 'Alerts Triggered',
            src: 'images/sprites/info/circle-red.svg',
            description: 'Indicates that one or more alerts are currently triggered.'
          },
          {
            name: 'Alert Circle Orange',
            src: 'images/sprites/info/circle-orange.svg',
            description: 'Currently unused. May be needed for additional alert status.'
          },
          {
            name: 'Alert Circle Blue',
            src: 'images/sprites/info/circle-blue.svg',
            description: 'Currently unused. May be needed for additional alert status.'
          },
          {
            name: 'Alert Square Green',
            src: 'images/sprites/info/square-green.svg',
            description: 'Currently unused. May be needed for additional alert status.'
          },
          {
            name: 'Alert Square Orange',
            src: 'images/sprites/info/square-orange.svg',
            description: 'Indicates that a server or instance is in the stopped or provisioned state.'
          },
          {
            name: 'Offline',
            src: 'images/sprites/info/square-red.svg',
            description: 'A Server whose state is offline, or a server array which has no active instances.'
          },
          {
            name: 'Booting',
            src: 'images/sprites/info/arrow-up-green.svg',
            description: 'An instance has been launched, and its current state is booting.'
          },
          {
            name: 'Pending',
            src: 'images/sprites/info/arrow-up-orange.svg',
            description: 'An instance has been launched, and its current state is pending.'
          },
          {
            name: 'Decommissioning',
            src: 'images/sprites/info/arrow-down-green.svg',
            description: 'A Server is in the decommissioning state.'
          },
          {
            name: 'Instance Arrow Down Orange',
            src: 'images/sprites/info/arrow-down-orange.svg',
            description: 'Currently unused. May be needed for additional instance status.'
          },
          {
            name: 'Warning',
            src: 'images/sprites/info/warning.svg',
            description: 'Indicates that a component is in an error or warning state. Hover over the icon to bring up a tooltip with additional details.'
          }
        ]
      },
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ComponentsCtrl
 * @description
 * # ComponentsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ComponentsCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-components';
    $rootScope.bodyClass = 'layout-components';

  }]);
