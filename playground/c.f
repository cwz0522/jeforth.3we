	<text>	/* <text>...</Text> 是一段可以跨行的 string。 
			** 您跳到下面查看，會發現這 string 將被交給 tib.insert 執行。
			** tib.insert 意思是：把這一大段 text 當作主人輸入 TIB 的 Forth commands 執行。 
			** 像本段這種類似 C 語言的 comments 都會在執行前被清除掉，彷彿 jeforth 認得這種
			** comment 似的？其實它不認得，但咱略施小技一小行 JavaScript 即可。本來 HTML 是
			** 很難寫註解的，用 jeforth 包裹起來寫 HTML 則無所不能！
			** 
			** 下面的 source code 有 forth, JavaScript, HTML, CSS 等多種語言混搭。
			** 您只要記得 interpreter 是 jeforth 所以切入別的語言之前一定有某個 jeforth
			** 的命令切換，下面都會解釋。我覺得閱讀起來並無困難，您覺得呢？請多多惠賜意見。
			*/
		<h> /* <h>..</h> 是寫東西進 HTML 的 <head> 裡 */
			<style type="text/css">
				code,.code,table{ 
					font-family: courier new;
					font-size: 100%;
					background: #E0E0E0;
					width: 100%;
				}
				blockquote { 
					font-family: Microsoft Yahei;
					letter-spacing: 2px;
					line-height: 160%;
				}
			</style>
		</h> drop \ /* 丟掉 <h>..</h> 留下來的 <style> element object, 用不著 */
		<o> /* <o>..</o> 是在 outputbox 裡寫 HTML */
			<div id=eleOpening> /* 將來可以 js> eleOpening 來取用這整個 DIV element */
			<h1>經由電腦繪圖熟悉 jeforth.3we - 布料圖案 cloth.f</h1>
			<blockquote><p>
				jeforth 是 FitTaiwan 兩位先進 Yap & 爽哥 所提示之用 JavaScript 
				打造 Forth 系統的簡便方法，
				我接下去做的版本就稱為 jeforth.3we (3 Words Engine) 統稱同一個 kernel
				所發展出來的各種版本。
				其中 3 之後加上一點點努力就是 Forth 語言的吉祥數字 4 了， 
				而目前 we 則有 jeforth.3htm (HTML), jeforth.3hta (Microsoft HTML Application), 
				jeforth.3nd (Node.js), jeforth.3nw (Node-Webkit or NW.js) 等。
				在本網頁上呈現的是 jeforth.3htm 的應用。
			</p><p>	
				幾年前剛聽說 Processing.js 這個繪圖電腦語言的時候，
				上網一查就看到我們接下來要示範的這個 demo。
				別急，您現在去找已經找不到了。
				以下用 jeforth 來重現經典畫出這個美麗的布料圖案，
				並且請您親手鑽進這個十分簡單的程式裡去玩一玩，
				說不定您現在還看得到下面的【布料圖案】仍在畫布上逐漸完成中？
				這表示這塊區域是活的，
				我們一邊操作它一邊自然地熟悉 jeforth.3we 的使用。
			</p></blockquote>
			</div>
		</o> ( eleOpening ) js> outputbox insertBefore /* 把這段 HTML 移到 outputbox 之前 */
	</text> :> replace(/\/\*(.|\r|\n)*?\*\//mg,"") \ 清除 /* ... */ 註解。
	tib.insert
	<text> 
		<o> <blockquote>
		<table id=elePlayarea align=center width=90% border=2 cellspacing=0 cellpadding=4 bordercolor=white>
			<tr>
				<td rowspan="2" valign="bottom">
					<div id=cvdiv></div> /* reserved for the canvas */
				</td> 
				<td width=90% valign="TOP"> /* 故意佔 90% 寬度讓旁邊的 canvas 擠滿它的區域 */
					<div id=newoutputbox></div>  /* reserved for the outputbox */
				</td>
			</tr>
			<tr>
				<td height=10%>  /* 縮到 10% 故意讓 inputbox 沉到底下 */
					<textarea id=newinputbox>\ Enter your commands here, ESC to clear.</textarea>
				</td>
			</tr>
		</table> 
		<blockquote></o> js> eleOpening insertAfter
	</text> :> replace(/\/\*(.|\r|\n)*?\*\//mg,"") \ 清除註解。
	tib.insert
	
	\ 以下的 js> 命令執行隨後的 JavaScript statements 直到遇上 white space 為止，最
	\ 後一個 statement 的值 (or 'undefined') 放在 jeforth 的 TOS 傳回。
	
	js> inputbox  js> newinputbox  replaceNode \ replaceNode 移置過去，本來 inputbox 有很多功能皆獲保留。
	js> outputbox js> newoutputbox replaceNode \ 同上。
	cls eleBody ce! er \ 清除畫面上的小垃圾。
	include processing.f
	js> vm.cv :> canvas js> cvdiv replaceNode \ Place the canvas
	include cloth.f
	<text>
		s" body" <e> /* 直接放到 <body> 後面，不必像上面那樣用 insertBefore 之類的手法搬動就定位 */
/* -------------------------------------------------------------------------- */
			<h2>認識環境</h2>
/* -------------------------------------------------------------------------- */
			<blockquote><p>
				上面看到的畫布、Outputbox、Inputbox 等分別標註如下圖。
				jeforth 可以自由設計版面，
				我們現在是為了要示範 cloth.f 而設計成這樣子。
				Inputbox 以及 Outputbox 所處的右半邊是 User(您) 與
				forth 電腦語言(jeforth) 的【交談區】；
				左半邊放 Canvas 畫布。
				jeforth 的應用很廣泛，例如自動化 Excel 試算表簡化工作、
				網管、工程科學上的應用等，沒甚麼限制。
				然而要在本頁面上講解，還是用【繪圖】當作實例比較方便。
			</p>
			<img src="playground/jeforth-demo-cloth-2015-11-201.jpg">
/* -------------------------------------------------------------------------- */
			<p>
				【交談區】初看只是上下兩塊區域，沒甚麼吧？
				其實它們提供了相當完備的 Console 或 Shell 程式的常見功能。
				例如 Command auto-completion, Previous commands recalling, 
				至於 Outputbox triming 則別地方都還沒見過。
				為了到處通用，外觀宜簡約，留給應用各自去發揮。
				請嘗試在 inputbox 打入 <code>cls</code> 命令把 outputbox 清乾淨。
				打入 <code>words</code> 列出所有的命令。
				打入 <code>help *</code> 列出所有命令的說明。
				打入 <code>help</code> 命令查看操作功能介紹。
			</p></blockquote>
/* -------------------------------------------------------------------------- */
			<h2>cloth.f 裡有些甚麼？</h2>
/* -------------------------------------------------------------------------- */
			<blockquote>
/* -------------------------------------------------------------------------- */
				<p>
					以上嘗試的結果，您可能也覺得命令好多，眼花撩亂。
					它們都是各個 ~.f 檔定義的，
					我建議把每個 ~.f 檔當成一個 Forth 語言的 vocabulary
					且直接以檔名為 name。
					Vocabulary 者，義:「一大堆單字」, 音:「我看必有熱淚」
					是 Forth 歸納眾多命令的一招。
					這麼多 words 無論是英文或 Forth 語言都令人飆淚，所以要分門整理。
					我們只想專注在 demo 程式 cloth.f 就好，
					請打入這個命令 <code>only</code> 然後再輸入 <code>words</code> 試試，剛才還在的大堆命令
					(Forth words) 都不見了。這就是 only 的作用 — 不看除了基本的以外之其他命令。
					jeforth.3we 的基本命令就是在名為 <code>forth</code> 的 vocabulary 之內的 words 皆是。
					請打入命令：
				</p>
				<table>
				<td class=code /* .code 影響到整格區域的 background color 這是用上 <table> 的目的 */>
				<blockquote>
				<code>only canvas.f also cloth.f words</code>
				</blockquote></td></table>
/* -------------------------------------------------------------------------- */
				<p>
					如此列出來的 words 就只限 canvas.f 跟 cloth.f 的了。
				</p>
				<table><td class=code /* 影響整格的 background color */>
				<blockquote><pre><code /* 影響 font-size 跟 font-family */>
> only canvas.f also cloth.f words /* 在 <pre> 裡不自動排版， white spaces 會照著呈現 */

-------- canvas.f (29 words) --------
canvasStyle createCanvas setWorkingCanvas setCanvasSize 
setCanvasStyle save restore translate rotate beginPath 
moveTo lineTo closePath stroke lineWidth strokeStyle 
clearRect fillStyle fill fillRect fillText strokeText 
clearCanvas arc createRadialGradient createLinearGradient 
addColorStop font move-cv-up-into-outputbox
-------- cloth.f (8 words) --------
starting-message ending-message r g b range d draw
 OK 			</code></pre></blockquote></td></table>
/* -------------------------------------------------------------------------- */
				<p>
					看到 canvas.f 裡有個 clearCanvas 命令嗎？
					請用它把 canvas 畫布整個擦掉。
					試試看只敲 <code>clear</code> 然後連按幾下 
					TAB key 自動跳出類似的命令直到
					<code>clearCanvas</code> 出現為止即予執行。			
					cloth.f 裡只有少數幾個命令，看到其中有個 
					<code>draw</code> 了嗎？
					輸入 <code>draw</code> 你會看到全白的 
					canvas 上出現了一條色帶。
					多試起次，可以按 Ctrl-Up Ctrl-Down 來喚回先前下過的命令省勞力。
					一次下一大堆將如何？
				</p>
				<table width=100%><td class=code><blockquote><code>
					draw draw draw draw draw draw draw draw draw draw draw draw
				</code></blockquote></td></table>
/* -------------------------------------------------------------------------- */
				<p>
					結果類似這樣：
				</p>
				<img src="playground/jeforth-demo-cloth-2015-11-202.jpg">
/* -------------------------------------------------------------------------- */
				<p>
					那麼 draw 是怎麼畫出一條色帶的呢？用 <code>see draw</code> 查看它的定義。
				</p>
				<table width=100%><td class=code><blockquote><code>
					--- results ----------
				</code></blockquote></td></table>
/* -------------------------------------------------------------------------- */
				<p>
					--- description ---
				</p>
				<table width=100%><td class=code><blockquote><code>
					--- results ----------
				</code></blockquote></td></table>
/* -------------------------------------------------------------------------- */
				<p>
					被 only 命令排除掉的 vocabulary 都還在 memory 裡面，
					但是都移出了 order 列表。order 列表是搜尋 Forth 命令時，
					循序查訪諸 vocabulary 的先後順序。不在 order 表裡的 vocabulary
					即使已經在 memory 裡面了 words, help 以及 Forth interpreter 都看不見它們。
					下達 vocs 命令即可查看 memory 裡面有哪些 vocabulary。
					這麼一查如果找不到你要用到的 vocabulary 就得用 
					include vocabulary-name.f 命令把它 load 進 memory。
					用 order 命令可查看上述的先後順序，
				</p>
				<table width=100%><td class=code><blockquote><code>
> vocs /* 查看 memory 裡有哪些 vocabulary */
vocs: forth,html5.f,element.f,platform.f,mytools.f,canvas.f,processing.f,cloth.f
 OK 
> order /* 查看 Forth interpreter 搜尋命令的優先順序 */
search: forth,html5.f,element.f,platform.f,mytools.f,canvas.f,processing.f,cloth.f
define: cloth.f
 OK 
> only /* 把 order 列表都清除 */  
 OK 
> order /* order 列表都被清除了的結果 */
search: /* search 部分空了 */
define: cloth.f
 OK 
> cloth.f /* 把 cloth.f 加回 order 列表 */
 OK 
> order /* 看看結果 */
search: cloth.f
define: cloth.f
 OK 
> also canvas.f /* 再把 canvas.f 也加回 order 列表 */
 OK 
> order /* 再看看結果 */
search: cloth.f,canvas.f
define: cloth.f
 OK 	
				</code></blockquote></td></table>
				<p>
					如上，其實 order 列表還分 search 的 order 跟 define 的去處兩部分。
					前者正是上述的搜尋命令時之先後順序，上例中最右邊的這個 cloth.f 
					或最後的例子裡的 canvas.f ( 也就是 order[order.length-1] ) 
					是最優先的，也就是越之後加進 order 的越優先。
					【優先】的意思是當同名的命令 ( Forth word ) 重複出現在多個
					vocabulary 裡時，Forth interpreter 該執行或 compile 哪一個。
					因此同一個 word name 可以重複使用，配合指定 
					vocabulary 的優先順序即可無誤地使用。
					
				</p>
				

		</e> drop \ <e>..</e> 留下的最後一個 element 沒用到，丟掉。
	</text> :> replace(/\/\*(.|\r|\n)*?\*\//mg,"") \ 清除註解。
	tib.insert