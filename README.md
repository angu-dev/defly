
## General:
In this documentation you will get all the infromatione needed which are relevant for the Git defly.
The defly project is a library that allows you to generate fully functional websites using HTML elements.

Among other things, you can create the following elements:
* Navigation
* Footer
* Slider
* Viewblock
* Filter
* Banner
* Sidebar
* InformationenSelect
* Number
* Radio
* Checkbox
* File
* List
* Fullview
* Popup
* Tooltip
* Loader
* Period
* Section

## Branches:
**main:** 

Here you will find the minified code of the latest version.

**dev:**

Here you will find the original code of the latest version.

## Files:
In order to be able to use this library correctly, you should check which extension is necessary for which element.

Basically, defly only works correctly if the following files have been integrated:
-   fontawesome.min.css
-   jquery-3.5.1.min.js
-   Fonts (Kompletter Ordner)
-   default-script.js
-   default-style.css

If further files are required, simply integrate them. You can find the files you need in the “Additional” folder. Which files are missing in each case can be found either in this documentation or when using the elements as errors in the console.

**"Fonts"-Folder:**
This folder contains all fonts that are used by fontawesome or as standard fonts.

**"Additional"-Folder:**
Here you will find all external libraries that could be necessary for defly.

+ **"fontawesome.min.css"-File:**
	This file contains the fontawesome styling.
	
+ **"jquery-3.5.1.min.js"-File;**
	The code from the jQuery library is included here. This file is absolutely necessary to use defly.
	
+ **"popper-2.6.0.js"-File:**
	This library contains logic to create custom tooltips.
	
+ **"splide-2.4.20.css"-File:**
	Here you will find certain styling settings for sliders from an external library.
	
+ **"splide-2.4.20.js"-File:**
	This is a JavaScript file that has the logic of user-defined sliders.

**"default-script.js"-File:**
This file contains most of the logic of the project. You can find the complete JavaScript section here.

**"default-style.css"-File:**
All design settings are included here. Each element that can be generated has a default style that can be revised at any time.

## Erklärung:
Here you will find all the necessary information about each item included in defly.

**Select**

If the browser is not Safari or Google Chrome (Mobile), you can create this element. If an option element contained therein has the value -1, this is a placeholder.

|Attribute|Values|Description|
|---|---|---|
|data-default|select|Triggers functionality|
|data-select-index|integer|Select option element which is selected by default|

```html
<select data-default="select"> <!-- data-select-index="2" -->
   <option value="-1">test</option>
   <option value="index0">Test 4</option>
   <option value="1">Test 5</option>
   <option value="2">Test 6</option>
   <option value="3">Test 7</option>
</select>
```
---
**Checkbox**

This allows you to create a customizable checkbox.

|Attribute|Values|Description|
|---|---|---|
|data-default|checkbox|Triggers functionality|

```html
<input type="checkbox" data-default="checkbox">
```
---
**Fullview**

This allows you to display images larger. It is possible to use this function on IMG or DIV elements. In the case of DIV elements, the image must be specified as a background image.

|Typ|Attribute|Values|Description|
|-|-|-|-|
|img/div|data-default|fullview|Triggers functionality|
|img|src|string|URL of the image|
|img|alt|string|Alternativ text of the image|
|img|name|string|Name of the image|
|div|data-fullview-alt|string|Alternativ text of the image|
|div|data-fullview-name|string|Name of the image|

```html
<img data-default="fullview" src="<IMAGE_URL>" alt="Test Message" name="Test">
<div data-default="fullview" data-fullview-alt="AltText" data-fullview-name="AltName"></div>
```
---
**Viewblock**

This makes it possible to specify areas that can be expanded and collapsed as soon as any co-element is triggered.

|Attribute|Values|Description|
|-|-|-|
|data-default|viewblock|Triggers functionality|
|data-viewblock-side|right/left|Specifies the position of the symbol|
|data-viewblock|head/content|Specifies which area it should be|

```html
<div data-default="viewblock" data-viewblock-side="left">
   <div>
      <div data-viewblock="head">
         <div>test</div>
	 <p>test</p>
	 <div>
	    <div>
	       <p>testtest</p>
	    </div>
	 </div>
      </div>
      <div data-viewblock="content">Kontext Test</div>
   </div>
   <div>
      <div data-viewblock="head">TestTestTestTest Test</div>
      <div data-viewblock="content">Kontext testtesttesttest testtesttest test</div>
   </div>
   <div>
      <div data-viewblock="head">Test Test</div>
      <div data-viewblock="content">
         <div>
	    <div>
	       <p>test test test test</p>
	       <div>
	          <div>test</div>
	       </div>
	    </div>
	  </div>
       </div>
   </div>
</div>
```
---
**Tooltip**

This can be used to create customizable tooltips. In order to work correctly, popper-2.6.0.js is required.

|Attribute|Values|Description|
|-|-|-|
|title|string|Specifies a string to be displayed|
|data-tooltip-placement|bottom/top/left/right|Indicates the position of the tooltip|

