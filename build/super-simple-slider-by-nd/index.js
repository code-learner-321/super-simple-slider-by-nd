/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CommonSliderSettings.js":
/*!************************************************!*\
  !*** ./src/components/CommonSliderSettings.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const commonSliderSettings = ({
  sliderHeight,
  sliderHeightTablet,
  sliderHeightMobile,
  fontFamilyFirstField,
  isDesktop,
  isTablet,
  alignItems,
  justifyContent,
  isMobile,
  backgroundColor,
  opacity,
  setAttributes
}) => {
  const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(12);
  const [heightTablet, setHeightTablet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(12);
  const [heightMobile, setHeightMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(12);
  const onChangeHeightHandler = value => {
    setHeight(value);
    setAttributes({
      sliderHeight: value
    });
  };
  const onChangeHeightHandlerTablet = value => {
    setHeightTablet(value);
    setAttributes({
      sliderHeightTablet: value
    });
  };
  const onChangeHeightHandlerMobile = value => {
    setHeightMobile(value);
    setAttributes({
      sliderHeightMobile: value
    });
  };
  const fontFamilyOptions = [{
    label: "Arial",
    value: "Arial"
  }, {
    label: "Helvetica",
    value: "Helvetica"
  }, {
    label: "Times New Roman",
    value: "Times New Roman"
  }, {
    label: "Courier New",
    value: "Courier New"
  }, {
    label: "Georgia",
    value: "Georgia"
  }, {
    label: "Verdana",
    value: "Verdana"
  }, {
    label: "Tahoma",
    value: "Tahoma"
  }, {
    label: "Trebuchet MS",
    value: "Trebuchet MS"
  }, {
    label: "Comic Sans MS",
    value: "Comic Sans MS"
  }, {
    label: "Lucida Console",
    value: "Lucida Console"
  }, {
    label: "Monaco",
    value: "Monaco"
  }, {
    label: "Garamond",
    value: "Garamond"
  }, {
    label: "Impact",
    value: "Impact"
  }, {
    label: "Palatino",
    value: "Palatino"
  }, {
    label: "Century Gothic",
    value: "Century Gothic"
  }, {
    label: "Brush Script MT",
    value: "Brush Script MT"
  }, {
    label: "Cambria",
    value: "Cambria"
  }, {
    label: "Candara",
    value: "Candara"
  }, {
    label: "Consolas",
    value: "Consolas"
  }, {
    label: "Corbel",
    value: "Corbel"
  }, {
    label: "Franklin Gothic Medium",
    value: "Franklin Gothic Medium"
  }, {
    label: "Gill Sans",
    value: "Gill Sans"
  }, {
    label: "Perpetua",
    value: "Perpetua"
  }, {
    label: "Rockwell",
    value: "Rockwell"
  }, {
    label: "Segoe UI",
    value: "Segoe UI"
  }, {
    label: "Futura",
    value: "Futura"
  }, {
    label: "Calibri",
    value: "Calibri"
  }, {
    label: "Book Antiqua",
    value: "Book Antiqua"
  }, {
    label: "Lucida Bright",
    value: "Lucida Bright"
  }, {
    label: "Papyrus",
    value: "Papyrus"
  }, {
    label: "Didot",
    value: "Didot"
  }, {
    label: "French Script MT",
    value: "French Script MT"
  }, {
    label: "Herculanum",
    value: "Herculanum"
  }, {
    label: "Kohinoor Bangla",
    value: "Kohinoor Bangla"
  }];
  const selectRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleKeyDown = event => {
      if (event.target !== selectRef.current) return;
      const currentIndex = fontFamilyOptions.findIndex(option => option.value === fontFamilyFirstField);
      let newIndex;
      if (event.key === "ArrowUp") {
        newIndex = (currentIndex - 1 + fontFamilyOptions.length) % fontFamilyOptions.length;
      } else if (event.key === "ArrowDown") {
        newIndex = (currentIndex + 1) % fontFamilyOptions.length;
      }
      if (newIndex !== undefined) {
        setAttributes({
          fontFamilyFirstField: fontFamilyOptions[newIndex].value
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fontFamilyFirstField, fontFamilyOptions, setAttributes]);

  // alignItems and JustifyContent
  const onChangeAlignItems = newAlignItems => {
    setAttributes({
      alignItems: newAlignItems
    });
  };
  const onChangeJustifyContent = newJustifyContent => {
    setAttributes({
      justifyContent: newJustifyContent
    });
  };

  //CAPTION BACKGROUND WITH OPACITY..

  const onChangeComplete = color => {
    if (color) {
      const rgbaColor = hexToRgba(color, opacity / 100);
      setAttributes({
        backgroundColor: rgbaColor
      });
    } else {
      console.error("Invalid color object:", color);
    }
  };
  const onOpacityChange = newOpacity => {
    const rgbaColor = backgroundColorToRgba(backgroundColor, newOpacity / 100);
    setAttributes({
      opacity: newOpacity,
      backgroundColor: rgbaColor
    });
  };
  const hexToRgba = (hex, alpha) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  const backgroundColorToRgba = (backgroundColor, alpha) => {
    const color = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (color) {
      const r = color[1];
      const g = color[2];
      const b = color[3];
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return backgroundColor;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true,
      label: "Slider Height",
      value: isDesktop ? sliderHeight : isTablet ? sliderHeightTablet : sliderHeightMobile,
      onChange: isDesktop ? onChangeHeightHandler : isTablet ? onChangeHeightHandlerTablet : onChangeHeightHandlerMobile,
      min: 12,
      max: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Font Family",
      value: fontFamilyFirstField,
      options: fontFamilyOptions,
      onChange: value => setAttributes({
        fontFamilyFirstField: value
      }),
      ref: selectRef
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align Items"),
      value: alignItems,
      options: [{
        label: "Flex Start",
        value: "flex-start"
      }, {
        label: "Center",
        value: "center"
      }, {
        label: "Flex End",
        value: "flex-end"
      }, {
        label: "Stretch",
        value: "stretch"
      }, {
        label: "Baseline",
        value: "baseline"
      }],
      onChange: onChangeAlignItems
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Justify Content"),
      value: justifyContent,
      options: [{
        label: "Flex Start",
        value: "flex-start"
      }, {
        label: "Center",
        value: "center"
      }, {
        label: "Flex End",
        value: "flex-end"
      }, {
        label: "Space Between",
        value: "space-between"
      }, {
        label: "Space Around",
        value: "space-around"
      }, {
        label: "Space Evenly",
        value: "space-evenly"
      }],
      onChange: onChangeJustifyContent
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Background Layer Opacity",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        className: "panel-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          className: "fontLabel",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("BACKGROUND LAYER COLOR", "super-simple-image-slider")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: backgroundColor,
          onChange: onChangeComplete
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: "Opacity",
        value: opacity,
        onChange: onOpacityChange,
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commonSliderSettings);

/***/ }),

