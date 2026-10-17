import{$r as wd,Ar as sC,Bn as iv,Bt as Zp,E as HG,Et as Vt,F as Iv,Ft as Xg,Gn as ke$1,Ir as tM,Kr as vG,L as Je,Mn as hb,Nn as he$1,Nr as sv,Or as rr,Pr as tC,Qn as li,Qr as wT,Rr as to,Vn as jG,Wt as _d,Xn as le$1,Yr as vt,Yt as ai,Zr as wS,_n as et,_t as TS,ai as y,an as cC,b as Ed,bt as Uv,cn as ci,cr as ne,ct as Qg,dn as dC,et as Oe,gn as eo,i as A,ii as xt,in as bv,j as IT,jn as ha,kn as h,kr as rv,kt as Wg,li as yt,lr as ni,mr as or,ni as xa,nt as PG,oi as yG,on as ce$1,or as nb,ot as QS,p as Dd,pr as oM,q as NS,qr as vb,rn as bs,rr as mf,si as yS,sn as cf,ti as xS,tr as mC,ui as yv,wr as qp,xt as V3}from"./chunk-DWrB_E-l.js";import"./chunk-DrDN1XcZ.js";import{O as Nt,S as w,a as mt,i as Yt,o as G,x as u}from"./main-JLPKH2VF.js";import{t as Qt}from"./chunk-BNyKl17w.js";import{n as Z,t as L}from"./chunk-dQcyj0wY.js";import{a as Qt$1,c as Xt$1,d as qt,i as Kt$1,l as Yt$1,n as Gt,o as Vt$1,r as Jt$1,s as Wt,t as $t,u as Zt$1}from"./chunk-BmZIwqAU.js";import{n as re$1,t as ci$1}from"./chunk-CMTZi5DL.js";import{t as m}from"./chunk-CDaO0mSq.js";import{n as r}from"./chunk-B0W-zPNV.js";var re=[`button`];var le=[`*`];function se(n,o){if(n&1&&(ha(0,`div`,2),Xg(1,`mat-pseudo-checkbox`,6),Dd()),n&2){let t=wS();ni(),Qg(`disabled`,t.disabled)}}var Kt=new y(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Zt=new y(`MatButtonToggleGroup`);var ce={provide:G,useExisting:bs(()=>j),multi:!0};var D=class{source;value;constructor(o,t){this.source=o,this.value=t}};var j=(()=>{class n{_changeDetector=h(Uv);_dir=h(oM,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=h(mf).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new ke$1;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new ke$1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=h(Kt,{optional:!0});this.appearance=t&&t.appearance?t.appearance:`standard`,this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new u(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||nb(t))return;let e=t.target.id,l=this._buttonToggles.toArray().findIndex(k=>k.buttonId===e),u=null;switch(t.keyCode){case 32:case 13:u=this._buttonToggles.get(l)||null;break;case 38:u=this._getNextButton(l,-1);break;case 37:u=this._getNextButton(l,this.dir===`ltr`?-1:1);break;case 40:u=this._getNextButton(l,1);break;case 39:u=this._getNextButton(l,this.dir===`ltr`?1:-1);break;default:return}u&&(t.preventDefault(),u._onButtonClick(),u.focus())}_emitChangeEvent(t){let a=new D(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,e=!1,l=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):l=!0,l?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}}_getNextButton(t,a){let e=this._buttonToggles;for(let l=1;l<=e.length;l++){let u=(t+a*l+e.length)%e.length,k=e.get(u);if(k&&!k.disabled)return k}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let a=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(e=>this._selectValue(e,a))):(this._clearSelection(),this._selectValue(t,a)),!this.multiple&&a.every(e=>e.tabIndex===-1)){for(let e of a)if(!e.disabled){e.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,a){for(let e of a)if(e.value===t){e.checked=!0,this._selectionModel.select(e),this.multiple||(e.tabIndex=0);break}}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static ɵfac=function(a){return new(a||n)};static ɵdir=Je({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(a,e,l){if(a&1&&iv(l,R,5),a&2){let u;TS(u=NS())&&(e._buttonToggles=u)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(a,e){a&1&&rv(`keydown`,function(u){return e._keydown(u)}),a&2&&(rr(`role`,e.multiple?`group`:`radiogroup`)(`aria-disabled`,e.disabled),vt(`mat-button-toggle-vertical`,e.vertical)(`mat-button-toggle-group-appearance-standard`,e.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,yt],value:`value`,multiple:[2,`multiple`,`multiple`,yt],disabled:[2,`disabled`,`disabled`,yt],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,yt],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,yt],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,yt]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[Iv([ce,{provide:Zt,useExisting:n}])]})}return n})();var R=(()=>{class n{_changeDetectorRef=h(Uv);_elementRef=h(le$1);_focusMonitor=h(cf);_idGenerator=h(mf);_animationDisabled=eo();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new ke$1;constructor(){h(Vt).load(hb);let t=h(Zt,{optional:!0}),a=h(new xa(`tabindex`),{optional:!0})||``,e=h(Kt,{optional:!0});this._tabIndex=xt(parseInt(a)||0),this.buttonToggleGroup=t,this._appearance=e&&e.appearance?e.appearance:`standard`,this._disabledInteractive=e?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new D(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||n)};static ɵcmp=Oe({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(a,e){if(a&1&&sv(re,5),a&2){let l;TS(l=NS())&&(e._buttonElement=l.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,e){a&1&&rv(`focus`,function(){return e.focus()}),a&2&&(rr(`aria-label`,null)(`aria-labelledby`,null)(`id`,e.id)(`name`,null),vt(`mat-button-toggle-standalone`,!e.buttonToggleGroup)(`mat-button-toggle-checked`,e.checked)(`mat-button-toggle-disabled`,e.disabled)(`mat-button-toggle-disabled-interactive`,e.disabledInteractive)(`mat-button-toggle-appearance-standard`,e.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,yt],appearance:`appearance`,checked:[2,`checked`,`checked`,yt],disabled:[2,`disabled`,`disabled`,yt],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,yt]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:le,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,e){if(a&1&&(or(),ha(0,`button`,1,0),rv(`click`,function(){return e._onButtonClick()}),ai(2,se,2,1,`div`,2),ha(3,`span`,3),et(4),Dd()(),Xg(5,`span`,4)(6,`span`,5)),a&2){let l=xS(1);Qg(`id`,e.buttonId)(`disabled`,e.disabled&&!e.disabledInteractive||null),rr(`role`,e.isSingleSelector()?`radio`:`button`)(`tabindex`,e.disabled&&!e.disabledInteractive?-1:e.tabIndex)(`aria-pressed`,e.isSingleSelector()?null:e.checked)(`aria-checked`,e.isSingleSelector()?e.checked:null)(`name`,e._getButtonName())(`aria-label`,e.ariaLabel)(`aria-labelledby`,e.ariaLabelledby)(`aria-disabled`,e.disabled&&e.disabledInteractive?`true`:null),ni(2),ci(e.buttonToggleGroup&&(!e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideSingleSelectionIndicator||e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),ni(4),Qg(`matRippleTrigger`,l)(`matRippleDisabled`,e.disableRipple||e.disabled)}},dependencies:[V3,w],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})}return n})();var Jt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=he$1({type:n});static ɵinj=ce$1({imports:[vb,R,to]})}return n})();var ue=n=>[`/admin/parametros`,n];function ge(n,o){n&1&&Xg(0,`mat-progress-bar`,11)}function me(n,o){if(n&1){let t=yS();ha(0,`div`,12)(1,`mat-icon`),QS(2,`cloud_off`),Dd(),ha(3,`p`),QS(4),Dd(),ha(5,`button`,13),rv(`click`,function(){qp(t);return Zp(wS().carregar())}),QS(6,`Tentar novamente`),Dd()()}if(n&2){let t=wS();ni(4),yv(t.erro())}}function pe(n,o){n&1&&(ha(0,`th`,29),QS(1,`Chave`),Dd())}function be(n,o){if(n&1&&(ha(0,`td`,30)(1,`span`,31),QS(2),Dd()()),n&2){let t=o.$implicit;ni(2),yv(t.chave)}}function he(n,o){n&1&&(ha(0,`th`,32),QS(1,`Valor`),Dd())}function fe(n,o){if(n&1&&(ha(0,`td`,33),QS(1),cC(2,`number`),Dd()),n&2){let t=o.$implicit;ni(),yv(dC(2,1,t.valor,`1.2-2`))}}function _e(n,o){n&1&&(ha(0,`th`,29),QS(1,`Vigência`),Dd())}function ve(n,o){if(n&1&&(ha(0,`td`,30),QS(1),cC(2,`date`),cC(3,`date`),Dd()),n&2){let t=o.$implicit;ni(),bv(` `,dC(2,2,t.vigenciaInicio,`dd/MM/yyyy`),` a `,dC(3,5,t.vigenciaFim,`dd/MM/yyyy`),` `)}}function Se(n,o){n&1&&(ha(0,`th`,29),QS(1,`Situação`),Dd())}function ye(n,o){if(n&1&&(ha(0,`td`,30)(1,`span`),QS(2),Dd()()),n&2){let t=o.$implicit;ni(),li(tC(`chip `,t.rotulo.cor)),ni(),yv(t.rotulo.texto)}}function xe(n,o){n&1&&Xg(0,`th`,34)}function ke(n,o){if(n&1){let t=yS();ha(0,`td`,35)(1,`a`,36)(2,`mat-icon`),QS(3,`edit`),Dd()(),ha(4,`button`,37),rv(`click`,function(){let e=qp(t).$implicit;return Zp(wS(2).excluir(e))}),ha(5,`mat-icon`),QS(6,`delete_outline`),Dd()()()}if(n&2){let t=o.$implicit;ni(),Qg(`routerLink`,sC(1,ue,t.id))}}function Te(n,o){n&1&&Xg(0,`tr`,38)}function Ne(n,o){n&1&&Xg(0,`tr`,39)}function Ce(n,o){n&1&&QS(0,` Nenhum parâmetro corresponde aos filtros. `)}function Me(n,o){n&1&&QS(0,` Nenhum parâmetro cadastrado ainda. `)}function Ie(n,o){if(n&1&&(ha(0,`div`,12)(1,`mat-icon`),QS(2,`tune`),Dd(),ha(3,`p`),ai(4,Ce,1,0)(5,Me,1,0),Dd()()),n&2){let t=wS(2);ni(4),ci(t.parametros().length?4:5)}}function Ee(n,o){if(n&1&&(ha(0,`div`,14)(1,`table`,15),Ed(2,16),Wg(3,pe,2,0,`th`,17)(4,be,3,1,`td`,18),_d(),Ed(5,19),Wg(6,he,2,0,`th`,20)(7,fe,3,4,`td`,21),_d(),Ed(8,22),Wg(9,_e,2,0,`th`,17)(10,ve,4,8,`td`,18),_d(),Ed(11,23),Wg(12,Se,2,0,`th`,17)(13,ye,3,4,`td`,18),_d(),Ed(14,24),Wg(15,xe,1,0,`th`,25)(16,ke,7,3,`td`,26),_d(),Wg(17,Te,1,0,`tr`,27)(18,Ne,1,0,`tr`,28),Dd()(),ai(19,Ie,6,1,`div`,12)),n&2){let t=wS();ni(),Qg(`dataSource`,t.filtrados()),ni(16),Qg(`matHeaderRowDef`,t.colunas),ni(),Qg(`matRowDefColumns`,t.colunas),ni(),ci(!t.carregando()&&t.filtrados().length===0?19:-1)}}var Xt=class n{adminService=h(m);dialog=h(re$1);snack=h(Qt);colunas=[`chave`,`valor`,`vigencia`,`situacao`,`acoes`];parametros=xt([]);carregando=xt(!0);erro=xt(``);busca=xt(``);situacao=xt(`TODOS`);rotulosSituacao={VIGENTE:{texto:`Vigente`,cor:`green`},FUTURO:{texto:`Futuro`,cor:`blue`},ENCERRADO:{texto:`Encerrado`,cor:``}};contagem=mC(()=>{let o={TODOS:0,VIGENTE:0,FUTURO:0,ENCERRADO:0};for(let t of this.parametros())o.TODOS++,o[r(t)]++;return o});filtrados=mC(()=>{let o=this.busca().trim().toLowerCase(),t=this.situacao();return this.parametros().map(a=>{let e=r(a);return ne(A({},a),{situacao:e,rotulo:this.rotulosSituacao[e]})}).filter(a=>t===`TODOS`||a.situacao===t).filter(a=>!o||a.chave.toLowerCase().includes(o))});ngOnInit(){this.carregar()}carregar(){this.carregando.set(!0),this.erro.set(``),this.adminService.listarParametros().subscribe({next:o=>{this.parametros.set(o),this.carregando.set(!1)},error:o=>{this.erro.set(HG(o,`Erro ao carregar os parâmetros.`)),this.carregando.set(!1)}})}filtrar(o){this.busca.set(o.target.value)}excluir(o){ci$1(this.dialog,{titulo:`Excluir parâmetro`,mensagem:`Deseja excluir o par\xE2metro ${o.chave} (vig\xEAncia a partir de ${we(o.vigenciaInicio)})?`}).subscribe(t=>{!t||o.id==null||this.adminService.excluirParametro(o.id).subscribe({next:()=>{this.parametros.update(a=>a.filter(e=>e.id!==o.id)),this.avisar(`Parâmetro excluído.`)},error:a=>this.avisar(HG(a,`Erro ao excluir o parâmetro.`))})})}avisar(o){this.snack.open(o,`Ok`,{duration:3e3,verticalPosition:`top`})}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe({type:n,selectors:[[`app-parametro-list`]],decls:28,vars:7,consts:[[1,`page-header`],[`mat-flat-button`,``,`routerLink`,`/admin/parametros/novo`,1,`btn-primario`],[1,`fc-card`],[1,`toolbar-filtros`],[1,`busca`],[`placeholder`,`Buscar por chave (ex.: LIMITE_MEI)`,`aria-label`,`Buscar por chave`,3,`input`],[`aria-label`,`Filtrar por situação`,`hideSingleSelectionIndicator`,``,3,`change`,`value`],[`value`,`TODOS`],[`value`,`VIGENTE`],[`value`,`FUTURO`],[`value`,`ENCERRADO`],[`mode`,`indeterminate`],[1,`estado-vazio`],[`mat-stroked-button`,``,3,`click`],[1,`table-wrap`],[`mat-table`,``,3,`dataSource`],[`matColumnDef`,`chave`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`valor`],[`mat-header-cell`,``,`class`,`col-num`,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`col-num`,4,`matCellDef`],[`matColumnDef`,`vigencia`],[`matColumnDef`,`situacao`],[`matColumnDef`,`acoes`],[`mat-header-cell`,``,`class`,`col-acoes`,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`col-acoes`,4,`matCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`mat-header-cell`,``],[`mat-cell`,``],[1,`chave`],[`mat-header-cell`,``,1,`col-num`],[`mat-cell`,``,1,`col-num`],[`mat-header-cell`,``,1,`col-acoes`],[`mat-cell`,``,1,`col-acoes`],[`mat-icon-button`,``,`matTooltip`,`Editar`,3,`routerLink`],[`mat-icon-button`,``,`matTooltip`,`Excluir`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(t,a){t&1&&(ha(0,`div`,0)(1,`div`)(2,`h1`),QS(3,`Parâmetros fiscais`),Dd(),ha(4,`p`),QS(5,`Valores de referência usados pelo sistema (limites, alíquotas, DAS), com período de vigência.`),Dd()(),ha(6,`a`,1)(7,`mat-icon`),QS(8,`add`),Dd(),QS(9,` Novo parâmetro `),Dd()(),ha(10,`section`,2)(11,`div`,3)(12,`label`,4)(13,`mat-icon`),QS(14,`search`),Dd(),ha(15,`input`,5),rv(`input`,function(l){return a.filtrar(l)}),Dd()(),ha(16,`mat-button-toggle-group`,6),rv(`change`,function(l){return a.situacao.set(l.value)}),ha(17,`mat-button-toggle`,7),QS(18),Dd(),ha(19,`mat-button-toggle`,8),QS(20),Dd(),ha(21,`mat-button-toggle`,9),QS(22),Dd(),ha(23,`mat-button-toggle`,10),QS(24),Dd()()(),ai(25,ge,1,0,`mat-progress-bar`,11),ai(26,me,7,1,`div`,12)(27,Ee,20,4),Dd()),t&2&&(ni(16),Qg(`value`,a.situacao()),ni(2),wd(`Todos (`,a.contagem().TODOS,`)`),ni(2),wd(`Vigentes (`,a.contagem().VIGENTE,`)`),ni(2),wd(`Futuros (`,a.contagem().FUTURO,`)`),ni(2),wd(`Encerrados (`,a.contagem().ENCERRADO,`)`),ni(),ci(a.carregando()?25:-1),ni(),ci(a.erro()?26:27))},dependencies:[Nt,Jt$1,Vt$1,Wt,Xt$1,$t,Qt$1,Gt,qt,Kt$1,Yt$1,Zt$1,yG,vG,tM,Jt,j,R,jG,PG,Yt,mt,Z,L,IT,wT],styles:[`.chave[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:13px;font-weight:500}.toolbar-filtros[_ngcontent-%COMP%]{margin-bottom:16px}`]})};function we(n){let[o,t,a]=n.split(`-`);return`${a}/${t}/${o}`}export{Xt as ParametroList};