```html
<div style="height:500px;width:500px;background:red;" title="Test" data-title-placement="right"></div>
```
---
**Sidebar**

This can be used to create sidebars that are pushed in from the side by triggering. These position themselves, unless you give special information.

|Attribute|Values|Description|
|-|-|-|
|data-default|sidebar|Triggers functionality|
|data-sidebar|toggler/content|Defines which element is involved|
|data-sidebar-position|right/left/bottom/top|Indicates the position of the sidebar|
|data-sidebar-trigger-type|mouseover/mousedown/click/hover|Specifies triggers|
|data-sidebar-distance|top,bottom => left / left,right => top|Indicates direct distance|
|data-sidebar-toggler-position|start/center/end|Specification of how the toggler is positioned|
|data-sidebar-state|shown|You can specify if the element is already displayed (does not work with hover elements)|

```html
<div data-default="sidebar" data-sidebar-position="bottom" data-sidebar-distance="400" data-sidebar-state="shown">
   <div data-sidebar="toggler" data-sidebar-toggler-position="center" data-sidebar-trigger-type="hover">
      <div>
	 <div>
	     test
	     <p>test</p>
	     <p>test</p>
	 </div>
      </div>
   </div>
   <div data-sidebar="content">
      <div style="height:700px;width:300px;background-color:blue;"></div>
   </div>
</div>
```
---
**Popup**

This can be used to create popups.

|Attribute|Values|Description|
|-|-|-|
|data-default|popup|Triggers functionality|
|data-popup|trigger/content|Indicates what it is|
|data-popup-trigger-type|mousedown/mouseover/hover/click|Specifies the trigger|

```html
<div data-default="popup">
    <div data-popup="trigger" data-popup-trigger-type="mouseover">
        <p>trigger</p>
    </div>
    <div data-popup="content">
        <p>text</p>
    </div>
</div>
```
---
**Slider**

This can be used to generate sliders. In order to work correctly, splide-2.4.20.css and splide.2.4.20.js are required.