/***/ "./src/components/firstFieldComponents/PaddingControlsDesktop.js":
/*!***********************************************************************!*\
  !*** ./src/components/firstFieldComponents/PaddingControlsDesktop.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PaddingControlsDesktop = ({
  adjustAllPadding,
  paddingAll,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  setAttributes,
  isDesktop
}) => {
  const onToggleAdjustAllPadding = value => {
    setAttributes({
      adjustAllPadding: value
    });
  };
  const onChangePadding = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      paddingAll: value,
      paddingTop: value,
      paddingRight: value,
      paddingBottom: value,
      paddingLeft: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: adjustAllPadding,
      onChange: onToggleAdjustAllPadding
    }), isDesktop && adjustAllPadding ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding",
      value: paddingAll,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: paddingTop,
        onChange: value => onChangePadding("paddingTop", value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: paddingRight,
        onChange: value => onChangePadding("paddingRight", value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: paddingBottom,
        onChange: value => onChangePadding("paddingBottom", value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: paddingLeft,
        onChange: value => onChangePadding("paddingLeft", value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaddingControlsDesktop);

/***/ }),

/***/ "./src/components/firstFieldComponents/PaddingControlsMobile.js":
/*!**********************************************************************!*\
  !*** ./src/components/firstFieldComponents/PaddingControlsMobile.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PaddingControlsMobile = ({
  adjustAllPaddingMobile,
  paddingAllMobile,
  paddingTopMobile,
  paddingRightMobile,
  paddingBottomMobile,
  paddingLeftMobile,
  setAttributes,
  isMobile
}) => {
  const onToggleAdjustAllPaddingMobile = value => {
    setAttributes({
      adjustAllPaddingMobile: value
    });
  };
  const onChangePaddingMobile = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAllMobile = value => {
    setAttributes({
      paddingAllMobile: value,
      paddingTopMobile: value,
      paddingRightMobile: value,
      paddingBottomMobile: value,
      paddingLeftMobile: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: adjustAllPaddingMobile,
      onChange: onToggleAdjustAllPaddingMobile
    }), isMobile && adjustAllPaddingMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: paddingAllMobile,
      onChange: onChangePaddingAllMobile,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: paddingTopMobile,
        onChange: value => onChangePaddingMobile('paddingTopMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: paddingRightMobile,
        onChange: value => onChangePaddingMobile('paddingRightMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: paddingBottomMobile,
        onChange: value => onChangePaddingMobile('paddingBottomMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: paddingLeftMobile,
        onChange: value => onChangePaddingMobile('paddingLeftMobile', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaddingControlsMobile);

/***/ }),

/***/ "./src/components/firstFieldComponents/PaddingControlsTablet.js":
/*!**********************************************************************!*\
  !*** ./src/components/firstFieldComponents/PaddingControlsTablet.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PaddingControlsTablet = ({
  adjustAllPaddingTablet,
  paddingAllTablet,
  paddingTopTablet,
  paddingRightTablet,
  paddingBottomTablet,
  paddingLeftTablet,
  setAttributes,
  isTablet
}) => {
  const onToggleAdjustAllPaddingTablet = value => {
    setAttributes({
      adjustAllPaddingTablet: value
    });
  };
  const onChangePaddingTablet = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAllTablet = value => {
    setAttributes({
      paddingAllTablet: value,
      paddingTopTablet: value,
      paddingRightTablet: value,
      paddingBottomTablet: value,
      paddingLeftTablet: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: adjustAllPaddingTablet,
      onChange: onToggleAdjustAllPaddingTablet
    }), isTablet && adjustAllPaddingTablet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: paddingAllTablet,
      onChange: onChangePaddingAllTablet,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: paddingTopTablet,
        onChange: value => onChangePaddingTablet('paddingTopTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: paddingRightTablet,
        onChange: value => onChangePaddingTablet('paddingRightTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: paddingBottomTablet,
        onChange: value => onChangePaddingTablet('paddingBottomTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: paddingLeftTablet,
        onChange: value => onChangePaddingTablet('paddingLeftTablet', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaddingControlsTablet);

/***/ }),

/***/ "./src/components/firstFieldComponents/TypographySettings.js":
/*!*******************************************************************!*\
  !*** ./src/components/firstFieldComponents/TypographySettings.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const typographyFirstField = ({
  firstFieldfontWeight,
  sliderMobileSize,
  sliderTabletSize,
  sliderDesktopSize,
  textColorFirstField,
  isMobile,
  isTablet,
  isDesktop,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Font Weight",
      value: firstFieldfontWeight,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "text-domain"),
        value: "normal"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "text-domain"),
        value: "bold"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "text-domain"),
        value: "bolder"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "text-domain"),
        value: "lighter"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "text-domain"),
        value: "italic"
      }],
      onChange: value => setAttributes({
        firstFieldfontWeight: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true,
      label: isDesktop ? "Select Desktop Font Size" : isTablet ? "Select Tablet Font Size" : "Select Mobile Font Size",
      value: isDesktop ? sliderDesktopSize : isTablet ? sliderTabletSize : sliderMobileSize,
      onChange: value => isDesktop ? setAttributes({
        sliderDesktopSize: value
      }) : isTablet ? setAttributes({
        sliderTabletSize: value
      }) : setAttributes({
        sliderMobileSize: value
      }),
      min: 10,
      max: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "panel-column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "fontLabel",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SELECT FONT COLOR", "super-simple-image-slider")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
        color: textColorFirstField,
        onChange: newColor => setAttributes({
          textColorFirstField: newColor
        }),
        enableAlpha: true,
        defaultValue: "#000"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyFirstField);

/***/ }),

/***/ "./src/components/secondFieldComponents/SecondFieldPaddingControlsDesktop.js":
/*!***********************************************************************************!*\
  !*** ./src/components/secondFieldComponents/SecondFieldPaddingControlsDesktop.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SecondFieldPaddingControlsDesktop = ({
  secondFieldPaddingAllDesktop,
  secondFieldPaddingTopDesktop,
  secondFieldPaddingRightDesktop,
  secondFieldPaddingBottomDesktop,
  secondFieldPaddingLeftDesktop,
  secondFieldAdjustAllPaddingDesktop,
  isDesktop,
  setAttributes
}) => {
  const secondFieldPaddingHandle = value => {
    setAttributes({
      secondFieldAdjustAllPaddingDesktop: value
    });
  };
  const onChangePaddingHandle = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      secondFieldPaddingAllDesktop: value,
      secondFieldPaddingTopDesktop: value,
      secondFieldPaddingRightDesktop: value,
      secondFieldPaddingBottomDesktop: value,
      secondFieldPaddingLeftDesktop: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: secondFieldAdjustAllPaddingDesktop,
      onChange: secondFieldPaddingHandle
    }), isDesktop && secondFieldAdjustAllPaddingDesktop ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: secondFieldPaddingAllDesktop,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: secondFieldPaddingTopDesktop,
        onChange: value => onChangePaddingHandle('secondFieldPaddingTopDesktop', value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: secondFieldPaddingRightDesktop,
        onChange: value => onChangePaddingHandle('secondFieldPaddingRightDesktop', value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: secondFieldPaddingBottomDesktop,
        onChange: value => onChangePaddingHandle('secondFieldPaddingBottomDesktop', value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: secondFieldPaddingLeftDesktop,
        onChange: value => onChangePaddingHandle('secondFieldPaddingLeftDesktop', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondFieldPaddingControlsDesktop);

/***/ }),

