'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:PatternsCtrl
 * @description
 * # PatternsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('PatternsCtrl', function ($scope, $rootScope) {
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
      },
      {
        id: 5,
        group: {
          name: 'Radio Buttons',
          description: 'Radio buttons with labels : selected, unselected.',
          example: 'images/ignore/pattern-radio-buttons.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 6,
        group: {
          name: 'Warning message',
          description: 'Warning message displayed with info icon,text color #939182 and background color #FFF7E5. ',
          example: 'images/ignore/pattern-warning-message.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 7,
        group: {
          name: 'Warning message',
          description: 'Warning message displayed with info icon,text color #939182 and background color #FFF7E5. ',
          example: 'images/ignore/pattern-warning-message.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 8,
        group: {
          name: 'Data Table',
          description: 'Data Table with action buttons, search input, and selection count displayed the header',
          example: 'images/ignore/pattern-data-table.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 9,
        group: {
          name: 'Title Area Tabs',
          description: 'Tabs in title area to allow navigation between sections',
          example: 'images/ignore/pattern-title-area-tabs.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 10,
        group: {
          name: 'Drop Down Menu: Multi Select',
          description: 'Drop down menu with multi select checkmark items',
          example: 'images/ignore/pattern-drop-down-menu-1.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 11,
        group: {
          name: 'Drop Down Menu: Single Select',
          description: 'Drop down menu with single select, hover state over menu item shown',
          example: 'images/ignore/pattern-drop-down-menu-2.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 12,
        group: {
          name: 'Weekly schedule selection',
          description: 'Select days of the week, and the time to set a weekly schedule',
          example: 'images/ignore/pattern-weekly-schedule-selection.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 13,
        group: {
          name: 'Text Input',
          description: 'Text input box with Label, and instruction text',
          example: 'images/ignore/pattern-text-input.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 14,
        group: {
          name: 'Multi Select dropdown input',
          description: 'Text input box with option to select multiple options one by one. selected options get displayed as tags that can be removed by clicking on the x',
          example: 'images/ignore/pattern-multi-select-dropdown-input.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 15,
        group: {
          name: 'Tabs in modals and panels',
          description: '-',
          example: 'images/ignore/pattern-modal-panel-tab.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 16,
        group: {
          name: 'Markdown Support Card',
          description: 'Markdown help is displayed as a list of formatted examples',
          example: 'images/ignore/pattern-markdown-support-card.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 17,
        group: {
          name: 'Text Area Input',
          description: 'text area inputs have a fixed width, user-adjustable height that is set to a minimum, of 5 lines of text',
          example: 'images/ignore/pattern-text-area.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 18,
        group: {
          name: 'Dropdown Selection input',
          description: 'Dropdown Selection uses browser default dropdown menus',
          example: 'images/ignore/pattern-dropdown-selection-input.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 19,
        group: {
          name: 'Date Picker',
          description: 'Date Selection with an option for "no end date" ',
          example: 'images/ignore/pattern-date-picker.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      },
      {
        id: 20,
        group: {
          name: 'Collapsible Card',
          description: 'Data is displayed in two colums in a card that can be collapsed to show just the header',
          example: 'images/ignore/pattern-collapsible-card.png',
          reference: 'Self-Service',
          border: 'border-light'
        }
      }
    ];

    $scope.sectionClass = 'section-patterns';
    $rootScope.bodyClass = 'layout-patterns';

  });
