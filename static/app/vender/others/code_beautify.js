// https://highlightjs.org

(function(){function d(b,f){var a=new c(b,f);return a.beautify()}function c(bs,aX){var bu,aP,bf,a5,a,a3,aJ;var bd,aV,br;var aF,aZ,bp,bh,a7,aL;var au;var a8,bl,bo,aH,a9;var a4;var bv,aK,bc;var aD="";aF="\n\r\t ".split("");aZ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split("");aL="0123456789".split("");bp="=> + - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::";bp+=" <%= <% %> <?= <? ?>";bp=bp.split(" ");a7="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(",");aK={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"};bv={TK_START_EXPR:aQ,TK_END_EXPR:aG,TK_START_BLOCK:at,TK_END_BLOCK:b,TK_WORD:ba,TK_SEMICOLON:aI,TK_STRING:bb,TK_EQUALS:az,TK_OPERATOR:a2,TK_COMMA:aU,TK_BLOCK_COMMENT:aW,TK_INLINE_COMMENT:av,TK_COMMENT:bk,TK_DOT:aS,TK_UNKNOWN:a6};function bn(e,f){return{mode:f,last_text:e?e.last_text:"",last_word:e?e.last_word:"",var_line:false,var_line_tainted:false,var_line_reindented:false,in_html_comment:false,multiline_array:false,if_block:false,do_block:false,do_while:false,in_case_statement:false,in_case:false,case_body:false,indentation_level:(e?e.indentation_level+((e.var_line&&e.var_line_reindented)?1:0):0),ternary_depth:0}}aX=aX?aX:{};bc={};if(aX.space_after_anon_function!==undefined&&aX.jslint_happy===undefined){aX.jslint_happy=aX.space_after_anon_function}if(aX.braces_on_own_line!==undefined){bc.brace_style=aX.braces_on_own_line?"expand":"collapse"}bc.brace_style=aX.brace_style?aX.brace_style:(bc.brace_style?bc.brace_style:"collapse");bc.indent_size=aX.indent_size?parseInt(aX.indent_size,10):4;bc.indent_char=aX.indent_char?aX.indent_char:" ";bc.preserve_newlines=(aX.preserve_newlines===undefined)?true:aX.preserve_newlines;bc.break_chained_methods=(aX.break_chained_methods===undefined)?false:aX.break_chained_methods;bc.max_preserve_newlines=(aX.max_preserve_newlines===undefined)?0:parseInt(aX.max_preserve_newlines,10);bc.jslint_happy=(aX.jslint_happy===undefined)?false:aX.jslint_happy;bc.keep_array_indentation=(aX.keep_array_indentation===undefined)?false:aX.keep_array_indentation;bc.space_before_conditional=(aX.space_before_conditional===undefined)?true:aX.space_before_conditional;bc.unescape_strings=(aX.unescape_strings===undefined)?false:aX.unescape_strings;bc.wrap_line_length=(aX.wrap_line_length===undefined)?0:parseInt(aX.wrap_line_length,10);aJ="";while(bc.indent_size>0){aJ+=bc.indent_char;bc.indent_size-=1}while(bs&&(bs.charAt(0)===" "||bs.charAt(0)==="\t")){aD+=bs.charAt(0);bs=bs.substring(1)}bu=bs;a4=bs.length;a="TK_START_BLOCK";a3="";aP=[];bo=false;aH=false;a9=[];br=[];bi(aK.BlockStatement);bh=0;this.beautify=function(){var g,h,e,f;while(true){g=a0();bf=g[0];a5=g[1];if(a5==="TK_EOF"){break}e=bc.keep_array_indentation&&ax(bd.mode);if(e){for(h=0;h<bl;h+=1){aR(true)}}else{a8=bl>0;if(bc.max_preserve_newlines&&bl>bc.max_preserve_newlines){bl=bc.max_preserve_newlines}if(bc.preserve_newlines){if(bl>1){aR();for(h=1;h<bl;h+=1){aR(true)}}}}bv[a5]();if(a5!=="TK_INLINE_COMMENT"&&a5!=="TK_COMMENT"&&a5!=="TK_UNKNOWN"){a3=bd.last_text;a=a5;bd.last_text=bf}}f=aD+aP.join("").replace(/[\r\n ]+$/,"");return f};function be(e){e=(e===undefined)?false:e;while(aP.length&&(aP[aP.length-1]===" "||aP[aP.length-1]===aJ||aP[aP.length-1]===aD||(e&&(aP[aP.length-1]==="\n"||aP[aP.length-1]==="\r")))){aP.pop()}}function bw(e){return e.replace(/^\s\s*|\s\s*$/,"")}function aN(f){f=f.replace(/\x0d/g,"");var g=[],e=f.indexOf("\n");while(e!==-1){g.push(f.substring(0,e));f=f.substring(e+1);e=f.indexOf("\n")}if(f.length){g.push(f)}return g}function aB(){return aP.length&&aP[aP.length-1]==="\n"}function aY(e,f){var g=e.length-1;if(g<0){g+=e.length}if(g>e.length-1){g=e.length-1}for(g++;g-->0;){if(g in e&&e[g]===f){return g}}return -1}function bj(g){g=(g===undefined)?false:g;if(bc.wrap_line_length&&!g){var e="";var h=0;var f=aY(aP,"\n")+1;if(f<aP.length){e=aP.slice(f).join("");h=e.length+bf.length+(aH?1:0);if(h>=bc.wrap_line_length){g=true}}}if(((bc.preserve_newlines&&a8)||g)&&!aB()){aR(false,true);bo=true;a8=false}}function aR(e,f){bo=false;aH=false;if(!f){if(bd.last_text!==";"){while(bd.mode===aK.Statement&&!bd.if_block){bq()}}}if(bd.mode===aK.ArrayLiteral){bd.multiline_array=true}if(!aP.length){return}if(e||!aB()){aP.push("\n")}}function a1(){if(aB()){if(bc.keep_array_indentation&&ax(bd.mode)&&a9.length){aP.push(a9.join("")+"")}else{if(aD){aP.push(aD)}bm(bd.indentation_level);bm(bd.var_line&&bd.var_line_reindented);bm(bo)}}}function bm(f){if(f===undefined){f=1}else{if(typeof f!=="number"){f=f?1:0}}if(bd.last_text!==""){for(var e=0;e<f;e+=1){aP.push(aJ)}}}function aO(){if(aH&&aP.length){var e=aP[aP.length-1];if(!aB()&&e!==" "&&e!==aJ){aP.push(" ")}}}function aC(e){e=e||bf;a1();bo=false;aO();aH=false;aP.push(e)}function bg(){bd.indentation_level+=1}function bi(e){if(bd){br.push(bd);aV=bd}else{aV=bn(null,e)}bd=bn(aV,e)}function ax(e){return e===aK.ArrayLiteral}function aM(e){return aA(e,[aK.ArrayLiteral,aK.Expression,aK.ForInitializer,aK.Conditional])}function bq(){if(br.length>0){aV=bd;bd=br.pop()}}function aT(){if((bd.last_text==="do"||(bd.last_text==="else"&&bf!=="if")||(a==="TK_END_EXPR"&&(aV.mode===aK.ForInitializer||aV.mode===aK.Conditional)))){bj();bi(aK.Statement);bg();bo=false;return true}return false}function aE(h,f){for(var g=0;g<h.length;g++){var e=bw(h[g]);if(e.charAt(0)!==f){return false}}return true}function ay(e){return aA(e,["case","return","do","if","throw","else"])}function aA(f,e){for(var g=0;g<e.length;g+=1){if(e[g]===f){return true}}return false}function bt(i){var e=false,k="",f=0,j="",h=0,g;while(e||f<i.length){g=i.charAt(f);f++;if(e){e=false;if(g==="x"){j=i.substr(f,2);f+=2}else{if(g==="u"){j=i.substr(f,4);f+=4}else{k+="\\"+g;continue}}if(!j.match(/^[0123456789abcdefABCDEF]+$/)){return i}h=parseInt(j,16);if(h>=0&&h<32){if(g==="x"){k+="\\x"+j}else{k+="\\u"+j}continue}else{if(h===34||h===39||h===92){k+="\\"+String.fromCharCode(h)}else{if(g==="x"&&h>126&&h<=255){return i}else{k+=String.fromCharCode(h)}}}}else{if(g==="\\"){e=true}else{k+=g}}}return k}function aw(g){var e=bh;var f=bu.charAt(e);while(aA(f,aF)&&f!==g){e++;if(e>=a4){return false}f=bu.charAt(e)}return f===g}function a0(){var f,i;bl=0;if(bh>=a4){return["","TK_EOF"]}a8=false;a9=[];var m=bu.charAt(bh);bh+=1;while(aA(m,aF)){if(m==="\n"){bl+=1;a9=[]}else{if(bl){if(m===aJ){a9.push(aJ)}else{if(m!=="\r"){a9.push(" ")}}}}if(bh>=a4){return["","TK_EOF"]}m=bu.charAt(bh);bh+=1}if(aA(m,aZ)){if(bh<a4){while(aA(bu.charAt(bh),aZ)){m+=bu.charAt(bh);bh+=1;if(bh===a4){break}}}if(bh!==a4&&m.match(/^[0-9]+[Ee]$/)&&(bu.charAt(bh)==="-"||bu.charAt(bh)==="+")){var h=bu.charAt(bh);bh+=1;var k=a0();m+=h+k[0];return[m,"TK_WORD"]}if(m==="in"){return[m,"TK_OPERATOR"]}return[m,"TK_WORD"]}if(m==="("||m==="["){return[m,"TK_START_EXPR"]}if(m===")"||m==="]"){return[m,"TK_END_EXPR"]}if(m==="{"){return[m,"TK_START_BLOCK"]}if(m==="}"){return[m,"TK_END_BLOCK"]}if(m===";"){return[m,"TK_SEMICOLON"]}if(m==="/"){var e="";var l=true;if(bu.charAt(bh)==="*"){bh+=1;if(bh<a4){while(bh<a4&&!(bu.charAt(bh)==="*"&&bu.charAt(bh+1)&&bu.charAt(bh+1)==="/")){m=bu.charAt(bh);e+=m;if(m==="\n"||m==="\r"){l=false}bh+=1;if(bh>=a4){break}}}bh+=2;if(l&&bl===0){return["/*"+e+"*/","TK_INLINE_COMMENT"]}else{return["/*"+e+"*/","TK_BLOCK_COMMENT"]}}if(bu.charAt(bh)==="/"){e=m;while(bu.charAt(bh)!=="\r"&&bu.charAt(bh)!=="\n"){e+=bu.charAt(bh);bh+=1;if(bh>=a4){break}}return[e,"TK_COMMENT"]}}if(m==="'"||m==='"'||(m==="/"&&((a==="TK_WORD"&&ay(bd.last_text))||(a==="TK_END_EXPR"&&aA(aV.mode,[aK.Conditional,aK.ForInitializer]))||(aA(a,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))))){var j=m,n=false,o=false;i=m;if(bh<a4){if(j==="/"){var p=false;while(n||p||bu.charAt(bh)!==j){i+=bu.charAt(bh);if(!n){n=bu.charAt(bh)==="\\";if(bu.charAt(bh)==="["){p=true}else{if(bu.charAt(bh)==="]"){p=false}}}else{n=false}bh+=1;if(bh>=a4){return[i,"TK_STRING"]}}}else{while(n||bu.charAt(bh)!==j){i+=bu.charAt(bh);if(n){if(bu.charAt(bh)==="x"||bu.charAt(bh)==="u"){o=true}n=false}else{n=bu.charAt(bh)==="\\"}bh+=1;if(bh>=a4){return[i,"TK_STRING"]}}}}bh+=1;i+=j;if(o&&bc.unescape_strings){i=bt(i)}if(j==="/"){while(bh<a4&&aA(bu.charAt(bh),aZ)){i+=bu.charAt(bh);bh+=1}}return[i,"TK_STRING"]}if(m==="#"){if(aP.length===0&&bu.charAt(bh)==="!"){i=m;while(bh<a4&&m!=="\n"){m=bu.charAt(bh);i+=m;bh+=1}return[bw(i)+"\n","TK_UNKNOWN"]}var g="#";if(bh<a4&&aA(bu.charAt(bh),aL)){do{m=bu.charAt(bh);g+=m;bh+=1}while(bh<a4&&m!=="#"&&m!=="=");if(m==="#"){}else{if(bu.charAt(bh)==="["&&bu.charAt(bh+1)==="]"){g+="[]";bh+=2}else{if(bu.charAt(bh)==="{"&&bu.charAt(bh+1)==="}"){g+="{}";bh+=2}}}return[g,"TK_WORD"]}}if(m==="<"&&bu.substring(bh-1,bh+3)==="<!--"){bh+=3;m="<!--";while(bu.charAt(bh)!=="\n"&&bh<a4){m+=bu.charAt(bh);bh++}bd.in_html_comment=true;return[m,"TK_COMMENT"]}if(m==="-"&&bd.in_html_comment&&bu.substring(bh-1,bh+2)==="-->"){bd.in_html_comment=false;bh+=2;return["-->","TK_COMMENT"]}if(m==="."){return[m,"TK_DOT"]}if(aA(m,bp)){while(bh<a4&&aA(m+bu.charAt(bh),bp)){m+=bu.charAt(bh);bh+=1;if(bh>=a4){break}}if(m===","){return[m,"TK_COMMA"]}else{if(m==="="){return[m,"TK_EQUALS"]}else{return[m,"TK_OPERATOR"]}}}return[m,"TK_UNKNOWN"]}function aQ(){if(aT()){}if(bf==="["){if(a==="TK_WORD"||bd.last_text===")"){if(aA(bd.last_text,a7)){aH=true}bi(aK.Expression);aC();return}if(ax(bd.mode)){if((bd.last_text==="[")||(a3==="]"&&bd.last_text===",")){if(!bc.keep_array_indentation){aR()}}}}else{if(bd.last_text==="for"){bi(aK.ForInitializer)}else{if(aA(bd.last_text,["if","while"])){bi(aK.Conditional)}else{bi(aK.Expression)}}}if(bd.last_text===";"||a==="TK_START_BLOCK"){aR()}else{if(a==="TK_END_EXPR"||a==="TK_START_EXPR"||a==="TK_END_BLOCK"||bd.last_text==="."){if(a8){aR()}}else{if(a!=="TK_WORD"&&a!=="TK_OPERATOR"){aH=true}else{if(bd.last_word==="function"||bd.last_word==="typeof"){if(bc.jslint_happy){aH=true}}else{if(aA(bd.last_text,a7)||bd.last_text==="catch"){if(bc.space_before_conditional){aH=true}}}}}}if(bf==="("){if(a==="TK_EQUALS"||a==="TK_OPERATOR"){if(bd.mode!==aK.ObjectLiteral){bj()}}}aC();if(bf==="["){bi(aK.ArrayLiteral);bg()}}function aG(){while(bd.mode===aK.Statement){bq()}if(bf==="]"&&ax(bd.mode)&&bd.multiline_array&&!bc.keep_array_indentation){aR()}bq();aC();if(bd.do_while&&aV.mode===aK.Conditional){aV.mode=aK.Expression;bd.do_block=false;bd.do_while=false}}function at(){bi(aK.BlockStatement);var e=aw("}");if(bc.brace_style==="expand-strict"){if(!e){aR()}}else{if(bc.brace_style==="expand"){if(a!=="TK_OPERATOR"){if(a==="TK_EQUALS"||(ay(bd.last_text)&&bd.last_text!=="else")){aH=true}else{aR()}}}else{if(a!=="TK_OPERATOR"&&a!=="TK_START_EXPR"){if(a==="TK_START_BLOCK"){aR()}else{aH=true}}else{if(ax(aV.mode)&&bd.last_text===","){if(a3==="}"){aH=true}else{aR()}}}}}aC();bg()}function b(){while(bd.mode===aK.Statement){bq()}bq();if(bc.brace_style==="expand"||bc.brace_style==="expand-strict"){if(a!=="TK_START_BLOCK"){aR()}}else{if(a!=="TK_START_BLOCK"){if(ax(bd.mode)&&bc.keep_array_indentation){bc.keep_array_indentation=false;aR();bc.keep_array_indentation=true}else{aR()}}}aC()}function ba(){if(aT()){}else{if(a8&&!aM(bd.mode)&&(a!=="TK_OPERATOR"||(bd.last_text==="--"||bd.last_text==="++"))&&a!=="TK_EQUALS"&&(bc.preserve_newlines||bd.last_text!=="var")){aR()}}if(bd.do_block&&!bd.do_while){if(bf==="while"){aH=true;aC();aH=true;bd.do_while=true;return}else{aR();bd.do_block=false}}if(bd.if_block){if(bf!=="else"){while(bd.mode===aK.Statement){bq()}bd.if_block=false}}if(bf==="function"){if(bd.var_line&&a!=="TK_EQUALS"){bd.var_line_reindented=true}if((aB()||bd.last_text===";")&&bd.last_text!=="{"&&a!=="TK_BLOCK_COMMENT"&&a!=="TK_COMMENT"){bl=aB()?bl:0;if(!bc.preserve_newlines){bl=1}for(var e=0;e<2-bl;e++){aR(true)}}if(a==="TK_WORD"){if(bd.last_text==="get"||bd.last_text==="set"||bd.last_text==="new"||bd.last_text==="return"){aH=true}else{aR()}}else{if(a==="TK_OPERATOR"||bd.last_text==="="){aH=true}else{if(aM(bd.mode)){}else{aR()}}}aC();bd.last_word=bf;return}if(bf==="case"||(bf==="default"&&bd.in_case_statement)){aR();if(bd.case_body||bc.jslint_happy){bd.indentation_level--;bd.case_body=false}aC();bd.in_case=true;bd.in_case_statement=true;return}au="NONE";if(a==="TK_END_BLOCK"){if(!aA(bf,["else","catch","finally"])){au="NEWLINE"}else{if(bc.brace_style==="expand"||bc.brace_style==="end-expand"||bc.brace_style==="expand-strict"){au="NEWLINE"}else{au="SPACE";aH=true}}}else{if(a==="TK_SEMICOLON"&&bd.mode===aK.BlockStatement){au="NEWLINE"}else{if(a==="TK_SEMICOLON"&&aM(bd.mode)){au="SPACE"}else{if(a==="TK_STRING"){au="NEWLINE"}else{if(a==="TK_WORD"){au="SPACE"}else{if(a==="TK_START_BLOCK"){au="NEWLINE"}else{if(a==="TK_END_EXPR"){aH=true;au="NEWLINE"}}}}}}}if(aA(bf,a7)&&bd.last_text!==")"){if(bd.last_text==="else"){au="SPACE"}else{au="NEWLINE"}}if(a==="TK_COMMA"||a==="TK_START_EXPR"||a==="TK_EQUALS"||a==="TK_OPERATOR"){if(bd.mode!==aK.ObjectLiteral){bj()}}if(aA(bf,["else","catch","finally"])){if(a!=="TK_END_BLOCK"||bc.brace_style==="expand"||bc.brace_style==="end-expand"||bc.brace_style==="expand-strict"){aR()}else{be(true);if(aP[aP.length-1]!=="}"){aR()}aH=true}}else{if(au==="NEWLINE"){if(ay(bd.last_text)){aH=true}else{if(a!=="TK_END_EXPR"){if((a!=="TK_START_EXPR"||bf!=="var")&&bd.last_text!==":"){if(bf==="if"&&bd.last_word==="else"&&bd.last_text!=="{"){aH=true}else{bd.var_line=false;bd.var_line_reindented=false;aR()}}}else{if(aA(bf,a7)&&bd.last_text!==")"){bd.var_line=false;bd.var_line_reindented=false;aR()}}}}else{if(ax(bd.mode)&&bd.last_text===","&&a3==="}"){aR()}else{if(au==="SPACE"){aH=true}}}}aC();bd.last_word=bf;if(bf==="var"){bd.var_line=true;bd.var_line_reindented=false;bd.var_line_tainted=false}if(bf==="do"){bd.do_block=true}if(bf==="if"){bd.if_block=true}}function aI(){while(bd.mode===aK.Statement&&!bd.if_block){bq()}aC();bd.var_line=false;bd.var_line_reindented=false;if(bd.mode===aK.ObjectLiteral){bd.mode=aK.BlockStatement}}function bb(){if(aT()){aH=true}else{if(a==="TK_WORD"){aH=true}else{if(a==="TK_COMMA"||a==="TK_START_EXPR"||a==="TK_EQUALS"||a==="TK_OPERATOR"){if(bd.mode!==aK.ObjectLiteral){bj()}}else{aR()}}}aC()}function az(){if(bd.var_line){bd.var_line_tainted=true}aH=true;aC();aH=true}function aU(){if(bd.var_line){if(aM(bd.mode)||a==="TK_END_BLOCK"){bd.var_line_tainted=false}if(bd.var_line){bd.var_line_reindented=true}aC();if(bd.var_line_tainted){bd.var_line_tainted=false;aR()}else{aH=true}return}if(a==="TK_END_BLOCK"&&bd.mode!==aK.Expression){aC();if(bd.mode===aK.ObjectLiteral&&bd.last_text==="}"){aR()}else{aH=true}}else{if(bd.mode===aK.ObjectLiteral){aC();aR()}else{aC();aH=true}}}function a2(){var f=true;var e=true;if(ay(bd.last_text)){aH=true;aC();return}if(bf==="*"&&a==="TK_DOT"&&!a3.match(/^\d+$/)){aC();return}if(bf===":"&&bd.in_case){bd.case_body=true;bg();aC();aR();bd.in_case=false;return}if(bf==="::"){aC();return}if(a8&&(bf==="--"||bf==="++")){aR()}if(aA(bf,["--","++","!"])||(aA(bf,["-","+"])&&(aA(a,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||aA(bd.last_text,a7)||bd.last_text===","))){f=false;e=false;if(bd.last_text===";"&&aM(bd.mode)){f=true}if(a==="TK_WORD"&&aA(bd.last_text,a7)){f=true}if((bd.mode===aK.BlockStatement||bd.mode===aK.Statement)&&(bd.last_text==="{"||bd.last_text===";")){aR()}}else{if(bf===":"){if(bd.ternary_depth===0){if(bd.mode===aK.BlockStatement){bd.mode=aK.ObjectLiteral}f=false}else{bd.ternary_depth-=1}}else{if(bf==="?"){bd.ternary_depth+=1}}}aH=aH||f;aC();aH=e}function aW(){var e=aN(bf);var f;if(aE(e.slice(1),"*")){aR(false,true);aC(e[0]);for(f=1;f<e.length;f++){aR(false,true);aC(" "+bw(e[f]))}}else{if(e.length>1){aR(false,true)}else{if(a==="TK_END_BLOCK"){aR(false,true)}else{aH=true}}aC(e[0]);aP.push("\n");for(f=1;f<e.length;f++){aP.push(e[f]);aP.push("\n")}}if(!aw("\n")){aR(false,true)}}function av(){aH=true;aC();aH=true}function bk(){if(a8){aR(false,true)}if(bd.last_text===","&&!a8){be(true)}aH=true;aC();aR(false,true)}function aS(){if(ay(bd.last_text)){aH=true}else{bj(bd.last_text===")"&&bc.break_chained_methods)}aC()}function a6(){aC();if(bf[bf.length-1]==="\n"){aR()}}}window.js_beautify=d}());(function(){function a(B,P,G,O){var b,D,F,M,L,c;P=P||{};D=P.indent_size||4;F=P.indent_char||" ";L=P.brace_style||"collapse";M=P.max_char===0?Infinity:P.max_char||250;c=P.unformatted||["a","span","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","pre","address","dt","h1","h2","h3","h4","h5","h6"];function Q(){this.pos=0;this.token="";this.current_mode="CONTENT";this.tags={parent:"parent1",parentcount:1,parent1:""};this.tag_type="";this.token_text=this.last_token=this.last_text=this.token_type="";this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?=".split(","),extra_liners:"head,body,/html".split(","),in_array:function(f,e){for(var d=0;d<e.length;d++){if(f===e[d]){return true}}return false}};this.get_content=function(){var e="",g=[],f=false;while(this.input.charAt(this.pos)!=="<"){if(this.pos>=this.input.length){return g.length?g.join(""):["","TK_EOF"]}e=this.input.charAt(this.pos);this.pos++;this.line_char_count++;if(this.Utils.in_array(e,this.Utils.whitespace)){if(g.length){f=true}this.line_char_count--;continue}else{if(f){if(this.line_char_count>=this.max_char){g.push("\n");for(var d=0;d<this.indent_level;d++){g.push(this.indent_string)}this.line_char_count=0}else{g.push(" ");this.line_char_count++}f=false}}g.push(e)}return g.length?g.join(""):""};this.get_contents_to=function(i){if(this.pos===this.input.length){return["","TK_EOF"]}var e="";var h="";var g=new RegExp("</"+i+"\\s*>","igm");g.lastIndex=this.pos;var d=g.exec(this.input);var f=d?d.index:this.input.length;if(this.pos<f){h=this.input.substring(this.pos,f);this.pos=f}return h};this.record_tag=function(d){if(this.tags[d+"count"]){this.tags[d+"count"]++;this.tags[d+this.tags[d+"count"]]=this.indent_level}else{this.tags[d+"count"]=1;this.tags[d+this.tags[d+"count"]]=this.indent_level}this.tags[d+this.tags[d+"count"]+"parent"]=this.tags.parent;this.tags.parent=d+this.tags[d+"count"]};this.retrieve_tag=function(e){if(this.tags[e+"count"]){var d=this.tags.parent;while(d){if(e+this.tags[e+"count"]===d){break}d=this.tags[d+"parent"]}if(d){this.indent_level=this.tags[e+this.tags[e+"count"]];this.tags.parent=this.tags[d+"parent"]}delete this.tags[e+this.tags[e+"count"]+"parent"];delete this.tags[e+this.tags[e+"count"]];if(this.tags[e+"count"]===1){delete this.tags[e+"count"]}else{this.tags[e+"count"]--}}};this.get_tag=function(i){var o="",l=[],n="",g=false,j,d,f=this.pos,m=this.line_char_count;i=i!==undefined?i:false;do{if(this.pos>=this.input.length){if(i){this.pos=f;this.line_char_count=m}return l.length?l.join(""):["","TK_EOF"]}o=this.input.charAt(this.pos);this.pos++;this.line_char_count++;if(this.Utils.in_array(o,this.Utils.whitespace)){g=true;this.line_char_count--;continue}if(o==="'"||o==='"'){if(!l[1]||l[1]!=="!"){o+=this.get_unformatted(o);g=true}}if(o==="="){g=false}if(l.length&&l[l.length-1]!=="="&&o!==">"&&g){if(this.line_char_count>=this.max_char){this.print_newline(false,l);this.line_char_count=0}else{l.push(" ");this.line_char_count++}g=false}if(o==="<"){j=this.pos-1}l.push(o)}while(o!==">");var h=l.join("");var e;if(h.indexOf(" ")!==-1){e=h.indexOf(" ")}else{e=h.indexOf(">")}var k=h.substring(1,e).toLowerCase();if(h.charAt(h.length-2)==="/"||this.Utils.in_array(k,this.Utils.single_token)){if(!i){this.tag_type="SINGLE"}}else{if(k==="script"){if(!i){this.record_tag(k);this.tag_type="SCRIPT"}}else{if(k==="style"){if(!i){this.record_tag(k);this.tag_type="STYLE"}}else{if(this.is_unformatted(k,c)){n=this.get_unformatted("</"+k+">",h);l.push(n);if(j>0&&this.Utils.in_array(this.input.charAt(j-1),this.Utils.whitespace)){l.splice(0,0,this.input.charAt(j-1))}d=this.pos-1;if(this.Utils.in_array(this.input.charAt(d+1),this.Utils.whitespace)){l.push(this.input.charAt(d+1))}this.tag_type="SINGLE"}else{if(k.charAt(0)==="!"){if(k.indexOf("[if")!==-1){if(h.indexOf("!IE")!==-1){n=this.get_unformatted("-->",h);l.push(n)}if(!i){this.tag_type="START"}}else{if(k.indexOf("[endif")!==-1){this.tag_type="END";this.unindent()}else{if(k.indexOf("[cdata[")!==-1){n=this.get_unformatted("]]>",h);l.push(n);if(!i){this.tag_type="SINGLE"}}else{n=this.get_unformatted("-->",h);l.push(n);this.tag_type="SINGLE"}}}}else{if(!i){if(k.charAt(0)==="/"){this.retrieve_tag(k.substring(1));this.tag_type="END"}else{this.record_tag(k);this.tag_type="START"}if(this.Utils.in_array(k,this.Utils.extra_liners)){this.print_newline(true,this.output)}}}}}}}if(i){this.pos=f;this.line_char_count=m}return l.join("")};this.get_unformatted=function(d,h){if(h&&h.toLowerCase().indexOf(d)!==-1){return""}var e="";var g="";var f=true;do{if(this.pos>=this.input.length){return g}e=this.input.charAt(this.pos);this.pos++;if(this.Utils.in_array(e,this.Utils.whitespace)){if(!f){this.line_char_count--;continue}if(e==="\n"||e==="\r"){g+="\n";this.line_char_count=0;continue}}g+=e;this.line_char_count++;f=true}while(g.toLowerCase().indexOf(d)===-1);return g};this.get_token=function(){var e;if(this.last_token==="TK_TAG_SCRIPT"||this.last_token==="TK_TAG_STYLE"){var d=this.last_token.substr(7);e=this.get_contents_to(d);if(typeof e!=="string"){return e}return[e,"TK_"+d]}if(this.current_mode==="CONTENT"){e=this.get_content();if(typeof e!=="string"){return e}else{return[e,"TK_CONTENT"]}}if(this.current_mode==="TAG"){e=this.get_tag();if(typeof e!=="string"){return e}else{var f="TK_TAG_"+this.tag_type;return[e,f]}}};this.get_full_indent=function(d){d=this.indent_level+d||0;if(d<1){return""}return Array(d+1).join(this.indent_string)};this.is_unformatted=function(g,d){if(!this.Utils.in_array(g,d)){return false}if(g.toLowerCase()!=="a"||!this.Utils.in_array("a",d)){return true}var f=this.get_tag(true);var e=(f||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);if(!e||this.Utils.in_array(e,d)){return true}else{return false}};this.printer=function(h,i,e,f,g){this.input=h||"";this.output=[];this.indent_character=i;this.indent_string="";this.indent_size=e;this.brace_style=g;this.indent_level=0;this.max_char=f;this.line_char_count=0;for(var d=0;d<this.indent_size;d++){this.indent_string+=this.indent_character}this.print_newline=function(j,l){this.line_char_count=0;if(!l||!l.length){return}if(!j){while(this.Utils.in_array(l[l.length-1],this.Utils.whitespace)){l.pop()}}l.push("\n");for(var k=0;k<this.indent_level;k++){l.push(this.indent_string)}};this.print_token=function(j){this.output.push(j)};this.indent=function(){this.indent_level++};this.unindent=function(){if(this.indent_level>0){this.indent_level--}}};return this}b=new Q();b.printer(B,F,D,M,L);while(true){var J=b.get_token();b.token_text=J[0];b.token_type=J[1];if(b.token_type==="TK_EOF"){break}switch(b.token_type){case"TK_TAG_START":b.print_newline(false,b.output);b.print_token(b.token_text);b.indent();b.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":b.print_newline(false,b.output);b.print_token(b.token_text);b.current_mode="CONTENT";break;case"TK_TAG_END":if(b.last_token==="TK_CONTENT"&&b.last_text===""){var t=b.token_text.match(/\w+/)[0];var H=b.output[b.output.length-1].match(/<\s*(\w+)/);if(H===null||H[1]!==t){b.print_newline(true,b.output)}}b.print_token(b.token_text);b.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var R=b.token_text.match(/^\s*<([a-z]+)/i);if(!R||!b.Utils.in_array(R[1],c)){b.print_newline(false,b.output)}b.print_token(b.token_text);b.current_mode="CONTENT";break;case"TK_CONTENT":if(b.token_text!==""){b.print_token(b.token_text)}b.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(b.token_text!==""){b.output.push("\n");var I=b.token_text,C,K=1;if(b.token_type==="TK_SCRIPT"){C=typeof G==="function"&&G}else{if(b.token_type==="TK_STYLE"){C=typeof O==="function"&&O}}if(P.indent_scripts==="keep"){K=0}else{if(P.indent_scripts==="separate"){K=-b.indent_level}}var S=b.get_full_indent(K);if(C){I=C(I.replace(/^\s*/,S),P)}else{var N=I.match(/^\s*/)[0];var E=N.match(/[^\n\r]*$/)[0].split(b.indent_string).length-1;var A=b.get_full_indent(K-E);I=I.replace(/^\s*/,S).replace(/\r\n|\r|\n/g,"\n"+A).replace(/\s*$/,"")}if(I){b.print_token(I);b.print_newline(true,b.output)}}b.current_mode="TAG";break}b.last_token=b.token_type;b.last_text=b.token_text}return b.output.join("")}window.html_beautify=function(b,c){return a(b,c,window.js_beautify,window.css_beautify)}}());(function(){function b(B,S){S=S||{};var D=S.indent_size||4;var U=S.indent_char||" ";if(typeof D==="string"){D=parseInt(D,10)}var P=/^\s+$/;var R=/[\w$\-_]/;var N=-1,J;function F(){J=B.charAt(++N);return J}function E(){return B.charAt(N+1)}function z(d){var c=N;while(F()){if(J==="\\"){F();F()}else{if(J===d){break}else{if(J==="\n"){break}}}}return B.substring(c,N+1)}function V(){var c=N;while(P.test(E())){N++}return N!==c}function a(){var c=N;do{}while(P.test(F()));return N!==c+1}function G(){var c=N;F();while(F()){if(J==="*"&&E()==="/"){N++;break}}return B.substring(c,N+1)}function M(c){return B.substring(N-c.length,N).toLowerCase()===c}var H=B.match(/^[\r\n]*[\t ]*/)[0];var O=Array(D+1).join(U);var C=0;function K(){C++;H+=O}function I(){C--;H=H.slice(0,-D)}var T={};T["{"]=function(c){T.singleSpace();L.push(c);T.newLine()};T["}"]=function(c){T.newLine();L.push(c);T.newLine()};T.newLine=function(c){if(!c){while(P.test(L[L.length-1])){L.pop()}}if(L.length){L.push("\n")}if(H){L.push(H)}};T.singleSpace=function(){if(L.length&&!P.test(L[L.length-1])){L.push(" ")}};var L=[];if(H){L.push(H)}while(true){var Q=a();if(!J){break}if(J==="{"){K();T["{"](J)}else{if(J==="}"){I();T["}"](J)}else{if(J==='"'||J==="'"){L.push(z(J))}else{if(J===";"){L.push(J,"\n",H)}else{if(J==="/"&&E()==="*"){T.newLine();L.push(G(),"\n",H)}else{if(J==="("){if(M("url")){L.push(J);V();if(F()){if(J!==")"&&J!=='"'&&J!=="'"){L.push(z(")"))}else{N--}}}else{if(Q){T.singleSpace()}L.push(J);V()}}else{if(J===")"){L.push(J)}else{if(J===","){V();L.push(J);T.singleSpace()}else{if(J==="]"){L.push(J)}else{if(J==="["||J==="="){V();L.push(J)}else{if(Q){T.singleSpace()}L.push(J)}}}}}}}}}}}var A=L.join("").replace(/[\n ]+$/,"");return A}window.css_beautify=b}());


/*

 JS Beautifier ??????;
---------------
  $Date: 2008-06-10 14:49:11 +0300 (Tue, 10 Jun 2008) $
  $Revision: 60 $  Written by Einars "elfz" Lielmanis, <elfz@laacz.lv> 
      http://elfz.laacz.lv/beautify/

  Originally converted to javascript by Vital, <vital76@gmail.com> 
      http://my.opera.com/Vital/blog/2007/11/21/javascript-beautify-on-javascript-translated  You are free to use this in any way you want, in case you find this useful or working for you.

  Usage:
    js_beautify(js_source_text);

*/
window.js_beautify = (function() { return function(js_source_text, indent_size, indent_character, indent_level) {
	var input, output, token_text, last_type, last_text, last_word, current_mode, modes, indent_string;
	var whitespace, wordchar, punct, parser_pos, line_starters, in_case;
	var prefix, token_type, do_block_just_closed, var_line, var_line_tainted;
	function trim_output() {
		while (output.length && (output[output.length - 1] === ' ' || output[output.length - 1] === indent_string)) {
			output.pop();
		}
	}
	function print_newline(ignore_repeated) {
		ignore_repeated = typeof ignore_repeated === 'undefined' ? true : ignore_repeated;

		trim_output();

		if (!output.length) {
			return; // no newline on start of file
		}
		if (output[output.length - 1] !== "\n" || !ignore_repeated) {
			output.push("\n");
		}
		for (var i = 0; i < indent_level; i++) {
			output.push(indent_string);
		}
	}
	function print_space() {
		var last_output = output.length ? output[output.length - 1] : ' ';
		if (last_output !== ' ' && last_output !== '\n' && last_output !== indent_string) { // prevent occassional duplicate space
			output.push(' ');
		}
	}
	function print_token() {
		output.push(token_text);
	}
	function indent() {
		indent_level++;
	}
	function unindent() {
		if (indent_level) {
			indent_level--;
		}
	}
	function remove_indent() {
		if (output.length && output[output.length - 1] === indent_string) {
			output.pop();
		}
	}	
	function set_mode(mode) {
		modes.push(current_mode);
		current_mode = mode;
	}	
	function restore_mode() {
		do_block_just_closed = current_mode === 'DO_BLOCK';
		current_mode = modes.pop();
	}	
	function in_array(what, arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === what) {
				return true;
			}
		}
		return false;
	}
	function get_next_token() {
		var n_newlines = 0;
		var c = '';
		do {
			if (parser_pos >= input.length) {
				return ['', 'TK_EOF'];
			}
			c = input.charAt(parser_pos);
			parser_pos += 1;
			if (c === "\n") {
				n_newlines += 1;
			}
		}
		while (in_array(c, whitespace));
		if (n_newlines > 1) {
			for (var i = 0; i < 2; i++) {
				print_newline(i === 0);
			}
		}
		var wanted_newline = (n_newlines === 1);		if (in_array(c, wordchar)) {
			if (parser_pos < input.length) {
				while (in_array(input.charAt(parser_pos), wordchar)) {
					c += input.charAt(parser_pos);
					parser_pos += 1;
					if (parser_pos === input.length) {
						break;
					}
				}
			}
			// small and surprisingly unugly hack for 1E-10 representation
			if (parser_pos !== input.length && c.match(/^[0-9]+[Ee]$/) && input.charAt(parser_pos) === '-') {
				parser_pos += 1;

				var t = get_next_token(parser_pos);
				c += '-' + t[0];
				return [c, 'TK_WORD'];
			}

			if (c === 'in') { // hack for 'in' operator
				return [c, 'TK_OPERATOR'];
			}
			return [c, 'TK_WORD'];
		}
		if (c === '(' || c === '[') {
			return [c, 'TK_START_EXPR'];
		}
		if (c === ')' || c === ']') {
			return [c, 'TK_END_EXPR'];
		}
		if (c === '{') {
			return [c, 'TK_START_BLOCK'];
		}
		if (c === '}') {
			return [c, 'TK_END_BLOCK'];
		}
		if (c === ';') {
			return [c, 'TK_END_COMMAND'];
		}
		if (c === '/') {
			var comment = '';
			// peek for comment /* ... */
			if (input.charAt(parser_pos) === '*') {
				parser_pos += 1;
				if (parser_pos < input.length) {
					while (!(input.charAt(parser_pos) === '*' && input.charAt(parser_pos + 1) && input.charAt(parser_pos + 1) === '/') && parser_pos < input.length) {
						comment += input.charAt(parser_pos);
						parser_pos += 1;
						if (parser_pos >= input.length) {
							break;
						}
					}
				}
				parser_pos += 2;
				return ['/*' + comment + '*/', 'TK_BLOCK_COMMENT'];
			}
			// peek for comment // ...
			if (input.charAt(parser_pos) === '/') {
				comment = c;
				while (input.charAt(parser_pos) !== "\x0d" && input.charAt(parser_pos) !== "\x0a") {
					comment += input.charAt(parser_pos);
					parser_pos += 1;
					if (parser_pos >= input.length) {
						break;
					}
				}
				parser_pos += 1;
				if (wanted_newline) {
					print_newline();
				}
				return [comment, 'TK_COMMENT'];
			}

		}
		if (c === "'" || // string
			c === '"' || // string
			(c === '/' &&
				((last_type === 'TK_WORD' && last_text === 'return') || (last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || last_type === 'TK_OPERATOR' || last_type === 'TK_EOF' || last_type === 'TK_END_COMMAND')))) { // regexp
			var sep = c;
			var esc = false;
			c = '';

			if (parser_pos < input.length) {

				while (esc || input.charAt(parser_pos) !== sep) {
					c += input.charAt(parser_pos);
					if (!esc) {
						esc = input.charAt(parser_pos) === '\\';
					} else {
						esc = false;
					}
					parser_pos += 1;
					if (parser_pos >= input.length) {
						break;
					}
				}

			}

			parser_pos += 1;
			if (last_type === 'TK_END_COMMAND') {
				print_newline();
			}
			return [sep + c + sep, 'TK_STRING'];
		}
		if (in_array(c, punct)) {
			while (parser_pos < input.length && in_array(c + input.charAt(parser_pos), punct)) {
				c += input.charAt(parser_pos);
				parser_pos += 1;
				if (parser_pos >= input.length) {
					break;
				}
			}
			return [c, 'TK_OPERATOR'];
		}

		return [c, 'TK_UNKNOWN'];
	}	//----------------------------------

	indent_character = indent_character || ' ';
	indent_size = indent_size || 4;

	indent_string = '';
	while (indent_size--) {
		indent_string += indent_character;
	}

	input = js_source_text;

	last_word = ''; // last 'TK_WORD' passed
	last_type = 'TK_START_EXPR'; // last token type
	last_text = ''; // last token text
	output = [];

	do_block_just_closed = false;
	var_line = false;
	var_line_tainted = false;

	whitespace = "\n\r\t ".split('');
	wordchar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$'.split('');
	punct = '+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |='.split(' ');

	// words which should always start on new line.
	line_starters = 'continue,try,throw,return,var,if,switch,case,default,for,while,break,function'.split(',');

	// states showing if we are currently in expression (i.e. "if" case) - 'EXPRESSION', or in usual block (like, procedure), 'BLOCK'.
	// some formatting depends on that.
	current_mode = 'BLOCK';
	modes = [current_mode];

	indent_level = indent_level || 0;
	parser_pos = 0; // parser position
	in_case = false; // flag for parser that case/default has been processed, and next colon needs special attention
	while (true) {
		var t = get_next_token(parser_pos);
		token_text = t[0];
		token_type = t[1];
		if (token_type === 'TK_EOF') {
			break;
		}

		switch (token_type) {

			case 'TK_START_EXPR':
				var_line = false;
				set_mode('EXPRESSION');
				if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR') {
					// do nothing on (( and )( and ][ and ]( ..
				} else if (last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
					print_space();
				} else if (in_array(last_word, line_starters) && last_word !== 'function') {
					print_space();
				}
				print_token();
				break;

			case 'TK_END_EXPR':
				print_token();
				restore_mode();
				break;

			case 'TK_START_BLOCK':

				if (last_word === 'do') {
					set_mode('DO_BLOCK');
				} else {
					set_mode('BLOCK');
				}
				if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
					if (last_type === 'TK_START_BLOCK') {
						print_newline();
					} else {
						print_space();
					}
				}
				print_token();
				indent();
				break;

			case 'TK_END_BLOCK':
				if (last_type === 'TK_START_BLOCK') {
					// nothing
					trim_output();
					unindent();
				} else {
					unindent();
					print_newline();
				}
				print_token();
				restore_mode();
				break;

			case 'TK_WORD':

				if (do_block_just_closed) {
					print_space();
					print_token();
					print_space();
					break;
				}

				if (token_text === 'case' || token_text === 'default') {
					if (last_text === ':') {
						// switch cases following one another
						remove_indent();
					} else {
						// case statement starts in the same line where switch
						unindent();
						print_newline();
						indent();
					}
					print_token();
					in_case = true;
					break;
				}				prefix = 'NONE';
				if (last_type === 'TK_END_BLOCK') {
					if (!in_array(token_text.toLowerCase(), ['else', 'catch', 'finally'])) {
						prefix = 'NEWLINE';
					} else {
						prefix = 'SPACE';
						print_space();
					}
				} else if (last_type === 'TK_END_COMMAND' && (current_mode === 'BLOCK' || current_mode === 'DO_BLOCK')) {
					prefix = 'NEWLINE';
				} else if (last_type === 'TK_END_COMMAND' && current_mode === 'EXPRESSION') {
					prefix = 'SPACE';
				} else if (last_type === 'TK_WORD') {
					prefix = 'SPACE';
				} else if (last_type === 'TK_START_BLOCK') {
					prefix = 'NEWLINE';
				} else if (last_type === 'TK_END_EXPR') {
					print_space();
					prefix = 'NEWLINE';
				}

				if (last_type !== 'TK_END_BLOCK' && in_array(token_text.toLowerCase(), ['else', 'catch', 'finally'])) {
					print_newline();
				} else if (in_array(token_text, line_starters) || prefix === 'NEWLINE') {
					if (last_text === 'else') {
						// no need to force newline on else break
						print_space();
					} else if ((last_type === 'TK_START_EXPR' || last_text === '=') && token_text === 'function') {
						// no need to force newline on 'function': (function
						// DONOTHING
					} else if (last_type === 'TK_WORD' && (last_text === 'return' || last_text === 'throw')) {
						// no newline between 'return nnn'
						print_space();
					} else if (last_type !== 'TK_END_EXPR') {
						if ((last_type !== 'TK_START_EXPR' || token_text !== 'var') && last_text !== ':') {
							// no need to force newline on 'var': for (var x = 0...)
							if (token_text === 'if' && last_type === 'TK_WORD' && last_word === 'else') {
								// no newline for } else if {
								print_space();
							} else {
								print_newline();
							}
						}
					} else {
						if (in_array(token_text, line_starters) && last_text !== ')') {
							print_newline();
						}
					}
				} else if (prefix === 'SPACE') {
					print_space();
				}
				print_token();
				last_word = token_text;

				if (token_text === 'var') {
					var_line = true;
					var_line_tainted = false;
				}

				break;

			case 'TK_END_COMMAND':

				print_token();
				var_line = false;
				break;

			case 'TK_STRING':

				if (last_type === 'TK_START_BLOCK' || last_type === 'TK_END_BLOCK') {
					print_newline();
				} else if (last_type === 'TK_WORD') {
					print_space();
				}
				print_token();
				break;

			case 'TK_OPERATOR':

				var start_delim = true;
				var end_delim = true;
				if (var_line && token_text !== ',') {
					var_line_tainted = true;
					if (token_text === ':') {
						var_line = false;
					}
				}

				if (token_text === ':' && in_case) {
					print_token(); // colon really asks for separate treatment
					print_newline();
					break;
				}

				in_case = false;

				if (token_text === ',') {
					if (var_line) {
						if (var_line_tainted) {
							print_token();
							print_newline();
							var_line_tainted = false;
						} else {
							print_token();
							print_space();
						}
					} else if (last_type === 'TK_END_BLOCK') {
						print_token();
						print_newline();
					} else {
						if (current_mode === 'BLOCK') {
							print_token();
							print_newline();
						} else {
							// EXPR od DO_BLOCK
							print_token();
							print_space();
						}
					}
					break;
				} else if (token_text === '--' || token_text === '++') { // unary operators special case
					if (last_text === ';') {
						// space for (;; ++i)
						start_delim = true;
						end_delim = false;
					} else {
						start_delim = false;
						end_delim = false;
					}
				} else if (token_text === '!' && last_type === 'TK_START_EXPR') {
					// special case handling: if (!a)
					start_delim = false;
					end_delim = false;
				} else if (last_type === 'TK_OPERATOR') {
					start_delim = false;
					end_delim = false;
				} else if (last_type === 'TK_END_EXPR') {
					start_delim = true;
					end_delim = true;
				} else if (token_text === '.') {
					// decimal digits or object.property
					start_delim = false;
					end_delim = false;

				} else if (token_text === ':') {
					// zz: xx
					// can't differentiate ternary op, so for now it's a ? b: c; without space before colon
					if (last_text.match(/^\d+$/)) {
						// a little help for ternary a ? 1 : 0;
						start_delim = true;
					} else {
						start_delim = false;
					}
				}
				if (start_delim) {
					print_space();
				}

				print_token();

				if (end_delim) {
					print_space();
				}
				break;

			case 'TK_BLOCK_COMMENT':

				print_newline();
				print_token();
				print_newline();
				break;

			case 'TK_COMMENT':

				// print_newline();
				print_space();
				print_token();
				print_newline();
				break;

			case 'TK_UNKNOWN':
				print_token();
				break;
		}
		last_type = token_type;
		last_text = token_text;
	}
	return output.join('');
}
})();