[jsweb1.5](https://vieuxloupgris.github.io/jsweb1.5/)

## 1.5 - Cat cycler

Use your Google Images skills to collect a dozen of cat images.

Display these cat images in your app one by one by cycling automatically every second. These images must be displayed in a 500x500 pixel square and should be resized and cropped automatically to fit in this space regardless of their original resolution or aspect-ratio. (Purposedly choosing images that all have the same resolution or aspect-ratio is considered cheating.)

If you ever alter the aspect-ratio of an image to make it deformed we swear we will do this your car. (Or your bike if you don't have a car.)

<img src="./car.png" width="300px">

Bonus: Choose cats that are really really cute.

### Hint

When using Parcel static ressources (like images) work a bit differently. You might want to try this syntax in your JS file:

```javascript
import img1 from "./images/img1.jpg";
```

You can even try something like this:

```javascript
import imgs from "./images/*.jpg";
```
