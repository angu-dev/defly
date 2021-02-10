class jQueryError extends Error {
    constructor() {
        super("MISSING: Add jQuery | Version 3.5.1 | https://code.jquery.com/jquery-3.5.1.min.js");
        this.name = "jQueryError";
    }
}

class PopperError extends Error {
    constructor() {
        super(`MISSING: Add popper.js | Version 2.6.0 | https://unpkg.com/@popperjs/core@2.6.0/dist/umd/popper.min.js`);
        this.name = "PopperError";
    }
}

class SplideError extends Error {
    constructor() {
        super(`MISSING: Add splide.js | Version 2.4.20 | https://github.com/Splidejs/splide/releases/tag/v2.4.20`);
        this.name = "SplideError";
    }
}

try { let jqry = jQuery; }
catch { throw new jQueryError(); }

let navigation = null;
let footer = null;
let slider = null;
let viewblock = null;
let filter = null;
let banner = null;
let sidebar = null;
let info = null;
let select = null;
let number = null;
let radio = null;
let checkbox = null;
let file = null;
let list = null;
let fullview = null;
let popup = null;
let tooltip = null;
let loader = null;
let period = null;
let section = null;

$(window).on("load", () => {
    navigation = new Navigation();
    footer = new Footer();
    slider = new Slider();
    viewblock = new Viewblock();
    period = new Period();
    filter = new Filter();
    banner = new Banner();
    sidebar = new Sidebar();
    info = new Info();
    select = new Select();
    number = new Number();
    radio = new Radio();
    checkbox = new Checkbox();
    file = new File();
    list = new List();
    section = new Section();
    fullview = new Fullview();
    popup = new Popup();
    tooltip = new Tooltip();
    loader = new Loader();
});

class Select {
    constructor() {
        this.setup();
    }

    setup() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            // Da gute Standarts existieren, diese nutzen
        } else {
            let customSelectList = $("select[data-default='select']");

            for (let index = 0; index < customSelectList.length; index++) {
                let curSelect = customSelectList[index];

                let par = $(curSelect).parents()[0];
                if ($(par).attr("data-select") == "area") continue;

                let selectArea = $("<div>")
                    .attr("data-select", "area")
                    .css("width", $(curSelect).outerWidth());

                $(curSelect).before(selectArea);
                $(curSelect).detach().appendTo(selectArea);

                let hasPlaceholder = false;

                let options = $(curSelect).find("option").filter((_, item) => {
                    if ($(item).val() == -1) {
                        hasPlaceholder = true;
                        return false;
                    }
                    return true;
                });

                let defaultOption = $(curSelect).attr("data-select-index");
                let defaultOptionIndex = -1;

                if (defaultOption != null && defaultOption.length > 0) {
                    let curInteger = parseInt(defaultOption);

                    if (curInteger > -1 && curInteger < options.length) {
                        defaultOptionIndex = curInteger;
                    }
                }

                if (!hasPlaceholder && defaultOptionIndex == -1) {
                    defaultOptionIndex = 0;
                }

                let indexValue = 0;

                if (hasPlaceholder && defaultOptionIndex == -1) {
                    indexValue = $(curSelect).find("option[value='-1']").val();
                } else {
                    indexValue = $(options[defaultOptionIndex]).val();
                }

                $(options[defaultOptionIndex]).attr("data-select-target", "active");
                $(curSelect)
                    .attr("data-select-index", defaultOptionIndex)
                    .val(indexValue);

                let childrenList = $("<div>")
                    .attr("data-select-item", "list")
                    .css("width", $(curSelect).outerWidth() - 2);

                let borWid = $(curSelect).css("border-top-width");
                $(curSelect).width($(childrenList).outerWidth() - (18 + (2 * borWid.slice(0, borWid.length - 2))));

                for (let optionIndex = 0; optionIndex < options.length; optionIndex++) {
                    let curOption = options[optionIndex];
                    let childrenItem = $("<div>")
                        .attr("data-select-item", "item")
                        .val($(curOption).val())
                        .text($(curOption).text())
                        .on("mousedown", _ => {
                            let childs = $(childrenList).children();
                            let selectedOption = $($(options)[optionIndex]);

                            $(childs).removeAttr("data-select-target");

                            $($(childs)[optionIndex]).attr("data-select-target", "active");

                            $(curSelect)
                                .attr("data-select-index", optionIndex)
                                .val($(selectedOption).val());

                            $(options).removeAttr("data-select-target");
                            $(selectedOption).attr("data-select-target", "active");
                        });

                    if (optionIndex == defaultOptionIndex) {
                        childrenItem.attr("data-select-target", "active");
                    }

                    childrenList.append(childrenItem);
                }

                $(selectArea).append(childrenList);

                $(curSelect).mousedown(e => mousedownWork(e));

                $(curSelect).focusout(e => {
                    $(childrenList).slideUp("fast");
                });

                let borderWidth = $(curSelect).css("border-top-width");

                if (borderWidth == null) {
                    borderWidth = 0;
                } else {
                    borderWidth = +borderWidth.slice(0, borderWidth.length - 2);
                }

                let scale = $(curSelect).outerHeight() - (2 * borderWidth);
                let dropArea = $("<div>")
                    .attr("data-select", "drop")
                    .css({
                        "height": scale,
                        "border-width": borderWidth,
                        "border-left-width": 0
                    })
                    .mousedown(e => mousedownWork(e))
                    .append($("<i>")
                        .addClass("fas fa-chevron-down"));

                $(selectArea).append(dropArea);

                function mousedownWork(e) {
                    if (e.which == 1) {
                        toggleList(childrenList);
                        e.preventDefault();
                        $(curSelect).focus();
                    }
                }

                function toggleList(listElement) {
                    $(listElement).slideToggle("fast");
                }
            }
        }
    }

    check() {
        this.setup();
    }
}

class Checkbox {
    constructor() {
        this.setup();
    }

    setup() {
        let checkboxes = $("input[type='checkbox'][data-default='checkbox']");

        for (let curCheckboxIndex = 0; curCheckboxIndex < checkboxes.length; curCheckboxIndex++) {
            let curCheckbox = checkboxes[curCheckboxIndex];

            let par = $(curCheckbox).parents()[0];
            if ($(par).attr("data-checkbox") == "area") continue;

            let checkboxArea = $("<div>").attr("data-checkbox", "area");

            $(curCheckbox).before(checkboxArea);
            $(curCheckbox).detach().appendTo(checkboxArea);

            let chBox = $("<div>")
                .attr("data-checkbox", "box")
                .appendTo(checkboxArea)
                .on("click", () => {
                    $(chBox).attr('data-checkbox-state', function (index, attr) {
                        if (attr == "active") {
                            $(chBox).children().remove();
                            $(curCheckbox).prop("checked", false);
                            return null;
                        } else {
                            $(curCheckbox).prop("checked", true);
                            $("<i>")
                                .addClass("fas fa-check")
                                .appendTo(chBox);
                            return "active";
                        }
                    });
                });

            $(checkboxArea).css({
                "width": chBox.innerWidth(),
                "height": chBox.innerHeight()
            });
        }
    }

