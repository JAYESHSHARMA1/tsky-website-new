import*as e from"@wordpress/interactivity";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const n=(l={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},c={},t.d(c,l),c),o=["a[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];var l,c;document.addEventListener("click",(()=>{}));const{state:u,actions:s}=(0,n.store)("core/navigation",{state:{get roleAttribute(){return"overlay"===(0,n.getContext)().type&&u.isMenuOpen?"dialog":null},get ariaModal(){return"overlay"===(0,n.getContext)().type&&u.isMenuOpen?"true":null},get ariaLabel(){const e=(0,n.getContext)();return"overlay"===e.type&&u.isMenuOpen?e.ariaLabel:null},get isMenuOpen(){return Object.values(u.menuOpenedBy).filter(Boolean).length>0},get menuOpenedBy(){const e=(0,n.getContext)();return"overlay"===e.type?e.overlayOpenedBy:e.submenuOpenedBy}},actions:{openMenuOnHover(){const{type:e,overlayOpenedBy:t}=(0,n.getContext)();"submenu"===e&&0===Object.values(t||{}).filter(Boolean).length&&s.openMenu("hover")},closeMenuOnHover(){const{type:e,overlayOpenedBy:t}=(0,n.getContext)();"submenu"===e&&0===Object.values(t||{}).filter(Boolean).length&&s.closeMenu("hover")},openMenuOnClick(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();e.previousFocus=t,s.openMenu("click")},closeMenuOnClick(){s.closeMenu("click"),s.closeMenu("focus")},openMenuOnFocus(){s.openMenu("focus")},toggleMenuOnClick(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();window.document.activeElement!==t&&t.focus();const{menuOpenedBy:o}=u;o.click||o.focus?(s.closeMenu("click"),s.closeMenu("focus")):(e.previousFocus=t,s.openMenu("click"))},handleMenuKeydown(e){const{type:t,firstFocusableElement:o,lastFocusableElement:l}=(0,n.getContext)();if(u.menuOpenedBy.click){if("Escape"===e?.key)return s.closeMenu("click"),void s.closeMenu("focus");"overlay"===t&&"Tab"===e.key&&(e.shiftKey&&window.document.activeElement===o?(e.preventDefault(),l.focus()):e.shiftKey||window.document.activeElement!==l||(e.preventDefault(),o.focus()))}},handleMenuFocusout(e){const{modal:t,type:o}=(0,n.getContext)();(null===e.relatedTarget||!t?.contains(e.relatedTarget)&&e.target!==window.document.activeElement&&"submenu"===o)&&(s.closeMenu("click"),s.closeMenu("focus"))},openMenu(e="click"){const{type:t}=(0,n.getContext)();u.menuOpenedBy[e]=!0,"overlay"===t&&document.documentElement.classList.add("has-modal-open")},closeMenu(e="click"){const t=(0,n.getContext)();u.menuOpenedBy[e]=!1,u.isMenuOpen||(t.modal?.contains(window.document.activeElement)&&t.previousFocus?.focus(),t.modal=null,t.previousFocus=null,"overlay"===t.type&&document.documentElement.classList.remove("has-modal-open"))}},callbacks:{initMenu(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();if(u.isMenuOpen){const n=t.querySelectorAll(o);e.modal=t,e.firstFocusableElement=n[0],e.lastFocusableElement=n[n.length-1]}},focusFirstElement(){const{ref:e}=(0,n.getElement)();if(u.isMenuOpen){const t=e.querySelectorAll(o);t?.[0]?.focus()}}}},{lock:!0});
//# sourceMappingURL=view.min.js.map