
## Allgemein:
In dieser Dokumentation werden sie sämtliche Informationen erhalten, welche für das Git defly relevant sind.
Das Projekt defly ist eine Bibliothek, welche es Ihnen erlaubt, über HTML-Elemente direkt voll funktionsfähige Websiten zu generieren.

Unter anderem können Sie folgende Elemente erstellen:
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

## Branchen:
**main:** 
Hier finden Sie minified Code der jeweilig neusten Version.

**dev:**
Hier finden Sie den originalen Code der jeweils neusten Version.

## Dateien:
Um diese Bibliothek korrekt nutzen zu können, sollten Sie jeweils überprüfen, welche Erweiterung für welches Element notwendig ist.

Grundsätzlich funktioniert defly nur korrekt, wenn folgende Dateien eingebunden wurden:

-   fontawesome.min.css
-   jquery-3.5.1.min.js
-   Fonts (Kompletter Ordner)
-   default-script.js
-   default-style.css

Falls weitere Dateien benötigt werden, binden Sie diese einfach ein. Die benötigten Dateien finden Sie alle im “Additional”-Ordner. Welche Dateien jeweils genau fehlen, finden Sie entweder in dieser Dokumentation oder bei der Benutzung der Elemente als Fehler in der Konsole.

**"Fonts"-Order:**
Dieser Ordner enthält sämtliche Schfitarten, welche von fontawesome oder als Standardschriftart benutzt werden.

**"Additional"-Ordner:**
Hier finden Sie alle externen Bibliotheken, welche für defly notwendig sein könnten. 

+ **"fontawesome.min.css"-Datei:**
	Diese Datei enthält das genutze fontawesome-Styling.
	
+ **"jquery-3.5.1.min.js"-Datei;**
	Hier ist der Code der jQuery-Bibliothek enthalten. Diese Datei ist zwingend notwendig um defly zu nutzen.
	
+ **"popper-2.6.0.js"-Datei:**
	Diese Bibliothek beinhaltet Logik um benutzerdefinierte Tooltips zu erstellen.
	
+ **"splide-2.4.20.css"-Datei:**
	Hier finden Sie gewisse Styling-Einstellungen für Slider, aus einer externen Bibliothek.
	
+ **"splide-2.4.20.js"-Datei:**
	Hierbei handelt es sich um eine JavaScript-Datei, welche die Logik benutzerdeinierten Slidern besitzt.

**"default-script.js"-Datei:**
Diese Datei enthält den großteil der Logik des Projektes. Hier finden Sie den kompletten JavaScript-Teil.

**"default-style.css"-Datei:**
Hier sind sämtliche Design-Einstellungen enthalten. Jedes Generierbare Element hat ein Default-Style, welches jederzeit überarbeit werden kann.

## Erklärung:
Hier finden Sie alle notwendigen Informationen über alle, in defly beinhaltete, Elemente.

**Select**
Ist der Browser nicht Safari oder Google Chrome (Mobile), dann können Sie dieses Element erstellen. Wenn ein darin enthaltenes Option-Element das value -1 besitzt, ist dieser ein Placeholder.  

|Attribut|Werte|Beschreibung|
|---|---|---|
|data-default|select|Triggert Funktionalität|
|data-select-index|integer|Option-Element auswählen, welches Standardmäßig ausgewählt ist|

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
Hiermit können Sie eine anpassbare Checkbox erstellen. 
|Attribut|Werte|Beschreibung|
|---|---|---|
|data-default|checkbox|Triggert Funktionalität|
```html
<input type="checkbox" data-default="checkbox">
```
---
**Fullview**
Hiermit können Sie Bilder größer anzeigen lassen. Es ist möglich, diese Funktion auf IMG- oder DIV-Elementen zu nutzen. Bei DIV-Elementen muss das Bild als background-image angegeben sein.

|Typ|Attribut|Werte|Beschreibung|
|-|-|-|-|
|img/div|data-default|fullview|Triggert Funktionalität|
|img|src|string|URL des Bildes|
|img|alt|string|Alternativtext des Bildes|
|img|name|string|Name des Bildes|
|div|data-fullview-alt|string|Alternativtext des Bildes|
|div|data-fullview-name|string|Name des Bildes|