    check() {
        this.setup();
    }
}

class Fullview {
    constructor() {
        this.setup();
    }

    setup() {
        let imgArray = $("img[data-default='fullview']");
        let divArray = $("div[data-default='fullview']");

        let imgs = $.merge(imgArray, divArray);

        for (let curImgIndex = 0; curImgIndex < imgs.length; curImgIndex++) {
            let curImg = imgs[curImgIndex];

            let par = $(curImg).parents()[0];
            if ($(par).attr("data-fullview") == "area") continue;

            let imgBox = $("<div>")
                .attr("data-fullview", "area")
                .css("width", $(curImg).outerWidth());

            $(curImg).before(imgBox);
            $(curImg).detach().appendTo(imgBox);

            let viewBox = $("<div>")
                .attr("data-fullview", "box")
                .on("click", () => {
                    let imageSource = $(curImg).attr("src") || $(curImg).css("background-image").slice(5, -2);
                    let imageAlt = $(curImg).attr("alt") || $(curImg).attr("data-fullview-alt");
                    let imageName = $(curImg).attr("name") || $(curImg).attr("data-fullview-name");
                    generateFullviewArea(imageSource, imageAlt, imageName);
                })
                .appendTo(imgBox);

            let expandIcon = $("<i>")
                .addClass("fas fa-expand")
                .appendTo(viewBox);
        }

        function generateFullviewArea(source, alt, name) {
            let fullview = $("<div>").attr("data-fullview", "page");
            let closeIcon = $("<i>")
                .attr("data-fullview", "close")
                .addClass("fas fa-compress")
                .on("click", () => {
                    $(fullview).fadeOut(250);
                    $("body").removeClass("block-overflow");
                    setTimeout(() => {
                        $(fullview).remove();
                    }, 250);
                }).appendTo(fullview);

            let imageArea = $("<div>").attr("data-fullview", "image-area");

            if (source == null || source == "") {
                let alternate = "Dieses Bild kann nicht angezeigt werden.";
                $("<div>")
                    .attr("data-fullview", "image")
                    .text(alt == null ? alternate : alt)
                    .appendTo(imageArea);
            } else {
                $("<img>")
                    .attr({
                        "data-fullview": "image",
                        "src": source
                    })
                    .appendTo(imageArea);
            }

            fullview.append(imageArea);

            if (name != null && name != "") {
                $("<p>")
                    .attr("data-fullview", "name")
                    .text(name)
                    .appendTo(fullview);
            }

            $("body")
                .append(fullview)
                .addClass("block-overflow");
        }
    }

    check() {
        this.setup();
    }
}

class Viewblock {
    constructor() {
        this.setup();
    }

    setup() {
        const openContextIconClass = "fas fa-minus";
        const closedContextIconClass = "fas fa-plus";
        const genAttrName = "data-viewblock-generated";

        let curViewblocks = $("div[data-default='viewblock']:not([" + genAttrName + "])");
        for (let curViewblockIndex = 0; curViewblockIndex < curViewblocks.length; curViewblockIndex++) {
            let curViewblock = curViewblocks[curViewblockIndex];
            let blocks = $(curViewblock).children("div");
            let side = $(curViewblock).attr("data-viewblock-side");

            $(curViewblock).attr(genAttrName, "true");
            for (let curBlockIndex = 0; curBlockIndex < blocks.length; curBlockIndex++) {
                let curBlock = blocks[curBlockIndex];
                $(curBlock).attr("data-viewblock", "block");

                let head = $(curBlock).children("div[data-viewblock='head']");
                let headInput = $(head).html();
                $(head).html("");

                $("<div>")
                    .html(headInput)
                    .appendTo(head);

                let icon = $("<i>")
                    .addClass(closedContextIconClass)
                    .css(side == null || side == "right" ? "right" : "left", 10)
                    .appendTo(head);

                let content = $(curBlock).children("div[data-viewblock='content']");
                let contentInput = $(content).html();
                $(content).html("");

                $("<div>")
                    .html(contentInput)
                    .appendTo(content);

                hideAllContent();

                $(head).on("click", () => {
                    let curState = 1;
                    if ($(content).is(":hidden")) {
                        curState = 0;
                    }

                    hideAllContent();

                    if (curState) {
                        $(content).slideUp("fast");
                    } else {
                        let curBorderWidth = $(curBlock).css("border-bottom-width");

                        $(icon)
                            .removeClass()
                            .addClass(openContextIconClass);
                        $(head).css("border-bottom-width", curBorderWidth)
                        $(content).slideDown("fast");
                    }
                });
            }

            function hideAllContent() {
                $(blocks)
                    .children("div[data-viewblock='content']")
                    .slideUp("fast");

                $($(blocks).children("div[data-viewblock='head']"))
                    .children("i")
                    .removeClass()
                    .addClass(closedContextIconClass);

                $(blocks)
                    .children("div[data-viewblock='head']")
                    .css("border-bottom-width", 0);
            }
        }
    }

    check() {
        this.setup();
    }
}

class Tooltip {
    constructor() {
        try { let popper = Popper; }
        catch { throw new PopperError(); }

        this.setupTitleCounter = 0;

        this.setup();
    }

    setup() {
        let titleElements = $("[title]");
        for (let curIndex = 0; curIndex < titleElements.length; curIndex++) {
            let element = titleElements[curIndex];
            let content = $(element).attr("title");
            let givenPlacement = $(element).attr("data-tooltip-placement");

            $(element)
                .blur()
                .attr("data-title", content)
                .removeAttr("title");

            if (content == "") {
                $(element).removeAttr("data-title");
                continue;
            }

            let lastTitleCount = $(element).attr("data-tooltip-id");
            $(element).attr("data-tooltip-id", this.setupTitleCounter);
            $("[for-id='" + lastTitleCount + "']").remove();

            let tooltip = document.createElement("div");
            tooltip.classList = "tooltip";
            tooltip.setAttribute("role", "tooltip");
            tooltip.setAttribute("for-id", this.setupTitleCounter);
            tooltip.innerHTML = content;

            this.setupTitleCounter++;

            let arrow = document.createElement("div");
            arrow.classList = "arrow";
            arrow.setAttribute("data-popper-arrow", "");

            tooltip.appendChild(arrow);
            document.querySelector("body").appendChild(tooltip)

            let popperInstance = null;
            let placement = "bottom";

            if (givenPlacement != null && givenPlacement != "") {
                placement = givenPlacement;
            }

            function create() {
                popperInstance = Popper.createPopper(element, tooltip, {
                    placement: placement,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 8],
                            },
                        },
                    ],
                });
            }

            function destroy() {
                if (popperInstance) {
                    popperInstance.destroy();
                    popperInstance = null;
                }
            }

            function show() {
                tooltip.setAttribute('data-show', '');
                create();
            }

            function hide() {
                tooltip.removeAttribute('data-show');
                destroy();
            }

            const showEvents = ['mouseenter', 'focus'];
            const hideEvents = ['mouseleave', 'blur'];

            showEvents.forEach(event => {
                element.addEventListener(event, show);
            });

            hideEvents.forEach(event => {
                element.addEventListener(event, hide);
            });
        }
    }

    check(element) {
        if (element != null) {
            reChange(element);
        } else {
            $("[data-title]").each((i, el) => {
                reChange(el);
            });
        }

        function reChange(elem) {
            let dataVal = $(elem).attr("title") || $(elem).attr("data-title");
            $(elem)
                .removeAttr(dataVal)
                .attr("title", dataVal);
        }

        this.setup();
    }
}