/***/ "./src/components/secondFieldComponents/SecondFieldPaddingControlsMobile.js":
/*!**********************************************************************************!*\
  !*** ./src/components/secondFieldComponents/SecondFieldPaddingControlsMobile.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SecondFieldPaddingControlsMobile = ({
  secondFieldPaddingAllMobile,
  secondFieldPaddingTopMobile,
  secondFieldPaddingRightMobile,
  secondFieldPaddingBottomMobile,
  secondFieldPaddingLeftMobile,
  secondFieldAdjustAllPaddingMobile,
  isMobile,
  setAttributes
}) => {
  const secondFieldPaddingHandle = value => {
    setAttributes({
      secondFieldAdjustAllPaddingMobile: value
    });
  };
  const onChangePaddingHandle = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      secondFieldPaddingAllMobile: value,
      secondFieldPaddingTopMobile: value,
      secondFieldPaddingRightMobile: value,
      secondFieldPaddingBottomMobile: value,
      secondFieldPaddingLeftMobile: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: secondFieldAdjustAllPaddingMobile,
      onChange: secondFieldPaddingHandle
    }), isMobile && secondFieldAdjustAllPaddingMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: secondFieldPaddingAllMobile,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: secondFieldPaddingTopMobile,
        onChange: value => onChangePaddingHandle('secondFieldPaddingTopMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: secondFieldPaddingRightMobile,
        onChange: value => onChangePaddingHandle('secondFieldPaddingRightMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: secondFieldPaddingBottomMobile,
        onChange: value => onChangePaddingHandle('secondFieldPaddingBottomMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: secondFieldPaddingLeftMobile,
        onChange: value => onChangePaddingHandle('secondFieldPaddingLeftMobile', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondFieldPaddingControlsMobile);

/***/ }),

/***/ "./src/components/secondFieldComponents/SecondFieldPaddingControlsTablet.js":
/*!**********************************************************************************!*\
  !*** ./src/components/secondFieldComponents/SecondFieldPaddingControlsTablet.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SecondFieldPaddingControlsTablet = ({
  secondFieldPaddingAllTablet,
  secondFieldPaddingTopTablet,
  secondFieldPaddingRightTablet,
  secondFieldPaddingBottomTablet,
  secondFieldPaddingLeftTablet,
  secondFieldAdjustAllPaddingTablet,
  isTablet,
  setAttributes
}) => {
  const secondFieldPaddingHandle = value => {
    setAttributes({
      secondFieldAdjustAllPaddingTablet: value
    });
  };
  const onChangePaddingHandle = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      secondFieldPaddingAllTablet: value,
      secondFieldPaddingTopTablet: value,
      secondFieldPaddingRightTablet: value,
      secondFieldPaddingBottomTablet: value,
      secondFieldPaddingLeftTablet: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: secondFieldAdjustAllPaddingTablet,
      onChange: secondFieldPaddingHandle
    }), isTablet && secondFieldAdjustAllPaddingTablet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: secondFieldPaddingAllTablet,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: secondFieldPaddingTopTablet,
        onChange: value => onChangePaddingHandle('secondFieldPaddingTopTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: secondFieldPaddingRightTablet,
        onChange: value => onChangePaddingHandle('secondFieldPaddingRightTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: secondFieldPaddingBottomTablet,
        onChange: value => onChangePaddingHandle('secondFieldPaddingBottomTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: secondFieldPaddingLeftTablet,
        onChange: value => onChangePaddingHandle('secondFieldPaddingLeftTablet', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondFieldPaddingControlsTablet);

/***/ }),

/***/ "./src/components/secondFieldComponents/TypographySecondFieldSettings.js":
/*!*******************************************************************************!*\
  !*** ./src/components/secondFieldComponents/TypographySecondFieldSettings.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const typographySecondField = ({
  secondFieldfontWeight,
  sliderMobileSizeSecondField,
  sliderTabletSizeSecondField,
  sliderDesktopSizeSecondField,
  textColorSecondField,
  isTablet,
  isDesktop,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "text-domain"),
      value: secondFieldfontWeight,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "text-domain"),
        value: "normal"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "text-domain"),
        value: "bold"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "text-domain"),
        value: "bolder"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "text-domain"),
        value: "lighter"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "text-domain"),
        value: "italic"
      }],
      onChange: value => setAttributes({
        secondFieldfontWeight: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true,
      label: isDesktop ? "Select Desktop Font Size" : isTablet ? "Select Tablet Font Size" : "Select Mobile Font Size",
      value: isDesktop ? sliderDesktopSizeSecondField : isTablet ? sliderTabletSizeSecondField : sliderMobileSizeSecondField,
      onChange: value => isDesktop ? setAttributes({
        sliderDesktopSizeSecondField: value
      }) : isTablet ? setAttributes({
        sliderTabletSizeSecondField: value
      }) : setAttributes({
        sliderMobileSizeSecondField: value
      }),
      min: 10,
      max: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "panel-column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "fontLabel",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SELECT FONT COLOR", "super-simple-image-slider")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
        color: textColorSecondField,
        onChange: newColor => setAttributes({
          textColorSecondField: newColor
        }),
        enableAlpha: true,
        defaultValue: "#000"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographySecondField);

/***/ }),

/***/ "./src/components/thirdFieldComponents/ThirdFieldPaddingControlsDesktop.js":
/*!*********************************************************************************!*\
  !*** ./src/components/thirdFieldComponents/ThirdFieldPaddingControlsDesktop.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ThirdFieldPaddingControlsDesktop = ({
  thirdFieldPaddingAllDesktop,
  thirdFieldPaddingTopDesktop,
  thirdFieldPaddingRightDesktop,
  thirdFieldPaddingBottomDesktop,
  thirdFieldPaddingLeftDesktop,
  thirdFieldAdjustAllPaddingDesktop,
  isDesktop,
  setAttributes
}) => {
  const thirdFieldPaddingHandle = value => {
    setAttributes({
      thirdFieldAdjustAllPaddingDesktop: value
    });
  };
  const onChangePaddingHandle = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      thirdFieldPaddingAllDesktop: value,
      thirdFieldPaddingTopDesktop: value,
      thirdFieldPaddingRightDesktop: value,
      thirdFieldPaddingBottomDesktop: value,
      thirdFieldPaddingLeftDesktop: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: thirdFieldAdjustAllPaddingDesktop,
      onChange: thirdFieldPaddingHandle
    }), isDesktop && thirdFieldAdjustAllPaddingDesktop ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: thirdFieldPaddingAllDesktop,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: thirdFieldPaddingTopDesktop,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingTopDesktop', value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: thirdFieldPaddingRightDesktop,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingRightDesktop', value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: thirdFieldPaddingBottomDesktop,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingBottomDesktop', value),
        min: 0,
        max: 100
      }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: thirdFieldPaddingLeftDesktop,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingLeftDesktop', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThirdFieldPaddingControlsDesktop);

/***/ }),

