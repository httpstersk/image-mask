# &lt;image-mask&gt;

> A Polymer element for masking images

![alt tag](http://www.hejty.com/github/image-mask-circle-320.png)

## Demo

[Check it live!](http://hejty.github.io/hejty/image-mask/)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install image-mask --save
```

Or [download as ZIP](https://github.com/hejty/image-mask/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="src/image-mask.html">
    ```

3. Start using it!

    ```html
    <image-mask></image-mask>
    ```

## Options

Attribute       | Options                                                   | Default                       | Description
---             | ---                                                       | ---                           | ---
`shape`         | `circle`, `square`, `hexagon`, `triangle`, `ios-app`      | `circle`                      | The masking shape 
`size`          | *int*                                                     | `320`                         | The size of the masking object
`src`           | *string*                                                  | `http://placehold.it/320`     | The source URL of the image
`href`          | *string*                                                  | `#`                           | The target URL

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/hejty/image-mask/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