class Sidebar {
    constructor() {
        this.genPositionObject = {
            "left": 0,
            "top": 0,
            "right": 0,
            "bottom": 0
        };

        this.setup();
    }

    setup() {
        const sortPriority = ["left", "right", "top", "bottom"];
        const sortPrioritySecond = ["start", "center", "end"];

        const stateAttrName = "data-sidebar-state";
        const positionAttrName = "data-sidebar-position";
        const togglerPosition = "data-sidebar-toggler-position";
        const distanceAttrName = "data-sidebar-distance";
        const genAttrName = "data-sidebar-generated";
        const triggerAttrName = "data-sidebar-trigger-type";

        const defaultBreakSize = 10;
        const generalDistance = 50;

        let sidebars = [...$("[data-default='sidebar']:not([" + genAttrName + "])")].sort((a, b) => {
            let disA = $(a).attr(distanceAttrName);
            let disB = $(b).attr(distanceAttrName);
            if (disA != null && disA != "") return 1;
            if (disB != null && disB != "") return -1;

            const def = "right";
            const def2 = "start";

            let posAAttr = $(a).attr(positionAttrName);
            let posBAttr = $(b).attr(positionAttrName);
            if (posAAttr == null || posAAttr == "") { posAAttr = def; $(a).attr(positionAttrName, def); }
            if (posBAttr == null || posBAttr == "") { posBAttr = def; $(b).attr(positionAttrName, def); }
            let posA = sortPriority.indexOf(posAAttr);
            let posB = sortPriority.indexOf(posBAttr);
            if (posA < posB) return -1;
            if (posA > posB) return 1;

            let posA2Attr = $($(a).children()[0]).attr(togglerPosition);
            let posB2Attr = $($(b).children()[0]).attr(togglerPosition);
            if (posA2Attr == null || posA2Attr == "") { posA2Attr = def2; $($(a).children()[0]).attr(togglerPosition, def2); }
            if (posB2Attr == null || posB2Attr == "") { posB2Attr = def2; $($(b).children()[0]).attr(togglerPosition, def2); }
            let posA2 = sortPrioritySecond.indexOf(posA2Attr);
            let posB2 = sortPrioritySecond.indexOf(posB2Attr);
            if (posA2 < posB2) return -1;
            if (posA2 > posB2) return 1;
        });

        let tglHO = generalDistance;
        let tglWO = generalDistance;

        for (let currentSidebarIndex = 0; currentSidebarIndex < sidebars.length; currentSidebarIndex++) {
            let currentSidebar = sidebars[currentSidebarIndex];
            if ($(currentSidebar).attr(genAttrName) != null) continue;

            let wishedState = $(currentSidebar).attr(stateAttrName);
            if (wishedState == null || wishedState == "") wishedState = "hidden";
            $(currentSidebar).attr(stateAttrName, "hidden").attr(genAttrName, true);

            let position = $(currentSidebar).attr(positionAttrName);
            let tglPosition = "right";
            let tglDistance = 0;
            let tglSize = 0;
            let tglPositionAdditional = "right";
            let tglDistanceAdditional = 0;

            let toggler = $(currentSidebar).children("[data-sidebar='toggler']");
            let content = $(currentSidebar).children("[data-sidebar='content']");

            let triggerType = $(toggler).attr(triggerAttrName);
            let validTypes = ["mousedown", "click", "mouseover", "hover"];
            let jsTypes = ["mousedown", "mousedown", "mouseover", "mouseover"];

            let type = validTypes.indexOf(triggerType);

            if (type == -1) {
                $(toggler).attr(triggerAttrName, validTypes[0]);
                type = 0;
            }

            if (toggler.length == 0) {
                toggler = $("<div>")
                    .attr({
                        "data-sidebar": "toggler",
                        "data-sidebar-info": "hidden"
                    })
                    .attr(togglerPosition, "start")
                    .css({
                        "min-height": 0,
                        "min-width": 0,
                    })
                    .prependTo(currentSidebar);
            }

            let cntH = $(content).outerHeight();
            let cntW = $(content).outerWidth();
            let tglH = $(toggler).outerHeight();
            let tglW = $(toggler).outerWidth();

            let additionalPosition = $(toggler).attr(togglerPosition);
            let customPosition = $(currentSidebar).attr(distanceAttrName);

            let positionObject = {};
            switch (position) {
                case "top":
                case "bottom":
                    switch (additionalPosition) {
                        case "center":
                            tglDistanceAdditional = (cntW / 2) - (tglW / 2);
                            break;
                        case "end":
                            tglDistanceAdditional = cntW - tglW;
                            break;
                        case "start":
                        default:
                            tglDistanceAdditional = 0;
                            break;
                    }

                    tglPositionAdditional = "left";
                    tglPosition = "top";
                    tglDistance = position == "top" ? cntH : -tglH;
                    tglSize = -cntH;
                    positionObject[position] = tglSize;

                    if (customPosition != null && customPosition != "") {
                        positionObject["left"] = customPosition - tglDistanceAdditional;
                        this.genPositionObject[position] -= defaultBreakSize;
                    } else {
                        positionObject["left"] = this.genPositionObject[position] + tglWO - tglDistanceAdditional;
                        this.genPositionObject[position] += tglWO + defaultBreakSize;
                    }
                    break;
                case "right":
                case "left":
                default:
                    switch (additionalPosition) {
                        case "center":
                            tglDistanceAdditional = (cntH / 2) - (tglH / 2);
                            break;
                        case "end":
                            tglDistanceAdditional = cntH - tglH;
                            break;
                        case "start":
                        default:
                            tglDistanceAdditional = 0;
                            break;
                    }

                    tglPositionAdditional = "top";
                    tglPosition = "right";
                    tglDistance = position == "right" ? cntW : -tglW;
                    tglSize = -cntW;
                    positionObject[position] = tglSize;

                    if (customPosition != null && customPosition != "") {
                        positionObject["top"] = customPosition - tglDistanceAdditional;
                        this.genPositionObject[position] -= defaultBreakSize;
                    } else {
                        positionObject["top"] = this.genPositionObject[position] + tglHO - tglDistanceAdditional;
                        this.genPositionObject[position] += tglHO + defaultBreakSize;
                    }
                    break;
            }
            $(currentSidebar).css(positionObject);

            tglHO = tglH;
            tglWO = tglW;

            let children = $(toggler).children();
            $(toggler)
                .html("")
                .append(
                    $("<div>").append(children)
                );

            if ($(toggler).attr("data-sidebar-info") == "hidden") {
                $($(toggler).children()[0]).remove();
            }

            let zIndex = 0;
            let posi = 0;
            $(toggler)
                .css({
                    "width": $(toggler).outerWidth(),
                    "height": $(toggler).outerHeight()
                })
                .css(tglPosition, tglDistance)
                .css(tglPositionAdditional, tglDistanceAdditional)
                .on(jsTypes[type], () => {
                    let state = $(currentSidebar).attr(stateAttrName);

                    for (let curInd = 0; curInd < sidebars.length; curInd++) {
                        let curSidebar = sidebars[curInd];
                        if ($(curSidebar).attr(stateAttrName) == "shown" && curSidebar != currentSidebar) {
                            $($(curSidebar).children("[data-sidebar='toggler']")).click();
                        }
                    }

                    if (state == "shown") {
                        posi = tglSize;
                        zIndex = 0;
                        $(currentSidebar).attr(stateAttrName, "hidden");
                    } else if (state == "hidden") {
                        posi = 0;
                        zIndex = 10;
                        $(currentSidebar).attr(stateAttrName, "shown");
                    }

                    $(currentSidebar)
                        .css(position, posi)
                        .css("z-index", zIndex);
                });

            if (jsTypes[type] == jsTypes[2]) {
                $(currentSidebar).on("mouseleave", () => {
                    posi = tglSize;
                    zIndex = 0;
                    $(currentSidebar).attr(stateAttrName, "hidden");

                    $(currentSidebar)
                        .css(position, posi)
                        .css("z-index", zIndex);
                });
            }

            if (wishedState == "shown") {
                $(toggler).mousedown();
            }
        }
    }