/***/ "./src/components/thirdFieldComponents/ThirdFieldPaddingControlsMobile.js":
/*!********************************************************************************!*\
  !*** ./src/components/thirdFieldComponents/ThirdFieldPaddingControlsMobile.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ThirdFieldPaddingControlsMobile = ({
  thirdFieldPaddingAllMobile,
  thirdFieldPaddingTopMobile,
  thirdFieldPaddingRightMobile,
  thirdFieldPaddingBottomMobile,
  thirdFieldPaddingLeftMobile,
  thirdFieldAdjustAllPaddingMobile,
  isMobile,
  setAttributes
}) => {
  const thirdFieldPaddingHandle = value => {
    setAttributes({
      thirdFieldAdjustAllPaddingMobile: value
    });
  };
  const onChangePaddingHandle = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      thirdFieldPaddingAllMobile: value,
      thirdFieldPaddingTopMobile: value,
      thirdFieldPaddingRightMobile: value,
      thirdFieldPaddingBottomMobile: value,
      thirdFieldPaddingLeftMobile: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: thirdFieldAdjustAllPaddingMobile,
      onChange: thirdFieldPaddingHandle
    }), isMobile && thirdFieldAdjustAllPaddingMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: thirdFieldPaddingAllMobile,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: thirdFieldPaddingTopMobile,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingTopMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: thirdFieldPaddingRightMobile,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingRightMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: thirdFieldPaddingBottomMobile,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingBottomMobile', value),
        min: 0,
        max: 100
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: thirdFieldPaddingLeftMobile,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingLeftMobile', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThirdFieldPaddingControlsMobile);

/***/ }),

/***/ "./src/components/thirdFieldComponents/ThirdFieldPaddingControlsTablet.js":
/*!********************************************************************************!*\
  !*** ./src/components/thirdFieldComponents/ThirdFieldPaddingControlsTablet.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ThirdFieldPaddingControlsTablet = ({
  thirdFieldPaddingAllTablet,
  thirdFieldPaddingTopTablet,
  thirdFieldPaddingRightTablet,
  thirdFieldPaddingBottomTablet,
  thirdFieldPaddingLeftTablet,
  thirdFieldAdjustAllPaddingTablet,
  isTablet,
  setAttributes
}) => {
  const thirdFieldPaddingHandle = value => {
    setAttributes({
      thirdFieldAdjustAllPaddingTablet: value
    });
  };
  const onChangePaddingHandle = (side, value) => {
    setAttributes({
      [side]: value
    });
  };
  const onChangePaddingAll = value => {
    setAttributes({
      thirdFieldPaddingAllTablet: value,
      thirdFieldPaddingTopTablet: value,
      thirdFieldPaddingRightTablet: value,
      thirdFieldPaddingBottomTablet: value,
      thirdFieldPaddingLeftTablet: value
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
      label: "Adjust All Side Padding",
      checked: thirdFieldAdjustAllPaddingTablet,
      onChange: thirdFieldPaddingHandle
    }), isTablet && thirdFieldAdjustAllPaddingTablet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Padding (All Sides)",
      value: thirdFieldPaddingAllTablet,
      onChange: onChangePaddingAll,
      min: 0,
      max: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Top",
        value: thirdFieldPaddingTopTablet,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingTopTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Right",
        value: thirdFieldPaddingRightTablet,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingRightTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Bottom",
        value: thirdFieldPaddingBottomTablet,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingBottomTablet', value),
        min: 0,
        max: 100
      }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        label: "Padding Left",
        value: thirdFieldPaddingLeftTablet,
        onChange: value => onChangePaddingHandle('thirdFieldPaddingLeftTablet', value),
        min: 0,
        max: 100
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThirdFieldPaddingControlsTablet);

/***/ }),

/***/ "./src/components/thirdFieldComponents/TypographyThirdFieldSettings.js":
/*!*****************************************************************************!*\
  !*** ./src/components/thirdFieldComponents/TypographyThirdFieldSettings.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const typographyThirdField = ({
  thirdFieldfontWeight,
  sliderMobileSizeThirdField,
  sliderTabletSizeThirdField,
  sliderDesktopSizeThirdField,
  textColorThirdField,
  isTablet,
  isDesktop,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "text-domain"),
      value: thirdFieldfontWeight,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "text-domain"),
        value: "normal"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "text-domain"),
        value: "bold"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "text-domain"),
        value: "bolder"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "text-domain"),
        value: "lighter"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "text-domain"),
        value: "italic"
      }],
      onChange: value => setAttributes({
        thirdFieldfontWeight: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true,
      label: isDesktop ? "Select Desktop Font Size" : isTablet ? "Select Tablet Font Size" : "Select Mobile Font Size",
      value: isDesktop ? sliderDesktopSizeThirdField : isTablet ? sliderTabletSizeThirdField : sliderMobileSizeThirdField,
      onChange: value => isDesktop ? setAttributes({
        sliderDesktopSizeThirdField: value
      }) : isTablet ? setAttributes({
        sliderTabletSizeThirdField: value
      }) : setAttributes({
        sliderMobileSizeThirdField: value
      }),
      min: 10,
      max: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "panel-column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: "fontLabel",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SELECT FONT COLOR", "super-simple-image-slider")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
        color: textColorThirdField,
        onChange: newColor => setAttributes({
          textColorThirdField: newColor
        }),
        enableAlpha: true,
        defaultValue: "#000"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyThirdField);

/***/ }),

/***/ "./src/super-simple-slider-by-nd/edit.js":
/*!***********************************************!*\
  !*** ./src/super-simple-slider-by-nd/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_firstFieldComponents_PaddingControlsDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/firstFieldComponents/PaddingControlsDesktop */ "./src/components/firstFieldComponents/PaddingControlsDesktop.js");
