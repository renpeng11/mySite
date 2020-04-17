---
layout: gradient
title: 'css 中的 linear-gradient 的用法总结'
date: '2019-11-26'
description: '对css中的渐变属性进行了分析'
tags: [css]
---

### 目录
+ What（ 是什么 ？）
+ Where（ 用在哪里 ？）
+ How （ 怎么用 ？）
### 什么是 linear-gradient ？
linear-gradient也就是 css 中的一个渐变的函数，用于创建一个表示两种或多种颜色线性渐变的图片。
## linear-gradient 用在什么地方？
linear-gradient() 函数返回的结果作为 background-imgage 属性的值或则 border-image 来使用，有如下三种使用场景，即：
+ background // 聚合属性，同样适用
+ background-image
+ border-image

```
background: linear-gradient();
background-image: linear-gradient();
border-image: linear-gradient();
```
<h3 style="color: red;">注意作用在 background-color 无效</h3>

```
/* 没有效果 */
background-color: linear-gradient();
```
## 怎么使用 ？
+ linear-graident()  接收两个参数，第一个参数为角度，即从哪个方向进行渐变，该参数默认不写时，方向从上至下,写的时候，角度方向为顺时针（0度时渐变方向从下到上开始相当于 to top ）。第二个参数为颜色参数，至少两种颜色。
  - 第一个参数写的时候，有两种写法，一种是直接写度数（例如：45deg)，另一种是使用英文。
  ```
  to bottom(从上边开始)
  to right(从左边开始)
  to left(从右边开始)
  to top(从下边开始)
  to top left(从右下角开始)
  to top right(从左下角开始)
  to bottom left(从右上角开始)
  to bottom right(从右下角开始)
  ```
  - 第二个颜色参数没有限制，多种颜色表示都可以。
  
  下面放出几个简单的例子来：
  ```
  background-image: linear-gradient(red, yellow);
  background-image: linear-gradient(0deg, red, yellow);
  background-image: linear-gradient(45deg, red, yellow);
  background-image: linear-gradient(to left, red, yellow);
  background-image: linear-gradient(to bottom left, red, yellow);
  background-image: linear-gradient(to bottom left, red, yellow, blue);
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_one.png" alt="例子" /></p>
<p align=center>例子</p>
+ 在颜色后面加百分数可以控制在整个宽度的百分之多少的时候到达某一个颜色值。
```
background-image: linear-gradient( red 10%, yellow 20%, blue);
```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_two.png" alt="颜色百分比" /></p>
<p align=center>颜色百分比</p>

## 在 border-image 中使用 linear-gradient()
### 什么是 border-image ？
+ border-image 通过指定一张图片来取替 border-style 定义的样式，并且 border-image 生效的前提是： border-style 和 border-width 同时为有效值(即 border-style 不为 none，border-width 不为 0)。
+ border-image 跟 background 一样，是一个组合属性，但是使用 linear-gradient()只需设置好 border-image-slice 的值就可以了。
### 什么是 border-image-slice ？
+ 据资料表示，其有1~4个参数，代表上右下左四个方位的剪裁，符合CSS普遍的方位规则（与margin，padding等或border-width一致），举个简单的例子，前面提到，支持百分比宽度，所以这里“30% 35% 40% 30%”的示意可以用下图表示：
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_three.png" alt="例子" /></p>
<p align=center>例子</p>

距离图片上部30%的地方，距离右边35%，距离底部40%，左边30%的地方各剪裁一下。也就是对图片进行了“四刀切”，形成了九个分离的区域，这就是九宫格,知道它是干什么的了，但是还是不知道如何运用呀，无奈只好用实验来寻找答案。
### 下面通过取不同的值发现，存在着几个分界点
  下面的实验不涉及 border-image-repeat 的值，默认为stretch（拉伸）。 图片的大小实际大小为 450px、450px。用实际数值是为了便于调试，但是要依百分比作为实验结论。
- ```
  wdith: 100px;
  height: 100px;
  border:100px solid;
  border-image-source: url(dog.png);
  border-image-slice: 0;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_four.png" alt="border-image-slice: 0" /></p>
<p align=center>border-image-slice: 0</p>

- ```
  border-image-slice: 10;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_five.png" alt="border-image-slice: 10" /></p>
<p align=center>border-image-slice: 10</p>

- ```
  border-image-slice: 150;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_six.png" alt="border-image-slice: 150" /></p>
<p align=center>border-image-slice: 150</p>

- ```
  border-image-slice: 180;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_seven.png" alt="border-image-slice: 180" /></p>
<p align=center>border-image-slice: 180</p>

- ```
  border-image-slice: 225;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_eight.png" alt="border-image-slice: 225" /></p>
<p align=center>border-image-slice: 225</p>

- ```
  border-image-slice: 300;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_nine.png" alt="border-image-slice: 300" /></p>
<p align=center>border-image-slice: 300</p>

- ```
  border-image-slice: 450;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_ten.png" alt="border-image-slice: 450" /></p>
<p align=center>border-image-slice: 450</p>

- ```
  border-image-slice: 1000;
  ```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_eleven.png" alt="border-image-slice: 1000" /></p>
<p align=center>border-image-slice: 1000</p>

  ## 实验结论
0%时：图片位于九宫格的中心，没有变形。（截图为 fill 的值存在时）
( 0%，33.3333% ) 时：图片在上右下左方向被拉伸，四个角也有图片。（ 截图为fill 的值存在时）
33.3333%时：图片完美显示。（截图为fill 的值存在时)。
( 33.3333%，50% ) 时：图片从中心往四周涌现。（截图为fill 的值存在时)。
50% 时：图片出现在四个角，但并未全部显现，且未发生扭曲；四条边，和中心位置空白。（截图为fill 的值存在时)。
( 50%，100% ) 时：四个角的图片慢慢显示完全，四条边，和中心位置空白。（截图为fill 的值存在时)。
100%~ 时： 保持 100% 时的状态不再发生变化。（截图为fill 的值存在时)。
### 通过上面的结论，可以推测，在 使用 linear-gradient() 时，border-image-slice 的值应该为 33.3333% 时最合适，折换成数值为 100。
```
border-image: linear-gradient(red,yellow) 100;
```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_twelve.png" alt="结果" /></p>
<p align=center>结果</p>

结果完全符合实验所得的结论！至此，linear-gradient() 在 border 上如何运用的问题成功解决。
#### 补充
当使用了 border-image 后，border-radius 无效，其实是 border-image 覆盖了 border，border-image 没有圆角的功能。
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_thirteen.png" alt="border-radius: 50%" /></p>
<p align=center>border-radius: 50%</p>

边框不能变圆，我要边框颜色渐变还有何用 ？
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/gradient_fourteen.GIF" alt="joke" /></p>
