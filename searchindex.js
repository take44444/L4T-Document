Object.assign(window.search, {"doc_urls":["what-is-l4t.html#programming-language---l4t","hello-world.html#hello-world","var.html#変数","var.html#global変数とlocal変数","types/types.html#型","types/num.html#整数","types/array.html#配列","types/struct.html#構造体","types/ptr.html#ポインタ","types/funcptr.html#関数ポインタ","func.html#関数","if.html#if-elif-else文","loop.html#loop文","compound.html#ブロック","ffi.html#ffi","unsafe.html#unsafeブロック"],"index":{"documentStore":{"docInfo":{"0":{"body":8,"breadcrumbs":4,"title":3},"1":{"body":47,"breadcrumbs":4,"title":2},"10":{"body":0,"breadcrumbs":0,"title":0},"11":{"body":0,"breadcrumbs":2,"title":1},"12":{"body":0,"breadcrumbs":2,"title":1},"13":{"body":0,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":2,"title":1},"15":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":22,"breadcrumbs":0,"title":0},"3":{"body":3,"breadcrumbs":1,"title":1},"4":{"body":11,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":0,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"L4T (Language for Training) は，教育を目的としたコンパイラ型プログラミング言語です． プログラミング初学者，もしくはPythonなどの高級言語を触ったことがあるがC言語等の低級言語を触ったことがなく，C言語やC++，Rustといった言語に対して抵抗を感じるという方をターゲットとしています． L4Tの 強い型システム ， 分かりやすく賢いエラー文 ， セキュアコーディングを促す文法やルール とともに， \"低レベル\"プログラミング の世界に入門しましょう！ 実行環境を構築する必要はありません． L4T Playground でいつでもL4Tを試せます！ Caution! この言語は開発中であり，一部の機能が未実装です．このドキュメントでは，未実装な機能の題目やコードの近くに開発中であることを示す マークを付けています． 本ドキュメントに誤植や改善すべき箇所を発見した場合は， 筆者 にお知らせください．","breadcrumbs":"What is L4T? » Programming language - L4T","id":"0","title":"Programming language - L4T"},"1":{"body":"extern \"C\" any printf func main() -> num printf(&\"Hello, world\\n\") return 0 extern \"C\" any printf は未実装であり，現在は1行目を除いたコードを書くことで同じ挙動を試せます． 上のコードを実行すると，標準出力に Hello, world! と出力されます． 3行目の func main() -> num は， 関数 を定義しています．L4Tでは，プログラムは main 関数の中身から実行されます．プログラム内で，コンピュータが最初に実行する場所は エントリポイント と呼ばれます．言い換えればL4Tでのエントリポイントは main 関数であり， main 関数のないコードはL4Tではコンパイルされません． -> num は，この main 関数の返り値が num 型であることを示しています．分かりやすいですね！ 4~5行目には，2つのスペースが先頭にあります．これは インデント と呼ばれ，4行目と5行目のコードがこの main 関数内の処理であることを意味します． 4行目では，printf という関数を呼び出しています．しかし， printf 関数の定義はコード上にありませんね．これは，1行目の extern \"C\" any printf と関係しています．詳しくは， 9章 FFI で説明します．ここでは単に， printf 関数は文字列を表示する関数だと認識しましょう． 5行目の return 0 は， 0 という値を返すとともに main 関数を終了する文です． main 関数の返り値は，プログラムの終了コードとなります．このプログラムは，終了コード 0 で終了します．","breadcrumbs":"Hello, world! » Hello, world!","id":"1","title":"Hello, world!"},"10":{"body":"","breadcrumbs":"関数 » 関数","id":"10","title":"関数"},"11":{"body":"","breadcrumbs":"if-elif-else文 » if-elif-else文","id":"11","title":"if-elif-else文"},"12":{"body":"","breadcrumbs":"loop文 » loop文","id":"12","title":"loop文"},"13":{"body":"","breadcrumbs":"ブロック » ブロック","id":"13","title":"ブロック"},"14":{"body":"","breadcrumbs":"FFI » FFI","id":"14","title":"FFI"},"15":{"body":"この機能は開発中です","breadcrumbs":"unsafeブロック » unsafeブロック","id":"15","title":"unsafeブロック"},"2":{"body":"変数 とは，値を一時的に格納する箱のようなものです．実体は スタック領域 や ヒープ領域 ， データ領域 等のメモリ上にあることもあれば， レジスタ であることもありますが，プログラマは特にそれを意識することなくプログラムを書くことができます．例を見てみましょう！ num g func main() -> num num a, b a: 1 b: 10 g: a + b + 100 printf(\"%d\\n\", g) return 0 変数の宣言は， 型名 変数名1, 変数名2, ... と書きます．上のコードの1行目や4行目は， num 型の変数を宣言しています． 5~7行目では，変数に値を代入しています．7行目のように，既に宣言した変数を用いて演算を行うこともできます．このように，変数は，複雑な計算をするのに非常に便利です． このコードを実行すると， 111 と表示されます．","breadcrumbs":"変数 » 変数","id":"2","title":"変数"},"3":{"body":"上のコードの1行目と4行目ではどちらも変数を宣言していますが，宣言している場所が違います．1行目のように関数の外で宣言した変数を global変数 ，4行目のように関数の中で宣言した変数を local変数 と呼びます． global変数は，宣言した行より下の任意の場所で使うことができますが，local変数は，宣言した関数(厳密には ブロック )内でしか使うことができません． レベルアップ L4Tのコンパイラは，global変数はデータ領域に，local変数はスタック領域やレジスタに割り当てます． データ領域の値はプログラムが終了するまで有効ですが，スタック領域やレジスタの値は一時的なものです．他の関数でも参照する変数はglobal，他の関数で値を変更されたくない変数は，localというように使い分けましょう．","breadcrumbs":"変数 » global変数とlocal変数","id":"3","title":"global変数とlocal変数"},"4":{"body":"L4Tの全ての値には型があります．例えば num a と宣言した変数 a や， 1234 というような値は num 型です．L4Tでは，同じ型同士でしか演算ができず，また，ある型として宣言した変数にはその型の値しか代入することができません．この言語仕様により，より セキュアなコーディングが強制され ，私たちは，実装においてバグを作りにくくなります． L4Tで扱える型は， 整数 ( num )， 配列 ( array )， 構造体 ( struct )， ポインタ ( ptr )， 関数ポインタ ( funcptr )の5つです．","breadcrumbs":"型 » 型","id":"4","title":"型"},"5":{"body":"","breadcrumbs":"型 » 整数 » 整数","id":"5","title":"整数"},"6":{"body":"","breadcrumbs":"型 » 配列 » 配列","id":"6","title":"配列"},"7":{"body":"","breadcrumbs":"型 » 構造体 » 構造体","id":"7","title":"構造体"},"8":{"body":"","breadcrumbs":"型 » ポインタ » ポインタ","id":"8","title":"ポインタ"},"9":{"body":"","breadcrumbs":"型 » 関数ポインタ » 関数ポインタ","id":"9","title":"関数ポインタ"}},"length":16,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":1.0}}},"1":{"0":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.0}}},"1":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"2":{"3":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}},"行":{"df":0,"docs":{},"目":{"df":0,"docs":{},"や":{"4":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"2":{"df":1,"docs":{"2":{"tf":1.0}}},"3":{"df":1,"docs":{"1":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}},"~":{"5":{"df":0,"docs":{},"行":{"df":0,"docs":{},"目":{"df":0,"docs":{},"に":{"df":0,"docs":{},"は":{"df":0,"docs":{},"，":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"行":{"df":0,"docs":{},"目":{"df":0,"docs":{},"で":{"df":0,"docs":{},"は":{"df":0,"docs":{},"，":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"と":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"5":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}},"9":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"b":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"14":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"g":{"df":1,"docs":{"2":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"変":{"df":0,"docs":{},"数":{"df":0,"docs":{},"と":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"l":{"4":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.7320508075688772},"4":{"tf":1.4142135623730951}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":3.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":3,"docs":{"1":{"tf":2.0},"2":{"tf":2.0},"4":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"&":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"0":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":1.0}}},"1":{"0":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.0}}},"1":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"2":{"3":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}},"行":{"df":0,"docs":{},"目":{"df":0,"docs":{},"や":{"4":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"2":{"df":1,"docs":{"2":{"tf":1.0}}},"3":{"df":1,"docs":{"1":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}},"~":{"5":{"df":0,"docs":{},"行":{"df":0,"docs":{},"目":{"df":0,"docs":{},"に":{"df":0,"docs":{},"は":{"df":0,"docs":{},"，":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"行":{"df":0,"docs":{},"目":{"df":0,"docs":{},"で":{"df":0,"docs":{},"は":{"df":0,"docs":{},"，":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"と":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"5":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}},"9":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"b":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"14":{"tf":1.7320508075688772}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"g":{"df":1,"docs":{"2":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"変":{"df":0,"docs":{},"数":{"df":0,"docs":{},"と":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":2.0}}}}}}},"l":{"4":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":2.6457513110645907},"1":{"tf":1.7320508075688772},"4":{"tf":1.4142135623730951}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":3.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":3,"docs":{"1":{"tf":2.0},"2":{"tf":2.0},"4":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"&":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":1,"docs":{"1":{"tf":2.0}}},"df":0,"docs":{}}}}}}},"title":{"root":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"14":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"b":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"変":{"df":0,"docs":{},"数":{"df":0,"docs":{},"と":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"l":{"4":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});