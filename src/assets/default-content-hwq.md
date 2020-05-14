# 一级标题
 这是一个针对公众号的[Markdown](https://sspai.com/post/25137 "认识与入门 Markdown")编辑器，语法与Markdown基本保持一致。  
 本编辑器是基于Lyric的开源项目[wechat-format](https://github.com/lyricat/wechat-format)，根据我的偏好做了优化和定制。

## 二级标题
Markdown是一种用来写作的轻量级「标记语言」，它用简洁的语法代替排版，而不像一般我们用的字处理软件 Word 或 Pages 有大量的排版、字体设置。

### 三级标题
它使我们专心于码字，用「标记」语法，来代替常见的排版格式。例如此文从内容到格式，甚至插图，键盘就可以通通搞定了。

# 常用语法
## 公众号文章链接
```
[title](url)
```
如：
```
[《写给创业路上修行的你》](https://mp.weixin.qq.com/s/CTrhMOWoebVz2q4w2uBN9g)
```
[《写给创业路上修行的你》](https://mp.weixin.qq.com/s/CTrhMOWoebVz2q4w2uBN9g)是我感慨创业三年一路跋涉，半是欢喜半是忧，一时兴起，写给自己，也给同样在创业路上的你。
可以点开试试。

## 外部链接
语法同上，但公众号以外的链接会被转换为脚注。如：  
[晓售CRM](https://www.senscrm.com "晓售CRM：专为B2C企业打造的智能CRM")通过挖掘企业的客户数据价值，帮助企业构建客户画像体系，从而对不同客户群体和业务场景制定营销策略。
结合自动化营销工具，将销售和营销工作精细化、规范化。为企业降本、提效、增收。

## 图片
插入图片的语法和插入链接很像，区别在前面加一个 ! 号。    
```
![图片说明](图片url)
```
关于图床，图床就是一个图片服务器，用来存储图片，以URL的形式来供其他平台获取图片。
用图床优势是跨平台，不管你在哪里发布你的文章，图片都是可用的。不用为每个平台单独上传。
图床可选择很多，参考知乎：[盘点国内免费好用的图床](https://zhuanlan.zhihu.com/p/35270383)。

如果你用微信公众号素材库，需要上传到后把图片 URL 粘贴回来，或者编辑好以后，在公众号里插入图片。目前我用后者。

![](https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/bg_banner4273fb.png)

## 字体样式
用两个 * 包含一段文本就是粗体，用一个 * 包含一段文本就是斜体，删除线用两个 ~ 号包起来。例如：

妈妈说*明天降温*，**请穿好秋裤**

~~这是加删除线的文字~~

## 列表项
列表的显示只需要在文字前加上 - 或 * 即可变为无序列表，有序列表则直接在文字前加 1.2.3. 符号要和文字之间加上一个字符的空格。


使用 Markdown 的优点：
- 专注你的文字内容而不是排版样式，安心写作。
- 轻松的导出 HTML、PDF 和本身的 .md 文件。
- 纯文本内容，兼容所有的文本编辑器与字处理软件。
- 随时修改你的文章版本，不必像字处理软件生成若干文件版本导致混乱。
- 可读、直观、学习成本低。

托 [Neko](https://github.com/nekocode) 的福，有序的列表项支持了。
1. 一个列表项
2. 另一个列表项
3. 第三个列表项

## 引用
>We believe that writing is about content, about what you want to say – not about fancy formatting.
>
>我们坚信写作写的是内容，所思所想，而不是花样格式。  
>— Ulysses for Mac
>
>>支持多级引用
>>>支持多级引用

## 分割线
分割线的语法只需要另起一行，连续输入三个星号 *** 即可。  
***

## 注音符号

[注音符号 W3C 定义](http://www.w3.org/TR/ruby/)。支持日语注音假名，小夜時雨【さ・よ・しぐれ】 和 汉语拼音 上海【Shàng・hǎi】

用法有以下几种：

```
世界【せかい】
世界{せかい}
```

世界{せかい}

```
小夜時雨【さ・よ・しぐれ】
```

小夜時雨【さ・よ・しぐれ】

```
食べる【たべる】
食べる{たべる}
```

食べる{たべる}\n\n english【英文】 will not translated{fan yi}'


## 代码块
代码块，使用微信官方的高亮配色，在代码块标示语言即可。粘贴到公众号后，需要用鼠标点一下代码块，完成高亮。


    ```cpp
    你的代码
    ```



```cpp
#include <stdio.h>

const int MAX = 10;
int cache[MAX] = {0};

int fib(int x) {
  if (x == 1) return 1;
  if (x == 0) return 0;
  if (cache[x] == 0) {
    int ret = fib(x - 1) + fib(x - 2);
    cache[x] = ret;
  }
  return cache[x];
}

int main() {
    int i;
    printf("fibonacci series:\n");
    for (i = 0; i < MAX; ++i) {
        printf("%d ", fib(i));
    }
    return 0;
}
```

然后是一个内联代码： a paragraphg with inline code `{code: 0}`。

## 表格
接下来是表格示例：

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