|Attribute|Values|Description|
|-|-|-|
|data-default|slider|Triggers functionality|
|data-slider-arrow-style|rect/rounded|Specifies which design is used for the arrows|
|data-slider-pagination-style|rect/rounded|Gibt an welches Design für die punktierte Anzeige genutzt wird|
|data-slider-options|object|Inckudes the settings (https://splidejs.com/options/)|
|data-slider|item|Declares an item in the slider|
|data-slider|sync|Uses a different table for display and selection|

```html
<div id="testSlider" data-default="slider" data-slider="sync" style="width:100vw;" data-slider-options="{'type':'slide','direction':'ltr','fixedHeight':'49%','rewind':'true','autoplay':'true','interval':'1000'}" data-slider-arrow-style="rounded" data-slider-pagination-style="rounded">
   <div data-slider="item">
      <div style="background-color:red;height:100%;">1</div>
   </div>
   <div data-slider="item">
      <div style="background-color:blue;height:100%;">2</div>
   </div>
   <div data-slider="item">
      <div style="background-color:green;height:100%;">3</div>
   </div>
   <div data-slider="item">
      <div style="background-color:yellow;height:100%;">4</div>
   </div>
</div>
```
---
**Loader**

This can be used to define a loader that is displayed at the top of the page.

|Attribute|Values|Description|
|-|-|-|
|data-default|loader|Triggers functionality|

```html
<div data-default="loader">
    <p>text</p>
</div>
```
---
**Filter**

Allows a filter to be generated. A filter element is created for each specified category.

|Attribute|Values|Description|
|-|-|-|
|data-default|filter|Triggers functionality|
|data-filter-position|top/bottom/left/right|Indicates the position of the filter elements|
|data-filter|item|Indicates that it is an element within the filter|
|data-filter-categorie|string|Indicates the category of the element|

```html
<div data-default="filter" data-filter-position="top">
   <div data-filter="item" data-filter-categorie=""></div>
   <div data-filter="item" data-filter-categorie="test2"></div>
   <div data-filter="item" data-filter-categorie="test3"></div>
   <div data-filter="item"></div>
   <div data-filter="item" data-filter-categorie="test3"></div>
   <div data-filter="item" data-filter-categorie="test5"></div>
   <div data-filter="item" data-filter-categorie="test6"></div>
   <div data-filter="item" data-filter-categorie="test7"></div>
</div>
```
---
**Banner**

This can be used to place banners. If several are created, they are positioned directly.

|Attribute|Values|Description|
|-|-|-|
|data-default|banner|Triggers functionality|
|data-banner-position|bottom/top|Specifies the position of the banner|
|data-banner|close|If specified, a close button is created|

```html
<div data-default="banner" data-banner-position="top">
   <button data-banner="close"></button>
   <p>test</p>
</div>
```
---
**Info**

This can be used to create information overlays. These are briefly visible on the right and reflect a specified text.

|Attribute|Values|Description|
|-|-|-|
|data-default|info|Triggers functionality|

```html
<div data-default="info">
   <p>Text</p>
</div>
```
---
**Number**

This can be used to customize number input fields.

|Attribute|Values|Description|
|-|-|-|
|data-default|number|Triggers functionality|
|data-number-disabled-arrows|none/both/down/up|Specifies which buttons are deactivated|
|min|integer|Indicates the start value which cannot be fallen below|
|max|integer|Specifies the maximum value which cannot be exceeded|
|step|integer|Specifies the number that is always added or subtracted as soon as a button is pressed|

```html
<input type="number" data-default="number" data-number-disabled-arrows="up" min="2" max="12" step="4">
```
---
**Radio**

This can be used to generate radio buttons.

|Attribute|Values|Description|
|-|-|-|
|data-default|radio|Triggers functionality|
|name|string|Specifies the namespace of which radio buttons are all the same|

```html
<input type="radio" name="test" data-default="radio">
```
---
**File**

Creates a customizable file uploader. In order to be able to specify the maximum file size, the following data types are permitted: B/b, KB/kb, MB/mb, GB/gb.

|Attribute|Values|Description|
|-|-|-|
|data-default|file|Triggers functionality|
|data-file-max|string\|Datentyp|Specifies the maximum size of the file/s|
|multiple|any|Specifies that multiple files can be uploaded|

```html
<input type="file" data-default="file" data-file-max="19.83kb">
```
---
**Period**

This can be used to create time stamps.

|Attribute|Values|Description|
|-|-|-|
|data-default|period|Triggers functionality|
|data-period-start|point/path|Indicates how the startup is handled|
|data-period-end|point/path|Indicates wow the end is handled|
|data-period|stamp|Indicates that this is a timestamp|
|data-period-position|left/right|Indicates the position of the timestamp|
|data-period|date/heading/content|Allows you to define the content|

```html
<div data-default="period" data-period-start="path" data-period-end="point" style="width:800px;">
   <div data-period="stamp" data-period-position="left">
      <p data-period="date">04.01.2323</p>
      <h1 data-period="heading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, asperiores.</h1>
      <div data-period="content"></div>
   </div>
   <div data-period="stamp" data-period-position="right">
      <p data-period="date">04.02.2323</p>
      <h3 data-period="heading">head3</h3>
   </div>
   <div data-period="stamp">
      <p data-period="date">04.02.2323</p>
      <h3 data-period="heading">head</h3>
      <div data-period="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, asperiores.</div>
   </div>
</div>
```
---
**Navigation**

This can be used to create a navigation. It is only possible to create one navigation.

|Attribute|Values|Description|
|-|-|-|
|data-default|navigation|Triggers functionality|
|data-navigation-type|fixed/static|Indicates whether the navigation follows when scrolling|
|data-navigation-work|fade/none|Specifies whether scrolling is faded or remains the same|
|data-navigation|logo/items|Indicates different areas|

```html
<nav data-default="navigation" data-navigation-type="fixed" data-navigation-work="fade">
   <div data-navigation="logo">
      <div style="background:var(--default-light);height:100%;width:200px;"></div>
   </div>
   <div data-navigation="items">
      <a href="#">Home</a>
      <a href="#">About me</a>
      <a href="#">test1</a>
      <a href="#">test2</a>
      <a href="#">test3</a>
   </div>
</nav>
```
---
**Footer**

This can be used to create a footer. With another footer element within the footer, you can add reference links which are centered. If you enter the variable footermsg in the script area of the page, you can edit the footer text there.

|Attribute|Values|Description|
|-|-|-|
|data-default|footer|Triggers functionality|
|data-footer|content|Specifies the content|

```html
<footer data-default="footer">
   <div data-footer="content">
      <p>test</p>
      <div>
      	 <p>text</p>
      </div>
      <ul>
      	 <li>test</li>
      	 <li>test</li>
      	 <li>test</li>
      </ul>
   </div>
   <footer>
      <a href="#">Impressum</a>
      <a href="#">Datenschutz</a>
      <a href="#">test</a>
   </footer>
</footer>
```
---
**List**

This can be used to generate lists that can be used to select an element via dropdown.

|Attribute|Values|Description|
|-|-|-|
|data-default|list|Triggers functionality|
|data-list-use|integer|Specifies the ID of the datalist element|

```html
<datalist id="dataList-Test">
   <option value="187"></option>
   <option value="2"></option>
   <option value="3"></option>
   <option value="4"></option>
   <option value="5"></option>
   <option value="6"></option>
</datalist>
```
---
**Section**

This makes it possible to create sections.

|Attribute|Values|Description|
|-|-|-|
|data-default|section|Triggers functionality|
|data-section-heading|string|Specifies the heading|
|data-section-heading-position|left/middle/right|Indicates the position of the heading|
|data-section-wave|false/true|Specifies whether there should be a transition between the sections|
|data-section-wave-color|string|Specifies the color of the transition|
|data-section-style|light/dark|Specifies the color of the section|

```html
<div data-default="section" data-section-heading="test heading" data-section-heading-position="left" data-section-wave="true" data-section-style="dark"></div>
```
