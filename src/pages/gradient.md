## css 中的 linear-gradient 的用法总结
### 目录
+ What（ 是什么 ？）
+ Where（ 用在哪里 ？）
+ How （ 怎么用 ？）
### 什么是 linear-gradient ？
linear-gradient也就是 css 中的一个渐变的函数，用于创建一个表示两种或多种颜色线性渐变的图片。
## linear-gradient 用在什么地方？
linear-gradient() 函数返回的结果作为 background-imgage 属性的值或则 border-image 来使用，有如下三种使用场景，即：
+ background // 组合属性，同样适用
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
  <img src="">

+ 在颜色后面加百分数可以控制在整个宽度的百分之多少的时候到达某一个颜色值。
```
background-image: linear-gradient( red 10%, yellow 20%, blue);
```
<img src="">

## 在 border-image 中使用 linear-gradient()
### 什么是 border-image ？
+ border-image 通过指定一张图片来取替 border-style 定义的样式，并且 border-image 生效的前提是： border-style 和 border-width 同时为有效值(即 border-style 不为 none，border-width 不为 0)。
+ border-image 跟 background 一样，是一个组合属性，但是使用 linear-gradient()只需设置好 border-image-slice 的值就可以了。
### 什么是 border-image-slice ？
+ 据资料表示，其有1~4个参数，代表上右下左四个方位的剪裁，符合CSS普遍的方位规则（与margin，padding等或border-width一致），举个简单的例子，前面提到，支持百分比宽度，所以这里“30% 35% 40% 30%”的示意可以用下图表示：
image
距离图片上部30%的地方，距离右边35%，距离底部40%，左边30%的地方各剪裁一下。也就是对图片进行了“四刀切”，形成了九个分离的区域，这就是九宫格,知道它是干什么的了，但是还是不知道如何运用呀，无奈只好用实验来给出答案。

### 下面通过取不同的值发现，存在着几个分界点
用实际数值是为了便于调试，但是要依百分比作为实验结论。
- ```
  wdith: 100px;
  height: 100px;
  border:100px solid;
  border-image-source: url(dog.png);
  border-image-slice: 0;
  ```
  <img src="">
- ```
  border-image-slice: 10;
  ```
- ```
  border-image-slice: 150;
  ```
- ```
  border-image-slice: 180;
  ```
- ```
  border-image-slice: 225;
  ```
- ```
  border-image-slice: 300;
  ```
- ```
  border-image-slice: 450;
  ```