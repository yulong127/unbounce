if (typeof mouseflow === "undefined" && typeof mouseflowPlayback === "undefined") {
    (function () {
        function _643(_3, _103, _14, _22, _8, _227, _17, _197, _259, _127, _346, _186) {
            var _144 = "https://o2.mouseflow.com/";
            var _107 = "https://app.mouseflow.com";
            var _44 = "c0e4db61-3711-4265-be83-19f6e6ba9fcf";
            var _177 = 100.0;
            var _143 = [];
            var _837 = [];
            var _215 = ["thueban.vn"];
            var _244 = [];
            var _243 = [];
            var _291 = [];
            var _548 = false;
            var _743 = false;
            var _172 = "17.23";
            var _380 = false;
            var _545 = false;
            var _66 = false;
            var _178 = false;
            var _323 = false;
            var _515 = /\[(\d+)\]_mf$/;
            var _9 = _3.document;
            var _81 = _3.location;
            _640();
            var _12 = _729();
            var _0 = _421();
            var _56 = { _428: 100, _827: 250, _828: 10000, _476: 1336, _413: 1800000, _770: 3600000, _790: 7776000000, _807: 100, _777: 2000, _598: 8000, _257: 2048 };
            var _353,
                _336,
                _338,
                _232,
                _201,
                _228,
                _400,
                _283,
                _239,
                _361 = [],
                _335 = [];
            var _5 = {
                _269: 0,
                _264: 1,
                _267: 2,
                _277: 3,
                _256: 4,
                _276: 5,
                _275: 6,
                _176: 7,
                _305: 8,
                _273: 9,
                _200: 10,
                _466: 11,
                _514: 12,
                _280: 13,
                _543: 14,
                _80: 15,
                _879: 16,
                _878: 17,
                _94: 18,
                _368: 19,
                _697: 20,
                _309: 21,
                _311: 22,
                _271: 23,
                _314: 24,
                _310: 25,
                _313: 26,
                _303: 27,
                _302: 28,
                _501: 29,
                _329: 30,
                _498: 31,
                _354: 32,
                _272: 33,
                _429: 34,
                _188: 35,
                _463: 36,
                _462: 37,
                _47: 38,
                _330: 39,
                _731: 40,
                _241: 41,
                _89: 42,
            };
            var _88 = {
                _423: { _25: "bounce", _4: 2, _50: 1 },
                _804: { _25: "click-rage", _4: 5, _50: 2 },
                _506: { _25: "click-error", _4: 2, _50: 3 },
                _422: { _25: "mobility", _4: 3, _50: 4 },
                _176: { _25: "mouse-out", _4: 1, _50: 5 },
                _465: { _25: "speed-browsing", _4: 1, _50: 6 },
                _188: { _25: "submit-failure", _4: 3, _50: 7 },
            };
            var _648 = /[\x20\r\n]+/g;
            var _623 = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@/;
            var _632 = /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})/;
            var _672 = /^(onbeforeunload|onblur|onchange|onclick|onfocus|oninput|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onresize|onsubmit|ontouchcancel|ontouchend|ontouchenter|ontouchleave|ontouchmove|ontouchstart|onunload)$/;
            var _629 = /checkbox|radio|button|submit|file|image|reset/;
            function _640() {
                if (!_3._mfq) _3._mfq = [];
                for (var _48 = 0; _48 < _3._mfq.length; _48++) {
                    var _43 = _3._mfq[_48];
                    if (_43 && _43.length && _43[0] === "config") _14._541.apply(_14, _43.slice(1));
                }
            }
            function _328(_261) {
                if (!_261) _261 = [];
                var _46 = this;
                _3.setTimeout(function () {
                    for (var _48 = 0; _48 < _261.length; _48++) _46.push(_261[_48]);
                }, 1);
            }
            _328.prototype.push = function (_43) {
                if (!_43) return;
                try {
                    if (typeof _43 === "object" && _43.length) {
                        mouseflow[_43.slice(0, 1)].apply(mouseflow, _43.slice(1));
                    } else if (typeof _43 === "function") {
                        _43(mouseflow);
                    }
                } catch (error) {
                    var _145 = "Failed to execute item on action queue";
                    var _443 = _8._70(_43);
                    if (_443) _145 += "\n" + _443;
                    _145 += "\n" + error;
                    _10(_145);
                }
            };
            // Copyright 2011 Google Inc.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            //     http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            //
            // This component contains modifications carried out by Mouseflow ApS.
            var __extends =
                this.__extends ||
                function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() {
                        this.constructor = d;
                    }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
            var MutationObserverCtor;
            if (typeof WebKitMutationObserver !== "undefined") MutationObserverCtor = WebKitMutationObserver;
            else if (typeof MutationObserver !== "undefined") MutationObserverCtor = MutationObserver;
            if (MutationObserverCtor === undefined) {
                _10("DOM Mutation Observers not supported.");
            }
            var NodeMap = (function () {
                function NodeMap() {
                    this.nodes = [];
                    this.values = [];
                }
                NodeMap.prototype.isIndex = function (s) {
                    return +s === s >>> 0;
                };
                NodeMap.prototype.nodeId = function (node) {
                    var id = node[NodeMap.ID_PROP];
                    if (!id) id = node[NodeMap.ID_PROP] = NodeMap.nextId_++;
                    return id;
                };
                NodeMap.prototype.set = function (node, value) {
                    var id = this.nodeId(node);
                    this.nodes[id] = node;
                    this.values[id] = value;
                };
                NodeMap.prototype.get = function (node) {
                    var id = this.nodeId(node);
                    return this.values[id];
                };
                NodeMap.prototype.has = function (node) {
                    return this.nodeId(node) in this.nodes;
                };
                NodeMap.prototype.deleteNode = function (node) {
                    var id = this.nodeId(node);
                    delete this.nodes[id];
                    this.values[id] = undefined;
                };
                NodeMap.prototype.keys = function () {
                    var nodes = [];
                    for (var id in this.nodes) {
                        if (!this.isIndex(id)) continue;
                        nodes.push(this.nodes[id]);
                    }
                    return nodes;
                };
                NodeMap.ID_PROP = "__mouseflow_node_map_id__";
                NodeMap.nextId_ = 1;
                return NodeMap;
            })();
            var Movement;
            (function (Movement) {
                Movement[(Movement["STAYED_OUT"] = 0)] = "STAYED_OUT";
                Movement[(Movement["ENTERED"] = 1)] = "ENTERED";
                Movement[(Movement["STAYED_IN"] = 2)] = "STAYED_IN";
                Movement[(Movement["REPARENTED"] = 3)] = "REPARENTED";
                Movement[(Movement["REORDERED"] = 4)] = "REORDERED";
                Movement[(Movement["EXITED"] = 5)] = "EXITED";
            })(Movement || (Movement = {}));
            function enteredOrExited(changeType) {
                return changeType === Movement.ENTERED || changeType === Movement.EXITED;
            }
            var NodeChange = (function () {
                function NodeChange(node, childList, attributes, characterData, oldParentNode, added, attributeOldValues, characterDataOldValue) {
                    if (childList === void 0) {
                        childList = false;
                    }
                    if (attributes === void 0) {
                        attributes = false;
                    }
                    if (characterData === void 0) {
                        characterData = false;
                    }
                    if (oldParentNode === void 0) {
                        oldParentNode = null;
                    }
                    if (added === void 0) {
                        added = false;
                    }
                    if (attributeOldValues === void 0) {
                        attributeOldValues = null;
                    }
                    if (characterDataOldValue === void 0) {
                        characterDataOldValue = null;
                    }
                    this.node = node;
                    this.childList = childList;
                    this.attributes = attributes;
                    this.characterData = characterData;
                    this.oldParentNode = oldParentNode;
                    this.added = added;
                    this.attributeOldValues = attributeOldValues;
                    this.characterDataOldValue = characterDataOldValue;
                    this.isCaseInsensitive = this.node.nodeType === 1 && this.node instanceof HTMLElement && typeof HTMLDocument !== "undefined" && this.node.ownerDocument instanceof HTMLDocument;
                }
                NodeChange.prototype.getAttributeOldValue = function (name) {
                    if (!this.attributeOldValues) return undefined;
                    if (this.isCaseInsensitive) name = name.toLowerCase();
                    return this.attributeOldValues[name];
                };
                NodeChange.prototype.getAttributeNamesMutated = function () {
                    var names = [];
                    if (!this.attributeOldValues) return names;
                    for (var name in this.attributeOldValues) {
                        names.push(name);
                    }
                    return names;
                };
                NodeChange.prototype.attributeMutated = function (name, oldValue) {
                    this.attributes = true;
                    this.attributeOldValues = this.attributeOldValues || {};
                    if (name in this.attributeOldValues) return;
                    this.attributeOldValues[name] = oldValue;
                };
                NodeChange.prototype.characterDataMutated = function (oldValue) {
                    if (this.characterData) return;
                    this.characterData = true;
                    this.characterDataOldValue = oldValue;
                };
                NodeChange.prototype.removedFromParent = function (parent) {
                    this.childList = true;
                    if (this.added || this.oldParentNode) this.added = false;
                    else this.oldParentNode = parent;
                };
                NodeChange.prototype.insertedIntoParent = function () {
                    this.childList = true;
                    this.added = true;
                };
                NodeChange.prototype.getOldParent = function () {
                    if (this.childList) {
                        if (this.oldParentNode) return this.oldParentNode;
                        if (this.added) return null;
                    }
                    return this.node.parentNode;
                };
                return NodeChange;
            })();
            var ChildListChange = (function () {
                function ChildListChange() {
                    this.added = new NodeMap();
                    this.removed = new NodeMap();
                    this.maybeMoved = new NodeMap();
                    this.oldPrevious = new NodeMap();
                    this.moved = undefined;
                }
                return ChildListChange;
            })();
            var TreeChanges = (function (_444) {
                __extends(TreeChanges, _444);
                function TreeChanges(rootNode, mutations) {
                    _444.call(this);
                    this.rootNode = rootNode;
                    this.reachableCache = undefined;
                    this.wasReachableCache = undefined;
                    this.anyParentsChanged = false;
                    this.anyAttributesChanged = false;
                    this.anyCharacterDataChanged = false;
                    for (var m = 0; m < mutations.length; m++) {
                        var mutation = mutations[m];
                        switch (mutation.type) {
                            case "childList":
                                this.anyParentsChanged = true;
                                for (var i = 0; i < mutation.removedNodes.length; i++) {
                                    var node = mutation.removedNodes[i];
                                    this.getChange(node).removedFromParent(mutation.target);
                                }
                                for (var i = 0; i < mutation.addedNodes.length; i++) {
                                    var node = mutation.addedNodes[i];
                                    this.getChange(node).insertedIntoParent();
                                }
                                break;
                            case "attributes":
                                this.anyAttributesChanged = true;
                                var change = this.getChange(mutation.target);
                                change.attributeMutated(mutation.attributeName, mutation.oldValue);
                                break;
                            case "characterData":
                                this.anyCharacterDataChanged = true;
                                var change = this.getChange(mutation.target);
                                change.characterDataMutated(mutation.oldValue);
                                break;
                        }
                    }
                }
                TreeChanges.prototype.getChange = function (node) {
                    var change = this.get(node);
                    if (!change) {
                        change = new NodeChange(node);
                        this.set(node, change);
                    }
                    return change;
                };
                TreeChanges.prototype.getOldParent = function (node) {
                    var change = this.get(node);
                    return change ? change.getOldParent() : node.parentNode;
                };
                TreeChanges.prototype.getIsReachable = function (node) {
                    if (node === this.rootNode) return true;
                    if (!node) return false;
                    this.reachableCache = this.reachableCache || new NodeMap();
                    var isReachable = this.reachableCache.get(node);
                    if (isReachable === undefined) {
                        isReachable = this.getIsReachable(node.parentNode);
                        this.reachableCache.set(node, isReachable);
                    }
                    return isReachable;
                };
                TreeChanges.prototype.getWasReachable = function (node) {
                    if (node === this.rootNode) return true;
                    if (!node) return false;
                    this.wasReachableCache = this.wasReachableCache || new NodeMap();
                    var wasReachable = this.wasReachableCache.get(node);
                    if (wasReachable === undefined) {
                        wasReachable = this.getWasReachable(this.getOldParent(node));
                        this.wasReachableCache.set(node, wasReachable);
                    }
                    return wasReachable;
                };
                TreeChanges.prototype.reachabilityChange = function (node) {
                    if (this.getIsReachable(node)) {
                        return this.getWasReachable(node) ? Movement.STAYED_IN : Movement.ENTERED;
                    }
                    return this.getWasReachable(node) ? Movement.EXITED : Movement.STAYED_OUT;
                };
                return TreeChanges;
            })(NodeMap);
            var MutationProjection = (function () {
                function MutationProjection(rootNode, mutations, selectors, calcReordered, calcOldPreviousSibling) {
                    this.rootNode = rootNode;
                    this.mutations = mutations;
                    this.selectors = selectors;
                    this.calcReordered = calcReordered;
                    this.calcOldPreviousSibling = calcOldPreviousSibling;
                    this.treeChanges = new TreeChanges(rootNode, mutations);
                    this.entered = [];
                    this.exited = [];
                    this.stayedIn = new NodeMap();
                    this.visited = new NodeMap();
                    this.childListChangeMap = undefined;
                    this.characterDataOnly = undefined;
                    this.matchCache = undefined;
                    this.processMutations();
                }
                MutationProjection.prototype.processMutations = function () {
                    if (!this.treeChanges.anyParentsChanged && !this.treeChanges.anyAttributesChanged) return;
                    var changedNodes = this.treeChanges.keys();
                    for (var i = 0; i < changedNodes.length; i++) {
                        this.visitNode(changedNodes[i], undefined);
                    }
                };
                MutationProjection.prototype.visitNode = function (node, parentReachable) {
                    if (this.visited.has(node)) return;
                    this.visited.set(node, true);
                    var change = this.treeChanges.get(node);
                    var reachable = parentReachable;
                    if ((change && change.childList) || reachable == undefined) reachable = this.treeChanges.reachabilityChange(node);
                    if (reachable === Movement.STAYED_OUT) return;
                    this.matchabilityChange(node);
                    if (reachable === Movement.ENTERED) {
                        this.entered.push(node);
                    } else if (reachable === Movement.EXITED) {
                        this.exited.push(node);
                        this.ensureHasOldPreviousSiblingIfNeeded(node);
                    } else if (reachable === Movement.STAYED_IN) {
                        var movement = Movement.STAYED_IN;
                        if (change && change.childList) {
                            if (change.oldParentNode !== node.parentNode) {
                                movement = Movement.REPARENTED;
                                this.ensureHasOldPreviousSiblingIfNeeded(node);
                            } else if (this.calcReordered && this.wasReordered(node)) {
                                movement = Movement.REORDERED;
                            }
                        }
                        this.stayedIn.set(node, movement);
                    }
                    if (reachable === Movement.STAYED_IN) return;
                    for (var child = node.firstChild; child; child = child.nextSibling) {
                        this.visitNode(child, reachable);
                    }
                };
                MutationProjection.prototype.ensureHasOldPreviousSiblingIfNeeded = function (node) {
                    if (!this.calcOldPreviousSibling) return;
                    this.processChildlistChanges();
                    var parentNode = node.parentNode;
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode) parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) {
                        change = new ChildListChange();
                        this.childListChangeMap.set(parentNode, change);
                    }
                    if (!change.oldPrevious.has(node)) {
                        change.oldPrevious.set(node, node.previousSibling);
                    }
                };
                MutationProjection.prototype.getChanged = function (summary, selectors, characterDataOnly) {
                    this.selectors = selectors;
                    this.characterDataOnly = characterDataOnly;
                    for (var i = 0; i < this.entered.length; i++) {
                        var node = this.entered[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.ENTERED || matchable === Movement.STAYED_IN) summary.added.push(node);
                    }
                    var stayedInNodes = this.stayedIn.keys();
                    for (var i = 0; i < stayedInNodes.length; i++) {
                        var node = stayedInNodes[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.ENTERED) {
                            summary.added.push(node);
                        } else if (matchable === Movement.EXITED) {
                            summary.removed.push(node);
                        } else if (matchable === Movement.STAYED_IN && (summary.reparented || summary.reordered)) {
                            var movement = this.stayedIn.get(node);
                            if (summary.reparented && movement === Movement.REPARENTED) summary.reparented.push(node);
                            else if (summary.reordered && movement === Movement.REORDERED) summary.reordered.push(node);
                        }
                    }
                    for (var i = 0; i < this.exited.length; i++) {
                        var node = this.exited[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.EXITED || matchable === Movement.STAYED_IN) summary.removed.push(node);
                    }
                };
                MutationProjection.prototype.getOldParentNode = function (node) {
                    var change = this.treeChanges.get(node);
                    if (change && change.childList) return change.oldParentNode ? change.oldParentNode : null;
                    var reachabilityChange = this.treeChanges.reachabilityChange(node);
                    if (reachabilityChange === Movement.STAYED_OUT || reachabilityChange === Movement.ENTERED) throw Error("getOldParentNode requested on invalid node.");
                    return node.parentNode;
                };
                MutationProjection.prototype.getOldPreviousSibling = function (node) {
                    var parentNode = node.parentNode;
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode) parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) throw Error("getOldPreviousSibling requested on invalid node.");
                    return change.oldPrevious.get(node);
                };
                MutationProjection.prototype.getOldAttribute = function (element, attrName) {
                    var change = this.treeChanges.get(element);
                    if (!change || !change.attributes) throw Error("getOldAttribute requested on invalid node.");
                    var value = change.getAttributeOldValue(attrName);
                    if (value === undefined) throw Error("getOldAttribute requested for unchanged attribute name.");
                    return value;
                };
                MutationProjection.prototype.attributeChangedNodes = function (includeAttributes) {
                    if (!this.treeChanges.anyAttributesChanged) return {};
                    var attributeFilter;
                    var caseInsensitiveFilter;
                    if (includeAttributes) {
                        attributeFilter = {};
                        caseInsensitiveFilter = {};
                        for (var i = 0; i < includeAttributes.length; i++) {
                            var attrName = includeAttributes[i];
                            attributeFilter[attrName] = true;
                            caseInsensitiveFilter[attrName.toLowerCase()] = attrName;
                        }
                    }
                    var result = {};
                    var nodes = this.treeChanges.keys();
                    for (var i = 0; i < nodes.length; i++) {
                        var node = nodes[i];
                        var change = this.treeChanges.get(node);
                        if (!change.attributes) continue;
                        if (Movement.STAYED_IN !== this.treeChanges.reachabilityChange(node) || Movement.STAYED_IN !== this.matchabilityChange(node)) {
                            continue;
                        }
                        var element = node;
                        var changedAttrNames = change.getAttributeNamesMutated();
                        for (var j = 0; j < changedAttrNames.length; j++) {
                            var attrName = changedAttrNames[j];
                            if (attributeFilter && !attributeFilter[attrName] && !(change.isCaseInsensitive && caseInsensitiveFilter[attrName])) {
                                continue;
                            }
                            var oldValue = change.getAttributeOldValue(attrName);
                            if (oldValue === element.getAttribute(attrName)) continue;
                            if (caseInsensitiveFilter && change.isCaseInsensitive) attrName = caseInsensitiveFilter[attrName];
                            result[attrName] = result[attrName] || [];
                            result[attrName].push(element);
                        }
                    }
                    return result;
                };
                MutationProjection.prototype.getOldCharacterData = function (node) {
                    var change = this.treeChanges.get(node);
                    if (!change || !change.characterData) throw Error("getOldCharacterData requested on invalid node.");
                    return change.characterDataOldValue;
                };
                MutationProjection.prototype.getCharacterDataChanged = function () {
                    if (!this.treeChanges.anyCharacterDataChanged) return [];
                    var nodes = this.treeChanges.keys();
                    var result = [];
                    for (var i = 0; i < nodes.length; i++) {
                        var target = nodes[i];
                        if (Movement.STAYED_IN !== this.treeChanges.reachabilityChange(target)) continue;
                        var change = this.treeChanges.get(target);
                        if (!change.characterData || target.textContent == change.characterDataOldValue) continue;
                        result.push(target);
                    }
                    return result;
                };
                MutationProjection.prototype.computeMatchabilityChange = function (selector, el) {
                    if (!this.matchCache) this.matchCache = [];
                    if (!this.matchCache[selector.uid]) this.matchCache[selector.uid] = new NodeMap();
                    var cache = this.matchCache[selector.uid];
                    var result = cache.get(el);
                    if (result === undefined) {
                        result = selector.matchabilityChange(el, this.treeChanges.get(el));
                        cache.set(el, result);
                    }
                    return result;
                };
                MutationProjection.prototype.matchabilityChange = function (node) {
                    var _46 = this;
                    if (this.characterDataOnly) {
                        switch (node.nodeType) {
                            case 8:
                            case 3:
                                return Movement.STAYED_IN;
                            default:
                                return Movement.STAYED_OUT;
                        }
                    }
                    if (!this.selectors) return Movement.STAYED_IN;
                    if (node.nodeType !== 1) return Movement.STAYED_OUT;
                    var el = node;
                    var matchChanges = this.selectors.map(function (selector) {
                        return _46.computeMatchabilityChange(selector, el);
                    });
                    var accum = Movement.STAYED_OUT;
                    var i = 0;
                    while (accum !== Movement.STAYED_IN && i < matchChanges.length) {
                        switch (matchChanges[i]) {
                            case Movement.STAYED_IN:
                                accum = Movement.STAYED_IN;
                                break;
                            case Movement.ENTERED:
                                if (accum === Movement.EXITED) accum = Movement.STAYED_IN;
                                else accum = Movement.ENTERED;
                                break;
                            case Movement.EXITED:
                                if (accum === Movement.ENTERED) accum = Movement.STAYED_IN;
                                else accum = Movement.EXITED;
                                break;
                        }
                        i++;
                    }
                    return accum;
                };
                MutationProjection.prototype.getChildlistChange = function (el) {
                    var change = this.childListChangeMap.get(el);
                    if (!change) {
                        change = new ChildListChange();
                        this.childListChangeMap.set(el, change);
                    }
                    return change;
                };
                MutationProjection.prototype.processChildlistChanges = function () {
                    if (this.childListChangeMap) return;
                    this.childListChangeMap = new NodeMap();
                    for (var i = 0; i < this.mutations.length; i++) {
                        var mutation = this.mutations[i];
                        if (mutation.type != "childList") continue;
                        if (this.treeChanges.reachabilityChange(mutation.target) !== Movement.STAYED_IN && !this.calcOldPreviousSibling) continue;
                        var change = this.getChildlistChange(mutation.target);
                        var oldPrevious = mutation.previousSibling;
                        function recordOldPrevious(node, previous) {
                            if (!node || change.oldPrevious.has(node) || change.added.has(node) || change.maybeMoved.has(node)) return;
                            if (previous && (change.added.has(previous) || change.maybeMoved.has(previous))) return;
                            change.oldPrevious.set(node, previous);
                        }
                        for (var j = 0; j < mutation.removedNodes.length; j++) {
                            var node = mutation.removedNodes[j];
                            recordOldPrevious(node, oldPrevious);
                            if (change.added.has(node)) {
                                change.added.deleteNode(node);
                            } else {
                                change.removed.set(node, true);
                                change.maybeMoved.deleteNode(node);
                            }
                            oldPrevious = node;
                        }
                        recordOldPrevious(mutation.nextSibling, oldPrevious);
                        for (var j = 0; j < mutation.addedNodes.length; j++) {
                            var node = mutation.addedNodes[j];
                            if (change.removed.has(node)) {
                                change.removed.deleteNode(node);
                                change.maybeMoved.set(node, true);
                            } else {
                                change.added.set(node, true);
                            }
                        }
                    }
                };
                MutationProjection.prototype.wasReordered = function (node) {
                    if (!this.treeChanges.anyParentsChanged) return false;
                    this.processChildlistChanges();
                    var parentNode = node.parentNode;
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode) parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) return false;
                    if (change.moved) return change.moved.get(node);
                    change.moved = new NodeMap();
                    var pendingMoveDecision = new NodeMap();
                    function isMoved(node) {
                        if (!node) return false;
                        if (!change.maybeMoved.has(node)) return false;
                        var didMove = change.moved.get(node);
                        if (didMove !== undefined) return didMove;
                        if (pendingMoveDecision.has(node)) {
                            didMove = true;
                        } else {
                            pendingMoveDecision.set(node, true);
                            didMove = getPrevious(node) !== getOldPrevious(node);
                        }
                        if (pendingMoveDecision.has(node)) {
                            pendingMoveDecision.deleteNode(node);
                            change.moved.set(node, didMove);
                        } else {
                            didMove = change.moved.get(node);
                        }
                        return didMove;
                    }
                    var oldPreviousCache = new NodeMap();
                    function getOldPrevious(node) {
                        var oldPrevious = oldPreviousCache.get(node);
                        if (oldPrevious !== undefined) return oldPrevious;
                        oldPrevious = change.oldPrevious.get(node);
                        while (oldPrevious && (change.removed.has(oldPrevious) || isMoved(oldPrevious))) {
                            oldPrevious = getOldPrevious(oldPrevious);
                        }
                        if (oldPrevious === undefined) oldPrevious = node.previousSibling;
                        oldPreviousCache.set(node, oldPrevious);
                        return oldPrevious;
                    }
                    var previousCache = new NodeMap();
                    function getPrevious(node) {
                        if (previousCache.has(node)) return previousCache.get(node);
                        var previous = node.previousSibling;
                        while (previous && (change.added.has(previous) || isMoved(previous))) previous = previous.previousSibling;
                        previousCache.set(node, previous);
                        return previous;
                    }
                    change.maybeMoved.keys().forEach(isMoved);
                    return change.moved.get(node);
                };
                return MutationProjection;
            })();
            var Summary = (function () {
                function Summary(projection, query) {
                    var _46 = this;
                    this.projection = projection;
                    this.added = [];
                    this.removed = [];
                    this.reparented = query.all || query.element || query.characterData ? [] : undefined;
                    this.reordered = query.all ? [] : undefined;
                    projection.getChanged(this, query.elementFilter, query.characterData);
                    if (query.all || query.attribute || query.attributeList) {
                        var filter = query.attribute ? [query.attribute] : query.attributeList;
                        var attributeChanged = projection.attributeChangedNodes(filter);
                        if (query.attribute) {
                            this.valueChanged = attributeChanged[query.attribute] || [];
                        } else {
                            this.attributeChanged = attributeChanged;
                            if (query.attributeList) {
                                query.attributeList.forEach(function (attrName) {
                                    if (!_46.attributeChanged.hasOwnProperty(attrName)) _46.attributeChanged[attrName] = [];
                                });
                            }
                        }
                    }
                    if (query.all || query.characterData) {
                        var characterDataChanged = projection.getCharacterDataChanged();
                        if (query.characterData) this.valueChanged = characterDataChanged;
                        else this.characterDataChanged = characterDataChanged;
                    }
                    if (this.reordered) this.getOldPreviousSibling = projection.getOldPreviousSibling.bind(projection);
                }
                Summary.prototype.getOldParentNode = function (node) {
                    return this.projection.getOldParentNode(node);
                };
                Summary.prototype.getOldAttribute = function (node, name) {
                    return this.projection.getOldAttribute(node, name);
                };
                Summary.prototype.getOldCharacterData = function (node) {
                    return this.projection.getOldCharacterData(node);
                };
                Summary.prototype.getOldPreviousSibling = function (node) {
                    return this.projection.getOldPreviousSibling(node);
                };
                return Summary;
            })();
            var validNameInitialChar = /[a-zA-Z_]+/;
            var validNameNonInitialChar = /[a-zA-Z0-9_\-]+/;
            function escapeQuotes(value) {
                return '"' + value.replace(/"/, '\\"') + '"';
            }
            var Qualifier = (function () {
                function Qualifier() {}
                Qualifier.prototype.matches = function (oldValue) {
                    if (oldValue === null) return false;
                    if (this.attrValue === undefined) return true;
                    if (!this.contains) return this.attrValue == oldValue;
                    var tokens = oldValue.split(" ");
                    for (var i = 0; i < tokens.length; i++) {
                        if (this.attrValue === tokens[i]) return true;
                    }
                    return false;
                };
                Qualifier.prototype.toString = function () {
                    if (this.attrName === "class" && this.contains) return "." + this.attrValue;
                    if (this.attrName === "id" && !this.contains) return "#" + this.attrValue;
                    if (this.contains) return "[" + this.attrName + "~=" + escapeQuotes(this.attrValue) + "]";
                    if ("attrValue" in this) return "[" + this.attrName + "=" + escapeQuotes(this.attrValue) + "]";
                    return "[" + this.attrName + "]";
                };
                return Qualifier;
            })();
            var Selector = (function () {
                function Selector() {
                    this.uid = Selector.nextUid++;
                    this.qualifiers = [];
                }
                try {
                    Object.defineProperty(Selector.prototype, "caseInsensitiveTagName", {
                        get: function () {
                            return this.tagName.toUpperCase();
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Selector.prototype, "selectorString", {
                        get: function () {
                            return this.tagName + this.qualifiers.join("");
                        },
                        enumerable: true,
                        configurable: true,
                    });
                } catch (e) {}
                Selector.prototype.isMatching = function (el) {
                    return el[Selector.matchesSelector](this.selectorString);
                };
                Selector.prototype.wasMatching = function (el, change, isMatching) {
                    if (!change || !change.attributes) return isMatching;
                    var tagName = change.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                    if (tagName !== "*" && tagName !== el.tagName) return false;
                    var attributeOldValues = [];
                    var anyChanged = false;
                    for (var i = 0; i < this.qualifiers.length; i++) {
                        var qualifier = this.qualifiers[i];
                        var oldValue = change.getAttributeOldValue(qualifier.attrName);
                        attributeOldValues.push(oldValue);
                        anyChanged = anyChanged || oldValue !== undefined;
                    }
                    if (!anyChanged) return isMatching;
                    for (var i = 0; i < this.qualifiers.length; i++) {
                        var qualifier = this.qualifiers[i];
                        var oldValue = attributeOldValues[i];
                        if (oldValue === undefined) oldValue = el.getAttribute(qualifier.attrName);
                        if (!qualifier.matches(oldValue)) return false;
                    }
                    return true;
                };
                Selector.prototype.matchabilityChange = function (el, change) {
                    var isMatching = this.isMatching(el);
                    if (isMatching) return this.wasMatching(el, change, isMatching) ? Movement.STAYED_IN : Movement.ENTERED;
                    else return this.wasMatching(el, change, isMatching) ? Movement.EXITED : Movement.STAYED_OUT;
                };
                Selector.parseSelectors = function (input) {
                    var selectors = [];
                    var currentSelector;
                    var currentQualifier;
                    function newSelector() {
                        if (currentSelector) {
                            if (currentQualifier) {
                                currentSelector.qualifiers.push(currentQualifier);
                                currentQualifier = undefined;
                            }
                            selectors.push(currentSelector);
                        }
                        currentSelector = new Selector();
                    }
                    function newQualifier() {
                        if (currentQualifier) currentSelector.qualifiers.push(currentQualifier);
                        currentQualifier = new Qualifier();
                    }
                    var WHITESPACE = /\s/;
                    var valueQuoteChar;
                    var SYNTAX_ERROR = "Invalid or unsupported selector syntax.";
                    var SELECTOR = 1;
                    var TAG_NAME = 2;
                    var QUALIFIER = 3;
                    var QUALIFIER_NAME_FIRST_CHAR = 4;
                    var QUALIFIER_NAME = 5;
                    var ATTR_NAME_FIRST_CHAR = 6;
                    var ATTR_NAME = 7;
                    var EQUIV_OR_ATTR_QUAL_END = 8;
                    var EQUAL = 9;
                    var ATTR_QUAL_END = 10;
                    var VALUE_FIRST_CHAR = 11;
                    var VALUE = 12;
                    var QUOTED_VALUE = 13;
                    var SELECTOR_SEPARATOR = 14;
                    var state = SELECTOR;
                    var i = 0;
                    while (i < input.length) {
                        var c = input[i++];
                        switch (state) {
                            case SELECTOR:
                                if (c.match(validNameInitialChar)) {
                                    newSelector();
                                    currentSelector.tagName = c;
                                    state = TAG_NAME;
                                    break;
                                }
                                if (c == "*") {
                                    newSelector();
                                    currentSelector.tagName = "*";
                                    state = QUALIFIER;
                                    break;
                                }
                                if (c == ".") {
                                    newSelector();
                                    newQualifier();
                                    currentSelector.tagName = "*";
                                    currentQualifier.attrName = "class";
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "#") {
                                    newSelector();
                                    newQualifier();
                                    currentSelector.tagName = "*";
                                    currentQualifier.attrName = "id";
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "[") {
                                    newSelector();
                                    newQualifier();
                                    currentSelector.tagName = "*";
                                    currentQualifier.attrName = "";
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case TAG_NAME:
                                if (c.match(validNameNonInitialChar)) {
                                    currentSelector.tagName += c;
                                    break;
                                }
                                if (c == ".") {
                                    newQualifier();
                                    currentQualifier.attrName = "class";
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "#") {
                                    newQualifier();
                                    currentQualifier.attrName = "id";
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "[") {
                                    newQualifier();
                                    currentQualifier.attrName = "";
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c.match(WHITESPACE)) {
                                    state = SELECTOR_SEPARATOR;
                                    break;
                                }
                                if (c == ",") {
                                    state = SELECTOR;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                            case QUALIFIER:
                                if (c == ".") {
                                    newQualifier();
                                    currentQualifier.attrName = "class";
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "#") {
                                    newQualifier();
                                    currentQualifier.attrName = "id";
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "[") {
                                    newQualifier();
                                    currentQualifier.attrName = "";
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c.match(WHITESPACE)) {
                                    state = SELECTOR_SEPARATOR;
                                    break;
                                }
                                if (c == ",") {
                                    state = SELECTOR;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                            case QUALIFIER_NAME_FIRST_CHAR:
                                if (c.match(validNameInitialChar)) {
                                    currentQualifier.attrValue = c;
                                    state = QUALIFIER_NAME;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                            case QUALIFIER_NAME:
                                if (c.match(validNameNonInitialChar)) {
                                    currentQualifier.attrValue += c;
                                    break;
                                }
                                if (c == ".") {
                                    newQualifier();
                                    currentQualifier.attrName = "class";
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "#") {
                                    newQualifier();
                                    currentQualifier.attrName = "id";
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c == "[") {
                                    newQualifier();
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break;
                                }
                                if (c.match(WHITESPACE)) {
                                    state = SELECTOR_SEPARATOR;
                                    break;
                                }
                                if (c == ",") {
                                    state = SELECTOR;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                            case ATTR_NAME_FIRST_CHAR:
                                if (c.match(validNameInitialChar)) {
                                    currentQualifier.attrName = c;
                                    state = ATTR_NAME;
                                    break;
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case ATTR_NAME:
                                if (c.match(validNameNonInitialChar)) {
                                    currentQualifier.attrName += c;
                                    break;
                                }
                                if (c.match(WHITESPACE)) {
                                    state = EQUIV_OR_ATTR_QUAL_END;
                                    break;
                                }
                                if (c == "~") {
                                    currentQualifier.contains = true;
                                    state = EQUAL;
                                    break;
                                }
                                if (c == "=") {
                                    currentQualifier.attrValue = "";
                                    state = VALUE_FIRST_CHAR;
                                    break;
                                }
                                if (c == "]") {
                                    state = QUALIFIER;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                            case EQUIV_OR_ATTR_QUAL_END:
                                if (c == "~") {
                                    currentQualifier.contains = true;
                                    state = EQUAL;
                                    break;
                                }
                                if (c == "=") {
                                    currentQualifier.attrValue = "";
                                    state = VALUE_FIRST_CHAR;
                                    break;
                                }
                                if (c == "]") {
                                    state = QUALIFIER;
                                    break;
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case EQUAL:
                                if (c == "=") {
                                    currentQualifier.attrValue = "";
                                    state = VALUE_FIRST_CHAR;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                            case ATTR_QUAL_END:
                                if (c == "]") {
                                    state = QUALIFIER;
                                    break;
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case VALUE_FIRST_CHAR:
                                if (c.match(WHITESPACE)) break;
                                if (c == '"' || c == "'") {
                                    valueQuoteChar = c;
                                    state = QUOTED_VALUE;
                                    break;
                                }
                                currentQualifier.attrValue += c;
                                state = VALUE;
                                break;
                            case VALUE:
                                if (c.match(WHITESPACE)) {
                                    state = ATTR_QUAL_END;
                                    break;
                                }
                                if (c == "]") {
                                    state = QUALIFIER;
                                    break;
                                }
                                if (c == "'" || c == '"') throw Error(SYNTAX_ERROR);
                                currentQualifier.attrValue += c;
                                break;
                            case QUOTED_VALUE:
                                if (c == valueQuoteChar) {
                                    state = ATTR_QUAL_END;
                                    break;
                                }
                                currentQualifier.attrValue += c;
                                break;
                            case SELECTOR_SEPARATOR:
                                if (c.match(WHITESPACE)) break;
                                if (c == ",") {
                                    state = SELECTOR;
                                    break;
                                }
                                throw Error(SYNTAX_ERROR);
                        }
                    }
                    switch (state) {
                        case SELECTOR:
                        case TAG_NAME:
                        case QUALIFIER:
                        case QUALIFIER_NAME:
                        case SELECTOR_SEPARATOR:
                            newSelector();
                            break;
                        default:
                            throw Error(SYNTAX_ERROR);
                    }
                    if (!selectors.length) throw Error(SYNTAX_ERROR);
                    return selectors;
                };
                Selector.nextUid = 1;
                Selector.matchesSelector = (function () {
                    var element = _9.createElement("div");
                    if (typeof element["webkitMatchesSelector"] === "function") return "webkitMatchesSelector";
                    if (typeof element["mozMatchesSelector"] === "function") return "mozMatchesSelector";
                    if (typeof element["msMatchesSelector"] === "function") return "msMatchesSelector";
                    return "matchesSelector";
                })();
                return Selector;
            })();
            var attributeFilterPattern = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;
            function validateAttribute(attribute) {
                if (typeof attribute != "string") throw Error("Invalid request opion. attribute must be a non-zero length string.");
                attribute = attribute.trim();
                if (!attribute) throw Error("Invalid request opion. attribute must be a non-zero length string.");
                if (!attribute.match(attributeFilterPattern)) throw Error("Invalid request option. invalid attribute name: " + attribute);
                return attribute;
            }
            function validateElementAttributes(attribs) {
                if (!attribs.trim().length) throw Error("Invalid request option: elementAttributes must contain at least one attribute.");
                var lowerAttributes = {};
                var attributes = {};
                var tokens = attribs.split(/\s+/);
                for (var i = 0; i < tokens.length; i++) {
                    var name = tokens[i];
                    if (!name) continue;
                    var name = validateAttribute(name);
                    var nameLower = name.toLowerCase();
                    if (lowerAttributes[nameLower]) throw Error("Invalid request option: observing multiple case variations of the same attribute is not supported.");
                    attributes[name] = true;
                    lowerAttributes[nameLower] = true;
                }
                return Object.keys(attributes);
            }
            function elementFilterAttributes(selectors) {
                var attributes = {};
                selectors.forEach(function (selector) {
                    selector.qualifiers.forEach(function (qualifier) {
                        attributes[qualifier.attrName] = true;
                    });
                });
                return Object.keys(attributes);
            }
            var MutationSummary = (function () {
                function MutationSummary(opts) {
                    var _46 = this;
                    this.connected = false;
                    this.options = MutationSummary.validateOptions(opts);
                    this.observerOptions = MutationSummary.createObserverOptions(this.options.queries);
                    this.root = this.options.rootNode;
                    this.callback = this.options.callback;
                    this.elementFilter = Array.prototype.concat.apply(
                        [],
                        this.options.queries.map(function (query) {
                            return query.elementFilter ? query.elementFilter : [];
                        })
                    );
                    if (!this.elementFilter.length) this.elementFilter = undefined;
                    this.calcReordered = this.options.queries.some(function (query) {
                        return query.all;
                    });
                    this.queryValidators = [];
                    if (MutationSummary.createQueryValidator) {
                        this.queryValidators = this.options.queries.map(function (query) {
                            return MutationSummary.createQueryValidator(_46.root, query);
                        });
                    }
                    this.observer = MutationObserverCtor
                        ? new MutationObserverCtor(function (mutations) {
                              _46.observerCallback(mutations);
                          })
                        : { observe: function () {} };
                    this.reconnect();
                }
                MutationSummary.createObserverOptions = function (queries) {
                    var observerOptions = { childList: true, subtree: true };
                    var attributeFilter;
                    function observeAttributes(attributes) {
                        if (observerOptions.attributes && !attributeFilter) return;
                        observerOptions.attributes = true;
                        observerOptions.attributeOldValue = true;
                        if (!attributes) {
                            attributeFilter = undefined;
                            return;
                        }
                        attributeFilter = attributeFilter || {};
                        attributes.forEach(function (attribute) {
                            attributeFilter[attribute] = true;
                            attributeFilter[attribute.toLowerCase()] = true;
                        });
                    }
                    queries.forEach(function (query) {
                        if (query.characterData) {
                            observerOptions.characterData = true;
                            observerOptions.characterDataOldValue = true;
                            return;
                        }
                        if (query.all) {
                            observeAttributes();
                            observerOptions.characterData = true;
                            observerOptions.characterDataOldValue = true;
                            return;
                        }
                        if (query.attribute) {
                            observeAttributes([query.attribute.trim()]);
                            return;
                        }
                        var attributes = elementFilterAttributes(query.elementFilter).concat(query.attributeList || []);
                        if (attributes.length) observeAttributes(attributes);
                    });
                    if (attributeFilter) observerOptions.attributeFilter = Object.keys(attributeFilter);
                    return observerOptions;
                };
                MutationSummary.validateOptions = function (options) {
                    for (var prop in options) {
                        if (!(prop in MutationSummary.optionKeys)) throw Error("Invalid option: " + prop);
                    }
                    if (typeof options.callback !== "function") throw Error("Invalid options: callback is required and must be a function");
                    if (!options.queries || !options.queries.length) throw Error("Invalid options: queries must contain at least one query request object.");
                    var opts = { callback: options.callback, rootNode: options.rootNode || _9, observeOwnChanges: !!options.observeOwnChanges, oldPreviousSibling: !!options.oldPreviousSibling, queries: [] };
                    for (var i = 0; i < options.queries.length; i++) {
                        var request = options.queries[i];
                        if (request.all) {
                            if (Object.keys(request).length > 1) throw Error("Invalid request option. all has no options.");
                            opts.queries.push({ all: true });
                            continue;
                        }
                        if ("attribute" in request) {
                            var query = { attribute: validateAttribute(request.attribute) };
                            query.elementFilter = Selector.parseSelectors("*[" + query.attribute + "]");
                            if (Object.keys(request).length > 1) throw Error("Invalid request option. attribute has no options.");
                            opts.queries.push(query);
                            continue;
                        }
                        if ("element" in request) {
                            var requestOptionCount = Object.keys(request).length;
                            var query = { element: request.element, elementFilter: Selector.parseSelectors(request.element) };
                            if (request.hasOwnProperty("elementAttributes")) {
                                query.attributeList = validateElementAttributes(request.elementAttributes);
                                requestOptionCount--;
                            }
                            if (requestOptionCount > 1) throw Error("Invalid request option. element only allows elementAttributes option.");
                            opts.queries.push(query);
                            continue;
                        }
                        if (request.characterData) {
                            if (Object.keys(request).length > 1) throw Error("Invalid request option. characterData has no options.");
                            opts.queries.push({ characterData: true });
                            continue;
                        }
                        throw Error("Invalid request option. Unknown query request.");
                    }
                    return opts;
                };
                MutationSummary.prototype.createSummaries = function (mutations) {
                    if (!mutations || !mutations.length) return [];
                    var projection = new MutationProjection(this.root, mutations, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling);
                    var summaries = [];
                    for (var i = 0; i < this.options.queries.length; i++) {
                        summaries.push(new Summary(projection, this.options.queries[i]));
                    }
                    return summaries;
                };
                MutationSummary.prototype.checkpointQueryValidators = function () {
                    this.queryValidators.forEach(function (validator) {
                        if (validator) validator.recordPreviousState();
                    });
                };
                MutationSummary.prototype.runQueryValidators = function (summaries) {
                    this.queryValidators.forEach(function (validator, index) {
                        if (validator) validator.validate(summaries[index]);
                    });
                };
                MutationSummary.prototype.changesToReport = function (summaries) {
                    return summaries.some(function (summary) {
                        var summaryProps = ["added", "removed", "reordered", "reparented", "valueChanged", "characterDataChanged"];
                        if (
                            summaryProps.some(function (prop) {
                                return summary[prop] && summary[prop].length;
                            })
                        )
                            return true;
                        if (summary.attributeChanged) {
                            var attrNames = Object.keys(summary.attributeChanged);
                            var attrsChanged = attrNames.some(function (attrName) {
                                return !!summary.attributeChanged[attrName].length;
                            });
                            if (attrsChanged) return true;
                        }
                        return false;
                    });
                };
                MutationSummary.prototype.observerCallback = function (mutations) {
                    if (!this.options.observeOwnChanges) this.observer.disconnect();
                    var summaries = this.createSummaries(mutations);
                    this.runQueryValidators(summaries);
                    if (this.options.observeOwnChanges) this.checkpointQueryValidators();
                    if (this.changesToReport(summaries)) this.callback(summaries);
                    if (!this.options.observeOwnChanges && this.connected) {
                        this.checkpointQueryValidators();
                        this.observer.observe(this.root, this.observerOptions);
                    }
                };
                MutationSummary.prototype.reconnect = function () {
                    if (this.connected) throw Error("Already connected");
                    this.observer.observe(this.root, this.observerOptions);
                    this.connected = true;
                    this.checkpointQueryValidators();
                };
                MutationSummary.prototype.takeSummaries = function () {
                    if (!this.connected) throw Error("Not connected");
                    var summaries = this.createSummaries(this.observer.takeRecords());
                    return this.changesToReport(summaries) ? summaries : undefined;
                };
                MutationSummary.prototype.disconnect = function () {
                    var summaries = this.takeSummaries();
                    this.observer.disconnect();
                    this.connected = false;
                    return summaries;
                };
                MutationSummary.NodeMap = NodeMap;
                MutationSummary.parseElementFilter = Selector.parseSelectors;
                MutationSummary.optionKeys = { callback: true, queries: true, rootNode: true, oldPreviousSibling: true, observeOwnChanges: true };
                return MutationSummary;
            })();
            var TreeMirrorClient = (function () {
                function TreeMirrorClient(target, mirror, testingQueries) {
                    var _46 = this;
                    this.target = target;
                    this.mirror = mirror;
                    this.nextId = 1;
                    this.knownNodes = new MutationSummary.NodeMap();
                    _319();
                    _317();
                    var rootId = this.serializeNode(target).id;
                    var children = [];
                    for (var child = target.firstChild; child; child = child.nextSibling) {
                        var serializedChild = this.serializeNode(child, true);
                        if (serializedChild) children.push(serializedChild);
                    }
                    this.mirror.initialize(rootId, children);
                    var self = this;
                    var queries = [{ all: true }];
                    if (testingQueries) queries = queries.concat(testingQueries);
                    this.mutationSummary = new MutationSummary({
                        rootNode: target,
                        callback: function (summaries) {
                            _46.applyChanged(summaries);
                        },
                        queries: queries,
                    });
                }
                TreeMirrorClient.prototype.disconnect = function () {
                    if (this.mutationSummary) {
                        this.mutationSummary.disconnect();
                        this.mutationSummary = undefined;
                    }
                };
                TreeMirrorClient.prototype.rememberNode = function (node) {
                    var id = this.nextId++;
                    this.knownNodes.set(node, id);
                    return id;
                };
                TreeMirrorClient.prototype.forgetNode = function (node) {
                    this.knownNodes.deleteNode(node);
                };
                TreeMirrorClient.prototype.serializeNode = function (node, isInitial) {
                    if (node === null || _185(node, "no-mouseflow-dom")) return null;
                    if (_185(node, _287)) return null;
                    var id = this.knownNodes.get(node);
                    if (id !== undefined) {
                        if (isInitial) return _10("Found duplicated node during initial DOM: " + id);
                        return { id: id };
                    }
                    var data = { nodeType: node.nodeType, id: this.rememberNode(node) };
                    if (_8._132(node, "data-mf-replace") || _8._132(node, "data-mf-replace-inner")) return null;
                    var _435 = _493(node),
                        _455 = !!_185(node.parentNode, _287);
                    if (_435 || _455) {
                        _10("CSS Blacklist blocked node. NodeType: " + node.nodeType + ". " + (node.nodeType === 1 ? "Tag: " + node.tagName : ""));
                        _181(node, _287, true);
                        if (isInitial && node.childNodes.length) {
                            var _78;
                            for (_78 = node.firstChild; _78; _78 = _78.nextSibling) this.serializeNode(_78, true);
                        }
                        if (_455) return null;
                    }
                    if (isInitial) {
                        if (_185(node.parentNode, "no-mouseflow-dom") || _8._122(node, "no-mouseflow-dom")) _181(node, "no-mouseflow-dom", "initial");
                    } else if (_185(node.parentNode, "no-mouseflow-dom")) {
                        _181(node, "no-mouseflow-dom", "inherit");
                        return null;
                    }
                    switch (data.nodeType) {
                        case 10:
                            data.name = node.name;
                            data.publicId = node.publicId;
                            data.systemId = node.systemId;
                            break;
                        case 8:
                        case 3:
                            if (node.nodeType === 8 && node.textContent.indexOf("[if") !== 0 && node.textContent.indexOf("<![endif]") !== 0) break;
                            data.textContent = _505(node).replace(_648, " ");
                            if (node.parentNode && node.parentNode.tagName === "STYLE" && /^\s*$/.test(node.textContent)) {
                                data.textContent = _379(node.parentNode);
                            }
                            break;
                        case 1:
                            if (node.tagName === "IFRAME" && node.parentNode && node.parentNode.tagName === "HEAD") {
                                data.nodeType = 8;
                                data.textContent = "";
                                break;
                            }
                            data.tagName = node.tagName;
                            if (node.attributes["data-mf-replace"]) {
                                var _212 = node.attributes["data-mf-replace"].value;
                                data = _500.call(this, _212, function (_30) {
                                    var _13 = this.serializeNode(_30, true);
                                    _13.id = data.id;
                                    this.knownNodes.set(_30, _13.id);
                                    return _13;
                                })[0];
                                break;
                            }
                            if (node.tagName === "SCRIPT") break;
                            data.attributes = {};
                            if (_435) {
                                var _431 = _607(node);
                                if (node.id) data.attributes.id = node.id;
                                if (node.name) data.attributes.name = node.name;
                                data.attributes.style = (node.style ? node.style.cssText + "; " : "") + "width: " + _431.width + "px; height: " + _431.height + "px;";
                                data.attributes.class = node.className + " mf-excluded";
                                break;
                            }
                            for (var i = 0; i < node.attributes.length; i++) {
                                var attr = node.attributes[i];
                                if (_671(attr.name.toLowerCase())) continue;
                                if (attr.name.toLowerCase() === "value" && node.tagName === "INPUT") data.attributes.value = _170(node);
                                else data.attributes[attr.name] = attr.value;
                            }
                            if (node.tagName === "IFRAME" && node.offsetWidth <= 1 && node.offsetHeight <= 1) data.attributes.src = "";
                            if (isInitial && node.tagName === "INPUT") {
                                if (!data.attributes.value && node.value) data.attributes.value = _170(node);
                                if (!data.attributes.checked && node.checked) data.attributes.checked = node.checked;
                            }
                            if (isInitial && node.tagName === "OPTION" && !data.attributes.selected && node.selected) data.attributes.selected = node.selected;
                            if (node.tagName === "INPUT" && node.type === "hidden" && data.attributes.value) data.attributes.value = "";
                            if (node.attributes["data-mf-replace-inner"]) {
                                var _212 = node.attributes["data-mf-replace-inner"].value;
                                data.childNodes = _500.call(this, _212, function (_30) {
                                    return this.serializeNode(_30, true);
                                });
                                break;
                            }
                            if (isInitial) {
                                if (node.childNodes.length) {
                                    data.childNodes = [];
                                    var _151 = false;
                                    for (var child = node.firstChild; child; child = child.nextSibling) {
                                        if (_468(child)) _151 = true;
                                        else if (_478(child.previousSibling)) _151 = false;
                                        if (_151) continue;
                                        var serializedChild = this.serializeNode(child, true);
                                        if (serializedChild) {
                                            data.childNodes.push(serializedChild);
                                        }
                                    }
                                }
                                var _454 = node.tagName === "LINK" && node.href && node.href.indexOf("blob:") === 0;
                                var _664 = node.tagName === "STYLE" && !node.textContent;
                                if (_454) {
                                    data.tagName = "STYLE";
                                    data.href = undefined;
                                    data.rel = undefined;
                                }
                                if (_454 || _664) {
                                    data.childNodes = [{ nodeType: 3, textContent: _379(node) }];
                                }
                            }
                            break;
                    }
                    return data;
                };
                TreeMirrorClient.prototype.serializeAddedAndMoved = function (added, reparented, reordered) {
                    var _46 = this;
                    var all = added.concat(reparented).concat(reordered);
                    var parentMap = new MutationSummary.NodeMap();
                    all.forEach(function (node) {
                        var parent = node.parentNode;
                        var children = parentMap.get(parent);
                        if (!children) {
                            children = new MutationSummary.NodeMap();
                            parentMap.set(parent, children);
                        }
                        children.set(node, true);
                    });
                    var moved = [];
                    var noMouseflowDom = [];
                    parentMap.keys().forEach(function (parent) {
                        var children = parentMap.get(parent);
                        var keys = children.keys();
                        while (keys.length) {
                            var node = keys[0];
                            while (node.previousSibling && children.has(node.previousSibling)) node = node.previousSibling;
                            var _151 = false;
                            while (node && children.has(node)) {
                                if (_468(node)) _151 = true;
                                else if (_478(node.previousSibling)) _151 = false;
                                if (!_151) {
                                    var data = _46.serializeNode(node);
                                    if (data) {
                                        var _265 = node.previousSibling;
                                        while (_265 && !data.previousSibling) {
                                            data.previousSibling = _46.serializeNode(_265);
                                            _265 = _265.previousSibling;
                                        }
                                        data.parentNode = _46.serializeNode(node.parentNode);
                                        if (data.parentNode) moved.push(data);
                                    }
                                    if (_8._122(node, "no-mouseflow-dom")) noMouseflowDom.push(node);
                                }
                                children.deleteNode(node);
                                node = node.nextSibling;
                            }
                            var keys = children.keys();
                        }
                    });
                    noMouseflowDom.forEach(function (node) {
                        _181(node, "no-mouseflow-dom", "initial", true);
                    });
                    return moved;
                };
                TreeMirrorClient.prototype.serializeAttributeChanges = function (attributeChanged) {
                    var _46 = this;
                    var map = new MutationSummary.NodeMap();
                    Object.keys(attributeChanged).forEach(function (attrName) {
                        attributeChanged[attrName].forEach(function (element) {
                            if (element.hasAttribute("data-mf-replace") || _8._132(element, "data-mf-replace") || _8._132(element, "data-mf-replace-inner")) {
                                return;
                            }
                            if (_8._122(element, "no-mouseflow-dom")) _181(element, "no-mouseflow-dom", "initial", true);
                            var record = map.get(element);
                            if (!record) {
                                record = _46.serializeNode(element);
                                if (record) {
                                    record.attributes = {};
                                    map.set(element, record);
                                }
                            }
                            if (record) {
                                if (attrName.toLowerCase() === "value" && element.tagName === "INPUT") record.attributes.value = _170(element);
                                else record.attributes[attrName] = element.getAttribute(attrName);
                            }
                        });
                    });
                    return map.keys().map(function (node) {
                        return map.get(node);
                    });
                };
                TreeMirrorClient.prototype.serializeTextChanges = function (textChanges) {
                    var _46 = this;
                    return textChanges.map(function (node) {
                        var data = _46.serializeNode(node);
                        if (data) data.textContent = _505(node);
                        return data;
                    });
                };
                TreeMirrorClient.prototype.applyChanged = function (summaries) {
                    _319();
                    _317();
                    var summary = summaries[0];
                    var _46 = this;
                    var removed = summary.removed.map(function (node) {
                        return _46.serializeNode(node);
                    });
                    var moved = this.serializeAddedAndMoved(summary.added, summary.reparented, summary.reordered);
                    var attributes = this.serializeAttributeChanges(summary.attributeChanged);
                    var text = this.serializeTextChanges(summary.characterDataChanged);
                    this.mirror.applyChanged({ removed: _266(removed), addedOrMoved: _266(moved), attributes: _266(attributes), text: _266(text) });
                    summary.removed.forEach(function (node) {
                        _46.forgetNode(node);
                    });
                };
                return TreeMirrorClient;
            })();
            function _266(_709) {
                return _709.filter(function (_168) {
                    return _168;
                });
            }
            function _319() {
                _361 = [];
                if (!_244.length) return;
                try {
                    var _237 = _9.querySelectorAll(_244.join(","));
                    for (var i = 0; i < _237.length; i++) {
                        _361.push(_237[i]);
                    }
                } catch (e) {}
            }
            function _317() {
                _335 = [];
                if (!_243.length) return;
                try {
                    var _237 = _9.querySelectorAll(_243.join(","));
                    for (var i = 0; i < _237.length; i++) {
                        _335.push(_237[i]);
                    }
                } catch (e) {}
            }
            function _500(_212, _719) {
                var _13 = [];
                var _316 = _9.createElement("div");
                _316.innerHTML = _212;
                for (var i = 0; i < _316.childNodes.length; i++) {
                    var _724 = _316.childNodes[i];
                    var _726 = _719.call(this, _724);
                    _13.push(_726);
                }
                return _13;
            }
            function _468(_30) {
                return _30 && _30.nodeType === 8 && _30.textContent.trim().toLowerCase().indexOf("mouseflowexcludestart") === 0;
            }
            function _478(_30) {
                return _30 && _30.nodeType === 8 && _30.textContent.trim().toLowerCase().indexOf("mouseflowexcludeend") === 0;
            }
            function _671(_321) {
                return _672.test(_321);
            }
            function _379(_30) {
                var _207 = "";
                if (!_30.sheet) return _207;
                for (var _1 = 0; _1 < _30.sheet.cssRules.length; _1++) {
                    _207 += _30.sheet.cssRules[_1].cssText;
                }
                return _207;
            }
            function _744() {
                _120({
                    _16: _144 + "install?websiteId=" + _44,
                    _149: function () {
                        _10("Website installed signal sent.");
                    },
                    _80: function () {
                        _10("Error in transmitCrossDomain - could not signal that website was installed.");
                    },
                });
            }
            function _39() {
                if (_66) {
                    _10("Recording script is already started");
                    return;
                }
                if (!_545) {
                    _10("Recording not started - recording script is not initialized");
                    return;
                }
                _656();
                _10("Recording starting, version " + _172 + (_14.gdprEnabled ? ", GDPR mode enabled." : ""));
                if (!_830()) return;
                _66 = true;
                _826();
                _319();
                _317();
                _12._93 = _808(_0._469);
                if (_812()) {
                    _12._52 = _332();
                    _0._123 = [];
                    _12._229 = 0;
                }
                var _480 = _757();
                var _16 =
                    _144 +
                    "init?v=" +
                    _172 +
                    "&p=" +
                    _44 +
                    "&s=" +
                    _12._52 +
                    "&page=" +
                    _12._93 +
                    "&ret=" +
                    (_12._210 ? "1" : "0") +
                    "&u=" +
                    _12._137 +
                    "&href={href}" +
                    "&url=" +
                    _64(_197._296()) +
                    "&ref={referrer}" +
                    "&title=" +
                    _64(_9.title) +
                    "&res=" +
                    _3.screen.width +
                    "x" +
                    _3.screen.height +
                    "&tz=" +
                    _815() +
                    "&to=" +
                    _12._489 +
                    "&dnt=" +
                    _12._467 +
                    "&ori=" +
                    (typeof _3.orientation != "undefined" ? _3.orientation : "") +
                    "&dw=" +
                    _9.documentElement.clientWidth +
                    "&dh=" +
                    _9.documentElement.clientHeight +
                    "&time=" +
                    _740() +
                    "&pxr=" +
                    (typeof _3.devicePixelRatio != "undefined" ? _3.devicePixelRatio : 1) +
                    (_480.length > 0 ? "&fw=" + _480.join(",") : "") +
                    "&gdpr=" +
                    (_14.gdprEnabled ? 1 : 0);
                var _159 = _14.location.href;
                var _464 = _56._257 - _16.length - 6;
                if (_64(_159).length > _464) _159 = _159.split("#")[0];
                if (_64(_159).length > _464) _159 = _159.split("?")[0];
                _16 = _16.replace("{href}", _64(_159));
                var _158 = _9.referrer;
                if (_16.replace("{referrer}", _64(_158)).length > _56._257) {
                    if (_158.indexOf("?") > -1) _158 = _158.split("?")[0];
                    if (_16.replace("{referrer}", _64(_158)).length > _56._257) _158 = "";
                }
                _16 = _16.replace("{referrer}", _64(_158));
                _764();
                var _483 = _691(_56._257 - _16.length - 6);
                _16 += _687(_483);
                _120({
                    _16: _16,
                    _149: function (_79) {
                        if (_79._516 === "Recording blocked") {
                            _10("Recording not started - mf_block cookie set to 1");
                            return;
                        }
                        _483.forEach(function (_118) {
                            _537(_118.key, _118.value);
                        });
                        _178 = true;
                        _696();
                        _127._39(_12, _0, _351, _94, _522, _385, _10);
                        _3._mfq = new _328(_3._mfq);
                        _675();
                        _673();
                    },
                    _781: true,
                    _80: function () {
                        _10("Error in transmitCrossDomain - recording not starting.");
                    },
                });
                if (_0._236) {
                    if (_0._236 !== _111(_14.location.pathname)) _385();
                    _0._236 = null;
                }
                _817();
                _0._75 = { x: _3.pageXOffset, y: _3.pageYOffset };
                if (_0._75.x !== 0 && _0._75.y !== 0) _497();
                _0._223 = 1;
                _349();
                _10("Recording started. Session: " + _12._52 + ", Page: " + _12._93 + ", Last page: " + _12._375);
            }
            function _60(_637) {
                if (!_66) return;
                _380 = false;
                _445();
                _22._155(_353);
                _22._155(_336);
                _22._155(_338);
                _22._126(_232);
                if (_228) {
                    _22._126(_228);
                    _604();
                }
                if (_201) {
                    _22._126(_201);
                    _426();
                }
                _824();
                if (!_637) _23(_5._697, {});
                _262();
                _178 = false;
                try {
                    _239.disconnect();
                } catch (e) {}
                _127._60();
                _259._60();
                _186._60();
                _349();
                _0 = _421();
                _10("Recording stopped");
                _66 = false;
                _323 = false;
            }
            function _758(_27, _81) {
                if (typeof _27 !== "string") _27 = (_27 || "").toString();
                if (_14.liveHeatmapsEnabled) {
                    _186._571({ url: _27 });
                }
                if (_66) {
                    if (!_380) {
                        _10("New page view skipped. Current page view is not initialized yet.");
                        return;
                    }
                    _60();
                }
                _14.htmlDelay = _14.newPageViewHtmlDelay;
                if (typeof _27 != "undefined") _14.path = _27;
                if (_81) _14.location = _81;
                _39();
                _403(0);
            }
            function _756() {
                _60();
                _9.cookie = "mf_" + _44 + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=" + _312(_81) + ";";
                if (_3.name && _3.name.length === 35 && _3.name.indexOf("mf_") === 0) _3.name = "";
            }
            function _696() {
                if (_14.htmlFetchMode === "post") {
                    _22._53(function () {
                        _695();
                    }, _14.htmlDelay);
                } else {
                    _10("Html not sent due to mouseflowHtmlFecthMode setting");
                }
            }
            function _695() {
                _239 = new TreeMirrorClient(_9, {
                    initialize: function (rootId, children) {
                        _380 = true;
                        _779({ data: { f: "initialize", args: [rootId, children] } }, _9.documentElement.innerHTML.length);
                    },
                    applyChanged: function (summary) {
                        if (_95() - _0._343 < 30000) {
                            if (summary.removed.length || summary.addedOrMoved.length || summary.attributes.length || summary.text.length) {
                                _783({ data: { f: "applyChanged", args: [summary.removed, summary.addedOrMoved, summary.attributes, summary.text] } });
                            }
                        }
                    },
                });
            }
            function _754(_24, _4, _693, _504) {
                if (!_66 || !_24) return;
                _4 = _4 || "";
                if (!_537(_24, _4)) {
                    _10("Variable already set to same value, not triggering callback.");
                    return;
                }
                var _13 = { key: _24.toString(), value: _4.toString() || "", scope: _693 || "session", overwrite: _504 === undefined ? true : _504 };
                _0._112.push(_13);
                _22._126(_201);
                _201 = _22._53(_426, 1000);
            }
            function _691(limit) {
                if (!_3._mfq.length) return [];
                var _112 = [];
                var _513 = 0;
                for (var _48 = 0; _48 < _3._mfq.length; _48++) {
                    var _43 = _3._mfq[_48];
                    if (!_43 || !_43.length || _43[0] !== "setVariable") continue;
                    if ((_43.length > 3 && _43[3] !== "session") || (_43.length > 4 && _43[4] !== true)) continue;
                    var _24 = _43[1];
                    var _4 = _43[2];
                    if (!_24 || !_4) continue;
                    if (_536(_24) !== -1) continue;
                    var _690 = _64(_24) + "=" + _64(_4);
                    _513 += _690.length + 1;
                    if (_513 - 1 >= limit) break;
                    _112.push({ key: _24, value: _4 });
                    _3._mfq.splice(_48, 1);
                    _48--;
                }
                return _112;
            }
            function _687(_112) {
                var _488 = _112
                    .map(function (_118) {
                        return _64(_118.key) + "=" + _64(_118.value);
                    })
                    .join("&");
                return _488 ? "&vars=" + _64(_488) : "";
            }
            function _426() {
                _201 = 0;
                for (var _1 = 0; _1 < _0._112.length; _1++) {
                    var _118 = _0._112[_1];
                    _10("Setting custom variable: " + _118.key + " = " + _118.value + ", overwrite: " + (_118.overwrite === undefined ? true : _118.overwrite));
                }
                _351("variable", _0._112);
                _0._112 = [];
            }
            function _94(_681) {
                _23(_5._94, { target: _681 });
            }
            function _755() {
                _23(_5._94, { target: "*" });
            }
            function _803(_680) {
                if (_14.gdprEnabled) _10("User identification not allowed (script in GDPR mode)");
                else if (!_66) _351("identify", { userId: _12._137, userName: _680 });
            }
            function _522(_34) {
                if (!_66) return;
                _10("Registering form submit attempt on this page");
                _456(_34);
            }
            function _385(_34) {
                if (!_66) return;
                var _398 = _95();
                if (_0._142 || _398 > 5000) {
                    _10("Registering form submit success on this page");
                    if (!_0._142) _23(_5._280, { target: _34 });
                    _23(_5._429, {});
                    _0._142 = undefined;
                } else {
                    _10("Registering form submit success on previous page");
                    _417([{ _18: _5._429 }]);
                }
            }
            function _802(_34) {
                if (!_66) return;
                var _398 = _95();
                if (_0._142 || _398 > 5000) {
                    _10("Registering form submit failure on this page");
                    if (!_0._142) _23(_5._280, { target: _34 });
                    _23(_5._188, {});
                    _141(_88._188);
                    _0._142 = undefined;
                } else {
                    _10("Registering form submit failure on previous page");
                    _417([{ _18: _5._188 }, { _18: _5._89, _20: { x: _88._188._4, y: 0 } }, { _18: _5._94, _20: { target: _88._188._25 } }]);
                }
            }
            function _456(_34) {
                if (!_66 || !_34 || _281(_306(_34))) return;
                if (+new Date() - _0._437 < 20) return;
                _0._437 = +new Date();
                _23(_5._280, { target: _34 });
                if (!_0._399[_34]) {
                    _0._399[_34] = _363(_34);
                } else {
                    _487(_34, _363(_34), _0._399[_34]);
                }
                _661(_34);
                _725(_34);
                _0._142 = +new Date();
            }
            function _141(_89, _42) {
                if (!_66 || !_89) return;
                var _4 = +_89._4;
                if (!_4) return;
                var _25 = _89._25;
                if (_25) {
                    if (_0._427.indexOf(_25) !== -1) return;
                    _0._427.push(_25);
                } else {
                    _25 = "custom-friction" + (_89._521 ? "-" + _89._521 : "");
                }
                var _676 = { value: _25, target: _42 ? _42 : "", x: _4 > 0 ? _4 : 0, y: _4 < 0 ? _4 * -1 : 0 };
                _23(_5._89, _676);
            }
            function _675() {
                if (_12._83.length < 2) return;
                var _198 = _12._83[_12._83.length - 2];
                var _204 = _12._83[_12._83.length - 1];
                var _166 = _111(_14.path || _14.location.pathname);
                if (_198._166 === _166 && _198._166 !== _204._166 && _0._91 - _204._91 < 10000) {
                    _417([
                        { _18: _5._89, _20: { x: _88._423._4, y: 0 } },
                        { _18: _5._94, _20: { target: _88._423._25 } },
                    ]);
                }
            }
            function _673() {
                if (_12._83.length < 4) return;
                var _434 = _12._83[_12._83.length - 5];
                var _198 = _12._83[_12._83.length - 4];
                if (_0._91 - _198._91 < 30000) {
                    if (_434 && _198._91 - _434._91 < 30000) return;
                    _482(_198._50, [
                        { _18: _5._89, _20: { x: _88._465._4, y: 0 } },
                        { _18: _5._94, _20: { target: _88._465._25 } },
                    ]);
                }
            }
            function _340() {
                if (!_66) return;
                _127._340.apply(_127, arguments);
            }
            function _729() {
                return {
                    _52: "",
                    _93: "",
                    _137: "",
                    _210: false,
                    _489: +("ontouchstart" in _3 && _14.touchEvents),
                    _467: navigator.doNotTrack === "yes" || navigator.doNotTrack == 1 || window.doNotTrack == 1 || navigator.msDoNotTrack == 1 ? 1 : 0,
                    _229: 0,
                    _375: "",
                    _83: [],
                    _218: [],
                    _258: _701(),
                    _140: null,
                };
            }
            function _701() {
                try {
                    _3.sessionStorage.setItem("mf_supportsSessionStorage", "1");
                    var _728 = _3.sessionStorage.getItem("mf_supportsSessionStorage") === "1";
                    _3.sessionStorage.removeItem("mf_supportsSessionStorage");
                    return _728;
                } catch (e) {
                    return false;
                }
            }
            function _421() {
                return {
                    _469: new Date(),
                    _91: +new Date(),
                    _233: +new Date(),
                    _376: 0,
                    _13: [],
                    _224: [],
                    _36: [],
                    _202: [],
                    _452: [],
                    _139: [],
                    _109: [],
                    _494: 0,
                    _495: 0,
                    _161: 0,
                    _496: "",
                    _437: 0,
                    _209: [],
                    _156: [],
                    _206: [],
                    _427: [],
                    _114: { x: 0, y: 0 },
                    _492: { x: 0, y: 0 },
                    _424: { x: 0, y: 0 },
                    _425: -100,
                    _75: { x: 0, y: 0 },
                    _225: { x: 0, y: 0 },
                    _179: {},
                    _366: -100,
                    _357: -100,
                    _135: { x: 0, y: 0 },
                    _344: [],
                    _776: 0,
                    _152: [],
                    _112: [],
                    _223: 1,
                    _343: 0,
                    _481: 0,
                    _399: {},
                    _123: [],
                    _440: 0,
                    _439: 0,
                    _446: 0,
                    _218: [],
                    _231: 0,
                    _217: 0,
                    _130: null,
                    _117: _722(),
                    _600: 0,
                    _345: false,
                    _460: _172,
                };
            }
            function _363(_34) {
                var _162 = _306(_34);
                var _29 = {};
                if (!_162) {
                    _10("Form not found: " + _34);
                    return _29;
                }
                for (var i = 0; i < _162.elements.length; i++) {
                    var _6 = _162.elements[i];
                    var _25 = _6.name;
                    if (!_25 || _25 == "") continue;
                    if (_6.tagName && /input|select|button|textarea/.test(_6.tagName.toLowerCase()) && (!_6.type || !/hidden|submit|reset|image|button/.test(_6.type.toLowerCase()))) {
                        var _4 = _205(_6);
                        if (!_29[_25]) _29[_25] = _4;
                        else if (_4 && _4 != "") _29[_25] += ", " + _4;
                    }
                }
                return _29;
            }
            function _725(_34) {
                var _162 = _306(_34);
                if (!_162 || !_12._258) return;
                var _1, _51;
                for (_1 = 0; _1 < _162.elements.length; _1++) {
                    var _6 = _162.elements[_1];
                    if (_6.tagName && /input|textarea/.test(_6.tagName.toLowerCase()) && (!_6.type || !/hidden|submit|reset|image|file|button|password/.test(_6.type.toLowerCase()))) {
                        var _4 = _205(_6);
                        if (!_4 || _4.length <= 3 || _447(_6) || _362(_6)) continue;
                        var _87 = _458(_4);
                        if (_87.length === 0) continue;
                        var _167 = [];
                        for (_51 = 0; _51 < _87.length; _51++) {
                            _167.push(_87[_51]._160);
                        }
                        var _148 = false;
                        for (_51 = 0; _51 < _0._117.length; _51++) {
                            var _211 = _0._117[_51];
                            _148 = _167.length === _211.length && _510(_211, _167) === 0;
                            if (_148) break;
                        }
                        if (!_148) _0._117.push(_167);
                    }
                }
                if (_0._117.length) {
                    _0._117 = _0._117.slice(-100);
                    _723(_0._117);
                }
            }
            function _723(_36) {
                try {
                    _3.localStorage.setItem("mf_replaceHashes", _8._70(_36));
                } catch (e) {}
            }
            function _722() {
                try {
                    return _8._157(_3.localStorage.getItem("mf_replaceHashes")) || [];
                } catch (e) {
                    return [];
                }
            }
            function _703(_4) {
                if (_0._117.length === 0) return _4;
                var _87 = _458(_4);
                for (var _1 = 0; _1 < _0._117.length; _1++) {
                    var _211 = _0._117[_1];
                    var _163;
                    do {
                        var _98 = _163 !== undefined ? _163 + 1 : 0;
                        _163 = _510(_87, _211, _98);
                        if (_163 !== -1) {
                            var _39 = _87[_163]._39;
                            var _189 = _87[_163 + _211.length - 1]._189;
                            var _718 = _761("*", _189 - _39);
                            _4 = _4.slice(0, _39) + _718 + _4.slice(_189);
                        }
                    } while (_163 !== -1);
                }
                return _4;
            }
            function _458(_4) {
                var _167 = [];
                var _39;
                function _486(_189) {
                    if (_39 === undefined) return;
                    var _484 = _4.slice(_39, _189);
                    _167.push({ _39: _39, _189: _39 + _484.length, _160: _111(_484) });
                    _39 = undefined;
                }
                for (var _1 = 0; _1 < _4.length; _1++) {
                    var _411 = _4[_1];
                    if (_762(_411)) {
                        if (_39 === undefined) {
                            _39 = _1;
                        }
                    } else {
                        _486(_1);
                    }
                }
                _486();
                return _167;
            }
            function _510(_193, _87, _98) {
                for (var _1 = _98 || 0; _1 < _193.length; _1++) {
                    if (_1 + _87.length > _193.length) break;
                    if (_710(_193, _87, _1)) return _1;
                }
                return -1;
            }
            function _710(_193, _87, _98) {
                var _148 = false;
                for (var _1 = _98 || 0, _51 = 0; _1 < _193.length && _51 < _87.length; _1++, _51++) {
                    _148 = _193[_1]._160 === _87[_51];
                    if (!_148) break;
                }
                return _148;
            }
            function _205(_2) {
                var _4 = "";
                if (_2.type && /radio|checkbox/.test(_2.type.toLowerCase())) _4 = _2.checked ? _2.value : "";
                else if (_2.tagName && /select/.test(_2.tagName.toLowerCase()) && _2.options)
                    for (var j = 0; j < _2.options.length; j++) {
                        var _307 = _2.options[j].selected ? _2.options[j].value : "";
                        if (_307 && _307 != "") _4 += (_4 && _4 != "" ? "," : "") + _307;
                    }
                else _4 = _2.value;
                return _4 || "";
            }
            function _170(_2) {
                if (_2.type === "password") return "*";
                var _4 = _205(_2);
                if (_436(_2)) {
                    _4 = _4.replace(/./g, _441(_2.type));
                } else if (_451(_2) && !_362(_2)) {
                    _4 = _4.slice(0, 2) + _4.slice(2).replace(/./g, _441(_2.type));
                }
                return _4;
            }
            function _505(_2) {
                var _196 = _2.textContent;
                if (_2.nodeType === 3 && _2.parentNode) _2 = _2.parentNode;
                var _503 = _703(_196);
                if (_503 !== _196 && _14.replaceLastFormValues) _196 = _503;
                if (_633(_2)) _196 = _196.replace(/./g, "*");
                return _196;
            }
            function _362(_2) {
                return _8._122(_2, "mouseflow") || _335.indexOf(_2) !== -1;
            }
            function _281(_2) {
                if (!_2) return false;
                if (_2[NodeMap.ID_PROP]) return !!_185(_2, _287);
                while (_2) {
                    if (_493(_2)) return true;
                    _2 = _2.parentNode;
                }
                return false;
            }
            function _493(_2) {
                return _361.indexOf(_2) !== -1;
            }
            function _499(_2) {
                return _8._122(_2, "no-mouseflow") || (!_14.keyLogging && !_362(_2)) || _281(_2);
            }
            function _436(_2) {
                return (_499(_2) || _447(_2) || _628(_2)) && _442(_2) && !_629.test(_2.type);
            }
            function _633(_2) {
                return (_2.isContentEditable || _2.tagName === "TEXTAREA") && _499(_2);
            }
            function _628(_2) {
                return _14.gdprEnabled && (_634(_2) || _636(_2));
            }
            function _447(_2) {
                return _2.maxLength === 16 || _397(_2.value);
            }
            function _397(_4) {
                return _632.test(_4);
            }
            function _634(_2) {
                return /email/i.test(_2.type) || _623.test(_2.value);
            }
            function _636(_2) {
                return /tel/i.test(_2.type);
            }
            function _451(_2) {
                return _442(_2) && /^\d{3}[^a-z]*$/i.test(_2.value);
            }
            function _442(_2) {
                return _2.tagName === "INPUT" || _2.tagName === "TEXTAREA";
            }
            function _441(_667) {
                return /number/i.test(_667) ? "0" : "*";
            }
            function _839(_37) {
                return _436(_37.target) || _451(_37.target) ? "191" : (_37.which && _37.which.toString()) || "";
            }
            function _838(_2) {
                var _448 = _59(_2);
                var _284 = _0._452[_448];
                var _295 = _170(_2);
                var _29 = _295;
                if (_284 && _284.length > 3 && _295.indexOf(_284) === 0) _29 = "+||" + _295.substring(_284.length);
                _0._452[_448] = _295;
                return _29;
            }
            function _487(_34, _355, _339) {
                try {
                    var _245 = [];
                    for (var _55 in _355) {
                        if (typeof _339[_55] == "undefined" || _355[_55] != _339[_55]) _245.push(_55);
                    }
                    for (var _55 in _339) {
                        if (typeof _355[_55] == "undefined" && _245.indexOf(_55) === -1) _245.push(_55);
                    }
                    for (var i = 0; i < _245.length; i++) {
                        _23(_5._462, { target: _34 + "||" + _245[i] });
                    }
                } catch (_45) {
                    _10("Error in _487: " + _45.message);
                }
            }
            function _661(_34) {
                try {
                    var _238 = _660(_34);
                    for (var i = 0; i < _238.length; i++) {
                        _23(_5._463, { target: _34 + "||" + _238[i] });
                    }
                } catch (_45) {
                    _10("Error in getBlankFields: " + _45.message);
                }
            }
            function _660(_34) {
                var _238 = [];
                var _36 = _363(_34);
                for (var _55 in _36) if (_36[_55] == "") _238.push(_55);
                return _238;
            }
            function _306(_34) {
                for (var j = 0; j < _9.forms.length; j++)
                    if (_59(_9.forms[j]) == _34) {
                        return _9.forms[j];
                    }
                return null;
            }
            function _656() {
                _655();
                _652();
            }
            function _349() {
                _653();
                _479();
            }
            function _655() {
                var _507 = _614("mf_user").split("|");
                for (var _1 = 0; _1 < _507.length; _1++) {
                    var _68 = _507[_1];
                    switch (_1) {
                        case 0:
                            _12._137 = _68;
                            break;
                        case 1:
                            _12._218 = _68 !== "" ? _68.split(/[$,]+/) : [];
                            break;
                    }
                }
                _12._210 = _12._137 !== "";
                if (_12._137 === "" || _12._137 === "1") _12._137 = _332();
            }
            function _653() {
                _620("mf_user", [_12._137, _12._218.join("$")].join("|"), 1, _312(_81));
            }
            function _652() {
                var _512 = _614("mf_" + _44).split("|");
                for (var _1 = 0; _1 < _512.length; _1++) {
                    var _68 = _512[_1];
                    switch (_1) {
                        case 0:
                            _12._52 = _68;
                            break;
                        case 1:
                            _12._83 = _646(_68);
                            break;
                        case 2:
                            _0._376 = parseInt(_68, 10);
                            break;
                        case 3:
                            _0._123 = _68 !== "" ? _68.split(".") : [];
                            break;
                        case 4:
                            _12._229 = parseInt(_68, 10);
                            break;
                        case 5:
                            _0._236 = _68;
                            break;
                        case 6:
                            _0._218 = _68 !== "" ? _68.split(/[$,]+/) : [];
                            break;
                        case 7:
                            _12._210 = _68 === "1";
                            break;
                        case 8:
                            _0._460 = _68;
                            break;
                        case 9:
                            _12._140 = parseFloat(_68);
                            break;
                    }
                }
                if (!_12._52) _12._52 = _14.sessionId || _650();
                if (!_12._140) _12._140 = _649();
                var _204 = _12._83[_12._83.length - 1];
                if (_204) _12._375 = _204._50;
            }
            function _650() {
                var sessionId = _485();
                return sessionId && sessionId.length === 32 ? sessionId : null;
            }
            function _649() {
                var recordingRate = _485();
                return /^\d+\.\d+$/.test(recordingRate) ? parseFloat(recordingRate) : null;
            }
            function _485() {
                return _14.crossDomainSupport && _3.name && _3.name.indexOf("mf_" + _44) === 0 ? _3.name.split("=")[1] : null;
            }
            function _479() {
                _620("mf_" + _44, [_12._52, _645(), +new Date(), _0._123.join("."), _12._229, _0._236 || "", _0._218.join("$"), _12._210 ? "1" : "0", _172, _12._140].join("|"), 0, _312(_81));
                if (_14.crossDomainSupport) _3.name = "mf_" + _44 + "=" + (_12._52 || _12._140);
            }
            function _646(_4) {
                return _4.split(/[$,]+/).map(function (_208) {
                    var _36 = _208.split(".");
                    return { _50: _36[0], _166: _36[1], _91: +_36[2] };
                });
            }
            function _645() {
                return _12._83
                    .concat([{ _50: _12._93, _166: _111(_14.path || _14.location.pathname), _91: _0._91 }])
                    .slice(-5)
                    .map(function (_208) {
                        return _208._50 + "." + _208._166 + "." + _208._91;
                    })
                    .join("$");
            }
            var _298 = "__mouseflow_properties__";
            var _287 = "is-blacklisted";
            function _185(_30, _24) {
                if (!_30) return null;
                var _182 = _30[_298];
                return _182 ? _182[_24] : null;
            }
            function _181(_30, _24, _4, _730) {
                var _182 = _30[_298];
                if (!_182) _182 = _30[_298] = {};
                _182[_24] = _4;
                if (_730 && _30.childNodes && _30.childNodes.length) {
                    for (var _78 = _30.firstChild; _78; _78 = _78.nextSibling) {
                        _181(_78, _24, _4, true);
                    }
                }
            }
            function _472(_30) {
                delete _30[_298];
                if (_30.childNodes && _30.childNodes.length) {
                    for (var _78 = _30.firstChild; _78; _78 = _78.nextSibling) {
                        _472(_78);
                    }
                }
            }
            function _824() {
                _472(_3.document.body);
            }
            function _826() {
                _0._91 = +new Date();
                _0._233 = +new Date();
                _353 = _22._250(_497, _56._428);
                _336 = _22._250(_800, _56._827);
                _338 = _22._250(_368, _56._828);
                _232 = _22._53(_605, _56._413);
            }
            function _830() {
                if (_14.forceStart) return true;
                if (_805()) {
                    _10("Recording not started - session ID is invalid.");
                    return false;
                }
                if (_821()) {
                    _10('Recording not started - honored "do not track" browser setting.');
                    return false;
                }
                if (_806()) {
                    _10("Recording not started - the browser was identified as a bot.");
                    return false;
                }
                if (!_227._410(_143)) {
                    _10("Recording not started - page does not match page rules");
                    return false;
                }
                var _300 = _837
                    .filter(function (_73) {
                        return _227._192(_73);
                    })
                    .sort(_835)[0];
                if (_300) {
                    _177 = _300._177;
                    _10("Recording rate set from page recording rule: " + _300._18 + ', "' + _300._4 + '"');
                }
                if (!_12._140) _12._140 = _829();
                var _471 = _12._52 || _12._140 <= _177;
                if (!_471) _10("Recording not started - recordingRate or blocked");
                _479();
                return _471;
            }
            function _835(_822, _836) {
                return _836._177 - _822._177;
            }
            function _829() {
                return _103.round(_103.random() * 10000000) / 100000;
            }
            function _821() {
                return _14.honorDoNotTrack && _12._467;
            }
            function _805() {
                return _12._52 && _12._52.length != 32;
            }
            function _806() {
                if (_14.enableBots) return false;
                return _3.navigator.webdriver || /ptst|headlesschrome|lighthouse/i.test(_3.navigator.userAgent);
            }
            function _819() {
                return _12._229 < _56._807;
            }
            function _808(_97) {
                return _286(_97.getMonth() + 1, 2) + _286(_97.getDate(), 2) + _286(_97.getSeconds(), 2) + _286(_97.getMilliseconds(), 3).slice(1) + _332();
            }
            function _286(_810, _282) {
                return (new Array(_282 + 1).join("0") + _810).slice(-_282);
            }
            function _812() {
                return !_12._52 || !_819() || _0._460 !== _172 || (_0._376 > 0 && +new Date() - _0._376 > _56._413);
            }
            function _815() {
                var _502 = new Date();
                return _103.max(new Date(_502.getFullYear(), 0, 1).getTimezoneOffset(), new Date(_502.getFullYear(), 6, 1).getTimezoneOffset());
            }
            function _817() {
                try {
                    _17._21(
                        _9,
                        "scroll",
                        "div,section,ul,.mf-scroll-listen",
                        function (_6) {
                            if (_6.target === _9) {
                                _0._75 = { x: _3.pageXOffset, y: _3.pageYOffset };
                            } else if (_6.delegatedTarget) {
                                _751(_59(_6.delegatedTarget), _6.delegatedTarget.scrollLeft, _6.delegatedTarget.scrollTop);
                            }
                        },
                        { _31: true, _523: true }
                    );
                    _17._21(
                        _9,
                        "mousemove",
                        function (_6) {
                            _0._114 = { x: _6.pageX, y: _6.pageY };
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9.documentElement,
                        "mouseleave",
                        function () {
                            _23(_5._731, {});
                            _141(_88._176);
                        },
                        { _31: true, _190: true }
                    );
                    _17._21(
                        _9,
                        "mousedown",
                        function (_6) {
                            _853(_6, _6.target);
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "mouseup",
                        function (_6) {
                            _854(_6, _6.target);
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "click",
                        "a,input,select,button,.mf-listen-click",
                        function (_6) {
                            _855(_6, _6.delegatedTarget || _6.target);
                        },
                        { _31: true, _523: true }
                    );
                    try {
                        var _392 = _760();
                        if (_392) {
                            _17._21(
                                _9,
                                "mouseenter",
                                _392,
                                function (_6) {
                                    _23(_5._275, { x: _6.pageX, y: _6.pageY, target: _59(_6.target) });
                                },
                                { _31: true, _190: true }
                            );
                            _17._21(
                                _9,
                                "mouseleave",
                                _392,
                                function (_6) {
                                    _23(_5._176, { x: _6.pageX, y: _6.pageY, target: _59(_6.target) });
                                },
                                { _31: true, _190: true }
                            );
                        }
                    } catch (_45) {
                        _10("Error in getHoverSelectors: " + _45.message);
                    }
                    _17._21(
                        _9,
                        "focus",
                        "input,textarea,select,button",
                        function (_6) {
                            _23(_5._466, { target: _59(_6.target) });
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "blur",
                        "input,textarea,select,button",
                        function (_6) {
                            _23(_5._514, { target: _59(_6.target) });
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "keypress",
                        "input,textarea,select",
                        function (_6) {
                            if (_6.target && _6.target.type !== "password") {
                                _23(_5._305, { target: _59(_6.target) });
                            }
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "keydown",
                        "input,textarea,select",
                        function (_6) {
                            if (_6.target && _6.target.type !== "password") {
                                _23(_5._272, { target: _59(_6.target), value: _839(_6) });
                            }
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "keyup",
                        "input,textarea,select",
                        function (_6) {
                            if (_6.target && _6.target.type !== "password") {
                                _23(_5._273, { target: _59(_6.target), value: _838(_6.target) });
                                if (_397(_205(_6.target))) _94("payment");
                            }
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "change",
                        "input,textarea,select",
                        function (_6) {
                            _23(_5._200, { target: _59(_6.target), value: _170(_6.target) });
                            if (_6.target && ["password", "file"].indexOf(_6.target.type) === -1 && _397(_205(_6.target))) _94("payment");
                        },
                        { _31: true }
                    );
                    _17._21(
                        _9,
                        "submit",
                        "form",
                        function (_6) {
                            _456(_59(_6.target));
                        },
                        { _31: true }
                    );
                    if (_12._489) {
                        _17._21(
                            _9,
                            "touchstart",
                            function (_6) {
                                if (!_6.originalEvent || !_6.originalEvent.touches) return;
                                var _72 = _6.originalEvent.touches;
                                if (_72.length > 0) {
                                    _23(_5._309, { x: _72[0].pageX, y: _72[0].pageY });
                                }
                                if (_72.length > 1) {
                                    _23(_5._310, { x: _72[1].pageX, y: _72[1].pageY });
                                }
                            },
                            { _31: true }
                        );
                        _17._21(
                            _9,
                            "touchmove",
                            function (_6) {
                                if (!_6.originalEvent || !_6.originalEvent.touches) return;
                                var _72 = _6.originalEvent.touches;
                                var _299 = _95();
                                var _383 = _299 - _56._428;
                                if (_72.length > 0 && _0._425 < _383) {
                                    _23(_5._311, { x: _72[0].pageX, y: _72[0].pageY });
                                    if (_72.length > 1) {
                                        _23(_5._313, { x: _72[1].pageX, y: _72[1].pageY });
                                    }
                                    _0._425 = _299;
                                    var _863 = !_180(_263(), _0._135);
                                    if (_863) {
                                        _0._135 = _263();
                                        _23(_5._269, _0._135);
                                        if (_0._357 < _383) {
                                            _23(_5._269, _0._135);
                                            _0._357 = _299;
                                        }
                                        var _864 = _0._156[_0._156.length - 0];
                                        if (new Date() - _864 < 1000) {
                                            _0._156.push(+new Date());
                                            _0._156 = _0._156.slice(-5);
                                            if (_0._206.length + _0._156.length === 5) {
                                                _141(_88._422);
                                            }
                                        }
                                    }
                                    _0._75 = { x: _3.pageXOffset, y: _3.pageYOffset };
                                    if (_0._366 < _383 && !_180(_0._75, _0._225)) {
                                        _0._225 = _0._75;
                                        _23(_5._264, _0._75);
                                        _0._366 = _299;
                                    }
                                }
                            },
                            { _31: true }
                        );
                        _17._21(
                            _9,
                            "touchend",
                            function (_6) {
                                if (!_6.originalEvent || !_6.originalEvent.touches) return;
                                var _72 = _6.originalEvent.touches;
                                if (_72.length === 0) _23(_5._271, { x: 0, y: 0 });
                                if (_72.length > 1) _23(_5._303, { x: 0, y: 0 });
                            },
                            { _31: true }
                        );
                        _17._21(
                            _9,
                            "orientationchange",
                            function () {
                                _23(_5._314, { x: _3.orientation, y: 0 });
                                _0._206.push(+new Date());
                                _0._206 = _0._206.slice(-5);
                                if (_0._206.length + _0._156.length === 5) {
                                    _141(_88._422);
                                }
                            },
                            { _31: true }
                        );
                    }
                    _17._21(
                        _3,
                        _737(),
                        function () {
                            if (_0._142) {
                                if (+new Date() - _0._142 < _14.registerSubmitTimeout) {
                                    _10("Registering formSubmit");
                                    _0._236 = _111(_14.location.pathname);
                                } else {
                                    _10("Not registering formSubmit. Timeout exceeded.");
                                }
                            }
                            _60();
                        },
                        { _31: true }
                    );
                    var _438 = _3.onerror;
                    _3.onerror = function (_108, _16, _388, _402, _418) {
                        var _870 = new Date() - _0._217;
                        if (_870 > 1000 && _0._231 < 50) {
                            _0._217 = +new Date();
                            var _414 = "Malformed error";
                            if (_108 && _108.message) _414 = _108.message;
                            else if (typeof _108 === "string") _414 = _108;
                            _0._130 = { _108: _414, _16: typeof _16 === "string" ? _16 : "Malformed URL", _388: "" + _388, _402: "" + _402, _865: _418 && _418.stack && _418.stack.substring(0, 800) };
                            if (_0._161 !== 0 && _0._217 - _0._161 < 100) {
                                _141(_88._506, _0._496);
                                _127._342("clickError");
                                _508();
                            }
                        }
                        if (_438) _438.apply(this, arguments);
                    };
                    var _872 = CSSStyleSheet.prototype.insertRule;
                    CSSStyleSheet.prototype.insertRule = function () {
                        _872.apply(this, arguments);
                        if (!_239) return;
                        var _30 = this.ownerNode;
                        var _13 = _30 ? _239.serializeNode(_30) : null;
                        if (!_13) return;
                        _13.textContent = _379(_30);
                        _239.mirror.applyChanged({ removed: [], addedOrMoved: [], attributes: [], text: [_13] });
                    };
                    if (_14.keyLogging) _842();
                } catch (_45) {
                    _10("Error in bindDomEvents: " + _45.message);
                }
            }
            function _508() {
                if (_0._130) {
                    _0._231++;
                    var _856 =
                        "website=" +
                        _44 +
                        "&session=" +
                        _12._52 +
                        "&page=" +
                        _12._93 +
                        "&type=error&data=" +
                        _64(_8._70({ seq: _0._231, errorMsg: _0._130._108, url: _0._130._16, line: _0._130._388, col: _0._130._402, stack: _0._130._865 }));
                    _23(_5._80, { x: _0._231, y: 0 });
                    _10("JS error " + _0._231 + ", msg: " + _0._130._108);
                    _120({ _16: _144 + "data", _13: _856 });
                    _0._130 = null;
                }
            }
            function _445() {
                _17._526();
                if (_400) _22._155(_400);
            }
            function _842() {
                _0._202 = _433();
                _400 = _22._250(function () {
                    _851(_850(_433(), _0._202));
                }, 200);
            }
            function _433() {
                var _432 = _9.querySelectorAll("input,textarea,select");
                var _457 = {};
                for (var i = 0; i < _432.length; i++) {
                    var _55 = _432[i];
                    if (_8._122(_55, "no-mouseflow")) continue;
                    if (!_847(_55, ["text", "textarea", "select-one"])) continue;
                    _457[_59(_55)] = _170(_55);
                }
                return _457;
            }
            function _847(_55, _848) {
                return _55.type && new RegExp(_848.join("|"), "i").test(_55.type);
            }
            function _850(_202, _491) {
                var _203 = [];
                for (var _24 in _202) {
                    var _4 = _202[_24];
                    var _490 = _491[_24];
                    if (_490 !== undefined && _490 !== _4) _203.push({ id: _24, value: _4 });
                    _491[_24] = _4;
                }
                return _203;
            }
            function _851(_203) {
                if (_95() - _0._481 > 100) {
                    for (var i = 0; i < _203.length; i++) {
                        var _32 = _203[i];
                        _23(_5._200, { target: _32.id, value: _32.value });
                    }
                }
            }
            function _853(_6, _2) {
                if (+new Date() - _0._494 < 20) return;
                _0._494 = +new Date();
                _23(_5._277, { x: _6.pageX, y: _6.pageY, target: _59(_2) });
            }
            function _854(_6, _2) {
                if (+new Date() - _0._495 < 20) return;
                _0._495 = +new Date();
                var _125 = _370(_2, _6.pageX, _6.pageY);
                if (!_125 && _2.firstElementChild) _125 = _370(_2.firstElementChild, _6.pageX, _6.pageY);
                if (_125) _23(_5._256, { x: _125.x, y: _125.y, target: _59(_2) });
            }
            function _855(_6, _2) {
                if (+new Date() - _0._161 < 20) return;
                var _42 = _59(_2);
                _0._161 = +new Date();
                _0._496 = _42;
                _23(_5._276, { x: _6.pageX, y: _6.pageY, target: _42 });
                _0._209.push(_0._161);
                _0._209 = _0._209.slice(-5);
                if (_0._209[4] - _0._209[0] < 1000) {
                    _141(_88._804, _42);
                    _127._342("clickRage");
                }
                if (_0._161 !== 0 && _0._217 !== 0 && _0._161 - _0._217 < 100) {
                    _141(_88._506, _42);
                    _127._342("clickError");
                    _508();
                }
            }
            function _751(_50, _752, _753) {
                _0._179[_50] = { x: _752, y: _753 };
                if (_283) return;
                _283 = _22._53(_459, 100);
                function _459() {
                    _283 = null;
                    var _509 = true;
                    for (var _42 in _0._179) {
                        if (_0._179.hasOwnProperty(_42)) {
                            _23(_5._330, { x: _0._179[_42].x, y: _0._179[_42].y, target: _42 });
                            _509 = false;
                        }
                    }
                    if (!_509) {
                        _0._179 = {};
                        _283 = _22._53(_459, 100);
                    }
                }
            }
            function _370(_30, _765, _759) {
                var _38 = _607(_30);
                if (_38 == null || !_38.height || !_38.width) return null;
                return { x: parseInt(((_765 - _0._75.x - _38.x) / parseFloat(_38.width)) * 65535), y: parseInt(((_759 - _0._75.y - _38.y) / parseFloat(_38.height)) * 65535) };
            }
            function _760() {
                var _474 = {};
                var _470 = /[^(]:hover/;
                if (_14.useAllHoverSelectors) {
                    for (var _1 = 0; _1 < _9.styleSheets.length; _1++) {
                        var _216 = _9.styleSheets[_1];
                        try {
                            var _207 = _216.cssRules ? _216.cssRules : _216.rules;
                            for (var _51 = 0; _51 < _207.length; _51++) {
                                var _461 = _216.cssRules[_51];
                                if (!_470.test(_461.selectorText)) continue;
                                var _33 = _461.selectorText.split(",");
                                var _7;
                                for (var _416 = 0; _416 < _33.length; _416++) {
                                    _7 = _33[_416].replace(/^\s+|\s+$/g, "");
                                    if (_470.test(_7)) {
                                        _7 = _7.substring(0, _7.indexOf(":hover"));
                                        _7 = _763(_7);
                                        _474[_7] = true;
                                    }
                                }
                            }
                        } catch (_45) {
                            _10("Cannot inspect external css file, :hover support may fail: " + _216.href);
                        }
                    }
                }
                var _33 = ["a", "input", "select", "button", "textarea", "li", "canvas", ".mf-listen"];
                for (_7 in _474) {
                    _7 = _7.replace(/^\s+|\s+$/g, "");
                    if (_7 != "" && _7 != "a" && !_213(_7, " a") && !_213(_7, " select") && !_213(_7, " submit") && !_213(_7, " textarea") && !_213(_7, " li")) _33.push(_7);
                }
                _33.push.apply(_33, _291);
                return _33.slice(0, 1000).join(",");
            }
            function _763(_32) {
                var _475 = [/:active/g, /:visited/g, /::before/g, /:before/g, /::after/g, /:after/g, /::first-letter/g, /::first-line/g, /::selection/g];
                for (var _1 = 0; _1 < _475.length; _1++) _32 = _32.replace(_475[_1], "");
                return _32;
            }
            function _64(_750) {
                try {
                    return _3.encodeURIComponent(_750);
                } catch (_45) {
                    _10("Encode error: " + _45.message);
                    return "";
                }
            }
            function _23(_18, _20) {
                if (!_66) return;
                if (_0._13.length === 0) _0._233 = +new Date();
                var _41 = _477(_18, _20, _0._139, _0._36);
                if (!_41) return;
                if (_784(_18)) {
                    _22._126(_232);
                    _232 = _22._53(_605, _56._413);
                    _0._343 = _95();
                }
                if (_511(_18)) _0._481 = _95();
                var _739 = _606(_0._109) + (_41._105 ? _278.encode(_41._105).length : 0),
                    _733 = _606(_0._36) + (_41._4 ? _278.encode(_41._4).length : 0);
                var totalDataSize = _0._13.length + _41._13.length + _739 + _733;
                if (totalDataSize > _56._476) {
                    _262();
                    if (_41._4 !== undefined) _41._13[_41._13.length - 1] = 0;
                    _0._13 = _41._13;
                    _0._13[0] = 0;
                    _0._13[1] = 0;
                    if (_41._105 !== undefined) _0._109.push(_41._105);
                    if (_41._4 !== undefined) _0._36.push(_41._4);
                } else {
                    _0._13 = _0._13.concat(_41._13);
                    if (_41._105 !== undefined) _0._109.push(_41._105);
                    if (_41._4 !== undefined) _0._36.push(_41._4);
                    if (_18 === _5._271) {
                        _262();
                    }
                }
            }
            function _417(_359) {
                _482(_12._375, _359);
            }
            function _482(_93, _359) {
                var _13 = [],
                    _139 = [],
                    _109 = [],
                    _36 = [];
                _359.forEach(function (_37) {
                    if (!_37._20) _37._20 = {};
                    var _41 = _477(_37._18, _37._20, _139, _36);
                    if (!_41) return;
                    _13 = _13.concat(_41._13);
                    if (_41._105 !== undefined) _109.push(_41._105);
                    if (_41._4 !== undefined) _36.push(_41._4);
                });
                var _235 = 0;
                var _374 = _449(_235, _13, _109, _36);
                _120({ _16: _144 + "events?w=" + _44 + "&s=" + _12._52 + "&p=" + _93 + "&li=0&lh=0&ls=0&d=" + _374 });
            }
            function _477(_18, _20, _139, _36) {
                var _105;
                var _4 = _20.value;
                var _322 = -1;
                var _13 = [];
                _13._591 = false;
                if (_747(_18) && !_741(_20)) return null;
                if (_20.value && _20.value.length > _56._476) {
                    _10("Event, type: " + _18 + ", skipping due to large value, details: " + _8._70(_20));
                    return null;
                }
                _119(2, _590(), _13);
                _119(1, _18, _13);
                if (_20.x < 0) _20.x = 0;
                if (_20.y < 0) _20.y = 0;
                if (_20.x > 65534) _20.x = 65534;
                if (_20.y > 65534) _20.y = 65534;
                if (_20.x != undefined) _119(2, _20.x, _13);
                if (_20.y != undefined) _119(2, _20.y, _13);
                if (_20.target != undefined) {
                    if (typeof _20.target == "object" && _20.target.id != undefined) _20.target = _20.target.id;
                    if (_18 !== _5._94 && _20.target && _20.target.indexOf("||") === -1) {
                        var _2 = _601(_20.target);
                        if (_2) {
                            if (_281(_2)) return null;
                            if (_2.form && !_281(_2.form)) _20.target = _59(_2.form) + "||" + _20.target;
                        }
                    }
                    for (var _1 = 0; _1 < _139.length; _1++) {
                        if (_139[_1] === _20.target) {
                            _322 = _1;
                            break;
                        }
                    }
                }
                if (_742(_18)) {
                    if (!_20.target) {
                        _119(2, 65535, _13);
                    } else if (_322 === -1) {
                        var _473 = _139.length;
                        _119(2, _473, _13);
                        _105 = _473 + ":" + _20.target;
                        _139.push(_20.target);
                    } else {
                        _119(2, _322, _13);
                    }
                }
                if (_18 !== _5._267 && _18 !== _5._241) _10("Event, type: " + _18 + ", time: " + _95() + ", details: " + _8._70(_20));
                if (_748(_18)) {
                    if (_4 instanceof Array) _4 = _4.join(", ");
                    _119(1, _36.length, _13);
                }
                if (_13._591) {
                    _10("Event, type: " + _18 + ", skipping due to overflow in temp data, details: " + _8._70(_20));
                    return null;
                }
                return { _13: _13, _105: _105, _4: _4 };
            }
            function _590() {
                return +new Date() - _0._233;
            }
            function _740() {
                return _3.performance && _3.performance.timing.domLoading > 0 ? _0._469 - _3.performance.timing.domLoading : 0;
            }
            function _527() {
                return _3.performance && _3.performance.timing.loadEventStart > 0 && _3.performance.timing.fetchStart > 0 ? _3.performance.timing.loadEventStart - _3.performance.timing.fetchStart : 0;
            }
            function _747(_18) {
                return (
                    [
                        _5._269,
                        _5._264,
                        _5._267,
                        _5._277,
                        _5._256,
                        _5._276,
                        _5._275,
                        _5._176,
                        _5._543,
                        _5._80,
                        _5._309,
                        _5._311,
                        _5._271,
                        _5._314,
                        _5._310,
                        _5._313,
                        _5._303,
                        _5._302,
                        _5._501,
                        _5._329,
                        _5._498,
                        _5._354,
                        _5._47,
                        _5._330,
                        _5._241,
                        _5._89,
                    ].indexOf(_18) !== -1
                );
            }
            function _741(_20) {
                return _20.x !== undefined && _20.y !== undefined && !isNaN(_20.x) && !isNaN(_20.y);
            }
            function _742(_18) {
                return [_5._277, _5._256, _5._276, _5._275, _5._176, _5._305, _5._273, _5._200, _5._466, _5._514, _5._280, _5._94, _5._302, _5._329, _5._354, _5._272, _5._463, _5._462, _5._330, _5._241, _5._89].indexOf(_18) !== -1;
            }
            function _748(_18) {
                return [_5._273, _5._200, _5._272, _5._89].indexOf(_18) !== -1;
            }
            function _784(_18) {
                return _768(_18) || _511(_18) || _792(_18);
            }
            function _768(_18) {
                return [_5._267, _5._277, _5._256, _5._276, _5._264, _5._275, _5._176, _5._241].indexOf(_18) !== -1;
            }
            function _511(_18) {
                return [_5._305, _5._273, _5._200, _5._272].indexOf(_18) !== -1;
            }
            function _792(_18) {
                return [_5._309, _5._311, _5._271, _5._314, _5._310, _5._313, _5._303, _5._302, _5._501, _5._329, _5._498, _5._354].indexOf(_18) !== -1;
            }
            function _497() {
                if (!_180(_263(), _0._135)) {
                    _0._135 = _263();
                    _23(_5._269, _0._135);
                    _0._357 = _95();
                }
                if (!_180(_0._114, _0._492)) {
                    _0._492 = _0._114;
                    _23(_5._267, _0._114);
                }
                if (!_180(_0._75, _0._225)) {
                    _0._225 = _0._75;
                    _23(_5._264, _0._75);
                    _0._366 = _95();
                }
            }
            function _800() {
                if (!_180(_0._114, _0._424)) {
                    _0._424 = _0._114;
                    var _430 = _9.elementFromPoint(_0._114.x - _0._75.x, _0._114.y - _0._75.y);
                    var _125 = _370(_430, _0._114.x, _0._114.y);
                    if (_125) {
                        _23(_5._241, { x: _125.x, y: _125.y, target: _59(_430) });
                    }
                }
            }
            function _262() {
                var _235 = _0._233 - _0._91;
                var _374 = _449(_235, _0._13, _0._109, _0._36);
                _0._224.push(_374);
                _0._13 = [];
                _0._36 = [];
                _0._109 = [];
                _0._233 = +new Date();
                if (_95() > _56._770) {
                    _10("Pageview over max.time, stopping.");
                    _445();
                    _22._155(_353);
                    _22._155(_336);
                    _22._155(_338);
                    _22._126(_232);
                    _178 = false;
                } else {
                    _772();
                }
            }
            function _449(_235, _13, _109, _36) {
                var _230 = [];
                _119(3, _235, _230);
                _119(2, _13.length, _230);
                _230 = _230.concat(_13);
                return _787.e(_230) + "." + _585(_109 || []) + "." + _585(_36 || []);
            }
            function _772() {
                if (_178 && _0._224.length > 0) {
                    if (_0._223 == 1) {
                        _12._229++;
                    }
                    var _84 = _12._258 ? _348() : [];
                    for (var _1 = 0; _1 < _0._224.length; _1++) {
                        _84.push({ _16: _144 + "events?w=" + _44 + "&s=" + _12._52 + "&p=" + _12._93 + "&q=" + _0._223 + "&li=" + _0._440 + "&lh=" + _0._439 + "&ls=" + _0._446 + "&d=" + _0._224[_1] });
                        _0._223++;
                        _0._440 = _0._343;
                        _0._439 = _0._135.y;
                        _0._446 = _0._225.y;
                    }
                    _0._224 = [];
                    if (_12._258) {
                        _453(_84.slice(-10));
                        _450();
                    } else {
                        for (var _1 = 0; _1 < _84.length; _1++) {
                            _120(_84[_1]);
                        }
                    }
                    if (_0._223 > _56._777) _60();
                }
            }
            function _450() {
                if (_0._345) return;
                var _15 = _348().slice(0, 1)[0];
                if (_15) {
                    _0._345 = true;
                    _15._149 = _15._80 = function () {
                        _453(_348().slice(1));
                        _0._345 = false;
                        _22._53(_450, 1);
                    };
                    _120(_15);
                }
            }
            function _348() {
                return _8._157(_3.sessionStorage.getItem("mf_transmitQueue")) || [];
            }
            function _453(_84) {
                _3.sessionStorage.setItem("mf_transmitQueue", _8._70(_84));
            }
            function _120(_15) {
                if (!_15 || !_15._16) return;
                _349();
                if (_529() && _3.XDomainRequest) {
                    try {
                        _15._16 = _780(_352(_15._16, "0"));
                        var _102 = new _3.XDomainRequest();
                        _102.open(_15._13 ? "POST" : "GET", _15._16);
                        _102.onload = function () {
                            if (_15._149) _15._149(_420(_102));
                        };
                        _102.onerror = function () {
                            if (_15._80) _15._80(_420(_102));
                        };
                        _102.onprogress = function () {
                            _10("XDR progress:" + _15._16);
                        };
                        _102.ontimeout = function () {
                            _10("XDR timeout:" + _15._16);
                        };
                        _102.timeout = 20000;
                        _22._53(function () {
                            _102.send(_15._13);
                        }, 500);
                    } catch (_45) {
                        _10("Error in transmitCrossDomain (XDomainRequest): " + _45.message);
                        if (_15._80) _15._80({});
                    }
                } else if (_3.XMLHttpRequest) {
                    try {
                        var _79 = new _3.XMLHttpRequest();
                        _79.onreadystatechange = function () {
                            if (_79.readyState !== 4 || !_79.status) return;
                            if (_782(_79.status)) {
                                if (_15._149) _15._149(_566(_79));
                            } else {
                                if (_15._80) _15._80(_566(_79));
                            }
                        };
                        if ((_15._13, _15._586)) {
                            _15._13 = pako.gzip(_15._13);
                            _15._16 = _352(_15._16, "1");
                        } else {
                            _15._16 = _352(_15._16, "0");
                        }
                        _79.open(_15._13 ? "POST" : "GET", _15._16, true);
                        _79.setRequestHeader("Content-type", "text/plain");
                        if (_15._781) _79.withCredentials = true;
                        _79.send(_15._13);
                    } catch (_45) {
                        _10("Error in transmitCrossDomain (XMLHttpRequest): " + _45.message);
                        if (_15._80) _15._80({});
                    }
                }
            }
            function _420(_102) {
                return { _516: _102.responseText };
            }
            function _566(_79) {
                return { _350: _79.status, _516: _79.response };
            }
            function _352(_16, _4) {
                return /\/(html|dom)/.test(_16) ? _16 + (_16.indexOf("?") === -1 ? "?" : "&") + "gz=" + _4 : _16;
            }
            function _351(_18, _13) {
                _120({ _16: _144 + "data", _13: "website=" + _44 + "&session=" + _12._52 + "&page=" + _12._93 + "&type=" + _18 + "&data=" + _64(_8._70(_13)) });
            }
            function _782(_350) {
                return _350 >= 200 && _350 < 300;
            }
            function _529() {
                return _9.all && !_3.atob;
            }
            function _745() {
                return _9.all && !_9.addEventListener;
            }
            function _780(_16) {
                return _16.replace(/^https?:/i, _14.location.protocol);
            }
            function _779(_47, _778) {
                var _347 = _64(_8._70(_47.data));
                var _15 = { _16: _144 + "html" + "?website=" + _44 + "&session=" + _12._52 + "&page=" + _12._93, _13: "size=" + _778 + "&html=" + _347, _586: _14.compress };
                if (_12._258) {
                    var _84 = _619();
                    if (_347 !== "") _84.push(_15);
                    else _10("Initial DOM empty, not sending");
                    _594(_84.slice(-10));
                    _622();
                } else {
                    if (_347 !== "") _120(_15);
                    else _10("Initial DOM empty, not sending");
                }
            }
            function _622() {
                var _84 = _619();
                var _15 = _84.splice(0, 1)[0];
                if (_15) {
                    _10("Sending initial DOM mutations. Size: " + _15._13.length);
                    _15._149 = _15._80 = function () {
                        _594(_84);
                        _22._53(_622, 1);
                    };
                    _120(_15);
                }
            }
            function _619() {
                return _8._157(_3.sessionStorage.getItem("mf_initialDomQueue")) || [];
            }
            function _594(_84) {
                try {
                    _3.sessionStorage.setItem("mf_initialDomQueue", _8._70(_84));
                } catch (_45) {
                    _10("InitialDomQueue could not be stored in sessionStorage: " + _45.message);
                }
            }
            function _783(_47) {
                var _164 = _47.data.args[1].some(function (_90) {
                    return _346._164(_90);
                });
                if (_164) {
                    _10("DOM mutation is a duplicate and has not been added.");
                    return;
                }
                var _595 = _771(_47, _0._152);
                if (_595 > -1) {
                    _0._152[_595].data = _47.data;
                    _10("Deduplicating DOM mutation");
                    return;
                }
                if (_14.domReuse) {
                    var _260 = _773(_47);
                    var _596 = _774(_260);
                    if (_596 > -1) {
                        _47.sequence = _596;
                        _10("Reusing already sent DOM mutation, sequence " + _47.sequence);
                        _23(_5._47, { x: _47.sequence, y: 0 });
                        return;
                    } else _0._344.push(_260);
                }
                _47.sequence = ++_0._776;
                _23(_5._47, { x: _47.sequence, y: 0 });
                _0._152.push(_47);
                if (!_228) _228 = _22._53(_604, 1500);
            }
            function _774(_260) {
                for (var i = 0; i < _0._344.length; i++) if (_0._344[i] == _260) return i + 1;
                return -1;
            }
            function _773(_47) {
                return _111(_8._70(_47.data));
            }
            function _604() {
                _228 = 0;
                if (_178 && _0._152.length > 0) {
                    var _341 = _0._152.length;
                    var _13 = "";
                    for (var i = 0; i < _341; i++) {
                        var _47 = _0._152[i];
                        _13 += (_13 !== "" ? "|||" : "") + _47.sequence + "." + _8._70(_47.data);
                    }
                    _0._152 = [];
                    if (_13 != "") {
                        _13 = "website=" + _44 + "&session=" + _12._52 + "&page=" + _12._93 + "&data=" + _64(_13);
                        _120({ _16: _144 + "dom", _13: _13, _586: _14.compress });
                        _10("Sending DOM mutations: " + _341 + ", size: " + _13.length);
                        _0._600 += _341;
                        if (_0._600 > _56._598) {
                            _10("DOM mutation limit of " + _56._598 + " reached. Stopping recording.");
                            _60();
                        }
                    }
                }
            }
            function _771(_67, _616) {
                if (!_14.domDeduplicator) return -1;
                var _69 = _67.data.args;
                var _618 = _610(_69);
                var _611 = _609(_69);
                if (!_618 && !_611) return -1;
                for (var i = 0; i < _616.length; i++) {
                    var _337 = _616[i].data.args;
                    if (_618 && _610(_337) && _785(_69[2], _337[2])) {
                        return i;
                    } else if (_611 && _609(_337)) {
                        return i;
                    }
                }
                return -1;
            }
            function _610(_69) {
                return _597(_69) && _69[2].filter(_769).length === _69[2].length;
            }
            function _609(_69) {
                return _597(_69) && _69[2].filter(_775).length === _69[2].length;
            }
            function _597(_69) {
                return _69[0].length === 0 && _69[1].length === 0 && _69[2].length > 0 && _69[3].length === 0;
            }
            function _769(_234) {
                return _234.attributes.style && _621(_234.attributes) === 1;
            }
            function _775(_234) {
                return _234.attributes.d && _621(_234.attributes) === 1;
            }
            function _621(obj) {
                var count = 0;
                for (var prop in obj) if (obj.hasOwnProperty(prop)) count++;
                return count;
            }
            function _785(_373, _587) {
                if (_373.length !== _587.length) return false;
                for (var i = 0; i < _373.length; i++) {
                    var _793 = _373[i],
                        _786 = _587[i];
                    if (_793.id !== _786.id) return false;
                }
                return true;
            }
            function _368() {
                if (_0._13.length > 0 && _590() >= 5000) {
                    _23(_5._368, {});
                    _262();
                }
            }
            function _605() {
                _10("Inactivity timeout.");
                _60(true);
            }
            function _180(_104, _602) {
                return _104.x == _602.x && _104.y == _602.y;
            }
            function _263() {
                return { x: _3.innerWidth, y: _3.innerHeight };
            }
            function _607(_147) {
                if (!_147 || !_147.getBoundingClientRect) return null;
                var _136 = _147.getBoundingClientRect();
                var _240;
                if (!_147.childElementCount && !_136.height && !_136.width) _240 = _799(_147);
                if (!_240) {
                    return { x: _136.left, y: _136.top, width: _136.width, height: _136.height };
                } else {
                    _240.x += _136.left - _147.offsetLeft;
                    _240.y += _136.top - _147.offsetTop;
                    return _240;
                }
            }
            function _799(_2) {
                var _183 = window.getComputedStyle(_2, [":after"]);
                if (!_183) return _183;
                return { x: +_183.left.slice(0, -2), y: +_183.top.slice(0, -2), width: +_183.width.slice(0, -2), height: +_183.height.slice(0, -2) };
            }
            function _59(_2) {
                try {
                    return _798(_2) || _603(_2);
                } catch (_45) {
                    _10("Error in getElementPath: " + _45.message);
                }
                return "";
            }
            function _798(_2) {
                if (_2.attributes["name"] && _2.attributes["name"].value && _2.form != undefined && /button|input|select|textarea/.test(_2.tagName.toLowerCase())) {
                    var _334 = _9.getElementsByName(_2.attributes["name"].value);
                    if (_334.length > 1) {
                        for (var _1 = 0; _1 < _334.length; _1++) if (_2 == _334[_1]) return _2.attributes["name"].value + "[" + _1 + "]_mf";
                    } else return _2.attributes["name"].value;
                }
                return null;
            }
            function _603(_62) {
                var _27 = [];
                try {
                    while (_62 && _62.nodeType == 1) {
                        var _7 = "";
                        if (_62.getAttribute("id") && !_8._132(_62, "data-mf-ignore-child-ids")) {
                            _7 += "#" + _62.getAttribute("id");
                            _27.unshift(_7);
                            break;
                        } else {
                            _7 += _62.tagName.toLowerCase();
                            var _268 = "",
                                _358 = _62,
                                _175 = 1;
                            if (_62.parentNode && _62.parentNode.tagName && _62.parentNode.tagName.toLowerCase() == "body") {
                                var _82 = _8._169(_62);
                                _268 = _82.length ? "." + _82.join(".") : "";
                            }
                            if (_268 !== "" && _9.querySelectorAll && _9.querySelectorAll("body > " + _7 + _268).length == 1) _7 += _268;
                            else {
                                while ((_358 = _358.previousElementSibling)) {
                                    if (_358.tagName.toLowerCase() === _7) _175++;
                                }
                                if (_175 !== 1) _7 += ":[" + _175 + "]";
                            }
                        }
                        _27.unshift(_7);
                        if (!_62.parentNode) return "";
                        _62 = _62.parentNode;
                    }
                } catch (_45) {
                    _10("Error in _603: " + _45.message);
                }
                return _27.join(" > ").replace("html > body > ", "> ");
            }
            function _601(_50) {
                if (!_50) return null;
                var _2 = _797(_50);
                if (!_2) {
                    try {
                        _2 = _9.querySelector(_796(_50));
                    } catch (_45) {
                        _10("Error in _601: " + _45.message);
                    }
                }
                return _2;
            }
            function _797(_25) {
                if (!_25) return null;
                var _113 = _515.exec(_25);
                if (_113 && _113[1]) {
                    try {
                        var _48 = _3.parseInt(_113[1]);
                        return _9.getElementsByName(_25.replace(_515, ""))[_48];
                    } catch (_45) {}
                }
                var _96 = _9.getElementsByName(_25);
                if (_96 && _96.length === 1) return _96[0];
                return null;
            }
            function _796(_27) {
                if (!_27) return null;
                if (_27.substr(0, 1) === ">") _27 = "html > body " + _27;
                _27 = _27.replace(/^#(\d)/, "#\\3$1 ");
                _27 = _27.replace(/^#(-\d)/, "#\\$1");
                _27 = _27.replace(/:([^\[])/g, "\\:$1");
                _27 = _27.replace(/^#[^\s]+/, function (id) {
                    return "#" + id.slice(1).replace(/([^a-zA-Z\d\s:\\])/g, "\\$1");
                });
                _27 = _27.replace(/:\[([^\]]+)\]/g, ":nth-of-type($1)");
                return _27;
            }
            function _119(_795, _4, _220) {
                for (var _1 = _795 - 1; _1 > 0; _1--) {
                    var _593 = _103.pow(256, _1);
                    _592(_103.floor(_4 / _593), _220);
                    _4 = _4 % _593;
                }
                _592(_4, _220);
            }
            function _592(_584, _220) {
                if (_584 > 255) {
                    _220._591 = true;
                    return;
                }
                _220.push(_584);
            }
            function _585(_2) {
                var _29 = "";
                for (var _1 = 0; _1 < _2.length; _1++) {
                    _29 += (_1 > 0 ? "," : "") + _278.encode("" + _2[_1]);
                }
                return _29;
            }
            function _606(_2) {
                var _270 = 0;
                for (var _1 = 0; _1 < _2.length; _1++) _270 += _278.encode("" + _2[_1]).length + 1;
                return _270 > 0 ? _270 - 1 : _270;
            }
            function _312(_32) {
                if (_794(_32.hostname) || !_14.includeSubDomains) return _32.hostname;
                var _26 = _32.href;
                var _801 = /\.co\.|\.com\.|\.ac\.|\.org\.|\.gov\.|\.edu\.|\.net\./;
                _26 = _26
                    .replace(/^http(s)?\:\/\/?/i, "")
                    .replace(/^([^\/]+)\/.*/i, "$1")
                    .replace(/:[\d]*$/, "");
                if (_801.test(_26)) _26 = _26.replace(/^([^\.]+\.){1,}([^\.]+\.[^\.]+\.[^\.]+)$/i, "$2");
                else _26 = _26.replace(/^([^\.]+\.){1,}([^\.]+\.[^\.]+)$/i, "$2");
                return "." + _26;
            }
            function _794(ipaddress) {
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
                    return true;
                }
                return false;
            }
            function _620(_25, _4, _791, _26) {
                var _617 = "";
                if (_791 == 1) {
                    var _97 = new Date();
                    _97.setTime(_97.getTime() + _56._790);
                    _617 = "; expires=" + _97.toGMTString();
                }
                var _789 = _14.secureCookie ? "secure;" : "";
                _9.cookie = _25 + "=" + _4 + _617 + "; path=/; domain=" + _26 + ";" + _789 + "SameSite=Strict;";
            }
            function _614(_25) {
                var _612 = _25 + "=";
                var _613 = _9.cookie.split(";");
                for (var i = 0; i < _613.length; i++) {
                    var c = _613[i];
                    while (c.charAt(0) === " ") {
                        c = c.substring(1);
                    }
                    if (c.indexOf(_612) === 0) {
                        return c.substring(_612.length, c.length);
                    }
                }
                return "";
            }
            function _875(_788) {
                return _788.replace(/<!--[\s]*MouseflowExcludeStart[\s]*([\s\S]*?)-->([\s\S]*?)<!--[\s]*MouseflowExcludeEnd[\s]*-->/g, "$1");
            }
            var _787 = new (function () {
                for (var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), c = 64; c; ) --c;
                this.e = function (e) {
                    for (var a = [], f = 0, b = 0, g, c = e.length, h = c % 3; f < c; ) a[b++] = d[((g = (e[f++] << 16) | (e[f++] << 8) | e[f++]) >> 18) & 63] + d[(g >> 12) & 63] + d[(g >> 6) & 63] + d[g & 63];
                    if (h) for (a[--b] = a[b].substr(0, a[b].length - (h = 3 - h)); h--; ) a[b] += "*";
                    return a.join("");
                };
            })();
            var _278 = {
                _279: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function (c) {
                    for (var a = "", d, b, e, i, h, f, g = 0, c = this._767(c); g < c.length; )
                        (d = c.charCodeAt(g++)),
                            (b = c.charCodeAt(g++)),
                            (e = c.charCodeAt(g++)),
                            (i = d >> 2),
                            (d = ((d & 3) << 4) | (b >> 4)),
                            (h = ((b & 15) << 2) | (e >> 6)),
                            (f = e & 63),
                            isNaN(b) ? (h = f = 64) : isNaN(e) && (f = 64),
                            (a = a + this._279.charAt(i) + this._279.charAt(d) + this._279.charAt(h) + this._279.charAt(f));
                    return a;
                },
                _767: function (c) {
                    for (var c = c.replace(/\r\n/g, "\n"), a = "", d = 0; d < c.length; d++) {
                        var b = c.charCodeAt(d);
                        128 > b
                            ? (a += String.fromCharCode(b))
                            : (127 < b && 2048 > b ? (a += String.fromCharCode((b >> 6) | 192)) : ((a += String.fromCharCode((b >> 12) | 224)), (a += String.fromCharCode(((b >> 6) & 63) | 128))), (a += String.fromCharCode((b & 63) | 128)));
                    }
                    return a;
                },
            };
            function _332() {
                var _104 = function () {
                    return (((1 + _103.random()) * 65536) | 0).toString(16).substring(1);
                };
                return _104() + _104() + _104() + _104() + _104() + _104() + _104() + _104();
            }
            var _331 = 0;
            function _528() {
                if (_9.body) {
                    _746();
                    return;
                }
                _331++;
                if (_331 === 1) {
                    _10("Retrying to initialize recorder - document.body is not set");
                } else if (_331 === 25) {
                    _10("Failed to initialize recorder");
                    return;
                }
                _22._53(_528, 200);
            }
            function _746() {
                _10("Initializing recorder");
                if (!_736(_14.location.hostname)) return;
                if (_745()) {
                    _10("Recording not started - browser is IE8 or older");
                    return;
                }
                if (_548) _744();
                if (_14.privacyToolEnabled) {
                    _10("Starting privacy tool");
                    _259._39(_107, _44, _244, _243, _291, _10);
                    return;
                }
                if (_14.liveHeatmapsEnabled) {
                    _10("Starting live heatmaps");
                    _186._39(_44, _10);
                    _3._mfq = new _328(_3._mfq);
                    return;
                }
                if (_548 || _743) return;
                _545 = true;
                function _544() {
                    if (!_66 && _14.autoStart && _9.readyState !== "loading") _39();
                    _403(_527());
                }
                _17._21(_9, "readystatechange", _544);
                _544();
            }
            function _403(_738) {
                if (_323 || !_66 || _9.readyState !== "complete") return;
                _23(_5._543, { x: _738, y: _8._324() });
                _323 = true;
            }
            function _737() {
                return _14.useUnload ? "unload" : "beforeunload";
            }
            function _213(_540, _539) {
                return _540.indexOf(_539, _540.length - _539.length) !== -1;
            }
            function _111(_32) {
                var _160 = 0,
                    _538;
                for (var _1 = 0; _1 < _32.length; _1++) {
                    _538 = _32.charCodeAt(_1);
                    _160 = (_160 << 5) - _160 + _538;
                }
                return _160.toString();
            }
            function _536(_24) {
                for (var _1 = 0; _1 < _0._123.length; _1++)
                    if (_0._123[_1].split("_")[0] === _111(_24)) {
                        return _1;
                    }
                return -1;
            }
            function _537(_24, _4) {
                var _320 = _536(_24);
                var _318 = _111("" + _4);
                if (_320 > -1) {
                    if (_0._123[_320].split("_")[1] === _318) {
                        return false;
                    }
                    _0._123[_320] = _111(_24) + "_" + _318;
                } else if (_0._123.length < 20) {
                    _0._123.push(_111(_24) + "_" + _318);
                }
                return true;
            }
            function _736(_26) {
                var _735 = _26;
                _26 = _377(_26);
                var _535 = false;
                for (var _1 = 0; _1 < _215.length; _1++) {
                    if (_26 == _377(_215[_1])) {
                        _535 = true;
                        break;
                    }
                }
                _26 = _734(_26);
                var _534 = false;
                for (var _1 = 0; _1 < _215.length; _1++) {
                    if (_26 == _377(_215[_1])) {
                        _534 = true;
                        break;
                    }
                }
                var _29 = _535 || _534;
                if (!_29) _10("Domain was blocked: " + _735 + " - domain list: " + _215);
                return _29;
            }
            function _377(_26) {
                if (_26 == null) return "";
                _26 = _26.toLowerCase();
                _26 = _26.replace(/^\s+|\s+$/g, "");
                if (_26.substring(0, 4) == "www.") {
                    _26 = _26.substring(4, _26.length);
                }
                return _26;
            }
            function _734(_26) {
                if (_14.includeSubDomains) {
                    _26 = _749(_26);
                }
                return _26;
            }
            function _749(_26) {
                var _106 = _26.split(".");
                if (_106.length <= 2) return _26;
                if (_26.indexOf(".co.") > -1 || _26.indexOf(".com.") > -1 || _26.indexOf(".org.") > -1) {
                    _106 = _106.slice(_106.length - 3, _106.length);
                    return _106.join(".");
                }
                _106 = _106.slice(_106.length - 2, _106.length);
                return _106.join(".");
            }
            function _757() {
                var _29 = [];
                if (typeof Ember != "undefined") _29.push("em");
                if (typeof angular != "undefined") _29.push("an");
                if (typeof Backbone != "undefined") _29.push("bb");
                return _29;
            }
            function _764() {
                if (_14.autoTagging) {
                    _10("Autotagging session");
                    var _533 = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"];
                    for (var _1 = 0; _1 < _533.length; _1++) {
                        var _409 = _533[_1];
                        var _4 = _547(_14.location.href, _409);
                        if (!_4) _4 = _547(_9.referrer, _409);
                        if (_4) _3._mfq.push(["setVariable", _409, _4]);
                    }
                }
            }
            function _547(_16, _25) {
                _25 = _25.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + _25 + "=([^&#]*)"),
                    results = regex.exec(_16);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            function _762(_411) {
                switch (_411) {
                    case " ":
                    case '"':
                    case "'":
                    case ".":
                    case ",":
                    case "_":
                    case "-":
                    case "+":
                    case "/":
                    case "*":
                    case ":":
                    case "=":
                    case "!":
                    case "?":
                    case "@":
                    case "#":
                    case "%":
                    case "&":
                    case "{":
                    case "}":
                    case "[":
                    case "]":
                    case "\\":
                    case "|":
                        return false;
                    default:
                        return true;
                }
            }
            function _761(_4, _401) {
                var _29 = "";
                for (var _1 = 0; _1 < _401; _1++) {
                    _29 += _4;
                }
                return _29;
            }
            function _95() {
                return +new Date() - _0._91;
            }
            function _10(_108) {
                if (_14.debug) console.log("MF" + (_14.includeDebugTime ? " - " + _95() : "") + ": " + _108);
            }
            if (!_529()) {
                var pako = (function () {
                    function t() {
                        (this.input = null),
                            (this.next_in = 0),
                            (this.avail_in = 0),
                            (this.total_in = 0),
                            (this.output = null),
                            (this.next_out = 0),
                            (this.avail_out = 0),
                            (this.total_out = 0),
                            (this.msg = ""),
                            (this.state = null),
                            (this.data_type = 2),
                            (this.adler = 0);
                    }
                    function e(t, e, a, n) {
                        for (var r = (65535 & t) | 0, i = ((t >>> 16) & 65535) | 0, s = 0; 0 !== a; ) {
                            (s = a > 2e3 ? 2e3 : a), (a -= s);
                            do (r = (r + e[n++]) | 0), (i = (i + r) | 0);
                            while (--s);
                            (r %= 65521), (i %= 65521);
                        }
                        return r | (i << 16) | 0;
                    }
                    var a = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" },
                        n = (function () {
                            function t() {
                                for (var t, e = [], a = 0; a < 256; a++) {
                                    t = a;
                                    for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                                    e[a] = t;
                                }
                                return e;
                            }
                            function e(t, e, n, r) {
                                var i = a,
                                    s = r + n;
                                t ^= -1;
                                for (var h = r; h < s; h++) t = (t >>> 8) ^ i[255 & (t ^ e[h])];
                                return t ^ -1;
                            }
                            var a = t();
                            return e;
                        })(),
                        r = {
                            Buf8: Uint8Array,
                            Buf16: Uint16Array,
                            assign: function (t) {
                                for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
                                    var a = e.shift();
                                    if (a) {
                                        if ("object" != typeof a) throw new TypeError(a + "must be non-object");
                                        for (var n in a) a.hasOwnProperty(n) && (t[n] = a[n]);
                                    }
                                }
                                return t;
                            },
                            shrinkBuf: function (t, e) {
                                return t.length === e ? t : t.subarray ? t.subarray(0, e) : ((t.length = e), t);
                            },
                            arraySet: function (t, e, a, n, r) {
                                if (e.subarray && t.subarray) return void t.set(e.subarray(a, a + n), r);
                                for (var i = 0; i < n; i++) t[r + i] = e[a + i];
                            },
                            flattenChunks: function (t) {
                                var e, a, n, r, i, s;
                                for (n = 0, e = 0, a = t.length; e < a; e++) n += t[e].length;
                                for (s = new Uint8Array(n), r = 0, e = 0, a = t.length; e < a; e++) (i = t[e]), s.set(i, r), (r += i.length);
                                return s;
                            },
                        },
                        i = (function () {
                            function t(t) {
                                var e,
                                    a,
                                    n,
                                    i,
                                    s,
                                    h = t.length,
                                    _ = 0;
                                for (i = 0; i < h; i++)
                                    (a = t.charCodeAt(i)),
                                        55296 === (64512 & a) && i + 1 < h && ((n = t.charCodeAt(i + 1)), 56320 === (64512 & n) && ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), i++)),
                                        (_ += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
                                for (e = new r.Buf8(_), s = 0, i = 0; s < _; i++)
                                    (a = t.charCodeAt(i)),
                                        55296 === (64512 & a) && i + 1 < h && ((n = t.charCodeAt(i + 1)), 56320 === (64512 & n) && ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), i++)),
                                        a < 128
                                            ? (e[s++] = a)
                                            : a < 2048
                                            ? ((e[s++] = 192 | (a >>> 6)), (e[s++] = 128 | (63 & a)))
                                            : a < 65536
                                            ? ((e[s++] = 224 | (a >>> 12)), (e[s++] = 128 | ((a >>> 6) & 63)), (e[s++] = 128 | (63 & a)))
                                            : ((e[s++] = 240 | (a >>> 18)), (e[s++] = 128 | ((a >>> 12) & 63)), (e[s++] = 128 | ((a >>> 6) & 63)), (e[s++] = 128 | (63 & a)));
                                return e;
                            }
                            function e(t) {
                                var e = t.length;
                                if (e < 65537 && ((t.subarray && n) || (!t.subarray && a))) return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
                                for (var i = "", s = 0; s < e; s++) i += String.fromCharCode(t[s]);
                                return i;
                            }
                            var a = !0,
                                n = !0;
                            try {
                                String.fromCharCode.apply(null, [0]);
                            } catch (t) {
                                a = !1;
                            }
                            try {
                                String.fromCharCode.apply(null, new Uint8Array(1));
                            } catch (t) {
                                n = !1;
                            }
                            return { string2buf: t, buf2binstring: e };
                        })(),
                        s = (function () {
                            function t(t) {
                                for (var e = t.length; --e >= 0; ) t[e] = 0;
                            }
                            function e(t, e, a, n, r) {
                                (this.static_tree = t), (this.extra_bits = e), (this.extra_base = a), (this.elems = n), (this.max_length = r), (this.has_stree = t && t.length);
                            }
                            function a(t, e) {
                                (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
                            }
                            function n(t) {
                                return t < 256 ? it[t] : it[256 + (t >>> 7)];
                            }
                            function i(t, e) {
                                (t.pending_buf[t.pending++] = 255 & e), (t.pending_buf[t.pending++] = (e >>> 8) & 255);
                            }
                            function s(t, e, a) {
                                t.bi_valid > Q - a ? ((t.bi_buf |= (e << t.bi_valid) & 65535), i(t, t.bi_buf), (t.bi_buf = e >> (Q - t.bi_valid)), (t.bi_valid += a - Q)) : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += a));
                            }
                            function h(t, e, a) {
                                s(t, a[2 * e], a[2 * e + 1]);
                            }
                            function _(t, e) {
                                var a = 0;
                                do (a |= 1 & t), (t >>>= 1), (a <<= 1);
                                while (--e > 0);
                                return a >>> 1;
                            }
                            function l(t) {
                                16 === t.bi_valid ? (i(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0)) : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = 255 & t.bi_buf), (t.bi_buf >>= 8), (t.bi_valid -= 8));
                            }
                            function o(t, e) {
                                var a,
                                    n,
                                    r,
                                    i,
                                    s,
                                    h,
                                    _ = e.dyn_tree,
                                    l = e.max_code,
                                    o = e.stat_desc.static_tree,
                                    d = e.stat_desc.has_stree,
                                    u = e.stat_desc.extra_bits,
                                    f = e.stat_desc.extra_base,
                                    c = e.stat_desc.max_length,
                                    g = 0;
                                for (i = 0; i <= N; i++) t.bl_count[i] = 0;
                                for (_[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < M; a++)
                                    (n = t.heap[a]),
                                        (i = _[2 * _[2 * n + 1] + 1] + 1),
                                        i > c && ((i = c), g++),
                                        (_[2 * n + 1] = i),
                                        n > l || (t.bl_count[i]++, (s = 0), n >= f && (s = u[n - f]), (h = _[2 * n]), (t.opt_len += h * (i + s)), d && (t.static_len += h * (o[2 * n + 1] + s)));
                                if (0 !== g) {
                                    do {
                                        for (i = c - 1; 0 === t.bl_count[i]; ) i--;
                                        t.bl_count[i]--, (t.bl_count[i + 1] += 2), t.bl_count[c]--, (g -= 2);
                                    } while (g > 0);
                                    for (i = c; 0 !== i; i--) for (n = t.bl_count[i]; 0 !== n; ) (r = t.heap[--a]), r > l || (_[2 * r + 1] !== i && ((t.opt_len += (i - _[2 * r + 1]) * _[2 * r]), (_[2 * r + 1] = i)), n--);
                                }
                            }
                            function d(t, e, a) {
                                var n,
                                    r,
                                    i = new Array(N + 1),
                                    s = 0;
                                for (n = 1; n <= N; n++) i[n] = s = (s + a[n - 1]) << 1;
                                for (r = 0; r <= e; r++) {
                                    var h = t[2 * r + 1];
                                    0 !== h && (t[2 * r] = _(i[h]++, h));
                                }
                            }
                            function u() {
                                var t,
                                    a,
                                    n,
                                    r,
                                    i,
                                    s = new Array(N + 1);
                                for (n = 0, r = 0; r < q - 1; r++) for (ht[r] = n, t = 0; t < 1 << Z[r]; t++) st[n++] = r;
                                for (st[n - 1] = r, i = 0, r = 0; r < 16; r++) for (_t[r] = i, t = 0; t < 1 << $[r]; t++) it[i++] = r;
                                for (i >>= 7; r < J; r++) for (_t[r] = i << 7, t = 0; t < 1 << ($[r] - 7); t++) it[256 + i++] = r;
                                for (a = 0; a <= N; a++) s[a] = 0;
                                for (t = 0; t <= 143; ) (nt[2 * t + 1] = 8), t++, s[8]++;
                                for (; t <= 255; ) (nt[2 * t + 1] = 9), t++, s[9]++;
                                for (; t <= 279; ) (nt[2 * t + 1] = 7), t++, s[7]++;
                                for (; t <= 287; ) (nt[2 * t + 1] = 8), t++, s[8]++;
                                for (d(nt, G + 1, s), t = 0; t < J; t++) (rt[2 * t + 1] = 5), (rt[2 * t] = _(t, 5));
                                (lt = new e(nt, Z, F + 1, G, N)), (ot = new e(rt, $, 0, J, N)), (dt = new e(new Array(0), tt, 0, K, R));
                            }
                            function f(t) {
                                var e;
                                for (e = 0; e < G; e++) t.dyn_ltree[2 * e] = 0;
                                for (e = 0; e < J; e++) t.dyn_dtree[2 * e] = 0;
                                for (e = 0; e < K; e++) t.bl_tree[2 * e] = 0;
                                (t.dyn_ltree[2 * V] = 1), (t.opt_len = t.static_len = 0), (t.last_lit = t.matches = 0);
                            }
                            function c(t) {
                                t.bi_valid > 8 ? i(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0);
                            }
                            function g(t, e, a, n) {
                                c(t), n && (i(t, a), i(t, ~a)), r.arraySet(t.pending_buf, t.window, e, a, t.pending), (t.pending += a);
                            }
                            function p(t, e, a, n) {
                                var r = 2 * e,
                                    i = 2 * a;
                                return t[r] < t[i] || (t[r] === t[i] && n[e] <= n[a]);
                            }
                            function b(t, e, a) {
                                for (var n = t.heap[a], r = a << 1; r <= t.heap_len && (r < t.heap_len && p(e, t.heap[r + 1], t.heap[r], t.depth) && r++, !p(e, n, t.heap[r], t.depth)); ) (t.heap[a] = t.heap[r]), (a = r), (r <<= 1);
                                t.heap[a] = n;
                            }
                            function w(t, e, a) {
                                var r,
                                    i,
                                    _,
                                    l,
                                    o = 0;
                                if (0 !== t.last_lit)
                                    do
                                        (r = (t.pending_buf[t.d_buf + 2 * o] << 8) | t.pending_buf[t.d_buf + 2 * o + 1]),
                                            (i = t.pending_buf[t.l_buf + o]),
                                            o++,
                                            0 === r ? h(t, i, e) : ((_ = st[i]), h(t, _ + F + 1, e), (l = Z[_]), 0 !== l && ((i -= ht[_]), s(t, i, l)), r--, (_ = n(r)), h(t, _, a), (l = $[_]), 0 !== l && ((r -= _t[_]), s(t, r, l)));
                                    while (o < t.last_lit);
                                h(t, V, e);
                            }
                            function v(t, e) {
                                var a,
                                    n,
                                    r,
                                    i = e.dyn_tree,
                                    s = e.stat_desc.static_tree,
                                    h = e.stat_desc.has_stree,
                                    _ = e.stat_desc.elems,
                                    l = -1;
                                for (t.heap_len = 0, t.heap_max = M, a = 0; a < _; a++) 0 !== i[2 * a] ? ((t.heap[++t.heap_len] = l = a), (t.depth[a] = 0)) : (i[2 * a + 1] = 0);
                                for (; t.heap_len < 2; ) (r = t.heap[++t.heap_len] = l < 2 ? ++l : 0), (i[2 * r] = 1), (t.depth[r] = 0), t.opt_len--, h && (t.static_len -= s[2 * r + 1]);
                                for (e.max_code = l, a = t.heap_len >> 1; a >= 1; a--) b(t, i, a);
                                r = _;
                                do
                                    (a = t.heap[1]),
                                        (t.heap[1] = t.heap[t.heap_len--]),
                                        b(t, i, 1),
                                        (n = t.heap[1]),
                                        (t.heap[--t.heap_max] = a),
                                        (t.heap[--t.heap_max] = n),
                                        (i[2 * r] = i[2 * a] + i[2 * n]),
                                        (t.depth[r] = (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1),
                                        (i[2 * a + 1] = i[2 * n + 1] = r),
                                        (t.heap[1] = r++),
                                        b(t, i, 1);
                                while (t.heap_len >= 2);
                                (t.heap[--t.heap_max] = t.heap[1]), o(t, e), d(i, l, t.bl_count);
                            }
                            function m(t, e, a) {
                                var n,
                                    r,
                                    i = -1,
                                    s = e[1],
                                    h = 0,
                                    _ = 7,
                                    l = 4;
                                for (0 === s && ((_ = 138), (l = 3)), e[2 * (a + 1) + 1] = 65535, n = 0; n <= a; n++)
                                    (r = s),
                                        (s = e[2 * (n + 1) + 1]),
                                        (++h < _ && r === s) ||
                                            (h < l ? (t.bl_tree[2 * r] += h) : 0 !== r ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[2 * W]++) : h <= 10 ? t.bl_tree[2 * X]++ : t.bl_tree[2 * Y]++,
                                            (h = 0),
                                            (i = r),
                                            0 === s ? ((_ = 138), (l = 3)) : r === s ? ((_ = 6), (l = 3)) : ((_ = 7), (l = 4)));
                            }
                            function k(t, e, a) {
                                var n,
                                    r,
                                    i = -1,
                                    _ = e[1],
                                    l = 0,
                                    o = 7,
                                    d = 4;
                                for (0 === _ && ((o = 138), (d = 3)), n = 0; n <= a; n++)
                                    if (((r = _), (_ = e[2 * (n + 1) + 1]), !(++l < o && r === _))) {
                                        if (l < d) {
                                            do h(t, r, t.bl_tree);
                                            while (0 !== --l);
                                        } else 0 !== r ? (r !== i && (h(t, r, t.bl_tree), l--), h(t, W, t.bl_tree), s(t, l - 3, 2)) : l <= 10 ? (h(t, X, t.bl_tree), s(t, l - 3, 3)) : (h(t, Y, t.bl_tree), s(t, l - 11, 7));
                                        (l = 0), (i = r), 0 === _ ? ((o = 138), (d = 3)) : r === _ ? ((o = 6), (d = 3)) : ((o = 7), (d = 4));
                                    }
                            }
                            function y(t) {
                                var e;
                                for (m(t, t.dyn_ltree, t.l_desc.max_code), m(t, t.dyn_dtree, t.d_desc.max_code), v(t, t.bl_desc), e = K - 1; e >= 3 && 0 === t.bl_tree[2 * et[e] + 1]; e--);
                                return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                            }
                            function z(t, e, a, n) {
                                var r;
                                for (s(t, e - 257, 5), s(t, a - 1, 5), s(t, n - 4, 4), r = 0; r < n; r++) s(t, t.bl_tree[2 * et[r] + 1], 3);
                                k(t, t.dyn_ltree, e - 1), k(t, t.dyn_dtree, a - 1);
                            }
                            function x(t) {
                                var e,
                                    a = 4093624447;
                                for (e = 0; e <= 31; e++, a >>>= 1) if (1 & a && 0 !== t.dyn_ltree[2 * e]) return U;
                                if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return D;
                                for (e = 32; e < F; e++) if (0 !== t.dyn_ltree[2 * e]) return D;
                                return U;
                            }
                            function B(t) {
                                ut || (u(), (ut = !0)), (t.l_desc = new a(t.dyn_ltree, lt)), (t.d_desc = new a(t.dyn_dtree, ot)), (t.bl_desc = new a(t.bl_tree, dt)), (t.bi_buf = 0), (t.bi_valid = 0), f(t);
                            }
                            function A(t, e, a, n) {
                                s(t, (I << 1) + (n ? 1 : 0), 3), g(t, e, a, !0);
                            }
                            function S(t) {
                                s(t, L << 1, 3), h(t, V, nt), l(t);
                            }
                            function C(t, e, a, n) {
                                var r,
                                    i,
                                    h = 0;
                                t.level > 0
                                    ? (t.strm.data_type === H && (t.strm.data_type = x(t)), v(t, t.l_desc), v(t, t.d_desc), (h = y(t)), (r = (t.opt_len + 3 + 7) >>> 3), (i = (t.static_len + 3 + 7) >>> 3), i <= r && (r = i))
                                    : (r = i = a + 5),
                                    a + 4 <= r && e !== -1
                                        ? A(t, e, a, n)
                                        : t.strategy === j || i === r
                                        ? (s(t, (L << 1) + (n ? 1 : 0), 3), w(t, nt, rt))
                                        : (s(t, (O << 1) + (n ? 1 : 0), 3), z(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, h + 1), w(t, t.dyn_ltree, t.dyn_dtree)),
                                    f(t),
                                    n && c(t);
                            }
                            function E(t, e, a) {
                                return (
                                    (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                                    (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                                    (t.pending_buf[t.l_buf + t.last_lit] = 255 & a),
                                    t.last_lit++,
                                    0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (st[a] + F + 1)]++, t.dyn_dtree[2 * n(e)]++),
                                    t.last_lit === t.lit_bufsize - 1
                                );
                            }
                            var j = 4,
                                U = 0,
                                D = 1,
                                H = 2,
                                I = 0,
                                L = 1,
                                O = 2,
                                P = 3,
                                T = 258,
                                q = 29,
                                F = 256,
                                G = F + 1 + q,
                                J = 30,
                                K = 19,
                                M = 2 * G + 1,
                                N = 15,
                                Q = 16,
                                R = 7,
                                V = 256,
                                W = 16,
                                X = 17,
                                Y = 18,
                                Z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                                $ = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                                tt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                                et = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                at = 512,
                                nt = new Array(2 * (G + 2));
                            t(nt);
                            var rt = new Array(2 * J);
                            t(rt);
                            var it = new Array(at);
                            t(it);
                            var st = new Array(T - P + 1);
                            t(st);
                            var ht = new Array(q);
                            t(ht);
                            var _t = new Array(J);
                            t(_t);
                            var lt,
                                ot,
                                dt,
                                ut = !1;
                            return { _tr_init: B, _tr_stored_block: A, _tr_align: S, _tr_flush_block: C, _tr_tally: E };
                        })(),
                        h = (function () {
                            function t(t, e) {
                                return (t.msg = a[e]), e;
                            }
                            function i(t) {
                                return (t << 1) - (t > 4 ? 9 : 0);
                            }
                            function h(t) {
                                for (var e = t.length; --e >= 0; ) t[e] = 0;
                            }
                            function _(t) {
                                var e = t.state,
                                    a = e.pending;
                                a > t.avail_out && (a = t.avail_out),
                                    0 !== a &&
                                        (r.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out),
                                        (t.next_out += a),
                                        (e.pending_out += a),
                                        (t.total_out += a),
                                        (t.avail_out -= a),
                                        (e.pending -= a),
                                        0 === e.pending && (e.pending_out = 0));
                            }
                            function l(t, e) {
                                s._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), (t.block_start = t.strstart), _(t.strm);
                            }
                            function o(t, e) {
                                t.pending_buf[t.pending++] = e;
                            }
                            function d(t, e) {
                                (t.pending_buf[t.pending++] = (e >>> 8) & 255), (t.pending_buf[t.pending++] = 255 & e);
                            }
                            function u(t, a, i, s) {
                                var h = t.avail_in;
                                return (
                                    h > s && (h = s),
                                    0 === h
                                        ? 0
                                        : ((t.avail_in -= h),
                                          r.arraySet(a, t.input, t.next_in, h, i),
                                          1 === t.state.wrap ? (t.adler = e(t.adler, a, h, i)) : 2 === t.state.wrap && (t.adler = n(t.adler, a, h, i)),
                                          (t.next_in += h),
                                          (t.total_in += h),
                                          h)
                                );
                            }
                            function f(t, e) {
                                var a,
                                    n,
                                    r = t.max_chain_length,
                                    i = t.strstart,
                                    s = t.prev_length,
                                    h = t.nice_match,
                                    _ = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0,
                                    l = t.window,
                                    o = t.w_mask,
                                    d = t.prev,
                                    u = t.strstart + nt,
                                    f = l[i + s - 1],
                                    c = l[i + s];
                                t.prev_length >= t.good_match && (r >>= 2), h > t.lookahead && (h = t.lookahead);
                                do
                                    if (((a = e), l[a + s] === c && l[a + s - 1] === f && l[a] === l[i] && l[++a] === l[i + 1])) {
                                        (i += 2), a++;
                                        do;
                                        while (l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && i < u);
                                        if (((n = nt - (u - i)), (i = u - nt), n > s)) {
                                            if (((t.match_start = e), (s = n), n >= h)) break;
                                            (f = l[i + s - 1]), (c = l[i + s]);
                                        }
                                    }
                                while ((e = d[e & o]) > _ && 0 !== --r);
                                return s <= t.lookahead ? s : t.lookahead;
                            }
                            function c(t) {
                                var e,
                                    a,
                                    n,
                                    i,
                                    s,
                                    h = t.w_size;
                                do {
                                    if (((i = t.window_size - t.lookahead - t.strstart), t.strstart >= h + (h - rt))) {
                                        r.arraySet(t.window, t.window, h, h, 0), (t.match_start -= h), (t.strstart -= h), (t.block_start -= h), (a = t.hash_size), (e = a);
                                        do (n = t.head[--e]), (t.head[e] = n >= h ? n - h : 0);
                                        while (--a);
                                        (a = h), (e = a);
                                        do (n = t.prev[--e]), (t.prev[e] = n >= h ? n - h : 0);
                                        while (--a);
                                        i += h;
                                    }
                                    if (0 === t.strm.avail_in) break;
                                    if (((a = u(t.strm, t.window, t.strstart + t.lookahead, i)), (t.lookahead += a), t.lookahead + t.insert >= at))
                                        for (
                                            s = t.strstart - t.insert, t.ins_h = t.window[s], t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[s + 1]) & t.hash_mask;
                                            t.insert &&
                                            ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[s + at - 1]) & t.hash_mask), (t.prev[s & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = s), s++, t.insert--, !(t.lookahead + t.insert < at));

                                        );
                                } while (t.lookahead < rt && 0 !== t.strm.avail_in);
                            }
                            function g(t, e) {
                                var a = 65535;
                                for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5); ; ) {
                                    if (t.lookahead <= 1) {
                                        if ((c(t), 0 === t.lookahead && e === U)) return ft;
                                        if (0 === t.lookahead) break;
                                    }
                                    (t.strstart += t.lookahead), (t.lookahead = 0);
                                    var n = t.block_start + a;
                                    if ((0 === t.strstart || t.strstart >= n) && ((t.lookahead = t.strstart - n), (t.strstart = n), l(t, !1), 0 === t.strm.avail_out)) return ft;
                                    if (t.strstart - t.block_start >= t.w_size - rt && (l(t, !1), 0 === t.strm.avail_out)) return ft;
                                }
                                return (t.insert = 0), e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.strstart > t.block_start && (l(t, !1), 0 === t.strm.avail_out) ? ft : ft;
                            }
                            function p(t, e) {
                                for (var a, n; ; ) {
                                    if (t.lookahead < rt) {
                                        if ((c(t), t.lookahead < rt && e === U)) return ft;
                                        if (0 === t.lookahead) break;
                                    }
                                    if (
                                        ((a = 0),
                                        t.lookahead >= at && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + at - 1]) & t.hash_mask), (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart)),
                                        0 !== a && t.strstart - a <= t.w_size - rt && (t.match_length = f(t, a)),
                                        t.match_length >= at)
                                    )
                                        if (((n = s._tr_tally(t, t.strstart - t.match_start, t.match_length - at)), (t.lookahead -= t.match_length), t.match_length <= t.max_lazy_match && t.lookahead >= at)) {
                                            t.match_length--;
                                            do t.strstart++, (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + at - 1]) & t.hash_mask), (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart);
                                            while (0 !== --t.match_length);
                                            t.strstart++;
                                        } else (t.strstart += t.match_length), (t.match_length = 0), (t.ins_h = t.window[t.strstart]), (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) & t.hash_mask);
                                    else (n = s._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
                                    if (n && (l(t, !1), 0 === t.strm.avail_out)) return ft;
                                }
                                return (t.insert = t.strstart < at - 1 ? t.strstart : at - 1), e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct;
                            }
                            function b(t, e) {
                                for (var a, n, r; ; ) {
                                    if (t.lookahead < rt) {
                                        if ((c(t), t.lookahead < rt && e === U)) return ft;
                                        if (0 === t.lookahead) break;
                                    }
                                    if (
                                        ((a = 0),
                                        t.lookahead >= at && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + at - 1]) & t.hash_mask), (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart)),
                                        (t.prev_length = t.match_length),
                                        (t.prev_match = t.match_start),
                                        (t.match_length = at - 1),
                                        0 !== a &&
                                            t.prev_length < t.max_lazy_match &&
                                            t.strstart - a <= t.w_size - rt &&
                                            ((t.match_length = f(t, a)), t.match_length <= 5 && (t.strategy === J || (t.match_length === at && t.strstart - t.match_start > 4096)) && (t.match_length = at - 1)),
                                        t.prev_length >= at && t.match_length <= t.prev_length)
                                    ) {
                                        (r = t.strstart + t.lookahead - at), (n = s._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - at)), (t.lookahead -= t.prev_length - 1), (t.prev_length -= 2);
                                        do ++t.strstart <= r && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + at - 1]) & t.hash_mask), (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart));
                                        while (0 !== --t.prev_length);
                                        if (((t.match_available = 0), (t.match_length = at - 1), t.strstart++, n && (l(t, !1), 0 === t.strm.avail_out))) return ft;
                                    } else if (t.match_available) {
                                        if (((n = s._tr_tally(t, 0, t.window[t.strstart - 1])), n && l(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out)) return ft;
                                    } else (t.match_available = 1), t.strstart++, t.lookahead--;
                                }
                                return (
                                    t.match_available && ((n = s._tr_tally(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
                                    (t.insert = t.strstart < at - 1 ? t.strstart : at - 1),
                                    e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct
                                );
                            }
                            function w(t, e) {
                                for (var a, n, r, i, h = t.window; ; ) {
                                    if (t.lookahead <= nt) {
                                        if ((c(t), t.lookahead <= nt && e === U)) return ft;
                                        if (0 === t.lookahead) break;
                                    }
                                    if (((t.match_length = 0), t.lookahead >= at && t.strstart > 0 && ((r = t.strstart - 1), (n = h[r]), n === h[++r] && n === h[++r] && n === h[++r]))) {
                                        i = t.strstart + nt;
                                        do;
                                        while (n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && r < i);
                                        (t.match_length = nt - (i - r)), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                                    }
                                    if (
                                        (t.match_length >= at
                                            ? ((a = s._tr_tally(t, 1, t.match_length - at)), (t.lookahead -= t.match_length), (t.strstart += t.match_length), (t.match_length = 0))
                                            : ((a = s._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++),
                                        a && (l(t, !1), 0 === t.strm.avail_out))
                                    )
                                        return ft;
                                }
                                return (t.insert = 0), e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct;
                            }
                            function v(t, e) {
                                for (var a; ; ) {
                                    if (0 === t.lookahead && (c(t), 0 === t.lookahead)) {
                                        if (e === U) return ft;
                                        break;
                                    }
                                    if (((t.match_length = 0), (a = s._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++, a && (l(t, !1), 0 === t.strm.avail_out))) return ft;
                                }
                                return (t.insert = 0), e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct;
                            }
                            function m(t, e, a, n, r) {
                                (this.good_length = t), (this.max_lazy = e), (this.nice_length = a), (this.max_chain = n), (this.func = r);
                            }
                            function k(t) {
                                (t.window_size = 2 * t.w_size),
                                    h(t.head),
                                    (t.max_lazy_match = j[t.level].max_lazy),
                                    (t.good_match = j[t.level].good_length),
                                    (t.nice_match = j[t.level].nice_length),
                                    (t.max_chain_length = j[t.level].max_chain),
                                    (t.strstart = 0),
                                    (t.block_start = 0),
                                    (t.lookahead = 0),
                                    (t.insert = 0),
                                    (t.match_length = t.prev_length = at - 1),
                                    (t.match_available = 0),
                                    (t.ins_h = 0);
                            }
                            function y() {
                                (this.strm = null),
                                    (this.status = 0),
                                    (this.pending_buf = null),
                                    (this.pending_buf_size = 0),
                                    (this.pending_out = 0),
                                    (this.pending = 0),
                                    (this.wrap = 0),
                                    (this.gzhead = null),
                                    (this.gzindex = 0),
                                    (this.method = R),
                                    (this.last_flush = -1),
                                    (this.w_size = 0),
                                    (this.w_bits = 0),
                                    (this.w_mask = 0),
                                    (this.window = null),
                                    (this.window_size = 0),
                                    (this.prev = null),
                                    (this.head = null),
                                    (this.ins_h = 0),
                                    (this.hash_size = 0),
                                    (this.hash_bits = 0),
                                    (this.hash_mask = 0),
                                    (this.hash_shift = 0),
                                    (this.block_start = 0),
                                    (this.match_length = 0),
                                    (this.prev_match = 0),
                                    (this.match_available = 0),
                                    (this.strstart = 0),
                                    (this.match_start = 0),
                                    (this.lookahead = 0),
                                    (this.prev_length = 0),
                                    (this.max_chain_length = 0),
                                    (this.max_lazy_match = 0),
                                    (this.level = 0),
                                    (this.strategy = 0),
                                    (this.good_match = 0),
                                    (this.nice_match = 0),
                                    (this.dyn_ltree = new r.Buf16(2 * tt)),
                                    (this.dyn_dtree = new r.Buf16(2 * (2 * Z + 1))),
                                    (this.bl_tree = new r.Buf16(2 * (2 * $ + 1))),
                                    h(this.dyn_ltree),
                                    h(this.dyn_dtree),
                                    h(this.bl_tree),
                                    (this.l_desc = null),
                                    (this.d_desc = null),
                                    (this.bl_desc = null),
                                    (this.bl_count = new r.Buf16(et + 1)),
                                    (this.heap = new r.Buf16(2 * Y + 1)),
                                    h(this.heap),
                                    (this.heap_len = 0),
                                    (this.heap_max = 0),
                                    (this.depth = new r.Buf16(2 * Y + 1)),
                                    h(this.depth),
                                    (this.l_buf = 0),
                                    (this.lit_bufsize = 0),
                                    (this.last_lit = 0),
                                    (this.d_buf = 0),
                                    (this.opt_len = 0),
                                    (this.static_len = 0),
                                    (this.matches = 0),
                                    (this.insert = 0),
                                    (this.bi_buf = 0),
                                    (this.bi_valid = 0);
                            }
                            function z(e) {
                                var a;
                                return e && e.state
                                    ? ((e.total_in = e.total_out = 0),
                                      (e.data_type = Q),
                                      (a = e.state),
                                      (a.pending = 0),
                                      (a.pending_out = 0),
                                      a.wrap < 0 && (a.wrap = -a.wrap),
                                      (a.status = a.wrap ? st : dt),
                                      (e.adler = 2 === a.wrap ? 0 : 1),
                                      (a.last_flush = U),
                                      s._tr_init(a),
                                      O)
                                    : t(e, T);
                            }
                            function x(t) {
                                var e = z(t);
                                return e === O && k(t.state), e;
                            }
                            function B(t, e) {
                                return t && t.state ? (2 !== t.state.wrap ? T : ((t.state.gzhead = e), O)) : T;
                            }
                            function A(e, a, n, i, s, h) {
                                if (!e) return T;
                                var _ = 1;
                                if ((a === G && (a = 6), i < 0 ? ((_ = 0), (i = -i)) : i > 15 && ((_ = 2), (i -= 16)), s < 1 || s > V || n !== R || i < 8 || i > 15 || a < 0 || a > 9 || h < 0 || h > N)) return t(e, T);
                                8 === i && (i = 9);
                                var l = new y();
                                return (
                                    (e.state = l),
                                    (l.strm = e),
                                    (l.wrap = _),
                                    (l.gzhead = null),
                                    (l.w_bits = i),
                                    (l.w_size = 1 << l.w_bits),
                                    (l.w_mask = l.w_size - 1),
                                    (l.hash_bits = s + 7),
                                    (l.hash_size = 1 << l.hash_bits),
                                    (l.hash_mask = l.hash_size - 1),
                                    (l.hash_shift = ~~((l.hash_bits + at - 1) / at)),
                                    (l.window = new r.Buf8(2 * l.w_size)),
                                    (l.head = new r.Buf16(l.hash_size)),
                                    (l.prev = new r.Buf16(l.w_size)),
                                    (l.lit_bufsize = 1 << (s + 6)),
                                    (l.pending_buf_size = 4 * l.lit_bufsize),
                                    (l.pending_buf = new r.Buf8(l.pending_buf_size)),
                                    (l.d_buf = 1 * l.lit_bufsize),
                                    (l.l_buf = 3 * l.lit_bufsize),
                                    (l.level = a),
                                    (l.strategy = h),
                                    (l.method = n),
                                    x(e)
                                );
                            }
                            function S(e, a) {
                                var r, l, u, f;
                                if (!e || !e.state || a > L || a < 0) return e ? t(e, T) : T;
                                if (((l = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (l.status === ut && a !== I))) return t(e, 0 === e.avail_out ? F : T);
                                if (((l.strm = e), (r = l.last_flush), (l.last_flush = a), l.status === st))
                                    if (2 === l.wrap)
                                        (e.adler = 0),
                                            o(l, 31),
                                            o(l, 139),
                                            o(l, 8),
                                            l.gzhead
                                                ? (o(l, (l.gzhead.text ? 1 : 0) + (l.gzhead.hcrc ? 2 : 0) + (l.gzhead.extra ? 4 : 0) + (l.gzhead.name ? 8 : 0) + (l.gzhead.comment ? 16 : 0)),
                                                  o(l, 255 & l.gzhead.time),
                                                  o(l, (l.gzhead.time >> 8) & 255),
                                                  o(l, (l.gzhead.time >> 16) & 255),
                                                  o(l, (l.gzhead.time >> 24) & 255),
                                                  o(l, 9 === l.level ? 2 : l.strategy >= K || l.level < 2 ? 4 : 0),
                                                  o(l, 255 & l.gzhead.os),
                                                  l.gzhead.extra && l.gzhead.extra.length && (o(l, 255 & l.gzhead.extra.length), o(l, (l.gzhead.extra.length >> 8) & 255)),
                                                  l.gzhead.hcrc && (e.adler = n(e.adler, l.pending_buf, l.pending, 0)),
                                                  (l.gzindex = 0),
                                                  (l.status = ht))
                                                : (o(l, 0), o(l, 0), o(l, 0), o(l, 0), o(l, 0), o(l, 9 === l.level ? 2 : l.strategy >= K || l.level < 2 ? 4 : 0), o(l, bt), (l.status = dt));
                                    else {
                                        var c = (R + ((l.w_bits - 8) << 4)) << 8,
                                            g = -1;
                                        (g = l.strategy >= K || l.level < 2 ? 0 : l.level < 6 ? 1 : 6 === l.level ? 2 : 3),
                                            (c |= g << 6),
                                            0 !== l.strstart && (c |= it),
                                            (c += 31 - (c % 31)),
                                            (l.status = dt),
                                            d(l, c),
                                            0 !== l.strstart && (d(l, e.adler >>> 16), d(l, 65535 & e.adler)),
                                            (e.adler = 1);
                                    }
                                if (l.status === ht)
                                    if (l.gzhead.extra) {
                                        for (
                                            u = l.pending;
                                            l.gzindex < (65535 & l.gzhead.extra.length) &&
                                            (l.pending !== l.pending_buf_size || (l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), _(e), (u = l.pending), l.pending !== l.pending_buf_size));

                                        )
                                            o(l, 255 & l.gzhead.extra[l.gzindex]), l.gzindex++;
                                        l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), l.gzindex === l.gzhead.extra.length && ((l.gzindex = 0), (l.status = _t));
                                    } else l.status = _t;
                                if (l.status === _t)
                                    if (l.gzhead.name) {
                                        u = l.pending;
                                        do {
                                            if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), _(e), (u = l.pending), l.pending === l.pending_buf_size)) {
                                                f = 1;
                                                break;
                                            }
                                            (f = l.gzindex < l.gzhead.name.length ? 255 & l.gzhead.name.charCodeAt(l.gzindex++) : 0), o(l, f);
                                        } while (0 !== f);
                                        l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), 0 === f && ((l.gzindex = 0), (l.status = lt));
                                    } else l.status = lt;
                                if (l.status === lt)
                                    if (l.gzhead.comment) {
                                        u = l.pending;
                                        do {
                                            if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), _(e), (u = l.pending), l.pending === l.pending_buf_size)) {
                                                f = 1;
                                                break;
                                            }
                                            (f = l.gzindex < l.gzhead.comment.length ? 255 & l.gzhead.comment.charCodeAt(l.gzindex++) : 0), o(l, f);
                                        } while (0 !== f);
                                        l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), 0 === f && (l.status = ot);
                                    } else l.status = ot;
                                if (
                                    (l.status === ot &&
                                        (l.gzhead.hcrc
                                            ? (l.pending + 2 > l.pending_buf_size && _(e), l.pending + 2 <= l.pending_buf_size && (o(l, 255 & e.adler), o(l, (e.adler >> 8) & 255), (e.adler = 0), (l.status = dt)))
                                            : (l.status = dt)),
                                    0 !== l.pending)
                                ) {
                                    if ((_(e), 0 === e.avail_out)) return (l.last_flush = -1), O;
                                } else if (0 === e.avail_in && i(a) <= i(r) && a !== I) return t(e, F);
                                if (l.status === ut && 0 !== e.avail_in) return t(e, F);
                                if (0 !== e.avail_in || 0 !== l.lookahead || (a !== U && l.status !== ut)) {
                                    var p = l.strategy === K ? v(l, a) : l.strategy === M ? w(l, a) : j[l.level].func(l, a);
                                    if (((p !== gt && p !== pt) || (l.status = ut), p === ft || p === gt)) return 0 === e.avail_out && (l.last_flush = -1), O;
                                    if (
                                        p === ct &&
                                        (a === D ? s._tr_align(l) : a !== L && (s._tr_stored_block(l, 0, 0, !1), a === H && (h(l.head), 0 === l.lookahead && ((l.strstart = 0), (l.block_start = 0), (l.insert = 0)))), _(e), 0 === e.avail_out)
                                    )
                                        return (l.last_flush = -1), O;
                                }
                                return a !== I
                                    ? O
                                    : l.wrap <= 0
                                    ? P
                                    : (2 === l.wrap
                                          ? (o(l, 255 & e.adler),
                                            o(l, (e.adler >> 8) & 255),
                                            o(l, (e.adler >> 16) & 255),
                                            o(l, (e.adler >> 24) & 255),
                                            o(l, 255 & e.total_in),
                                            o(l, (e.total_in >> 8) & 255),
                                            o(l, (e.total_in >> 16) & 255),
                                            o(l, (e.total_in >> 24) & 255))
                                          : (d(l, e.adler >>> 16), d(l, 65535 & e.adler)),
                                      _(e),
                                      l.wrap > 0 && (l.wrap = -l.wrap),
                                      0 !== l.pending ? O : P);
                            }
                            function C(e) {
                                var a;
                                return e && e.state ? ((a = e.state.status), a !== st && a !== ht && a !== _t && a !== lt && a !== ot && a !== dt && a !== ut ? t(e, T) : ((e.state = null), a === dt ? t(e, q) : O)) : T;
                            }
                            function E(t, a) {
                                var n,
                                    i,
                                    s,
                                    _,
                                    l,
                                    o,
                                    d,
                                    u,
                                    f = a.length;
                                if (!t || !t.state) return T;
                                if (((n = t.state), (_ = n.wrap), 2 === _ || (1 === _ && n.status !== st) || n.lookahead)) return T;
                                for (
                                    1 === _ && (t.adler = e(t.adler, a, f, 0)),
                                        n.wrap = 0,
                                        f >= n.w_size && (0 === _ && (h(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)), (u = new r.Buf8(n.w_size)), r.arraySet(u, a, f - n.w_size, n.w_size, 0), (a = u), (f = n.w_size)),
                                        l = t.avail_in,
                                        o = t.next_in,
                                        d = t.input,
                                        t.avail_in = f,
                                        t.next_in = 0,
                                        t.input = a,
                                        c(n);
                                    n.lookahead >= at;

                                ) {
                                    (i = n.strstart), (s = n.lookahead - (at - 1));
                                    do (n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[i + at - 1]) & n.hash_mask), (n.prev[i & n.w_mask] = n.head[n.ins_h]), (n.head[n.ins_h] = i), i++;
                                    while (--s);
                                    (n.strstart = i), (n.lookahead = at - 1), c(n);
                                }
                                return (
                                    (n.strstart += n.lookahead),
                                    (n.block_start = n.strstart),
                                    (n.insert = n.lookahead),
                                    (n.lookahead = 0),
                                    (n.match_length = n.prev_length = at - 1),
                                    (n.match_available = 0),
                                    (t.next_in = o),
                                    (t.input = d),
                                    (t.avail_in = l),
                                    (n.wrap = _),
                                    O
                                );
                            }
                            var j,
                                U = 0,
                                D = 1,
                                H = 3,
                                I = 4,
                                L = 5,
                                O = 0,
                                P = 1,
                                T = -2,
                                q = -3,
                                F = -5,
                                G = -1,
                                J = 1,
                                K = 2,
                                M = 3,
                                N = 4,
                                Q = 2,
                                R = 8,
                                V = 9,
                                W = 29,
                                X = 256,
                                Y = X + 1 + W,
                                Z = 30,
                                $ = 19,
                                tt = 2 * Y + 1,
                                et = 15,
                                at = 3,
                                nt = 258,
                                rt = nt + at + 1,
                                it = 32,
                                st = 42,
                                ht = 69,
                                _t = 73,
                                lt = 91,
                                ot = 103,
                                dt = 113,
                                ut = 666,
                                ft = 1,
                                ct = 2,
                                gt = 3,
                                pt = 4,
                                bt = 3;
                            return (
                                (j = [
                                    new m(0, 0, 0, 0, g),
                                    new m(4, 4, 8, 4, p),
                                    new m(4, 5, 16, 8, p),
                                    new m(4, 6, 32, 32, p),
                                    new m(4, 4, 16, 16, b),
                                    new m(8, 16, 32, 32, b),
                                    new m(8, 16, 128, 128, b),
                                    new m(8, 32, 128, 256, b),
                                    new m(32, 128, 258, 1024, b),
                                    new m(32, 258, 258, 4096, b),
                                ]),
                                { deflateInit2: A, deflateSetHeader: B, deflate: S, deflateEnd: C, deflateSetDictionary: E }
                            );
                        })(),
                        _ = (function () {
                            function e(n) {
                                if (!(this instanceof e)) return new e(n);
                                this.options = r.assign({ level: c, method: p, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: g, to: "" }, n || {});
                                var s = this.options;
                                s.raw && s.windowBits > 0 ? (s.windowBits = -s.windowBits) : s.gzip && s.windowBits > 0 && s.windowBits < 16 && (s.windowBits += 16),
                                    (this.err = 0),
                                    (this.msg = ""),
                                    (this.ended = !1),
                                    (this.chunks = []),
                                    (this.strm = new t()),
                                    (this.strm.avail_out = 0);
                                var l = h.deflateInit2(this.strm, s.level, s.method, s.windowBits, s.memLevel, s.strategy);
                                if (l !== d) throw new Error(a[l]);
                                if ((s.header && h.deflateSetHeader(this.strm, s.header), s.dictionary)) {
                                    var o;
                                    if (
                                        ((o = "string" == typeof s.dictionary ? i.string2buf(s.dictionary) : "[object ArrayBuffer]" === _.call(s.dictionary) ? new Uint8Array(s.dictionary) : s.dictionary),
                                        (l = h.deflateSetDictionary(this.strm, o)),
                                        l !== d)
                                    )
                                        throw new Error(a[l]);
                                    this._dict_set = !0;
                                }
                            }
                            function n(t, n) {
                                var r = new e(n);
                                if ((r.push(t, !0), r.err)) throw r.msg || a[r.err];
                                return r.result;
                            }
                            function s(t, e) {
                                return (e = e || {}), (e.gzip = !0), n(t, e);
                            }
                            var _ = Object.prototype.toString,
                                l = 0,
                                o = 4,
                                d = 0,
                                u = 1,
                                f = 2,
                                c = -1,
                                g = 0,
                                p = 8;
                            return (
                                (e.prototype.push = function (t, e) {
                                    var a,
                                        n,
                                        s = this.strm,
                                        c = this.options.chunkSize;
                                    if (this.ended) return !1;
                                    (n = e === ~~e ? e : e === !0 ? o : l),
                                        "string" == typeof t ? (s.input = i.string2buf(t)) : "[object ArrayBuffer]" === _.call(t) ? (s.input = new Uint8Array(t)) : (s.input = t),
                                        (s.next_in = 0),
                                        (s.avail_in = s.input.length);
                                    do {
                                        if ((0 === s.avail_out && ((s.output = new r.Buf8(c)), (s.next_out = 0), (s.avail_out = c)), (a = h.deflate(s, n)), a !== u && a !== d)) return this.onEnd(a), (this.ended = !0), !1;
                                        (0 !== s.avail_out && (0 !== s.avail_in || (n !== o && n !== f))) ||
                                            ("string" === this.options.to ? this.onData(i.buf2binstring(r.shrinkBuf(s.output, s.next_out))) : this.onData(r.shrinkBuf(s.output, s.next_out)));
                                    } while ((s.avail_in > 0 || 0 === s.avail_out) && a !== u);
                                    return n === o ? ((a = h.deflateEnd(this.strm)), this.onEnd(a), (this.ended = !0), a === d) : n !== f || (this.onEnd(d), (s.avail_out = 0), !0);
                                }),
                                (e.prototype.onData = function (t) {
                                    this.chunks.push(t);
                                }),
                                (e.prototype.onEnd = function (t) {
                                    t === d && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = r.flattenChunks(this.chunks))), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
                                }),
                                { gzip: s }
                            );
                        })();
                    return _;
                })();
            }
            _528();
            this.config = function () {
                _14._541.apply(_14, arguments);
            };
            this.start = function () {
                _39();
                _403(_527());
            };
            this.stop = _60;
            this.newPageView = _758;
            this.stopSession = _756;
            this.getSessionId = function () {
                return _12._52;
            };
            this.getPageViewId = function () {
                return _12._93;
            };
            this.tag = _94;
            this.star = _755;
            this.setVariable = _754;
            this.identify = _803;
            this.formSubmitAttempt = _522;
            this.formSubmitSuccess = _385;
            this.formSubmitFailure = _802;
            this.addFriction = function (_4, _25) {
                _141({ _4: _4, _521: _25 });
            };
            this.debug = function () {
                _14.debug = !_14.debug;
                console.log("MF: Debugging " + (_14.debug ? "enabled" : "disabled"));
            };
            this.isRecording = function () {
                return _178;
            };
            this.isReturningUser = function () {
                return _12._210;
            };
            this.activateFeedback = _340;
            this.websiteId = _44;
            this.recordingRate = _177;
            this.version = _172;
            this.gdprEnabled = _14.gdprEnabled;
            this.updateHeatmap = _186._571;
        }
        function _647(_14) {
            var _550 = [];
            function _164(_90) {
                if (!_14.domMutationDetectorEnable || !_90 || _90.nodeType !== 1) return false;
                var _520 = _90.parentNode ? _90.parentNode.id : undefined;
                var _519 = _90.previousSibling ? _90.previousSibling.id : undefined;
                var _820 = _90.tagName;
                var _518 = _90.attributes ? _90.attributes.id : undefined;
                var _531 = _90.attributes ? _90.attributes.class : undefined;
                var _24 = _820;
                if (_14.domMutationUseParentNode && _520) _24 += "_" + _520;
                if (_14.domMutationUsePreviousSibling && _519) _24 += "_" + _519;
                if (_518) _24 += "_" + _518;
                if (_531) _24 += "_" + _531.replace(/\s/g, "_");
                var _579 = +new Date();
                var _67 = _550[_24];
                var _404 = _67 ? _67._401 : 0;
                var _852 = _67 ? (_579 - _67._849) / 1000 : 0;
                var _549 = _404 < _14.domMutationCountThreshold;
                var _565 = _852 < _14.domMutationTimeThresholdInSeconds;
                var _164 = _67 ? _549 && _565 : false;
                if (!_549 || !_565) _404 = 0;
                _550[_24] = { _849: _579, _401: _404 + 1 };
                return _164;
            }
            this._164 = _164;
        }
        function _644(_3, _14, _116, _8, _17, _197) {
            var _107,
                _44,
                _10,
                _110,
                _381 = "mf_liveHeatmaps",
                _222 = [];
            function _39(_408, _415) {
                _44 = _408;
                _10 = _415;
                _10("Live heatmaps starting");
                _110 = _116._251();
                if (!_110) {
                    _10("Live heatmaps not initiated - could not create root HTML element");
                    return;
                }
                if (!_3.opener) {
                    _10("Live heatmaps not initiated - window.opener is missing");
                    return;
                }
                _846();
            }
            function _60() {
                _255();
            }
            function _846() {
                _17._21(_3, "message", function (_37) {
                    _869(_37.data);
                    switch (_37.data.message) {
                        case "MouseflowLiveHeatmaps_Init_Success":
                        case "MouseflowLiveHeatmaps_Hello":
                            _107 = _37.origin;
                            _845(_37.data.minDate, _37.data.filters, _37.data.filteredViews);
                            _858(_37.data.languageScript, _37.data.initScript, _37.data.scripts, function () {
                                var message = { mfCommand: "settings", value: { websiteSettings: _37.data.websiteSettings } };
                                _3.postMessage(JSON.stringify(message), "*");
                            });
                            break;
                        case "MouseflowLiveHeatmaps_StreamData_Chunk":
                            _247(_37.data.requestUrl, true)._315(_37.data.dataChunk);
                            break;
                        case "MouseflowLiveHeatmaps_StreamData_Success":
                            _247(_37.data.requestUrl)._121();
                            break;
                        case "MouseflowLiveHeatmaps_StreamData_Error":
                            _247(_37.data.requestUrl)._154();
                            break;
                        case "MouseflowLiveHeatmaps_RequestData_Success":
                            _247(_37.data.requestUrl)._121(_37.data.responseText);
                            break;
                        case "MouseflowLiveHeatmaps_RequestData_Error":
                            _247(_37.data.requestUrl)._154();
                            break;
                    }
                });
                _406({ message: "MouseflowLiveHeatmaps_Init", websiteId: _44 });
            }
            function _845(_843, _173, _841) {
                var _35 = _575();
                var _246 = _574();
                var _253 = _14.location.search.match(/mf_liveHeatmaps=([^&]+)/);
                var _395 = typeof _3.name === "string" && _3.name.indexOf("mf_liveHeatmaps") === 0 ? _3.name.slice(15).split("_") : [];
                var _844 = _253 || _395[1] === "init";
                if (_35 && !_844) {
                    _35.filters.url = _246.url;
                    _74(_35);
                    return;
                }
                _35 = { isMinimized: false, appUrlBase: _107, websiteId: _44, filters: _246, minDate: _843, filteredViews: _841 };
                if (_173.view) {
                    _35.selectedFilteredView = _173.view;
                    delete _173.view;
                }
                if (_173) {
                    Object.keys(_173).forEach(function (_24) {
                        var _4 = _173[_24];
                        if (_4 instanceof Date) _4 = _254(_4);
                        _35.filters[_24] = _4;
                    });
                }
                if (_253 && _253[1] !== "1") _35.filters.maptype = _253[1];
                else if (_395[2]) _35.filters.maptype = _395[2];
                _74(_35);
                _3.name = "mf_liveHeatmaps";
            }
            function _858(_576, _387, _577, _221) {
                var _382 = document.createElement("script");
                _382.src = _107 + _576;
                _382.onload = function () {
                    var _578 = 0;
                    _577.forEach(function (_249) {
                        var _384 = document.createElement("script");
                        _384.src = _107 + _249;
                        _384.onload = function () {
                            _578++;
                            if (_387 && _578 === _577.length) {
                                var _386 = document.createElement("script");
                                _386.src = _107 + _387;
                                _386.onload = _221;
                                _405(_387);
                                _110.appendChild(_386);
                            }
                        };
                        _405(_249);
                        _110.appendChild(_384);
                    });
                };
                _405(_576);
                _110.appendChild(_382);
            }
            function _575() {
                return _8._157(_3.localStorage.getItem(_381));
            }
            function _74(_35) {
                if (_10) _10("Live heatmaps saving settings");
                _35 = _35 ? _8._70(_35) : "";
                _3.localStorage.setItem(_381, _35);
            }
            function _255() {
                if (_10) _10("Live heatmaps removing settings");
                _3.localStorage.removeItem(_381);
            }
            function _247(_16, _871) {
                var _407 = _222.filter(function (_859) {
                    return _859._16 === _16;
                })[0];
                if (!_871 && _407) _222.splice(_222.indexOf(_407), 1);
                return _407;
            }
            function _873(_15) {
                if (typeof _15 !== "object") return;
                var _35 = _575();
                var _246 = _574();
                Object.keys(_15).forEach(function (_24) {
                    var _4 = _15[_24];
                    if (_4 instanceof Date) _4 = _254(_4);
                    _35.filters[_24] = _4 || undefined;
                });
                Object.keys(_246).forEach(function (_24) {
                    if (!_35.filters[_24]) _35.filters[_24] = _246[_24];
                });
                if (_35.filters.view) {
                    _35.selectedFilteredView = _35.filters.view;
                    delete _35.filters.view;
                }
                _74(_35);
            }
            function _574() {
                var _184 = new Date();
                _184 = new Date(_184.getFullYear(), _184.getMonth(), _184.getDate());
                var _412 = new Date(_184);
                _412.setDate(_412.getDate() - 29);
                return { maptype: "click", device: "desktop", url: _197._296(), fromdate: _254(_412), todate: _254(_184) };
            }
            function _406(_13) {
                _3.opener.postMessage(_13, "*");
                _10("Sent " + _13.message + (_13.requestUrl ? ", request URL: " + _13.requestUrl : ""));
            }
            function _869(_13) {
                if (_13.message && _13.message.indexOf("MouseflowLiveHeatmaps_") === 0) _10("Received " + _13.message + (_13.requestUrl ? ", request URL: " + _13.requestUrl : ""));
            }
            function _405(_249) {
                _10("Live heatmaps loading script: " + _249);
            }
            function _254(_97) {
                return _97.getFullYear() + "-" + _573(_97.getMonth() + 1, "00") + "-" + _573(_97.getDate(), "00");
            }
            function _573(_868, _572) {
                return (_572 + _868).slice(-_572.length);
            }
            this._39 = _39;
            this._60 = _60;
            this._571 = function (_15) {
                _873(_15);
                _3.postMessage('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}', "*");
                _10("Sent MouseflowHeatmap_UpdateHeatmap");
            };
            _3.mouseflowHeatmap = {
                streamData: function (_16, _315, _121, _154) {
                    _222.push({ _16: _16, _315: _315 || function () {}, _121: _121 || function () {}, _154: _154 || function () {} });
                    _406({ message: "MouseflowLiveHeatmaps_StreamData", requestUrl: _16 });
                },
                getData: function (_16, _121, _154) {
                    _222.push({ _16: _16, _121: _121 || function () {}, _154: _154 || function () {} });
                    _406({ message: "MouseflowLiveHeatmaps_RequestData", requestUrl: _16 });
                },
            };
        }
        function _654(_3, _116, _22, _8, _17) {
            var _9 = _3.document,
                _107,
                _44,
                _10,
                _11,
                _110,
                _19,
                _567,
                _568,
                _569,
                _129,
                _92,
                _290,
                _124,
                _551,
                _150,
                _297,
                _219,
                _131,
                _101;
            function _39(_866, _408, _244, _243, _291, _415) {
                _107 = _866;
                _44 = _408;
                _10 = _415;
                _11 = _666() || { _115: false, _76: "exclude", _58: _244 || [], _61: _243 || [], _77: _291 || [] };
                _110 = _116._251();
                if (!_110) {
                    _10("Privacy tool not initiated - could not create root HTML element");
                    return;
                }
                _867();
                _22._53(function () {
                    _862();
                    _74(_11);
                }, 1000);
            }
            function _60() {
                _816();
                _116._393();
            }
            function _867() {
                _17._21(_3, "message", function (event) {
                    switch (event.data.message) {
                        case "MouseflowPrivacyTool_Hello":
                            _10("Privacy tool API ready");
                            _219 = event.source;
                            if (event.data.cssSelectorBlacklist) {
                                _11._58 = event.data.cssSelectorBlacklist;
                                _11._61 = event.data.cssSelectorWhitelist;
                                _11._77 = event.data.cssSelectorTracked;
                            }
                            _570();
                            break;
                        case "MouseflowPrivacyTool_Save_Success":
                            _10("Successfully saved CSS lists");
                            if (_131) _131();
                            _131 = undefined;
                            _101 = undefined;
                            break;
                        case "MouseflowPrivacyTool_Save_Failed":
                            _10("Failed saving CSS lists");
                            if (_101) _101();
                            _131 = undefined;
                            _101 = undefined;
                            _372("Uh oh! We couldn't save your changes.<br><br>" + "Please refresh the page and try again.");
                            break;
                        case "MouseflowPrivacyTool_Unauthorized":
                            _10("Privacy tool API logged out - cannot save");
                            if (_101) _101();
                            _131 = undefined;
                            _101 = undefined;
                            _372("Uh oh! We couldn't save your changes.<br><br>" + "Please log into Mouseflow and try again.");
                            break;
                    }
                });
                if (_3.opener) {
                    _10("Loading privacy tool API using window.opener");
                    _3.opener.postMessage({ message: "MouseflowPrivacyTool_Hello" }, "*");
                }
                _22._53(function () {
                    if (!_219) {
                        _10("Loading privacy tool API using iframe");
                        var _199 = _9.createElement("iframe");
                        _199.style.width = "0px";
                        _199.style.height = "0px";
                        _199.style.display = "none";
                        _199.src = _107 + "/websites/" + _44 + "/privacytool";
                        _110.appendChild(_199);
                        _22._53(function () {
                            if (!_219) {
                                _10("Loading privacy tool API timed out");
                                _631(
                                    "D'oh! We're having trouble loading the Privacy Tool on this page<br>" +
                                        'Please login to Mouseflow and try again. If you need help, email <a class="green" href="mailto:support@mouseflow.com">support@mouseflow.com</a>'
                                );
                            }
                        }, 5000);
                    }
                }, 2000);
            }
            function _862() {
                _19 = _627(_11);
                _567 = _19.querySelector(".tool-exclude output");
                _568 = _19.querySelector(".tool-whitelist output");
                _569 = _19.querySelector(".tool-track output");
                _129 = _19.querySelector(".tool-status-text");
                _92 = _19.querySelector(".btn-widget");
                _290 = _19.querySelector(".tool-loading h2");
                _11._58.forEach(_554);
                _11._61.forEach(_555);
                _11._77.forEach(_553);
                _110.appendChild(_19);
                _124 = _626();
                _19.appendChild(_124);
                _8._214(_9.body, "mf-privacy-tool-opened", !_11._115);
                _861();
                _570();
            }
            function _570() {
                if (_19 && _219) {
                    _8._40(_19, "is-loading");
                    _99();
                    _860();
                }
            }
            function _327() {
                _255();
                _60();
                _3.close();
            }
            function _861() {
                _17._21(_19, "click", ".mf-tool-close", _327, { _86: true });
            }
            function _860() {
                _17._21(_19, "click", ".mf-tool-toggle", _814, { _86: true });
                _17._21(_19, "click", ".mf-tool-close", _327, { _86: true });
                _17._21(_19, "click", ".mf-tool-exclude", _813, { _86: true });
                _17._21(_19, "click", ".mf-tool-whitelist", _809, { _86: true });
                _17._21(_19, "click", ".mf-tool-track", _811, { _86: true });
                _17._21(_19, "click", ".highlight-excluded", _834, { _86: true });
                _17._21(_19, "click", ".highlight-whitelisted", _833, { _86: true });
                _17._21(_19, "click", ".highlight-tracked", _832, { _86: true });
                _17._21(_19, "click", ".mf-remove-excluded", _831, { _86: true });
                _17._21(_19, "click", ".mf-remove-whitelisted", _825, { _86: true });
                _17._21(_19, "click", ".mf-remove-tracked", _823, { _86: true });
                _17._21(_19, "submit", _732, { _86: true });
                _17._21(_9, "mouseover", _766, { _31: true });
                _17._21(_9, "mouseleave", _641, { _31: true });
                _17._21(_9, "mouseup", _642, { _31: true });
                _17._21(_9, "mouseenter", _134, { _31: true });
                _17._21(_9, "mousemove", _134, { _31: true });
                _17._21(_9, "mousedown", _134, { _31: true });
                _17._21(_9, "click", _134, { _31: true });
                _17._21(_9, "mouseout", _134, { _31: true });
                _17._21(_9, "scroll", _99, { _31: true, _190: true });
                _17._21(_3, "resize", _99, { _31: true, _190: true });
                var MutationObserver = _3.MutationObserver || _3.WebKitMutationObserver || _3.MozMutationObserver;
                if (MutationObserver) {
                    _297 = new MutationObserver(function (_391) {
                        _391 = _391.filter(function (_67) {
                            if (_67.target.nodeType !== 1 || _8._65(_67.target, "#mouseflow *")) return false;
                            var _840 = _67.oldValue && _67.oldValue.indexOf("mf-highlight") !== -1;
                            var _857 = _67.target.className && _67.target.className.indexOf("mf-highlight") !== -1;
                            var _818 = _840 || _857;
                            if (_67.type === "attributes" && _67.attributeName === "class" && _818) return false;
                            return true;
                        });
                        if (_391.length) _99();
                    });
                    _297.observe(_9, { attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true });
                }
            }
            function _816() {
                _17._526();
                if (_297) _297.disconnect();
            }
            function _814() {
                _11._115 = !_11._115;
                _74(_11);
                _8._214(_19, "tool-closed", _11._115);
                _8._214(_9.body, "mf-privacy-tool-opened", !_11._115);
                var _288 = _19.getElementsByClassName("step")[0];
                var _292 = _19.getElementsByClassName("tool-container")[0];
                if (_11._115) {
                    _8._40(_288, "fade-out");
                    _8._54(_288, "fade-in");
                    _8._40(_292, "fade-in");
                    _8._54(_292, "fade-out");
                } else {
                    _8._40(_288, "fade-in");
                    _8._54(_288, "fade-out");
                    _8._40(_292, "fade-out");
                    _8._54(_292, "fade-in");
                }
            }
            function _813() {
                _11._76 = "exclude";
                _74(_11);
                _8._40(_19.getElementsByClassName("mf-tool-whitelist")[0], "active");
                _8._40(_19.getElementsByClassName("tool-whitelist")[0], "active");
                _8._40(_19.getElementsByClassName("mf-tool-track")[0], "active");
                _8._40(_19.getElementsByClassName("tool-track")[0], "active");
                _8._54(_19.getElementsByClassName("mf-tool-exclude")[0], "active");
                _8._54(_19.getElementsByClassName("tool-exclude")[0], "active");
            }
            function _809() {
                _11._76 = "whitelist";
                _74(_11);
                _8._40(_19.getElementsByClassName("mf-tool-exclude")[0], "active");
                _8._40(_19.getElementsByClassName("tool-exclude")[0], "active");
                _8._40(_19.getElementsByClassName("mf-tool-track")[0], "active");
                _8._40(_19.getElementsByClassName("tool-track")[0], "active");
                _8._54(_19.getElementsByClassName("mf-tool-whitelist")[0], "active");
                _8._54(_19.getElementsByClassName("tool-whitelist")[0], "active");
            }
            function _811() {
                _11._76 = "track";
                _74(_11);
                _8._40(_19.getElementsByClassName("mf-tool-exclude")[0], "active");
                _8._40(_19.getElementsByClassName("tool-exclude")[0], "active");
                _8._40(_19.getElementsByClassName("mf-tool-whitelist")[0], "active");
                _8._40(_19.getElementsByClassName("tool-whitelist")[0], "active");
                _8._54(_19.getElementsByClassName("mf-tool-track")[0], "active");
                _8._54(_19.getElementsByClassName("tool-track")[0], "active");
            }
            function _834(_6) {
                if (_11._76 === "exclude") {
                    _556(_6.target.getAttribute("data-target"));
                    _99();
                }
            }
            function _833(_6) {
                if (_11._76 === "whitelist") {
                    _557(_6.target.getAttribute("data-target"));
                    _99();
                }
            }
            function _832(_6) {
                if (_11._76 === "track") {
                    _558(_6.target.getAttribute("data-target"));
                    _99();
                }
            }
            function _831(_6) {
                _556(_6.target.parentNode.getAttribute("data-target"));
                _99();
            }
            function _825(_6) {
                _557(_6.target.parentNode.getAttribute("data-target"));
                _99();
            }
            function _823(_6) {
                _558(_6.target.parentNode.getAttribute("data-target"));
                _99();
            }
            function _732() {
                _639();
                _657(
                    _11._58,
                    _11._61,
                    _11._77,
                    function () {
                        _581();
                        _92.innerHTML = "Saved";
                        _255();
                        _22._53(_327, 500);
                    },
                    function () {
                        _581();
                    }
                );
            }
            function _766(_6) {
                _22._126(_551);
                var _530 = _9.getElementsByClassName("mf-highlight");
                for (var _1 = 0; _1 < _530.length; _1++) {
                    _8._40(_530[_1], "mf-highlight");
                }
                _8._54(_124, "hidden");
                if (_134(_6) || _552(_6.target)) return;
                _8._54(_6.target, "mf-highlight");
                _551 = _22._53(function () {
                    var _38 = _6.target.getBoundingClientRect();
                    _124.style.left = _38.left + _3.pageXOffset + "px";
                    _124.style.top = _38.top + _3.pageYOffset + "px";
                    _124.style.width = _38.width + "px";
                    _124.style.height = _38.height + "px";
                    _8._40(_124, "hidden");
                }, 75);
            }
            function _641(_6) {
                if (_134(_6)) return;
                if (_6.target === _9) {
                    _8._54(_124, "hidden");
                }
            }
            function _642(_6) {
                if (_134(_6)) return;
                if (_6.button !== 0 || _552(_6.target)) return;
                _8._40(_6.target, "mf-highlight");
                var _7 = _659(_6.target);
                if (_11._76 === "exclude") {
                    _554(_7);
                } else if (_11._76 === "whitelist") {
                    _555(_7);
                } else {
                    _553(_7);
                }
                _99();
            }
            function _134(_6) {
                if (_11._115 || _6.target.nodeType !== 1 || _8._65(_6.target, "#mouseflow *")) return true;
                _6.preventDefault();
                _6.stopPropagation();
                return false;
            }
            function _552(_2) {
                return _2 === _9.body || _8._65(_2, "html") || (_11._76 === "whitelist" && (!/INPUT|TEXTAREA/.test(_2.tagName) || /checkbox|radio|button|submit/.test(_2.type)));
            }
            function _553(_7) {
                if (_7 && _11._77.indexOf(_7) === -1) {
                    _11._77.unshift(_7);
                    _74(_11);
                }
                _195();
            }
            function _554(_7) {
                if (_7 && _11._58.indexOf(_7) === -1) {
                    _11._58.unshift(_7);
                    _74(_11);
                }
                _195();
            }
            function _555(_7) {
                if (_7 && _11._61.indexOf(_7) === -1) {
                    _11._61.unshift(_7);
                    _74(_11);
                }
                _195();
            }
            function _556(_7) {
                if (_7 && _11._58.indexOf(_7) !== -1) {
                    _11._58 = _11._58.filter(function (_168) {
                        return _168 !== _7;
                    });
                    _74(_11);
                }
                _195();
            }
            function _557(_7) {
                if (_7 && _11._61.indexOf(_7) !== -1) {
                    _11._61 = _11._61.filter(function (_168) {
                        return _168 !== _7;
                    });
                    _74(_11);
                }
                _195();
            }
            function _558(_7) {
                if (_7 && _11._77.indexOf(_7) !== -1) {
                    _11._77 = _11._77.filter(function (_168) {
                        return _168 !== _7;
                    });
                    _74(_11);
                }
                _195();
            }
            function _99() {
                _22._126(_150);
                if (!_150) {
                    _22._53(function () {
                        if (_150) {
                            _22._126(_150);
                            _559();
                            _150 = undefined;
                        }
                    }, 200);
                }
                _150 = _22._53(function () {
                    _559();
                    _150 = undefined;
                }, 100);
            }
            function _559() {
                var _560 = _19.querySelectorAll(".highlight-excluded,.highlight-whitelisted,.highlight-tracked"),
                    _1;
                for (_1 = 0; _1 < _560.length; _1++) {
                    _19.removeChild(_560[_1]);
                }
                _11._58.forEach(function (_7) {
                    var _96 = _9.querySelectorAll(_7);
                    for (_1 = 0; _1 < _96.length; _1++) {
                        _19.appendChild(_625(_7, _96[_1].getBoundingClientRect()));
                    }
                });
                _11._61.forEach(function (_7) {
                    var _96 = _9.querySelectorAll(_7);
                    for (_1 = 0; _1 < _96.length; _1++) {
                        _19.appendChild(_699(_7, _96[_1].getBoundingClientRect()));
                    }
                });
                _11._77.forEach(function (_7) {
                    var _96 = _9.querySelectorAll(_7);
                    for (_1 = 0; _1 < _96.length; _1++) {
                        _19.appendChild(_670(_7, _96[_1].getBoundingClientRect()));
                    }
                });
            }
            function _657(_58, _61, _77, _121, _658) {
                if (_131) {
                    _10("Attempted to save CSS lists while previous save was in progress");
                    return;
                }
                _131 = _121;
                _101 = _658;
                _635();
                _219.postMessage({ message: "MouseflowPrivacyTool_Save", blacklist: _58, whitelist: _61, tracked: _77 }, "*");
                _22._53(function () {
                    if (_131 === _121) {
                        _10("Saving CSS lists timed out");
                        if (_101) _101();
                        _131 = undefined;
                        _101 = undefined;
                        _372("Uh oh! We couldn't save your changes.<br><br>" + "Please log into Mouseflow and try again.");
                    }
                }, 7500);
            }
            function _659(_2) {
                if (_2 == null) return null;
                try {
                    return _561(_2);
                } catch (ex) {
                    _10("Could not get element selector: " + ex.message);
                    return null;
                }
            }
            function _874(_2) {
                var _242 = _662(_2);
                if (!_242) return null;
                if (_8._65(_2, _242)) return _242;
                var _116 = document.querySelector(_242);
                var _100 = _2;
                var _49 = [];
                while (_100 && _100 !== _116) {
                    var _33 = _367(_100);
                    if (_33.length === 0) _33.push(_562(_100));
                    _49.unshift(_33);
                    _100 = _100.parentNode;
                }
                _49.unshift(_242);
                return _364(_49);
            }
            function _561(_2, _49) {
                if (!_49) _49 = [];
                var _33 = _367(_2);
                _49.unshift(_33);
                var _7 = _364(_49);
                if (_7) return _7;
                if (_33.length === 0) {
                    _33.push(_562(_2));
                    _7 = _364(_49);
                    if (_7) return _7;
                }
                return _561(_2.parentNode, _49);
            }
            function _364(_49) {
                var _365 = _49.length > 1 ? _638.apply(this, _49) : _49[0];
                for (var _1 = 0; _1 < _365.length; _1++) {
                    if (_9.querySelectorAll(_365[_1]).length === 1) return _365[_1];
                }
                return null;
            }
            function _662(_2) {
                var _100 = _2;
                while (_100) {
                    var _33 = _367(_100);
                    for (var _1 = 0; _1 < _33.length; _1++) {
                        if (_9.querySelectorAll(_33[_1]).length === 1) return _33[_1];
                    }
                    _100 = _100.parentNode;
                }
                return null;
            }
            function _367(_2) {
                if (_2 === _9.body) return ["body"];
                var _33 = [];
                var _356 = _2.parentNode;
                var _1;
                var _50 = _2.getAttribute("id");
                var _7 = "#" + _8._138(_50);
                if (_50 && _9.querySelectorAll(_7).length === 1 && !_8._132(_2, "data-mf-ignore-child-ids")) return [_7];
                var _25 = _2.getAttribute("name");
                _7 = '[name="' + _8._138(_25) + '"]';
                if (_25) {
                    if (_9.querySelectorAll(_7).length === 1) return [_7];
                    if (_356.querySelectorAll(_7).length === 1) _33.push(_7);
                }
                var _82 = _8._169(_2);
                for (_1 = 0; _1 < _82.length; _1++) {
                    _7 = "." + _8._138(_82[_1]);
                    if (_9.querySelectorAll(_7).length === 1) return [_7];
                    if (_356.querySelectorAll(_7).length === 1) _33.push(_7);
                }
                for (_1 = 0; _1 < _82.length; _1++) {
                    _7 = _8._138(_2.tagName.toLowerCase()) + "." + _8._138(_82[_1]);
                    if (_9.querySelectorAll(_7).length === 1) return [_7];
                    if (_356.querySelectorAll(_7).length === 1) _33.push(_7);
                }
                return _33;
            }
            function _562(_2) {
                var _7 = _8._138(_2.tagName.toLowerCase());
                if (_2.parentNode.querySelectorAll(_7).length === 1) return _7;
                var _175 = 0;
                var _289 = _2;
                while (_289) {
                    if (_289.tagName === _2.tagName) _175++;
                    _289 = _289.previousElementSibling;
                }
                _7 += ":nth-of-type(" + _175 + ")";
                return _7;
            }
            function _638() {
                var _33, _171, _174, _1;
                var _98 = 0;
                var _146 = arguments.length - 1;
                var _293 = false;
                var _226 = true;
                while (_98 < _146) {
                    _171 = undefined;
                    for (_1 = 0; _1 <= _98; _1++) {
                        _171 = _171 ? _294(_171, arguments[_1], " > ") : arguments[_1];
                    }
                    _174 = undefined;
                    for (_1 = arguments.length - 1; _1 >= _146; _1--) {
                        _174 = _174 ? _294(arguments[_1], _174, " > ") : arguments[_1];
                    }
                    var _301 = _98 + 1 == _146 ? " > " : " ";
                    _33 = _33 ? _33.concat(_294(_171, _174, _301)) : _294(_171, _174, _301);
                    if (_226 && _293) {
                        _146--;
                        _293 = false;
                        _226 = true;
                    } else if (_226) {
                        _146--;
                        _293 = true;
                        _226 = false;
                    } else {
                        _98++;
                        if (_98 != _146) _146++;
                        _293 = true;
                        _226 = true;
                    }
                }
                return _33;
            }
            function _294(_563, _564, _301) {
                var _33 = [];
                for (var _1 = 0; _1 < _563.length; _1++) {
                    for (var _51 = 0; _51 < _564.length; _51++) {
                        _33.push(_563[_1] + _301 + _564[_51]);
                    }
                }
                return _33;
            }
            function _666() {
                var _4 = _3.localStorage.getItem("mf_privacyTool");
                return _4 ? _8._157(_4) : null;
            }
            function _74(_35) {
                _35 = _35 ? _8._70(_35) : "";
                _3.localStorage.setItem("mf_privacyTool", _35);
            }
            function _255() {
                _3.localStorage.removeItem("mf_privacyTool");
            }
            function _639() {
                _92.setAttribute("disabled", "");
                _92.setAttribute("original-html", _92.innerHTML);
                _92.innerHTML = "<i>&bull;</i> <i>&bull;</i> <i>&bull;</i> <i>&bull;</i>";
                _8._54(_92, "loading");
            }
            function _581() {
                _8._40(_92, "loading");
                _92.innerHTML = _92.getAttribute("original-html");
                _92.removeAttribute("original-html");
                _92.removeAttribute("disabled");
            }
            function _195() {
                _567.innerHTML = _706(_11._58);
                _568.innerHTML = _707(_11._61);
                _569.innerHTML = _708(_11._77);
                _129.innerHTML = _308(_11._58, _11._61, _11._77);
                _8._40(_129, "red");
            }
            function _631(_145) {
                if (!_290) return;
                _290.innerHTML = _145;
                _8._54(_290, "red");
            }
            function _372(_145) {
                if (!_129) return;
                _129.innerHTML = _145;
                _8._54(_129, "red");
            }
            function _635() {
                if (!_129) return;
                _129.innerHTML = _308(_11._58, _11._61, _11._77);
                _8._40(_129, "red");
            }
            function _627(_11) {
                var _28 = _9.createElement("div");
                _28.className = "privacy-tool is-loading";
                _28.innerHTML = _702(_11);
                if (_11._115) _28.className += " tool-closed";
                var _153 = _9.createElement("style");
                _153.type = "text/css";
                _153.innerHTML = _712();
                _28.appendChild(_153);
                return _28;
            }
            function _626() {
                var _28 = _9.createElement("div");
                _28.className = "highlight-box";
                return _28;
            }
            function _625(_7, _38) {
                var _28 = _9.createElement("div");
                _28.className = "highlight-box highlight-excluded";
                _28.setAttribute("data-target", _7);
                _28.style.left = _38.left + _3.pageXOffset + "px";
                _28.style.top = _38.top + _3.pageYOffset + "px";
                _28.style.width = _38.width + "px";
                _28.style.height = _38.height + "px";
                return _28;
            }
            function _699(_7, _38) {
                var _28 = _9.createElement("div");
                _28.className = "highlight-box highlight-whitelisted";
                _28.setAttribute("data-target", _7);
                _28.style.left = _38.left + _3.pageXOffset + "px";
                _28.style.top = _38.top + _3.pageYOffset + "px";
                _28.style.width = _38.width + "px";
                _28.style.height = _38.height + "px";
                return _28;
            }
            function _670(_7, _38) {
                var _28 = _9.createElement("div");
                _28.className = "highlight-box highlight-tracked";
                _28.setAttribute("data-target", _7);
                _28.style.left = _38.left + _3.pageXOffset + "px";
                _28.style.top = _38.top + _3.pageYOffset + "px";
                _28.style.width = _38.width + "px";
                _28.style.height = _38.height + "px";
                return _28;
            }
            function _702(_11) {
                return '<form action="#" id="mf_privacy_tool">' + _704(_11) + _705(_11) + "</form>";
            }
            function _704(_11) {
                return (
                    '<div class="step step-block' +
                    (_11._115 ? " fade-in" : "") +
                    '">' +
                    '<div class="widget-header">' +
                    '<div class="widget-text">Open Privacy Tool</div>' +
                    '<div class="widget-toggle">' +
                    '<a href="#" class="btn-arrow btn-arrow--up mf-tool-toggle"></a>' +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            }
            function _705() {
                return (
                    '<div class="tool-container' +
                    (_11._115 ? "" : " fade-in") +
                    '">' +
                    '<div class="tool-header">' +
                    '<img class="logo" alt="Mouseflow" src="https://mouseflow.com/static/img/logo-light.png">' +
                    '<div class="tool-toggle">' +
                    '<div class="tool-toggle-text">' +
                    "Hide to navigate" +
                    "</div>" +
                    '<div class="tool-toggle-icon">' +
                    '<a href="#" class="btn-arrow btn-arrow--down mf-tool-toggle"></a>' +
                    "</div>" +
                    "</div>" +
                    '<div class="tool-close">' +
                    '<div class="tool-toggle-text">' +
                    "Close" +
                    "</div>" +
                    '<div class="tool-toggle-icon">' +
                    '<a href="#" class="btn-cross mf-tool-close"></a>' +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    '<div class="tool-content">' +
                    '<ul class="tool-menu">' +
                    '<li class="tool-menu-item mf-tool-exclude' +
                    (_11._76 === "exclude" ? " active" : "") +
                    '">' +
                    "Excluded content" +
                    "</li>" +
                    '<li class="tool-menu-item mf-tool-whitelist' +
                    (_11._76 === "whitelist" ? " active" : "") +
                    '">' +
                    "Whitelisted fields" +
                    "</li>" +
                    '<li class="tool-menu-item mf-tool-track' +
                    (_11._76 === "track" ? " active" : "") +
                    '">' +
                    "Tracked elements" +
                    "</li>" +
                    "</ul>" +
                    '<div class="tool-exclude' +
                    (_11._76 === "exclude" ? " active" : "") +
                    '">' +
                    "<h2>Exclude content from appearing in Mouseflow</h2>" +
                    "<p>" +
                    "To get started, just click the element(s) or content you wish to exclude. " +
                    "This will add the necessary CSS selectors to be blocked in the list below." +
                    "</p>" +
                    "<p>" +
                    'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
                    "</p>" +
                    "<p>" +
                    'For more details and best practices, read our <a href="http://help.mouseflow.com/knowledge_base/topics/exclude-or-replace-content-on-pages" class="green" target="_389">Support Guide</a>.' +
                    "</p>" +
                    "<h3>Excluded content:</h3>" +
                    "<div>" +
                    "<output></output>" +
                    "</div>" +
                    "</div>" +
                    '<div class="tool-whitelist' +
                    (_11._76 === "whitelist" ? " active" : "") +
                    '">' +
                    "<h2>Whitelist input fields</h2>" +
                    "<p>" +
                    "You can whitelist any input field or text area, simply by clicking the field(s) on the page. " +
                    "This will let Mouseflow record input in that field." +
                    "</p>" +
                    "<p>" +
                    'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
                    "</p>" +
                    "<p>" +
                    'For more details and best practices, read our <a href="http://help.mouseflow.com/knowledge_base/topics/exclude-or-replace-content-on-pages" class="green" target="_389">Support Guide</a>.' +
                    "</p>" +
                    "<h3>Whitelisted fields:</h3>" +
                    "<div>" +
                    "<output></output>" +
                    "</div>" +
                    "</div>" +
                    '<div class="tool-track' +
                    (_11._76 === "track" ? " active" : "") +
                    '">' +
                    "<h2>Tracked elements</h2>" +
                    "<p>" +
                    "When viewing a heatmap, most of your links will include a box that shows additional metrics(clicks, hovers, etc.).In some cases, these boxes will not appear." +
                    "</p>" +
                    "<p>" +
                    "If you've found such an element, you can select it here. That will ensure the additional metrics are shown in your heatmaps." +
                    "</p>" +
                    "<p>" +
                    'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
                    "</p>" +
                    "<p>" +
                    'For more details and best practices, read our <a href="http://help.mouseflow.com/knowledge_base/topics/exclude-or-replace-content-on-pages" class="green" target="_389">Support Guide</a>.' +
                    "</p>" +
                    "<h3>Tracked elements:</h3>" +
                    "<div>" +
                    "<output></output>" +
                    "</div>" +
                    "</div>" +
                    '<div class="tool-status">' +
                    '<div class="tool-status-text">' +
                    _308(_11._58, _11._61, _11._77) +
                    "</div>" +
                    '<div class="tool-status-buttons">' +
                    '<button type="submit" class="btn-widget">Save and close</button>' +
                    '<a href="#" class="green bold mf-tool-close">Close Privacy Tool</a>' +
                    "</div>" +
                    "</div>" +
                    '<div class="tool-loading">' +
                    '<h2 class="loading">Loading the Privacy Tool<i>.</i><i>.</i><i>.</i></h2>' +
                    "</div>" +
                    '<div class="tool-message">' +
                    "<h3>Browser window is to small to load the Privacy Tool</h3>" +
                    "<p>To use Mouseflow's Privacy Tool, you need to view the page in a larger browser window.</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            }
            function _706(_49) {
                return _49
                    .map(function (_7) {
                        return '<div class="tm-tag" data-target="' + _8._133(_7) + '">' + _8._133(_7) + '<a href="#" class="btn-cross mf-remove-excluded"></a>' + "</div>";
                    })
                    .join("");
            }
            function _707(_49) {
                return _49
                    .map(function (_7) {
                        return '<div class="tm-tag" data-target="' + _8._133(_7) + '">' + _8._133(_7) + '<a href="#" class="btn-cross mf-remove-whitelisted"></a>' + "</div>";
                    })
                    .join("");
            }
            function _708(_49) {
                return _49
                    .map(function (_7) {
                        return '<div class="tm-tag" data-target="' + _8._133(_7) + '">' + _8._133(_7) + '<a href="#" class="btn-cross mf-remove-tracked"></a>' + "</div>";
                    })
                    .join("");
            }
            function _308(_58, _61, _580) {
                return (
                    "<p>You have:</p>" +
                    "<p>" +
                    '&nbsp;&bull; excluded <i class="green"> ' +
                    _58.length +
                    "</i> " +
                    (_58.length === 1 ? "element" : "elements") +
                    "<br>" +
                    '&nbsp;&bull; whitelisted <i class="green">' +
                    _61.length +
                    "</i> input " +
                    (_61.length === 1 ? "field" : "fields") +
                    "<br>" +
                    '&nbsp;&bull; tracked <i class="green">' +
                    _580.length +
                    "</i> input " +
                    (_580.length === 1 ? "element" : "elements") +
                    "</p>"
                );
            }
            function _712() {
                return (
                    ".mf-highlight {" +
                    "cursor: pointer !important;" +
                    "}" +
                    ".mf-privacy-tool-opened iframe {" +
                    "pointer-events: none;" +
                    "}" +
                    "#mouseflow .highlight-box {" +
                    "background-color: #add8e6;" +
                    "border: 2px dotted #808080;" +
                    "position: absolute;" +
                    "border-radius: 2px;" +
                    "z-index: 2147483646;" +
                    "cursor: pointer;" +
                    "pointer-events: none;" +
                    "opacity: 0.5;" +
                    "-webkit-transition: opacity .075s linear;" +
                    "transition: opacity .075s linear;" +
                    "}" +
                    "#mouseflow .highlight-box.hidden," +
                    "#mouseflow .tool-closed .highlight-box {" +
                    "opacity: 0;" +
                    "}" +
                    "#mouseflow .highlight-box.highlight-excluded {" +
                    "background-color: #ffb6c1;" +
                    "pointer-events: initial;" +
                    "}" +
                    "#mouseflow .highlight-box.highlight-whitelisted {" +
                    "background-color: #90ee90;" +
                    "pointer-events: initial;" +
                    "}" +
                    "#mouseflow .highlight-box.highlight-tracked {" +
                    "background-color: orange;" +
                    "pointer-events: initial;" +
                    "}" +
                    "#mouseflow .tool-closed .highlight-box.highlight-excluded," +
                    "#mouseflow .tool-closed .highlight-box.highlight-whitelisted," +
                    "#mouseflow .tool-closed .highlight-box.highlight-tracked {" +
                    "pointer-events: none;" +
                    "}" +
                    "#mouseflow .widget-header," +
                    "#mouseflow .btn-widget {" +
                    "background: #4cb377;" +
                    "}" +
                    "#mouseflow .widget-text," +
                    "#mouseflow .btn-widget," +
                    "#mouseflow .btn-arrow," +
                    "#mouseflow .btn-cross {" +
                    "color: #fff;" +
                    "}" +
                    "#mouseflow .tm-tag {" +
                    "margin: 7px 7px 0 0;" +
                    "padding: 7px;" +
                    "display: inline-block;" +
                    "border-radius: 3px;" +
                    "background-color: #a7a7a7;" +
                    "color: white;" +
                    "font-size: 13px;" +
                    "}" +
                    "#mouseflow .step {" +
                    "visibility: hidden;" +
                    "opacity: 0;" +
                    "position: fixed;" +
                    "bottom: 30px;" +
                    "right: 30px;" +
                    "z-index: 2147483647;" +
                    "width: 300px;" +
                    "border-radius: 10px;" +
                    "box-shadow: 0 0 15px rgba(0, 0, 0, .35);" +
                    "overflow: hidden;" +
                    "}" +
                    "#mouseflow a:hover {" +
                    "text-decoration: underline;" +
                    "}" +
                    "#mouseflow h2 {" +
                    "font-size: 21px;" +
                    "font-weight: 700;" +
                    "line-height: 1.4em;" +
                    "margin-bottom: 6px;" +
                    "}" +
                    "#mouseflow h3 {" +
                    "font-size: 16px;" +
                    "font-weight: 700;" +
                    "line-height: 1.4em;" +
                    "}" +
                    "#mouseflow p {" +
                    "margin-bottom: 8px;" +
                    "line-height: 1.4em;" +
                    "}" +
                    "#mouseflow .green {" +
                    "color: #47b475;" +
                    "}" +
                    "#mouseflow .red {" +
                    "color: #ea1e1e;" +
                    "}" +
                    "#mouseflow .bold {" +
                    "font-weight: 700;" +
                    "}" +
                    "#mouseflow .tool-container {" +
                    "visibility: visible;" +
                    "opacity: 0;" +
                    "position: fixed;" +
                    "bottom: 0;" +
                    "left: 0;" +
                    "width: 100%;" +
                    "height: 350px;" +
                    "max-height: 40%;" +
                    "overflow: hidden;" +
                    "background-color: white;" +
                    "border-top: 2px solid #37312f;" +
                    "z-index: 2147483647;" +
                    "}" +
                    "#mouseflow .tool-header {" +
                    "background-color: #47403e;" +
                    "height: 58px;" +
                    "}" +
                    "#mouseflow .logo {" +
                    "display: inline;" +
                    "height: 40px;" +
                    "margin: 9px 10px;" +
                    "}" +
                    "#mouseflow .tool-toggle," +
                    "#mouseflow .tool-close {" +
                    "float: right;" +
                    "padding: 18px 24px;" +
                    "}" +
                    "#mouseflow .is-loading .tool-close {" +
                    "display: block;" +
                    "}" +
                    "#mouseflow .is-loading .tool-toggle," +
                    "#mouseflow .tool-close {" +
                    "display: none;" +
                    "}" +
                    "#mouseflow .tool-toggle-text {" +
                    "display: inline-block;" +
                    "color: white;" +
                    "font-size: 18px;" +
                    "}" +
                    "#mouseflow .tool-toggle-icon {" +
                    "width: 30px;" +
                    "display: inline-block;" +
                    "position: relative;" +
                    "top: 2px;" +
                    "}" +
                    "#mouseflow .tool-close .tool-toggle-icon {" +
                    "top: 4px;" +
                    "}" +
                    "#mouseflow .tool-content {" +
                    "height: calc(100% - 58px);" +
                    "}" +
                    "#mouseflow .tool-menu {" +
                    "width: 15%;" +
                    "height: 100%;" +
                    "float: left;" +
                    "}" +
                    "#mouseflow .tool-menu-item {" +
                    "background-color: #f8f8f8;" +
                    "color: black;" +
                    "cursor: pointer;" +
                    "height: 40px;" +
                    "padding: 12px;" +
                    "}" +
                    "#mouseflow .tool-menu-item.active {" +
                    "position: relative;" +
                    "background-color: #4db378;" +
                    "color: white;" +
                    "cursor: default;" +
                    "}" +
                    "#mouseflow .tool-menu-item.active:after {" +
                    "display: block;" +
                    "border: solid transparent;" +
                    'content: " ";' +
                    "position: absolute;" +
                    "pointer-events: none;" +
                    "border-left-color: #4db378;" +
                    "border-width: 20px;" +
                    "top: 0;" +
                    "right: -40px;" +
                    "}" +
                    "#mouseflow .tool-menu-item:not(.active):hover {" +
                    "background-color: #e4e4e4" +
                    "}" +
                    "#mouseflow .tool-exclude," +
                    "#mouseflow .tool-whitelist," +
                    "#mouseflow .tool-track {" +
                    "display: none;" +
                    "width: 70%;" +
                    "height: 100%;" +
                    "float: left;" +
                    "color: rgb(71, 64, 62);" +
                    "overflow-y: auto;" +
                    "overflow-x: hidden;" +
                    "padding: 10px 40px;" +
                    "}" +
                    "#mouseflow .tool-exclude.active," +
                    "#mouseflow .tool-whitelist.active," +
                    "#mouseflow .tool-track.active {" +
                    "display: block;" +
                    "}" +
                    "#mouseflow .tool-exclude::-webkit-scrollbar," +
                    "#mouseflow .tool-whitelist::-webkit-scrollbar," +
                    "#mouseflow .tool-track::-webkit-scrollbar {" +
                    "width: 8px;" +
                    "}" +
                    "#mouseflow .tool-exclude::-webkit-scrollbar-track," +
                    "#mouseflow .tool-whitelist::-webkit-scrollbar-track," +
                    "#mouseflow .tool-track::-webkit-scrollbar-track {" +
                    "border-radius: 10px;" +
                    "background-color: #F5F5F5;" +
                    "-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);" +
                    "}" +
                    "#mouseflow .tool-exclude::-webkit-scrollbar-thumb," +
                    "#mouseflow .tool-whitelist::-webkit-scrollbar-thumb," +
                    "#mouseflow .tool-track::-webkit-scrollbar-thumb {" +
                    "border-radius: 10px;" +
                    "background-color: #a7a7a7;" +
                    "-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);" +
                    "}" +
                    "#mouseflow .tool-status {" +
                    "width: 15%;" +
                    "background-color: #f8f8f8;" +
                    "height: 100%;" +
                    "float: left;" +
                    "position: relative;" +
                    "}" +
                    "#mouseflow .tool-status-text {" +
                    "font-size: 16px;" +
                    "font-weight: 700;" +
                    "text-align: left;" +
                    "padding: 0 15px;" +
                    "position: absolute;" +
                    "top: 40px;" +
                    "}" +
                    "#mouseflow .tool-status-buttons {" +
                    "width: 100%;" +
                    "text-align: center;" +
                    "position: absolute;" +
                    "padding: 0 30px;" +
                    "bottom: 40px;" +
                    "}" +
                    "#mouseflow .tool-loading {" +
                    "width: 100%;" +
                    "height: calc(100% - 58px);" +
                    "background-color: white;" +
                    "color: rgb(71, 64, 62);" +
                    "position: absolute;" +
                    "top: 58px;" +
                    "z-index: 2;" +
                    "visibility: hidden;" +
                    "opacity: 0;" +
                    "-webkit-animation: fadeOut .3s linear;" +
                    "animation: fadeOut .3s linear;" +
                    "}" +
                    "#mouseflow .is-loading .tool-loading {" +
                    "visibility: visible;" +
                    "opacity: 1;" +
                    "-webkit-animation: fadeIn .3s linear;" +
                    "animation: fadeIn .3s linear;" +
                    "}" +
                    "#mouseflow .tool-loading h2 {" +
                    "position: absolute;" +
                    "left: 50%;" +
                    "top: 50%;" +
                    "-webkit-transform: translate(-50%, -50%);" +
                    "-ms-transform: translate(-50%, -50%);" +
                    "transform: translate(-50%, -50%);" +
                    "}" +
                    "#mouseflow .widget-header {" +
                    "color: #fff;" +
                    "padding: 12px 15px;" +
                    "vertical-align: middle;" +
                    "overflow: hidden;" +
                    "position: relative;" +
                    "z-index: 1;" +
                    "}" +
                    "#mouseflow .widget-header:before {" +
                    'content: "";' +
                    "display: inline;" +
                    "position: absolute;" +
                    "top: 0;" +
                    "left: 0;" +
                    "right: 0;" +
                    "bottom: 0;" +
                    "background: rgba(0, 0, 0, .3);" +
                    "opacity: 0;" +
                    "z-index: -1;" +
                    "-webkit-transition: opacity .3s linear;" +
                    "transition: opacity .3s linear;" +
                    "}" +
                    "#mouseflow .widget-header:hover:before {" +
                    "opacity: 1;" +
                    "}" +
                    "#mouseflow .widget-text {" +
                    "font-size: 16px;" +
                    "line-height: 20px;" +
                    "width: 245px;" +
                    "display: inline-block;" +
                    "vertical-align: middle;" +
                    "}" +
                    "#mouseflow .widget-toggle {" +
                    "width: 20px;" +
                    "display: inline-block;" +
                    "vertical-align: middle;" +
                    "margin: 0;" +
                    "}" +
                    "#mouseflow .btn-arrow," +
                    "#mouseflow .btn-cross {" +
                    "float: right;" +
                    "z-index: 10;" +
                    "line-height: .5;" +
                    "}" +
                    "#mouseflow .tool-toggle-icon .btn-arrow," +
                    "#mouseflow .tool-toggle-icon .btn-cross {" +
                    "font-size: 34px;" +
                    "}" +
                    "#mouseflow .widget-toggle .btn-arrow {" +
                    "font-size: 25px;" +
                    "}" +
                    "#mouseflow .tm-tag .btn-cross {" +
                    "margin: 3px 0 0 7px;" +
                    "font-weight: 700;" +
                    "color: #4e4e4e;" +
                    "font-size: 18px;" +
                    "}" +
                    "#mouseflow .widget-toggle .btn-arrow:hover {" +
                    "text-shadow: -3px 0 2px rgba(0, 0, 0, .5);" +
                    "}" +
                    "#mouseflow .tm-tag .btn-cross:hover {" +
                    "color: #c66;" +
                    "}" +
                    "#mouseflow .btn-arrow--up {" +
                    "-webkit-transform: rotate(-90deg) scale(1.5, 1.5);" +
                    "-ms-transform: rotate(-90deg) scale(1.5, 1.5);" +
                    "transform: rotate(-90deg) scale(1.5, 1.5);" +
                    "}" +
                    "#mouseflow .btn-arrow--down {" +
                    "-webkit-transform: rotate(+90deg) scale(1.5, 1.5);" +
                    "-ms-transform: rotate(+90deg) scale(1.5, 1.5);" +
                    "transform: rotate(+90deg) scale(1.5, 1.5);" +
                    "}" +
                    "#mouseflow .widget-toggle .btn-arrow:before {" +
                    'content: "";' +
                    "display: inline;" +
                    "position: absolute;" +
                    "top: -185px;" +
                    "left: -15px;" +
                    "right: -15px;" +
                    "bottom: -15px;" +
                    "display: block;" +
                    "}" +
                    "#mouseflow .tool-toggle-icon .btn-arrow:before {" +
                    'content: "";' +
                    "display: inline;" +
                    "position: absolute;" +
                    "top: -10px;" +
                    "left: -15px;" +
                    "right: -15px;" +
                    "bottom: -100px;" +
                    "display: block;" +
                    "}" +
                    "#mouseflow .tool-toggle-icon .btn-cross:before {" +
                    'content: "";' +
                    "display: inline;" +
                    "position: absolute;" +
                    "top: -25px;" +
                    "left: -150px;" +
                    "right: -20px;" +
                    "bottom: -20px;" +
                    "display: block;" +
                    "}" +
                    "#mouseflow .btn-arrow:after {" +
                    'content: "\\203a";' +
                    "display: inline;" +
                    "}" +
                    "#mouseflow .btn-cross:after {" +
                    'content: "\\00d7";' +
                    "display: inline;" +
                    "}" +
                    "#mouseflow .btn-arrow:hover," +
                    "#mouseflow .btn-cross:hover {" +
                    "text-decoration: none;" +
                    "}" +
                    "#mouseflow .btn-widget {" +
                    "width: 100%;" +
                    "height: 38px;" +
                    "border: none;" +
                    "border-radius: 6px;" +
                    "overflow: hidden;" +
                    "position: relative;" +
                    "z-index: 1;" +
                    "cursor: pointer;" +
                    "display: block;" +
                    "padding: 10px;" +
                    "font-size: 16px;" +
                    "font-family: inherit;" +
                    "font-weight: bold;" +
                    "text-align: center;" +
                    "outline: none;" +
                    "margin-bottom: 10px;" +
                    "}" +
                    "#mouseflow .btn-widget:before {" +
                    'content: "";' +
                    "display: inline;" +
                    "position: absolute;" +
                    "top: 0;" +
                    "left: 0;" +
                    "right: 0;" +
                    "bottom: 0;" +
                    "background: rgba(0, 0, 0, .3);" +
                    "opacity: 0;" +
                    "z-index: -1;" +
                    "-webkit-transition: opacity .3s linear;" +
                    "transition: opacity .3s linear;" +
                    "}" +
                    "#mouseflow .btn-widget:hover {" +
                    "text-decoration: none;" +
                    "}" +
                    "#mouseflow .btn-widget:hover:before {" +
                    "opacity: 1;" +
                    "}" +
                    "#mouseflow .privacy-tool {" +
                    "height: 350px;" +
                    "max-height: 40%;" +
                    "-webkit-transition: height .5s ease-out;" +
                    "transition: height .5s ease-out;" +
                    "}" +
                    "#mouseflow .privacy-tool.tool-closed {" +
                    "height: 0;" +
                    "}" +
                    "#mouseflow .tool-closed .step {" +
                    "visibility: visible;" +
                    "}" +
                    "#mouseflow .tool-closed .tool-container {" +
                    "visibility: hidden;" +
                    "}" +
                    "#mouseflow .step.fade-in," +
                    "#mouseflow .tool-container.fade-in {" +
                    "-webkit-animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;" +
                    "animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;" +
                    "}" +
                    "#mouseflow .step.fade-out," +
                    "#mouseflow .tool-container.fade-out {" +
                    "-webkit-animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);" +
                    "animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);" +
                    "}" +
                    "#mouseflow .btn-widget.loading {" +
                    "cursor: default;" +
                    "}" +
                    "#mouseflow .btn-widget.loading:before {" +
                    "display: none;" +
                    "}" +
                    "#mouseflow .loading i {" +
                    "animation-name: blink;" +
                    "animation-duration: 1.4s;" +
                    "animation-iteration-count: infinite;" +
                    "animation-fill-mode: both;" +
                    "}" +
                    "#mouseflow .loading i:nth-child(2) {" +
                    "animation-delay: .2s;" +
                    "}" +
                    "#mouseflow .loading i:nth-child(3) {" +
                    "animation-delay: .4s;" +
                    "}" +
                    "#mouseflow .loading i:nth-child(4) {" +
                    "animation-delay: .6s;" +
                    "}" +
                    "#mouseflow .tool-message {" +
                    "width: 100%;" +
                    "height: calc(100% - 58px);" +
                    "background-color: white;" +
                    "color: rgb(71, 64, 62);" +
                    "position: absolute;" +
                    "top: 58px;" +
                    "z-index: 3;" +
                    "padding: 20px;" +
                    "overflow-y: auto;" +
                    "overflow-x: hidden;" +
                    "visibility: hidden;" +
                    "opacity: 0;" +
                    "-webkit-animation: fadeOut .3s linear;" +
                    "animation: fadeOut .3s linear;" +
                    "}" +
                    "#mouseflow .tool-message h3 {" +
                    "margin-bottom: 20px;" +
                    "}" +
                    "@media (max-width: 1300px) {" +
                    "#mouseflow .tool-exclude," +
                    "#mouseflow .tool-whitelist," +
                    "#mouseflow .tool-track {" +
                    "width: 60%;" +
                    "}" +
                    "#mouseflow .tool-status {" +
                    "width: 25%;" +
                    "}" +
                    "#mouseflow .tool-status-buttons {" +
                    "bottom: 10px;" +
                    "}" +
                    "}" +
                    "@media (max-width: 850px) {" +
                    "#mouseflow .tool-menu-item {" +
                    "height: 56px;" +
                    "}" +
                    "#mouseflow .tool-menu-item.active:after {" +
                    "border-width: 28px;" +
                    "top: 0px;" +
                    "right: -56px;" +
                    "}" +
                    "#mouseflow .tool-status-text {" +
                    "font-size: 14px;" +
                    "}" +
                    "#mouseflow .btn-widget {" +
                    "font-size: 12px;" +
                    "}" +
                    "#mouseflow a.mf-tool-close {" +
                    "font-size: 12px;" +
                    "}" +
                    "}" +
                    "@media (max-height: 800px) {" +
                    "#mouseflow .tool-status-text {" +
                    "top: 20px;" +
                    "}" +
                    "#mouseflow .tool-status-buttons {" +
                    "bottom: 20px;" +
                    "}" +
                    "}" +
                    "@media (max-height: 650px) {" +
                    "#mouseflow .tool-status-text {" +
                    "font-size: 14px;" +
                    "}" +
                    "}" +
                    "@media (max-width: 650px), (max-height: 600px) {" +
                    "#mouseflow .tool-message {" +
                    "visibility: visible;" +
                    "opacity: 1;" +
                    "-webkit-animation: fadeIn .3s linear;" +
                    "animation: fadeIn .3s linear;" +
                    "}" +
                    "}" +
                    "@-webkit-keyframes fadeUpIn {" +
                    "0% {" +
                    "-webkit-transform: translateY(50px);" +
                    "-ms-transform: translateY(50px);" +
                    "transform: translateY(50px);" +
                    "opacity: 0;" +
                    "}" +
                    "100% {" +
                    "-webkit-transform: translateY(0);" +
                    "-ms-transform: translateY(0);" +
                    "transform: translateY(0);" +
                    "opacity: 1;" +
                    "}" +
                    "}" +
                    "@keyframes fadeUpIn {" +
                    "0% {" +
                    "-webkit-transform: translateY(50px);" +
                    "-ms-transform: translateY(50px);" +
                    "transform: translateY(50px);" +
                    "opacity: 0;" +
                    "}" +
                    "100% {" +
                    "-webkit-transform: translateY(0);" +
                    "-ms-transform: translateY(0);" +
                    "transform: translateY(0);" +
                    "opacity: 1;" +
                    "}" +
                    "}" +
                    "@-webkit-keyframes fadeDownOut {" +
                    "0% {" +
                    "visibility: visible;" +
                    "-webkit-transform: translateY(0);" +
                    "-ms-transform: translateY(0);" +
                    "transform: translateY(0);" +
                    "opacity: 1;" +
                    "}" +
                    "100% {" +
                    "visibility: hidden;" +
                    "-webkit-transform: translateY(50px);" +
                    "-ms-transform: translateY(50px);" +
                    "transform: translateY(50px);" +
                    "opacity: 0;" +
                    "}" +
                    "}" +
                    "@keyframes fadeDownOut {" +
                    "0% {" +
                    "visibility: visible;" +
                    "-webkit-transform: translateY(0);" +
                    "-ms-transform: translateY(0);" +
                    "transform: translateY(0);" +
                    "opacity: 1;" +
                    "}" +
                    "100% {" +
                    "visibility: hidden;" +
                    "-webkit-transform: translateY(50px);" +
                    "-ms-transform: translateY(50px);" +
                    "transform: translateY(50px);" +
                    "opacity: 0;" +
                    "}" +
                    "}" +
                    "@-webkit-keyframes fadeIn {" +
                    "0% {" +
                    "visibility: visible;" +
                    "opacity: 0;" +
                    "}" +
                    "100% {" +
                    "visibility: visible;" +
                    "opacity: 1;" +
                    "}" +
                    "}" +
                    "@keyframes fadeIn {" +
                    "0% {" +
                    "visibility: visible;" +
                    "opacity: 0;" +
                    "}" +
                    "100% {" +
                    "visibility: visible;" +
                    "opacity: 1;" +
                    "}" +
                    "}" +
                    "@-webkit-keyframes fadeOut {" +
                    "0% {" +
                    "visibility: visible;" +
                    "opacity: 1;" +
                    "}" +
                    "100% {" +
                    "visibility: hidden;" +
                    "opacity: 0;" +
                    "}" +
                    "}" +
                    "@keyframes fadeOut {" +
                    "0% {" +
                    "visibility: visible;" +
                    "opacity: 1;" +
                    "}" +
                    "100% {" +
                    "visibility: hidden;" +
                    "opacity: 0;" +
                    "}" +
                    "}" +
                    "@keyframes blink {" +
                    "0% {" +
                    "opacity: .2;" +
                    "}" +
                    "20% {" +
                    "opacity: 1;" +
                    "}" +
                    "100% {" +
                    "opacity: .2;" +
                    "}" +
                    "}"
                );
            }
            this._39 = _39;
            this._60 = _60;
        }
        function _663(_14, _369, _371) {
            function _296() {
                var _57 = (_14.path || _14.location.pathname).toLowerCase();
                var _187 = _14.location.search.toLowerCase();
                if (_57 !== "/" && _57.slice(-1) === "/") _57 = _57.slice(0, -1);
                return _713(_57) || _57 + _715(_187);
            }
            function _713(_57) {
                return _369
                    .filter(function (_63) {
                        return _717(_57, _63);
                    })
                    .map(function (_63) {
                        return _720(_57, _63);
                    })[0];
            }
            function _715(_187) {
                if (_187[0] === "?") _187 = _187.slice(1);
                var _113;
                var _304 = [];
                var _716 = /([^&=]+)=?([^&]*)/g;
                while ((_113 = _716.exec(_187))) {
                    var _48 = _371.indexOf(_113[1]);
                    if (_113[2] && _48 > -1) _304[_48] = _113[0];
                }
                return _304.length ? "?" + _304.filter(hasValue).join("&") : "";
            }
            function _717(_57, _63) {
                var _517 = _57.indexOf("?");
                if (_517 > -1) _57 = _57.slice(0, _517);
                switch (_63._18) {
                    case "equals":
                        return _57 === _63._4.toLowerCase();
                    case "startsWith":
                        return _57.indexOf(_63._4.toLowerCase()) === 0;
                    case "endsWith":
                        return _57.indexOf(_63._4.toLowerCase()) === _57.length - _63._4.length;
                    case "regex":
                        return new RegExp(_63._4).test(_57);
                    default:
                        return false;
                }
            }
            function _720(_57, _63) {
                if (_63._721) return _63._721;
                switch (_63._18) {
                    case "startsWith":
                        return _63._4 + "*";
                    case "endsWith":
                        return "*" + _63._4;
                    default:
                        return _63._4;
                }
            }
            function hasValue(value) {
                return value;
            }
            this._296 = _296;
        }
        function _665(_8) {
            var _394 = [];
            function _727(_42, _5, _85, _378, _15) {
                var _31 = !!_15._31;
                var _524 = function (_6) {
                    if (_85) {
                        _6.delegatedTarget = _525(_6.target, _85);
                        if (!_6.delegatedTarget && !_15._523) return;
                        if (_15._190 && _6.target !== _6.delegatedTarget) return;
                    } else if (_15._190 && _6.target !== _42) {
                        return;
                    }
                    if (_15._86) _6.preventDefault();
                    if (_15._877) _6.stopPropagation();
                    _378.apply(this, arguments);
                };
                _42.addEventListener(_5, _524, { capture: _31 });
                _394.push({ _42: _42, _5: _5, _378: _524, _31: _31 });
            }
            function _700() {
                _394.forEach(function (_17) {
                    _17._42.removeEventListener(_17._5, _17._378, { capture: _17._31 });
                });
                _394 = [];
            }
            function _525(_42, _85) {
                if (!_85) return null;
                if (_8._65(_42, _85)) return _42;
                if (!_42.parentNode) return null;
                return _525(_42.parentNode, _85);
            }
            this._21 = function (_42, _5, _85, _221, _15) {
                if (typeof _85 === "function") {
                    _15 = _221;
                    _221 = _85;
                    _85 = null;
                }
                _727(_42, _5, _85, _221, _15 || {});
            };
            this._526 = _700;
        }
        function _624(_14, _8) {
            function _410(_143) {
                if (!_143 || !_143.length) return true;
                _143 = _143.filter(function (_73) {
                    return _73 && _73._18 && _73._4;
                });
                var _583 = _143.filter(function (_73) {
                    return _73._18.indexOf("not") !== 0;
                });
                var _677 =
                    _583.length === 0 ||
                    _583.some(function (_73) {
                        return _192(_73);
                    });
                var _532 = _143.filter(function (_73) {
                    return _73._18.indexOf("not") === 0;
                });
                var _674 =
                    _532.length === 0 ||
                    _532.every(function (_73) {
                        return _192(_73);
                    });
                return _674 && _677;
            }
            function _192(_73) {
                var _27 = _14.path || _14.location.pathname;
                var _18 = _73._18 || "";
                var _4 = _73._4 || "";
                switch (_18.toLowerCase()) {
                    case "equals":
                        _27 = _8._191(_27, "/").toLowerCase();
                        _4 = _8._191(_4, "/").toLowerCase();
                        return _27 === _4;
                    case "startswith":
                        _27 = _27.toLowerCase();
                        _4 = _4.toLowerCase();
                        return _27.indexOf(_4) === 0;
                    case "endswith":
                        _27 = _8._191(_27, "/").toLowerCase();
                        _4 = _8._191(_4, "/").toLowerCase();
                        return _27.indexOf(_4) !== -1 && _27.indexOf(_4) === _27.length - _4.length;
                    case "regex":
                        return new RegExp(_4).test(_27);
                    case "notequals":
                    case "notstartswith":
                    case "notendswith":
                        return !_192({ _18: _18.slice(3), _4: _4 });
                    default:
                        return true;
                }
            }
            this._410 = _410;
            this._192 = _192;
        }
        function _714(_3, _333, _360) {
            var _81 = _3.location;
            function _542(_16) {
                var _65 = (_16 || "").match(/^(([^:]+:)?\/?\/?(([^:\/\?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/);
                return { href: _65[0] || "", origin: _65[1] || "", protocol: _65[2] || "", host: _65[3] || "", hostname: _65[4] || "", port: _65[5] || "", pathname: _65[6] || "", search: _65[7] || "", hash: _65[8] || "" };
            }
            function _679() {
                try {
                    _3.localStorage.setItem("mf_supportsLocalStorage", "1");
                    var _678 = _3.localStorage.getItem("mf_supportsLocalStorage") === "1";
                    _3.localStorage.removeItem("mf_supportsLocalStorage");
                    return _678;
                } catch (e) {
                    return false;
                }
            }
            this.debug = _3.mouseflowDebug || _81.search.indexOf("mf_debug=1") !== -1;
            this.includeDebugTime = false;
            this.forceStart = _81.search.indexOf("mf_force=1") !== -1;
            this.autoStart = _3.mouseflowAutoStart !== false && _81.search.indexOf("mf_autostart=0") === -1;
            this.enableBots = false;
            this.touchEvents = !_3.mouseflowDisableTouch;
            this.htmlDelay = _3.mouseflowHtmlDelay || 1000;
            this.newPageViewHtmlDelay = _3.mouseflowNewPageViewHtmlDelay || 500;
            this.compress = _3.mouseflowCompress !== false && _81.search.indexOf("mf_compress=0") === -1;
            this.autoTagging = _3.mouseflowAutoTagging !== false;
            this.path = _3.mouseflowPath;
            this.crossDomainSupport = !!_3.mouseflowCrossDomainSupport;
            this.location = _542(_3.mouseflowHref || _81.href);
            this.htmlFetchMode = _3.mouseflowHtmlFetchMode || "post";
            this.sessionId = _3.mouseflowSessionId;
            this.honorDoNotTrack = _3.mouseflowHonorDoNotTrack || _360;
            this.gdprEnabled = _3.mouseflowForceGdpr || _333;
            this.keyLogging = !_3.mouseflowDisableKeyLogging && !this.gdprEnabled;
            this.domReuse = !_3.mouseflowDisableDomReuse;
            this.domDeduplicator = !_3.mouseflowDisableDomDeduplicator;
            this.includeSubDomains = !_3.mouseflowExcludeSubDomains;
            this.registerSubmitTimeout = _3.mouseflowRegisterSubmitTimeout || 2000;
            this.useUnload = !!_3.mouseflowUseUnload;
            this.replaceLastFormValues = _3.mouseflowReplaceLastFormValues || !this.keyLogging || this.gdprEnabled;
            this.useAllHoverSelectors = !!_3.mouseflowUseAllHoverSelectors;
            this.secureCookie = !!_3.mouseflowSecureCookie;
            this.domMutationDetectorEnable = _3.domMutationDetectorEnable !== undefined ? _3.domMutationDetectorEnable : false;
            this.domMutationUseParentNode = _3.domMutationUseParentNode !== undefined ? _3.domMutationUseParentNode : true;
            this.domMutationUsePreviousSibling = _3.domMutationUsePreviousSibling !== undefined ? _3.domMutationUsePreviousSibling : false;
            this.domMutationCountThreshold = _3.domMutationCountThreshold !== undefined ? _3.domMutationCountThreshold : 20;
            this.domMutationTimeThresholdInSeconds = _3.domMutationTimeThresholdInSeconds !== undefined ? _3.domMutationTimeThresholdInSeconds : 10;
            this.liveHeatmapsEnabled = false;
            this.privacyToolEnabled = false;
            this._682 = function () {
                if (!!_3.opener && _81.search.indexOf("mf_liveHeatmaps") !== -1) {
                    this.liveHeatmapsEnabled = true;
                    return;
                }
                if (_81.search.indexOf("mf_inspect") !== -1) {
                    this.privacyToolEnabled = true;
                    return;
                }
                if (!!_3.opener && (_3.name === "mf_liveHeatmaps_init" || _3.name === "mf_liveHeatmaps")) {
                    this.liveHeatmapsEnabled = true;
                    return;
                }
                if (_3.name === "mf_privacyTool") {
                    this.privacyToolEnabled = true;
                    return;
                }
                if (!_679()) return;
                if (!!_3.localStorage.getItem("mf_privacyTool")) this.privacyToolEnabled = true;
                else if (!!_3.opener && !!_3.localStorage.getItem("mf_liveHeatmaps")) this.liveHeatmapsEnabled = true;
            };
            this._682();
            this._541 = function (_24, _4) {
                switch (_24) {
                    case "href":
                        this.location = _542(_4);
                        break;
                    case "keyLogging":
                        this.keyLogging = this.keyLogging && _4;
                        break;
                    case "gdprEnabled":
                        this.gdprEnabled = this.gdprEnabled || _4;
                        break;
                    default:
                        this[_24] = _4;
                        break;
                }
            };
        }
        function _669(_3) {
            var _9 = _3.document,
                _165;
            function _251() {
                if (_9.body && !_165) {
                    _165 = _686();
                    _9.body.appendChild(_165);
                }
                return _165;
            }
            function _393() {
                if (_165) {
                    _9.body.removeChild(_165);
                    _165 = undefined;
                }
            }
            function _686() {
                var _28 = _9.createElement("div");
                _28.id = "mouseflow";
                var _153 = _9.createElement("style");
                _153.type = "text/css";
                _153.innerHTML = _688();
                var _396 = _9.createElement("div");
                _396.className = "load-font";
                _396.innerHTML = "load font";
                _28.appendChild(_153);
                _28.appendChild(_396);
                return _28;
            }
            function _688() {
                return (
                    "@font-face {" +
                    'font-family: "Droid Sans";' +
                    "font-style: normal;" +
                    "font-weight: 400;" +
                    'src: local("Droid Sans Regular"), local("DroidSans-Regular"), url(https://fonts.gstatic.com/s/droidsans/v8/s-BiyweUPV0v-yRb-cjciPk_vArhqVIZ0nv9q090hN8.woff2) format("woff2");' +
                    "unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;" +
                    "}" +
                    "#mouseflow :before, #mouseflow :after {" +
                    "display: none;" +
                    "}" +
                    "#mouseflow," +
                    "#mouseflow * {" +
                    "background: transparent;" +
                    "border: 0;" +
                    "border-image-outset: 0s;" +
                    "border-image-repeat: stretch;" +
                    "border-image-slice: 100%;" +
                    "border-image-source: none;" +
                    "border-image-width: 1;" +
                    "border-color: #000;" +
                    "border-radius: 0;" +
                    "border-width: 0;" +
                    "border-style: none;" +
                    "box-sizing: border-box;" +
                    "clip: auto;" +
                    "float: none;" +
                    "color: inherit;" +
                    "font-family: inherit;" +
                    "font-size: inherit;" +
                    "font-style: inherit;" +
                    "font-weight: inherit;" +
                    "width: auto;" +
                    "height: auto;" +
                    "min-width: auto;" +
                    "min-height: auto;" +
                    "max-width: auto;" +
                    "max-height: auto;" +
                    "letter-spacing: normal;" +
                    "line-height: normal;" +
                    "margin: 0;" +
                    "padding: 0;" +
                    "text-decoration: none;" +
                    "text-indent: 0;" +
                    "text-transform: none;" +
                    "vertical-align: baseline;" +
                    "text-align: left;" +
                    "overflow: visible;" +
                    "top: auto;" +
                    "right: auto;" +
                    "bottom: auto;" +
                    "left: auto;" +
                    "-webkit-transition: none;" +
                    "transition: none;" +
                    "}" +
                    "#mouseflow {" +
                    'font: 400 14px/1.4 "Droid Sans", Helvetica, Arial, sans-serif;' +
                    "color: #666;" +
                    "}" +
                    "#mouseflow .load-font {" +
                    "position: absolute;" +
                    "visibility: hidden;" +
                    "width: 0px;" +
                    "height: 0px;" +
                    "overflow: hidden;" +
                    "}"
                );
            }
            this._251 = _251;
            this._393 = _393;
        }
        function _668(_3) {
            this._53 = function () {
                return _252("setTimeout").apply(_3, arguments);
            };
            this._250 = function () {
                return _252("setInterval").apply(_3, arguments);
            };
            this._126 = function () {
                _252("clearTimeout").apply(_3, arguments);
            };
            this._155 = function () {
                _252("clearInterval").apply(_3, arguments);
            };
            function _252(_25) {
                var _546;
                if (_3.Zone && _3.Zone.__symbol__) _546 = _3[_3.Zone.__symbol__(_25)];
                return _546 || _3[_25];
            }
        }
        function _630(_3, _103, _419) {
            var _9 = _3.document;
            function _122(_2, _71) {
                var _82 = _2.classList;
                if (_82 && _71) return _82.contains(_71);
                var _128 = _169(_2);
                return _128.indexOf(_71) !== -1;
            }
            function _54(_2, _71) {
                var _82 = _2.classList;
                if (_82 && _71) {
                    _2.classList.add(_71);
                    return;
                }
                var _128 = _169(_2);
                if (_128.indexOf(_71) === -1) _128.push(_71);
                _2.className = _128.join(" ");
            }
            function _40(_2, _71) {
                var _82 = _2.classList;
                if (_82 && _71) {
                    _2.classList.remove(_71);
                    return;
                }
                var _128 = _169(_2);
                var _48 = _128.indexOf(_71);
                if (_48 !== -1) _128.splice(_48, 1);
                _2.className = _128.join(" ");
            }
            function _214(_2, _71, _390) {
                if (_390 === undefined) _390 = !_122(_2, _71);
                if (_390) {
                    _54(_2, _71);
                } else {
                    _40(_2, _71);
                }
            }
            function _169(_2) {
                var _582 = typeof _2.className === "string" ? _2.className.replace(/\s+/g, " ").trim() : "";
                return _582 !== "" ? _582.split(" ") : [];
            }
            function _324() {
                return _103.max((_9.body || {}).scrollHeight || 0, (_9.body || {}).offsetHeight || 0, _9.documentElement.scrollHeight || 0, _9.documentElement.offsetHeight || 0, _9.documentElement.clientHeight || 0);
            }
            function _85(_36, _694) {
                var _29 = [];
                if (!_36) return _29;
                for (var _1 = 0; _1 < _36.length; _1++) {
                    if (_694(_36[_1], _1)) _29.push(_36[_1]);
                }
                return _29;
            }
            function _599(_248) {
                var _285 = _248.length;
                while (_285) {
                    var _1 = _103.floor(_103.random() * _285--);
                    var _711 = _248[_285];
                    _248[_285] = _248[_1];
                    _248[_1] = _711;
                }
            }
            function _133(_32) {
                if (!_32) return _32;
                return _32.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }
            function _325(_32) {
                if (!_32) return _32;
                return _32
                    .replace(/&amp;/g, "&")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">");
            }
            function _326(url) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url.trim());
            }
            function _589(_32) {
                return _32.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, function (_113, _692, _16) {
                    _16 = _325(_16);
                    return _326(_16) ? '<a href="' + _16 + '" target="_389">' + _692 + "</a>" : _113;
                });
            }
            function _138(_4) {
                if (!_4) return _4;
                return _4.replace(/([^a-zA-Z\d-_])/g, "\\$1").replace(/^(-)?(\d)/, "$1\\3$2 ");
            }
            function _157(_4) {
                return _4 ? _419.parse(_4) : undefined;
            }
            function _70(_4) {
                var _29;
                if (Array.prototype.toJSON) {
                    var _689 = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    _29 = _419.stringify(_4);
                    Array.prototype.toJSON = _689;
                } else if (_4) {
                    _29 = _419.stringify(_4);
                }
                return _29;
            }
            function _588(_685, _684) {
                var _194 = _274(_685);
                var _32 = _274(_684);
                var _282 = _103.max(_194.length, _32.length);
                if (_32 == "NaN" || _194 == "NaN") {
                    return false;
                }
                for (var _1 = 0; _1 < _282; _1++) {
                    _194[_1] = _194[_1] || 0;
                    _32[_1] = _32[_1] || 0;
                    if (_194[_1] == _32[_1]) {
                        continue;
                    }
                    return _194[_1] > _32[_1];
                }
                return true;
            }
            function _274(_683) {
                var _608 = _683.split(".");
                var _615 = [];
                for (var _1 = 0; _1 < _608.length; _1++) {
                    _615.push(parseInt(_608[_1]));
                }
                return _615;
            }
            function _191(_32, _698) {
                var _29 = _32;
                while (_29[_29.length - 1] === (_698 || " ")) _29 = _29.slice(0, -1);
                return _29;
            }
            function _65(_2, _7) {
                if (_2.nodeType !== 1) return false;
                if (_2.msMatchesSelector) return _2.msMatchesSelector(_7);
                if (_2.matches) return _2.matches(_7);
                return false;
            }
            function _132(_62, _321) {
                return _62.parentNode && _62.parentNode.hasAttribute && _62.parentNode.hasAttribute(_321);
            }
            this._122 = _122;
            this._54 = _54;
            this._40 = _40;
            this._214 = _214;
            this._169 = _169;
            this._324 = _324;
            this._85 = _85;
            this._599 = _599;
            this._133 = _133;
            this._325 = _325;
            this._326 = _326;
            this._589 = _589;
            this._138 = _138;
            this._157 = _157;
            this._70 = _70;
            this._588 = _588;
            this._274 = _274;
            this._191 = _191;
            this._65 = _65;
            this._132 = _132;
        }
        var _333 = false;
        var _360 = false;
        var _369 = [];
        var _371 = [];
        var _14 = new _714(window, _333, _360);
        var _116 = new _669(window);
        var _22 = new _668(window);
        var _8 = new _630(window, Math, JSON);
        var _227 = new _624(_14, _8);
        var _17 = new _665(_8);
        var _197 = new _663(_14, _369, _371);
        var _259 = new _654(window, _116, _22, _8, _17);
        var _127 = typeof _651 === "function" ? new _651(window, _14, _116, _22, _8, _227, _17) : { _39: function () {}, _60: function () {}, _340: function () {}, _876: function () {}, _342: function () {} };
        var _346 = new _647(_14);
        var _186 = new _644(window, _14, _116, _8, _17, _197);
        window.mouseflow = new _643(window, Math, _14, _22, _8, _227, _17, _197, _259, _127, _346, _186);
    })();
}