    check() {
        this.setup();
    }
}

class Popup {
    constructor() {
        this.setup();
    }

    setup() {
        $("div[data-default='popup']").each((index, element) => {
            const triggerAttrName = "data-popup-trigger-type";

            let trigger = $($(element).children("[data-popup='trigger']"))[0];
            let content = $($(element).children("[data-popup='content']"))[0];

            if (trigger != null && content != null) {
                let triggerType = $(trigger).attr(triggerAttrName);
                let validTypes = ["mousedown", "click", "mouseover", "hover",];
                let jsTypes = ["mousedown", "mousedown", "mouseover", "mouseover"];

                let type = validTypes.indexOf(triggerType);

                if (type == -1) {
                    $(trigger).attr(triggerAttrName, validTypes[0]);
                    type = 0;
                }

                let close = $("<button>")
                    .attr("data-popup-area", "close")
                    .addClass("fas fa-times")
                    .on("click", () => {
                        $(popup).fadeOut("fast");
                        setTimeout(() => {
                            $("body").removeClass("block-overflow");
                        }, 250);
                    });

                let box = $("<div>")
                    .attr("data-popup-area", "box")
                    .append(close)
                    .append(content);

                let popup = $("<div>")
                    .attr("data-popup", "area")
                    .append(box)
                    .appendTo("body");

                $(trigger)
                    .on(jsTypes[type], () => {
                        $(popup)
                            .fadeIn("fast")
                            .css("display", "flex");
                        $("body").addClass("block-overflow");
                    })
                    .appendTo("body");
            }

            $(element).remove();
        });
    }

    check() {
        this.setup();
    }
}

class Slider {
    constructor() {
        let el = $("<div>").attr("id", "spl1d3t4st").appendTo($("body"));
        try { let splide = new Splide($(el)[0]); }
        catch { throw new SplideError(); }
        finally { $(el).remove(); }

        this.setup();
    }

    setup() {
        $("[data-default='slider']").each((index, element) => {
            let children = $(element).find(".splide__track")[0];
            if (children != null) return true;

            let splideElement = $(element).addClass("splide");
            let splideTrack = $("<div>").addClass("splide__track");
            let splideList = $("<ul>").addClass("splide__list");

            let maxHeight = 50;
            $(element).children("[data-slider='item']").each((ind, elem) => {
                let hei = $(elem).outerHeight();
                if (hei > maxHeight) maxHeight = hei;

                $("<li>")
                    .addClass("splide__slide")
                    .append($(elem).html())
                    .appendTo(splideList);

                $(elem).remove();
            });
            $($(splideList).children()).css("min-height", maxHeight);

            $(splideTrack).append(splideList);
            $(splideElement).append(splideTrack);

            let arrowStyle = $(element).attr("data-slider-arrow-style");
            let paginationStyle = $(element).attr("data-slider-pagination-style");

            let options = {};
            let givenOptions = $(element).attr("data-slider-options");

            if (givenOptions != null && givenOptions != "") {
                givenOptions = givenOptions.replaceAll("'", "\"");
                options = JSON.parse(givenOptions);
            }

            let sync = $(element).attr("data-slider");
            if (sync != null && sync != "" && sync == "sync") {
                let newSlider = $("<div>")
                    .attr("data-slider-sync", "slider")
                    .addClass("splide")
                    .append($(splideElement).html());
                let newSliderOptions = {
                    rewind: true,
                    fixedWidth: 100,
                    fixedHeight: 64,
                    isNavigation: true,
                    gap: 10,
                    focus: 'center',
                    pagination: false,
                    cover: true
                };
                $(element).after(newSlider);
                let secondary = new Splide($(newSlider)[0], newSliderOptions).mount();
                let primary = new Splide($(splideElement)[0], {
                    type: 'fade',
                    heightRatio: 0.5,
                    pagination: false,
                    arrows: false,
                    cover: true
                });
                primary.sync(secondary).mount();
            } else {
                new Splide($(splideElement)[0], options).mount();
            }

            if (arrowStyle != null && arrowStyle != "") {
                let rad = 0;
                switch (arrowStyle) {
                    case "rounded":
                        rad = "50%";
                        break;
                    case "rect":
                    default:
                        rad = 0;
                        break;
                }
                $($(splideElement).find(".splide__arrow")).css("border-radius", rad);
            }

            if (paginationStyle != null && paginationStyle != "") {
                let rad = 0;
                switch (paginationStyle) {
                    case "rounded":
                        rad = "50%";
                        break;
                    case "rect":
                    default:
                        rad = 0;
                        break;
                }
                $($(splideElement).find(".splide__pagination__page")).css("border-radius", rad);
            }
        });
    }

    check() {
        this.setup();
    }
}

class Loader {
    constructor() {
        this.setup();
    }

    setup() {
        $("[data-default='loader']").each((i, element) => {
            $(element).fadeOut("fast");
            setTimeout(() => {
                $(element).remove();
            }, 250)
        });
    }

    check() {
        this.setup();
    }
}

class Filter {
    constructor() {
        this.setup();
    }

