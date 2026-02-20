(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/visual-transmissions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisualTransmissionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sound$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sound-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SLOTS = [
    {
        title: "Fonseca Live Set",
        status: "TRANSMISSION UPLOADING — STAND BY"
    },
    {
        title: "Jack — Corridor Session",
        status: "RECORDING IN PROGRESS"
    },
    {
        title: "Adam — Senate District Residency",
        status: "ARCHIVAL RECOVERY IN PROGRESS"
    },
    {
        title: "Bennie James — Off-World Session",
        status: "SIGNAL DECODING"
    },
    {
        title: "Command Collective — Live from Milliways",
        status: "AWAITING CLEARANCE"
    }
];
function VisualTransmissionsPage() {
    _s();
    const { playHover } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sound$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSounds"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 min-h-screen px-4 pt-24 pb-20 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-wider text-primary crt-flicker neon-glow-text text-center sm:text-4xl md:text-5xl",
                    children: "Visual Transmissions"
                }, void 0, false, {
                    fileName: "[project]/app/visual-transmissions/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed",
                    children: "Some moments cannot be contained in audio alone. This archive contains visual recordings from across the galaxy — live sets, corridor sessions, and archival performance footage."
                }, void 0, false, {
                    fileName: "[project]/app/visual-transmissions/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-6 sm:grid-cols-2",
                    children: SLOTS.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseEnter: playHover,
                            className: "group relative flex aspect-video flex-col items-center justify-center rounded border border-border bg-card/40 backdrop-blur-sm overflow-hidden pulse-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 pointer-events-none opacity-20",
                                    style: {
                                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.04) 2px, rgba(57,255,20,0.04) 4px)"
                                    },
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/visual-transmissions/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-primary glitch-hover relative z-10",
                                    children: slot.title
                                }, void 0, false, {
                                    fileName: "[project]/app/visual-transmissions/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground pulse-text blink-cursor relative z-10",
                                    children: slot.status
                                }, void 0, false, {
                                    fileName: "[project]/app/visual-transmissions/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, slot.title, true, {
                            fileName: "[project]/app/visual-transmissions/page.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/visual-transmissions/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/visual-transmissions/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/visual-transmissions/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(VisualTransmissionsPage, "KEFv+o2jVRx6K/6Zoy0+N4tWcWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sound$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSounds"]
    ];
});
_c = VisualTransmissionsPage;
var _c;
__turbopack_context__.k.register(_c, "VisualTransmissionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_visual-transmissions_page_tsx_2a4f2645._.js.map