angular-sparkline-bartrack
================

angular-sparkline-bartrack is a angular directive, that represents a dynamic sparkline (type = bar). It is based on the [jquery.sparkline](http://omnipotent.net/jquery.sparkline) library - Version 0.0.1 - (MIT-license)

## Function

Everytime, you change the value of the directive, it adds a new bar. When reaching the maximum number, it removes the first bar, and adds the latest value at the and.   

## Installation

First install the required libraries (jquery, jquery.sparkline and angular).

```
# bower install
```

Warning: bower will not install jquery.sparkline correctly. You need to do the following, to get a full js file for jquery.sparkline:

```
# cd components/jquery.sparkline
make
```

After that you should have a file ```jquery.sparkline.js``` in the path ```components/jquery.sparkline/dist```

## Usage

```html
<!DOCTYPE html>
<html ng-app="app">
<head>
    <script src="../components/jquery/dist/jquery.min.js"></script>
    <script src="../components/jquery.sparkline/dist/jquery.sparkline.js"></script>
    <script src="../components/angular/angular.min.js"></script>
    <script src="../ng-sparkbartracker.js"></script>
</head>
<body ng-controller="myController">
<div class="wrapper">   
Tracker: <sparkline-bartrack id="sparky" value="valuespark" height=20 max-points=20></sparkline-bartrack>
</div>

</body>
</html>
```

where ```valuespark``` is the scope-variable that you dynamically can change.

## Attributes

I tried to wire the most important options for sparklines to attributes:

All sparkline-options that use camel case names need to be translated to dash-delimited attributes:

sparkline-option | attribute | description | example
---|---|---|---
id|id|identifier (required)|id='mysparkline'
value|value|new sparkline value|value=42 - if you use a scope variable, then: value="valiable"
height|height|fixed height (optional)|height=20
barColor|bar-color|color of bars|bar-color='green'
barWidth|bar-width|width of each bar in px|bar-width=4
barSpacing|bar-spacing|pixels between two bars|bar-spacing=1
tooltipPrefix|tooltip-prefix|prefix to tooltip|tooltip-prefix='Speed:'
tooltipSuffix|tooltip-suffix|suffix to tooltip|tooltip-suffix='kBytes/s'
numberDigitGroupSep|number-digit-group-sep|seperator for digit group|number-digit-group-sep=','
numberDecimalMark|number-decimal-mark|decimal seperator|number-decimal-mark='.'
maxPoints|max-points|maximum number of bars to display|max-points=10

## Demo

in the ```demo``` directory you have a simple app, that demonstrates the sparkline-bartrack with different options. Just try it.

## Comments

If you have ideas or comments, please do not hesitate to contact me.


Happy tracking!

Sincerely,

Sebastian Hildebrandt

http://www.plus-innovations.com


#### Credits

Written by Sebastian Hildebrandt

#### License

>The MIT License (MIT)
>
>Copyright (c) 2014 +innovations.
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.
> 
>Further details see "LICENSE" file.