    setup() {
        const catAttrName = "data-filter-categorie";
        $("[data-default='filter']").each((index, element) => {
            let children = $(element).children()[0];
            if ($(children).attr("data-filter-area") != null) return true;

            let position = $(element).attr("data-filter-position");
            let categories = ["all"];

            if (position != null && position != "") {
                let validPositions = ["top", "bottom", "left", "right"];
                if (validPositions.indexOf(position) == -1) {
                    position = validPositions[0];
                }
            } else {
                position = "top";
            }

            let buttons = $("<ul>").attr("data-filter-area", "buttons");
            let items = $("<div>").attr("data-filter-area", "items");

            let btnSettings = null;
            let dir = null;
            switch (position) {
                case "left":
                    btnSettings = 0;
                    dir = "inherit";
                    break;
                case "right":
                    btnSettings = 0;
                    dir = "row-reverse";
                    break;
                case "bottom":
                    btnSettings = 1;
                    dir = "column-reverse";
                    break;
                case "top":
                default:
                    btnSettings = 1;
                    dir = "column";
                    break;
            }
            $(buttons).css(btnSettings == 0 ? { "margin": "auto" } : { "display": "flex", "flex-flow": "wrap", "justify-content": "center" });
            $(element).css("flex-direction", dir);

            $($(element).children("[data-filter='item']")).each((ind, elem) => {
                $(items).append(elem);

                let curCat = $(elem).attr(catAttrName);
                if (curCat != null && curCat != "") {
                    if (categories.indexOf(curCat) == -1) {
                        categories.push(curCat);
                    }
                } else {
                    $(elem).attr(catAttrName, categories[0]);
                }
            });

            categories.forEach((text, i) => {
                $("<li>")
                    .append(
                        $("<button>")
                            .attr("data-filter", "button")
                            .text(text.toUpperCase())
                            .on("click", () => {
                                switch (text) {
                                    case categories[0]:
                                        $($(items).children()).fadeIn("fast");
                                        break;
                                    default:
                                        $($(items).children()).each((ind, el) => {
                                            let cat = $(el).attr(catAttrName)

                                            if (cat == text) $(el).fadeIn("fast");
                                            else $(el).fadeOut(0);
                                        });
                                        break;
                                }
                            })
                    ).appendTo(buttons);
            });

            $(element).append(buttons);
            $(element).append(items);
        });
    }

    check() {
        this.setup();
    }
}

class Banner {
    constructor() {
        this.setup();
    }

    setup() {
        const positionAttrName = "data-banner-position";
        let distances = {
            "top": 0,
            "bottom": 0
        };

        $("[data-default='banner']").each((index, element) => {
            let btn = $($(element).children("button[data-banner='close']"))[0];
            if (btn != null) {
                btn = $("<button>")
                    .attr("data-banner", "close")
                    .addClass("fas fa-times")
                    .on("click", () => {
                        $(element).fadeOut("fast");
                        setTimeout(() => {
                            $(element).remove();
                            let pos = $(element).attr(positionAttrName);

                            switch (pos) {
                                case "top":
                                    distances.top = 0;
                                    $("[data-default='banner'][data-banner-position='top']").each((ind, el) => {
                                        $(el).css({ "top": distances.top });
                                        distances.top += $(el).outerHeight();
                                    });
                                    break;
                                case "bottom":
                                default:
                                    distances.bottom = 0;
                                    $("[data-default='banner'][data-banner-position='bottom']").each((ind, el) => {
                                        $(el).css({ "bottom": distances.bottom });
                                        distances.bottom += $(el).outerHeight();
                                    });
                                    break;
                            }
                        }, 250);
                    })
                    .appendTo(element);
            }

            let validPositions = ["bottom", "top"];
            let position = $(element).attr(positionAttrName);
            if (position == null || position == "" || validPositions.indexOf(position) == -1) {
                position = validPositions[0];
                $(element).attr(positionAttrName, validPositions[0])
            }

            let settings = {};
            switch (position) {
                case "top":
                    settings = { "top": distances.top };
                    distances.top += $(element).outerHeight();
                    break;
                case "bottom":
                default:
                    settings = { "bottom": distances.bottom };
                    distances.bottom += $(element).outerHeight();
                    break;
            }
            $(element).css(settings);
        });
    }

    check(content, position, genClose) {
        let banner = $("<div>")
            .attr("data-default", "banner")
            .html(content);

        if (position != null) {
            $(banner).attr("data-banner-position", position);
        }

        if (genClose) {
            $(banner)
                .append($("<button>")
                    .attr("data-banner", "close")
                );
        }

        $("body").append(banner);

        this.setup();
    }
}

class Info {
    constructor() {
        this.setup();
    }

    setup() {
        const stateAttrName = "data-info-state";
        const usedAttrName = "data-info-used";

        if ($("[data-default='info']").length > 0) {
            let area = $("[data-info='area']")[0] || $("<div>").attr("data-info", "area").appendTo($("body")[0]);

            $("[data-default='info']").each((index, element) => {
                let used = $(element).attr(usedAttrName);
                if (used == null || used == "" || used == false) {
                    let extraTime = (index + 1) * 500;
                    $(element)
                        .attr(usedAttrName, "false")
                        .attr(stateAttrName, "inactive")
                        .appendTo(area);

                    setTimeout(() => {
                        $(element)
                            .attr(usedAttrName, "true")
                            .attr(stateAttrName, "active");
                    }, 0);

                    setTimeout(() => {
                        $(element).attr(stateAttrName, "inactive");
                        setTimeout(() => {
                            $(element).remove();
                        }, 250);
                    }, 3000 + extraTime);
                }
            });
        }
    }

    check(content) {
        let area = $("div[data-info='area']")[0];

        $("<div>")
            .attr("data-default", "info")
            .html(content)
            .appendTo(area);

        this.setup();
    }
}

class Number {
    constructor() {
        this.setup();
    }

    setup() {
        $("input[type='number'][data-default='number']").each((index, element) => {
            let par = $(element).parents()[0];
            if ($(par).attr("data-number") == "area") return true;

            const validArrowOptions = ["none", "up", "down", "both"];
            let arrows = $(element).attr("data-number-disabled-arrows") || validArrowOptions[0];

            let min = $(element).attr("min");
            let max = $(element).attr("max");
            let step = $(element).attr("step");

            $(element).on("focusout", () => {
                let val = $(element).val();
                if (val > +max) val = +max;
                if (val < +min) val = +min;
                $(element).val(val)
            });

            if (validArrowOptions.indexOf(arrows) == -1) arrows = validArrowOptions[0];

            if (arrows != validArrowOptions[3]) {
                let area = $("<div>")
                    .attr("data-number", "area")
                    .css("width", $(element).outerWidth());

                $(element).wrap(area);


                let margin = $(element).css("margin").slice(0, -2);
                let box = $("<div>")
                    .attr("data-number", "box")
                    .css({
                        "height": $(element).innerHeight() + (+$(element).css("border-top-width").slice(0, -2) * 2),
                        "top": margin,
                        "right": -margin
                    });

                $(element).after(box);

                switch (arrows) {
                    case "up":
                        generateButton("up");
                        break;
                    case "down":
                        generateButton("down");
                        break;
                    case "none":
                    default:
                        generateButton("up");
                        generateButton("down");
                        break;
                }


                function generateButton(type) {
                    if (type == "up" || type == "down") {
                        let hei = $(element).outerHeight();

                        $("<button>")
                            .attr("data-number", "button")
                            .css({
                                "height": hei,
                                "line-height": Math.floor(hei / 2) + "px"
                            })
                            .on("click", () => {
                                let elVal = $(element).val();
                                let res = elVal;
                                step = step == null ? 1 : +step;

                                switch (type) {
                                    case "up":
                                        if (elVal == "") res = +max || 0;
                                        else if (+elVal + step > +max) res = +max;
                                        else if (max == null || +elVal + step <= +max) res = +elVal + step;
                                        break;
                                    case "down":
                                    default:
                                        if (elVal == "") res = +min || 0;
                                        else if (+elVal - step < +min) res = +min;
                                        else if (min == null || +elVal - step >= +min) res = +elVal - step;
                                        break;
                                }

                                $(element).val(res);
                            })
                            .addClass(type == "up" ? "fas fa-angle-up" : "fas fa-angle-down")
                            .appendTo(box);
                    }
                }
            }
        });
    }