/* harmony import */ var _components_firstFieldComponents_PaddingControlsTablet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/firstFieldComponents/PaddingControlsTablet */ "./src/components/firstFieldComponents/PaddingControlsTablet.js");
/* harmony import */ var _components_firstFieldComponents_PaddingControlsMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/firstFieldComponents/PaddingControlsMobile */ "./src/components/firstFieldComponents/PaddingControlsMobile.js");
/* harmony import */ var _components_CommonSliderSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CommonSliderSettings */ "./src/components/CommonSliderSettings.js");
/* harmony import */ var _components_firstFieldComponents_TypographySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/firstFieldComponents/TypographySettings */ "./src/components/firstFieldComponents/TypographySettings.js");
/* harmony import */ var _components_secondFieldComponents_TypographySecondFieldSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/secondFieldComponents/TypographySecondFieldSettings */ "./src/components/secondFieldComponents/TypographySecondFieldSettings.js");
/* harmony import */ var _components_secondFieldComponents_SecondFieldPaddingControlsDesktop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/secondFieldComponents/SecondFieldPaddingControlsDesktop */ "./src/components/secondFieldComponents/SecondFieldPaddingControlsDesktop.js");
/* harmony import */ var _components_secondFieldComponents_SecondFieldPaddingControlsTablet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/secondFieldComponents/SecondFieldPaddingControlsTablet */ "./src/components/secondFieldComponents/SecondFieldPaddingControlsTablet.js");
/* harmony import */ var _components_secondFieldComponents_SecondFieldPaddingControlsMobile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/secondFieldComponents/SecondFieldPaddingControlsMobile */ "./src/components/secondFieldComponents/SecondFieldPaddingControlsMobile.js");
/* harmony import */ var _components_thirdFieldComponents_TypographyThirdFieldSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/thirdFieldComponents/TypographyThirdFieldSettings */ "./src/components/thirdFieldComponents/TypographyThirdFieldSettings.js");
/* harmony import */ var _components_thirdFieldComponents_ThirdFieldPaddingControlsDesktop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/thirdFieldComponents/ThirdFieldPaddingControlsDesktop */ "./src/components/thirdFieldComponents/ThirdFieldPaddingControlsDesktop.js");
/* harmony import */ var _components_thirdFieldComponents_ThirdFieldPaddingControlsTablet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/thirdFieldComponents/ThirdFieldPaddingControlsTablet */ "./src/components/thirdFieldComponents/ThirdFieldPaddingControlsTablet.js");
/* harmony import */ var _components_thirdFieldComponents_ThirdFieldPaddingControlsMobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/thirdFieldComponents/ThirdFieldPaddingControlsMobile */ "./src/components/thirdFieldComponents/ThirdFieldPaddingControlsMobile.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editor.scss */ "./src/super-simple-slider-by-nd/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);







// external...













// external...



