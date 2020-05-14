var app = new Vue({
    el: '#app',
    data: function () {
        return {
            // title: 'WeChat Format',
            title: '公众号Markdown编辑器',
            aboutOutput: '阿斯顿发',
            output: '',
            source: '',
            editorThemes: [
                {label: 'base16-light', value: 'base16-light'},
                {label: 'duotone-light', value: 'duotone-light'},
                {label: 'monokai', value: 'monokai'}
            ],
            currentEditorTheme: 'base16-light',
            editor: null,
            builtinFonts: [
                {
                    label: '衬线',
                    value: "Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                },
                {
                    label: '无衬线',
                    value: "Roboto, Oxygen, Ubuntu, Cantarell, PingFangSC-light, PingFangTC-light, 'Open Sans', 'Helvetica Neue', sans-serif"
                }
            ],
            currentFont: "Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            currentSize: '16px',
            sizeOption: [
                {label: '15px', value: '15px', desc: '15px'},
                {label: '16px', value: '16px', desc: '默认'},
                {label: '17px', value: '17px', desc: '正常'},
                {label: '18px', value: '18px', desc: '稍大'}
            ],
            currentTheme: 'hwq',
            themeOption: [
                {label: 'default', value: 'default', author: 'Lyric'},
                {label: 'hwq', value: 'hwq', author: '黄文清'}
            ],
            styleThemes: {
                default: defaultTheme,
                hwq: hwqTheme
            },
            aboutDialogVisible: false,
            showHtmlSource: false,
        }
    },
    mounted() {
        var self = this
        window.addEventListener("beforeunload", function (event) {
            // Cancel the event as stated by the standard.
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = '';
        });

        this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
            lineNumbers: false,
            lineWrapping: true,
            styleActiveLine: true,
            theme: this.currentEditorTheme,
            mode: 'text/x-markdown',
        });
        this.editor.on("change", function (cm, change) {
            self.refresh()
        })
        // this.currentFont = this.builtinFonts[0],
        this.wxRenderer = new WxRenderer({
            theme: this.styleThemes.hwq,
            fonts: this.currentFont,
            size: this.currentSize
        })

        let cacheText = localStorage.getItem('EditorCache');
        if (cacheText) {
            self.editor.setValue(cacheText)
        } else {
            axios({
                method: 'get',
                url: './assets/default-content-hwq.md',
            }).then(function (resp) {
                self.editor.setValue(resp.data)
            })
        }
    },
    methods: {
        renderWeChat: function (source) {
            var output = marked(source, {renderer: this.wxRenderer.getRenderer()})
            if (this.wxRenderer.hasFootnotes()) {
                output += this.wxRenderer.buildFootnotes()
            }
            return output
        },
        editorThemeChanged: function (editorTheme) {
            this.editor.setOption('theme', editorTheme)
        },
        fontChanged: function (fonts) {
            this.wxRenderer.setOptions({
                fonts: fonts
            })
            this.refresh()
        },
        sizeChanged: function (size) {
            this.wxRenderer.setOptions({
                size: size
            })
            this.refresh()
        },
        themeChanged: function (themeName) {
            var themeName = themeName;
            var themeObject = this.styleThemes[themeName];
            this.wxRenderer.setOptions({
                theme: themeObject
            })
            this.refresh()
        },
        refresh: function () {
            let text = this.editor.getValue();
            this.output = this.renderWeChat(text);
            localStorage.setItem("EditorCache", text);//以“key”为名称存储一个值“value”
        },
        copy: function () {
            var clipboardDiv = document.getElementById('output')
            clipboardDiv.focus();
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            range.setStartBefore(clipboardDiv.firstChild);
            range.setEndAfter(clipboardDiv.lastChild);
            window.getSelection().addRange(range);

            try {
                if (document.execCommand('copy')) {
                    this.$message({
                        message: '已复制到剪贴板', type: 'success'
                    })
                } else {
                    this.$message({
                        message: '未能复制到剪贴板，请全选后右键复制', type: 'warning'
                    })
                }
            } catch (err) {
                this.$message({
                    message: '未能复制到剪贴板，请全选后右键复制', type: 'warning'
                })
            }
        },
        save() {
            this.$message({
                message: '已暂存！', type: 'success'
            })
        },
        resetTemplate() {
            var self = this
            axios({
                method: 'get',
                url: './assets/default-content-hwq.md',
            }).then(function (resp) {
                self.editor.setValue(resp.data)
            })
        }
    }
})