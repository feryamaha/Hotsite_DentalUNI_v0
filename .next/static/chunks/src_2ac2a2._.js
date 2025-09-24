(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_2ac2a2._.js", {

"[project]/src/components/ui/accordion-primitive.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Content": (()=>Content),
    "Header": (()=>Header),
    "Item": (()=>Item),
    "Root": (()=>Root),
    "Trigger": (()=>Trigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature();
"use client";
;
const AccordionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
function Root({ children }) {
    _s();
    const [openItems, setOpenItems] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(new Set());
    const toggleItem = (value)=>{
        setOpenItems((prev)=>{
            const next = new Set(prev);
            if (next.has(value)) next.delete(value);
            else next.add(value);
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContext.Provider, {
        value: {
            openItems,
            toggleItem
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Root, "6wUNhupnqjb8VYcB/f/pzCnGmHY=");
_c = Root;
const Header = ({ className, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
_c1 = Header;
const Item = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, children }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this));
_c3 = Item;
Item.displayName = "Item";
const Trigger = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = _s1(({ className, children, value = "item" }, ref)=>{
    _s1();
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(AccordionContext);
    const open = !!ctx?.openItems.has(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: className,
        "data-state": open ? "open" : "closed",
        onClick: ()=>ctx?.toggleItem(value),
        type: "button",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
}, "/dMy7t63NXD4eYACoT93CePwGrg=")), "/dMy7t63NXD4eYACoT93CePwGrg=");
_c5 = Trigger;
Trigger.displayName = "Trigger";
const Content = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = _s2(({ className, children, value = "item" }, ref)=>{
    _s2();
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(AccordionContext);
    const open = !!ctx?.openItems.has(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        "data-state": open ? "open" : "closed",
        children: open ? children : null
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 66,
        columnNumber: 7
    }, this);
}, "/dMy7t63NXD4eYACoT93CePwGrg=")), "/dMy7t63NXD4eYACoT93CePwGrg=");
_c7 = Content;
Content.displayName = "Content";
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_refresh__.register(_c, "Root");
__turbopack_refresh__.register(_c1, "Header");
__turbopack_refresh__.register(_c2, "Item$React.forwardRef");
__turbopack_refresh__.register(_c3, "Item");
__turbopack_refresh__.register(_c4, "Trigger$React.forwardRef");
__turbopack_refresh__.register(_c5, "Trigger");
__turbopack_refresh__.register(_c6, "Content$React.forwardRef");
__turbopack_refresh__.register(_c7, "Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/accordion-primitive.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
_c1 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Header, {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger, {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex  items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AccordionTrigger;
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger.displayName;
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c5 = AccordionContent;
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "AccordionItem$React.forwardRef");
__turbopack_refresh__.register(_c1, "AccordionItem");
__turbopack_refresh__.register(_c2, "AccordionTrigger$React.forwardRef");
__turbopack_refresh__.register(_c3, "AccordionTrigger");
__turbopack_refresh__.register(_c4, "AccordionContent$React.forwardRef");
__turbopack_refresh__.register(_c5, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHome/Discover/AccordionFAQ.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// AccordionFAQ.tsx: Componente básico de Accordion.
// Utilizado na versão desktop da section Discover e estendido no AccordionFaqMobile para a versão mobile.
__turbopack_esm__({
    "AccordionFAQ": (()=>AccordionFAQ)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-client] (ecmascript)");
;
;
;
;
function AccordionFAQ({ data, onValueChange, defaultValue, mobileContentData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
        type: "single",
        collapsible: true,
        className: "max-w-[628px]  ",
        onValueChange: onValueChange,
        defaultValue: defaultValue,
        children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                value: `item-${index + 1}`,
                className: "py-[16px] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                        className: "TypographyPlato20 pt-0 pb-[8px] hover:text-redSTD w-full flex gap-[12px] ",
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                        className: "w-full flex flex-col justify-start items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "TypographyPinter16w400",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            mobileContentData && mobileContentData[index] && // A estrutura interna deste bloco é idêntica à do conteúdo desktop em SectionDiscover.tsx
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[278px] mb-[24px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: mobileContentData[index].imageSrc,
                                            alt: "Discover Image",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            mobileContentData[index].items.map((discoverItem, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${index === 1 ? "w-full" : "max-w-[390px] h-[20px]"} flex items-start`,
                                                            children: [
                                                                discoverItem.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${discoverItem.icon ? "mr-4" : "mr-0"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                        className: "",
                                                                        name: discoverItem.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                                        lineNumber: 86,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "TypographyPinter16w500g950",
                                                                    children: discoverItem.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 25
                                                        }, this),
                                                        itemIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "IconArrowFAQ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, itemIndex, true, {
                                                    fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 23
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "w-full TypographyPinter16w400 pt-4",
                                                children: mobileContentData[index].finalDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            item.buttonText && item.buttonHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: item.buttonHref,
                                variant: "btnLink",
                                className: "textbtnLink hover:text-red700 mt-[16px] p-0 ",
                                children: [
                                    item.buttonText,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "IconArrowright",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = AccordionFAQ;
var _c;
__turbopack_refresh__.register(_c, "AccordionFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHome/Questions/questionsFaqData.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"question\":\"Como faço para encontrar um dentista na rede credenciada?\",\"answer\":\"Answer 1 for Questions Section.\"},{\"question\":\"Quais procedimentos são cobertos pelo plano Dental Uni?\",\"answer\":\"Answer 2 for Questions Section.\"},{\"question\":\"Quais são as principais áreas de cobertura dos nossos planos odontológicos?\",\"answer\":\"Answer 3 for Questions Section.\"},{\"question\":\"Posso adicionar dependentes ao meu plano Dental Uni?\",\"answer\":\"Answer 4 for Questions Section.\"},{\"question\":\"O que devo fazer se tiver problemas com a fatura ou pagamentos do meu plano Dental Uni?\",\"answer\":\"Answer 5 for Questions Section.\"}]"));}}),
"[project]/src/components/PageHome/Questions/SectionQuestions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SectionQuestions": (()=>SectionQuestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$AccordionFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/AccordionFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Questions$2f$questionsFaqData$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/Questions/questionsFaqData.json (json)");
;
;
;
;
;
;
function SectionQuestions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "Section-questions",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mx-auto flex flex-col gap-[32px] @tablet:flex-row justify-between py-[120px] ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " flex flex-col items-start max-w-[388px]  ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "w-full pb-4 TypographyH1mobile @mobile:TypographyH1",
                                            children: "Perguntas frequentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                            lineNumber: 16,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "TypographyPinter16w400 pr-6",
                                            children: "Confira ao lado as respostas às dúvidas mais comuns. Se tiver outras perguntas, utilize a central de ajuda ou o autoatendimento."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                            lineNumber: 19,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full @mobile:max-w-max flex flex-col items-start @mobile:items-center @laptop:flex-row gap-8 mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "https://site.dentaluni.com.br/ajuda",
                                            variant: "btnSecondary",
                                            className: "hover:bg-red700 w-full",
                                            children: "Central de ajuda"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "https://dentaluni.com.br/autoatendimento",
                                            target: "_blank",
                                            variant: "btnLink",
                                            className: "textbtnLink hover:text-red700 w-full",
                                            children: [
                                                "Autoatendimento",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "IconArrowright",
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[32px] items-start ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$AccordionFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionFAQ"], {
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Questions$2f$questionsFaqData$2e$json__$28$json$29$__["default"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    href: "https://site.dentaluni.com.br/ajuda",
                                    target: "_blank",
                                    variant: "btnLink",
                                    className: "textbtnLink hover:text-red700",
                                    children: [
                                        "Ver todas as perguntas",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "IconArrowright",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PageHome/Questions/SectionQuestions.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = SectionQuestions;
var _c;
__turbopack_refresh__.register(_c, "SectionQuestions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/api/schemas/formHelpSchema.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
//src/api/schemas/formHelpSchemas.ts 
__turbopack_esm__({
    "formHelpSchema": (()=>formHelpSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_import__("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const formHelpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    userName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{10,11}$/, "Telefone inválido (10 ou 11 dígitos)").min(1, "Telefone é obrigatório"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/FloatingLabelInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FloatingLabelInput": (()=>FloatingLabelInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
function FloatingLabelInput({ label, name, register, errors, validation, value, onChange, type = "text", className = "", placeholder = "", onBlur, onFocus, maxLength, readOnly, disabled, control, onlyLetters = false, onlyNumbers = false, allowAllCharacters = false, mask }) {
    _s();
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // função auxiliar para aplicar máscaras
    const applyMask = (value)=>{
        if (!mask) return value;
        const digits = value.replace(/\D/g, "");
        switch(mask){
            case "cpf":
                return digits.replace(/^(\d{3})(\d)/, "$1.$2").replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1-$2").substring(0, 14);
            case "cnpj":
                return digits.replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2").substring(0, 18);
            case "phone":
                return digits.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d{5})(\d{4})$/, "$1-$2").substring(0, 15);
            default:
                return value;
        }
    };
    // Se tem register, use o padrão React Hook Form
    const registerProps = register && validation ? register(name, validation) : register ? register(name) : null;
    let watchedValue = "";
    try {
        if (control && name) {
            watchedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
                control,
                name
            }) || "";
        }
    } catch  {
        watchedValue = "";
    }
    const [hasContent, setHasContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingLabelInput.useEffect": ()=>{
            const currentVal = value || watchedValue || "";
            setHasContent(currentVal.length > 0);
        }
    }["FloatingLabelInput.useEffect"], [
        value,
        watchedValue
    ]);
    const currentValue = value || watchedValue || "";
    const hasValue = currentValue && String(currentValue).length > 0 || hasContent;
    const shouldShowLabel = isFocused || hasValue;
    const handleFocus = (e)=>{
        setIsFocused(true);
        setHasContent((e.target.value || "").length > 0);
        if (onFocus) onFocus(e);
    };
    const handleBlur = (e)=>{
        setIsFocused(false);
        setHasContent((e.target.value || "").length > 0);
        if (onBlur) onBlur(e);
    };
    const handleChange = (e)=>{
        let val = e.target.value;
        // aplica máscara antes de repassar
        if (mask) {
            val = applyMask(val);
            e.target.value = val;
        }
        let isValid = true;
        if (!allowAllCharacters) {
            if (onlyLetters) {
                isValid = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(val);
            } else if (onlyNumbers) {
                isValid = /^[0-9]*$/.test(val.replace(/\D/g, ""));
            }
            if (!isValid) return;
        }
        if (onChange) onChange(e);
    };
    const controlKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab"
    ];
    const handleKeyDown = (e)=>{
        if (controlKeys.includes(e.key)) return;
        if (!allowAllCharacters) {
            if (onlyLetters && !/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)) e.preventDefault();
            else if (onlyNumbers && !/[0-9]/.test(e.key)) e.preventDefault();
        }
    };
    const getErrorMessage = ()=>{
        // Se não existe errors ou o name não foi informado, nada a mostrar
        if (!errors || !name) return null;
        // Caso o "name" tenha pontos (campo aninhado), quebra em partes
        // Ex: "dependente.cpf" → ["dependente", "cpf"]
        const nameParts = name.split(".");
        let currentError = errors;
        // Navega recursivamente no objeto de errors até chegar no campo alvo
        for (const part of nameParts){
            if (currentError && typeof currentError === "object" && part in currentError) {
                currentError = currentError[part];
            } else {
                // Se em algum nível não encontrar a chave, não há erro
                return null;
            }
        }
        // Se não existe erro no campo, retorna nulo
        if (!currentError) return null;
        // Caso 1: quando o erro foi passado no formato simples { campo: "mensagem" }
        if (typeof currentError === "string") {
            return currentError;
        }
        // Caso 2: quando é o formato do React Hook Form ({ message, type, ... })
        if (typeof currentError === "object" && currentError !== null) {
            if (typeof currentError.message === "string") {
                return currentError.message;
            }
            if (currentError.type === "required") {
                return `${label.replace("*", "").trim()} é obrigatório`;
            }
        }
        // Se não identificou mensagem, retorna nulo
        return null;
    };
    const errorMessage = getErrorMessage();
    const hasError = !!errorMessage;
    let inputType = type;
    if (onlyNumbers && type === "text") {
        inputType = "tel";
    }
    const baseProps = {
        type: inputType,
        name,
        onFocus: handleFocus,
        onBlur: handleBlur,
        placeholder: isFocused ? placeholder : "",
        maxLength,
        readOnly,
        disabled,
        onKeyDown: handleKeyDown,
        className: `w-full h-12 border rounded-lg px-4 pt-2 pb-2 transition-colors ${hasError ? "border-red-500 ring-red-400 focus:outline-none focus:ring-1 focus:border-red-500" : "border-secondary-100 ring-gray950 focus:outline-none focus:ring-1 focus:border-gray-950"} ${readOnly ? "cursor-default" : ""} hover:border-gray-950`
    };
    if (registerProps) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...baseProps,
                    ...registerProps,
                    value: mask ? applyMask(currentValue) : currentValue,
                    onChange: (e)=>{
                        handleChange(e);
                        if (registerProps.onChange) registerProps.onChange(e);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: `absolute left-4 pointer-events-none transition-all duration-200 font-normal ${shouldShowLabel ? `top-[-10px] text-sm bg-white px-2 rounded-lg ${hasError ? "text-red-500" : "text-secondary-500"}` : `top-6 -translate-y-1/2 text-base ${hasError ? "text-red-500" : "text-gray500"}`}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                hasError && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...baseProps,
                value: mask ? applyMask(currentValue) : currentValue,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: `absolute left-4 pointer-events-none transition-all duration-200 font-normal ${shouldShowLabel ? `top-[-8px] text-sm bg-white px-2 ${hasError ? "text-red500" : "text-secondary-500"}` : `top-1/2 -translate-y-1/2 text-base ${hasError ? "text-red-500" : "text-secondary-500"}`}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            hasError && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm mt-1",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/FloatingLabelInput.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
_s(FloatingLabelInput, "Ke3vjpE2Th4vD5RgwfpRaa5p2oM=");
_c = FloatingLabelInput;
var _c;
__turbopack_refresh__.register(_c, "FloatingLabelInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHelp/FormHelp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/PageHelp/FormHelp.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$schemas$2f$formHelpSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/api/schemas/formHelpSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingLabelInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/FloatingLabelInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const FormHelp = ()=>{
    _s();
    const { register, formState: { errors, isValid }, control, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$schemas$2f$formHelpSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formHelpSchema"]),
        mode: "onChange"
    });
    const getButtonClass = ()=>{
        return isValid ? "w-full btnFormHover cursor-pointer focus:outline-none focus:ring-0" : "w-full btnForm cursor-pointer focus:outline-none focus:ring-0";
    };
    // Função para lidar com a submissão - opcional, pois já estamos usando action
    const onSubmit = (data)=>{
        console.log("Form data:", data);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: "https://formsubmit.co/feryamaha@hotmail.com",
        method: "POST",
        className: "w-full @mobile:w-[520px] h-max bg-white rounded-[16px] border p-[32px]",
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "_next",
                value: "https://seusite.com/obrigado"
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "_captcha",
                value: "false"
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "_subject",
                value: "Nova mensagem do formulário de ajuda"
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "TypographyPlato24 mb-[24px]",
                children: "Preencha o formulário"
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-[32px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[16px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "TypographyPlato20",
                                    children: "Sobre você:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingLabelInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingLabelInput"], {
                                label: "Nome completo",
                                name: "name",
                                register: register,
                                errors: errors,
                                control: control,
                                onlyLetters: true,
                                validation: {
                                    required: "Nome completo é obrigatório",
                                    pattern: {
                                        value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/,
                                        message: "Nome deve conter apenas letras"
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingLabelInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingLabelInput"], {
                                label: "E-mail",
                                name: "email",
                                type: "email",
                                register: register,
                                errors: errors,
                                control: control,
                                validation: {
                                    required: "E-mail é obrigatório",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "E-mail inválido"
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FloatingLabelInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingLabelInput"], {
                                label: "Telefone",
                                name: "phone",
                                type: "tel",
                                register: register,
                                errors: errors,
                                control: control,
                                onlyNumbers: true,
                                validation: {
                                    required: "Telefone é obrigatório",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Telefone deve conter apenas números"
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[16px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "TypographyPlato20",
                                    children: "Sua mensagem:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ...register("message", {
                                            required: "Mensagem é obrigatória"
                                        }),
                                        name: "message",
                                        placeholder: "Digite sua mensagem",
                                        className: `w-full h-[94px] border rounded-lg p-4 ${errors.message ? "border-red-500 focus:outline-none focus:ring-2 focus:border-red-500" : "border-secondary-100 ring-gray950  focus:outline-none focus:ring-1 focus:border-gray-950"} hover:border-gray-950`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-1",
                                        children: errors.message.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "btnForm",
                            className: `${getButtonClass()} focus:outline-none focus:ring-0`,
                            type: "submit",
                            disabled: !isValid,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-full",
                                children: "Enviar mensagem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHelp/FormHelp.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(FormHelp, "V1eeZ5SzB/1XRHW+X+jT7PD9eeo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = FormHelp;
const __TURBOPACK__default__export__ = FormHelp;
var _c;
__turbopack_refresh__.register(_c, "FormHelp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHelp/Contact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Contact": (()=>Contact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$FormHelp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHelp/FormHelp.tsx [app-client] (ecmascript)");
;
;
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: " w-full h-[429px] bg-BgContactMobile @mobile:bg-BgContactTablet @laptop:bg-BgContact bg-cover mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    className: "mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full pt-[48px] @laptop:pt-[80px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "TypographyH1white max-w-[437px] pb-[16px]",
                                children: "Entre em contato"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[367px] TypographyPinter16white",
                                children: "Envie a sua mensagem ou entre em contato. Ficaremos felizes em te ajudar!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PageHelp/Contact.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-max relative pt-[400px] @mobile:pt-[480px] @tablet:pt-0 @tablet:mb-[120px] @laptop:mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-[32px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[508px] h-[204px] flex flex-col gap-[24px] ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[16px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "IconTelefone",
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400 mb-[8px]",
                                                        children: "Telefone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w500g950",
                                                        children: "(41) 3320-2929"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[16px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "IconEmail",
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400 mb-[8px]",
                                                        children: "E-mail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w500g950",
                                                        children: "sac@acp.org.br"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[16px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "IconLocation",
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400 mb-[8px] ",
                                                        children: "Endereço"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w500g950 w-[280px] @laptop:w-full  ",
                                                        children: "Rua Nevada, 670 - Londrina PR - CEP: 86.060-238"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHelp/Contact.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full @mobile:w-max absolute -top-[190px] @mobile:-top-[120px] @laptop:-top-[360px] right-0 @mobile:right-auto @tablet:right-[80px] px-[2px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$FormHelp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHelp/Contact.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHelp/Contact.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/Contact.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Contact;
var _c;
__turbopack_refresh__.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHelp/SliderNumber.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SliderNumber": (()=>SliderNumber),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
function SliderNumber({ initialValue = 3, onChange }) {
    _s();
    // Ajusta o valor inicial para não exceder o número de steps disponíveis
    const safeInitialValue = initialValue > 6 ? 6 : initialValue;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(safeInitialValue);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Agora padronizado para 6 steps em todas as resoluções
    const steps = 6;
    // Larguras e espaçamentos (responsivos para layout, mas não para número de steps)
    const desktopWidth = 412;
    const mobileWidth = 300;
    const width = isMobile ? mobileWidth : desktopWidth;
    const padding = 4;
    // Recalcula a distância entre os steps com base na largura e no número fixo de 6 steps
    const desktopStepDistance = (desktopWidth - 2 * padding) / (steps - 1);
    const mobileStepDistance = (mobileWidth - 2 * padding) / (steps - 1);
    const stepDistance = isMobile ? mobileStepDistance : desktopStepDistance;
    // Detecta se o dispositivo é móvel (abaixo de 639px conforme o breakpoint @mobile no tailwind.config.ts)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SliderNumber.useEffect": ()=>{
            const MOBILE_BREAKPOINT = 639; // Exatamente o mesmo valor do breakpoint @mobile no tailwind.config.ts
            const checkIsMobile = {
                "SliderNumber.useEffect.checkIsMobile": ()=>{
                    const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
                    setIsMobile(isMobileView);
                }
            }["SliderNumber.useEffect.checkIsMobile"];
            // Verifica inicialmente
            checkIsMobile();
            // Adiciona listener para mudanças de tamanho de tela
            window.addEventListener("resize", checkIsMobile);
            // Limpa o listener quando o componente é desmontado
            return ({
                "SliderNumber.useEffect": ()=>{
                    window.removeEventListener("resize", checkIsMobile);
                }
            })["SliderNumber.useEffect"];
        }
    }["SliderNumber.useEffect"], []);
    // Calcula a posição do centro do step selecionado
    const center = padding + (selected - 1) * stepDistance;
    // Calcula o percentual para o gradiente com ajustes específicos por step para alinhamento visual preciso
    const calculateFillPercentage = ()=>{
        // Cálculo base do percentual
        const basePercentage = center / width * 100;
        // Se for o último step, preenche 100%
        if (selected === steps) {
            return 100;
        }
        // Ajustes específicos para cada step para garantir o preenchimento visual correto
        const stepAdjustments = {
            1: 5,
            2: 2,
            3: 1,
            4: 0,
            5: -2,
            6: 0
        };
        // Aplica o ajuste específico para o step selecionado
        return basePercentage + (stepAdjustments[selected] || 0);
    };
    // Aplica o cálculo com ajustes específicos
    const fillToCenter = calculateFillPercentage();
    // Cores das classes
    const styleSliderColor = "#E7E7E7"; // cor de fundo padrão
    const styleSliderHoverColor = "#8A1724"; // cor de preenchimento (redSTD)
    // Notifica o componente pai sobre a mudança
    const handleSelect = (step)=>{
        setSelected(step);
        if (onChange) onChange(step);
    };
    // Calcula o step mais próximo com base na posição do mouse/toque
    const calculateStep = (clientX)=>{
        if (!sliderRef.current) return selected;
        const rect = sliderRef.current.getBoundingClientRect();
        const relativeX = clientX - rect.left - padding;
        const stepIndex = Math.round(relativeX / stepDistance) + 1;
        return Math.max(1, Math.min(steps, stepIndex));
    };
    // Inicia o arraste
    const handleStart = (e)=>{
        e.preventDefault();
        setIsDragging(true);
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const newStep = calculateStep(clientX);
        handleSelect(newStep);
    };
    // Atualiza durante o arraste
    const handleMove = (e)=>{
        if (!isDragging) return;
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const newStep = calculateStep(clientX);
        handleSelect(newStep);
    };
    // Finaliza o arraste
    const handleEnd = ()=>{
        setIsDragging(false);
    };
    // Adiciona e remove eventos globais de mouse/toque
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SliderNumber.useEffect": ()=>{
            if (isDragging) {
                window.addEventListener("mousemove", handleMove);
                window.addEventListener("mouseup", handleEnd);
                window.addEventListener("touchmove", handleMove);
                window.addEventListener("touchend", handleEnd);
            }
            return ({
                "SliderNumber.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMove);
                    window.removeEventListener("mouseup", handleEnd);
                    window.removeEventListener("touchmove", handleMove);
                    window.removeEventListener("touchend", handleEnd);
                }
            })["SliderNumber.useEffect"];
        }
    }["SliderNumber.useEffect"], [
        isDragging
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full pt-[2px] flex flex-col items-center overflow-x-auto scrollbar-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sliderRef,
                className: "styleSlider h-[16px] rounded-[8px] p-[4px] flex justify-between items-center cursor-pointer max-@mobile:w-[300px] @mobile:w-[412px]",
                style: {
                    background: `linear-gradient(to right, ${styleSliderHoverColor} ${fillToCenter}%, ${styleSliderColor} ${fillToCenter}%)`,
                    border: "1px solid #E7E7E7",
                    borderRadius: "17.5px",
                    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.16) inset, 0px 2px 4px 2px rgba(0, 0, 0, 0.06) inset",
                    transition: "background 0.2s"
                },
                children: Array.from({
                    length: steps
                }).map((_, idx)=>{
                    const step = idx + 1;
                    // Wrapper para aumentar área clicável
                    if (step === selected) {
                        return(// Wrapper com área clicável maior
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleSelect(step),
                            onMouseDown: handleStart,
                            onTouchStart: handleStart,
                            "aria-label": `Selecionar etapa ${step}`,
                            tabIndex: 0,
                            role: "button",
                            className: "stepSliderClick",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "selectSliderHover",
                                style: {
                                    position: "absolute"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this)
                        }, step, false, {
                            fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this));
                    }
                    if (step < selected) {
                        return(// Wrapper com área clicável maior
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleSelect(step),
                            "aria-label": `Selecionar etapa ${step}`,
                            tabIndex: 0,
                            role: "button",
                            className: "stepSliderClick",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stepSliderHover",
                                style: {
                                    position: "absolute"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                                lineNumber: 217,
                                columnNumber: 17
                            }, this)
                        }, step, false, {
                            fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this));
                    }
                    return(// Wrapper com área clicável maior
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleSelect(step),
                        "aria-label": `Selecionar etapa ${step}`,
                        tabIndex: 0,
                        role: "button",
                        className: "stepSliderClick",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stepSlider",
                            style: {
                                position: "absolute"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this)
                    }, step, false, {
                        fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                        lineNumber: 227,
                        columnNumber: 13
                    }, this));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-between pt-[16px] px-[20px] @mobile:px-[24px] ",
                children: Array.from({
                    length: steps
                }).map((_, idx)=>{
                    const step = idx + 1;
                    let className = "fontScaleSlider";
                    if (step === selected) {
                        className = "fontScaleSelected";
                    } else if (step < selected) {
                        className = "fontScaleSliderback";
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: className,
                        children: step
                    }, step, false, {
                        fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                        lineNumber: 253,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHelp/SliderNumber.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_s(SliderNumber, "Y2m3gd5SFKis5jSidApOhOyyqnA=");
_c = SliderNumber;
const __TURBOPACK__default__export__ = SliderNumber;
{
/* <div className="w-full flex justify-between pt-[16px] px-[16px] @mobile:px-[24px] "></div>; */ }var _c;
__turbopack_refresh__.register(_c, "SliderNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHelp/SelectPlans.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SelectPlans": (()=>SelectPlans),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SelectPlans({ plans, selectedPlan, onPlanChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "TypographyPlato20 pb-[16px]",
                children: "Selecione o plano"
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/SelectPlans.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex gap-[12px] overflow-x-auto scrollbar-none",
                children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `TypographyIntraMenuSlider cursor-pointer w-max ${selectedPlan === plan.name ? "TypographyIntraMenuSliderHover font-bold" : "hover:TypographyIntraMenuSliderHover"}`,
                        onClick: ()=>onPlanChange(plan.name),
                        children: plan.name.split("Plano ")[1]
                    }, plan.id, false, {
                        fileName: "[project]/src/components/PageHelp/SelectPlans.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/SelectPlans.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHelp/SelectPlans.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SelectPlans;
const __TURBOPACK__default__export__ = SelectPlans;
var _c;
__turbopack_refresh__.register(_c, "SelectPlans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHelp/CardCustomersPlans.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CardCustomersPlans": (()=>CardCustomersPlans),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function CardCustomersPlans({ selectedPlan, beneficiaries, plans }) {
    const plan = plans.find((p)=>p.name === selectedPlan);
    const totalPrice = plan ? new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(plan.price * beneficiaries) : "0,00";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full @tablet:w-[519px] h-[432px] mt-[48px] @tablet:mt-0 p-[32px] border rounded-[16px] @laptop:bg-none bg-BgHomeHelPlans bg-cover @tablet:bg-contain bg-no-repeat",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[32px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "TypographyPinter16w400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "TypographyPinter16redSTD",
                            children: selectedPlan.toLowerCase()
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        " ",
                        "para",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "TypographyH2 pt-[8px]",
                            children: [
                                beneficiaries,
                                " beneficiários"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[48px] flex flex-col gap-[8px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "TypographyPinter16w400",
                        children: "por apenas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "TypographyH1",
                        children: [
                            "R$ ",
                            totalPrice
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-[162px] TypographyPinter14w400",
                        children: "por mês por beneficiário no cartão de crédito."
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/page/contractPlans",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "btnSecondary",
                            className: "w-full mb-[24px] py-[12px] hover:bg-red700",
                            children: "Contratar agora"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        href: "/plans",
                        variant: "btnLink",
                        className: "textbtnLink hover:text-red700",
                        children: [
                            "Conhecer mais o plano",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "IconArrowright",
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHelp/CardCustomersPlans.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = CardCustomersPlans;
const __TURBOPACK__default__export__ = CardCustomersPlans;
var _c;
__turbopack_refresh__.register(_c, "CardCustomersPlans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageHelp/data/plans.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"plans\":[{\"id\":\"idCardBronze\",\"name\":\"Plano Bronze\",\"price\":23.4},{\"id\":\"idCardPrata\",\"name\":\"Plano Prata\",\"price\":25.4},{\"id\":\"idCardOuro\",\"name\":\"Plano Ouro\",\"price\":27.4},{\"id\":\"idCardPlatina\",\"name\":\"Plano Platina\",\"price\":31.4},{\"id\":\"idCardDiamante\",\"name\":\"Plano Diamante\",\"price\":37.4}]}"));}}),
"[project]/src/components/PageHelp/HomeHelp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HomeHelp": (()=>HomeHelp),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Questions$2f$SectionQuestions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/Questions/SectionQuestions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHelp/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$SliderNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHelp/SliderNumber.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$SelectPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHelp/SelectPlans.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$CardCustomersPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHelp/CardCustomersPlans.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$data$2f$plans$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHelp/data/plans.json (json)"); // Ajuste o caminho conforme a estrutura do projeto
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
function HomeHelp() {
    _s();
    const [selectedPlan, setSelectedPlan] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$data$2f$plans$2e$json__$28$json$29$__["default"].plans[2].name);
    const [beneficiaries, setBeneficiaries] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-BgHomeHelp bg-cover",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col @tablet:flex-row justify-between pt-[48px] @mobile:pt-[56px] pb-[80px] gap-[5%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[471px] h-max flex items-start flex-col gap-[40px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-[420px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "TypographyH2 @tablet:TypographyH1 pb-[16px]",
                                                children: "Ainda em dúvida? Simule os valores agora"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "max-w-[390px] TypographyPinter16w400 @tablet:TypographyPinter18home",
                                                children: "Simule agora os preços incríveis para cuidar da saúde bucal da sua família com a Dental Uni."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$SelectPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        plans: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$data$2f$plans$2e$json__$28$json$29$__["default"].plans,
                                        selectedPlan: selectedPlan,
                                        onPlanChange: setSelectedPlan
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col items-start ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "TypographyPlato20 pb-[20px] @mobile:pb-[16px]",
                                                children: "Quantidade beneficiários"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$SliderNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    initialValue: beneficiaries,
                                                    onChange: setBeneficiaries
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$CardCustomersPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                selectedPlan: selectedPlan,
                                beneficiaries: beneficiaries,
                                plans: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$data$2f$plans$2e$json__$28$json$29$__["default"].plans
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHelp$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Questions$2f$SectionQuestions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionQuestions"], {}, void 0, false, {
                fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHelp/HomeHelp.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HomeHelp, "kd1Haq0vFrLOddUQYY0eLGRJGms=");
_c = HomeHelp;
const __TURBOPACK__default__export__ = HomeHelp;
var _c;
__turbopack_refresh__.register(_c, "HomeHelp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page/help/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_2ac2a2._.js.map