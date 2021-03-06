// ==UserScript==
// @name           Douban Movie & Book Download Search
// @namespace      Douban Movie & Book Download Search
// @description    Douban Movie & Book Download Search
// @match        http://movie.douban.com/subject/*
// @match        http://book.douban.com/subject/*
// @match        https://movie.douban.com/subject/*
// @match        https://book.douban.com/subject/*
// @version    1.6
// @copyright  2012+, ytzong
// ==/UserScript==

var movieTitle = jQuery('h1 span:eq(0)').text();

var downloadContent;

if (document.domain == 'book.douban.com') {
	downloadContent = '<div><span class="pl">下载链接:</span> <a href="https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=' + movieTitle + '+azw3" target="_balnk">azw3</a> / <a href="https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=' + movieTitle + '+mobi" target="_balnk">mobi</a> / <a href="https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=' + movieTitle + '+epub" target="_balnk">epub</a> / <a href="http://readcolor.com/books/search?utf8=%E2%9C%93&s=' + movieTitle + '" target="_balnk">readfar</a><div>';
}
else {
	downloadContent = '<div><span class="pl">下载链接:</span> <a href="http://www.btexe.org/search?kw=' + movieTitle + '" target="_balnk">BT磁力</a> / <a href="http://www.btbtt.co/search-index-keyword-' + movieTitle + '.htm" target="_balnk">BTbbT</a> / <a href="http://zhannei.baidu.com/cse/search?s=11180302771993919822&entry=1&q=' + movieTitle + '" target="_balnk">天天美剧</a> / <a href="https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=' + movieTitle + '+1080p" target="_balnk">Google</a><br><span class="pl">字幕链接:</span> <a href="http://subhd.com/search/' + movieTitle + '" target="_balnk">SubHD</a> / <a href="http://www.zimuzu.tv/search?type=subtitle&keyword=' + movieTitle + '" target="_balnk">字幕组</a> / <a href="http://www.zimuku.net/search?q=' + movieTitle + '" target="_balnk">字幕库</a> / <a href="http://sub.makedie.me/sub/?searchword=' + movieTitle + '" target="_balnk">伪射手</a><div>';
}

jQuery('#info').append(downloadContent);
