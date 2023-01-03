---
html:
    offline: false
    embed_local_images: false
print_background: true
---  
  
#  test
  
  
#  h1
  
  
##  h2
  
  
###  h3
  
  
  
####  h4
  
  
a~b~^c^ *d* **e** ***f*** ==g== ~~h~~ [^tag] <kbd>i</kbd>
[^tag]: aaa
  
*[HTML]: Hyper Text Markup Language
HTML
  
##  math
  
  
<p align="center"><img src="https://latex.codecogs.com/gif.latex?&#x5C;frac{1}{2}"/></p>  
  
  
##  alert
  
  
  
!!!note  
	no T
  
  
  
!!!info  
	info1
	werfl2
	jj3
	jpj4
  
  
d
  
!!!warning  
	warning
	nilj
	kpo
  
  
  
  
!!!danger  qq
	danger
	ff
  
  
  
  
!!!question  
  
  
  
  
!!!example  
	<p align="center"><img src="https://latex.codecogs.com/gif.latex?-&#x5C;frac{1}{12}=1+2+3+4..."/></p>  
  
  
  
  
!!!success  
  
  
  
!!!failure  
  
  
<details>
  
sa
  
- fwfwe
- fgwerg
  
</details>
  
  
  
<details>
  
sa
  
- fwfwe
- fgwerg
  
</details>
  
  
  
> fcwf
  
term
: definition
  
#  mermaid
  
  

```
Error: mermaid CLI is required to be installed.
Check https://github.com/mermaid-js/mermaid-cli for more information.

Error: Command failed: npx -p @mermaid-js/mermaid-cli mmdc --theme dark --input /var/folders/2x/640nxgzd2hgbdpj0ljc7fwbc0000gn/T/mume-mermaid202303-59851-a51z5a.ed024.mmd --output /Users/chc/gits/MPE-enhanced-1/paste_src/f936bef7e30238cc12a9f709c087fe310.png
/bin/sh: npx: command not found

```  

  

```
Error: mermaid CLI is required to be installed.
Check https://github.com/mermaid-js/mermaid-cli for more information.

Error: Command failed: npx -p @mermaid-js/mermaid-cli mmdc --theme dark --input /var/folders/2x/640nxgzd2hgbdpj0ljc7fwbc0000gn/T/mume-mermaid202303-59851-jjhjk7.u6ob.mmd --output /Users/chc/gits/MPE-enhanced-1/paste_src/f936bef7e30238cc12a9f709c087fe311.png
/bin/sh: npx: command not found

```  

  
#  table
  
  
  
| n | k |   |
| --- | --- | :-: |
| j | j |   |
| s | s |   |
|   |   |   |
  
  
| a | b | c |
| --- | --- | --- |
| a | > | 1 |
  
> |a|2
  
#  Exe
  
  
```python{code_chunk_offset=0,
a = 1
b = 2
print (a+b)
```
  
```bash{code_chunk_offset=1,
ls
```
  
```gnuplot
set terminal svg
set title "Simple Plots" font ",20"
set key left box
set samples 50
set style data points
plot [-10:10] sin(x),atan(x),cos(atan(x))
```
  
```python
import matplotlib.pyplot as plt
import numpy as np
import math
#變數
x = np.arange(0, 10*math.pi, 5)
#p,q,A
p = 2*np.sin(x* 2)-1
q = np.cos(x/6)+1
A = 2*p+q
# 繪圖
plt.plot([1,2,3],[1,2,3], '-r')
#plt.title("Question 1")
#plt.plot(x, p,'--k')
#plt.plot(x, q, '--b')
plt.plot(x, A, '-r')
plt.show()
```
  
#  fig
  
  
![](paste_src/2022-10-09-15-37-51.png )
  
<details>
  

```
Error: mermaid CLI is required to be installed.
Check https://github.com/mermaid-js/mermaid-cli for more information.

Error: Command failed: npx -p @mermaid-js/mermaid-cli mmdc --theme dark --input /var/folders/2x/640nxgzd2hgbdpj0ljc7fwbc0000gn/T/mume-mermaid202303-59851-1mv38mm.j18d.mmd --output /Users/chc/gits/MPE-enhanced-1/paste_src/f936bef7e30238cc12a9f709c087fe312.png
/bin/sh: npx: command not found

```  

  
</details>
  
  
  
#  latex
  
  
```latex
\documentclass[margin=0pt]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
\draw[gray, thick] (-1,2) -- (2,-4);
\draw[gray, thick] (-1,-1) -- (2,2);
\draw[red, thick] (1,-1) -- (2,2);
\filldraw[black] (0,0) circle (2pt) node[anchor=west]{Intersection point};
\end{tikzpicture}
\end{document}
```
  
#  C++
  
  
```C++{code_chunk_offset=5,
#include<iostream>
using namespace std;
int main(){
    cout<<"1";
}
```
  
###  f
  
  
dwef
  
ffffffwefff
  
  
[klnm](test.md ) [:radioactive:](test.html )
<i class="fa fa-browser"></i>
  
<i class="fa fa-camera-retro" style="color: #F00;"></i>
  
#  website
  
<iframe 
src="https://website-card-embed-demo.humblex.top/?url=https://www.youtube.com/watch?v=89PNZUuaqoU" 
style="width:100%;height:124px" frameborder="no">
</iframe>
  
  
  
  
  
<div class="dcl">
<section>
  
這是左邊
  
</section>
  
<section>
  
這是右邊
- 1
- 2
  
</section></div>
  
  
  
<hr>
  
#  test
  
111
222
333
4
  
#  nt  
  
- Duodenum
  - C 字型
  
  