    check() {
        this.setup();
    }
}

class Radio {
    constructor() {
        this.setup();
    }

    setup() {
        const scopeAttrName = "data-radio-scope";
        const stateAttrName = "data-radio-state";

        $("[data-default='radio']").each((index, element) => {
            let par = $(element).parents()[0];
            if ($(par).attr("data-radio") == "area") return true;

            let area = $("<div>")
                .attr("data-radio", "area")
                .css({
                    "height": $(element).innerHeight(),
                    "width": $(element).innerWidth()
                });

            $(element).wrap(area);

            let nameValue = $(element).attr("name");
            let iconCls = "fas fa-check";
            let box = $("<div>")
                .attr("data-radio", "box")
                .attr(scopeAttrName, nameValue)
                .appendTo($(element).parent())
                .on("click", (e) => {
                    let state = $(box).attr(stateAttrName);

                    if (nameValue != null) {
                        $("[data-radio='box'][data-radio-scope='" + nameValue + "']")
                            .removeClass(iconCls)
                            .removeAttr(stateAttrName);
                    }

                    if (state != "active") {
                        $(box)
                            .addClass(iconCls)
                            .attr(stateAttrName, "active");
                        $(element).prop("checked", true);
                    } else {
                        $(element).prop("checked", false);
                    }

                });
        });

        $("input[type='radio']").on("click", (e) => {
            let naVa = $(e.currentTarget).attr("name");

            if (naVa != null) {
                $("[data-radio='box'][data-radio-scope='" + naVa + "']")
                    .removeClass("fas fa-check")
                    .removeAttr(stateAttrName);
            } else {
                $(e.currentTarget).removeClass("fas fa-check").removeAttr(stateAttrName)
            }
        });
    }

    check() {
        this.setup();
    }
}

class File {
    constructor() {
        this.setup();
    }

    setup() {
        $("[type='file'][data-default='file']").each((index, element) => {
            let par = $(element).parents()[0];
            if ($(par).attr("data-file") == "area") return true;

            let maxSize = ($(element).attr("data-file-max") + "").toUpperCase().trim();

            let possibleSizeTypes = ["B", "KB", "MB", "GB"];
            let dataSizeValue = null; /* Bytes */

            if (maxSize.match(/^[.0-9]+(B|KB|MB|GB)$/)) {
                for (let i = possibleSizeTypes.length - 1; i >= 0; i--) {
                    if (maxSize.includes(possibleSizeTypes[i])) {
                        dataSizeValue = Math.pow(1024, i) * +maxSize.replace(/[A-Z]+/g, '');
                        break;
                    }
                }
            }

            let area = $("<div>")
                .attr("data-file", "area")
                .css({
                    "height": $(element).outerHeight(),
                    "margin": $(element).css("margin")
                });

            let info = $("<div>")
                .attr("data-file", "info")
                .text("0 Dateien")
                .on("click", () => {
                    $(element).click();
                })
                .appendTo(area);

            let btn = $("<button>")
                .text("Hochladen")
                .attr("data-file", "button")
                .on("click", () => {
                    $(element).click();
                })
                .appendTo(area);

            $(element).before(area);
            $(element).detach().appendTo(area);

            $(element).on("change", () => {
                if (dataSizeValue != null) {
                    let fls = $(element)[0].files;
                    if (fls != null) {
                        let fullSizeLength = 0;
                        for (let i = 0; i < fls.length; i++) {
                            fullSizeLength += fls[i].size;
                        }
                        if (fullSizeLength > dataSizeValue) {
                            msg(false);
                            $(element).val('');
                        } else {
                            msg(true);
                        }

                        function msg(worked) {
                            let dta = "Datei" + (fls.length == 1 ? "" : "en");
                            $(info).text(!worked ? dta + " zu groß" : fls.length + " " + dta);

                            if (worked && fls.length > 0) {
                                let list = $("<ul>").attr("data-file", "list");
                                $(fls).each((i, e) => {
                                    $("<li>")
                                        .text(e.name)
                                        .appendTo(list)
                                });

                                $(info).attr("title", $("<div>").html(list).html());
                            } else {
                                $(info).attr("title", "");
                            }

                            tooltip.check(info);
                        }
                    }
                }
            });
        });
    }

    check() {
        this.setup();
    }
}

class Period {
    constructor() {
        this.setup();
    }

    setup() {
        $("[data-default='period']").each((index, element) => {
            if ($(element).children("div[data-period='area']")[0] != null) return true;

            let possiblePositions = ["left", "right"];

            let stamps = $(element).children("div[data-period='stamp']");
            let area = $("<div>")
                .attr("data-period", "area")
                .appendTo(element)

            $(stamps).each((i, e) => {
                let pos = $(e).attr("data-period-position");
                let con = $(e).children("div[data-period='content']")[0];

                if (pos == null || possiblePositions.indexOf(pos) == -1) pos = possiblePositions[0];
                if ($(con).html() == null || $(con).html().trim() == "") $(con).remove();

                let point = $("<div>").attr("data-period", "point");

                switch (pos) {
                    case "right":
                        $(area).append(e);
                        $(area).append(point);
                        break;
                    case "left":
                    default:
                        $(area).append(point);
                        $(area).append(e);
                        break;
                }
            });

            drawLines(area[0]);
        });

        function drawLine(par, x1, y1, x2, y2) {
            let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("data-period-line", "start");
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke", "var(--default)");
            line.setAttribute("stroke-dasharray", "5");
            line.setAttribute("stroke-dashoffset", "1000");
            par.appendChild(line);
        }

        function drawLines(area) {
            $(area).children("svg").remove();

            let childs = $(area).children("[data-period='point']");
            let ao = $(area).offset();

            let possibleSettings = ["point", "path"];
            let par = $(area).parents()[0];
            let startSetting = $(par).attr("data-period-start");
            let endSetting = $(par).attr("data-period-end");

            if (startSetting == null || possibleSettings.indexOf(startSetting) == -1) startSetting = possibleSettings[0];
            if (endSetting == null || possibleSettings.indexOf(endSetting) == -1) endSetting = possibleSettings[0];

            let svgNS = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgNS.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";
            area.insertBefore(svgNS, area.firstChild);

            childs.each((i, e) => {
                let len = $(childs).length;

                let cp = $(e);
                let co = $(cp).offset();
                let cw = $(cp).outerWidth();
                let ch = $(cp).outerHeight();
                let cx = co.left + cw / 2;
                let cy = co.top + ch / 2;

                cx -= ao.left;
                cy -= ao.top;

                if (i == 0) {
                    if (startSetting == possibleSettings[1]) {
                        drawLine(svgNS, cx, 0, cx, cy);
                    }
                }
                if (i == len - 1) {
                    if (endSetting == possibleSettings[1]) {
                        drawLine(svgNS, cx, cy, cx, $(area).outerHeight());
                    }
                    return true;
                }

                let np = $(childs)[i + 1];
                let no = $(np).offset();
                let nx = no.left + cw / 2;
                let ny = no.top + ch / 2;

                nx -= ao.left;
                ny -= ao.top;

                drawLine(svgNS, cx, cy, nx, ny);
            });
        }

        $(window).on("resize", () => {
            $("[data-period='area']").each((i, area) => {
                drawLines(area);
            });
        });

        document.fonts.ready.then(() => {
            $(window).resize();
        });
    }

