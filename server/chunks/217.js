"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 9217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderItem": () => (/* binding */ SliderItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_size_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5149);
/* harmony import */ var _use_animation_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4015);




const SliderContainer = ({ children , initialOffsetX , className , contentWidth  })=>{
    const { innerWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_size_observer__WEBPACK_IMPORTED_MODULE_2__.SizeContext);
    const refScrollX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(initialOffsetX);
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const refContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const enabled = innerWidth < contentWidth;
    (0,_use_animation_frame__WEBPACK_IMPORTED_MODULE_3__["default"])(enabled, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const { current: elContainer  } = refContainer;
        const { current: elContent  } = refContent;
        if (elContainer && elContent) {
            refScrollX.current += 0.5;
            elContainer.scrollLeft = refScrollX.current;
            if (elContainer.scrollLeft >= elContent.clientWidth) {
                refScrollX.current = 0;
                elContainer.scrollLeft = 0;
            }
        }
    }, []));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: refContainer,
        className: `overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none  ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: refContent,
                className: "inline-block",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: enabled ? "inline-block" : "hidden",
                children: children
            })
        ]
    });
};
const SliderItem = ({ children , width  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "inline-flex justify-center items-center mx-4",
        style: {
            width
        },
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderContainer);


/***/ }),

/***/ 4015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useAnimationFrame = (enabled, callback)=>{
    const requestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const animate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        callback();
        requestRef.current = requestAnimationFrame(animate);
    }, [
        callback
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (enabled) {
            requestRef.current = requestAnimationFrame(animate);
            return ()=>{
                if (requestRef.current) {
                    return cancelAnimationFrame(requestRef.current);
                }
            };
        }
    }, [
        enabled,
        animate
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAnimationFrame);


/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SizeContext": () => (/* binding */ SizeContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SizeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    innerWidth: 0
});
const SizeObserver = ({ children  })=>{
    const [innerWidth, setInnerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setInnerWidth(window.innerWidth);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleResize();
        window.addEventListener("resize", handleResize, {
            passive: true
        });
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        handleResize
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SizeContext.Provider, {
        value: {
            innerWidth
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeObserver);


/***/ })

};
;