function Edit({
  attributes,
  setAttributes
}) {
  const {
    sliderHeight,
    sliderHeightTablet,
    sliderHeightMobile,
    textColorFirstField,
    textColorSecondField,
    textColorThirdField,
    fontFamilyFirstField,
    sliderDesktopSize,
    sliderTabletSize,
    sliderMobileSize,
    sliderDesktopSizeSecondField,
    sliderTabletSizeSecondField,
    sliderMobileSizeSecondField,
    sliderDesktopSizeThirdField,
    sliderTabletSizeThirdField,
    sliderMobileSizeThirdField,
    adjustAllPadding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingAll,
    adjustAllPaddingTablet,
    paddingTopTablet,
    paddingRightTablet,
    paddingBottomTablet,
    paddingLeftTablet,
    paddingAllTablet,
    paddingAllMobile,
    paddingTopMobile,
    paddingRightMobile,
    paddingBottomMobile,
    paddingLeftMobile,
    adjustAllPaddingMobile,
    firstFieldfontWeight,
    secondFieldfontWeight,
    secondFieldPaddingAllDesktop,
    secondFieldPaddingTopDesktop,
    secondFieldPaddingRightDesktop,
    secondFieldPaddingBottomDesktop,
    secondFieldPaddingLeftDesktop,
    secondFieldAdjustAllPaddingDesktop,
    secondFieldPaddingAllTablet,
    secondFieldPaddingTopTablet,
    secondFieldPaddingRightTablet,
    secondFieldPaddingBottomTablet,
    secondFieldPaddingLeftTablet,
    secondFieldAdjustAllPaddingTablet,
    secondFieldPaddingAllMobile,
    secondFieldPaddingTopMobile,
    secondFieldPaddingRightMobile,
    secondFieldPaddingBottomMobile,
    secondFieldPaddingLeftMobile,
    secondFieldAdjustAllPaddingMobile,
    thirdFieldfontWeight,
    thirdFieldPaddingAllDesktop,
    thirdFieldPaddingTopDesktop,
    thirdFieldPaddingRightDesktop,
    thirdFieldPaddingBottomDesktop,
    thirdFieldPaddingLeftDesktop,
    thirdFieldAdjustAllPaddingDesktop,
    thirdFieldPaddingAllTablet,
    thirdFieldPaddingTopTablet,
    thirdFieldPaddingRightTablet,
    thirdFieldPaddingBottomTablet,
    thirdFieldPaddingLeftTablet,
    thirdFieldAdjustAllPaddingTablet,
    thirdFieldPaddingAllMobile,
    thirdFieldPaddingTopMobile,
    thirdFieldPaddingRightMobile,
    thirdFieldPaddingBottomMobile,
    thirdFieldPaddingLeftMobile,
    thirdFieldAdjustAllPaddingMobile,
    alignItems,
    justifyContent,
    backgroundColor,
    opacity
  } = attributes;

  // const [fontSize, setFontSize] = useState(12);

  // STYLES FOR RESPOSIVE FONT SIZE
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [isTablet, setIsTablet] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [isDesktop, setIsDesktop] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const getSliderHeight = () => {
    if (isDesktop) {
      return sliderHeight;
    } else if (isTablet) {
      return sliderHeightTablet;
    } else {
      return sliderHeightMobile;
    }
  };
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType
    } = select("core/edit-post");
    return {
      deviceType: __experimentalGetPreviewDeviceType()
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (deviceType === "Mobile") {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (deviceType === "Tablet") {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else if (deviceType === "Desktop") {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(false);
    }
  }, [deviceType]);

  // FIRST TEXT FIELD PADDINGS FOR DESKTOP STARTS.......
  const paddingStyle = adjustAllPadding ? `${paddingAll}px` : `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;

  // FIRST TEXT FIELD PADDINGS FOR DESKTOP ENDS HERE.......

  // PADDINGS FOR TABLET STARTS.......
  const paddingStyleTablet = adjustAllPaddingTablet ? `${paddingAllTablet}px` : `${paddingTopTablet}px ${paddingRightTablet}px ${paddingBottomTablet}px ${paddingLeftTablet}px`;

  // FIRST TEXT FIELD PADDINGS FOR TABLET ENDS HERE.......

  // PADDINGS FOR DESKTOP STARTS.......
  const paddingStyleMobile = adjustAllPaddingMobile ? `${paddingAllMobile}px` : `${paddingTopMobile}px ${paddingRightMobile}px ${paddingBottomMobile}px ${paddingLeftMobile}px`;

  // FIRST TEXT FIELD PADDINGS FOR DESTOP ENDS HERE.......

  // SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......
  const secondFieldPaddingStyleDesktop = secondFieldAdjustAllPaddingDesktop ? `${secondFieldPaddingAllDesktop}px` : `${secondFieldPaddingTopDesktop}px ${secondFieldPaddingRightDesktop}px ${secondFieldPaddingBottomDesktop}px ${secondFieldPaddingLeftDesktop}px`;
  const secondFieldPaddingStyleTablet = secondFieldAdjustAllPaddingTablet ? `${secondFieldPaddingAllTablet}px` : `${secondFieldPaddingTopTablet}px ${secondFieldPaddingRightTablet}px ${secondFieldPaddingBottomTablet}px ${secondFieldPaddingLeftTablet}px`;
  const secondFieldPaddingStyleMobile = secondFieldAdjustAllPaddingMobile ? `${secondFieldPaddingAllMobile}px` : `${secondFieldPaddingTopMobile}px ${secondFieldPaddingRightMobile}px ${secondFieldPaddingBottomMobile}px ${secondFieldPaddingLeftMobile}px`;

  // SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......

  // SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......
  const thirdFieldPaddingStyleDesktop = thirdFieldAdjustAllPaddingDesktop ? `${secondFieldPaddingAllDesktop}px` : `${thirdFieldPaddingTopDesktop}px ${thirdFieldPaddingRightDesktop}px ${thirdFieldPaddingBottomDesktop}px ${thirdFieldPaddingLeftDesktop}px`;
  const thirdFieldPaddingStyleTablet = thirdFieldAdjustAllPaddingTablet ? `${thirdFieldPaddingAllTablet}px` : `${thirdFieldPaddingTopTablet}px ${thirdFieldPaddingRightTablet}px ${thirdFieldPaddingBottomTablet}px ${thirdFieldPaddingLeftTablet}px`;
  const thirdFieldPaddingStyleMobile = thirdFieldAdjustAllPaddingMobile ? `${thirdFieldPaddingAllMobile}px` : `${thirdFieldPaddingTopMobile}px ${thirdFieldPaddingRightMobile}px ${thirdFieldPaddingBottomMobile}px ${thirdFieldPaddingLeftMobile}px`;

  // SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Settings"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_CommonSliderSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
          sliderHeight: sliderHeight,
          sliderHeightTablet: sliderHeightTablet,
          sliderHeightMobile: sliderHeightMobile,
          fontFamilyFirstField: fontFamilyFirstField,
          isDesktop: isDesktop,
          isTablet: isTablet,
          alignItems: alignItems,
          justifyContent: justifyContent,
          isMobile: isMobile,
          backgroundColor: backgroundColor,
          opacity: opacity,
          setAttributes: setAttributes
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        initialOpen: false,
        title: "First Text Filed Styles",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_firstFieldComponents_TypographySettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
          firstFieldfontWeight: firstFieldfontWeight,
          sliderMobileSize: sliderMobileSize,
          sliderTabletSize: sliderTabletSize,
          sliderDesktopSize: sliderDesktopSize,
          textColorFirstField: textColorFirstField,
          isMobile: isMobile,
          isTablet: isTablet,
          isDesktop: isDesktop,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_firstFieldComponents_PaddingControlsDesktop__WEBPACK_IMPORTED_MODULE_5__["default"], {
          adjustAllPadding: adjustAllPadding,
          paddingAll: paddingAll,
          paddingTop: paddingTop,
          paddingRight: paddingRight,
          paddingBottom: paddingBottom,
          paddingLeft: paddingLeft,
          setAttributes: setAttributes,
          isDesktop: isDesktop
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_firstFieldComponents_PaddingControlsTablet__WEBPACK_IMPORTED_MODULE_6__["default"], {
          adjustAllPaddingTablet: adjustAllPaddingTablet,
          paddingAllTablet: paddingAllTablet,
          paddingTopTablet: paddingTopTablet,
          paddingRightTablet: paddingRightTablet,
          paddingBottomTablet: paddingBottomTablet,
          paddingLeftTablet: paddingLeftTablet,
          setAttributes: setAttributes,
          isTablet: isTablet
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_firstFieldComponents_PaddingControlsMobile__WEBPACK_IMPORTED_MODULE_7__["default"], {
          adjustAllPaddingMobile: adjustAllPaddingMobile,
          paddingAllMobile: paddingAllMobile,
          paddingTopMobile: paddingTopMobile,
          paddingRightMobile: paddingRightMobile,
          paddingBottomMobile: paddingBottomMobile,
          paddingLeftMobile: paddingLeftMobile,
          setAttributes: setAttributes,
          isMobile: isMobile
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        initialOpen: false,
        title: "Second Text Filed Styles",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_secondFieldComponents_TypographySecondFieldSettings__WEBPACK_IMPORTED_MODULE_10__["default"], {
          secondFieldfontWeight: secondFieldfontWeight,
          sliderMobileSizeSecondField: sliderMobileSizeSecondField,
          sliderTabletSizeSecondField: sliderTabletSizeSecondField,
          sliderDesktopSizeSecondField: sliderDesktopSizeSecondField,
          textColorSecondField: textColorSecondField,
          isMobile: isMobile,
          isTablet: isTablet,
          isDesktop: isDesktop,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_secondFieldComponents_SecondFieldPaddingControlsDesktop__WEBPACK_IMPORTED_MODULE_11__["default"], {
          secondFieldPaddingAllDesktop: secondFieldPaddingAllDesktop,
          secondFieldPaddingTopDesktop: secondFieldPaddingTopDesktop,
          secondFieldPaddingRightDesktop: secondFieldPaddingRightDesktop,
          secondFieldPaddingBottomDesktop: secondFieldPaddingBottomDesktop,
          secondFieldPaddingLeftDesktop: secondFieldPaddingLeftDesktop,
          secondFieldAdjustAllPaddingDesktop: secondFieldAdjustAllPaddingDesktop,
          isDesktop: isDesktop,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_secondFieldComponents_SecondFieldPaddingControlsTablet__WEBPACK_IMPORTED_MODULE_12__["default"], {
          secondFieldPaddingAllTablet: secondFieldPaddingAllTablet,
          secondFieldPaddingTopTablet: secondFieldPaddingTopTablet,
          secondFieldPaddingRightTablet: secondFieldPaddingRightTablet,
          secondFieldPaddingBottomTablet: secondFieldPaddingBottomTablet,
          secondFieldPaddingLeftTablet: secondFieldPaddingLeftTablet,
          secondFieldAdjustAllPaddingTablet: secondFieldAdjustAllPaddingTablet,
          isTablet: isTablet,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_secondFieldComponents_SecondFieldPaddingControlsMobile__WEBPACK_IMPORTED_MODULE_13__["default"], {
          secondFieldPaddingAllMobile: secondFieldPaddingAllMobile,
          secondFieldPaddingTopMobile: secondFieldPaddingTopMobile,
          secondFieldPaddingRightMobile: secondFieldPaddingRightMobile,
          secondFieldPaddingBottomMobile: secondFieldPaddingBottomMobile,
          secondFieldPaddingLeftMobile: secondFieldPaddingLeftMobile,
          secondFieldAdjustAllPaddingMobile: secondFieldAdjustAllPaddingMobile,
          isMobile: isMobile,
          setAttributes: setAttributes
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        initialOpen: false,
        title: "Third Text Filed Styles",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_thirdFieldComponents_TypographyThirdFieldSettings__WEBPACK_IMPORTED_MODULE_14__["default"], {
          thirdFieldfontWeight: thirdFieldfontWeight,
          sliderMobileSizeThirdField: sliderMobileSizeThirdField,
          sliderTabletSizeThirdField: sliderTabletSizeThirdField,
          sliderDesktopSizeThirdField: sliderDesktopSizeThirdField,
          textColorThirdField: textColorThirdField,
          isMobile: isMobile,
          isTablet: isTablet,
          isDesktop: isDesktop,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_thirdFieldComponents_ThirdFieldPaddingControlsDesktop__WEBPACK_IMPORTED_MODULE_15__["default"], {
          thirdFieldPaddingAllDesktop: thirdFieldPaddingAllDesktop,
          thirdFieldPaddingTopDesktop: thirdFieldPaddingTopDesktop,
          thirdFieldPaddingRightDesktop: thirdFieldPaddingRightDesktop,
          thirdFieldPaddingBottomDesktop: thirdFieldPaddingBottomDesktop,
          thirdFieldPaddingLeftDesktop: thirdFieldPaddingLeftDesktop,
          thirdFieldAdjustAllPaddingDesktop: thirdFieldAdjustAllPaddingDesktop,
          isDesktop: isDesktop,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_thirdFieldComponents_ThirdFieldPaddingControlsTablet__WEBPACK_IMPORTED_MODULE_16__["default"], {
          thirdFieldPaddingAllTablet: thirdFieldPaddingAllTablet,
          thirdFieldPaddingTopTablet: thirdFieldPaddingTopTablet,
          thirdFieldPaddingRightTablet: thirdFieldPaddingRightTablet,
          thirdFieldPaddingBottomTablet: thirdFieldPaddingBottomTablet,
          thirdFieldPaddingLeftTablet: thirdFieldPaddingLeftTablet,
          thirdFieldAdjustAllPaddingTablet: thirdFieldAdjustAllPaddingTablet,
          isTablet: isTablet,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_thirdFieldComponents_ThirdFieldPaddingControlsMobile__WEBPACK_IMPORTED_MODULE_17__["default"], {
          thirdFieldPaddingAllMobile: thirdFieldPaddingAllMobile,
          thirdFieldPaddingTopMobile: thirdFieldPaddingTopMobile,
          thirdFieldPaddingRightMobile: thirdFieldPaddingRightMobile,
          thirdFieldPaddingBottomMobile: thirdFieldPaddingBottomMobile,
          thirdFieldPaddingLeftMobile: thirdFieldPaddingLeftMobile,
          thirdFieldAdjustAllPaddingMobile: thirdFieldAdjustAllPaddingMobile,
          isMobile: isMobile,
          setAttributes: setAttributes
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "slider",
        style: {
          height: `${getSliderHeight()}vh`,
          fontFamily: `${fontFamilyFirstField}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: "slides",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            class: "slide",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("img", {
              src: "https://images.pexels.com/photos/25440346/pexels-photo-25440346/free-photo-of-field-of-red-poppy-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Image 1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
              class: "caption",
              style: {
                backgroundColor,
                alignItems: alignItems,
                justifyContent: justifyContent
              },
              children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "firstTextField",
                style: {
                  fontSize: `${sliderDesktopSize}px`,
                  fontWeight: `${attributes.firstFieldfontWeight}`,
                  color: `${textColorFirstField}`,
                  fontStyle: `${attributes.firstFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: paddingStyle
                },
                children: "Lorem Ipsum is that it has a more-or-less normal"
              }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "firstTextField",
                style: {
                  fontSize: `${sliderTabletSize}px`,
                  fontWeight: `${attributes.firstFieldfontWeight}`,
                  color: `${textColorFirstField}`,
                  fontStyle: `${attributes.firstFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: paddingStyleTablet
                },
                children: "Lorem Ipsum is that it has a more-or-less normal"
              }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "firstTextField",
                style: {
                  fontSize: `${sliderMobileSize}px`,
                  fontWeight: `${attributes.firstFieldfontWeight}`,
                  color: `${textColorFirstField}`,
                  fontStyle: `${attributes.firstFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: paddingStyleMobile
                },
                children: "Lorem Ipsum is that it has a more-or-less normal"
              }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "secondTextField",
                style: {
                  fontSize: `${sliderDesktopSizeSecondField}px`,
                  fontWeight: `${attributes.secondFieldfontWeight}`,
                  color: `${textColorSecondField}`,
                  fontStyle: `${attributes.secondFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: secondFieldPaddingStyleDesktop
                },
                children: "Lorem Ipsum is that it has a more-or-less normal"
              }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "secondTextField",
                style: {
                  fontSize: `${sliderTabletSizeSecondField}px`,
                  fontWeight: `${attributes.secondFieldfontWeight}`,
                  color: `${textColorSecondField}`,
                  fontStyle: `${attributes.secondFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: secondFieldPaddingStyleTablet
                },
                children: "Lorem Ipsum is that it has a more-or-less normal"
              }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "secondTextField",
                style: {
                  fontSize: `${sliderMobileSizeSecondField}px`,
                  fontWeight: `${attributes.secondFieldfontWeight}`,
                  color: `${textColorSecondField}`,
                  fontStyle: `${attributes.secondFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: secondFieldPaddingStyleMobile
                },
                children: "web page editors now use Lorem Ipsum"
              }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "secondTextField",
                style: {
                  fontSize: `${sliderDesktopSizeThirdField}px`,
                  fontWeight: `${attributes.thirdFieldfontWeight}`,
                  color: `${textColorThirdField}`,
                  fontStyle: `${attributes.thirdFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: thirdFieldPaddingStyleDesktop
                },
                children: "default model text, and a search"
              }), isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "secondTextField",
                style: {
                  fontSize: `${sliderTabletSizeThirdField}px`,
                  fontWeight: `${attributes.thirdFieldfontWeight}`,
                  color: `${textColorThirdField}`,
                  fontStyle: `${attributes.thirdFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: thirdFieldPaddingStyleTablet
                },
                children: "default model text, and a search"
              }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
                className: "secondTextField",
                style: {
                  fontSize: `${sliderMobileSizeThirdField}px`,
                  fontWeight: `${attributes.thirdFieldfontWeight}`,
                  color: `${textColorThirdField}`,
                  fontStyle: `${attributes.thirdFieldfontWeight === "italic" ? "italic" : "normal"}`,
                  padding: thirdFieldPaddingStyleMobile
                },
                children: "default model text, and a search"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          class: "navigation",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("button", {
            class: "prev",
            children: "\u276E"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("button", {
            class: "next",
            children: "\u276F"
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/super-simple-slider-by-nd/index.js":
/*!************************************************!*\
  !*** ./src/super-simple-slider-by-nd/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/super-simple-slider-by-nd/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/super-simple-slider-by-nd/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/super-simple-slider-by-nd/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/super-simple-slider-by-nd/editor.scss":
/*!***************************************************!*\
  !*** ./src/super-simple-slider-by-nd/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/super-simple-slider-by-nd/style.scss":
/*!**************************************************!*\
  !*** ./src/super-simple-slider-by-nd/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/super-simple-slider-by-nd/block.json":
/*!**************************************************!*\
  !*** ./src/super-simple-slider-by-nd/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/super-simple-slider-by-nd","version":"0.1.0","title":"Super Simple Slider By Nd","category":"widgets","icon":"slides","description":"Super Simple Image Slider With Custom Post Type Based.","example":{},"attributes":{"content":{"type":"string","source":"html","selector":"div"},"sliderHeight":{"type":"number","default":"100"},"sliderHeightTablet":{"type":"number","default":"100"},"sliderHeightMobile":{"type":"number","default":"100"},"firstFieldFontSize":{"type":"number","default":"12"},"secondFieldFontSize":{"type":"number","default":"12"},"thirdFieldFontSize":{"type":"number","default":"12"},"firstFieldfontWeight":{"type":"string","default":"normal"},"secondFieldfontWeight":{"type":"string","default":"normal"},"thirdFieldfontWeight":{"type":"string","default":"normal"},"textColorFirstField":{"type":"string","default":"#000000"},"textColorSecondField":{"type":"string","default":"#000000"},"textColorThirdField":{"type":"string","default":"#000000"},"fontFamilyFirstField":{"type":"string","default":"Arial"},"sliderDesktopSize":{"type":"number"},"sliderTabletSize":{"type":"number"},"sliderMobileSize":{"type":"number"},"sliderDesktopSizeSecondField":{"type":"number"},"sliderTabletSizeSecondField":{"type":"number"},"sliderMobileSizeSecondField":{"type":"number"},"sliderDesktopSizeThirdField":{"type":"number"},"sliderTabletSizeThirdField":{"type":"number"},"sliderMobileSizeThirdField":{"type":"number"},"paddingAll":{"type":"number","default":0},"paddingTop":{"type":"number","default":0},"paddingRight":{"type":"number","default":0},"paddingBottom":{"type":"number","default":0},"paddingLeft":{"type":"number","default":0},"adjustAllPadding":{"type":"boolean","default":false},"paddingAllTablet":{"type":"number","default":0},"paddingTopTablet":{"type":"number","default":0},"paddingRightTablet":{"type":"number","default":0},"paddingBottomTablet":{"type":"number","default":0},"paddingLeftTablet":{"type":"number","default":0},"adjustAllPaddingTablet":{"type":"boolean","default":false},"paddingAllMobile":{"type":"number","default":0},"paddingTopMobile":{"type":"number","default":0},"paddingRightMobile":{"type":"number","default":0},"paddingBottomMobile":{"type":"number","default":0},"paddingLeftMobile":{"type":"number","default":0},"adjustAllPaddingMobile":{"type":"boolean","default":false},"secondFieldPaddingAllDesktop":{"type":"number","default":0},"secondFieldPaddingTopDesktop":{"type":"number","default":0},"secondFieldPaddingRightDesktop":{"type":"number","default":0},"secondFieldPaddingBottomDesktop":{"type":"number","default":0},"secondFieldPaddingLeftDesktop":{"type":"number","default":0},"secondFieldAdjustAllPaddingDesktop":{"type":"boolean","default":false},"secondFieldPaddingAllTablet":{"type":"number","default":0},"secondFieldPaddingTopTablet":{"type":"number","default":0},"secondFieldPaddingRightTablet":{"type":"number","default":0},"secondFieldPaddingBottomTablet":{"type":"number","default":0},"secondFieldPaddingLeftTablet":{"type":"number","default":0},"secondFieldAdjustAllPaddingTablet":{"type":"boolean","default":false},"secondFieldPaddingAllMobile":{"type":"number","default":0},"secondFieldPaddingTopMobile":{"type":"number","default":0},"secondFieldPaddingRightMobile":{"type":"number","default":0},"secondFieldPaddingBottomMobile":{"type":"number","default":0},"secondFieldPaddingLeftMobile":{"type":"number","default":0},"secondFieldAdjustAllPaddingMobile":{"type":"boolean","default":false},"thirdFieldPaddingAllDesktop":{"type":"number","default":0},"thirdFieldPaddingTopDesktop":{"type":"number","default":0},"thirdFieldPaddingRightDesktop":{"type":"number","default":0},"thirdFieldPaddingBottomDesktop":{"type":"number","default":0},"thirdFieldPaddingLeftDesktop":{"type":"number","default":0},"thirdFieldAdjustAllPaddingDesktop":{"type":"boolean","default":false},"thirdFieldPaddingAllTablet":{"type":"number","default":0},"thirdFieldPaddingTopTablet":{"type":"number","default":0},"thirdFieldPaddingRightTablet":{"type":"number","default":0},"thirdFieldPaddingBottomTablet":{"type":"number","default":0},"thirdFieldPaddingLeftTablet":{"type":"number","default":0},"thirdFieldAdjustAllPaddingTablet":{"type":"boolean","default":false},"thirdFieldPaddingAllMobile":{"type":"number","default":0},"thirdFieldPaddingTopMobile":{"type":"number","default":0},"thirdFieldPaddingRightMobile":{"type":"number","default":0},"thirdFieldPaddingBottomMobile":{"type":"number","default":0},"thirdFieldPaddingLeftMobile":{"type":"number","default":0},"thirdFieldAdjustAllPaddingMobile":{"type":"boolean","default":false},"alignItems":{"type":"string","default":"stretch"},"justifyContent":{"type":"string","default":"flex-start"},"backgroundColor":{"type":"string","default":"rgba(255, 255, 255, 1)"},"opacity":{"type":"number","default":100}},"supports":{"html":false,"align":["wide","full","center"],"customClassName":false},"textdomain":"super-simple-slider-by-nd","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"super-simple-slider-by-nd/index": 0,
/******/ 			"super-simple-slider-by-nd/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksuper_simple_slider_by_nd"] = globalThis["webpackChunksuper_simple_slider_by_nd"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["super-simple-slider-by-nd/style-index"], () => (__webpack_require__("./src/super-simple-slider-by-nd/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map