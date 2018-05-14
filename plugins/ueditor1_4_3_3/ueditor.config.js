! function() {
    function a(a, d) {
        return c(a || self.document.URL || self.location.href, d || b())
    }

    function b() {
        var a = document.getElementsByTagName("script");
        return a[a.length - 1].src
    }

    function c(a, b) {
        var c = b;
        return /^(\/|\\\\)/.test(b) ? c = /^.+?\w(\/|\\\\)/.exec(a)[0] + b.replace(/^(\/|\\\\)/, "") : /^[a-z]+:/i.test(
            b) || (a = a.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, ""), c = a + "" + b), d(c)
    }

    function d(a) {
        var b = /^[a-z]+:\/\//.exec(a)[0],
            c = null,
            d = [];
        for (a = a.replace(b, "").split("?")[0].split("#")[0], a = a.replace(/\\/g, "/").split(/\//), a[a.length - 1] =
            ""; a.length;) ".." === (c = a.shift()) ? d.pop() : "." !== c && d.push(c);
        return b + d.join("/")
    }
    var e = window.UEDITOR_HOME_URL || a();
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL: e,
        serverUrl: '/javascript/lib/ueditor/jsp/controller.jsp',
        toolbars: [
            ["undo", "redo", "|", "fontsize", "blockquote", "|", "removeformat", "formatmatch", "|", "link", "emotion", "spechars", "superscript", "subscript", "|", "PastePlain", "directionalityltr", "directionalityrtl", "|", 'touppercase', 'tolowercase', ],
            ["bold", "italic", "underline", "forecolor", "shadowcolor", "backcolor", "|", "indent", "lineheight", 'letterspacing', 'outpadding', "rowspacingtop", "rowspacingbottom", "|", "justifyleft", "justifycenter", "justifyright", "justifyjustify", ],
            ["insertorderedlist", "insertunorderedlist", "|", "autotypeset", "insertvideo", "music", 'background', 'insertimage', "horizontal", "searchreplace", "|", "source", ]
        ],
				pasteplain:false,
        zIndex: 0,
        charset: "utf-8",
        textarea: "content",
//      initialStyle: "body{background:url(images/ue_bg.jpg) no-repeat;}",
        autoClearEmptyNode: !1,
        enableAutoSave: true,//自动保存
        saveInterval: 5e6,
        imagePopup: !0,
        emotionLocalization: !0,
        insertorderedlist: {
            decimal: "",
            "lower-alpha": "",
            "lower-roman": "",
            "upper-alpha": "",
            "upper-roman": "",
            "cjk-ideographic": "一、二、三、",
            "lower-greek": "α,β,γ,δ"
        },
        insertunorderedlist: {
            circle: "",
            disc: "",
            square: ""
        },
        listDefaultPaddingLeft: "30",
        maxListLevel: -1,
        autoTransWordToList: !0,
        fontfamily: [{
            label: "",
            name: "yahei",
            val: "微软雅黑"
        }, {
            label: "",
            name: "songti",
            val: "宋体,SimSun"
        }, {
            label: "",
            name: "kaiti",
            val: "楷体,楷体_GB2312,SimKai"
        }, {
            label: "",
            name: "heiti",
            val: "黑体,SimHei"
        }, {
            label: "",
            name: "lishu",
            val: "隶书,SimLi"
        }, {
            label: "",
            name: "arial",
            val: "arial,helvetica,sans-serif"
        }],
        fontsize: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 28, 32, 36],
        letterspacing: [0, 0.5, 1, 1.5, 2, 3, 4, 5],
        enableContextMenu: !0,
        elementPathEnabled: !1,
        wordCount: !1,
        removeFormatTags: "br,a,b,big,code,del,dfn,em,font,i,section,blockquote,pre,fieldset,ins,kbd,q,samp,small,span,label,strike,strong,sub,sup,tt,u,var",
        removeFormatAttributes: "lang,width,accuse,height,align,hspace,valign,data-width,data-brushtype,opacity,border,title,placeholder",
        maxUndoCount: 50,
        autoHeightEnabled: !1,
        //initialFrameHeight:700,//编辑器高度
        initialFrameWidth:500,
        scaleEnabled: !1,
        imageScaleEnabled: !1,
        autoFloatEnabled: !1,
        autotypeset: {
            mergeEmptyline: !0,
            removeClass: !1,
            removeEmptyline: 1,
            textAlign: !1,
            imageBlockLine: !1,
            pasteFilter: !1,
            clearFontSize: !1,
            clearFontFamily: !1,
            removeEmptyNode: !1,
            indent: !1,
            indentValue: "2em",
            bdc2sb: !1,
            tobdc: !1
        },
        sourceEditor: "codemirror",
        catchRemoteImageEnable: true
    }, window.UE = {
        getUEBasePath: a
    }
}();