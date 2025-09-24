module.exports = {

"[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Icon": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$IconsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/IconsList.tsx [app-ssr] (ecmascript)");
;
;
;
const genericIcons = {
    // Ícones de navegação
    duIconArrowDown: '▼',
    duIconArrowRight: '→',
    duIconArrowLeft: '←',
    duIconRight: '›',
    duIconBurgerMenu: '☰',
    duIconClear: '✕',
    // Ícones de ação
    duIconDownload: '↓',
    duIconSupport: '💬',
    duIconLogin: '👤',
    iconDocol: '🦷',
    dentalIcon: '🦷'
};
const Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ name, className = '', fill, style, width, height }, ref)=>{
    // Primeiro tenta usar o ícone genérico
    const genericIcon = genericIcons[name];
    if (genericIcon) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            "aria-hidden": "true",
            children: genericIcon
        }, void 0, false, {
            fileName: "[project]/src/scripts/Icon.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    // Se não encontrar ícone genérico, tenta usar o componente SVG
    const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$IconsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"][name];
    if (IconComponent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            className: className,
            fill: fill,
            style: style,
            width: width,
            height: height,
            ref: ref
        }, void 0, false, {
            fileName: "[project]/src/scripts/Icon.tsx",
            lineNumber: 45,
            columnNumber: 12
        }, this);
    }
    console.warn(`Icon "${name}" not found`);
    return null;
});
}}),

};

//# sourceMappingURL=src_scripts_Icon_tsx_8d842f._.js.map