```html
<img data-default="fullview" src="<IMAGE_URL>" alt="Test Message" name="Test">
<div data-default="fullview" data-fullview-alt="AltText" data-fullview-name="AltName"></div>
```
---
**Viewblock**
Hiermit ist es möglich Bereiche anzugeben, welche auf- und eingeklappt werden können, sobald ein beliebiges Mitelement getriggert wird.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|viewblock|Triggert Funktionalität|
|data-viewblock-side|right/left|Gibt die Position des Symbols an|
|data-viewblock|head/content|Gibt an um welchen Bereich es sich handeln soll|

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
						<div>
							test
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```
---
**Tooltip**
Hiermit kann man anpassbare Tooltips erstellen. Um korrekt funktionieren zu können, wird popper-2.6.0.js benötigt.

|Attribut|Werte|Beschreibung|
|-|-|-|
|title|string|Gibt eine Zeichenkette an, welche angezeigt werden soll|
|data-tooltip-placement|bottom/top/left/right|Gibt die Position des Tooltips an|

```html
<div style="height:500px;width:500px;background:red;" title="Test" data-title-placement="right"></div>
```
---
**Sidebar**
Hiermit kann man Sidebars erstellen, welche per Trigger von der Seite eingeschoben werden. Diese Positionieren sich selbst, außer man gibt spezielle Angaben an.

|Attribut|Wert|Beschreibung|
|-|-|-|
|data-default|sidebar|Triggert Funktionalität|
|data-sidebar|toggler/content|Definiert um welches Element es sich handelt|
|data-sidebar-position|right/left/bottom/top|Gibt die Position der Sidebar an|
|data-sidebar-trigger-type|mouseover/mousedown/click/hover|Gibt Trigger an|
|data-sidebar-distance|top,bottom => left / left,right => top|Gibt direkte Distanz an|
|data-sidebar-toggler-position|start/center/end|Angabe, wie der Toggler positioniert ist|
|data-sidebar-state|shown|Kann man angeben, ob das Element bereits angezeigt wird (Funktioniert nicht bei hover-Elementen)|

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
Hiermit kann man Popups erstellen.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|popup|Triggert Funktionalität|
|data-popup|trigger/content|Gibt an um was es sich handelt|
|data-popup-trigger-type|mousedown/mouseover/hover/click|Gibt den Trigger an

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
Hiermit können Slider generiert werden. Um korrekt funktionieren zu können wird splide-2.4.20.css und splide.2.4.20.js benötigt.

|Attribut|Wert|Beschreibung|
|-|-|-|
|data-default|slider|Triggert Funktionalität|
|data-slider-arrow-style|rect/rounded|Gibt an welches Design für die Pfeile benutzt wird|
|data-slider-pagination-style|rect/rounded|Gibt an welches Design für die punktierte Anzeige genutzt wird|
|data-slider-options|object|Gibt die Einstellungen mit (https://splidejs.com/options/)|
|data-slider|item|Deklariert ein Item im Slider|
|data-slider|sync|Benutzt eine andere Tabelle als Anzeige und Auswahl|

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
Hiermit kann ein Loader definiert werden, welcher am Anfang der Seite eingeblendet ist.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|loader|Triggert Funktionalität|

```html
<div data-default="loader">
    <p>text</p>
</div>
```
---
**Filter**
Ermöglicht es einen Filter zu generieren. Für jede angegebene Kategorie wird ein Filter-Element erstellt.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|filter|Triggert Funktionalität|
|data-filter-position|top/bottom/left/right|Gibt die Position der Filter-Elemente an|
|data-filter|item|Gibt an, dass es sich um ein Element innerhalb des Filters handelt|
|data-filter-categorie|string|Gibt die Kategorie des Elementes an|

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
Hiermit können Banner stellt werden. Falls mehrere erstellt werden, werden diese direkt positioniert.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|banner|Triggert Funktionalität|
|data-banner-position|bottom/top|Gibt die Position des Banners an|
|data-banner|close|Wenn angegeben, wird ein Close-Button erstellt|

```html
<div data-default="banner" data-banner-position="top">
	<button data-banner="close"></button>
	<p>test</p>
