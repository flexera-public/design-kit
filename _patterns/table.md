---
layout: patterns
title:  "Table"
categories: UI
slug: patterns
weight: 2

description: Tables are used to display lists of entities in the system. These entities may have significant amounts of metadata, which are represented in columns. Users may be able to take specific actions on one or more entities.
examples:
  - title: Self-Service table
    file: table.png
    description: Example table from the Self-Service Designer
    annotations:
    - title: Selected Actions Menu
      description: Contains a list of actions that will be run on the rows which are checked. Actions which can only be taken on a single resource should be disabled when multiple resources are selected.
      top: 2%
      left: "-2%"
    - title: Global Action Buttons
      description: Actions that are distinct from any individual entity(ies) represented in the tab, such as 'Add/New' or 'Refresh'. Each action is represented by a button.
      top: 2%
      left: 37%
    - title: Filter Category Menu
      description: Client-side filter options relating to specific column content, such as 'Active' or 'Authored by me'.
      top: 12%
      left: "-1"
    - title: Filter Text Box
      description: Client-side filter that typically matches every column for equivalent sub-strings.
      top: 12%
      left: 28%
    - title: Column Selector Menu
      description: Shows a list of all columns in a dialog. Columns can be toggled on and off.
      top: 12%
      left: 80%
    - title: Individual Action Menu
      description: Clicking the icon will show the same action menu as the selected sctions menu, but for for the associated row's object.
      top: 38%
      left: 98%
  - title: Self-Service table column menu
    file: column-menu-sm.png
    description: Column menu expanded
    annotations:
    - title: Column checkbox
      description: If clicked, immediately toggle the visibility of the column in the table.
      top: 22%
      left: 2%
---
