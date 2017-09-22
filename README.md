# &lt;image-mask&gt;

> A Polymer element for masking the images with basic (and some extraordinary) geometric shapes

![alt tag](http://www.hejty.com/github/image-mask-circle-320.png)

## Demo

[Check it live!](http://hejty.github.io/demos/image-mask/)


## Install

1. Install from npm registry:

    ```sh
    npm install polymer-image-mask
    ```

## Usage

1. Import Custom Element as a script with type `module` or `ES` module:

    ```html
    <script src="image-mask.js" type="module"></script>
    ```


    ```js
    import { ImageMask } from 'polymer-image-mask';
    ```

2. Start using it!

    ```html
    <image-mask></image-mask>
    ```

## Options

Attribute       | Description                                                           | Options       | Default               
---             | ---                                                                   | ---           | ---                          
`shape`         | The `shape` attribute sets a masking shape                            | `circle`, `triangle`, `square`, `hexagon`, `octagon`, `star`, `rhombus`, `parallelogram`, `plus`, `squircle`, `ring`                               | `circle`
`size`          | The `size` attribute sets a size of an element                        | *int*         | `320`
`src`           | The `src` attribute defines a path to an image that will be masked    | *string*      | `http://placehold.it/320`
`title`         | The `title` attribute sets a short description of an image            | *string*      | `-`
`desc`          | The `desc` attribute sets a long description of an image              | *string*      | `-`

## Example

```html
<image-mask shape="circle" size="320" src="img/image.jpg" title="A short description of an image" desc="A long description of an image"></image-mask>
```

## Contributing

1. Fork it 🍴
2. Create your feature branch: `git checkout -b my-freaking-cool-feature`
3. Commit your changes: `git commit -m 'Add some freaking cool feature'`
4. Push to the branch: `git push origin my-freaking-cool-feature`
5. Submit a pull request ☝️

## History

For detailed changelog, check [Releases](https://github.com/hejty/image-mask/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
