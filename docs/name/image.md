# 图片命名
---

## 命名顺序

图片命名建议以以下顺序命名：

**（mod-）图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）**

* 图片功能类别：

	- mod-：是否公共，可选
	- icon：模块类固化的图标
	- logo：LOGO类
	- spr：单页面各种元素合并集合
	- btn：按钮
	- bg：可平铺或者大背景
	- ...

	
* 图片模块名称：

	- goodslist：商品列表 
	- goodsinfo：商品信息
	- userava	tar：用户头像
	- ...
	
	
* 图片精度：

	- 普清：@1x
	- Retina：@2x | @3x
	- ...

	
如下面例子：

```
	公共模块：
	mod-btn-goodlist@2x.png
	mod-btn-goodlist.png
	mod-btn-goodlist.png 
	
	非公共模块：
	btn-goodlist@2x.png
	btn-goodlist.png
	btn-goodlist.png
```


有高清图片的时候，命名应该加上图片相应的精度说明

```
	推荐：
	jdc-logo@1x.png
	jdc-logo@2x.png

	不推荐：
	jdc-logo.png
	jdc-logo-retina.png
```