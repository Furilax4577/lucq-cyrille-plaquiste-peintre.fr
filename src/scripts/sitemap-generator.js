"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = require("date-fns/format");
var fast_xml_parser_1 = require("fast-xml-parser");
var fs = __importStar(require("fs"));
var prerendered_routes_json_1 = __importDefault(require("../../dist/lucq-cyrille-plaquiste-peintre.fr/prerendered-routes.json"));
var path_1 = __importDefault(require("path"));
// Pour s'appuyer sur le fichier prerendered-routes.json il faut qu'Angular soit en mode SSR
var appName = 'lucq-cyrille-plaquiste-peintre.fr';
var xmlBuilderOptions = {
    attributeNamePrefix: '@',
    ignoreAttributes: false,
    format: true,
};
var baseURL = 'https://lucq-cyrille-plaquiste-peintre.fr';
var urls = Object.keys(prerendered_routes_json_1.default.routes).map(function (route) {
    if (route === '/') {
        return baseURL;
    }
    return "".concat(baseURL).concat(route);
});
console.log("Generate ".concat(urls.length, " routes in sitemap.xml from prerendered-routes.json"));
var sitemap = {
    '?xml': {
        '@version': '1.0',
        '@encoding': 'UTF-8',
        urlset: {
            '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
            url: urls.map(function (url) {
                return {
                    loc: url,
                    lastmod: (0, format_1.format)(new Date(), 'yyyy-MM-dd'),
                    // changefreq: "daily", // Google ignores it
                    // priority: 1 // Google ignores it
                };
            }),
        },
    },
};
var builder = new fast_xml_parser_1.XMLBuilder(xmlBuilderOptions);
var xmlContent = builder.build(sitemap);
fs.writeFileSync(path_1.default.join(__dirname, "../../dist/".concat(appName, "/browser/sitemap.xml")), xmlContent);
