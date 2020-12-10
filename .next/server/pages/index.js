module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const app = this.context;

    const redirectToProduct = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].Action.APP, '/edit-products');
    };

    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
      query: GET_PRODUCTS_BY_ID,
      variables: {
        ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')
      },
      children: ({
        data,
        loading,
        error
      }) => {
        if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: "Loading..."
        });
        if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: error.message
        });
        console.log('data ', data);
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["ResourceList"], {
            showHeader: true,
            resourceName: {
              singular: 'Product',
              plural: 'Products'
            },
            items: data.nodes,
            renderItem: item => {
              const media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Thumbnail"], {
                source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
                alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
              });

              const price = item.variants.edges[0].node.price;
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["ResourceList"].Item, {
                id: item.id,
                media: media,
                accessibilityLabel: `View details for ${item.title}`,
                onClick: () => {
                  store_js__WEBPACK_IMPORTED_MODULE_5___default.a.set('item', item);
                  redirectToProduct();
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, {
                    fill: true,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextStyle"], {
                        variation: "strong",
                        children: item.title
                      })
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                      children: ["$", price]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                      children: ["Expires on ", twoWeeksFromNow]
                    })
                  })]
                })
              });
            }
          })
        });
      }
    });
  }

}

_defineProperty(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const img = '../images/AVbyFPLogo_Horizontal_360x.png';

class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const app = this.context;

    const redirectToCables = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].Action.APP, '/cables');
    };

    const redirectToHeadphones = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].Action.APP, '/headphones');
    };

    const redirectToInearMonitors = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].Action.APP, '/in-ear_monitors');
    };

    const redirectToMicrophones = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].Action.APP, '/microphones');
    };

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      fullWidth: true,
      title: "Product Search",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            title: "Cables",
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              onClick: () => {
                redirectToCables();
              },
              children: "Cables"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            title: "Headphones",
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              onClick: () => {
                redirectToHeadphones();
              },
              children: "Headphones"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            title: "In-ear Monitors",
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              onClick: () => {
                redirectToInearMonitors();
              },
              children: "In-ear monitors"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            title: "Microphones",
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              onClick: () => {
                redirectToMicrophones();
              },
              children: "Microphones"
            })
          })
        })]
      })
    });
  } // class Index extends React.Component {
  //   state = {open: false};
  //   render() {
  //     const emptyState = !store.get('ids');
  //     return (
  //       <Page>
  //         <TitleBar
  //           title="AVbyFP"
  //           primaryAction={{
  //             content: 'Select products',
  //             onAction: () => this.setState({open: true}),
  //           }}
  //         />
  //         <ResourcePicker
  //           resourceType="Product"
  //           showVariants={false}
  //           open={this.state.open}
  //           onSelection={(resources) => this.handleSelection(resources)}
  //           onCancel={() => this.setState({open: false})}  
  //         />
  //         {emptyState ? (
  //         <Layout>
  //           <EmptyState
  //             heading="Discount your products temporarily"
  //             action={{
  //               content: 'Select products',
  //               onAction: () => this.setState({open: true}),
  //             }}
  //             image={img}
  //           >
  //             <p>Select products to change their price temporarily.</p>
  //           </EmptyState>  
  //         </Layout>
  //         ) : (
  //             <ResourceListWithProducts/>
  //         )}    
  //       </Page>
  //     );
  //   }
  //   handleSelection = (resources) => {
  //     const idsFromResources = resources.selection.map((product) => product.id);
  //     this.setState({open: false})
  //     store.set('ids', idsFromResources);
  //   };


}

