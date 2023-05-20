import {I18nConfig} from "@editorjs/editorjs/types/configs/i18n-config";


const I18nConfig: I18nConfig = {
    messages: {
        ui: {
            toolbar: {
                toolbox: {
                    "Add": "添加",
                    "Delete": "删除",
                    "Heading 1": "标题1",

                },
                "Filter": "过滤",
            }
        },
        blockTunes: {
            delete: {
                "Delete": "删除"
            },
            moveUp: {
                "Move up": "上移"
            },
            moveDown: {
                "Move down": "下移"
            },

            toolbar: {
                toolbox: {
                    "Unordered": "无序列表",
                    "Ordered": "有序列表",
                },
                header: {
                    "Heading 1": "标题1",
                },
            }
        },
        toolNames: {
            Text: '文本',
            Heading: '标题',
            List: '列表',
            Image: '图片',
        }
    }

}
export default I18nConfig;