</div>
```
---
**Info**
Hiermit kann man Informationseinblendungen erstellen. Diese sind kurz rechts sichtbar und geben einen angegeben Text wieder.

|Attribut|Wert|Beschreibung|
|-|-|-|
|data-default|info|Triggert Funktionalität|

```html
<div data-default="info">
	<p>Text</p>
</div>
```
---
**Number**
Hiermit kann man Number-Input-Felder anpassen.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|number|Triggert Funktionalität|
|data-number-disabled-arrows|none/both/down/up|Gibt an welche Buttons deaktiviert werden|
|min|integer|Gibt Startwert an, welcher nicht unterschritten werden kann|
|max|integer|Gibt Maximalwert an, welcher nicht überschritten werden kann|
|step|integer|Gibt Zahl an, welche immer addiert oder subtrahiert wird, sobald ein Button gedrückt wird|

```html
<input type="number" data-default="number" data-number-disabled-arrows="up" min="2" max="12" step="4">
```
---
**Radio**
Hiermit kann man Radio-Button generieren.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|radio|Triggert Funktionalität|
|name|string|Gibt den namespace an, welche Radio-Buttons alle gleich sind|

```html
<input type="radio" name="test" data-default="radio">
```
---
**File**
Erstellt einen anpassbaren File-Uploader. Um die maximale Dateigröße angeben zu können, werden folgende Datentypen gestattet: B/b, KB/kb, MB/mb, GB/gb.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|file|Triggert Funktionalität|
|data-file-max|string\|Datentyp|Gibt an wie groß die Datei/en maximal sein dürfen|
|multiple|none|Gibt an, dass auch mehrere Dateien hochgeladen werden dürfen|

```html
<input type="file" data-default="file" data-file-max="19.83kb">
```
---
**Period**
Hiermit können Zeitstempel erstellt werden.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|period|Triggert Funktionalität|
|data-period-start|point/path|Gibt an, wie der Start gehandhabt wird|
|data-period-end|point/path|Gibt an, wie das Ende gehandhabt wird|
|data-period|stamp|Gibt an, dass es sich um einen Zeitstempel handelt|
|data-period-position|left/right|Gibt die Position des Zeitstempels an|
|data-period|date/heading/content|Ermöglicht es Kontent festzulegen|

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
Hiermit kann man eine Navigation erstellen. Es ist nur möglich eine Navigation zu erstellen.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|navigation|Triggert Funktionalität|
|data-navigation-type|fixed/static|Gibt an, ob die Navigation beim scrollen mitgeht|
|data-navigation-work|fade/none|Gibt an, ob beim scrollen faded oder gleich bleibt|
|data-navigation|logo/items|Gibt verschiedene Bereiche an|

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
Hiermit kann man einen Footer erstellen. Mit einem weiteren Footer-Element innerhalb des Footers kann man Verweislinks hinzufügen, welchen zentriert ausgerichtet werden. Gibt man im Script-Bereich der Seite die Variable footermsg an, kann man dort den Footertext bearbeiten.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|footer|Triggert Funktionalität|
|data-footer|content|Gibt den Kontent an|

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
Hiermit kann man Listen generieren, welche per Dropdown ein Element auswählen lässt.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|list|Triggert Funktionalität|
|data-list-use|integer|Gibt die ID des datalist-Elements an|

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
Hiermit ist es möglich Sektionen zu erstellen.

|Attribut|Werte|Beschreibung|
|-|-|-|
|data-default|section|Triggert Funktionalität|
|data-section-heading|string|Gibt die Überschrift an|
|data-section-heading-position|left/middle/right|Gibt die Position der Überschrift an|
|data-section-wave|false/true|Gibt an, ob ein Übergang der Sektionen vorhanden sein soll|
|data-section-wave-color|string|Gibt die Farbe des Übergangs an|
|data-section-style|light/dark|Gibt die Farbe der Sektion an|

```html
<div data-default="section" data-section-heading="test heading" data-section-heading-position="left" data-section-wave="true" data-section-style="dark"></div>
```