    check() {
        this.setup();
    }
}

class Navigation {
    constructor() {
        this.setup();
    }

    setup() {
        let validNavTypes = ["fixed", "static"];
        let validToggleTypes = ["fade", "none"];
        let genAttrName = "data-navigation-generated";
        let typeAttrName = "data-navigation-type";
        let logoAttrName = "div[data-navigation='logo']";
        let itemsAttrName = "div[data-navigation='items']";
        let stateAttrName = "data-navigation-state";
        let navigationAttrName = "data-navigation";
        let toggledAttrName = "data-navigation-toggled";
        let toggleOpenAttrName = "data-navigation-toggle-open";
        let toggleAttrName = "data-navigation-work";

        $("nav[data-default='navigation']").each((index, element) => {
            if (index == 0) {
                if ($(element).attr(genAttrName) != null) return true;
                else {
                    $(element).attr(genAttrName, true);

                    let toggleType = $(element).attr(toggleAttrName);
                    let navigationType = $(element).attr(typeAttrName);
                    if (validNavTypes.indexOf(navigationType) == -1) navigationType = validNavTypes[0];
                    if (validToggleTypes.indexOf(toggleType) == -1) toggleType = validNavTypes[0];

                    let settings = {};
                    switch (navigationType) {
                        case "static":
                            settings.position = "absolute";
                            break;
                        case "fixed":
                        default:
                            settings.position = "fixed";
                            switch (toggleType) {
                                case "none":
                                    break;
                                case "fade":
                                default:
                                    $(document).on("scroll", () => {
                                        let dist = $(document).scrollTop();
                                        if (dist >= 200) $(element).attr(stateAttrName, "scrolled");
                                        else $(element).removeAttr(stateAttrName);
                                    });
                                    break;
                            }
                            break;
                    }
                    $(element).css(settings);

                    let logo = $(element).children(logoAttrName);
                    let items = $($(element).children(itemsAttrName)).children();

                    let main = $("<div>")
                        .attr(navigationAttrName, "main")
                        .append(logo)
                        .appendTo(element);

                    let list = $("<ul>")
                        .attr(navigationAttrName, "list")
                        .appendTo(main);

                    let hamburger = $("<div>")
                        .attr(navigationAttrName, "hamburger")
                        .on("click", () => {
                            $(hamburger).toggleClass("is-active");
                            $(element).attr(toggleOpenAttrName, function (index, attr) {
                                $("body").toggleClass("block-overflow");
                                if (attr == "true") return null;
                                else return "true";
                            });
                        })
                        .appendTo(main);
                    for (let i = 0; i < 3; i++) $("<span>").addClass("line").appendTo(hamburger);

                    items.each((i, e) => {
                        let content = $(e).html();
                        let href = $(e).attr("href");
                        let item = $("<li>");
                        let a = $("<a>")
                            .attr("href", href)
                            .on("click", () => {
                                if ($(element).attr(toggledAttrName) == "true") {
                                    $(hamburger).click();
                                }
                            })
                            .appendTo(item);
                        let div = $("<div>").html(content).appendTo(a);
                        list.append(item);
                    });
                    $(element).children(itemsAttrName).remove();

                    let childsWdt = 0;
                    list.children().each((i, e) => childsWdt += $(e).outerWidth())
                    let mainWdt = $(logo).outerWidth() + childsWdt;
                    $(window).on("resize", () => {
                        let windowWdt = $(window).outerWidth();
                        if (windowWdt - 50 <= mainWdt) $(element).attr(toggledAttrName, true);
                        else {
                            $(element)
                                .removeAttr(toggledAttrName)
                                .removeAttr(toggleOpenAttrName);
                            $(hamburger).removeClass("is-active");
                            $("body").removeClass("block-overflow");
                        }
                    });

                    $(document).scroll();
                }
            } else {
                $(element).remove();
            }
        });
    }

    check() {
        this.setup();
    }
}

class Footer {
    constructor() {
        this.setup();
    }

    setup() {
        let genAttrName = "data-footer-generated";
        $("footer[data-default='footer']").each((index, element) => {
            if (index == 0) {
                if ($(element).attr(genAttrName) != "true") {
                    $(element).attr(genAttrName, true);

                    let infoHTML = "";
                    try { infoHTML = footermsg; }
                    catch {
                        let current = new Date();
                        infoHTML = `<p>Copyright © ` + current.getFullYear() + `, WEBSITE BY <a href="#">Andreas Gutmann</a></p>`;
                    }

                    $("<footer>")
                        .html(infoHTML)
                        .insertBefore($(element).children("footer"));

                    let hei = $(element).outerHeight();
                    $("body").css({
                        "min-height": "calc(100vh - " + hei + "px)",
                        "padding-bottom": hei
                    });
                }
            } else $(element).remove();
        });
    }

    check() {
        this.setup();
    }
}

class List {
    constructor() {
        this.setup();
    }

