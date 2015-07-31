'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:TablesCtrl
 * @description
 * # TablesCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('TablesCtrl', function ($scope, $rootScope) {
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
  });
