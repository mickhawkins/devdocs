---
title: Bootstrap 5 migration
tags:
- Bootstrap
---

<!-- markdownlint-disable no-inline-html -->

Bootstrap 5 has evolved with new features, improvements, and changes in its latest version, and along with this some breaking changes also come, which need to be addressed in the migration process.

:::info

See more about Bootstrap 5 breaking changes in the [official documentation](https://getbootstrap.com/docs/5.0/migration/).

:::

To achieve a smoother process and facilitate the moment of the update, the migration has been divided into different steps:

1. **PopperJS upgrade**: This is the first step in the migration process, as Bootstrap 5 requires PopperJS version 2. This step is about upgrading the current PopperJS version to version 2. Because we still need PopperJS version 1 for Bootstrap 4 both versions will co-exist until all usages are migrated to v2.
2. **SCSS Deprecation process**: A SCSS deprecation process will be needed for the cleanup after BS5 upgrade. More details about it in [SCSS deprecation](/general/development/policies/deprecation/scss-deprecation).
3. **Refactoring BS4 features dropped in BS5**: This step is about refactoring the current Bootstrap 4 features that will be deprecated or dropped in its version 5 and they can be replaced with current codebase.
4. **Create a BS5 "bridge"**: Some simple breaking changes could be also addressed in advance creating a BS5 "bridge". With small additions to this "bridge", we can refactor in advance the occurrences in the codebase for some dropped features in BS5.
5. **BS5 upgrade**: Upgrade the current Bootstrap 4 version to version 5.
6. **BS4 backwards-compatibility layer**: Alongside the update, a new backwards-compatibility layer will also be created, and some of the Bootstrap 4 syntax will still work until the final deprecation. This will help third-party plugins to be updated in a more gradual way.
7. **Final deprecation**

:::note

The migration process will be done in a gradual way, and the steps will be executed in different phases. The first phase with the PopperJS upgrade, the SCSS deprecation process and the refactoring will be included in Moodle 4.4. The other steps will be ready in following releases. This documentation page will be updated accordingly with the process.

:::

## Refactoring BS4 features dropped in BS5

<Since version="4.4" issueNumber="MDL-79914" />

Some of the Bootstrap 4 classes will be deprecated or dropped in its version 5. To prepare for this, some of the current Bootstrap 4 classes usages have been replaced with version 5 compatible classes. Doing these refactors in advance, will help us to upgrade to Bootstrap 5 in the future.

### Badges

- Badge colour class helpers `.badge-*` have been replaced with background utilities (use `.bg-primary` instead of `.badge-primary`) combined with the corresponding text colour classes (`.text-dark` or `.text-white`) to meet accessibility contrast.
- The `.badge-pill` class has been replaced with `.rounded-pill`

<InvalidExample title="Don't">

```html
<span class="badge badge-danger badge-pill">Error badge</span>
```

</InvalidExample>

<ValidExample title="Do">

```html
<span class="badge bg-danger text-white rounded-pill">Error badge</span>
```

</ValidExample>

### Media

The `.media` component has been replaced with utility classes.

<InvalidExample title="Don't">

```html
<div class="media">
    <div class="media-left">
        [...]
    </div>
    <div class="media-body">
        [...]
    </div>
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="d-flex">
    <div class="flex-shrink-0">
        [...]
    </div>
    <div class="flex-grow-1 ml-3">
        [...]
    </div>
</div>
```

</ValidExample>

### Mixins

The following previously deprecated mixins will be dropped in BS5, so they can be refactored:

- hover, hover-focus, plain-hover-focus and hover-focus-active
- float-left, float-right and float-none
- nav-divider
- img-retina
- text-hide
- invisible
- form-control-focus
- text-emphasis-variant
- size
- make-container-max-widths
- g-variant and bg-gradient-variant

<InvalidExample title="Don't">

```css
.collapse-list-item {
    padding: $collapse-list-item-padding-y $collapse-list-item-padding-x;
    @include hover-focus() {
        background-color: $collapse-list-item-hover-bg;
        border-color: $collapse-list-item-hover-border;
    }
}
```

</InvalidExample>

<ValidExample title="Do">

```css
.collapse-list-item {
    padding: $collapse-list-item-padding-y $collapse-list-item-padding-x;
    &:hover,
    &:focus {
        background-color: $collapse-list-item-hover-bg;
        border-color: $collapse-list-item-hover-border;
    }
}
```

</ValidExample>

### Forms

- The `.form-group` helper class has been replaced with margins.
- The `.form-inline` helper class has been replaced with utility classes.

<InvalidExample title="Don't">

```html
<form class="form-inline">
    <div class="form-group">
        [...]
    </div>
</form>
```

</InvalidExample>

<ValidExample title="Do">

```html
<form class="d-flex flex-wrap align-items-center">
    <div class="mb-3">
        [...]
    </div>
</form>
```

</ValidExample>

### Card decks

The `.card-deck` helper class has been replaced with utility classes.

<InvalidExample title="Don't">

```html
<div class="card-deck">
    <div class="card">
        [...]
    </div>
    <div class="card">
        [...]
    </div>
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="row row-cols-1 row-cols-sm-2">
    <div class="col">
        <div class="card">
            [...]
        </div>
    </div>
    <div class="col">
        <div class="card">
            [...]
        </div>
    </div>
</div>
```

</ValidExample>

## Create a BS5 "bridge"

<Since version="4.5" issueNumber="MDL-79917" />

Some simple breaking changes could be also addressed in advance creating a BS5 "bridge". With small additions to this "bridge", we can refactor in advance the occurrences in the codebase for some dropped or changed features in BS5.

A new SCSS file `bs5-bridge.scss` has been created in the `theme/boost/scss/moodle` folder. This file will contain the necessary changes to make the codebase compatible with Bootstrap 5.

:::info Example of a bridge in `bs5-bridge.scss`

```css
/* In Bootstrap 5 the .no-gutters class has been replaced with .g-0, so we can
add a new class in the bridge file to make the codebase compatible with BS5. */
.g-0 {
    @extend .no-gutters;
}
```

:::

### No gutters

The `.no-gutters` grid class has been replaced with `.g-0`.

<InvalidExample title="Don't">

```html
<div class="row no-gutters">
    <div class="col-6">[...]</div>
    <div class="col-6">[...]</div>
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="row g-0">
    <div class="col-6">[...]</div>
    <div class="col-6">[...]</div>
</div>
```

</ValidExample>

### Close button

The `.close` class has been replaced with `.btn-close`.

<InvalidExample title="Don't">

```html
<div class="alert alert-warning alert-dismissible" role="alert">
  I'm an alert.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="alert alert-warning alert-dismissible" role="alert">
  I'm an alert.
  <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

</ValidExample>

### Directional utilities

Several utilities have been renamed to use logical property names instead of directional ones.

- Renamed .float-left and .float-right to .float-start and .float-end.
- Renamed .border-left and .border-right to .border-start and .border-end.
- Renamed .rounded-left and .rounded-right to .rounded-start and .rounded-end.
- Renamed .ml-* and .mr-* to .ms-* and .me-*.
- Renamed .pl-* and .pr-* to .ps-* and .pe-*.
- Renamed .text-left and .text-right to .text-start and .text-end.

<InvalidExample title="Don't">

```html
<div class="ml-3 pr-sm-3">
    <div class="border-left text-left">[...]</div>
    <div class="float-right mr-auto">[...]</div>
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="ms-3 pe-sm-3">
    <div class="border-start text-start">[...]</div>
    <div class="float-end me-auto">[...]</div>
</div>
```

</ValidExample>

### Theme color level

In Bootstrap 4.x we used a function called `theme-color-level()` which was removed in Bootstrap 5. The prototype of the function was:

:::info Previous version using `theme-color-level()`

```css
@function theme-color-level($colorname, $level) {
    [...]
}
[...]
theme-color-level('primary', 1);
```

:::

The replacement is now `shift-color()`. This function is used to shift a color by a percentage (weight) of shades.
So, two major difference in the new version:

- we use the color definition instead of the color name
- we use percentages instead of levels.

:::info Current version using `shift-color()`

```css
@function shift-color($color, $weight) {
   [...]
}
[...]
shift-color($primary, 10%);
```

:::

As we transitioned from using levels to percentages, the parameters have changed.
So instead of working with numbers (1 to 11), we now use percentages.
To simplify this transition, Bootstrap 5 has established a new equivalency: each level increment from 1
now corresponds to a 10% shift.

:::info From absolute levels to percentages

For example, if a theme-color-level was previously set to a value of 1, it will now be set to 10%.
A level of two will be adjusted by 20% and so on.

:::

We can use the following formula to convert the level to percentage:

<InvalidExample title="Don't">

```css
theme-color-level('primary', 1)
theme-color-level('primary', -2)
```

</InvalidExample>

<ValidExample title="Do">

```css
shift-color($primary, 10%);
shift-color($primary, -20%);
```

</ValidExample>

:::note
The `theme-color-level()` has been changed to `color-level()` and then subsequently removed and replaced by scale-color().
In the stable 5.0 the final decision was to adopt `shift-color()` so we will use this function in the bridge file.
:::

### Rounded classes

The `.rounded-sm` and `.rounded-lg` classes have been replaced with `.rounded-1` and `.rounded-3`.

<InvalidExample title="Don't">

```html
<div class="rounded-lg"> Rounded content </div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="rounded-3"> Rounded content </div>
```

</ValidExample>

### Screen reader utilities

"Screen reader" classes are now "visually hidden" classes.

- Renamed `.sr-only` and `.sr-only-focusable` to `.visually-hidden` and `.visually-hidden-focusable`.
- Renamed `sr-only()` and `sr-only-focusable()` mixins to `visually-hidden()` and `visually-hidden-focusable()`.

<InvalidExample title="Don't">

```html
<span class="sr-only sr-only-focusable">
    Visually hidden text
</span>
```

</InvalidExample>

<ValidExample title="Do">

```html
<span class="visually-hidden visually-hidden-focusable">
    Visually hidden text
</span>
```

</ValidExample>

<InvalidExample title="Don't">

```scss
.my-hidden-text {
    @include sr-only();
    @include sr-only-focusable();
}
```

</InvalidExample>

<ValidExample title="Do">

```scss
.my-hidden-text {
    @include visually-hidden();
    @include visually-hidden-focusable();
}
```

</ValidExample>

### Font utility classes

The `.font-weight-*` class has been replaced with `.fw-*` for brevity and consistency.
The `.font-italic` class has been replaced with `.fst-italic` for brevity and consistency.

<InvalidExample title="Don't">

```html
<span class="font-weight-bold font-italic">I'm a bold italic text</span>
```

</InvalidExample>

<ValidExample title="Do">

```html
<span class="fw-bold fst-italic">I'm a bold italic text</span>
```

</ValidExample>

## Bootstrap 5 upgrade

<Since version="5.0" issueNumber="MDL-75669" />

After **Refactoring BS4 features dropped in BS5** and **Create a BS5 "bridge"**, the remaining Bootstrap breaking changes will be addressed in the upgrade to Bootstrap 5.

The `bs5-bridge.scss` SCSS file will be removed as it will no longer be needed, and the Bootstrap library in theme_boost will be upgraded to version 5.3. After that the codebase will be fully compatible with Bootstrap 5.

### Refactor dropdowns positioning classes

Replace `.dropdown-menu-[left|right]` with `.dropdown-menu-[start|end]`.

<InvalidExample title="Don't">

```html
<div class="dropdown-menu dropdown-menu-right">
    [...]
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<div class="dropdown-menu dropdown-menu-end">
    [...]
</div>
```

</ValidExample>

### Refactor custom form elements

- `.custom-check` is now `.form-check`.
- `.custom-check.custom-switch` is now `.form-check.form-switch`.
- `.custom-select` is now `.form-select`.
- `.custom-file` and `.form-file` have been replaced by custom styles on top of `.form-control`.
- `.custom-range` is now `.form-range`.
- Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.

<InvalidExample title="Don't">

```html
<select name="outcome" class="custom-select"> [...] </select>

<div class="input-group">
    <input type="text" class="form-control"> [...] </input>
    <div class="input-group-append">
        <button type="submit" class="btn btn-primary search-icon">
            {{#pix}} a/search, core {{/pix}}
            <span class="visually-hidden">{{#str}} search, core {{/str}}</span>
        </button>
    </div>
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
<select name="outcome" class="form-select"> [...] </select>

<div class="input-group">
    <input type="text" class="form-control"> [...] </input>
    <button type="submit" class="btn btn-primary search-icon">
        {{#pix}} a/search, core {{/pix}}
        <span class="visually-hidden">{{#str}} search, core {{/str}}</span>
    </button>
</div>
```

</ValidExample>

### Refactor media query mixins

- `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than lg).
- In `media-breakpoint-between()` the second parameter also uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between sm and lg).

<InvalidExample title="Don't">

```css
// This will target viewports smaller than md.
@include media-breakpoint-down(sm) {
    [...]
}
```

</InvalidExample>

<ValidExample title="Do">

```css
// This will target viewports smaller than md.
@include media-breakpoint-down(md) {
    [...]
}
```

</ValidExample>

### Refactor BS5 data attributes

Data attributes for all JavaScript plugins are now namespaced to help distinguish Bootstrap functionality from our own code.

<InvalidExample title="Don't">

```html
// Tooltip.
<button class="btn btn-outline-secondary"
        type="button"
        data-toggle="tooltip"
        data-html="true"
        title="{{#str}} string_with_html, block_my_block {{/str}}"
>
    {{#pix}} i/info, core {{/pix}}
</button>

// Collapse.
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapsableContent" aria-expanded="false" aria-controls="collapseExample">
    Open the collapsable content
</button>
<div class="collapse" id="collapsableContent">
    [...]
</div>
```

</InvalidExample>

<ValidExample title="Do">

```html
// Tooltip.
<button class="btn btn-outline-secondary"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-html="true"
        title="{{#str}} string_with_html, block_my_block {{/str}}"
>
    {{#pix}} i/info, core {{/pix}}
</button>

// Collapse.
<button class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsableContent"
        aria-expanded="false"
        aria-controls="collapseExample"
>
    Open the collapsable content
</button>
<div class="collapse" id="collapsableContent">
    [...]
</div>
```

</ValidExample>

### Bootstrap 5 and Jquery

Bootstrap dropped jQuery dependency and rewrote plugins to be in regular JavaScript. This means that all the jQuery Bootstrap-related code in the Moodle codebase has been rewritten in vanilla JavaScript.

<InvalidExample title="Don't">

```js
import $ from 'jquery';

$(document).on('shown shown.bs.tab', function(e) {
    [...]
    $('#my-dropdown').dropdown('toggle');
});
```

</InvalidExample>

<ValidExample title="Do">

```js
import Dropdown from 'theme_boost/bootstrap/dropdown';
document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
    tab.addEventListener('shown.bs.tab', (e) => {
        [...]
        const bootstrapDropdown = new Dropdown('#my-dropdown');
        bootstrapDropdown.toggle();
    });
});
```

</ValidExample>

:::info backwards compatibility

Although Bootstrap does not need jQuery anymore, it is still possible to use it in Moodle. See MDL-84324 for more information.

:::