_defineProperty(Index, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsImltZyIsIkluZGV4IiwicmVkaXJlY3RUb0NhYmxlcyIsInJlZGlyZWN0VG9IZWFkcGhvbmVzIiwicmVkaXJlY3RUb0luZWFyTW9uaXRvcnMiLCJyZWRpcmVjdFRvTWljcm9waG9uZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTNCQTs7QUE2QkEsTUFBTUMsd0JBQU4s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QkY7QUFBQTtBQURBLE1BREY7QUEwQkQsR0FoRWlDLENBbUVwQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoSG9DOztnQkFBOUJKLEssaUJBQ2lCRixpRTs7QUFrSFJFLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDOUhBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgUmVzb3VyY2VMaXN0LFxyXG4gIFN0YWNrLFxyXG4gIFRleHRTdHlsZSxcclxuICBUaHVtYm5haWxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnN0IHJlZGlyZWN0VG9Qcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xyXG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvZWRpdC1wcm9kdWN0cycsXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR3b1dlZWtzRnJvbU5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjA5NmU1KS50b0RhdGVTdHJpbmcoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfSB2YXJpYWJsZXM9e3tpZHM6IHN0b3JlLmdldCgnaWRzJyl9fT5cclxuICAgICAgICB7KHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0pID0+IHtcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSAnLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcclxuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17e3Npbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJ319XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24ge3R3b1dlZWtzRnJvbU5vd308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT4gIFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCwgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlLCBCdXR0b24sIEJ1dHRvbkdyb3VwLCBEaXNwbGF5VGV4dCwgTGlua30gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7UmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdCc7XHJcbmltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7Q29udGV4dH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcblxyXG4vLyBjb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xyXG5jb25zdCBpbWcgPSAnLi4vaW1hZ2VzL0FWYnlGUExvZ29fSG9yaXpvbnRhbF8zNjB4LnBuZyc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQ29udGV4dDtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0VG9DYWJsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxyXG4gICAgICAgIFJlZGlyZWN0LkFjdGlvbi5BUFAsXHJcbiAgICAgICAgJy9jYWJsZXMnLFxyXG4gICAgICApOyAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdFRvSGVhZHBob25lcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcclxuICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2hlYWRwaG9uZXMnLFxyXG4gICAgICApOyAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdFRvSW5lYXJNb25pdG9ycyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcclxuICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2luLWVhcl9tb25pdG9ycycsXHJcbiAgICAgICk7ICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0VG9NaWNyb3Bob25lcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcclxuICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL21pY3JvcGhvbmVzJyxcclxuICAgICAgKTsgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZSBmdWxsV2lkdGggdGl0bGU9XCJQcm9kdWN0IFNlYXJjaFwiPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwiQ2FibGVzXCIgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXsoKSA9PiB7cmVkaXJlY3RUb0NhYmxlcygpO319PkNhYmxlczwvTGluaz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwiSGVhZHBob25lc1wiIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4ge3JlZGlyZWN0VG9IZWFkcGhvbmVzKCk7fX0+SGVhZHBob25lczwvTGluaz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwiSW4tZWFyIE1vbml0b3JzXCIgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXsoKSA9PiB7cmVkaXJlY3RUb0luZWFyTW9uaXRvcnMoKTt9fT5Jbi1lYXIgbW9uaXRvcnM8L0xpbms+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIk1pY3JvcGhvbmVzXCIgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXsoKSA9PiB7cmVkaXJlY3RUb01pY3JvcGhvbmVzKCk7fX0+TWljcm9waG9uZXM8L0xpbms+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbiAgICApO1xyXG4gIH0gIFxyXG5cclxuXHJcbi8vIGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICBzdGF0ZSA9IHtvcGVuOiBmYWxzZX07XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxQYWdlPlxyXG4vLyAgICAgICAgIDxUaXRsZUJhclxyXG4vLyAgICAgICAgICAgdGl0bGU9XCJBVmJ5RlBcIlxyXG4vLyAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4vLyAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuLy8gICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KSxcclxuLy8gICAgICAgICAgIH19XHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuLy8gICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4vLyAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuLy8gICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuLy8gICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxyXG4vLyAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSl9ICBcclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICAgIHtlbXB0eVN0YXRlID8gKFxyXG4vLyAgICAgICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4vLyAgICAgICAgICAgICBoZWFkaW5nPVwiRGlzY291bnQgeW91ciBwcm9kdWN0cyB0ZW1wb3JhcmlseVwiXHJcbi8vICAgICAgICAgICAgIGFjdGlvbj17e1xyXG4vLyAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4vLyAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSksXHJcbi8vICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAgIGltYWdlPXtpbWd9XHJcbi8vICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHkuPC9wPlxyXG4vLyAgICAgICAgICAgPC9FbXB0eVN0YXRlPiAgXHJcbi8vICAgICAgICAgPC9MYXlvdXQ+XHJcbi8vICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cy8+XHJcbi8vICAgICAgICAgKX0gICAgXHJcbi8vICAgICAgIDwvUGFnZT5cclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcclxuLy8gICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pXHJcbi8vICAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpO1xyXG4vLyAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=