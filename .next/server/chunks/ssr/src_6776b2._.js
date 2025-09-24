module.exports = {

"[project]/src/components/PageHome/BannerHome/SliderControl.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$IconsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/IconsList.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const { IconArrowSliderControlLeft, IconArrowSliderControlRight, IconPauseSliderControl, IconPlayicon } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$IconsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"];
// Configuração padrão do slider
const DEFAULT_SLIDER_CONFIG = {
    slideDuration: 7000,
    transitionPercentage: 0.98,
    transitionDuration: 2000
};
// Componente da barra de progresso
// Anima a barra de cada slide, reiniciando em 0% na troca
const ProgressBar = ({ isActive, onClick, isPlaying })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-[8px] bg-bgSilderControl rounded-[9px] cursor-pointer overflow-hidden transition-all duration-300 ${isActive ? "w-[122px]" : "w-[58px]"}`,
        onClick: onClick,
        role: "button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `h-full rounded-[9px] ${isActive && isPlaying ? "bg-black animate-progress" : ""}`,
            style: {
                width: isActive ? "100%" : "0",
                backgroundColor: isActive && !isPlaying ? "#000" : undefined,
                animationPlayState: isPlaying ? "running" : "paused"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
// Componente principal do slider
// Gerencia controles e barras para navegação de imagens
const SliderControl = ({ images, onSlideChange, sliderConfig = DEFAULT_SLIDER_CONFIG })=>{
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Extrai configurações
    const { slideDuration, transitionPercentage, transitionDuration } = sliderConfig;
    const TRANSITION_START = slideDuration * transitionPercentage; // Ex.: 6860ms para 98%
    // Navega para o próximo slide
    const nextSlide = ()=>{
        const newIndex = current === images.length - 1 ? 0 : current + 1;
        setCurrent(newIndex);
        onSlideChange?.(newIndex);
    };
    // Navega para o slide anterior
    const prevSlide = ()=>{
        const newIndex = current === 0 ? images.length - 1 : current - 1;
        setCurrent(newIndex);
        onSlideChange?.(newIndex);
    };
    // Navega para um slide específico
    const goTo = (idx)=>{
        if (idx !== current) {
            setCurrent(idx);
            onSlideChange?.(idx);
        }
    };
    // Automação do slider
    // Troca slides em TRANSITION_START (ex.: 6860ms para 98%)
    // Ajuste sliderConfig para mudar duração ou percentual
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPlaying) return;
        const timeout = setTimeout(nextSlide, TRANSITION_START);
        return ()=>clearTimeout(timeout);
    }, [
        isPlaying,
        current,
        TRANSITION_START
    ]);
    // Alterna play/pause
    const handlePlayPause = ()=>setIsPlaying(!isPlaying);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6eebac5052e6d651",
                dynamic: [
                    TRANSITION_START
                ],
                children: `@keyframes progress{0%{width:0%}to{width:100%}}.animate-progress{animation:linear progress ${TRANSITION_START}ms}`
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "6eebac5052e6d651",
                        [
                            TRANSITION_START
                        ]
                    ]
                ]) + " " + "relative w-full h-[60px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "6eebac5052e6d651",
                            [
                                TRANSITION_START
                            ]
                        ]
                    ]) + " " + "absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "6eebac5052e6d651",
                                    [
                                        TRANSITION_START
                                    ]
                                ]
                            ]) + " " + "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handlePlayPause,
                                role: "button",
                                "aria-label": isPlaying ? "Pausar slider" : "Iniciar slider",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "6eebac5052e6d651",
                                        [
                                            TRANSITION_START
                                        ]
                                    ]
                                ]) + " " + "w-auto h-auto bg-bgSilderControl rounded-full flex items-center gap-[8px] py-[4px] px-[8px] justify-center cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            prevSlide();
                                        },
                                        role: "button",
                                        "aria-label": "Slide anterior",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "6eebac5052e6d651",
                                                [
                                                    TRANSITION_START
                                                ]
                                            ]
                                        ]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconArrowSliderControlLeft, {
                                            className: "w-[20px] h-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this),
                                    isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPauseSliderControl, {
                                        className: "w-[20px] h-[20px] text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlayicon, {
                                        className: "w-[20px] h-[20px] text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                        lineNumber: 130,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            nextSlide();
                                        },
                                        role: "button",
                                        "aria-label": "Próximo slide",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "6eebac5052e6d651",
                                                [
                                                    TRANSITION_START
                                                ]
                                            ]
                                        ]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconArrowSliderControlRight, {
                                            className: "w-[20px] h-[20px] text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "6eebac5052e6d651",
                                    [
                                        TRANSITION_START
                                    ]
                                ]
                            ]) + " " + "flex gap-[8px] ",
                            children: images.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    isActive: current === idx,
                                    onClick: ()=>goTo(idx),
                                    isPlaying: isPlaying,
                                    "aria-label": `Ir para slide ${idx + 1}`
                                }, `${idx}-${current}`, false, {
                                    fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                                    lineNumber: 140,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/BannerHome/SliderControl.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = SliderControl;
}}),
"[project]/src/components/PageHome/BannerHome/BannerHome.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$BannerHome$2f$SliderControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/BannerHome/SliderControl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// Imagens do banner - agora referenciando da pasta public
const bannerImages = [
    {
        src: "/assets/img/bg-home.webp",
        alt: "Banner Dental Uni - Plano Odontológico"
    },
    {
        src: "/assets/img/bg-home2.webp",
        alt: "Banner Dental Uni - Plano Odontológico"
    },
    {
        src: "/assets/img/bg-home3.webp",
        alt: "Banner Dental Uni - Plano Odontológico"
    }
];
const TOTAL_SLIDES = bannerImages.length;
const BannerHome = ()=>{
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nextImage, setNextImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSlideChange = (index)=>{
        setNextImage(index);
        setIsTransitioning(true);
        setTimeout(()=>{
            setCurrentImage(index);
            setIsTransitioning(false);
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-c7e36fec9ca52496" + " " + "relative w-full h-auto overflow-hidden  @tablet:h-[440px] ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c7e36fec9ca52496" + " " + "absolute inset-0 w-full h-full bg-black/0 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c7e36fec9ca52496" + " " + "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: bannerImages[currentImage].src,
                            alt: bannerImages[currentImage].alt,
                            fill: true,
                            priority: true,
                            className: `object-cover object-center transition-opacity ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`,
                            style: {
                                animation: isTransitioning ? "fadeOut 1500ms ease-in-out forwards" : "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c7e36fec9ca52496" + " " + "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: bannerImages[nextImage].src,
                            alt: bannerImages[nextImage].alt,
                            fill: true,
                            priority: true,
                            className: "object-cover object-center transition-opacity ease-in-out opacity-100",
                            style: {
                                animation: "fadeIn 1500ms ease-in-out forwards"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "c7e36fec9ca52496",
                children: "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                className: "relative h-full flex flex-col py-[32px] justify-between @tablet:flex-row ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c7e36fec9ca52496" + " " + " px-4 max-w-[445px]  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "IconDucol",
                                className: "w-5 h-5 "
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-c7e36fec9ca52496" + " " + " mb-4 mt-[32px] TypographyH1home",
                                children: "Docol e Dental Uni juntos pelo seu sorriso"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c7e36fec9ca52496" + " " + "mb-8 TypographyPinter18home ",
                                children: "Planos odontológicos com uma das maiores redes credenciadas e cobertura com preços incríveis."
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/plans",
                                variant: "btnSecondary",
                                className: "hover:bg-red700 w-full @mobile:w-auto",
                                children: "Conhecer os planos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c7e36fec9ca52496" + " " + "w-full max-w-[500px] relative mt-8 @tablet:absolute @tablet:bottom-8 @tablet:left-1/2 @tablet:-translate-x-1/2 @tablet:mt-0 ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$BannerHome$2f$SliderControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            images: bannerImages,
                            onSlideChange: handleSlideChange
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHome/BannerHome/BannerHome.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = BannerHome;
}}),
"[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CardSectionPlans": (()=>CardSectionPlans)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
function CardSectionPlans({ id, name, price, description, procedures, hideVector = false, vectorIconClass = "IconVetorCardPlans", IncludTitle, includA, includB, includC, includD, includE, onOpenModal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[310px] @laptop:w-[254px] h-max flex items-center justify-center mr-[12px] @laptop:mr-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[310px] @laptop:w-[256px] border @laptop:border-none rounded-[8px] h-max p-[15px] @Desktop1440:p-[24px] flex flex-col justify-between mx-auto ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-[40px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "TypographyPlato24",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "pt-[48px] pb-[8px] TypographyH1",
                                    children: [
                                        "R$ ",
                                        price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-[162px] TypographyPinter14w400 ",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/page/contractPlans",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "btnSecondary",
                                className: "w-full mb-[32px] hover:bg-red700",
                                children: "Contratar agora"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-max relative flex flex-col ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[32px] hidden @laptop:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "IconBGCardPlans",
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[8px]",
                                    children: [
                                        " ",
                                        IncludTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "TypographyPinter16w500g950 mb-[12px] ",
                                            children: IncludTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        includA?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-[12px] items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: item.iconInclud
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400",
                                                        children: item.textIncludA
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `includeA-${index}`, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)),
                                        includB?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-[12px] items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: item.iconInclud
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400",
                                                        children: item.textIncludB
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `includeB-${index}`, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)),
                                        includC?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-[12px] items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: item.iconInclud
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400",
                                                        children: item.textIncludC
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `includeC-${index}`, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)),
                                        includD?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-[12px] items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: item.iconInclud
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400",
                                                        children: item.textIncludD
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `includeD-${index}`, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)),
                                        includE?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-[12px] items-center mb-[24px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: item.iconInclud
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400 ",
                                                        children: item.textIncludE
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `includeE-${index}`, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-max flex flex-col gap-[10px] ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "TypographyPinter16g950",
                                            children: procedures
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "TypographyPinter16w500r hover:text-red700",
                                                variant: "btnLink",
                                                onClick: onOpenModal,
                                                children: "Ver procedimentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " hidden @laptop:block",
                    children: [
                        !hideVector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: vectorIconClass
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                            lineNumber: 148,
                            columnNumber: 27
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CardSPlansMobile": (()=>CardSPlansMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
function CardSPlansMobile({ id, name, price, description, procedures, onOpenModal }) {
    return(// Div externa com borda - replicando dimensões e flex-shrink do CardSectionPlans, adicionando borda
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-[328px] @mobile:max-w-[256px] max-h-[433px] flex items-center justify-center -flex-shrink-0 border rounded-[8px]",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full @mobile:max-w-[328px] px-[32px] py-[24px] @mobile:p-[24px] flex flex-col justify-between items-start ",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "TypographyPlato24",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "pt-[48px] pb-[8px] TypographyH1",
                                children: [
                                    "R$ ",
                                    price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[162px] TypographyPinter14w400 ",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/page/contractPlans",
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "btnSecondary",
                            className: "hover:bg-red700 w-full mb-[32px] hidden",
                            children: "Contratar agora"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[90px] relative",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-full h-max absolute top-0 ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "IconBGCardPlansMobile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: " pb-[8px] TypographyPinter16g950",
                                        children: procedures
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full TypographyPinter16w500r",
                                        variant: "btnLink",
                                        onClick: onOpenModal,
                                        children: "Ver procedimentos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this));
}
}}),
"[project]/src/components/PageHome/AmazingPlans/ListSectionPlans.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"plans\":[{\"id\":\"idCardBronze\",\"name\":\"Plano Bronze\",\"price\":\"23,40\",\"description\":\"por mes por beneficiário no cartao de crédito\",\"procedures\":\"166 procedimentos\"},{\"id\":\"idCardPrata\",\"name\":\"Plano Prata\",\"price\":\"25,40\",\"description\":\"por mes por beneficiário no cartao de crédito\",\"procedures\":\"166 procedimentos\"},{\"id\":\"idCardOuro\",\"name\":\"Plano Ouro\",\"price\":\"27,40\",\"description\":\"por mes por beneficiário no cartao de crédito\",\"procedures\":\"166 procedimentos\"},{\"id\":\"idCardPlatina\",\"name\":\"Plano Platina\",\"price\":\"31,40\",\"description\":\"por mes por beneficiário no cartao de crédito\",\"procedures\":\"166 procedimentos\"},{\"id\":\"idCardDiamante\",\"name\":\"Plano Diamante\",\"price\":\"37,40\",\"description\":\"por mes por beneficiário no cartao de crédito\",\"procedures\":\"166 procedimentos\"}]}"));}}),
"[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ComparePlansData.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"plans\":[{\"id\":\"bronze\",\"name\":\"Bronze\",\"price\":\"23,40\",\"procedures\":\"166 procedimentos\",\"comparisons\":{\"Acompanhamento de tratamento/procedi...\":\"Não\",\"Alveoplastia\":\"Não\",\"Alveotomia (Por hemi arcada)\":\"Não\",\"Alveoplastia (Regional por incluso)\":\"Sim\",\"Apicetomia Birradiculares com...\":\"Não\",\"Apicetomia birradiculares sem o...\":\"Sim\",\"Apicetomia multiradiculares c...\":\"Sim\",\"Procedimento 8\":\"Não\",\"Procedimento 9\":\"Não\",\"Procedimento 10\":\"Sim\",\"Procedimento 11\":\"Não\",\"Procedimento 12\":\"Não\",\"Procedimento 13\":\"Não\",\"Procedimento 14\":\"Sim\",\"Procedimento 15\":\"Não\",\"Procedimento 16\":\"Não\",\"Procedimento 17\":\"Sim\",\"Procedimento 18\":\"Não\",\"Procedimento 19\":\"Não\",\"Procedimento 20\":\"Sim\",\"Procedimento 21\":\"Não\",\"Procedimento 22\":\"Não\",\"Procedimento 23\":\"Sim\",\"Procedimento 24\":\"Não\",\"Procedimento 25\":\"Não\",\"Procedimento 26\":\"Sim\",\"Procedimento 27\":\"Não\",\"Procedimento 28\":\"Não\",\"Procedimento 29\":\"Sim\",\"Procedimento 30\":\"Não\",\"Procedimento 31\":\"Não\",\"Procedimento 32\":\"Sim\",\"Procedimento 33\":\"Não\",\"Procedimento 34\":\"Não\",\"Procedimento 35\":\"Sim\",\"Procedimento 36\":\"Não\",\"Procedimento 37\":\"Não\",\"Procedimento 38\":\"Sim\",\"Procedimento 39\":\"Não\",\"Procedimento 40\":\"Não\",\"Procedimento 41\":\"Sim\",\"Procedimento 42\":\"Não\",\"Procedimento 43\":\"Não\",\"Procedimento 44\":\"Sim\",\"Procedimento 45\":\"Não\",\"Procedimento 46\":\"Não\",\"Procedimento 47\":\"Sim\",\"Procedimento 48\":\"Não\",\"Procedimento 49\":\"Não\",\"Procedimento 50\":\"Sim\",\"Procedimento 51\":\"Não\",\"Procedimento 52\":\"Não\",\"Procedimento 53\":\"Sim\",\"Procedimento 54\":\"Não\",\"Procedimento 55\":\"Não\",\"Procedimento 56\":\"Sim\",\"Procedimento 57\":\"Não\",\"Procedimento 58\":\"Não\",\"Procedimento 59\":\"Sim\",\"Procedimento 60\":\"Não\",\"Procedimento 61\":\"Não\",\"Procedimento 62\":\"Sim\",\"Procedimento 63\":\"Não\",\"Procedimento 64\":\"Não\",\"Procedimento 65\":\"Sim\",\"Procedimento 66\":\"Não\",\"Procedimento 67\":\"Não\",\"Procedimento 68\":\"Sim\",\"Procedimento 69\":\"Não\",\"Procedimento 70\":\"Não\",\"Procedimento 71\":\"Sim\",\"Procedimento 72\":\"Não\",\"Procedimento 73\":\"Não\",\"Procedimento 74\":\"Sim\",\"Procedimento 75\":\"Não\",\"Procedimento 76\":\"Não\",\"Procedimento 77\":\"Sim\",\"Procedimento 78\":\"Não\",\"Procedimento 79\":\"Não\",\"Procedimento 80\":\"Sim\",\"Procedimento 81\":\"Não\",\"Procedimento 82\":\"Não\",\"Procedimento 83\":\"Sim\",\"Procedimento 84\":\"Não\",\"Procedimento 85\":\"Não\",\"Procedimento 86\":\"Sim\",\"Procedimento 87\":\"Não\",\"Procedimento 88\":\"Não\",\"Procedimento 89\":\"Sim\",\"Procedimento 90\":\"Não\",\"Procedimento 91\":\"Não\",\"Procedimento 92\":\"Sim\",\"Procedimento 93\":\"Não\",\"Procedimento 94\":\"Não\",\"Procedimento 95\":\"Sim\",\"Procedimento 96\":\"Não\",\"Procedimento 97\":\"Não\",\"Procedimento 98\":\"Sim\",\"Procedimento 99\":\"Não\",\"Procedimento 100\":\"Não\",\"Procedimento 101\":\"Sim\",\"Procedimento 102\":\"Não\",\"Procedimento 103\":\"Não\",\"Procedimento 104\":\"Sim\",\"Procedimento 105\":\"Não\",\"Procedimento 106\":\"Não\",\"Procedimento 107\":\"Sim\",\"Procedimento 108\":\"Não\",\"Procedimento 109\":\"Não\",\"Procedimento 110\":\"Sim\",\"Procedimento 111\":\"Não\",\"Procedimento 112\":\"Não\",\"Procedimento 113\":\"Sim\",\"Procedimento 114\":\"Não\",\"Procedimento 115\":\"Não\",\"Procedimento 116\":\"Sim\",\"Procedimento 117\":\"Não\",\"Procedimento 118\":\"Não\",\"Procedimento 119\":\"Sim\",\"Procedimento 120\":\"Não\",\"Procedimento 121\":\"Não\",\"Procedimento 122\":\"Sim\",\"Procedimento 123\":\"Não\",\"Procedimento 124\":\"Não\",\"Procedimento 125\":\"Sim\",\"Procedimento 126\":\"Não\",\"Procedimento 127\":\"Não\",\"Procedimento 128\":\"Sim\",\"Procedimento 129\":\"Não\",\"Procedimento 130\":\"Não\",\"Procedimento 131\":\"Sim\",\"Procedimento 132\":\"Não\",\"Procedimento 133\":\"Não\",\"Procedimento 134\":\"Sim\",\"Procedimento 135\":\"Não\",\"Procedimento 136\":\"Não\",\"Procedimento 137\":\"Sim\",\"Procedimento 138\":\"Não\",\"Procedimento 139\":\"Não\",\"Procedimento 140\":\"Sim\",\"Procedimento 141\":\"Não\",\"Procedimento 142\":\"Não\",\"Procedimento 143\":\"Sim\",\"Procedimento 144\":\"Não\",\"Procedimento 145\":\"Não\",\"Procedimento 146\":\"Sim\",\"Procedimento 147\":\"Não\",\"Procedimento 148\":\"Não\",\"Procedimento 149\":\"Sim\",\"Procedimento 150\":\"Não\",\"Procedimento 151\":\"Não\",\"Procedimento 152\":\"Sim\",\"Procedimento 153\":\"Não\",\"Procedimento 154\":\"Não\",\"Procedimento 155\":\"Sim\",\"Procedimento 156\":\"Não\",\"Procedimento 157\":\"Não\",\"Procedimento 158\":\"Sim\",\"Procedimento 159\":\"Não\",\"Procedimento 160\":\"Não\",\"Procedimento 161\":\"Sim\",\"Procedimento 162\":\"Não\",\"Procedimento 163\":\"Não\",\"Procedimento 164\":\"Sim\",\"Procedimento 165\":\"Não\",\"Procedimento 166\":\"Não\"}},{\"id\":\"prata\",\"name\":\"Prata\",\"price\":\"23,40\",\"procedures\":\"166 procedimentos\",\"comparisons\":{\"Acompanhamento de tratamento/procedi...\":\"Não\",\"Alveoplastia\":\"Não\",\"Alveotomia (Por hemi arcada)\":\"Não\",\"Alveoplastia (Regional por incluso)\":\"Sim\",\"Apicetomia Birradiculares com...\":\"Não\",\"Apicetomia birradiculares sem o...\":\"Sim\",\"Apicetomia multiradiculares c...\":\"Sim\",\"Procedimento 8\":\"Não\",\"Procedimento 9\":\"Não\",\"Procedimento 10\":\"Sim\",\"Procedimento 11\":\"Não\",\"Procedimento 12\":\"Não\",\"Procedimento 13\":\"Não\",\"Procedimento 14\":\"Sim\",\"Procedimento 15\":\"Não\",\"Procedimento 16\":\"Não\",\"Procedimento 17\":\"Sim\",\"Procedimento 18\":\"Não\",\"Procedimento 19\":\"Não\",\"Procedimento 20\":\"Sim\",\"Procedimento 21\":\"Não\",\"Procedimento 22\":\"Não\",\"Procedimento 23\":\"Sim\",\"Procedimento 24\":\"Não\",\"Procedimento 25\":\"Não\",\"Procedimento 26\":\"Sim\",\"Procedimento 27\":\"Não\",\"Procedimento 28\":\"Não\",\"Procedimento 29\":\"Sim\",\"Procedimento 30\":\"Não\",\"Procedimento 31\":\"Não\",\"Procedimento 32\":\"Sim\",\"Procedimento 33\":\"Não\",\"Procedimento 34\":\"Não\",\"Procedimento 35\":\"Sim\",\"Procedimento 36\":\"Não\",\"Procedimento 37\":\"Não\",\"Procedimento 38\":\"Sim\",\"Procedimento 39\":\"Não\",\"Procedimento 40\":\"Não\",\"Procedimento 41\":\"Sim\",\"Procedimento 42\":\"Não\",\"Procedimento 43\":\"Não\",\"Procedimento 44\":\"Sim\",\"Procedimento 45\":\"Não\",\"Procedimento 46\":\"Não\",\"Procedimento 47\":\"Sim\",\"Procedimento 48\":\"Não\",\"Procedimento 49\":\"Não\",\"Procedimento 50\":\"Sim\",\"Procedimento 51\":\"Não\",\"Procedimento 52\":\"Não\",\"Procedimento 53\":\"Sim\",\"Procedimento 54\":\"Não\",\"Procedimento 55\":\"Não\",\"Procedimento 56\":\"Sim\",\"Procedimento 57\":\"Não\",\"Procedimento 58\":\"Não\",\"Procedimento 59\":\"Sim\",\"Procedimento 60\":\"Não\",\"Procedimento 61\":\"Não\",\"Procedimento 62\":\"Sim\",\"Procedimento 63\":\"Não\",\"Procedimento 64\":\"Não\",\"Procedimento 65\":\"Sim\",\"Procedimento 66\":\"Não\",\"Procedimento 67\":\"Não\",\"Procedimento 68\":\"Sim\",\"Procedimento 69\":\"Não\",\"Procedimento 70\":\"Não\",\"Procedimento 71\":\"Sim\",\"Procedimento 72\":\"Não\",\"Procedimento 73\":\"Não\",\"Procedimento 74\":\"Sim\",\"Procedimento 75\":\"Não\",\"Procedimento 76\":\"Não\",\"Procedimento 77\":\"Sim\",\"Procedimento 78\":\"Não\",\"Procedimento 79\":\"Não\",\"Procedimento 80\":\"Sim\",\"Procedimento 81\":\"Não\",\"Procedimento 82\":\"Não\",\"Procedimento 83\":\"Sim\",\"Procedimento 84\":\"Não\",\"Procedimento 85\":\"Não\",\"Procedimento 86\":\"Sim\",\"Procedimento 87\":\"Não\",\"Procedimento 88\":\"Não\",\"Procedimento 89\":\"Sim\",\"Procedimento 90\":\"Não\",\"Procedimento 91\":\"Não\",\"Procedimento 92\":\"Sim\",\"Procedimento 93\":\"Não\",\"Procedimento 94\":\"Não\",\"Procedimento 95\":\"Sim\",\"Procedimento 96\":\"Não\",\"Procedimento 97\":\"Não\",\"Procedimento 98\":\"Sim\",\"Procedimento 99\":\"Não\",\"Procedimento 100\":\"Não\",\"Procedimento 101\":\"Sim\",\"Procedimento 102\":\"Não\",\"Procedimento 103\":\"Não\",\"Procedimento 104\":\"Sim\",\"Procedimento 105\":\"Não\",\"Procedimento 106\":\"Não\",\"Procedimento 107\":\"Sim\",\"Procedimento 108\":\"Não\",\"Procedimento 109\":\"Não\",\"Procedimento 110\":\"Sim\",\"Procedimento 111\":\"Não\",\"Procedimento 112\":\"Não\",\"Procedimento 113\":\"Sim\",\"Procedimento 114\":\"Não\",\"Procedimento 115\":\"Não\",\"Procedimento 116\":\"Sim\",\"Procedimento 117\":\"Não\",\"Procedimento 118\":\"Não\",\"Procedimento 119\":\"Sim\",\"Procedimento 120\":\"Não\",\"Procedimento 121\":\"Não\",\"Procedimento 122\":\"Sim\",\"Procedimento 123\":\"Não\",\"Procedimento 124\":\"Não\",\"Procedimento 125\":\"Sim\",\"Procedimento 126\":\"Não\",\"Procedimento 127\":\"Não\",\"Procedimento 128\":\"Sim\",\"Procedimento 129\":\"Não\",\"Procedimento 130\":\"Não\",\"Procedimento 131\":\"Sim\",\"Procedimento 132\":\"Não\",\"Procedimento 133\":\"Não\",\"Procedimento 134\":\"Sim\",\"Procedimento 135\":\"Não\",\"Procedimento 136\":\"Não\",\"Procedimento 137\":\"Sim\",\"Procedimento 138\":\"Não\",\"Procedimento 139\":\"Não\",\"Procedimento 140\":\"Sim\",\"Procedimento 141\":\"Não\",\"Procedimento 142\":\"Não\",\"Procedimento 143\":\"Sim\",\"Procedimento 144\":\"Não\",\"Procedimento 145\":\"Não\",\"Procedimento 146\":\"Sim\",\"Procedimento 147\":\"Não\",\"Procedimento 148\":\"Não\",\"Procedimento 149\":\"Sim\",\"Procedimento 150\":\"Não\",\"Procedimento 151\":\"Não\",\"Procedimento 152\":\"Sim\",\"Procedimento 153\":\"Não\",\"Procedimento 154\":\"Não\",\"Procedimento 155\":\"Sim\",\"Procedimento 156\":\"Não\",\"Procedimento 157\":\"Não\",\"Procedimento 158\":\"Sim\",\"Procedimento 159\":\"Não\",\"Procedimento 160\":\"Não\",\"Procedimento 161\":\"Sim\",\"Procedimento 162\":\"Não\",\"Procedimento 163\":\"Não\",\"Procedimento 164\":\"Sim\",\"Procedimento 165\":\"Não\",\"Procedimento 166\":\"Não\"}},{\"id\":\"platina\",\"name\":\"Platina\",\"price\":\"23,40\",\"procedures\":\"166 procedimentos\",\"comparisons\":{\"Acompanhamento de tratamento/procedi...\":\"Não\",\"Alveoplastia\":\"Não\",\"Alveotomia (Por hemi arcada)\":\"Não\",\"Alveoplastia (Regional por incluso)\":\"Não\",\"Apicetomia Birradiculares com...\":\"Não\",\"Apicetomia birradiculares sem o...\":\"Sim\",\"Apicetomia multiradiculares c...\":\"Sim\",\"Procedimento 8\":\"Sim\",\"Procedimento 9\":\"Não\",\"Procedimento 10\":\"Sim\",\"Procedimento 11\":\"Não\",\"Procedimento 12\":\"Sim\",\"Procedimento 13\":\"Não\",\"Procedimento 14\":\"Sim\",\"Procedimento 15\":\"Não\",\"Procedimento 16\":\"Sim\",\"Procedimento 17\":\"Não\",\"Procedimento 18\":\"Sim\",\"Procedimento 19\":\"Não\",\"Procedimento 20\":\"Sim\",\"Procedimento 21\":\"Não\",\"Procedimento 22\":\"Sim\",\"Procedimento 23\":\"Não\",\"Procedimento 24\":\"Sim\",\"Procedimento 25\":\"Não\",\"Procedimento 26\":\"Sim\",\"Procedimento 27\":\"Não\",\"Procedimento 28\":\"Sim\",\"Procedimento 29\":\"Não\",\"Procedimento 30\":\"Sim\",\"Procedimento 31\":\"Não\",\"Procedimento 32\":\"Sim\",\"Procedimento 33\":\"Não\",\"Procedimento 34\":\"Sim\",\"Procedimento 35\":\"Não\",\"Procedimento 36\":\"Sim\",\"Procedimento 37\":\"Não\",\"Procedimento 38\":\"Sim\",\"Procedimento 39\":\"Não\",\"Procedimento 40\":\"Sim\",\"Procedimento 41\":\"Não\",\"Procedimento 42\":\"Sim\",\"Procedimento 43\":\"Não\",\"Procedimento 44\":\"Sim\",\"Procedimento 45\":\"Não\",\"Procedimento 46\":\"Sim\",\"Procedimento 47\":\"Não\",\"Procedimento 48\":\"Sim\",\"Procedimento 49\":\"Não\",\"Procedimento 50\":\"Sim\",\"Procedimento 51\":\"Não\",\"Procedimento 52\":\"Sim\",\"Procedimento 53\":\"Não\",\"Procedimento 54\":\"Sim\",\"Procedimento 55\":\"Não\",\"Procedimento 56\":\"Sim\",\"Procedimento 57\":\"Não\",\"Procedimento 58\":\"Sim\",\"Procedimento 59\":\"Não\",\"Procedimento 60\":\"Sim\",\"Procedimento 61\":\"Não\",\"Procedimento 62\":\"Sim\",\"Procedimento 63\":\"Não\",\"Procedimento 64\":\"Sim\",\"Procedimento 65\":\"Não\",\"Procedimento 66\":\"Sim\",\"Procedimento 67\":\"Não\",\"Procedimento 68\":\"Sim\",\"Procedimento 69\":\"Não\",\"Procedimento 70\":\"Sim\",\"Procedimento 71\":\"Não\",\"Procedimento 72\":\"Sim\",\"Procedimento 73\":\"Não\",\"Procedimento 74\":\"Sim\",\"Procedimento 75\":\"Não\",\"Procedimento 76\":\"Sim\",\"Procedimento 77\":\"Não\",\"Procedimento 78\":\"Sim\",\"Procedimento 79\":\"Não\",\"Procedimento 80\":\"Sim\",\"Procedimento 81\":\"Não\",\"Procedimento 82\":\"Sim\",\"Procedimento 83\":\"Não\",\"Procedimento 84\":\"Sim\",\"Procedimento 85\":\"Não\",\"Procedimento 86\":\"Sim\",\"Procedimento 87\":\"Não\",\"Procedimento 88\":\"Sim\",\"Procedimento 89\":\"Não\",\"Procedimento 90\":\"Sim\",\"Procedimento 91\":\"Não\",\"Procedimento 92\":\"Sim\",\"Procedimento 93\":\"Não\",\"Procedimento 94\":\"Sim\",\"Procedimento 95\":\"Não\",\"Procedimento 96\":\"Sim\",\"Procedimento 97\":\"Não\",\"Procedimento 98\":\"Sim\",\"Procedimento 99\":\"Não\",\"Procedimento 100\":\"Sim\",\"Procedimento 101\":\"Não\",\"Procedimento 102\":\"Sim\",\"Procedimento 103\":\"Não\",\"Procedimento 104\":\"Sim\",\"Procedimento 105\":\"Não\",\"Procedimento 106\":\"Sim\",\"Procedimento 107\":\"Não\",\"Procedimento 108\":\"Sim\",\"Procedimento 109\":\"Não\",\"Procedimento 110\":\"Sim\",\"Procedimento 111\":\"Não\",\"Procedimento 112\":\"Sim\",\"Procedimento 113\":\"Não\",\"Procedimento 114\":\"Sim\",\"Procedimento 115\":\"Não\",\"Procedimento 116\":\"Sim\",\"Procedimento 117\":\"Não\",\"Procedimento 118\":\"Sim\",\"Procedimento 119\":\"Não\",\"Procedimento 120\":\"Sim\",\"Procedimento 121\":\"Não\",\"Procedimento 122\":\"Sim\",\"Procedimento 123\":\"Não\",\"Procedimento 124\":\"Sim\",\"Procedimento 125\":\"Não\",\"Procedimento 126\":\"Sim\",\"Procedimento 127\":\"Não\",\"Procedimento 128\":\"Sim\",\"Procedimento 129\":\"Não\",\"Procedimento 130\":\"Sim\",\"Procedimento 131\":\"Não\",\"Procedimento 132\":\"Sim\",\"Procedimento 133\":\"Não\",\"Procedimento 134\":\"Sim\",\"Procedimento 135\":\"Não\",\"Procedimento 136\":\"Sim\",\"Procedimento 137\":\"Não\",\"Procedimento 138\":\"Sim\",\"Procedimento 139\":\"Não\",\"Procedimento 140\":\"Sim\",\"Procedimento 141\":\"Não\",\"Procedimento 142\":\"Sim\",\"Procedimento 143\":\"Não\",\"Procedimento 144\":\"Sim\",\"Procedimento 145\":\"Não\",\"Procedimento 146\":\"Sim\",\"Procedimento 147\":\"Não\",\"Procedimento 148\":\"Sim\",\"Procedimento 149\":\"Não\",\"Procedimento 150\":\"Sim\",\"Procedimento 151\":\"Não\",\"Procedimento 152\":\"Sim\",\"Procedimento 153\":\"Não\",\"Procedimento 154\":\"Sim\",\"Procedimento 155\":\"Não\",\"Procedimento 156\":\"Sim\",\"Procedimento 157\":\"Não\",\"Procedimento 158\":\"Sim\",\"Procedimento 159\":\"Não\",\"Procedimento 160\":\"Sim\",\"Procedimento 161\":\"Não\",\"Procedimento 162\":\"Sim\",\"Procedimento 163\":\"Não\",\"Procedimento 164\":\"Sim\",\"Procedimento 165\":\"Não\",\"Procedimento 166\":\"Sim\"}},{\"id\":\"ouro\",\"name\":\"Ouro\",\"price\":\"23,40\",\"procedures\":\"166 procedimentos\",\"comparisons\":{\"Acompanhamento de tratamento/procedi...\":\"Sim\",\"Alveoplastia\":\"Sim\",\"Alveotomia (Por hemi arcada)\":\"Sim\",\"Alveoplastia (Regional por incluso)\":\"Não\",\"Apicetomia Birradiculares com...\":\"Sim\",\"Apicetomia birradiculares sem o...\":\"Sim\",\"Apicetomia multiradiculares c...\":\"Sim\",\"Procedimento 8\":\"Sim\",\"Procedimento 9\":\"Sim\",\"Procedimento 10\":\"Sim\",\"Procedimento 11\":\"Não\",\"Procedimento 12\":\"Sim\",\"Procedimento 13\":\"Sim\",\"Procedimento 14\":\"Sim\",\"Procedimento 15\":\"Não\",\"Procedimento 16\":\"Sim\",\"Procedimento 17\":\"Sim\",\"Procedimento 18\":\"Sim\",\"Procedimento 19\":\"Não\",\"Procedimento 20\":\"Sim\",\"Procedimento 21\":\"Sim\",\"Procedimento 22\":\"Sim\",\"Procedimento 23\":\"Não\",\"Procedimento 24\":\"Sim\",\"Procedimento 25\":\"Sim\",\"Procedimento 26\":\"Sim\",\"Procedimento 27\":\"Não\",\"Procedimento 28\":\"Sim\",\"Procedimento 29\":\"Sim\",\"Procedimento 30\":\"Sim\",\"Procedimento 31\":\"Não\",\"Procedimento 32\":\"Sim\",\"Procedimento 33\":\"Sim\",\"Procedimento 34\":\"Sim\",\"Procedimento 35\":\"Não\",\"Procedimento 36\":\"Sim\",\"Procedimento 37\":\"Sim\",\"Procedimento 38\":\"Sim\",\"Procedimento 39\":\"Não\",\"Procedimento 40\":\"Sim\",\"Procedimento 41\":\"Sim\",\"Procedimento 42\":\"Sim\",\"Procedimento 43\":\"Não\",\"Procedimento 44\":\"Sim\",\"Procedimento 45\":\"Sim\",\"Procedimento 46\":\"Sim\",\"Procedimento 47\":\"Não\",\"Procedimento 48\":\"Sim\",\"Procedimento 49\":\"Sim\",\"Procedimento 50\":\"Sim\",\"Procedimento 51\":\"Não\",\"Procedimento 52\":\"Sim\",\"Procedimento 53\":\"Sim\",\"Procedimento 54\":\"Sim\",\"Procedimento 55\":\"Não\",\"Procedimento 56\":\"Sim\",\"Procedimento 57\":\"Sim\",\"Procedimento 58\":\"Sim\",\"Procedimento 59\":\"Não\",\"Procedimento 60\":\"Sim\",\"Procedimento 61\":\"Sim\",\"Procedimento 62\":\"Sim\",\"Procedimento 63\":\"Não\",\"Procedimento 64\":\"Sim\",\"Procedimento 65\":\"Sim\",\"Procedimento 66\":\"Sim\",\"Procedimento 67\":\"Não\",\"Procedimento 68\":\"Sim\",\"Procedimento 69\":\"Sim\",\"Procedimento 70\":\"Sim\",\"Procedimento 71\":\"Não\",\"Procedimento 72\":\"Sim\",\"Procedimento 73\":\"Sim\",\"Procedimento 74\":\"Sim\",\"Procedimento 75\":\"Não\",\"Procedimento 76\":\"Sim\",\"Procedimento 77\":\"Sim\",\"Procedimento 78\":\"Sim\",\"Procedimento 79\":\"Não\",\"Procedimento 80\":\"Sim\",\"Procedimento 81\":\"Sim\",\"Procedimento 82\":\"Sim\",\"Procedimento 83\":\"Não\",\"Procedimento 84\":\"Sim\",\"Procedimento 85\":\"Sim\",\"Procedimento 86\":\"Sim\",\"Procedimento 87\":\"Não\",\"Procedimento 88\":\"Sim\",\"Procedimento 89\":\"Sim\",\"Procedimento 90\":\"Sim\",\"Procedimento 91\":\"Não\",\"Procedimento 92\":\"Sim\",\"Procedimento 93\":\"Sim\",\"Procedimento 94\":\"Sim\",\"Procedimento 95\":\"Não\",\"Procedimento 96\":\"Sim\",\"Procedimento 97\":\"Sim\",\"Procedimento 98\":\"Sim\",\"Procedimento 99\":\"Não\",\"Procedimento 100\":\"Sim\",\"Procedimento 101\":\"Sim\",\"Procedimento 102\":\"Sim\",\"Procedimento 103\":\"Não\",\"Procedimento 104\":\"Sim\",\"Procedimento 105\":\"Sim\",\"Procedimento 106\":\"Sim\",\"Procedimento 107\":\"Não\",\"Procedimento 108\":\"Sim\",\"Procedimento 109\":\"Sim\",\"Procedimento 110\":\"Sim\",\"Procedimento 111\":\"Não\",\"Procedimento 112\":\"Sim\",\"Procedimento 113\":\"Sim\",\"Procedimento 114\":\"Sim\",\"Procedimento 115\":\"Não\",\"Procedimento 116\":\"Sim\",\"Procedimento 117\":\"Sim\",\"Procedimento 118\":\"Sim\",\"Procedimento 119\":\"Não\",\"Procedimento 120\":\"Sim\",\"Procedimento 121\":\"Sim\",\"Procedimento 122\":\"Sim\",\"Procedimento 123\":\"Não\",\"Procedimento 124\":\"Sim\",\"Procedimento 125\":\"Sim\",\"Procedimento 126\":\"Sim\",\"Procedimento 127\":\"Não\",\"Procedimento 128\":\"Sim\",\"Procedimento 129\":\"Sim\",\"Procedimento 130\":\"Sim\",\"Procedimento 131\":\"Não\",\"Procedimento 132\":\"Sim\",\"Procedimento 133\":\"Sim\",\"Procedimento 134\":\"Sim\",\"Procedimento 135\":\"Não\",\"Procedimento 136\":\"Sim\",\"Procedimento 137\":\"Sim\",\"Procedimento 138\":\"Sim\",\"Procedimento 139\":\"Não\",\"Procedimento 140\":\"Sim\",\"Procedimento 141\":\"Sim\",\"Procedimento 142\":\"Sim\",\"Procedimento 143\":\"Não\",\"Procedimento 144\":\"Sim\",\"Procedimento 145\":\"Sim\",\"Procedimento 146\":\"Sim\",\"Procedimento 147\":\"Não\",\"Procedimento 148\":\"Sim\",\"Procedimento 149\":\"Sim\",\"Procedimento 150\":\"Sim\",\"Procedimento 151\":\"Não\",\"Procedimento 152\":\"Sim\",\"Procedimento 153\":\"Sim\",\"Procedimento 154\":\"Sim\",\"Procedimento 155\":\"Não\",\"Procedimento 156\":\"Sim\",\"Procedimento 157\":\"Sim\",\"Procedimento 158\":\"Sim\",\"Procedimento 159\":\"Não\",\"Procedimento 160\":\"Sim\",\"Procedimento 161\":\"Sim\",\"Procedimento 162\":\"Sim\",\"Procedimento 163\":\"Não\",\"Procedimento 164\":\"Sim\",\"Procedimento 165\":\"Sim\",\"Procedimento 166\":\"Sim\"}},{\"id\":\"diamante\",\"name\":\"Diamante\",\"price\":\"23,40\",\"procedures\":\"166 procedimentos\",\"comparisons\":{\"Acompanhamento de tratamento/procedi...\":\"Sim\",\"Alveoplastia\":\"Sim\",\"Alveotomia (Por hemi arcada)\":\"Sim\",\"Alveoplastia (Regional por incluso)\":\"Sim\",\"Apicetomia Birradiculares com...\":\"Sim\",\"Apicetomia birradiculares sem o...\":\"Sim\",\"Apicetomia multiradiculares c...\":\"Sim\",\"Procedimento 8\":\"Sim\",\"Procedimento 9\":\"Sim\",\"Procedimento 10\":\"Sim\",\"Procedimento 11\":\"Sim\",\"Procedimento 12\":\"Sim\",\"Procedimento 13\":\"Sim\",\"Procedimento 14\":\"Sim\",\"Procedimento 15\":\"Sim\",\"Procedimento 16\":\"Sim\",\"Procedimento 17\":\"Sim\",\"Procedimento 18\":\"Sim\",\"Procedimento 19\":\"Sim\",\"Procedimento 20\":\"Sim\",\"Procedimento 21\":\"Sim\",\"Procedimento 22\":\"Sim\",\"Procedimento 23\":\"Sim\",\"Procedimento 24\":\"Sim\",\"Procedimento 25\":\"Sim\",\"Procedimento 26\":\"Sim\",\"Procedimento 27\":\"Sim\",\"Procedimento 28\":\"Sim\",\"Procedimento 29\":\"Sim\",\"Procedimento 30\":\"Sim\",\"Procedimento 31\":\"Sim\",\"Procedimento 32\":\"Sim\",\"Procedimento 33\":\"Sim\",\"Procedimento 34\":\"Sim\",\"Procedimento 35\":\"Sim\",\"Procedimento 36\":\"Sim\",\"Procedimento 37\":\"Sim\",\"Procedimento 38\":\"Sim\",\"Procedimento 39\":\"Sim\",\"Procedimento 40\":\"Sim\",\"Procedimento 41\":\"Sim\",\"Procedimento 42\":\"Sim\",\"Procedimento 43\":\"Sim\",\"Procedimento 44\":\"Sim\",\"Procedimento 45\":\"Sim\",\"Procedimento 46\":\"Sim\",\"Procedimento 47\":\"Sim\",\"Procedimento 48\":\"Sim\",\"Procedimento 49\":\"Sim\",\"Procedimento 50\":\"Sim\",\"Procedimento 51\":\"Sim\",\"Procedimento 52\":\"Sim\",\"Procedimento 53\":\"Sim\",\"Procedimento 54\":\"Sim\",\"Procedimento 55\":\"Sim\",\"Procedimento 56\":\"Sim\",\"Procedimento 57\":\"Sim\",\"Procedimento 58\":\"Sim\",\"Procedimento 59\":\"Sim\",\"Procedimento 60\":\"Sim\",\"Procedimento 61\":\"Sim\",\"Procedimento 62\":\"Sim\",\"Procedimento 63\":\"Sim\",\"Procedimento 64\":\"Sim\",\"Procedimento 65\":\"Sim\",\"Procedimento 66\":\"Sim\",\"Procedimento 67\":\"Sim\",\"Procedimento 68\":\"Sim\",\"Procedimento 69\":\"Sim\",\"Procedimento 70\":\"Sim\",\"Procedimento 71\":\"Sim\",\"Procedimento 72\":\"Sim\",\"Procedimento 73\":\"Sim\",\"Procedimento 74\":\"Sim\",\"Procedimento 75\":\"Sim\",\"Procedimento 76\":\"Sim\",\"Procedimento 77\":\"Sim\",\"Procedimento 78\":\"Sim\",\"Procedimento 79\":\"Sim\",\"Procedimento 80\":\"Sim\",\"Procedimento 81\":\"Sim\",\"Procedimento 82\":\"Sim\",\"Procedimento 83\":\"Sim\",\"Procedimento 84\":\"Sim\",\"Procedimento 85\":\"Sim\",\"Procedimento 86\":\"Sim\",\"Procedimento 87\":\"Sim\",\"Procedimento 88\":\"Sim\",\"Procedimento 89\":\"Sim\",\"Procedimento 90\":\"Sim\",\"Procedimento 91\":\"Sim\",\"Procedimento 92\":\"Sim\",\"Procedimento 93\":\"Sim\",\"Procedimento 94\":\"Sim\",\"Procedimento 95\":\"Sim\",\"Procedimento 96\":\"Sim\",\"Procedimento 97\":\"Sim\",\"Procedimento 98\":\"Sim\",\"Procedimento 99\":\"Sim\",\"Procedimento 100\":\"Sim\",\"Procedimento 101\":\"Sim\",\"Procedimento 102\":\"Sim\",\"Procedimento 103\":\"Sim\",\"Procedimento 104\":\"Sim\",\"Procedimento 105\":\"Sim\",\"Procedimento 106\":\"Sim\",\"Procedimento 107\":\"Sim\",\"Procedimento 108\":\"Sim\",\"Procedimento 109\":\"Sim\",\"Procedimento 110\":\"Sim\",\"Procedimento 111\":\"Sim\",\"Procedimento 112\":\"Sim\",\"Procedimento 113\":\"Sim\",\"Procedimento 114\":\"Sim\",\"Procedimento 115\":\"Sim\",\"Procedimento 116\":\"Sim\",\"Procedimento 117\":\"Sim\",\"Procedimento 118\":\"Sim\",\"Procedimento 119\":\"Sim\",\"Procedimento 120\":\"Sim\",\"Procedimento 121\":\"Sim\",\"Procedimento 122\":\"Sim\",\"Procedimento 123\":\"Sim\",\"Procedimento 124\":\"Sim\",\"Procedimento 125\":\"Sim\",\"Procedimento 126\":\"Sim\",\"Procedimento 127\":\"Sim\",\"Procedimento 128\":\"Sim\",\"Procedimento 129\":\"Sim\",\"Procedimento 130\":\"Sim\",\"Procedimento 131\":\"Sim\",\"Procedimento 132\":\"Sim\",\"Procedimento 133\":\"Sim\",\"Procedimento 134\":\"Sim\",\"Procedimento 135\":\"Sim\",\"Procedimento 136\":\"Sim\",\"Procedimento 137\":\"Sim\",\"Procedimento 138\":\"Sim\",\"Procedimento 139\":\"Sim\",\"Procedimento 140\":\"Sim\",\"Procedimento 141\":\"Sim\",\"Procedimento 142\":\"Sim\",\"Procedimento 143\":\"Sim\",\"Procedimento 144\":\"Sim\",\"Procedimento 145\":\"Sim\",\"Procedimento 146\":\"Sim\",\"Procedimento 147\":\"Sim\",\"Procedimento 148\":\"Sim\",\"Procedimento 149\":\"Sim\",\"Procedimento 150\":\"Sim\",\"Procedimento 151\":\"Sim\",\"Procedimento 152\":\"Sim\",\"Procedimento 153\":\"Sim\",\"Procedimento 154\":\"Sim\",\"Procedimento 155\":\"Sim\",\"Procedimento 156\":\"Sim\",\"Procedimento 157\":\"Sim\",\"Procedimento 158\":\"Sim\",\"Procedimento 159\":\"Sim\",\"Procedimento 160\":\"Sim\",\"Procedimento 161\":\"Sim\",\"Procedimento 162\":\"Sim\",\"Procedimento 163\":\"Sim\",\"Procedimento 164\":\"Sim\",\"Procedimento 165\":\"Sim\",\"Procedimento 166\":\"Sim\"}}]}"));}}),
"[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Comparativo$2f$ComparePlansData$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ComparePlansData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const ModalComparePlans = ({ onClose })=>{
    const procedures = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Comparativo$2f$ComparePlansData$2e$json__$28$json$29$__["default"].plans[0].comparisons); // Obtém as chaves das comparações
    // Efeito para desabilitar o scroll do body quando o modal estiver aberto
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Salvar a posição de scroll atual
        const scrollY = window.scrollY;
        // Salvar os estilos originais
        const originalStyle = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width
        };
        // Aplicar estilos para prevenir scroll
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        // Função de limpeza ao fechar o modal
        return ()=>{
            // Restaurar estilos originais
            document.body.style.overflow = originalStyle.overflow;
            document.body.style.position = originalStyle.position;
            document.body.style.top = originalStyle.top;
            document.body.style.width = originalStyle.width;
            // Rolar a página de volta para a posição original
            window.scrollTo(0, scrollY);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-[9999]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[95vw] max-h-[95vh] bg-white rounded-[16px] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center py-[16px] px-[32px] ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "TypographyMenuMobile",
                            children: "Comparativo planos Dental Uni"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-max mb-4 flex flex-row justify-end shadow-md border-t px-[32px] ",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Comparativo$2f$ComparePlansData$2e$json__$28$json$29$__["default"].plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-max h-[188px] p-[16px] flex flex-col justify-between relative ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[8px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "TypographyMenuMobile",
                                            children: plan.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "TypographyPinter14w400",
                                            children: plan.procedures
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "TypographyPlato24",
                                            children: [
                                                "R$ ",
                                                plan.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/page/contractPlans",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "btnPrimary",
                                            className: "hover:bg-red700",
                                            children: "Contratar agora"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute pr-[16px] left-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "IconVetorCardScrolldown"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, plan.id, true, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto scrollbar-hidden max-h-[100vh] px-[32px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full table-auto border-collapse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "w-full",
                            children: procedures.map((procedure)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " flex items-center gap-[8px] py-[17px] ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[160px] ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "TypographyPinter16w400",
                                                        children: procedure
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-[1px] rounded-full bg-red25",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "IconInfo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Comparativo$2f$ComparePlansData$2e$json__$28$json$29$__["default"].plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-center p-2 w-[188px]",
                                                children: plan.comparisons[procedure] === "Sim" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "TypographyPinter16green",
                                                    children: plan.comparisons[procedure]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 25
                                                }, this) // Estilo para "Sim"
                                                 : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "TypographyPinter16w400 opacity-50",
                                                    children: plan.comparisons[procedure]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 25
                                                }, this) // Estilo para "Não"
                                            }, `${plan.id}-${procedure}`, false, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, procedure, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ModalComparePlans;
}}),
"[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BarComparePlans": (()=>BarComparePlans)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Comparativo$2f$ModalComparePlans$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/Modal/Comparativo/ModalComparePlans.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BarComparePlans() {
    const [isCompareOpen, setIsCompareOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClose = ()=>{
        setIsCompareOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full relative hidden @tablet:flex justify-between py-2 @Desktop:py-[24px] px-[88px] items-center cursor-pointer  bg-contain rounded-[8.5px] border-2 border-white",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                onClick: ()=>setIsCompareOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full absolute left-0 top-0 rounded-[8.2px] object-contain",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: isHovered ? "IconFrameBGBarComparePlansHover" : "IconFrameBGBarComparePlansDefault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-between w-full z-10 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[234px] TypographyPlato24light",
                                children: "Compare os planos e faça a sua escolha"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[190px] absolute left-[481px] TypographyPinter16w500light",
                                children: "Veja os procedimentos cobertos em cada plano."
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "btnLink",
                                onClick: ()=>setIsCompareOpen(true),
                                className: "pointer-events-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "IconArrowLinkBar",
                                    className: "w-[24px] h-[24px] hover:animate-bounce-x"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            isCompareOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Comparativo$2f$ModalComparePlans$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx",
                lineNumber: 56,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/data/procedures.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"plan\":{\"name\":\"Plano Bronze\",\"price\":\"23.40\",\"priceUnit\":\"/mês por beneficiário\"},\"procedures\":[{\"name\":\"Acompanhamento de tratamento / Procedimento cirúrgico em odontologia\",\"code\":\"82000026\",\"coverage\":\"Sim\"},{\"name\":\"Anestesia birradiculares com obturação retrógrada\",\"code\":\"82000085\",\"coverage\":\"Sim\"},{\"name\":\"Apicetomia birradiculares com obturação retrógrada\",\"code\":\"82000123\",\"coverage\":\"Não\"},{\"name\":\"Apicetomia multirradiculares com obturação retrógrada\",\"code\":\"82000155\",\"coverage\":\"Sim\"},{\"name\":\"Apicetomia birradiculares sem obturação retrógrada\",\"code\":\"82000086\",\"coverage\":\"Não\"},{\"name\":\"Apicetomia multirradiculares sem obturação retrógrada\",\"code\":\"82000156\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 1\",\"code\":\"82001001\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 2\",\"code\":\"82001002\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 3\",\"code\":\"82001003\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 4\",\"code\":\"82001004\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 5\",\"code\":\"82001005\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 6\",\"code\":\"82001006\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 7\",\"code\":\"82001007\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 8\",\"code\":\"82001008\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 9\",\"code\":\"82001009\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 10\",\"code\":\"82001010\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 11\",\"code\":\"82001011\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 12\",\"code\":\"82001012\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 13\",\"code\":\"82001013\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 14\",\"code\":\"82001014\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 15\",\"code\":\"82001015\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 16\",\"code\":\"82001016\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 17\",\"code\":\"82001017\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 18\",\"code\":\"82001018\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 19\",\"code\":\"82001019\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 20\",\"code\":\"82001020\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 21\",\"code\":\"82001021\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 22\",\"code\":\"82001022\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 23\",\"code\":\"82001023\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 24\",\"code\":\"82001024\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 25\",\"code\":\"82001025\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 26\",\"code\":\"82001026\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 27\",\"code\":\"82001027\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 28\",\"code\":\"82001028\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 29\",\"code\":\"82001029\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 30\",\"code\":\"82001030\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 31\",\"code\":\"82001031\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 32\",\"code\":\"82001032\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 33\",\"code\":\"82001033\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 34\",\"code\":\"82001034\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 35\",\"code\":\"82001035\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 36\",\"code\":\"82001036\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 37\",\"code\":\"82001037\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 38\",\"code\":\"82001038\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 39\",\"code\":\"82001039\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 40\",\"code\":\"82001040\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 41\",\"code\":\"82001041\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 42\",\"code\":\"82001042\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 43\",\"code\":\"82001043\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 44\",\"code\":\"82001044\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 45\",\"code\":\"82001045\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 46\",\"code\":\"82001046\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 47\",\"code\":\"82001047\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 48\",\"code\":\"82001048\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 49\",\"code\":\"82001049\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 50\",\"code\":\"82001050\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 51\",\"code\":\"82001051\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 52\",\"code\":\"82001052\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 53\",\"code\":\"82001053\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 54\",\"code\":\"82001054\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 55\",\"code\":\"82001055\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 56\",\"code\":\"82001056\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 57\",\"code\":\"82001057\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 58\",\"code\":\"82001058\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 59\",\"code\":\"82001059\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 60\",\"code\":\"82001060\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 61\",\"code\":\"82001061\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 62\",\"code\":\"82001062\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 63\",\"code\":\"82001063\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 64\",\"code\":\"82001064\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 65\",\"code\":\"82001065\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 66\",\"code\":\"82001066\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 67\",\"code\":\"82001067\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 68\",\"code\":\"82001068\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 69\",\"code\":\"82001069\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 70\",\"code\":\"82001070\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 71\",\"code\":\"82001071\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 72\",\"code\":\"82001072\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 73\",\"code\":\"82001073\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 74\",\"code\":\"82001074\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 75\",\"code\":\"82001075\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 76\",\"code\":\"82001076\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 77\",\"code\":\"82001077\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 78\",\"code\":\"82001078\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 79\",\"code\":\"82001079\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 80\",\"code\":\"82001080\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 81\",\"code\":\"82001081\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 82\",\"code\":\"82001082\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 83\",\"code\":\"82001083\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 84\",\"code\":\"82001084\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 85\",\"code\":\"82001085\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 86\",\"code\":\"82001086\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 87\",\"code\":\"82001087\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 88\",\"code\":\"82001088\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 89\",\"code\":\"82001089\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 90\",\"code\":\"82001090\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 91\",\"code\":\"82001091\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 92\",\"code\":\"82001092\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 93\",\"code\":\"82001093\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 94\",\"code\":\"82001094\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 95\",\"code\":\"82001095\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 96\",\"code\":\"82001096\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 97\",\"code\":\"82001097\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 98\",\"code\":\"82001098\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 99\",\"code\":\"82001099\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 100\",\"code\":\"82001100\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 101\",\"code\":\"82001101\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 102\",\"code\":\"82001102\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 103\",\"code\":\"82001103\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 104\",\"code\":\"82001104\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 105\",\"code\":\"82001105\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 106\",\"code\":\"82001106\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 107\",\"code\":\"82001107\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 108\",\"code\":\"82001108\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 109\",\"code\":\"82001109\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 110\",\"code\":\"82001110\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 111\",\"code\":\"82001111\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 112\",\"code\":\"82001112\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 113\",\"code\":\"82001113\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 114\",\"code\":\"82001114\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 115\",\"code\":\"82001115\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 116\",\"code\":\"82001116\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 117\",\"code\":\"82001117\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 118\",\"code\":\"82001118\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 119\",\"code\":\"82001119\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 120\",\"code\":\"82001120\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 121\",\"code\":\"82001121\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 122\",\"code\":\"82001122\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 123\",\"code\":\"82001123\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 124\",\"code\":\"82001124\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 125\",\"code\":\"82001125\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 126\",\"code\":\"82001126\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 127\",\"code\":\"82001127\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 128\",\"code\":\"82001128\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 129\",\"code\":\"82001129\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 130\",\"code\":\"82001130\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 131\",\"code\":\"82001131\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 132\",\"code\":\"82001132\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 133\",\"code\":\"82001133\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 134\",\"code\":\"82001134\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 135\",\"code\":\"82001135\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 136\",\"code\":\"82001136\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 137\",\"code\":\"82001137\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 138\",\"code\":\"82001138\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 139\",\"code\":\"82001139\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 140\",\"code\":\"82001140\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 141\",\"code\":\"82001141\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 142\",\"code\":\"82001142\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 143\",\"code\":\"82001143\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 144\",\"code\":\"82001144\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 145\",\"code\":\"82001145\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 146\",\"code\":\"82001146\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 147\",\"code\":\"82001147\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 148\",\"code\":\"82001148\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 149\",\"code\":\"82001149\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 150\",\"code\":\"82001150\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 151\",\"code\":\"82001151\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 152\",\"code\":\"82001152\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 153\",\"code\":\"82001153\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 154\",\"code\":\"82001154\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 155\",\"code\":\"82001155\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 156\",\"code\":\"82001156\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 157\",\"code\":\"82001157\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 158\",\"code\":\"82001158\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 159\",\"code\":\"82001159\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 160\",\"code\":\"82001160\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 161\",\"code\":\"82001161\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 162\",\"code\":\"82001162\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 163\",\"code\":\"82001163\",\"coverage\":\"Não\"},{\"name\":\"Procedimento Genérico 164\",\"code\":\"82001164\",\"coverage\":\"Sim\"},{\"name\":\"Procedimento Genérico 165\",\"code\":\"82001165\",\"coverage\":\"Não\"}]}"));}}),
"[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/data/acts.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"plan\":{\"name\":\"Plano Bronze\",\"price\":\"23.40\",\"priceUnit\":\"/mês por beneficiário\"},\"acts\":[{\"name\":\"Descrição\",\"code\":\"83000001\",\"coverage\":\"Sim\"},{\"name\":\"Urgências\",\"code\":\"83000002\",\"coverage\":\"Sim\"},{\"name\":\"Exames clínicos\",\"code\":\"83000003\",\"coverage\":\"Sim\"},{\"name\":\"RX (Periapical, Bite Wing, Panorâmica Simples)\",\"code\":\"83000004\",\"coverage\":\"Sim\"},{\"name\":\"Restauração (Amálgama e Resina)\",\"code\":\"83000005\",\"coverage\":\"Sim\"},{\"name\":\"Consultas\",\"code\":\"83000006\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 1\",\"code\":\"83001001\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 2\",\"code\":\"83001002\",\"coverage\":\"Sim\"},{\"name\":\"Ato Genérico 3\",\"code\":\"83001003\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 4\",\"code\":\"83001004\",\"coverage\":\"Sim\"},{\"name\":\"Ato Genérico 5\",\"code\":\"83001005\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 6\",\"code\":\"83001006\",\"coverage\":\"Sim\"},{\"name\":\"Ato Genérico 160\",\"code\":\"8300160\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 161\",\"code\":\"8300161\",\"coverage\":\"Sim\"},{\"name\":\"Ato Genérico 162\",\"code\":\"8300162\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 163\",\"code\":\"8300163\",\"coverage\":\"Sim\"},{\"name\":\"Ato Genérico 164\",\"code\":\"8300164\",\"coverage\":\"Não\"},{\"name\":\"Ato Genérico 165\",\"code\":\"8300165\",\"coverage\":\"Sim\"}]}"));}}),
"[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModalProcedimentos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Procedimentos$2f$data$2f$procedures$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/data/procedures.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Procedimentos$2f$data$2f$acts$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/data/acts.json (json)");
"use client";
;
;
;
;
;
;
;
function ModalProcedimentos({ onClose, planId = "" }) {
    // Filtro selecionado: Todos, Sim ou Não
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Todos");
    // Controla se o dropdown do filtro está aberto
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Aba ativa: Procedimentos ou Atos
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Procedimentos");
    // Função para formatar valores monetários no padrão brasileiro
    const formatCurrency = (value)=>{
        // Converte string para número, tratando valores com ponto ou vírgula
        const numericValue = parseFloat(value.replace(",", "."));
        return new Intl.NumberFormat("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(numericValue);
    };
    // Efeito para desabilitar o scroll do body quando o modal estiver aberto
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Salvar a posição de scroll atual
        const scrollY = window.scrollY;
        // Salvar os estilos originais
        const originalStyle = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width
        };
        // Aplicar estilos para prevenir scroll
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        // Função de limpeza ao fechar o modal
        return ()=>{
            // Restaurar estilos originais
            document.body.style.overflow = originalStyle.overflow;
            document.body.style.position = originalStyle.position;
            document.body.style.top = originalStyle.top;
            document.body.style.width = originalStyle.width;
            // Rolar a página de volta para a posição original
            window.scrollTo(0, scrollY);
        };
    }, []);
    // Efeito para verificar o carregamento das imagens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const imgMobile = new window.Image();
        imgMobile.src = "/assets/img/BgCardModalComparePlansMobile.webp";
        imgMobile.onload = ()=>console.log("Imagem mobile carregada com sucesso");
        imgMobile.onerror = ()=>console.error("Erro ao carregar imagem mobile");
        const imgDesktop = new window.Image();
        imgDesktop.src = "/assets/img/BgCardModalComparePlan.webp";
        imgDesktop.onload = ()=>console.log("Imagem desktop carregada com sucesso");
        imgDesktop.onerror = ()=>console.error("Erro ao carregar imagem desktop");
    }, []);
    // Troca o filtro e fecha o dropdown
    const handleFilterChange = (value)=>{
        setFilter(value);
        setIsDropdownOpen(false);
    };
    // Seleciona os dados conforme a aba ativa
    const currentData = activeTab === "Procedimentos" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Procedimentos$2f$data$2f$procedures$2e$json__$28$json$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Procedimentos$2f$data$2f$acts$2e$json__$28$json$29$__["default"];
    // Pega os itens da aba ativa
    const currentItems = activeTab === "Procedimentos" ? currentData.procedures : currentData.acts;
    // Filtra os itens conforme o filtro selecionado
    const filteredProcedures = currentItems?.filter((item)=>{
        if (filter === "Todos") return true;
        return item.coverage === filter;
    }) || [];
    // Conta quantos itens têm cobertura "Sim"
    const coveredProceduresCount = currentItems?.filter((item)=>item.coverage === "Sim").length || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-auto fixed inset-0 bg-gray950 bg-opacity-95 flex items-center justify-center z-[9999]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[98%] @tablet:w-[764px] h-[98%] @mobile:h-max bg-white rounded-[16px] flex flex-col items-center justify-between text-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-between items-center py-[16px] px-[16px] @mobile:px-[32px] border-b ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "TypographyMenuMobile",
                                children: "Cobertura plano"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-500 hover:text-gray-700",
                                children: "X"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex flex-col justify-center px-[16px] pt-[16px] @mobile:px-[32px] @mobile:pt-[32px] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex flex-col items-center mb-[8px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-max flex flex-col @mobile:flex-row justify-between items-start @mobile:items-center pb-[16px] @mobile:pb-[60px] px-[16px] @mobile:px-[24px] py-[16px] mb-[24px] @mobile:mb-0  bg-BgCardModalComparePlansMobile @mobile:bg-BgCardModalComparePlans bg-cover @mobile:bg-cover bg-no-repeat border @mobile:border-none rounded-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-max flex flex-col items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w500g900",
                                                        children: currentData.plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-max flex flex-col @mobile:flex-row items-start @mobile:items-end gap-[8px] pb-[24px] ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "TypographyH1",
                                                                children: [
                                                                    "R$ ",
                                                                    formatCurrency(currentData.plan.price)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "TypographyPinter14w400",
                                                                children: currentData.plan.priceUnit
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full @mobile:w-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/page/contractPlans",
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "btnPrimary",
                                                        className: "hover:bg-red700 w-full",
                                                        children: "Contratar agora"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full border-b flex gap-[24px] ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pb-[8px] border-b-2 ${activeTab === "Procedimentos" ? "border-redSTD TypographyPinter16w500g900" : "border-transparent hover:TypographyPinter16w500g900 text-gray500"}`,
                                                        onClick: ()=>setActiveTab("Procedimentos"),
                                                        children: "Procedimentos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `pb-[8px] border-b-2 ${activeTab === "Atos" ? "border-redSTD TypographyPinter16w500g900" : "border-transparent hover:TypographyPinter16w500g900 text-gray500"}`,
                                                        onClick: ()=>setActiveTab("Atos"),
                                                        children: "Atos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full flex flex-col @mobile:flex-row items-start @mobile:items-center justify-between gap-[12px] @mobile:gap-[24px] mt-[16px] mb-[12px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "TypographyPinter16w400",
                                                        children: [
                                                            coveredProceduresCount,
                                                            " ",
                                                            activeTab.toLowerCase(),
                                                            " cobertos"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full @mobile:w-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                                                className: "w-full @mobile:w-max flex items-center gap-[8px] justify-between py-[8px] px-[16px] border rounded-[8px] TypographyPinter16w400",
                                                                children: [
                                                                    "Cobertura",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                                        name: "IconArrowdown",
                                                                        className: isDropdownOpen ? "rotate-180" : ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "absolute right-0 mt-[8px] w-[150px] bg-white border rounded-[8px] shadow-lg z-10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                handleFilterChange("Todos");
                                                                            },
                                                                            className: "block text-left py-[8px] px-[16px] hover:bg-gray-50",
                                                                            children: "Todos"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                handleFilterChange("Sim");
                                                                            },
                                                                            className: "block text-left py-[8px] px-[16px] hover:bg-gray-50",
                                                                            children: "Sim"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                            lineNumber: 233,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                handleFilterChange("Não");
                                                                            },
                                                                            className: "block text-left py-[8px] px-[16px] hover:bg-gray-50",
                                                                            children: "Não"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                            lineNumber: 245,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full flex justify-between p-[12px] bg-gray50 rounded-[8px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Descrição"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Cobertura"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[300px] overflow-y-auto scrollbar-hidden pt-[12px] pb-[80px]",
                                children: [
                                    filteredProcedures.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center px-[12px] py-[8px] border-b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full mr-[12px] flex flex-col items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "TypographyPinter16g950 text-left",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "TypographyPinter14w400",
                                                            children: item.code
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: item.coverage === "Sim" ? "btnYes" : "btnNot",
                                                    children: item.coverage === "Sim" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "IconIncludPlans"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "",
                                                                children: "Sim"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "IconNotCoverage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "",
                                                                children: "Não"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "IconOverlayMOdal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SectionPlans": (()=>SectionPlans)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$CardSectionPlans$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/CardSectionPlans.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$CardSPlansMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/CardSPlansMobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$ListSectionPlans$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/ListSectionPlans.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$BarComparePlans$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/BarComparePlans.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Procedimentos$2f$ModalProcedimentos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const DESKTOP_BREAKPOINT_PX = 1440; // Value for desktop breakpoint
function SectionPlans() {
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPlanId, setCurrentPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Função para abrir o modal com o ID do plano
    const handleOpenModal = (planId)=>{
        setCurrentPlanId(planId);
        setIsModalOpen(true);
    };
    // Função para fechar o modal
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkIsDesktop = ()=>{
            setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT_PX);
        };
        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return ()=>{
            window.removeEventListener("resize", checkIsDesktop);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full h-auto",
        id: "idSectionPlans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-max flex flex-col justify-between mb-[120px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-max flex flex-col @mobile:flex-row @mobile:gap-[32px] @tablet:gap-[152px] mb-[40px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[502px] flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "w-full @tablet:TypographyH1 TypographyH1mobile pb-[16px]",
                                            children: "Planos incríveis a partir de R$ 23,40 por mês"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-[380px] TypographyPinter16w400",
                                            children: "Tenha acesso a uma das maiores redes credenciadas e cobertura com preços incríveis."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[300px] h-[114px] mt-[42px] flex flex-col justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: " TypographyPinter16w500g950",
                                            children: "Quer mais detalhes?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-[8px] pb-[12px] TypographyPinter16w400",
                                            children: "Clique abaixo e veja a cobertura, regras, orientações e os detalhes de cada plano."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "/plans",
                                            /* target="_blank" */ variant: "btnLink",
                                            className: "textbtnLink hover:text-red700",
                                            children: [
                                                "Ir para a página planos",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "IconArrowright",
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full border rounded-[8px] justify-center",
                            style: {
                                display: isDesktop ? "flex" : "none"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$ListSectionPlans$2e$json__$28$json$29$__["default"].plans.map((plan, index, array)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$CardSectionPlans$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardSectionPlans"], {
                                        id: plan.id,
                                        name: plan.name,
                                        price: plan.price,
                                        description: plan.description,
                                        procedures: plan.procedures,
                                        hideVector: index === array.length - 1,
                                        vectorIconClass: "IconVetorCardPlans" // Specific icon for SectionPlans
                                        ,
                                        onOpenModal: ()=>handleOpenModal(plan.id)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                }, `desktop-${plan.id}`, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-wrap gap-[24px] justify-start",
                            style: {
                                display: isDesktop ? "none" : "flex"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$ListSectionPlans$2e$json__$28$json$29$__["default"].plans.map((plan, index, array)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$CardSPlansMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardSPlansMobile"], {
                                        id: plan.id,
                                        name: plan.name,
                                        price: plan.price,
                                        description: plan.description,
                                        procedures: plan.procedures,
                                        onOpenModal: ()=>handleOpenModal(plan.id)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, `mobile-${plan.id}`, false, {
                                    fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-[16px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$BarComparePlans$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarComparePlans"], {}, void 0, false, {
                                fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$AmazingPlans$2f$Modal$2f$Procedimentos$2f$ModalProcedimentos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleCloseModal,
                planId: currentPlanId
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHome/AmazingPlans/SectionPlans.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/PageHome/Baneficiary/FaqSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FaqSection": (()=>FaqSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
;
;
;
const fastAccessItems = [
    {
        icon: "IconGerenciarfatura",
        iconHover: "IconGerenciarfaturaHOVER",
        title: "Gerenciar a fatura",
        description: "2ª via boleto, dia de vencimento, etc.",
        href: "https://dentaluni.com.br/autoatendimento"
    },
    {
        icon: "IconGerenciardependente",
        iconHover: "IconGerenciardependenteHOVER",
        title: "Gerenciar dependente",
        description: "Inclusão e exclusão de dependentes",
        href: "https://dentaluni.com.br/autoatendimento"
    },
    {
        icon: "IconAbrirprotocolo",
        iconHover: "IconAbrirprotocoloHOVER",
        title: "Abrir protocolo",
        description: "Abra protocolos de atendimento",
        href: "https://dentaluni.com.br/autoatendimento"
    },
    {
        icon: "IconAlterardados",
        iconHover: "IconAlterardadosHOVER",
        title: "Alterar dados",
        description: "Alterar dados de pagamento ou cadastrais",
        href: "https://dentaluni.com.br/autoatendimento"
    },
    {
        icon: "IconEncontrardentista",
        iconHover: "IconEncontrardentistaHOVER",
        title: "Encontrar um dentista",
        description: "Local, cobertura, especialidade e mais",
        href: "https://dentaluni-institucional.netlify.app/rede-credenciada"
    }
];
function FaqSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full @tablet:max-w-[519px] flex flex-col gap-[40px] items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-[12px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full TypographyH2",
                        children: "Tudo o que você precisa está aqui:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "TypographyPinter16w400",
                        children: "Acesso rápido aos principais recursos."
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-[24px]",
                children: fastAccessItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-between cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[24px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-[13px] border border-red50 bg-red25 rounded-[5px] group-hover:bg-redSTD",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group-hover:hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: item.icon,
                                                    className: "w-[24px] h-[24px] bg-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden group-hover:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: item.iconHover,
                                                    className: "w-[24px] h-[24px] bg-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "TypographyPinter16w500g950 group-hover:text-redSTD",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "TypographyPinter16w400 hidden @mobile:flex",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 flex items-center justify-center group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "IconPathFaq",
                                    className: "w-5 h-5 animate-bounce-x"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                href: "https://dentaluni.com.br/autoatendimento",
                target: "_blank",
                variant: "btnLink",
                className: "flex justify-start textbtnLink hover:text-red700",
                children: [
                    "Ir para o autoatendimento",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "IconArrowright",
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHome/Baneficiary/FaqSection.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SectionBeneficiarY)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Baneficiary$2f$FaqSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/Baneficiary/FaqSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client"; // Adiciona diretiva para Client Component
;
;
;
;
;
;
;
function ImageSection() {
    // Debug para verificar carregamento no Vercel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const img = new window.Image();
        img.src = "/assets/img/img-cartao-dentalUNI.webp";
        img.onload = ()=>console.log("Imagem tablet carregada com sucesso");
        img.onerror = ()=>console.error("Erro ao carregar imagem tablet");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center w-full h-auto mb-[24px] @tablet:max-w-[540px] @tablet:max-h-[618px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/img/img-cartao-dentalUNI.webp",
                alt: "Imagem - Sorriso Dental Uni",
                width: 540,
                height: 618,
                className: "hidden @tablet:block object-contain",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/img/img-cartao-dentalUNI-mobile.webp",
                alt: "Imagem - Sorriso Dental Uni",
                width: 840,
                height: 100,
                className: "@tablet:hidden object-contain",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function SectionBeneficiarY() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-auto flex flex-col @tablet:flex-row @tablet:gap-[12%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col flex-col-reverse items-center @tablet:flex-row @tablet:flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex flex-col gap-[8px] items-start mb-8 md:max-w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "TypographyPinter14w500",
                                        children: "APROVEITE O SEU PLANO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "TypographyH1mobile @tablet:TypographyH1 @tablet:w-[466px]",
                                        children: "Já é beneficiário? Aproveite o seu plano"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageSection, {}, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] h-[114px] flex flex-col items-start mb-[48px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "TypographyPinter16w500g950",
                                        children: "Cartão bloqueado?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pt-[8px] pb-[12px] TypographyPinter16w400",
                                        children: "Novo beneficiário e ainda não desbloqueou o seu cartão? Desbloqueie ele agora!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        href: "https://desbloqueio.dentaluni.com.br/",
                                        target: "_blank",
                                        variant: "btnLink",
                                        className: "textbtnLink hover:text-red700",
                                        children: [
                                            "Desbloquear cartão agora",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "IconArrowright",
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Baneficiary$2f$FaqSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaqSection"], {}, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PageHome/Baneficiary/SectionBeneficiary.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/accordion-primitive.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Content": (()=>Content),
    "Header": (()=>Header),
    "Item": (()=>Item),
    "Root": (()=>Root),
    "Trigger": (()=>Trigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AccordionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
function Root({ children }) {
    const [openItems, setOpenItems] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(new Set());
    const toggleItem = (value)=>{
        setOpenItems((prev)=>{
            const next = new Set(prev);
            if (next.has(value)) next.delete(value);
            else next.add(value);
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContext.Provider, {
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
const Header = ({ className, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
const Item = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this));
Item.displayName = "Item";
const Trigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, value = "item" }, ref)=>{
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(AccordionContext);
    const open = !!ctx?.openItems.has(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
});
Trigger.displayName = "Trigger";
const Content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, value = "item" }, ref)=>{
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(AccordionContext);
    const open = !!ctx?.openItems.has(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        "data-state": open ? "open" : "closed",
        children: open ? children : null
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion-primitive.tsx",
        lineNumber: 66,
        columnNumber: 7
    }, this);
});
Content.displayName = "Content";
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/accordion-primitive.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Header, {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger, {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex  items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger.displayName;
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
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
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2d$primitive$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
;
}}),
"[project]/src/components/PageHome/Discover/AccordionFAQ.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// AccordionFAQ.tsx: Componente básico de Accordion.
// Utilizado na versão desktop da section Discover e estendido no AccordionFaqMobile para a versão mobile.
__turbopack_esm__({
    "AccordionFAQ": (()=>AccordionFAQ)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
;
;
;
;
function AccordionFAQ({ data, onValueChange, defaultValue, mobileContentData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
        type: "single",
        collapsible: true,
        className: "max-w-[628px]  ",
        onValueChange: onValueChange,
        defaultValue: defaultValue,
        children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                value: `item-${index + 1}`,
                className: "py-[16px] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                        className: "TypographyPlato20 pt-0 pb-[8px] hover:text-redSTD w-full flex gap-[12px] ",
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                        className: "w-full flex flex-col justify-start items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "TypographyPinter16w400",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Discover/AccordionFAQ.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            mobileContentData && mobileContentData[index] && // A estrutura interna deste bloco é idêntica à do conteúdo desktop em SectionDiscover.tsx
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[278px] mb-[24px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            mobileContentData[index].items.map((discoverItem, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${index === 1 ? "w-full" : "max-w-[390px] h-[20px]"} flex items-start`,
                                                            children: [
                                                                discoverItem.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${discoverItem.icon ? "mr-4" : "mr-0"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                        itemIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            item.buttonText && item.buttonHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: item.buttonHref,
                                variant: "btnLink",
                                className: "textbtnLink hover:text-red700 mt-[16px] p-0 ",
                                children: [
                                    item.buttonText,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
}}),
"[project]/src/components/PageHome/Discover/faqData.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"question\":\"Ampla área de atendimento\",\"answer\":\"São mais de 15 mil áreas de atendimento com profissionais altamente qualificados, prontos para te atenderem.\",\"buttonText\":\"Buscar dentistas credenciados\",\"buttonHref\":\"https://site.dentaluni.com.br/rede-credenciada\"},{\"question\":\"Dentista qualificados\",\"answer\":\"Mais de 70% de nossos profissionais são especialistas, com média de 14 anos de experiência, que passam por um rigoroso processo de qualificação para atender o beneficiário Dental Uni com a qualidade merecida.\",\"buttonText\":\"Buscar dentistas credenciados\",\"buttonHref\":\"https://site.dentaluni.com.br/rede-credenciada\"},{\"question\":\"Grande cobertura\",\"answer\":\"Nossos planos têm uma extensa cobertura para consultas, emergências, radiografias, restaurações, tratamento de canal e de gengiva, remoção de dentes inclusos e os mais diversos procedimentos, com baixo custo para o seu bolso.\",\"buttonText\":\"\",\"buttonHref\":\"\"},{\"question\":\"Atenção Primária à Odontologia\",\"answer\":\"Um dos nossos principais diferenciais oferecidos, estão as iniciativas de Atenção Primária à Odontologia, baseadas em ações de prevenção à saúde bucal.\",\"buttonText\":\"\",\"buttonHref\":\"\"}]"));}}),
"[project]/src/components/PageHome/Discover/discoverContent.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"imageSrc\":\"/assets/img/img-dental-uni-FAQ.webp\",\"items\":[{\"icon\":\"\",\"text\":\"Pesquise agora a rede de atendimento na sua localização.\"},{\"icon\":\"\",\"text\":\"\"}],\"finalDescription\":\"Torne-se um beneficiário da Dental Uni e garanta sorrisos saudáveis com serviço de qualidade.\"},{\"imageSrc\":\"/assets/img/img-dentistaFAQ.webp\",\"items\":[{\"icon\":\"IconShieldFAQ\",\"text\":\"70% dos nossos profissionais são especialistas\"},{\"icon\":\"IconShieldFAQ\",\"text\":\"Média de 14 anos de experiência\"}],\"finalDescription\":\"Busque agora o dentista mais próximo de você!\"},{\"imageSrc\":\"/assets/img/img-familyFAQ.webp\",\"items\":[{\"icon\":\"\",\"text\":\"Acesso também à cobertura adicional\"},{\"icon\":\"\",\"text\":\"\"}],\"finalDescription\":\"Possibilidade de parcelamento dos atos complementares ao plano contratado. Uma facilidade incrível para dar acesso a uma odontologia completa.\"},{\"imageSrc\":\"/assets/img/img-sorrisoFAQ.webp\",\"items\":[{\"icon\":\"IconStarFAQ\",\"text\":\"Equipes especializadas e preparadas para fazer palestras de prevenção e educação bucal\"},{\"icon\":\"\",\"text\":\"\"}],\"finalDescription\":\"\"}]"));}}),
"[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AccordionFaqMobile": (()=>AccordionFaqMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$faqData$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/faqData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/discoverContent.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AccordionFaqMobile() {
    // State para controlar qual item de conteúdo está ativo.
    // Embora o AccordionFAQ possa lidar com isso, mantemos aqui para controle total sobre a renderização mobile.
    const [activeContentIndex, setActiveContentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Handler para atualizar o activeContentIndex quando um item do accordion é expandido.
    const handleAccordionValueChange = (value)=>{
        if (value) {
            const index = parseInt(value.split("-")[1], 10) - 1;
            setActiveContentIndex(index);
        }
    };
    return(// Container principal para o componente mobile
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex justify-start items-center ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full  ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                type: "single",
                collapsible: true,
                className: "w-full h-auto border-b  ",
                onValueChange: handleAccordionValueChange,
                defaultValue: "item-1",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$faqData$2e$json__$28$json$29$__["default"].map((item, index)=>// Cada item do Accordion mapeado a partir dos dados do FAQ
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: `item-${index + 1}`,
                        className: "w-full py-[16px] px-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "TypographyPlato24 @tablet:TypographyPlato20 pt-0 pb-[8px] hover:text-redSTD w-full ",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "flex flex-col justify-start items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "TypographyPinter16w400",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    item.buttonText && item.buttonHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        href: item.buttonHref,
                                        variant: "btnLink",
                                        className: "textbtnLink hover:text-red700 mt-[16px]",
                                        children: [
                                            item.buttonText,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "IconArrowright",
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this),
                                    index === activeContentIndex && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__["default"][index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full mt-4 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-auto mb-[24px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__["default"][index].imageSrc,
                                                    alt: "Discover Image",
                                                    className: "w-full object-cover "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__["default"][index].items.map((discoverItem, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${index === 1 ? "w-full" : "max-w-[390px] h-[20px]"} flex items-start  `,
                                                                children: [
                                                                    discoverItem.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${discoverItem.icon ? "mr-4" : "mr-0 "} `,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                                            className: "",
                                                                            name: discoverItem.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "TypographyPinter16w500g950 ",
                                                                        children: discoverItem.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, itemIndex, false, {
                                                            fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 27
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "max-w-[420px] TypographyPinter16w400 pt-4",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__["default"][index].finalDescription
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this));
}
}}),
"[project]/src/components/PageHome/Discover/SectionDiscover.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SectionDiscover": (()=>SectionDiscover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$AccordionFAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/AccordionFAQ.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/scripts/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$faqData$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/faqData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/discoverContent.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$AccordionFaqMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/PageHome/Discover/AccordionFaqMobile.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SectionDiscover() {
    // State para controlar qual item de conteúdo está ativo na visualização desktop.
    // No mobile, esta lógica agora reside no AccordionFaqMobile.tsx.
    const [activeContentIndex, setActiveContentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Handler chamado quando o valor do accordion muda (usado no desktop).
    // Atualiza o activeContentIndex para mostrar o conteúdo correspondente.
    // No mobile, a função similar está dentro do AccordionFaqMobile.tsx.
    const handleAccordionValueChange = (value)=>{
        if (value) {
            const index = parseInt(value.split("-")[1], 10) - 1;
            setActiveContentIndex(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-row py-[88px] mt-[120px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-start @laptop:justify-center mb-[48px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[560px] flex flex-col gap-[8px]  @laptop:text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "TypographyPinter14w500",
                                    children: "AINDA NÃO É BENEFICIÁRIO?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "TypographyH1mobile @tablet:TypographyH1 ",
                                    children: "Descubra o mundo de benefícios que oferecemos."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full justify-between items-start hidden @Desktop:flex ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[628px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$AccordionFAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionFAQ"], {
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$faqData$2e$json__$28$json$29$__["default"],
                                    onValueChange: handleAccordionValueChange,
                                    defaultValue: "item-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$discoverContent$2e$json__$28$json$29$__["default"].map((sectionData, index)=>// Renderiza o bloco de conteúdo apenas se for o índice ativo no desktop
                                index === activeContentIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[520px] h-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[278px] mb-[24px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: sectionData.imageSrc,
                                                alt: "Discover Image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                lineNumber: 76,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col p-0 ",
                                            children: [
                                                sectionData.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${index === 1 ? "w-full" : "max-w-[390px]"} flex items-center `,
                                                                children: [
                                                                    item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${item.icon ? "mr-4" : "mr-0 "} `,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                                            className: "",
                                                                            name: item.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                                            lineNumber: 95,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                                        lineNumber: 92,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "TypographyPinter16w500g950 ",
                                                                        children: item.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 29
                                                            }, this),
                                                            itemIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scripts$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "IconArrowFAQ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, itemIndex, true, {
                                                        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 27
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "w-[420px] TypographyPinter16w400 mt-[12px]",
                                                    children: sectionData.finalDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                            lineNumber: 79,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "@Desktop:hidden ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHome$2f$Discover$2f$AccordionFaqMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionFaqMobile"], {}, void 0, false, {
                            fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PageHome/Discover/SectionDiscover.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_6776b2._.js.map