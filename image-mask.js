/* 
A Polymer element for masking the images with basic (and some extraordinary) geometric shapes

##### Example
<image-mask shape="circle" size="320" src="img/image.jpg" href="#" title="A short description of an image" desc="A long description of an image"></image-mask>

@element image-mask
@blurb A Polymer element for masking the images with basic (and some extraordinary) geometric shapes
@version 3.0.0
@homepage https://github.com/hejty/image-mask
*/

import { Element as PolymerElement } from './node_modules/@polymer/polymer/polymer-element.js';

export class ImageMask extends PolymerElement {
    constructor() {
        super();
    }

    static get is() {
        return 'image-mask';
    }

    static get template() {
        return `
            <svg height$="[[size]]" width$="[[size]]" viewBox$="[[_getViewBox(size)]]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" role="img" aria-labelledby="title desc">
                <title id="title">
                    <span>[[title]]</span>
                </title>

                <desc id="desc">
                    <span>[[desc]]</span>
                </desc>

                <defs>
                    <clipPath id$="[[maskId]]" clipPathUnits="objectBoundingBox">
                        <path d$="[[path]]" />
                    </clipPath>
                </defs>

                <image class$="[[maskId]]" clip-path$="[[_getClipPath(maskId)]]" height="100%" width="100%" preserveAspectRatio="xMidYMid slice" />
            </svg>
        `;
    }

    static get properties() {
        return {
            /**
             * The `path` attribute defines a vector path in relative units
             *
             * @attribute path
             * @type string
             * @default null
             */

            path: {
                type: String
            },

            /**
             * The `shape` attribute sets a masking shape
             *
             * @attribute shape
             * @type string
             * @default 'circle'
             */

            shape: {
                type: String,
                value: 'circle'
            },

            /**
             * The `size` attribute sets a size of an element
             *
             * @attribute size
             * @type int
             * @default 320
             */

            size: {
                type: Number,
                value: 320
            },

            /**
             *  The `src` attribute defines a path to an image that will be masked
             *
             * @attribute src
             * @type string
             * @default https://placehold.it/320
             */

            src: {
                type: String,
                value: 'https://placehold.it/320'
            },

            /**
             *  The `title` attribute sets a short description of an image. (It's not rendered visually by default.)
             *
             * @attribute title
             * @type string
             * @default ''
             */

            title: {
                type: String,
                value: ''
            },

            /**
             *  The `desc` attribute sets a long description of an image. (It's not rendered visually by default.)
             *
             * @attribute desc
             * @type string
             * @default ''
             */

            desc: {
                type: String,
                value: ''
            },

            /**
             *  Unique identifier for clipPath tag to deal with another intance of `<image-mask>` on the page
             *
             * @attribute maskId
             * @type string
             * @default ''
             */

            maskId: {
                type: String,
                computed: '_getRandomId(shape)'
            }
        };
    }

    ready() {
        super.ready();
    }

    connectedCallback() {
        super.connectedCallback();

        const imageEl = this.shadowRoot.querySelector('image');
        this._setAttrNS(imageEl, this.src);
        this._getPath(this.shape);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    _setAttrNS(element, attr) {
        element.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            attr
        );
    }

    _getClipPath(maskId) {
        return `url(#${maskId})`;
    }

    _getRandomId(shape) {
        return `${shape}-${Math.random()
            .toString(36)
            .substr(2, 4)}`;
    }

    _getViewBox(size) {
        return [0, 0, size, size].join(' ');
    }

    _getPath() {
        switch (this.shape) {
            case 'circle':
                this.path =
                    'M 0.5, 0.5 m -0.5, 0 a 0.5, 0.5 0 1, 0 1, 0 a 0.5, 0.5 0 1, 0 -1, 0';
                break;

            case 'square':
                this.path = 'M 0 0, 1 0, 1 1, 0 1 z';
                break;

            case 'triangle':
                this.path = 'M 0 1, 0.5 0, 0.5 0, 1 1 z';
                break;

            case 'rhombus':
                this.path = 'M 0.5 0, 1 0.5, 0.5 1, 0 0.5 z';
                break;

            case 'hexagon':
                this.path =
                    'M 0.5 0, 0.95 0.25, 0.95 0.75, 0.5 1, 0.05 0.75, 0.05 0.25 z';
                break;

            case 'octagon':
                this.path =
                    'M 0.3 0, 0.7 0, 1 0.3, 1 0.7, 0.7 1, 0.3 1, 0 0.7, 0 0.3 z';
                break;

            case 'star':
                this.path =
                    'M 0.5 0, 0.63 0.38, 1 0.38, 0.69 0.59, 0.82 1, 0.5 0.75, 0.18 1, 0.31 0.59, 0 0.38, 0.37 0.38 z';
                break;

            case 'parallelogram':
                this.path = 'M 0 1, 0.25 0, 1 0, 0.75 1, 0 1 z';
                break;

            case 'plus':
                this.path =
                    'M 0 0.33, 0.33 0.33, 0.33 0, 0.66 0, 0.66 0.33, 1 0.33, 1 0.66, 0.66 0.66, 0.66 1, 0.33 1, 0.33 0.66, 0 0.66 z';
                break;

            case 'squircle':
                this.path =
                    'M 0.5, 0 C 0.1, 0 0, 0.1 0, 0.5 0, 0.9 0.1, 1 0.5, 1 0.9, 1 1, 0.9 1, 0.5 1, 0.1 0.9, 0 0.5, 0 Z';
                break;

            case 'ring':
                this.path =
                    'M 0.5 0C0.22375 0 0 0.22375 0 0.5s0.22375 0.5 0.5 0.5 0.5-0.22375 0.5-0.5S0.77625 0 0.5 0zm0 0.75c-0.138125 0-0.25-0.111875-0.25-0.25s0.111875-0.25 0.25-0.25 0.25 0.111875 0.25 0.25-0.111875 0.25-0.25 0.25 z';
                break;

            default:
                break;
        }
    }
}

customElements.define('image-mask', ImageMask);