    setup() {
        let useAttrName = "data-list-use";
        let valAttrName = "data-list-val";
        let itemAttrName = "data-list-item";

        $("input[data-default='list']").each((index, element) => {
            let par = $(element).parents("[data-list='area']")[0];
            if (par != null) return true;

            let useID = $(element).attr(useAttrName);

            if (useID != null && useID != "") {
                $(element).css("width", $(element).outerWidth())

                let list = $("datalist#" + useID);

                let area = $("<div>")
                    .attr("data-list", "area")
                    .css({
                        "height": $(element).outerHeight(),
                        "width": $(element).outerWidth()
                    })
                    .insertBefore(element)
                    .append(element);

                let fullBorderWidth = (2 * $(element).css("border-top-width").slice(0, -2));

                let box = $("<div>")
                    .attr("data-list", "list")
                    .css("width", $(element).outerWidth() - fullBorderWidth)
                    .appendTo(area);

                $(list).children().each((i, e) => {
                    let val = $(e).val();
                    $("<div>")
                        .attr(valAttrName, val)
                        .attr(itemAttrName, "hidden")
                        .html(val)
                        .css({
                            "height": $(element).outerHeight(),
                            "width": $(element).outerWidth() - 5 - fullBorderWidth
                        })
                        .on("mousedown", () => {
                            $(element).val(val);
                            filterElements();
                        })
                        .appendTo(box);
                });

                $(list).remove();

                $(element).on("keyup", () => {
                    let val = $(element).val();
                    $(box).hide();
                    filterElements(val);
                });

                $(element).on("blur", () => {
                    filterElements();
                });

                $(element).on("focus", () => {
                    filterElements($(element).val());
                });

                function filterElements(search) {
                    let items = $(box).children();
                    if (search == null) {
                        $(box).hide();
                        $(items).attr(itemAttrName, "hidden");
                    }
                    else {
                        $(box).show();
                        let count = false;
                        let indexArray = [];
                        items.each((i, e) => {
                            if ($(e).attr(valAttrName).indexOf(search) == 0) {
                                $(e).attr(itemAttrName, "shown").css("border-bottom-width", "1px");
                                count = true;
                                indexArray.push(i);
                            }
                            else $(e).attr(itemAttrName, "hidden");
                        });
                        if (!count) $(box).hide();
                        $(items[indexArray[indexArray.length - 1]]).css("border-bottom-width", "0px");
                    }
                }
            }
        });
    }

    check() {
        this.setup();
    }
}

class Section {
    constructor() {
        this.alreadySearched = false;
        this.clickedItem = true;
        this.listener = null;
        this.useableElements = [];

        this.setup();
    }

    setup() {
        let headingAttrName = "data-section-heading";
        let headingPositionAttrName = "data-section-heading-position";
        let waveAttrName = "data-section-wave";
        let styleAttrName = "data-section-style";

        let validHeadingPositions = ["left", "middle", "right"];
        let validStyleTypes = ["light", "dark"];

        $("[data-default='section']").each((index, element) => {
            if ($(element).children("[data-section='area']")[0] != null) return true;

            let heading = $(element).attr(headingAttrName);
            let headingPos = $(element).attr(headingPositionAttrName);
            let wave = $(element).attr(waveAttrName);
            let style = $(element).attr(styleAttrName);

            let waveColor = validStyleTypes[0];

            if (validStyleTypes.indexOf(style) == -1) style = validStyleTypes[0];
            if (index == 0) wave = false;
            else waveColor = $($("[data-default='section']")[index - 1]).css("background-color");

            let svgTypes = {
                "left": `<svg viewBox="0 0 500 150" preserveAspectRatio="none" data-section="svg"><path d="M-61.23,191.94 C93.40,-66.61 205.13,160.63 542.61,144.56 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: ` + waveColor + `"></path></svg>`,
                "middle": `<svg viewBox="0 0 500 150" preserveAspectRatio="none" data-section="svg"><path d="M-10.44,154.44 C207.38,8.39 349.03,74.89 534.71,170.22 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: ` + waveColor + `"></path></svg>`,
                "right": `<svg viewBox="0 0 500 150" preserveAspectRatio="none" data-section="svg"><path d="M-60.10,136.67 C120.48,190.09 292.04,-21.20 533.57,108.25 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: ` + waveColor + `"></path></svg>`
            }

            $(element).css("background-color", "var(--" + style + ")");

            if (validHeadingPositions.indexOf(headingPos) == -1) headingPos = validHeadingPositions[0];
            if (wave != "true") wave = false;

            if (heading != null && heading != "") {
                let correctHeading = this.getCorrectHeading(heading);

                $(element).attr("id", correctHeading);
                this.useableElements.push(element);

                let positioning = null;
                switch (headingPos) {
                    case "right":
                        positioning = "flex-end";
                        break;
                    case "middle":
                        positioning = "center";
                        break;
                    case "left":
                    default:
                        positioning = "flex-start";
                        break;
                }

                let area = $("<div>")
                    .attr("data-section", "area")
                    .css("justify-content", positioning);

                if (wave) {
                    let waveBox = $("<div>")
                        .attr("data-section-wave", "box");

                    let svg = svgTypes[headingPos];

                    waveBox.append(svg);
                    area.append(waveBox);
                }

                let box = $("<div>")
                    .attr("data-section", "box")
                    .appendTo(area);

                let headingText = $("<h1>")
                    .attr("data-section", "heading")
                    .text(heading)
                    .css("color", "var(--" + (style == validStyleTypes[0] ? validStyleTypes[1] : validStyleTypes[0]) + ")")
                    .appendTo(box);

                let headingBlock = $("<span>")
                    .attr("data-section", "block")
                    .appendTo(headingText);

                let backgroundText = $("<span>")
                    .attr("data-section", "background")
                    .text(heading)
                    .appendTo(box);


                let copier = $("<div>")
                    .attr({
                        "title": "Pfad kopieren",
                        "data-tooltip-placement": "right"
                    })
                    .attr("data-section", "copier")
                    .text("#")
                    .on("click", (e) => {
                        let url = window.location.origin + "#" + correctHeading;
                        let temp = $("<input>").appendTo($("body")).val(url).select();
                        document.execCommand("copy");
                        temp.remove();
                    })
                    .appendTo(headingText);

                $(element).prepend(area);
            }
        });

        $("a").on("click", (e) => {
            this.clickedItem = true;
            let hash = $(e.currentTarget).attr("href");
            this.scrollTo($(hash)[0]);
            setTimeout(() => {
                this.clickedItem = false;
            }, 950);
            e.preventDefault();
        });

        if (this.listener != null) {
            this.listener.off("scroll resize");
            this.listener = null;
        }

        this.listener = $(window).on("scroll resize", () => {
            if (!this.clickedItem) {
                let lastElement = null;
                let navHeight = $("nav").outerHeight();
                if (navHeight == null) navHeight = 0;

                $($(this.useableElements).get().reverse()).each((i, e) => {
                    let elTop = $(e).offset().top;
                    let elBtm = elTop + $(e).outerHeight();
                    let vpTop = $(window).scrollTop();
                    let vpBtm = vpTop + $(window).height();
                    if (elBtm > vpTop + navHeight && elTop < vpBtm) lastElement = e;
                });

                let id = $(lastElement).attr("id");
                history.replaceState({}, "", "#" + id);
            }
        });

        if (!this.alreadySearched) {
            let navHeight = $("nav").outerHeight();
            if (navHeight == null) navHeight = 0;
            let curHash = window.location.hash;
            let validElements = $(this.useableElements).filter((i, e) => {
                let id = $(e).attr("id");
                if (curHash == "#" + id) return true;
            });
            if (validElements.length > 0) {
                this.scrollTo(validElements[0]);
            } else {
                this.scrollTo(null);
                history.replaceState({}, "", "#");
            }
            this.clickedItem = false;
            this.alreadySearched = true;
        }
    }

    check() {
        this.setup();
    }

    getCorrectHeading(heading) {
        heading = heading
            .toLowerCase()
            .replaceAll(" ", "-");
        return heading;
    }

    scrollTo(element) {
        $("body").stop().animate({
            scrollTop: element == null ? 0 : $(element).offset().top
        }, 1000);
    }
}