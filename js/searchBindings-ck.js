/*global javascripture*/(function(e){function t(t){var r=new Date,o="",u=t.lemma.replace(/ /gi,""),a=i(t,"_");s(t);strongsNumberArray=t.lemma.split(" ");e("#referenceTracking .collapsable").addClass("closed");e("#referenceTracking #"+a).removeClass("closed");searchApi.getReferences(t);searchApi.deferred.done(function(){var t=searchApi.results.references;o+='<form><ol class="references">';var i=0,s=javascripture.data.english;if(e("select[name=searchLanguage]").val()==="hebrew"){s=javascripture.data.hebrew;e.each(strongsNumberArray,function(e,t){parseFloat(t.substring(1,t.length))>0&&(strongsNumberArray[e]=t.substring(2,t.length))})}o+=n(t);o+="</ol></form>";e("#referenceTracking #"+a+" form").length<=0&&e("#referenceTracking #"+a+" .referenceList").html(o);goToFirstReference();var u=new Date;timer(r,u)})}function r(e,t){var n="";e.word&&(n+=e.word.replace(/ /gi,t));if(e.lemma){n+=t+e.lemma.replace(/ /gi,t);javascripture.data.strongsDictionary[e.lemma]&&(n+=t+javascripture.modules.hebrew.stripPointing(javascripture.data.strongsDictionary[e.lemma].lemma))}e.morph&&(n+=t+e.morph.replace(/ /gi,t));return n}function i(t){var n="";e.each(t,function(e,t){t!==""&&(n+=t.replace(/ /gi,"_")+"_")});return n}function s(t,n){var s=i(t),o="";if(e("#"+s).length===0){var u=r(t," "),a=javascripture.modules.reference.getFamily(t.lemma),f=parseFloat(a.substring(1,a.length),10),l="";e.each(t,function(e,t){l+=e+": "+t+"\r\n"});o+='<div class="collapsable" id="'+s+'" class="'+a+'" title="'+l+'"><style></style><h2 class="'+a+'">'+u;o+='<a aria-hidden="true" class="icon-cross remove"></a></h2><div class="referenceList"><div id="searchLoading">Searching...</div></div></div>';e("#referenceTracking").append(o);if(t.lemma){var c="";if(f>0){var h=javascripture.modules.colors.getStrongsColor(f);c=javascripture.modules.colors.getStrongsStyle(a,h)}if(f>0){e("#"+s+" style").html(c);e("#changeColor #colorFormStrongsNumber").val(t.lemma);var p=e("#"+s+" ."+t.lemma).css("background-color");e("#changeColor #colorFormColor").val(p)}}}}function o(e){var t=e.book,n=e.chapter,r=e.verse;return'<li><a href="#book='+t+"&chapter="+n+"&verse="+r+'">'+t+" "+n+":"+r+"</a></li>"}function u(n){var r=e(n).data();r.word="";r.morph="";r.lemma=r.lemma.replace("G3588 ","");t(r)}e.fn.serializeObject=function(){var t={},n=this.serializeArray();e.each(n,function(){if(t[this.name]!==undefined){t[this.name].push||(t[this.name]=[t[this.name]]);t[this.name].push(this.value||"")}else t[this.name]=this.value||""});return t};var n=function(t){var n="";e.each(t,function(e,t){n+=o(t)});return n};e(document).on("click",".wordControlPanelStrongsNumber",function(){u(this)});e(document).on("dblclick","#verse ol > li span",function(){u(this)});e("form.search").submit(function(n){n.preventDefault();t(e(this).serializeObject());e(".popup").popup("close")});e(document).on("click","a.word-tree",function(n){n.preventDefault();t(e(this).data())});e(document).on("click","a.kjv-def",function(n){n.preventDefault();t(e(this).data())})})(jQuery);